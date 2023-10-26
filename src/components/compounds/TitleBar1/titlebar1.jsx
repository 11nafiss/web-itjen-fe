// Import Library
import {
    Grid,
    Container,
    Box,
    Typography,
  } from "@mui/material";
  import { styled } from "@mui/material/styles";
  
  // Main Declaration
  const TitleBar1 = () => {
  
  // MUI Styling CSS
    const Background = styled(Box)(() => ({
      backgroundColor: "#F05023",
      color: "#fff",
    }));
  
    const CustomContainer = styled(Container)(({ theme }) => ({
      display: "flex",
      justifyContent: "space-around",
      gap: theme.spacing(5),
      padding: "30px 0px 70px 0px",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        textAlign: "center",
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
  
    const GridCenter = styled(Grid)(() => ({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }));
  
  // Main Code
    return (
      <Background>
        <CustomContainer>
          <Grid container spacing={1}>
            <GridCenter item xs={12}>
              <CustomTitle>Auditoria</CustomTitle>
            </GridCenter>
          </Grid>
        </CustomContainer>
      </Background>
    );
  };
  
  // Export Code
  export default TitleBar1;
  