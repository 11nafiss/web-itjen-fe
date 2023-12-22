// Import Library
import { useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { Pagination, PaginationItem, Stack, Grid, Container, Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AspectRatio, Card, CardOverflow, CardContent } from "@mui/joy";

// Import Assets
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Juanda } from "../../../../assets/assets";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { getReportTypeAll, getReportTypeCount } from "../../../../features/actions/report.action";
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
  const { jenis } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const take = 6;
  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    dispatch(getReportTypeAll({ take, page, jenis }));
    dispatch(getReportTypeCount());
  }, [dispatch, searchParams, jenis]);

  const dataReport = useAppSelector((state) => state.report.reportTypeAll.dataReport);
  const jumlahReport = useAppSelector((state) => state.report.reportAllCount.dataReport);
  const pageCount = Math.ceil(jumlahReport / take);

  const handlePageChange = (event, value) => {
    let updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set("page", value);

    dispatch(getReportTypeAll({ take, page: value, jenis }));
    dispatch(getReportTypeCount());
  };

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
                  <CustomTitle>Laporan {jenis}</CustomTitle>
                </GridCenter>
              </Grid>
            </CustomContainer>
          </Background>
          <BoxBg>
            <CustomContainer>
              <SubText>Daftar Laporan</SubText>
              <Grid container spacing={{ xs: 3, md: 4 }} column={{ xs: 4, sm: 8, md: 12 }} sx={{ justifyContent: "center" }}>
                {dataReport.map((obj) => (
                  <GridCenter item key={obj.laporanId} xs={12} sm={6} md={4}>
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
                          Laporan {obj.jenis}
                        </Typography>
                        <TitleText
                        >
                          {obj.judul}
                        </TitleText>
                      </CardContent>
                      <CardOverflow variant="soft" sx={{ bgcolor: "background.level1", padding: "0px" }}>
                        <CardContent sx={{ width: "100%", padding: "0px" }}>
                          <Link to={`/baca/laporan/${obj.laporanId}`} className="link">
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
