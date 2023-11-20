// Import Library
import { Grid, Box, Typography, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Select, Option } from "@mui/joy";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Import Assets
import { AiFillCalendar } from "react-icons/ai";
import { MdVisibility } from "react-icons/md";

// Import Api
import { useAppSelector } from "../../../../hooks/useTypedSelector";

// MUI Styling CSS
const CustomBox = styled(Box)(() => ({
  borderRadius: "15px",
  backgroundColor: "#fff",
  width: "100%",
  minHeight: "150px",
  padding: "30px",
}));

const CustomSquare = styled(Box)(() => ({
  display: "flex",
  justifyContent: "start",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "15px",
  backgroundColor: "#fff",
  width: "100%",
  height: "100%",
  padding: "20px",
}));

const CustomTitle = styled(Typography)(() => ({
  fontSize: "36px",
  fontWeight: "700",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "80px",
}));

const CustomText = styled(Typography)(() => ({
  fontSize: "20px",
  fontWeight: "700",
}));

const SpaceGrid = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
}));

const GridFlex = styled(Grid)(() => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "60px",
}));

const IconBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginInline: "10px",
  height: "100%",
  fontSize: "24px",
}));

const ImgBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
}));

// Main Declaration
const HomeDash = () => {
  const dataUser = useAppSelector((state) => state.user.loginUser.currentUser);
  console.log("ini", dataUser.username);

  const options1 = {
    chart: {
      type: "line",
    },
    title: {
      text: "Statistik Artikel Per Kuartal",
    },
    subtitle: {
      text: "",
    },
    xAxis: {
      categories: ["Kuartal I", "Kuartal II", "Kuartal III", "Kuartal IV"],
    },
    yAxis: {
      title: {
        text: "Jumlah Artikel",
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        },
        enableMouseTracking: true,
      },
    },
    series: [
      {
        name: 'tebe',
        data: [2.4, 3.4]
      }, {
        name: 'taufan',
        data: [3.9, 4.2, 5.7, 8.5]
      }
    ],
  };

  const options2 = {
    chart: {
      type: "line",
    },
    title: {
      text: "Statistik Artikel Per Bulan",
    },
    subtitle: {
      text: "",
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"],
    },
    yAxis: {
      title: {
        text: "Jumlah Artikel",
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        },
        enableMouseTracking: true,
      },
    },
    series: [
      {
        name: 'tebe',
        data: [2.4, 3.4]
      }, {
        name: 'taufan',
        data: [3.9, 4.2, 5.7, 8.5]
      }
    ],
  };

  options1.series.push({})

  // Main Code
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#D9D9D9" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <CustomBox>
            <CustomTitle>Halo, {dataUser.username}</CustomTitle>
            <Divider sx={{ borderSize: "20px" }} />
            <SpaceGrid container>
              <GridFlex item xs={12} md={6} sx={{ display: "flex", justifyContent: { xs: "center", md: "start " }, margin: { xs: "30px 0px", md: "0px 0px" } }}>
                <CustomText>Pengunjung Website</CustomText>
                <IconBox>
                  <MdVisibility />
                </IconBox>
                <CustomText sx={{ display: "flex" }}>4.437</CustomText>
              </GridFlex>
              <Grid item xs={12} md={6}>
                <Grid container>
                  <GridFlex item xs={12} md={6} sx={{ display: "flex", justifyContent: { xs: "center", md: "end" } }}>
                    <CustomText>Penerbitan</CustomText>
                  </GridFlex>
                  <GridFlex item xs={12} md={6} sx={{ display: "flex", justifyContent: { xs: "center", md: "center" } }}>
                    <Select
                      placeholder="Pilih Tahun"
                      startDecorator={<AiFillCalendar style={{ fontSize: "22px" }} />}
                      sx={{ width: "100%", marginLeft: { xs: "0px", md: "30px" }, borderWidth: "3px", borderColor: "#252525", fontWeight: "700", height: "20px" }}
                    >
                      <Option value="2019">2019</Option>
                      <Option value="2020">2020</Option>
                      <Option value="2021">2021</Option>
                      <Option value="2022">2022</Option>
                    </Select>
                  </GridFlex>
                </Grid>
              </Grid>
            </SpaceGrid>
          </CustomBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomSquare>
            <ImgBox>
              <HighchartsReact highcharts={Highcharts} options={options1} />
            </ImgBox>
          </CustomSquare>
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomSquare>
            <ImgBox>
              <HighchartsReact highcharts={Highcharts} options={options2} />
            </ImgBox>
          </CustomSquare>
        </Grid>
      </Grid>
    </Box>
  );
};

// Export Code
export default HomeDash;
