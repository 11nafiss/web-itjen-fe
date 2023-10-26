// Import Library
import { Grid, Container, Typography } from "@mui/material";
import { AspectRatio, Button, Card, CardOverflow, CardContent } from "@mui/joy";
import { styled } from "@mui/material/styles";

// Import Assets
import { Audit1 } from "../../../assets/assets";

// Main Declaration
const CardList2 = () => {

// MUI Styling CSS
  const TopText = styled(Typography)(() => ({
    fontSize: "14px",
    color: "#0D5CAB",
    fontWeight: "500",
    margin: "15px 10px",
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
        <GridCenter item xs={6} md={4}>
          <Card variant="outlined" sx={{ width: "270px", maxWidth: "100%", height: "330px", borderRadius: "20px", boxShadow: "lg", gap: "0px", marginBottom: "20px" }}>
            <CardOverflow>
              <AspectRatio ratio="14/9">
                <img src={Audit1} loading="lazy" alt="" style={{ objectFit: "cover", height: "100%" }} />
              </AspectRatio>
            </CardOverflow>
            <CardContent sx={{ display: "flex", textAlign: "center" }}>
              <TopText gutterBottom>Auditoria 68</TopText>
              <TitleText>Gelora Penggawa Pengawasan</TitleText>
            </CardContent>
            <CardOverflow variant="soft" sx={{ bgcolor: "background.level1", padding: "0" }}>
              <CardContent sx={{ width: "100%", padding: "0" }}>
                <Button variant="solid" size="lg" sx={{ width: "100%", borderRadius: "0px 0px 12px 12px", backgroundColor: "#F05023" }}>
                  Buka Halaman
                </Button>
              </CardContent>
            </CardOverflow>
          </Card>
        </GridCenter>
        <GridCenter item xs={6} md={4}>
          <Card variant="outlined" sx={{ width: "270px", maxWidth: "100%", height: "330px", borderRadius: "20px", boxShadow: "lg", gap: "0px", marginBottom: "20px" }}>
            <CardOverflow>
              <AspectRatio ratio="14/9">
                <img src={Audit1} loading="lazy" alt="" />
              </AspectRatio>
            </CardOverflow>
            <CardContent sx={{ display: "flex", textAlign: "center" }}>
              <TopText gutterBottom>Auditoria 68</TopText>
              <TitleText>Gelora Penggawa Pengawasan</TitleText>
            </CardContent>
            <CardOverflow variant="soft" sx={{ bgcolor: "background.level1", padding: "0" }}>
              <CardContent sx={{ width: "100%", padding: "0" }}>
                <Button variant="solid" size="lg" sx={{ width: "100%", borderRadius: "0px 0px 12px 12px", backgroundColor: "#F05023" }}>
                  Buka Halaman
                </Button>
              </CardContent>
            </CardOverflow>
          </Card>
        </GridCenter>
        <GridCenter item xs={6} md={4}>
          <Card variant="outlined" sx={{ width: "270px", maxWidth: "100%", height: "330px", borderRadius: "20px", boxShadow: "lg", gap: "0px", marginBottom: "20px" }}>
            <CardOverflow>
              <AspectRatio ratio="14/9">
                <img src={Audit1} loading="lazy" alt="" />
              </AspectRatio>
            </CardOverflow>
            <CardContent sx={{ display: "flex", textAlign: "center" }}>
              <TopText gutterBottom>Auditoria 68</TopText>
              <TitleText>Gelora Penggawa Pengawasan</TitleText>
            </CardContent>
            <CardOverflow variant="soft" sx={{ bgcolor: "background.level1", padding: "0" }}>
              <CardContent sx={{ width: "100%", padding: "0" }}>
                <Button variant="solid" size="lg" sx={{ width: "100%", borderRadius: "0px 0px 12px 12px", backgroundColor: "#F05023" }}>
                  Buka Halaman
                </Button>
              </CardContent>
            </CardOverflow>
          </Card>
        </GridCenter>
        <GridCenter item xs={6} md={4}>
          <Card variant="outlined" sx={{ width: "270px", maxWidth: "100%", height: "330px", borderRadius: "20px", boxShadow: "lg", gap: "0px", marginBottom: "20px" }}>
            <CardOverflow>
              <AspectRatio ratio="14/9">
                <img src={Audit1} loading="lazy" alt="" />
              </AspectRatio>
            </CardOverflow>
            <CardContent sx={{ display: "flex", textAlign: "center" }}>
              <TopText gutterBottom>Auditoria 68</TopText>
              <TitleText>Gelora Penggawa Pengawasan</TitleText>
            </CardContent>
            <CardOverflow variant="soft" sx={{ bgcolor: "background.level1", padding: "0" }}>
              <CardContent sx={{ width: "100%", padding: "0" }}>
                <Button variant="solid" size="lg" sx={{ width: "100%", borderRadius: "0px 0px 12px 12px", backgroundColor: "#F05023" }}>
                  Buka Halaman
                </Button>
              </CardContent>
            </CardOverflow>
          </Card>
        </GridCenter>
        <GridCenter item xs={6} md={4}>
          <Card variant="outlined" sx={{ width: "270px", maxWidth: "100%", height: "330px", borderRadius: "20px", boxShadow: "lg", gap: "0px", marginBottom: "20px" }}>
            <CardOverflow>
              <AspectRatio ratio="14/9">
                <img src={Audit1} loading="lazy" alt="" />
              </AspectRatio>
            </CardOverflow>
            <CardContent sx={{ display: "flex", textAlign: "center" }}>
              <TopText gutterBottom>Auditoria 68</TopText>
              <TitleText>Gelora Penggawa Pengawasan</TitleText>
            </CardContent>
            <CardOverflow variant="soft" sx={{ bgcolor: "background.level1", padding: "0" }}>
              <CardContent sx={{ width: "100%", padding: "0" }}>
                <Button variant="solid" size="lg" sx={{ width: "100%", borderRadius: "0px 0px 12px 12px", backgroundColor: "#F05023" }}>
                  Buka Halaman
                </Button>
              </CardContent>
            </CardOverflow>
          </Card>
        </GridCenter>
        <GridCenter item xs={6} md={4}>
          <Card variant="outlined" sx={{ width: "270px", maxWidth: "100%", height: "330px", borderRadius: "20px", boxShadow: "lg", gap: "0px", marginBottom: "20px" }}>
            <CardOverflow>
              <AspectRatio ratio="14/9">
                <img src={Audit1} loading="lazy" alt="" />
              </AspectRatio>
            </CardOverflow>
            <CardContent sx={{ display: "flex", textAlign: "center" }}>
              <TopText gutterBottom>Auditoria 68</TopText>
              <TitleText>Gelora Penggawa Pengawasan</TitleText>
            </CardContent>
            <CardOverflow variant="soft" sx={{ bgcolor: "background.level1", padding: "0" }}>
              <CardContent sx={{ width: "100%", padding: "0" }}>
                <Button variant="solid" size="lg" sx={{ width: "100%", borderRadius: "0px 0px 12px 12px", backgroundColor: "#F05023" }}>
                  Buka Halaman
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
export default CardList2;
