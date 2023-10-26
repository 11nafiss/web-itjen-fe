// Import Library
import {
  Grid,
  Container,
  Box,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Import Components
import { ImagesList } from "../../molecules/molecules";

// Main Declaration
const ImagesBar = () => {

// MUI Styling CSS
  const Background = styled(Box)(() => ({
    backgroundColor: "#fff",
    color: "#252525",
    borderRadius: "45px 45px 0px 0px",
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

  const GridCenter = styled(Grid)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));

  const GridLeft = styled(Grid)(({ theme }) => ({
    display: "flex",
    justifyContent: "Left",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
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

// Main Code
  return (
    <Background>
      <CustomContainer>
        <Grid container spacing={1}>
          <GridLeft item xs={12}>
            <SubText>Daftar Dokumentasi</SubText>
          </GridLeft>
          <GridCenter item xs={12}>
            <ImagesList />
          </GridCenter>
        </Grid>
      </CustomContainer>
    </Background>
  );
};

// Export Code
export default ImagesBar;
