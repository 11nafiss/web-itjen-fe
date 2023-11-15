// Import Library
import { useEffect, useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Grid, Box, Pagination, PaginationItem } from "@mui/material";
import { AspectRatio, IconButton, Card, CardOverflow, Divider, Typography, Input, FormControl } from "@mui/joy";
import { styled } from "@mui/material/styles";

// Import Components
import { AddButton } from "../../../../components/components";

// Import Assets
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { FaSearch } from "react-icons/fa";
import { LoadingOutlined } from "@ant-design/icons";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { getImageAllTake, getImageAllCount, getImageSearchCount, getImageSearchAll, deleteImage } from "../../../../features/actions/image.action";
import { BASE_URL } from "../../../../services/api";
import { imageSearchAllSlice } from "../../../../features/slice/image.slice";

// MUI Styling CSS
const CustomBox = styled(Box)(() => ({
  borderRadius: "15px",
  backgroundColor: "#fff",
  width: "100%",
  maxWidth: "1400px",
  minHeight: "555px",
  padding: "30px",
}));

const CustomTitle = styled(Typography)(() => ({
  fontSize: "30px",
  fontWeight: "700",
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
  height: "100%",
  margin: "10px",
}));

const SpaceGrid = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "right",
  width: "100%",
}));

const GridFlex = styled(Grid)(() => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "60px",
}));

// Main Declaration
const ImageDash = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const take = 8;

  const dataSearch = useAppSelector((state) => state.image.imageSearchAll.dataImage);
  const isLoading = useAppSelector((state) => state.image.imageAllTake.isLoading);
  const dataImage = useAppSelector((state) => state.image.imageAllTake.dataImage);
  const jumlahImage = useAppSelector((state) => state.image.imageAllCount.dataImage);
  const pageCount = jumlahImage/take;

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    const keyword = searchParams.get("keyword");
    dispatch(getImageSearchAll({ take, page, keyword }));
    dispatch(getImageAllTake({ take, page }));
    dispatch(getImageAllCount());
  }, [dispatch, searchParams, isLoading]);


  const handlePageChange = (event, value) => {
    let updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set("page", value);

    dispatch(getImageAllTake({ take, page: value }));
    dispatch(getImageAllCount());
  };


  function handleSubmit(event) {
    event.preventDefault();
    const page = searchParams.get("page") ?? 1;
    let updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set("keyword", searchInput);

    dispatch(imageSearchAllSlice.actions.setSearchKeyword(searchInput));
    dispatch(getImageSearchAll({ take, page, keyword: searchInput }));
    dispatch(getImageSearchCount({ searchInput }));
    setSearchParams(updatedSearchParams.toString());

    if (searchInput === "" || searchInput == null) {
      navigate("/dashboard/gambar?page=1");
      dispatch(getImageAllCount());
    }
  }

  const handleDeleteImage = (id) => {
    const confirmation = confirm("Apakah anda yakin untuk menghapus data ini?");

    navigate(0);

    setLoading(true);

    if (confirmation) {
      dispatch(deleteImage(id));
      setLoading(false);
    }
  };

  // Main Code
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#D9D9D9", height: "100%" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <CustomBox>
            <CustomTitle>Daftar Gambar</CustomTitle>
            <Divider sx={{ borderSize: "20px" }} />
            <SpaceGrid container>
              <GridFlex item xs={12} md={6} sx={{ justifyContent: { xs: "left" } }}>
                <Link to="/dashboard/gambar/tambah">
                  <AddButton />
                </Link>
              </GridFlex>
              <GridFlex item xs={12} md={6} sx={{ justifyContent: { xs: "center", md: "right" } }}>
                <form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "right", width: "100%" }}>
                  <FormControl
                    sx={() => ({
                      display: "flex",
                      justifyContent: "right",
                      width: { xs: "100%", md: "300px" },
                    })}
                  >
                    <Input
                      placeholder="Cari"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      endDecorator={
                        <IconButton color="neutral" sx={{ width: "100%", height: "100%" }}>
                          <FaSearch />
                        </IconButton>
                      }
                      sx={{
                        width: "100%",
                        height: "30px",
                        borderColor: "#252525",
                        borderWidth: "3px",
                        margin: "12px 0px",
                      }}
                    />
                  </FormControl>
                </form>
              </GridFlex>
              <GridFlex item xs={12} md={12} sx={{ justifyContent: { xs: "center", md: "left" }, height: "100%" }}>
                <Box sx={{ height: "100%", paddingTop: "30px", display: "grid", gap: "30px", width: "100%", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr 1fr" } }}>
                  {isLoading && (
                    <LoadingOutlined
                      className="loadingIcon transition-5"
                      style={{
                        ...{
                          zIndex: loading ? "10" : "-1",
                          opacity: loading ? "0.33" : "0",
                          fontSize: "82px",
                          top: "calc(50% - 41px)",
                          left: "calc(50% - 41px)",
                        },
                      }}
                    />
                  )}
                  {dataSearch.length === 0 &&
                    dataImage.map((obj, index) => (
                      <Card key={index} variant="outlined" sx={{ width: 300, gap: "0px", height: "100%" }}>
                        <CardOverflow>
                          <AspectRatio ratio="16/9">
                            <img src={`${BASE_URL}images/${obj.namaFile}`} loading="lazy" alt="" />
                          </AspectRatio>
                          <Link to={`/dashboard/gambar/edit/${obj.id}`}>
                            <IconButton
                              aria-label="Like minimal photography"
                              size="md"
                              variant="solid"
                              color="warning"
                              sx={{
                                position: "absolute",
                                zIndex: 2,
                                borderRadius: "50%",
                                right: "4rem",
                                bottom: 0,
                                transform: "translateY(50%)",
                              }}
                            >
                              <EditIcon />
                            </IconButton>
                          </Link>
                          <IconButton
                            onClick={() => handleDeleteImage(obj.id)}
                            aria-label="Like minimal photography"
                            size="md"
                            variant="solid"
                            color="danger"
                            sx={{
                              position: "absolute",
                              zIndex: 2,
                              borderRadius: "50%",
                              right: "1rem",
                              bottom: 0,
                              transform: "translateY(50%)",
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </CardOverflow>
                        <Typography level="h2" sx={{ fontSize: "16px", mt: "40px", mb: "10px" }}>
                          {obj.namaFile.toString()}
                        </Typography>
                      </Card>
                    ))}
                  {dataSearch.length !== 0 &&
                    dataSearch.map((obj, index) => (
                      <Card key={index} variant="outlined" sx={{ width: 300, gap: "0px", height: "100%" }}>
                        <CardOverflow>
                          <AspectRatio ratio="16/9">
                            <img src={`${BASE_URL}images/${obj.namaFile}`} loading="lazy" alt="" />
                          </AspectRatio>
                          <Link to={`/dashboard/gambar/edit/${obj.id}`}>
                            <IconButton
                              aria-label="Like minimal photography"
                              size="md"
                              variant="solid"
                              color="warning"
                              sx={{
                                position: "absolute",
                                zIndex: 2,
                                borderRadius: "50%",
                                right: "4rem",
                                bottom: 0,
                                transform: "translateY(50%)",
                              }}
                            >
                              <EditIcon />
                            </IconButton>
                          </Link>
                          <IconButton
                            onClick={() => handleDeleteImage(obj.id)}
                            aria-label="Like minimal photography"
                            size="md"
                            variant="solid"
                            color="danger"
                            sx={{
                              position: "absolute",
                              zIndex: 2,
                              borderRadius: "50%",
                              right: "1rem",
                              bottom: 0,
                              transform: "translateY(50%)",
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </CardOverflow>
                        <Typography level="h2" sx={{ fontSize: "16px", mt: "40px", mb: "10px" }}>
                          {obj.namaFile}
                        </Typography>
                      </Card>
                    ))}
                </Box>
              </GridFlex>
            </SpaceGrid>
              <div className="pagination">
                <Pagination color="primary" count={pageCount} onChange={handlePageChange} renderItem={(item) => <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />} />
              </div>
          </CustomBox>
        </Grid>
      </Grid>
    </Box>
  );
};

// Export Code
export default ImageDash;
