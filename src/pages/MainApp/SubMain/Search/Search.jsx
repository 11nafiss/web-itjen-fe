// Import Library
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Pagination, PaginationItem, Stack, Grid, Container, Box, Typography } from "@mui/material";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { AspectRatio, Card, CardOverflow, CardContent, Input, Button } from "@mui/joy";
import { formatDate } from "../../../../utils/custom-format-date";

// Import Assets
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
import { Juanda } from "../../../../assets/assets";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { articleSearchSlice } from "../../../../features/slice/article.slice";
import { getArticleSearchCount, getArticleSearch } from "../../../../features/actions/article.action";
import { BASE_URL } from "../../../../services/api";
import { getCategory } from "../../../../features/actions/category.action";
import { Header } from "../../../../components/components";

// Additional Code
const theme = createTheme({
  palette: {
    primary: {
      main: "#08347C",
      contrastText: "#fff",
    },
  },
});

// MUI Styling CSS
const Background = styled(Box)(() => ({
  backgroundColor: "#F05023",
  color: "#fff",
}));

const BoxBg = styled(Box)(() => ({
  backgroundColor: "#fff",
  color: "#252525",
  borderRadius: "45px 45px 0px 0px",
}));

const CustomContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "left",
  gap: theme.spacing(5),
  padding: "50px 0px",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const GridCenter = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const SubText = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  fontWeight: "700",
  margin: "10px",
  marginLeft: "60px",
  color: "#08347C",
  [theme.breakpoints.down("md")]: {
    fontSize: "26px",
    marginLeft: "0px",
  },
}));

const ClickButton = styled(Button)(() => ({
  width: "100%",
  borderRadius: "0px 0px 12px 12px",
  borderColor: "#F05023",
  borderWidth: "5px",
  backgroundColor: "#F05023",
  margin: "0px",
  textTransform: "capitalize",
  color: "#fff",
  fontWeight: "600",
  fontSize: "16px",
  "&:hover": {
    backgroundColor: "#0D5CAB",
  },
}));

const CustomTitle = styled(Typography)(({ theme }) => ({
  fontSize: "38px",
  fontWeight: "700",
  margin: "20px",
  [theme.breakpoints.down("md")]: {
    fontSize: "28px",
  },
}));

const TitleText = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "600",
  marginBottom: "2px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "98%",
    whiteSpace: "pre-line",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": "2",
}));

// Main Declaration
const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState("");

  const dispatch = useAppDispatch();
  const take = 6;

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    const keyword = searchParams.get("keyword");
    setSearchInput(keyword);

    dispatch(getArticleSearch({ take, page, keyword }));
    dispatch(getArticleSearchCount({ keyword }));
    dispatch(getCategory());
  }, [dispatch, searchParams]);

  const dataArticle = useAppSelector((state) => state.article.articleSearch.dataArticle);
  const dataCategory = useAppSelector((state) => state.category.categoryAll.dataCategory);
  const jumlahArticle = useAppSelector((state) => state.article.articleSearchCount.dataArticle);

  const handlePageChange = (event, value) => {
    const keyword = searchParams.get("keyword");
    let updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set("page", value);

    dispatch(getArticleSearch({ take, page: value, keyword }));
    dispatch(getArticleSearchCount({ keyword }));
    setSearchParams(updatedSearchParams.toString());
  };

  function handleSubmit(event) {
    event.preventDefault();
    const page = searchParams.get("page") ?? 1;
    let updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set("keyword", searchInput);
    setSearchParams(updatedSearchParams.toString());

    dispatch(articleSearchSlice.actions.setSearchKeyword(searchInput));
    dispatch(getArticleSearch({ take, page, searchInput }));
    dispatch(getArticleSearchCount({ searchInput }));
  }

  const handleUrlCategory = (categoryId) => {
    let category = null;
    for (const obj of dataCategory) {
      if (categoryId === obj.categoryId) {
        category = obj.categoryName;
      }
    }
    if (category !== null) {
      return category.replace(/ /g, "-");
    } else {
      return category;
    }
  };

  // Main Code
  return (
    <div>
      <div className="header-wrapper">
        <Header mode="white" />
      </div>
      <Background>
        <main style={{ paddingTop: "90px" }}>
          <CustomContainer>
            <Grid container spacing={1}>
              <GridCenter item xs={12}>
                <CustomTitle>Temukan Bacaan Untukmu</CustomTitle>
              </GridCenter>
              <GridCenter item xs={12}>
                <form onSubmit={handleSubmit}>
                  <Input
                    placeholder="Silahkan cari disini.."
                    startDecorator={<SearchIcon style={{ color: "#08347C" }} />}
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    endDecorator={
                      <Button
                        type="submit"
                        sx={{
                          height: "50px",
                          width: "100px",
                          left: "5px",
                          borderRadius: "0px 10px 10px 0px",
                          backgroundColor: "#08347C",
                          fontSize: "16px",
                        }}
                      >
                        Search
                      </Button>
                    }
                    sx={{
                      display: { xs: "none", sm: "flex" },
                      margin: "30px 50px",
                      width: "800px",
                      height: "50px",
                      borderRadius: "10px",
                    }}
                  />
                </form>
              </GridCenter>
            </Grid>
          </CustomContainer>
          <BoxBg>
            <CustomContainer>
              <SubText>Hasil Pencarian</SubText>
              {dataArticle.length === 0 ? (
                <div style={{ display: "flex", justifyContent: "center" }}>Data Tidak Ditemukan</div>
              ) : (
                <Grid container spacing={{ xs: 3, md: 4 }} column={{ xs: 4, sm: 8, md: 12 }} sx={{ justifyContent: "center" }}>
                  {dataArticle.map((obj, index) => (
                    <GridCenter item key={index} xs={12} sm={6} md={4}>
                      <Card variant="outlined" sx={{ width: "270px", maxWidth: "100%", height: "320px", borderRadius: "20px", boxShadow: "lg", gap: "5px" }}>
                        <CardOverflow>
                          <AspectRatio ratio="16/9">
                            <img src={obj.featuredImage === "" ? Juanda : `${BASE_URL}thumbnail/${obj.featuredImage}`} loading="lazy" alt="" />
                          </AspectRatio>
                        </CardOverflow>
                        <CardContent sx={{ display: "flex", textAlign: "center" }}>
                          <Typography
                            gutterBottom
                            sx={{
                              fontSize: "14px",
                              color: "#0D5CAB",
                              fontWeight: "500",
                              margin: "10px 0px 10px 0px",
                            }}
                          >
                            {formatDate(obj.publishedAt)}
                          </Typography>
                          <TitleText
                          >
                            {obj.title}
                          </TitleText>
                        </CardContent>
                        <CardOverflow variant="soft" sx={{ bgcolor: "background.level1", padding: "0px" }}>
                          <CardContent sx={{ width: "100%", padding: "0px" }}>
                            <Link to={`/artikel/${handleUrlCategory(obj.categoryId)}/${obj.title.replace(/ /g, "-")}`} className="link">
                              <ClickButton variant="solid" size="lg">
                                Baca Artikel
                              </ClickButton>
                            </Link>
                          </CardContent>
                        </CardOverflow>
                      </Card>
                    </GridCenter>
                  ))}
                  <GridCenter item xs={12}>
                    <Stack spacing={2}>
                      <ThemeProvider theme={theme}>
                        <Pagination color="primary" count={Math.ceil(jumlahArticle / take)} onChange={handlePageChange} renderItem={(item) => <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />} />
                      </ThemeProvider>
                    </Stack>
                  </GridCenter>
                </Grid>
              )}
            </CustomContainer>
          </BoxBg>
        </main>
      </Background>
    </div>
  );
};

// Export Code
export default Search;
