// Import Library
import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import { Box, CssBaseline, IconButton, Toolbar, Typography, List, Divider, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemIcon from "@mui/material/ListItemIcon";

// Import Assets
import { ItjenLogo } from "../../../assets/assets";
import MenuIcon from "@mui/icons-material/Menu";
import { RiLogoutBoxRFill, RiDashboardFill, RiServiceFill } from "react-icons/ri";
import { ImHome } from "react-icons/im";
import { FaUsers, FaStar } from "react-icons/fa";
import { MdArticle, MdViewCarousel, MdImage } from "react-icons/md";
import { HiGlobeAlt, HiDocumentReport } from "react-icons/hi";
import { IoJournal } from "react-icons/io5";

// Import Api
import { useAppDispatch } from "../../../hooks/useTypedSelector";
import { loginSlice } from "../../../features/slice/user.slice";


const drawerWidth = 220;

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
    backgroundColor: "#08245C",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    backgroundColor: "#08245C",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

// MUI Styling CSS
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  height: "80px",
  backgroundColor: "#08245C",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  height: "80px",
  backgroundColor: "#fff",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
    backgroundColor: "#08245C",
  }),
}));

const HeadBox = styled(Box)(() => ({
  display: "flex",
  flexGrow: 1,
  alignItems: "center",
  maxWidth: "200px",
  height: "50px",
}));


// Main Declaration
const HeadDash = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(loginSlice.actions.logout());
    navigate(`/`);
  };

  // Main Code
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ height: "100%" }}>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              color: "#08245C",
              marginRight: 5,
              paddingLeft: "7px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon style={{ fontSize: "25px" }} />
          </IconButton>
          <HeadBox>
            <img src={ItjenLogo} style={{ width: "100%", height: "100%" }} />
          </HeadBox>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} sx={{ overflow: "hidden" }}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{ color: "#fff" }}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider color="white" />
        <List sx={{ backgroundColor: "#08245C" }}>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Link to="/dashboard" className="link">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "22px",
                  }}
                >
                  <RiDashboardFill />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0, color: "#fff" }}>
                  <Typography sx={{ fontSize: "16px" }}>Dashboard</Typography>
                </ListItemText>
              </ListItemButton>
            </Link>
            <Link to="/dashboard/artikel" className="link">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "22px",
                  }}
                >
                  <MdArticle />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0, color: "#fff" }}>
                  <Typography sx={{ fontSize: "16px" }}>Artikel</Typography>
                </ListItemText>
              </ListItemButton>
            </Link>
            <Link to="/dashboard/banner" className="link">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "22px",
                  }}
                >
                  <MdViewCarousel />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0, color: "#fff" }}>
                  <Typography sx={{ fontSize: "16px" }}>Banner</Typography>
                </ListItemText>
              </ListItemButton>
            </Link>
            <Link to="/dashboard/auditoria" className="link">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "22px",
                  }}
                >
                  <IoJournal />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0, color: "#fff" }}>
                  <Typography sx={{ fontSize: "16px" }}>Auditoria</Typography>
                </ListItemText>
              </ListItemButton>
            </Link>
            <Link to="/dashboard/laporan" className="link">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "25px",
                  }}
                >
                  <HiDocumentReport />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0, color: "#fff" }}>
                  <Typography sx={{ fontSize: "16px" }}>Laporan</Typography>
                </ListItemText>
              </ListItemButton>
            </Link>
            <Link to="/dashboard/pejabat" className="link">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "22px",
                  }}
                >
                  <FaStar />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0, color: "#fff" }}>
                  <Typography sx={{ fontSize: "16px" }}>Pejabat</Typography>
                </ListItemText>
              </ListItemButton>
            </Link>
            <Link to="/dashboard/menus" className="link">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "22px",
                  }}
                >
                  <ImHome />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0, color: "#fff" }}>
                  <Typography sx={{ fontSize: "16px" }}>Navigasi</Typography>
                </ListItemText>
              </ListItemButton>
            </Link>
            <Link to="/dashboard/layanan" className="link">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "22px",
                  }}
                >
                  <RiServiceFill />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0, color: "#fff" }}>
                  <Typography sx={{ fontSize: "16px" }}>Layanan</Typography>
                </ListItemText>
              </ListItemButton>
            </Link>
            <Link to="/dashboard/eselon" className="link">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "22px",
                  }}
                >
                  <HiGlobeAlt />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0, color: "#fff" }}>
                  <Typography sx={{ fontSize: "16px" }}>Eselon</Typography>
                </ListItemText>
              </ListItemButton>
            </Link>
            <Link to="/dashboard/gambar" className="link">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "22px",
                  }}
                >
                  <MdImage />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0, color: "#fff" }}>
                  <Typography sx={{ fontSize: "16px" }}>Gambar</Typography>
                </ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
        <Divider color="white" />
        <List sx={{ backgroundColor: "#08245C" }}>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Link to="/dashboard/users" className="link">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "22px",
                  }}
                >
                  <FaUsers />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0, color: "#fff" }}>
                  <Typography sx={{ fontSize: "16px" }}>Users</Typography>
                </ListItemText>
              </ListItemButton>
            </Link>
            <ListItemButton
              onClick={handleLogOut}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "22px",
                }}
              >
                <RiLogoutBoxRFill />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0, color: "#fff" }}>
                <Typography sx={{ fontSize: "16px" }}>Log Out</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

// Export Code
export default HeadDash;
