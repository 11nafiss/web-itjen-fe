// Import Library
import React from "react";
import { Link } from "react-router-dom";
import { Container, AppBar, Box, CssBaseline, Drawer, IconButton, Toolbar, useScrollTrigger } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

// Import Assets
import { Kemenkeu } from "../../../assets/assets";
import { GiHamburgerMenu } from "react-icons/gi";

// Import Components
import { Navbar, DrawerBar } from "../../molecules/molecules";

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

// Main Declaration
const Header = (props) => {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

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
    textShadow: "1px 1px 3px #fff",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0px",
      fontSize: "9px",
    },
  }));

  // Main Code
  return (
    <CustomContainer>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <ElevationScroll {...props}>
          <AppBar component="nav" position="fixed">
            <Toolbar sx={{ height: "90px", display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton color="inherit" sx={{ display: { lg: "none" }, color: "#08347C" }} onClick={handleDrawerOpen}>
                  <GiHamburgerMenu />
                </IconButton>
                <Link to="https://www.kemenkeu.go.id/home" className="link">
                  <LogoBox>
                      <img src={Kemenkeu} style={{ width: "50px", height: "50px" }} />
                    <LogoText>
                      <CustomText>Kementerian Keuangan</CustomText>
                      <CustomText>Inspektorat Jenderal</CustomText>
                    </LogoText>
                  </LogoBox>
                </Link>
              </Box>
              <Navbar />
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Box component="nav">
          <Drawer
            container={container}
            anchor="left"
            open={open}
            onClose={handleDrawerClose}
            onOpen={handleDrawerOpen}
            sx={{
              display: { xs: "block", lg: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: { xs: "60%", md: "400px" } },
            }}
          >
            <DrawerBar role="presentation" onClick={handleDrawerClose} />
          </Drawer>
        </Box>
      </Box>
    </CustomContainer>
  );
};

Header.propTypes = {
  window: PropTypes.func,
};

// Export Code
export default Header;
