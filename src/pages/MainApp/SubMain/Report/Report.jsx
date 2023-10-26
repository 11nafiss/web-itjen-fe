// Import Library
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination, PaginationItem, Stack, Grid, Container, Box, Typography, Button } from "@mui/material";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { AspectRatio, Card, CardOverflow, CardContent } from "@mui/joy";
// import { formatDate } from "../../../../utils/custom-format-date";

// Import Assets
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Import Assets
import { Report1 } from "../../../../assets/assets";

// Import Api
import { useAppDispatch } from "../../../../hooks/useTypedSelector";
import { getArticlePublished, getArticleNumber } from "../../../../features/actions/article.action";

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
  fontSize: "65px",
  fontWeight: "700",
  margin: "50px 0px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "45px",
  },
}));

// Main Declaration
const Report = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getArticlePublished());
    dispatch(getArticleNumber());
  }, [dispatch]);


  // Main Code
  return (
    <Background>
      <main style={{ paddingTop: "90px" }}>
        <Background>
          <CustomContainer>
            <Grid container spacing={1}>
              <GridCenter item xs={12}>
                <CustomTitle>Laporan Kinerja</CustomTitle>
              </GridCenter>
            </Grid>
          </CustomContainer>
        </Background>
        <BoxBg>
          <CustomContainer>
            <SubText>Daftar Laporan</SubText>
            <Grid container spacing={{ xs: 3, md: 4 }} column={{ xs: 4, sm: 8, md: 12 }} sx={{ justifyContent: "center" }}>
              <GridCenter item xs={12} sm={6} md={4}>
                <Card variant="outlined" sx={{ width: "270px", maxWidth: "100%", height: "330px", maxHeight: "330px", borderRadius: "20px", boxShadow: "lg", gap: "5px" }}>
                  <CardOverflow >
                      <AspectRatio ratio="16/9" >
                        <img src={Report1} loading="lazy" alt="" />
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
                      22 Oktober 2023
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        marginBottom: "2px",
                      }}
                    >
                      Lakin Itjen 2022
                    </Typography>
                  </CardContent>
                  <CardOverflow variant="soft" sx={{ bgcolor: "background.level1", padding: "0px" }}>
                    <CardContent sx={{ width: "100%", padding: "0px" }}>
                      <Link to={`/baca/lakin-itjen-2022`} className="link">
                        <ClickButton variant="solid" size="lg">
                          Baca laporan
                        </ClickButton>
                      </Link>
                    </CardContent>
                  </CardOverflow>
                </Card>
              </GridCenter>
              <GridCenter item xs={12} sm={6} md={4}>
                <Card variant="outlined" sx={{ width: "270px", maxWidth: "100%", height: "330px", borderRadius: "20px", boxShadow: "lg", gap: "5px" }}>
                  <CardOverflow>
                    <AspectRatio ratio="16/9">
                      <img src={Report1} loading="lazy" alt="" />
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
                      22 Oktober 2023
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        marginBottom: "2px",
                      }}
                    >
                      Lakin Itjen 2022
                    </Typography>
                  </CardContent>
                  <CardOverflow variant="soft" sx={{ bgcolor: "background.level1", padding: "0px" }}>
                    <CardContent sx={{ width: "100%", padding: "0px" }}>
                      <Link to={`/baca/lakin-itjen-2022`} className="link">
                        <ClickButton variant="solid" size="lg">
                          Baca laporan
                        </ClickButton>
                      </Link>
                    </CardContent>
                  </CardOverflow>
                </Card>
              </GridCenter>
              <GridCenter item xs={12} sm={6} md={4}>
                <Card variant="outlined" sx={{ width: "270px", maxWidth: "100%", height: "330px", borderRadius: "20px", boxShadow: "lg", gap: "5px" }}>
                  <CardOverflow>
                    <AspectRatio ratio="16/9">
                      <img src={Report1} loading="lazy" alt="" />
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
                      22 Oktober 2023
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        marginBottom: "2px",
                      }}
                    >
                      Lakin Itjen 2022
                    </Typography>
                  </CardContent>
                  <CardOverflow variant="soft" sx={{ bgcolor: "background.level1", padding: "0px" }}>
                    <CardContent sx={{ width: "100%", padding: "0px" }}>
                      <Link to={`/baca/lakin-itjen-2022`} className="link">
                        <ClickButton variant="solid" size="lg">
                          Baca laporan
                        </ClickButton>
                      </Link>
                    </CardContent>
                  </CardOverflow>
                </Card>
              </GridCenter>
              <GridCenter item xs={12} sm={6} md={4}>
                <Card variant="outlined" sx={{ width: "270px", maxWidth: "100%", height: "330px", borderRadius: "20px", boxShadow: "lg", gap: "5px" }}>
                  <CardOverflow>
                    <AspectRatio ratio="16/9">
                      <img src={Report1} loading="lazy" alt="" />
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
                      22 Oktober 2023
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        marginBottom: "2px",
                      }}
                    >
                      Lakin Itjen 2022
                    </Typography>
                  </CardContent>
                  <CardOverflow variant="soft" sx={{ bgcolor: "background.level1", padding: "0px" }}>
                    <CardContent sx={{ width: "100%", padding: "0px" }}>
                      <Link to={`/baca/lakin-itjen-2022`} className="link">
                        <ClickButton variant="solid" size="lg">
                          Baca laporan
                        </ClickButton>
                      </Link>
                    </CardContent>
                  </CardOverflow>
                </Card>
              </GridCenter>
              <GridCenter item xs={12} sm={6} md={4}>
                <Card variant="outlined" sx={{ width: "270px", maxWidth: "100%", height: "330px", borderRadius: "20px", boxShadow: "lg", gap: "5px" }}>
                  <CardOverflow>
                    <AspectRatio ratio="16/9">
                      <img src={Report1} loading="lazy" alt="" />
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
                      22 Oktober 2023
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        marginBottom: "2px",
                      }}
                    >
                      Lakin Itjen 2022
                    </Typography>
                  </CardContent>
                  <CardOverflow variant="soft" sx={{ bgcolor: "background.level1", padding: "0px" }}>
                    <CardContent sx={{ width: "100%", padding: "0px" }}>
                      <Link to={`/baca/lakin-itjen-2022`} className="link">
                        <ClickButton variant="solid" size="lg">
                          Baca laporan
                        </ClickButton>
                      </Link>
                    </CardContent>
                  </CardOverflow>
                </Card>
              </GridCenter>
              <GridCenter item xs={12} sm={6} md={4}>
                <Card variant="outlined" sx={{ width: "270px", maxWidth: "100%", height: "330px", borderRadius: "20px", boxShadow: "lg", gap: "5px" }}>
                  <CardOverflow>
                    <AspectRatio ratio="16/9">
                      <img src={Report1} loading="lazy" alt="" />
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
                      22 Oktober 2023
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        marginBottom: "2px",
                      }}
                    >
                      Lakin Itjen 2022
                    </Typography>
                  </CardContent>
                  <CardOverflow variant="soft" sx={{ bgcolor: "background.level1", padding: "0px" }}>
                    <CardContent sx={{ width: "100%", padding: "0px" }}>
                      <Link to={`/baca/lakin-itjen-2022`} className="link">
                        <ClickButton variant="solid" size="lg">
                          Baca laporan
                        </ClickButton>
                      </Link>
                    </CardContent>
                  </CardOverflow>
                </Card>
              </GridCenter>
            </Grid>
            <Stack spacing={2} sx={{ width: "100%", alignItems: "center" }}>
              <ThemeProvider theme={theme}>
                <Pagination color="primary" count={10} renderItem={(item) => <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />} />
              </ThemeProvider>
            </Stack>
          </CustomContainer>
        </BoxBg>
      </main>
    </Background>
  );
};

// Export Code
export default Report;
