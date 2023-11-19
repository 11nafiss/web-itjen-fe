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
  const MenuLevel3 = dataMenu.filter((item) => item.menuLevel === 3);

  // Main Code
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        {MenuLevel1.map((m1) => (
          <PopupState key={m1.menuId} variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Link to={m1.link ? m1.link : null} className="link">
                  <MenuButton variant="text" {...bindTrigger(popupState)}>
                    {m1.menuText}
                  </MenuButton>
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
                      }

                      return (
                        <Link to={m2.link ? m2.link : null} key={m2.menuId} className="link">
                          <TypeItem onClick={popupState.close}>{m2.menuText}</TypeItem>
                        </Link>
                      );
                    })}
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
