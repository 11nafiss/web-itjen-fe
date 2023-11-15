// Import Library
import { useEffect, useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Grid, Box, Pagination, PaginationItem } from "@mui/material";
import { Button, AspectRatio, IconButton, Card, CardOverflow, Divider, Typography, Input, FormControl } from "@mui/joy";
import { styled } from "@mui/material/styles";

// Import Components
import { AddButton } from "../../../../components/components";
import { formatDate } from "../../../../utils/custom-format-date";

// Import Assets
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { FaSearch } from "react-icons/fa";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { LoadingOutlined } from "@ant-design/icons";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { getArticleAllTake, getArticlePublished, getArticleAllCount, getArticleSearchAll, getArticleSearchCount, deleteArticle } from "../../../../features/actions/article.action";
import { BASE_URL } from "../../../../services/api";
import { articleSearchSlice } from "../../../../features/slice/article.slice";

// MUI Styling CSS
const CustomBox = styled(Box)(() => ({
  borderRadius: "15px",
  backgroundColor: "#fff",
  width: "100%",
  maxWidth: "1400px",
  overflow: "hidden",
  minHeight: "555px",
  padding: "30px",
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
const ArticleDash = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const take = 8;

  const dataSearch = useAppSelector((state) => state.article.articleSearchAll.dataArticle);
  const isLoading = useAppSelector((state) => state.article.articleAllTake.isLoading);
  const dataArticle = useAppSelector((state) => state.article.articleAllTake.dataArticle);
  const jumlahArticle = useAppSelector((state) => state.article.articleAllCount.dataArticle);
  const pageCount = Math.ceil(jumlahArticle / take);


  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    const keyword = searchParams.get("keyword");
    dispatch(getArticleSearchAll({ take, page, keyword }));
    dispatch(getArticleAllTake({ take, page }));
    dispatch(getArticleAllCount());
  }, [dispatch, searchParams]);


  const handlePageChange = (event, value) => {
    let updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set("page", value);

    dispatch(getArticleAllTake({ take, page: value }));
    dispatch(getArticleAllCount());
  };

  function handleSubmit(event) {
    event.preventDefault();
    const page = searchParams.get("page") ?? 1;
    let updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set("keyword", searchInput);

    dispatch(articleSearchSlice.actions.setSearchKeyword(searchInput));
    dispatch(getArticleSearchAll({ take, page, keyword: searchInput }));
    dispatch(getArticleSearchCount({ searchInput }));
    setSearchParams(updatedSearchParams.toString());

    if (searchInput === "" || searchInput == null) {
      navigate("/dashboard/artikel?page=1");
      dispatch(getArticleAllCount());
    }
  }

  function FetchArticleByPublish(published) {
    const keyword = searchParams.get("keyword");
    const page = searchParams.get("page") ?? 1;
    dispatch(getArticlePublished({ take, page, published: published }));
    dispatch(getArticleSearchCount({ keyword }));
    setSearchInput("");
  }

  function FetchArticleAll() {
    navigate("/dashboard/artikel?page=1");
    const page = searchParams.get("page") ?? 1;
    dispatch(getArticleAllTake({ take, page }));
    dispatch(getArticleAllCount());
    setSearchInput("");
  }

  const handleDeleteArticle = (id) => {
    const confirmation = confirm("Apakah anda yakin untuk menghapus data ini?");

    navigate(0);

    setLoading(true);

    if (confirmation) {
      dispatch(deleteArticle(id));
      setLoading(false);
    }
  };

  // Main Code
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#D9D9D9", height: "100%" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <CustomBox>
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "700",
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                height: "100%",
                margin: "10px",
              }}
            >
              Daftar Artikel
            </Typography>
            <Divider sx={{ borderSize: "20px" }} />
            <SpaceGrid container>
              <GridFlex item xs={12} md={6} sx={{ justifyContent: { xs: "left" } }}>
                <Link to="/dashboard/artikel/tambah">
                  <AddButton />
                </Link>
                <Button
                  onClick={() => FetchArticleAll()}
                  color="success"
                  sx={{
                    height: "30px",
                    width: "100px",
                    marginLeft: "10px",
                  }}
                >
                  Semua
                </Button>
                <Button
                  onClick={() => FetchArticleByPublish(false)}
                  color="neutral"
                  sx={{
                    height: "30px",
                    width: "100px",
                    marginInline: "10px",
                  }}
                >
                  Pending
                </Button>
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
                  {isLoading === true ? (
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
                  ) : isLoading === false }
                  {dataSearch.length === 0 &&
                    dataArticle.map((obj, index) => (
                      <Card key={index} variant="outlined" sx={{ width: 300, gap: "0px", height: "100%" }}>
                        <CardOverflow>
                          <AspectRatio ratio="16/9">
                            <img src={`${BASE_URL}images/${obj.featuredImage}`} loading="lazy" alt="" />
                          </AspectRatio>
                          <Link to={`/dashboard/artikel/edit/${obj.id}`}>
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
                            onClick={() => handleDeleteArticle(obj.id)}
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
                            {formatDate(obj.publishedAt)}
                          </Typography>
                        </Box>
                        <Typography level="h2" sx={{ fontSize: "14px", my: "10px" }}>
                          {obj.title}
                        </Typography>
                      </Card>
                    ))}
                  {dataSearch.length !== 0 &&
                    dataSearch.map((obj, index) => (
                      <Card key={index} variant="outlined" sx={{ width: 300, gap: "0px", height: "100%" }}>
                        <CardOverflow>
                          <AspectRatio ratio="16/9">
                            <img src={`${BASE_URL}images/${obj.featuredImage}`} loading="lazy" alt="" />
                          </AspectRatio>
                          <Link to={`/dashboard/artikel/edit/${obj.id}`}>
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
                            onClick={() => handleDeleteArticle(obj.id)}
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
                            {formatDate(obj.publishedAt)}
                          </Typography>
                        </Box>
                        <Typography level="h2" sx={{ fontSize: "14px", my: "10px" }}>
                          {obj.title}
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
export default ArticleDash;
