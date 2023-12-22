// Import Library
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Grid, Input, Typography, useScrollTrigger, Accordion, AccordionSummary, AccordionDetails, Menu, MenuItem, Box, Button, Container, AppBar, CssBaseline, Drawer, IconButton, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

// Import Assets
import { Kemenkeu } from "../../../assets/assets";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchIcon from "@mui/icons-material/Search";

// Import Components
import { DrawerBar } from "../../molecules/molecules";

// Import Assets
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WidgetsIcon from "@mui/icons-material/Widgets";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../hooks/useTypedSelector";
import { getMenuData } from "../../../features/actions/menu.action";
import { getFeatureData } from "../../../features/actions/feature.action";
import { articleSearchSlice } from "../../../features/slice/article.slice";
import { BASE_URL } from "../../../services/api";

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
      color: trigger ? "#08347C" : "#fff",
    },
  });
}

const ScrollHandler = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  });

  if (props.mode === "white") {
    return React.cloneElement(props.children, {
      style: {
        color: trigger ? "#08347C" : "#fff",
        transition: trigger ? "0.3s" : "0.5s",
        boxShadow: "none",
        borderColor: trigger ? "#08347C" : "#fff",
        "&::placeholder": {
          color: trigger ? "#08347C" : "#fff",
        },
      },
    });
  } else {
    return React.cloneElement(props.children, {
      style: {
        color: "#08347C",
        transition: trigger ? "0.3s" : "0.5s",
        boxShadow: "none",
        borderColor: "#08347C",
      },
    });
  }
};

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
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: "100%",
  margin: "15px 0px 0px 10px",
}));

const CustomText = styled(Box)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: "700",
  textTransform: "uppercase",
  [theme.breakpoints.down("md")]: {
    marginLeft: "0px",
    fontSize: "9px",
  },
}));

// MUI Styling CSS
const MenuButton = styled(Button)(() => ({
  background: "transparent",
  fontWeight: 700,
  marginInline: "5px",
  textTransform: "capitalize",
  fontSize: "17px",
}));

const CustomItem = styled(MenuItem)(() => ({
  padding: "0px",
}));

const AccorItem = styled(AccordionSummary)(() => ({
  color: "#000000",
  fontSize: "14px",
  fontWeight: 700,
}));

const CustomAccor = styled(Accordion)(() => ({
  boxShadow: "0px 0px #fff",
  borderWidth: "0px",
  borderRadius: "0px",
  width: "250px",
}));

const SubItem = styled(MenuItem)(() => ({
  color: "#252525",
  fontSize: "14px",
  fontWeight: 500,
}));

const TypeItem = styled(MenuItem)(() => ({
  color: "#252525",
  fontSize: "14px",
  fontWeight: 700,
}));

// MUI Styling CSS
const PopupButton = styled(Button)(() => ({
  color: "#08347C",
  background: "transparent",
  textShadow: "1px 1px 3px #fff",
  fontWeight: 700,
  marginInline: "5px",
}));

const PopupIcon = styled(MenuItem)(() => ({
  padding: "0px",
  width: "100px",
}));

const PopupBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "100%",
  backgroundColor: "#08347C",
  width: "70px",
  height: "70px",
  margin: "0px 15px",
}));

const PopupType = styled(Typography)(() => ({
  color: "#000000",
  fontSize: "16px",
  fontWeight: "700",
  textAlign: "center",
  marginBottom: "20px",
}));

const GridCenter = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  background: "transparent",
  "&:hover": {
    background: "transparent",
  },
  marginLeft: 0,
  transition: theme.transitions.create("width"),
  width: "15ch",
  border: "2px solid",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(Input)(({ theme }) => ({
  color: "#fff",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    minWidth: "60px",
    borderWidth: "20px",
    borderColor: "#fff",
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      fontWeight: "600",
    },
    [theme.breakpoints.up("sm")]: {
      width: "0.1ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

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

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const keyword = useAppSelector((state) => state.article.articleSearch.searchKeyword);

  const navigateToSearch = () => {
    navigate(`/cari?keyword=${keyword}&page=1`);
  };

  useEffect(() => {
    dispatch(getMenuData());
    dispatch(getFeatureData());
  }, [dispatch]);

  const dataMenu = useAppSelector((state) => state.menu.menuAll.dataMenu);
  const MenuLevel1 = dataMenu.filter((item) => item.menuLevel === 1);
  const MenuLevel2 = dataMenu.filter((item) => item.menuLevel === 2);
  const MenuLevel3 = dataMenu.filter((item) => item.menuLevel === 3);

  const { dataFeature } = useAppSelector((state) => state.feature.featureAll);

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
                    <img src={Kemenkeu} style={{ width: "55px", height: "50px" }} />
                    <ScrollHandler {...props}>
                      <LogoText sx={{ display: {xs: "none", md: "flex"} }}>
                        <CustomText>Kementerian Keuangan</CustomText>
                        <CustomText sx={{ fontSize: "11px", fontWeight: "500" }}>Inspektorat Jenderal</CustomText>
                      </LogoText>
                    </ScrollHandler>
                  </LogoBox>
                </Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ display: { xs: "none", lg: "block" } }}>
                  {MenuLevel1.map((m1) => (
                    <PopupState key={m1.menuId} variant="popover" popupId="demo-popup-menu">
                      {(popupState) => (
                        <React.Fragment>
                          <Link to={m1.link ? m1.link : null} className="link">
                            <ScrollHandler {...props}>
                              <MenuButton variant="text" {...bindTrigger(popupState)}>
                                {m1.menuText}
                              </MenuButton>
                            </ScrollHandler>
                          </Link>
                          {m1.hasSubMenu ? (
                            <Menu {...bindMenu(popupState)} sx={{ maxWidth: "500px" }}>
                              {MenuLevel2.filter((m2) => m2.parentId === m1.menuId).map((m2) => {
                                if (m2.hasSubMenu) {
                                  return (
                                    <CustomItem key={m2.menuId}>
                                      <CustomAccor>
                                        <Link to={m2.link ? m2.link : null} className="link">
                                          <AccorItem expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                            {m2.menuText}
                                          </AccorItem>
                                        </Link>
                                        {m2.hasSubMenu ? (
                                          <AccordionDetails>
                                            {MenuLevel3.filter((m3) => m3.parentId === m2.menuId).map((m3) => (
                                              <Link key={m3.menuId} to={m3.link ? m3.link : null} className="link">
                                                <SubItem onClick={popupState.close}>{m3.menuText}</SubItem>
                                              </Link>
                                            ))}
                                          </AccordionDetails>
                                        ) : (
                                          popupState.close
                                        )}
                                      </CustomAccor>
                                    </CustomItem>
                                  );
                                } else {
                                  return (
                                    <Link to={m2.link ? m2.link : null} key={m2.menuId} className="link">
                                      <TypeItem onClick={popupState.close}>{m2.menuText}</TypeItem>
                                    </Link>
                                  );
                                }
                              })}
                            </Menu>
                          ) : null}
                        </React.Fragment>
                      )}
                    </PopupState>
                  ))}
                </Box>
                <ScrollHandler {...props}>
                  <Search sx={{ display: {xs: "none", md: "flex"}, flexDirection: "row" }}>
                    <ScrollHandler {...props}>
                      <StyledInputBase
                        value={keyword}
                        onChange={(e) => dispatch(articleSearchSlice.actions.setSearchKeyword(e.target.value))}
                        placeholder="Cari…"
                        inputProps={{ "aria-label": "search" }}
                        onKeyDown={(ev) => {
                          if (ev.key === "Enter") {
                            ev.preventDefault();
                            navigateToSearch();
                          }
                        }}
                      />
                    </ScrollHandler>
                    <ScrollHandler {...props}>
                      <Button sx={{ borderWidth: "thick" }} onClick={navigateToSearch}>
                        <SearchIcon />
                      </Button>
                    </ScrollHandler>
                  </Search>
                </ScrollHandler>
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState) => (
                    <React.Fragment>
                      <ScrollHandler {...props}>
                        <PopupButton variant="text" {...bindTrigger(popupState)} sx={{ color: "#08347C", mr: 2, display: { xs: "none", sm: "block" }, margin: 1, marginTop: "17px" }}>
                          <WidgetsIcon />
                        </PopupButton>
                      </ScrollHandler>
                      <Menu {...bindMenu(popupState)}>
                        <Grid container spacing={1} sx={{ width: "300px", padding: "15px" }}>
                          {dataFeature.map((obj, index) => (
                            <GridCenter item key={index} xs={6}>
                              <Link to={obj.link} className="link">
                                <PopupIcon onClick={popupState.close}>
                                  <Grid container spacing={1}>
                                    <GridCenter item xs={12}>
                                      <PopupBox style={{ padding: "30px" }}>
                                        <img src={`${BASE_URL}images/${obj.image}`} style={{ width: "35px" }} />
                                      </PopupBox>
                                    </GridCenter>
                                    <GridCenter item xs={12}>
                                      <PopupType>{obj.singkatan}</PopupType>
                                    </GridCenter>
                                  </Grid>
                                </PopupIcon>
                              </Link>
                            </GridCenter>
                          ))}
                        </Grid>
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>
              </Box>
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
            <DrawerBar onClick={handleDrawerClose} />
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
