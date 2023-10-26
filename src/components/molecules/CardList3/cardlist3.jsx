// Import Library
import { Link } from "react-router-dom";
import { Grid, Container, Typography } from "@mui/material";
import { AspectRatio, Button, Card, CardOverflow, CardContent } from "@mui/joy";
import { styled } from "@mui/material/styles";

// Import Assets
import { ImgIrjen, ImgSekre, ImgIr1, ImgIr2, ImgIr3, ImgIr4 } from "../../../assets/assets";

// Main Declaration
const CardList3 = () => {

// MUI Styling CSS
  const TopText = styled(Typography)(() => ({
    fontSize: "14px",
    color: "#0D5CAB",
    fontWeight: "500",
    margin: "10px 10px",
  }));

  const TitleText = styled(Typography)(() => ({
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "5px 10x",
  }));

  const GridCenter = styled(Grid)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "25px",
  }));

  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    padding: "50px 0px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

// Main Code
  return (
    <CustomContainer>
      <Grid container spacing={2}>
        <GridCenter item xs={12} sm={6} md={4}>
          <Card variant="outlined" sx={{ width: "270px", maxWidth: "100%", height: "330px", borderRadius: "20px", boxShadow: "lg", gap: "0px", marginBottom: "20px" }}>
            <CardOverflow>
              <AspectRatio ratio="4/3">
                <img src={ImgIrjen} loading="lazy" alt="" />
              </AspectRatio>
            </CardOverflow>
            <CardContent sx={{ display: "flex", textAlign: "center" }}>
              <TopText gutterBottom>Inspektur Jenderal</TopText>
              <TitleText>Awan Nurmawan Nuh</TitleText>
            </CardContent>
            <CardOverflow variant="soft" sx={{ bgcolor: "background.level1", padding: "0" }}>
              <CardContent sx={{ width: "100%", padding: "0" }}>
                <Link to="/profil/pejabat/irjen" className="link">
                  <Button variant="solid" size="lg" sx={{ width: "100%", borderRadius: "0px 0px 12px 12px", backgroundColor: "#F05023", margin: "0px" }}>
                    Lihat Pejabat
                  </Button>
                </Link>
              </CardContent>
            </CardOverflow>
          </Card>
        </GridCenter>
        <GridCenter item xs={12} sm={6} md={4}>
          <Card variant="outlined" sx={{ width: "270px", maxWidth: "100%", height: "330px", borderRadius: "20px", boxShadow: "lg", gap: "0px", marginBottom: "20px" }}>
            <CardOverflow>
              <AspectRatio ratio="4/3">
                <img src={ImgSekre} loading="lazy" alt="" />
              </AspectRatio>
            </CardOverflow>
            <CardContent sx={{ display: "flex", textAlign: "center" }}>
              <TopText gutterBottom>Sekretaris Itjen</TopText>
              <TitleText>Alexander Zulkarnain</TitleText>
            </CardContent>
            <CardOverflow variant="soft" sx={{ bgcolor: "background.level1", padding: "0" }}>
              <CardContent sx={{ width: "100%", padding: "0" }}>
                <Button variant="solid" size="lg" sx={{ width: "100%", borderRadius: "0px 0px 12px 12px", backgroundColor: "#F05023", margin: "0px" }}>
                  Lihat Pejabat
                </Button>
              </CardContent>
            </CardOverflow>
          </Card>
        </GridCenter>
        <GridCenter item xs={12} sm={6} md={4}>
          <Card variant="outlined" sx={{ width: "270px", maxWidth: "100%", height: "330px", borderRadius: "20px", boxShadow: "lg", gap: "0px", marginBottom: "20px" }}>
            <CardOverflow>
              <AspectRatio ratio="4/3">
                <img src={ImgIr1} loading="lazy" alt="" />
              </AspectRatio>
            </CardOverflow>
            <CardContent sx={{ display: "flex", textAlign: "center" }}>
              <TopText gutterBottom>Inspektur I</TopText>
              <TitleText>Belis Siswanto</TitleText>
            </CardContent>
            <CardOverflow variant="soft" sx={{ bgcolor: "background.level1", padding: "0" }}>
              <CardContent sx={{ width: "100%", padding: "0" }}>
                <Button variant="solid" size="lg" sx={{ width: "100%", borderRadius: "0px 0px 12px 12px", backgroundColor: "#F05023", margin: "0px" }}>
                  Lihat Pejabat
                </Button>
              </CardContent>
            </CardOverflow>
          </Card>
        </GridCenter>
        <GridCenter item xs={12} sm={6} md={4}>
          <Card variant="outlined" sx={{ width: "270px", maxWidth: "100%", height: "330px", borderRadius: "20px", boxShadow: "lg", gap: "0px", marginBottom: "20px" }}>
            <CardOverflow>
              <AspectRatio ratio="4/3">
                <img src={ImgIr2} loading="lazy" alt="" />
              </AspectRatio>
            </CardOverflow>
            <CardContent sx={{ display: "flex", textAlign: "center" }}>
              <TopText gutterBottom>Inspektur II</TopText>
              <TitleText>Nur Achmad</TitleText>
            </CardContent>
            <CardOverflow variant="soft" sx={{ bgcolor: "background.level1", padding: "0" }}>
              <CardContent sx={{ width: "100%", padding: "0" }}>
                <Button variant="solid" size="lg" sx={{ width: "100%", borderRadius: "0px 0px 12px 12px", backgroundColor: "#F05023", margin: "0px" }}>
                  Lihat Pejabat
                </Button>
              </CardContent>
            </CardOverflow>
          </Card>
        </GridCenter>
        <GridCenter item xs={12} sm={6} md={4}>
          <Card variant="outlined" sx={{ width: "270px", maxWidth: "100%", height: "330px", borderRadius: "20px", boxShadow: "lg", gap: "0px", marginBottom: "20px" }}>
            <CardOverflow>
              <AspectRatio ratio="4/3">
                <img src={ImgIr3} loading="lazy" alt="" />
              </AspectRatio>
            </CardOverflow>
            <CardContent sx={{ display: "flex", textAlign: "center" }}>
              <TopText gutterBottom>Inspektur III</TopText>
              <TitleText>Januarti Tiurmaida</TitleText>
            </CardContent>
            <CardOverflow variant="soft" sx={{ bgcolor: "background.level1", padding: "0" }}>
              <CardContent sx={{ width: "100%", padding: "0" }}>
                <Button variant="solid" size="lg" sx={{ width: "100%", borderRadius: "0px 0px 12px 12px", backgroundColor: "#F05023", margin: "0px" }}>
                  Lihat Pejabat
                </Button>
              </CardContent>
            </CardOverflow>
          </Card>
        </GridCenter>
        <GridCenter item xs={12} sm={6} md={4}>
          <Card variant="outlined" sx={{ width: "270px", maxWidth: "100%", height: "330px", borderRadius: "20px", boxShadow: "lg", gap: "0px", marginBottom: "20px" }}>
            <CardOverflow>
              <AspectRatio ratio="4/3">
                <img src={ImgIr4} loading="lazy" alt="" />
              </AspectRatio>
            </CardOverflow>
            <CardContent sx={{ display: "flex", textAlign: "center" }}>
              <TopText gutterBottom>Inspekur IV</TopText>
              <TitleText>Roberth Gonijaya</TitleText>
            </CardContent>
            <CardOverflow variant="soft" sx={{ bgcolor: "background.level1", padding: "0" }}>
              <CardContent sx={{ width: "100%", padding: "0" }}>
                <Button variant="solid" size="lg" sx={{ width: "100%", borderRadius: "0px 0px 12px 12px", backgroundColor: "#F05023", margin: "0px" }}>
                  Lihat Pejabat
                </Button>
              </CardContent>
            </CardOverflow>
          </Card>
        </GridCenter>
      </Grid>
    </CustomContainer>
  );
};

// Export Code
export default CardList3;
