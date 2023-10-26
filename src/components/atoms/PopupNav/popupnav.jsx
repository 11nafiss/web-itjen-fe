import React, { useEffect } from "react";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Grid, Menu, MenuItem, Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../hooks/useTypedSelector";
import { getFeatureData } from "../../../features/actions/feature.action";

// Import Assets
import WidgetsIcon from "@mui/icons-material/Widgets";
import { WhisIcon } from "../../../assets/assets";

const PopupNav = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFeatureData());
  }, [dispatch]);

  const { dataFeature } = useAppSelector((state) => state.feature.featureAll);

  // MUI Styling CSS
  const MenuButton = styled(Button)(() => ({
    color: "#08347C",
    background: "transparent",
    textShadow: "1px 1px 3px #fff",
    fontWeight: 700,
    marginInline: "5px",
  }));

  const MenuIcon = styled(MenuItem)(() => ({
    padding: "0px",
    width: "100px",
  }));

  const CustomBox = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    backgroundColor: "#08347C",
    width: "70px",
    height: "70px",
    margin: "0px 15px",
  }));

  const CustomType = styled(Typography)(() => ({
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

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <MenuButton variant="text" {...bindTrigger(popupState)} sx={{ color: "#08347C", mr: 2, display: { xs: "none", sm: "block" }, margin: 1, marginTop: "17px" }}>
            <WidgetsIcon />
          </MenuButton>
          <Menu {...bindMenu(popupState)}>
            <Grid container spacing={1} sx={{ width: "300px", padding: "15px" }}>
              {dataFeature.map((obj, index) => (
                <GridCenter item key={index} xs={6}>
                  <MenuIcon onClick={popupState.close}>
                    <Grid container spacing={1}>
                      <GridCenter item xs={12}>
                        <CustomBox style={{ padding: "30px" }}>
                          <img src={WhisIcon} style={{ width: "40px" }} />
                        </CustomBox>
                      </GridCenter>
                      <GridCenter item xs={12}>
                        <CustomType>{obj.deskripsi}</CustomType>
                      </GridCenter>
                    </Grid>
                  </MenuIcon>
                </GridCenter>
              ))}
            </Grid>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default PopupNav;
