// Import Library
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, AppBar, Box, CssBaseline, Toolbar, useScrollTrigger } from "@mui/material";
import { styled } from "@mui/material/styles";

// Import Assets
import { Kemenkeu } from "../../../assets/assets";
import { FaListAlt } from "react-icons/fa";
import { RiHomeSmileFill } from "react-icons/ri";

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger ? "rgba(255, 255, 255, 0.8)" : "transparent",
      transition: trigger ? "0.3s" : "0.5s",
    },
  });
}

// MUI Styling CSS
const CustomContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  gap: theme.spacing(5),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const LogoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  alignItems: "center",
  maxWidth: "100%",
  marginLeft: "50px",
  [theme.breakpoints.down("md")]: {
    marginLeft: "20px",
  },
}));

const LogoText = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: "100%",
  margin: "15px 0px 0px 10px",
}));

const CustomText = styled(Box)(({ theme }) => ({
  color: "#08347C",
  fontSize: "12px",
  fontWeight: "700",
  textTransform: "uppercase",
  textShadow: "0.5px 0.5px 0.5px #fff",
  [theme.breakpoints.down("md")]: {
    marginLeft: "0px",
    fontSize: "9px",
  },
}));

const MenuButton = styled(Button)(() => ({
  color: "#08347C",
  background: "transparent",
  textShadow: "0.5px 0.5px 1.5px #fff",
  fontWeight: 700,
  marginInline: "5px",
}));

// Main Declaration
const HeadVisual = (props) => {
  // Main Code
  return (
    <CustomContainer>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <ElevationScroll {...props}>
          <AppBar component="nav" position="fixed">
            <Toolbar sx={{ height: "90px", display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Link to="/" className="link">
                  <LogoBox>
                    <img src={Kemenkeu} style={{ width: "50px", height: "50px" }} />
                    <LogoText>
                      <CustomText>Kementerian Keuangan</CustomText>
                      <CustomText>Inspektorat Jenderal</CustomText>
                    </LogoText>
                  </LogoBox>
                </Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", marginRight: { xs: "10px", md: "65px" } }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Link to="/visual" className="link">
                    <MenuButton variant="text" sx={{ fontSize: "16px", display: "flex", alignItems: "center" }}>
                      <Box sx={{ fontSize: "30px", mt: "10px", mr: "10px" }}>
                        <RiHomeSmileFill />
                      </Box>
                      Beranda
                    </MenuButton>
                  </Link>
                  <Link to="/visual/semua" className="link">
                    <MenuButton variant="text" sx={{ fontSize: "16px", display: "flex", alignItems: "center" }}>
                      <Box sx={{ fontSize: "30px", mt: "10px", mr: "10px" }}>
                        <FaListAlt />
                      </Box>
                      Lihat Semua
                    </MenuButton>
                  </Link>
                </Box>
              </Box>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </Box>
    </CustomContainer>
  );
};

// Export Code
export default HeadVisual;
