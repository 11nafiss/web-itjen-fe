// Import Library
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Accordion, AccordionSummary, AccordionDetails, Menu, MenuItem, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// Import Assets
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PopupNav, SearchNav } from "../../components";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../hooks/useTypedSelector";
import { getMenuData } from "../../../features/actions/menu.action";

// MUI Styling CSS
const MenuButton = styled(Button)(() => ({
  color: "#08347C",
  background: "transparent",
  textShadow: "1px 1px 3px #fff",
  fontWeight: 700,
  marginInline: "5px",
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

// Main Declaration
const Navbar = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMenuData());
  }, [dispatch]);
  const dataMenu = useAppSelector((state) => state.menu.menuAll.dataMenu);
  const MenuLevel1 = dataMenu.filter((item) => item.menuLevel === 1);
  const MenuLevel2 = dataMenu.filter((item) => item.menuLevel === 2);
  const SubMenu2 = MenuLevel2.find((item) => item.hasSubMenu === true);
  const MenuLevel3 = dataMenu.filter((item) => item.menuLevel === 3);

  // Main Code
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        {MenuLevel1.map((obj1) => (
          <PopupState key={obj1.menuId} variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Link to={obj1.link ? obj1.link : null} className="link">
                  <MenuButton variant="text" {...bindTrigger(popupState)}>
                    {obj1.menuText}
                  </MenuButton>
                </Link>
                {obj1.hasSubMenu ? (
                  <Menu {...bindMenu(popupState)} sx={{ maxWidth: "500px" }}>
                    {SubMenu2.length === 0
                      ? MenuLevel2.map((obj2) => (
                          <TypeItem key={obj2.menuId} onClick={popupState.close}>
                            {obj2.menuText}
                          </TypeItem>
                        ))
                      : MenuLevel2.map((obj2) => (
                          <CustomItem key={obj2.menuId}>
                            <CustomAccor>
                              <Link to={obj2.link ? obj2.link : null} className="link">
                                <AccorItem expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                  {obj2.menuText}
                                </AccorItem>
                              </Link>
                              {obj2.hasSubMenu ? (
                                <AccordionDetails>
                                  {MenuLevel3.map((obj3) => (
                                    <Link key={obj3.menuId} to={obj3.link ? obj3.link : null} className="link">
                                      <SubItem onClick={popupState.close}>{obj3.menuText}</SubItem>
                                    </Link>
                                  ))}
                                </AccordionDetails>
                              ) : (
                                popupState.close
                              )}
                            </CustomAccor>
                          </CustomItem>
                        ))}
                  </Menu>
                ) : null}
              </React.Fragment>
            )}
          </PopupState>
        ))}
      </Box>
      <SearchNav />
      <PopupNav />
    </Box>
  );
};

// Export Code
export default Navbar;
