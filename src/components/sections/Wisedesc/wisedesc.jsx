// Import Library
import { Grid, Container, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";

// Import Assets
import { TbCircleArrowUpRight } from "react-icons/tb";

// Main Declaration
const Wisedesc = () => {
  // MUI Styling CSS
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

  const CustomTitle = styled(Typography)(() => ({
    fontSize: "32px",
    color: "#000000",
    fontWeight: "700",
    margin: "5px 0px",
  }));

  const CustomText = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    color: "#000000",
    fontWeight: "500",
    margin: "20px 0px",
    [theme.breakpoints.down("md")]: {
      margin: "20px",
    },
  }));

  const ButtonText = styled(Typography)(() => ({
    fontSize: "16px",
    color: "#fff",
    fontWeight: "600",
  }));

  const IconBox = styled(Box)(() => ({
    display: "flex",
    fontSize: "24px",
    marginLeft: "10px",
  }));

  // Main Code
  return (
    <CustomContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", padding: { md: "0px 25px 0px 0px", xs: "auto" } }}>
            <iframe width="100%" height="350" src="https://www.youtube.com/embed/e8fmmOJdQH8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ marginY: "auto" }}>
          <CustomTitle>WISE</CustomTitle>
          <CustomText>
            Whistleblowing System adalah aplikasi yang disediakan Kementerian Keuangan bagi Anda yang memiliki informasi dan ingin melaporkan suatu perbuatan berindikasi pelanggaran yang terjadi di lingkungan Kementerian Keuangan Republik
            Indonesia.
          </CustomText>
          <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "start" } }}>
            <Link to="https://www.wise.kemenkeu.go.id/#/" className="link">
            <Button variant="solid" sx={{ marginRight: "10px", backgroundColor: "#F05023", mt: "20px" }}>
              <ButtonText>Selanjutnya</ButtonText>
              <IconBox>
                <TbCircleArrowUpRight />
              </IconBox>
            </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

// Export Code
export default Wisedesc;
