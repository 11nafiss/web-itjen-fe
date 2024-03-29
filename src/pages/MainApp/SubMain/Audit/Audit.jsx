// Import Library
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Pagination, PaginationItem, Stack, Grid, Container, Box, Typography, Button } from "@mui/material";
import { FormControl, AspectRatio, Card, CardOverflow, CardContent, Select, Option } from "@mui/joy";
import { styled } from "@mui/material/styles";
import { formatDate } from "../../../../utils/custom-format-date";

// Import Assets
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Juanda } from "../../../../assets/assets";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { getAuditoriaAllCount, getAuditoriaAllTake, getAuditoriaTahunAll } from "../../../../features/actions/auditoria.action";
import { BASE_URL } from "../../../../services/api";
import { Header } from "../../../../components/components";

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
    height: "300px",
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
const Report = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [year, setYear] = useState();

  const dataAuditoria = useAppSelector((state) => state.auditoria.auditoriaAllTake.dataAuditoria);
  const dataTahun = useAppSelector((state) => state.auditoria.auditoriaTahunAll.dataAuditoria);
  const jumlahAuditoria = useAppSelector((state) => state.auditoria.auditoriaAllCount.dataAuditoria);
  const selectYear = dataAuditoria.map((item) => item.tahunItem).filter((value, index, current_value) => current_value.indexOf(value) === index);
  const pageCount = Math.ceil(jumlahAuditoria / 6);

  const handlePageChange = (event, value) => {
    const take = 6;
    let updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set("page", value);

    dispatch(getAuditoriaAllTake({ take, page: value }));
    dispatch(getAuditoriaAllCount());

    console.log("ini value", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getAuditoriaTahunAll({ tahun: year }));
  };

  const handleAll = (e) => {
    e.preventDefault();
    navigate(0);
  };

  useEffect(() => {
    const take = 6;
    const page = searchParams.get("page") ?? 1;
    dispatch(getAuditoriaAllTake({ take, page }));
    dispatch(getAuditoriaAllCount());
  }, [dispatch, searchParams]);

  // Main Code
  return (
    <div>
      <div className="header-wrapper">
        <Header mode="white" />
      </div>
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
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={1}>
                      <GridCenter item xs={12} md={2}>
                        <FilterButton onClick={handleAll} sx={{ width: { xs: 350, md: 150 }, backgroundColor: "#dedede", color: "#252525" }}>
                          Semua
                        </FilterButton>
                      </GridCenter>
                      <GridCenter item xs={12} md={5} sx={{ padding: "0px 10px", margin: { xs: "50px 10px 0px 10px", md: "0px" } }}>
                        <FilterText>Cari majalah berdasarkan waktu penerbitan {">>"}</FilterText>
                      </GridCenter>
                      <GridCenter item xs={12} md={3}>
                        <FormControl sx={{ backgroundColor: "fff" }}>
                          <Box sx={{ width: "200px", display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <Select
                              value={year}
                              onChange={(event, e) => setYear(e)}
                              placeholder="Pilih…"
                              sx={{
                                width: "100%",
                                borderColor: "#252525",
                                height: "48px",
                              }}
                            >
                              {selectYear.map((obj) => {
                                return (
                                  <Option key={obj} value={obj} label={obj}>
                                    {obj}
                                  </Option>
                                );
                              })}
                            </Select>
                          </Box>
                        </FormControl>
                      </GridCenter>
                      <GridCenter item xs={12} md={2}>
                        <FilterButton type="submit" sx={{ width: { xs: 350, md: 150 } }}>
                          Submit
                        </FilterButton>
                      </GridCenter>
                    </Grid>
                  </form>
                </Container>
              </FilterBox>
              <Grid container spacing={{ xs: 3, md: 4 }} column={{ xs: 4, sm: 8, md: 12 }} sx={{ justifyContent: "center" }}>
                {dataTahun.length === 0
                  ? dataAuditoria.map((obj) => (
                      <GridCenter item key={obj.auditoriaId} xs={12} sm={6} md={4}>
                        <Card variant="outlined" sx={{ width: "270px", maxWidth: "100%", height: "320px", borderRadius: "20px", boxShadow: "lg", gap: "5px" }}>
                          <CardOverflow>
                            <AspectRatio ratio="16/9">
                              <img src={obj.pathImage === "" ? Juanda : `${BASE_URL}images/${obj.pathImage}`} loading="lazy" alt="" />
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
                              {obj.deskripsi}
                            </TitleText>
                          </CardContent>
                          <CardOverflow variant="soft" sx={{ bgcolor: "background.level1", padding: "0px" }}>
                            <CardContent sx={{ width: "100%", padding: "0px" }}>
                              <Link to={`/baca/auditoria/${obj.auditoriaId}`} className="link">
                                <ClickButton variant="solid" size="lg">
                                  Buka Halaman
                                </ClickButton>
                              </Link>
                            </CardContent>
                          </CardOverflow>
                        </Card>
                      </GridCenter>
                    ))
                  : dataTahun.map((obj) => (
                      <GridCenter item key={obj.auditoriaId} xs={12} sm={6} md={4}>
                        <Card variant="outlined" sx={{ width: "270px", maxWidth: "100%", height: "320px", borderRadius: "20px", boxShadow: "lg", gap: "5px" }}>
                          <CardOverflow>
                            <AspectRatio ratio="16/9">
                              <img src={obj.pathImage === "" ? Juanda : `${BASE_URL}images/${obj.pathImage}`} loading="lazy" alt="" />
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
                              {obj.deskripsi}
                            </TitleText>
                          </CardContent>
                          <CardOverflow variant="soft" sx={{ bgcolor: "background.level1", padding: "0px" }}>
                            <CardContent sx={{ width: "100%", padding: "0px" }}>
                              <Link to={`/baca/auditoria/${obj.auditoriaId}`} className="link">
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
                <div className="pagination">
                  <Pagination color="primary" count={pageCount} onChange={handlePageChange} renderItem={(item) => <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />} />
                </div>
              </Stack>
            </CustomContainer>
          </BoxBg>
        </main>
      </Background>
    </div>
  );
};

// Export Code
export default Report;
