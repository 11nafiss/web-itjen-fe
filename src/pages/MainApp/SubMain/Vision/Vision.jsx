// Import Library
import {
  Grid,
  Container,
  Box,
  Typography,
} from "@mui/material";
import { Button } from "@mui/joy";
import { styled } from "@mui/material/styles";

// Import Components
import { ArVision, Trending } from "../../../../components/components";

// Import Assets
import { Juanda } from "../../../../assets/assets";
import { HiShare } from "react-icons/hi";

// MUI Styling CSS
const Background = styled(Box)(() => ({
  backgroundColor: "#D9D9D9",
  color: "#000000",
  height: "100%",
  overflow: "hidden",
}));

const CustomContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "80px",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  height: "100%",
  width: "100%",
  backgroundColor: "#fff",
  borderRadius: "50px 50px 0 0",
  overflow: "hidden",
  marginInline: "50px",
  [theme.breakpoints.down("md")]: {
    marginInline: "10px",
  },
}));

const TimeBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingInline: "50px",
  height: "60px",
  width: "100%",
  backgroundColor: "#ECBC2A",
  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },
}));

const TimeText = styled(Typography)(() => ({
  fontSize: "16px",
  fontWeight: "700",
  textTransform: "capitalize",
}));

const GridCenter = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
}));

// Main Declaration
const Vision = () => {

// Main Code
  return (
    <Background>
      <main style={{ paddingTop: "25px", height: "100%" }}>
        <Grid container sx={{ height: "100%" }}>
          <GridCenter item xs={12} sx={{ alignItems: "start" }}>
            <CustomContainer>
              <CustomBox>
                <Grid container spacing={0}>
                  <GridCenter item xs={12}>
                    <Box style={{ maxWidth: "1600px", maxHeight: "900px" }}>
                      <img src={Juanda} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </Box>
                  </GridCenter>
                  <GridCenter item xs={12}>
                    <TimeBox>
                      <TimeText>Senin, 27 Februari 2023</TimeText>
                      <Button variant="soft" endDecorator={<HiShare style={{ fontSize: "20px" }} />} color="neutral" sx={{ backgroundColor: "#252525", color: "#ECBC2A", fontSize: "16px" }}>
                        Share
                      </Button>
                    </TimeBox>
                  </GridCenter>
                  <GridCenter item xs={12}>
                    <ArVision />
                  </GridCenter>
                </Grid>
              </CustomBox>
            </CustomContainer>
          </GridCenter>
          <GridCenter item xs={12} sx={{ alignItems: "start" }}>
            <Trending />
          </GridCenter>
        </Grid>
      </main>
    </Background>
  );
};

// Export Code
export default Vision;
