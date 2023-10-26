// Import Library
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Pagination, PaginationItem, Stack, Grid, Container, Box, Typography } from "@mui/material";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { AspectRatio, Card, CardOverflow, CardContent, Input, Button } from "@mui/joy";
import { formatDate } from "../../../../utils/custom-format-date";

// Import Assets
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { getArticleNumber, getArticleSearch } from "../../../../features/actions/article.action";
import { BASE_URL } from "../../../../services/api";

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

// Main Declaration
const Search = () => {
  const [searchParams] = useSearchParams();

  // const page = useState(1);
  // const { keyword } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    const keyword = searchParams.get("keyword");

    dispatch(getArticleSearch({ page, keyword }));
    dispatch(getArticleNumber({ keyword }));
  }, [dispatch, searchParams]);

  const dataArticle = useAppSelector((state) => state.article.articleSearch.dataArticle);
  const jumlahArticle = useAppSelector((state) => state.article.articleNumber.dataArticle);

  console.log("JUMLAH: ", jumlahArticle);

  const handlePageChange = (event, value) => {
    const keyword = searchParams.get("keyword");

    dispatch(getArticleSearch({ page: value, keyword }));
    dispatch(getArticleNumber({ keyword }));
  };

  // const pageSize = 6;

  // const [pagination, setPagination] = useState({
  //   count: 0,
  //   from: 0,
  //   to: pageSize,
  // });

  // const handlePageChange = (event, page) => {
  //   const from = (page - 1) * pageSize;
  //   const to = (page - 1) * pageSize + pageSize;

  //   setPagination({ ...pagination, from: from, to: to });
  // };

  // Main Code
  return (
    <Background>
      <main style={{ paddingTop: "90px" }}>
        <CustomContainer>
          <Grid container spacing={1}>
            <GridCenter item xs={12}>
              <CustomTitle>Temukan Bacaan Untukmu</CustomTitle>
            </GridCenter>
            <GridCenter item xs={12}>
              <Input
                placeholder="Silahkan cari disini.."
                startDecorator={<SearchIcon style={{ color: "#08347C" }} />}
                endDecorator={
                  <Button
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
            </GridCenter>
          </Grid>
        </CustomContainer>
        <BoxBg>
          <CustomContainer>
            <SubText>Hasil Pencarian</SubText>
            <Grid container spacing={{ xs: 3, md: 4 }} column={{ xs: 4, sm: 8, md: 12 }} sx={{ justifyContent: "center" }}>
              {dataArticle.map((obj, index) => (
                <GridCenter item key={index} xs={12} sm={6} md={4}>
                  <Card variant="outlined" sx={{ width: "270px", maxWidth: "100%", height: "330px", borderRadius: "20px", boxShadow: "lg", gap: "5px" }}>
                    <CardOverflow>
                      <AspectRatio ratio="16/9">
                        <img src={`${BASE_URL}images/${obj.featuredImage}`} loading="lazy" alt="" />
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
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "600",
                          marginBottom: "2px",
                        }}
                      >
                        {obj.title}
                      </Typography>
                    </CardContent>
                    <CardOverflow variant="soft" sx={{ bgcolor: "background.level1", padding: "0px" }}>
                      <CardContent sx={{ width: "100%", padding: "0px" }}>
                        <Link to={`/${obj.title.replace(/ /g, "-")}`} className="link">
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
                    <Pagination color="primary" count={Math.ceil(jumlahArticle / 2)} onChange={handlePageChange} renderItem={(item) => <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />} />
                  </ThemeProvider>
                </Stack>
              </GridCenter>
            </Grid>
          </CustomContainer>
        </BoxBg>
      </main>
    </Background>
  );
};

// Export Code
export default Search;
