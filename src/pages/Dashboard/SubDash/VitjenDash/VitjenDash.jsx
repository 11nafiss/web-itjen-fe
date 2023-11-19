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
import { deleteVitjen, getVitjenAllCount, getVitjenAll, getVitjenSearchAll, getVitjenSearchCount } from "../../../../features/actions/vitjen.action";
import { BASE_URL } from "../../../../services/api";
import { vitjenSearchAllSlice } from "../../../../features/slice/vitjen.slice";

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
const VitjenDash = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const take = 8;

  const dataSearch = useAppSelector((state) => state.vitjen.vitjenSearchAll.dataVitjen);
  const isLoading = useAppSelector((state) => state.vitjen.vitjenAll.isLoading);
  const dataVitjen = useAppSelector((state) => state.vitjen.vitjenAll.dataVitjen);
  const jumlahVitjen = useAppSelector((state) => state.vitjen.vitjenAllCount.dataVitjen);
  const pageCount = Math.ceil(jumlahVitjen / take)

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    const keyword = searchParams.get("keyword");
    dispatch(getVitjenSearchAll({ take, page, keyword }));
    dispatch(getVitjenAll({ take, page }));
    dispatch(getVitjenAllCount());
  }, [dispatch, searchParams, isLoading]);

  const handlePageChange = (event, value) => {
    let updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set("page", value);

    dispatch(getVitjenAll({ take, page: value }));
    dispatch(getVitjenAllCount());
  };

  function handleSubmit(event) {
    event.preventDefault();
    const page = searchParams.get("page") ?? 1;
    let updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set("keyword", searchInput);

    dispatch(vitjenSearchAllSlice.actions.setSearchKeyword(searchInput));
    dispatch(getVitjenSearchAll({ take, page, keyword: searchInput }));
    dispatch(getVitjenSearchCount({ searchInput }));
    setSearchParams(updatedSearchParams.toString());

    if (searchInput === "" || searchInput == null) {
      navigate("/dashboard/visual?page=1");
      dispatch(getVitjenAllCount());
    }
  }

  const handleDeleteVitjen = (id) => {
    const confirmation = confirm("Apakah anda yakin untuk menghapus data ini?");

    navigate(0);

    setLoading(true);

    if (confirmation) {
      dispatch(deleteVitjen(id));
      setLoading(false);
    }
  };

  // Main Code
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#D9D9D9", height: "100%" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <CustomBox>
            <CustomTitle>Daftar Visual</CustomTitle>
            <Divider sx={{ borderSize: "20px" }} />
            <SpaceGrid container>
              <GridFlex item xs={12} md={6} sx={{ justifyContent: { xs: "left" } }}>
                <Link to="/dashboard/visual/tambah">
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
                    dataVitjen.map((obj, index) => (
                      <Card key={index} variant="outlined" sx={{ width: 300, gap: "0px", height: "100%" }}>
                        <CardOverflow>
                          <AspectRatio ratio="16/9">
                            <img src={`${BASE_URL}images/${obj.image}`} loading="lazy" alt="" />
                          </AspectRatio>
                          <Link to={`/dashboard/visual/edit/${obj.id}`}>
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
                            onClick={() => handleDeleteVitjen(obj.id)}
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
                        <Box sx={{ display: "flex", alignItems: "start", mt: "35px" }}>
                          <Typography level="body3" sx={{ fontWeight: "md", color: "blue", fontSize: "14px" }}>
                            Visual {obj.title}
                          </Typography>
                        </Box>
                        <Typography level="h2" sx={{ fontSize: "14px", my: "10px" }}>
                          {obj.deskripsi}
                        </Typography>
                      </Card>
                    ))}
                  {dataSearch.length !== 0 &&
                    dataSearch.map((obj, index) => (
                      <Card key={index} variant="outlined" sx={{ width: 300, gap: "0px", height: "100%" }}>
                        <CardOverflow>
                          <AspectRatio ratio="16/9">
                            <img src={`${BASE_URL}images/${obj.pathImage}`} loading="lazy" alt="" />
                          </AspectRatio>
                          <Link to={`/dashboard/visual/edit/${obj.vitjenId}`}>
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
                            onClick={() => handleDeleteVitjen(obj.vitjenId)}
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
                        <Box sx={{ display: "flex", alignItems: "start", mt: "35px" }}>
                          <Typography level="body3" sx={{ fontWeight: "md", color: "blue", fontSize: "14px" }}>
                            Visual {obj.title}
                          </Typography>
                        </Box>
                        <Typography level="h2" sx={{ fontSize: "14px", my: "10px" }}>
                          {obj.deskripsi}
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
export default VitjenDash;
