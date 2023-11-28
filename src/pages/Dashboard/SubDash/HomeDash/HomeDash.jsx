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
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { getArticleAll } from "../../../../features/actions/article.action";
import { getUserData } from "../../../../features/actions/user.action";
import { useEffect, useState } from "react";
import { formatYear } from "../../../../utils/custom-format-year";

// MUI Styling CSS
const CustomBox = styled(Box)(() => ({
  borderRadius: "15px",
  backgroundColor: "#fff",
  width: "100%",
  minHeight: "150px",
  padding: "30px",
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

const ImgBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
}));

// Main Declaration
const HomeDash = () => {
  const yearNow = new Date().getFullYear().toString();
  const [year, setYear] = useState(yearNow);
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem("visitCounter");
    const storedVisits = Number(storedCount) || 0;
    setVisits(storedVisits);
  }, []);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserData());
    dispatch(getArticleAll());
  }, [dispatch]);

  const handleYear = (event, newValue) => {
    setYear(newValue);
  };

  const userNow = useAppSelector((state) => state.user.loginUser.currentUser);
  const dataUser = useAppSelector((state) => state.user.userAll.dataUser);
  const dataArticle = useAppSelector((state) => state.article.articleAll.dataArticle);
  const tahunArticle = dataArticle.map((item) => formatYear(item.publishedAt)).filter((value, index, current_value) => current_value.indexOf(value) === index);

  const chartKuartal = {
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
    series: [],
  };

  if (year) {
    for (const key of dataUser) {
      const artikelQ1 = dataArticle.filter((item) => {
        return item.authorName === key.username && new Date(item.publishedAt).getFullYear() == year && Math.ceil((new Date(item.publishedAt).getMonth() + 1) / 3) === 1;
      });
      const artikelQ2 = dataArticle.filter((item) => {
        return item.authorName === key.username && new Date(item.publishedAt).getFullYear() == year && Math.ceil((new Date(item.publishedAt).getMonth() + 1) / 3) === 2;
      });
      const artikelQ3 = dataArticle.filter((item) => {
        return item.authorName === key.username && new Date(item.publishedAt).getFullYear() == year && Math.ceil((new Date(item.publishedAt).getMonth() + 1) / 3) === 3;
      });
      const artikelQ4 = dataArticle.filter((item) => {
        return item.authorName === key.username && new Date(item.publishedAt).getFullYear() == year && Math.ceil((new Date(item.publishedAt).getMonth() + 1) / 3) === 4;
      });

      chartKuartal.series.push({
        name: key.username,
        data: [artikelQ1.length, artikelQ2.length, artikelQ3.length, artikelQ4.length],
      });
    }
  }

  const chartBulan = {
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
    series: [],
  };

  if (year) {
    for (const key of dataUser) {
      const artikelB1 = dataArticle.filter((item) => {
        return item.authorName === key.username && new Date(item.publishedAt).getFullYear() == year && new Date(item.publishedAt).getMonth() === 0;
      });
      const artikelB2 = dataArticle.filter((item) => {
        return item.authorName === key.username && new Date(item.publishedAt).getFullYear() == year && new Date(item.publishedAt).getMonth() === 1;
      });
      const artikelB3 = dataArticle.filter((item) => {
        return item.authorName === key.username && new Date(item.publishedAt).getFullYear() == year && new Date(item.publishedAt).getMonth() === 2;
      });
      const artikelB4 = dataArticle.filter((item) => {
        return item.authorName === key.username && new Date(item.publishedAt).getFullYear() == year && new Date(item.publishedAt).getMonth() === 3;
      });
      const artikelB5 = dataArticle.filter((item) => {
        return item.authorName === key.username && new Date(item.publishedAt).getFullYear() == year && new Date(item.publishedAt).getMonth() === 4;
      });
      const artikelB6 = dataArticle.filter((item) => {
        return item.authorName === key.username && new Date(item.publishedAt).getFullYear() == year && new Date(item.publishedAt).getMonth() === 5;
      });
      const artikelB7 = dataArticle.filter((item) => {
        return item.authorName === key.username && new Date(item.publishedAt).getFullYear() == year && new Date(item.publishedAt).getMonth() === 6;
      });
      const artikelB8 = dataArticle.filter((item) => {
        return item.authorName === key.username && new Date(item.publishedAt).getFullYear() == year && new Date(item.publishedAt).getMonth() === 7;
      });
      const artikelB9 = dataArticle.filter((item) => {
        return item.authorName === key.username && new Date(item.publishedAt).getFullYear() == year && new Date(item.publishedAt).getMonth() === 8;
      });
      const artikelB10 = dataArticle.filter((item) => {
        return item.authorName === key.username && new Date(item.publishedAt).getFullYear() == year && new Date(item.publishedAt).getMonth() === 9;
      });
      const artikelB11 = dataArticle.filter((item) => {
        return item.authorName === key.username && new Date(item.publishedAt).getFullYear() == year && new Date(item.publishedAt).getMonth() === 10;
      });
      const artikelB12 = dataArticle.filter((item) => {
        return item.authorName === key.username && new Date(item.publishedAt).getFullYear() == year && new Date(item.publishedAt).getMonth() === 11;
      });

      chartBulan.series.push({
        name: key.username,
        data: [artikelB1.length, artikelB2.length, artikelB3.length, artikelB4.length, artikelB5.length, artikelB6.length, artikelB7.length, artikelB8.length, artikelB9.length, artikelB10.length, artikelB11.length, artikelB12.length],
      });
    }
  }

  // Main Code
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#D9D9D9" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <CustomBox>
            <CustomTitle>Halo, {userNow.username}</CustomTitle>
            <Divider sx={{ borderSize: "20px" }} />
            <SpaceGrid container>
              <GridFlex item xs={12} md={6} sx={{ display: "flex", justifyContent: { xs: "center", md: "start " }, margin: { xs: "30px 0px", md: "0px 0px" } }}>
                <CustomText>Pengunjung Website</CustomText>
                <IconBox>
                  <MdVisibility />
                </IconBox>
                <CustomText sx={{ display: "flex" }}>{visits}</CustomText>
              </GridFlex>
              <Grid item xs={12} md={6}>
                <Grid container>
                  <GridFlex item xs={12} md={6} sx={{ display: "flex", justifyContent: { xs: "center", md: "end" } }}>
                    <CustomText>Penerbitan</CustomText>
                  </GridFlex>
                  <GridFlex item xs={12} md={6} sx={{ display: "flex", justifyContent: { xs: "center", md: "center" } }}>
                    <Select
                      value={year}
                      onChange={handleYear}
                      placeholder="Pilih Tahun"
                      startDecorator={<AiFillCalendar style={{ fontSize: "22px" }} />}
                      sx={{ width: "100%", marginLeft: { xs: "0px", md: "30px" }, borderWidth: "3px", borderColor: "#252525", fontWeight: "700", height: "20px" }}
                    >
                      {tahunArticle.map((obj) => {
                        return (
                          <Option key={obj} value={obj} label={obj.toString()}>
                            {obj}
                          </Option>
                        );
                      })}
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
              <HighchartsReact highcharts={Highcharts} options={chartKuartal} />
            </ImgBox>
          </CustomSquare>
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomSquare>
            <ImgBox>
              <HighchartsReact highcharts={Highcharts} options={chartBulan} />
            </ImgBox>
          </CustomSquare>
        </Grid>
      </Grid>
    </Box>
  );
};

// Export Code
export default HomeDash;
