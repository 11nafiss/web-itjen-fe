// Import Library
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Divider, List, ListItemButton, ListItemText, Collapse, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// Import Assets
import { ItjenLogo } from "../../../assets/assets";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../hooks/useTypedSelector";
import { getMenuData } from "../../../features/actions/menu.action";

// MUI Styling CSS
const Headlist = styled(Typography)(() => ({
  color: "#08347C",
  fontWeight: 700,
  textTransform: "capitalize",
}));

const Sublist = styled(Typography)(() => ({
  color: "#000000",
  fontWeight: 600,
  textTransform: "capitalize",
}));

const Textlist = styled(Typography)(() => ({
  textTransform: "capitalize",
}));

// Main Declaration
const DrawerBar = () => {
  const [open, setOpen] = useState(-1);
  const [open2, setOpen2] = useState(-1);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMenuData());
  }, [dispatch]);

  const dataMenu = useAppSelector((state) => state.menu.menuAll.dataMenu);
  const MenuLevel1 = dataMenu.filter((item) => item.menuLevel === 1);
  const MenuLevel2 = dataMenu.filter((item) => item.menuLevel === 2);
  const MenuLevel3 = dataMenu.filter((item) => item.menuLevel === 3);

  // Main Code
  return (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={{ flexGrow: 1, my: 2, display: "flex", justifyContent: "center" }}>
        <img src={ItjenLogo} className="headerLogo" />
      </Box>
      <Divider />
      <Box>
        <List sx={{ width: "100%", bgcolor: "background.paper" }} component="nav" aria-labelledby="nested-list-subheader">
          {MenuLevel1.map((m1) => {
            if (m1.hasSubMenu) {
              return (
                <div key={m1.menuId}>
                  <ListItemButton onClick={() => setOpen(open === m1.menuId ? -1 : m1.menuId)}>
                    <ListItemText>
                      <Headlist>{m1.menuText}</Headlist>
                    </ListItemText>
                    {open === m1.menuId ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  {m1.hasSubMenu ? (
                    <Collapse in={open === m1.menuId} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {MenuLevel2.filter((m2) => m2.parentId === m1.menuId).map((m2) => {
                          if (m2.hasSubMenu) {
                            return (
                              <div key={m2.menuId}>
                                <ListItemButton sx={{ pl: 4 }} onClick={() => setOpen2(open2 === m2.menuId ? -1 : m2.menuId)}>
                                  <ListItemText>
                                    <Sublist>{m2.menuText}</Sublist>
                                  </ListItemText>
                                  {open2 === m2.menuId ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                {m2.hasSubMenu ? (
                                  <Collapse in={open2 === m2.menuId} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                      {MenuLevel3.filter((m3) => m3.parentId === m2.menuId).map((m3) => (
                                        <Link key={m3.menuId} to={m3.link} className="link">
                                          <ListItemButton sx={{ pl: 6 }}>
                                            <ListItemText>
                                              <Textlist>{m3.menuText}</Textlist>
                                            </ListItemText>
                                          </ListItemButton>
                                        </Link>
                                      ))}
                                    </List>
                                  </Collapse>
                                ) : null}
                              </div>
                            );
                          } else {
                            return (
                              <Link key={m2.menuId} to={m2.link} className="link">
                                <ListItemButton sx={{ pl: 4 }}>
                                  <ListItemText>
                                    <Sublist>{m2.menuText}</Sublist>
                                  </ListItemText>
                                </ListItemButton>
                              </Link>
                            );
                          }
                        })}
                      </List>
                    </Collapse>
                  ) : null}
                </div>
              );
            } else {
              return (
                <div key={m1.menuId}>
                  <Link to={m1.link} className="link">
                    <ListItemButton>
                      <ListItemText>
                        <Headlist>{m1.menuText}</Headlist>
                      </ListItemText>
                    </ListItemButton>
                  </Link>
                </div>
              );
            }
          })}
          <Link to="/cari?keyword=&page=1" className="link">
            <ListItemButton>
              <ListItemText>
                <Headlist>Cari Artikel</Headlist>
              </ListItemText>
            </ListItemButton>
          </Link>
        </List>
      </Box>
    </Box>
  );
};

// Export Code
export default DrawerBar;
