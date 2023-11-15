// Import Library
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Stack, Grid, Container, Box, Typography, Button } from "@mui/material";
import { Autocomplete, FormControl, AspectRatio, Card, CardOverflow, CardContent  } from "@mui/joy";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { formatDate } from "../../../../utils/custom-format-date";

// Import Assets
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { getAuditoriaData } from "../../../../features/actions/auditoria.action";
import { BASE_URL } from "../../../../services/api";
import { auditoriaSlice } from "../../../../features/slice/auditoria.slice";

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

const FilterBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "20px",
  backgroundColor: "#ECBC2A",
  color: "#252525",
  height: "80px",
  margin: "0px 25px 25px 25px",
  width: "100%",
  borderWidth: "0px",
  borderColor: "#252525",
  borderRadius: "50px",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    margin: "0px",
    height: "250px",
  },
}));

const FilterText = styled(Typography)(() => ({
  fontSize: "18px",
  fontWeight: "700",
  textTransform: "capitalize",
}));

const FilterButton = styled(Button)(() => ({
  backgroundColor: "#252525",
  color: "#fff",
  borderRadius: "50px",
  fontSize: "14px",
  fontWeight: "600",
  "&:hover": {
    backgroundColor: "#0D5CAB",
  },
}));

// Main Declaration
const Report = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAuditoriaData());
  }, [dispatch]);
  const dataAuditoria = useAppSelector((state) => state.auditoria.auditoriaAll.dataAuditoria);
  const dataPerPage = useAppSelector((state) => state.auditoria.auditoriaAll.dataPerPage);
  const currentPage = useAppSelector((state) => state.auditoria.auditoriaAll.currentPage);

  const totalPages = Math.ceil(dataAuditoria.length / dataPerPage);
  const pages = [...Array(totalPages + 1).keys()].slice(1);
  const indexOfLastPage = currentPage * dataPerPage;
  const indexOfFirstPage = indexOfLastPage - dataPerPage;

  const visibleData = dataAuditoria.slice(indexOfFirstPage, indexOfLastPage);

  const navigatePrev = () => {
    if (currentPage !== 1) {
      dispatch(auditoriaSlice.actions.onNavigatePrev());
    }
  };

  const navigateNext = () => {
    if (currentPage !== totalPages) {
      dispatch(auditoriaSlice.actions.onNavigateNext());
    }
  };

  const handleCurrentPage = (index) => {
    dispatch(auditoriaSlice.actions.onClickCurrentPage(index));
  };


  // Main Code
  return (
    <Background>
      <main style={{ paddingTop: "90px" }}>
        <Background>
          <CustomContainer>
            <Grid container spacing={1}>
              <GridCenter item xs={12}>
                <CustomTitle>Auditoria</CustomTitle>
              </GridCenter>
            </Grid>
          </CustomContainer>
        </Background>
        <BoxBg>
          <CustomContainer>
            <SubText>Daftar Auditoria</SubText>
            <FilterBox>
              <Container maxWidth="lg">
                <Grid container spacing={1}>
                  <GridCenter item xs={12} md={5} sx={{ padding: "0px 10px" }}>
                    <FilterText>Cari majalah berdasarkan waktu penerbitan</FilterText>
                  </GridCenter>
                  <GridCenter item xs={12} md={4}>
                    <FormControl>
                      <Autocomplete placeholder="Pilih Tahun" options={tahun} sx={{ width: { xs: 350, md: 220, lg: 280 } }} />
                    </FormControl>
                  </GridCenter>
                  <GridCenter item xs={12} md={3}>
                    <FilterButton sx={{ width: { xs: 350, md: 190 } }}>Submit</FilterButton>
                  </GridCenter>
                </Grid>
              </Container>
            </FilterBox>
            <Grid container spacing={{ xs: 3, md: 4 }} column={{ xs: 4, sm: 8, md: 12 }} sx={{ justifyContent: "center" }}>
              {visibleData.map((dataAuditoria) => (
                <GridCenter item key={dataAuditoria.auditoriaId} xs={12} sm={6} md={4}>
                  <Card variant="outlined" sx={{ width: "270px", maxWidth: "100%", height: "330px", maxHeight: "330px", borderRadius: "20px", boxShadow: "lg", gap: "5px" }}>
                    <CardOverflow>
                      <AspectRatio ratio="16/9">
                        <img src={`${BASE_URL}images/${dataAuditoria.pathImage}`} loading="lazy" alt="" />
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
                        {formatDate(dataAuditoria.publishedAt)}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "600",
                          marginBottom: "2px",
                        }}
                      >
                        {dataAuditoria.deskripsi}
                      </Typography>
                    </CardContent>
                    <CardOverflow variant="soft" sx={{ bgcolor: "background.level1", padding: "0px" }}>
                      <CardContent sx={{ width: "100%", padding: "0px" }}>
                        <Link to={`/baca/lakin-itjen-2022`} className="link">
                          <ClickButton variant="solid" size="lg">
                            Buka Halaman
                          </ClickButton>
                        </Link>
                      </CardContent>
                    </CardOverflow>
                  </Card>
                </GridCenter>
              ))}
            </Grid>
            <Stack spacing={2} sx={{ width: "100%", alignItems: "center" }}>
              <ThemeProvider theme={theme}>
                <div className="pagination">
                  <button onClick={navigatePrev} className="pagination-button"><ArrowBackIcon /></button>
                  {pages.map((index) => (
                    <button key={index} className="pagination-number" onClick={() => handleCurrentPage.call(null, index)}>{index}</button>
                    ))}
                  <button onClick={navigateNext} className="pagination-button"><ArrowForwardIcon /></button>
                </div>
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

// Array Data
const tahun = [{ label: "Semua Tahun" }, { label: "2023" }, { label: "2022" }, { label: "2021" }, { label: "2020" }, { label: "2019" }];
