// Import Library
import { Grid, Container, Box, Typography, } from "@mui/material";
import { styled } from "@mui/material/styles";

// Import Components
import { HotMenu, CardSlider } from "../../molecules/molecules";

// Main Declaration
const Updates = () => {

// MUI Styling CSS
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    padding: "50px 0px 70px 0px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

// Main Code
  return (
    <CustomContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
        <Typography
          sx={{
            fontSize: "32px",
            color: "#000000",
            fontWeight: "700",
            mb: 2,
          }}
        >
          Infromasi Terbaru
        </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box>
            <HotMenu />
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box>
            {/* <Cards deviceType="desktop" /> */}
            <CardSlider />
          </Box>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

// Export Code
export default Updates;
