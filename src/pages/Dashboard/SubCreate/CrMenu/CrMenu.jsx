// Import Library
import { useCallback, useEffect, useState } from "react";
import { Grid, Box, Typography, Divider } from "@mui/material";
import { FormHelperText, Option, Select, Button, Input, FormControl, FormLabel, Radio, RadioGroup } from "@mui/joy";
import { styled } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { createMenu, editMenu, getMenuData } from "../../../../features/actions/menu.action";
import { menuService } from "../../../../services/menu.service";

// MUI Styling CSS
const Kotak = styled(Box)(() => ({
  borderRadius: "15px",
  backgroundColor: "#fff",
  width: "100%",
  minHeight: "505px",
  padding: "30px",
}));

const Judul = styled(Typography)(() => ({
  fontSize: "30px",
  fontWeight: "700",
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
  height: "100%",
  margin: "10px",
}));

const SpaceGrid = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "right",
  width: "100%",
}));

const GridFlex = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "100%",
  padding: "20px 30px",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    padding: "10px 0px",
  },
}));

// Main Declaration
const CrMenu = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [menuId, setMenuId] = useState(id);
  console.log("ini id", menuId);
  const [menuText, setMenuText] = useState("");
  const [menuLevel, setMenuLevel] = useState();
  const [parentId, setParentId] = useState();
  const [link, setLink] = useState("");
  const [hasSubMenu, setHasSubMenu] = useState("Tidak");

  const { errorMessage } = useAppSelector((state) => state.menu.createMenu);
  const dataMenu = useAppSelector((state) => state.menu.menuAll.dataMenu);
  const ParentMenu1 = dataMenu.filter((item) => item.menuLevel === 1);
  const ParentMenu2 = dataMenu.filter((item) => item.menuLevel === 2);

  const fetchMenuById = useCallback(async () => {
    const response = await menuService.getMenuById(id);
    setMenuId(response.id);
    setMenuText(response.menuText);
    setMenuLevel(response.menuLevel);
    setParentId(response.parentId);
    setLink(response.link);
    setHasSubMenu(response.hasSubMenu === true ? "Iya" : "Tidak");
  }, [id]);

  useEffect(() => {
    dispatch(getMenuData());
    if (props.mode === "Edit") {
      fetchMenuById();
    }
  }, [fetchMenuById, props, dispatch]);

  const handleUploadMenu = (e) => {
    e.preventDefault();

    let tableConfig = {
      menuId: id,
      menuText,
      menuLevel,
      parentId,
      link,
      hasSubMenu: hasSubMenu === "Iya" ? true : false,
      isExternalLink: false,
    };

    if (props.mode === "Edit") {
      dispatch(editMenu({ id, tableConfig }));
      console.log("ini table", tableConfig);
    } else {
      dispatch(createMenu(tableConfig));
    }

    navigate("/dashboard/menus");
    navigate(0);
  };

  console.log("ini mode", props.mode);

  // Main Code
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#D9D9D9", height: "100%" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Kotak>
            <Judul>{props.mode} Menu</Judul>
            <Divider sx={{ borderSize: "20px" }} />
            <form onSubmit={handleUploadMenu}>
              <SpaceGrid container sx={{ justifyContent: { xs: "center", md: "left" }, paddingTop: "10px" }}>
                <GridFlex item xs={12} md={6} sx={{ justifyContent: { xs: "center", md: "left" } }}>
                  <FormControl required sx={{ width: "100%" }}>
                    <FormLabel
                      sx={{
                        fontSize: "18px",
                      }}
                    >
                      Nama Menu
                    </FormLabel>
                    <Input value={menuText} onChange={(e) => setMenuText(e.target.value)} size="lg" name="Size" placeholder="Tulis Baru" sx={{ width: "100%", borderColor: "#252525" }} />
                  </FormControl>
                  <Box sx={{ width: "100%", paddingTop: "20px", display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: "20px" }}>
                    {hasSubMenu === "Tidak" ? (
                      <FormControl required sx={{ width: "100%" }}>
                        <FormLabel
                          sx={{
                            fontSize: "18px",
                          }}
                        >
                          Link
                        </FormLabel>
                        <Input value={link} onChange={(e) => setLink(e.target.value)} size="lg" name="Size" placeholder="Link Menuju" sx={{ width: "100%", borderColor: "#252525" }} />
                      </FormControl>
                    ) : (
                      <FormControl required disabled sx={{ width: "100%" }}>
                        <FormLabel
                          sx={{
                            fontSize: "18px",
                          }}
                        >
                          Link
                        </FormLabel>
                        <Input value="" onChange={(e) => setLink(e.target.value)} size="lg" name="Size" placeholder="Tidak Bisa Tulis Link" sx={{ width: "100%", borderColor: "#252525" }} />
                      </FormControl>
                    )}
                  </Box>
                </GridFlex>
                <GridFlex item xs={12} md={6} sx={{ justifyContent: { xs: "center", md: "left" } }}>
                  <Box sx={{ width: "100%", display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: "20px" }}>
                    <FormControl required sx={{ width: "100%" }}>
                      <FormLabel
                        sx={{
                          fontSize: "18px",
                        }}
                      >
                        MenuLevel
                      </FormLabel>
                      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Select
                          value={menuLevel}
                          onChange={(e, v) => setMenuLevel(v)}
                          placeholder="Pilih Level"
                          sx={{
                            width: "100%",
                            borderColor: "#252525",
                            height: "48px",
                          }}
                          required
                        >
                          <Option value={1} label="1">
                            1
                          </Option>
                          <Option value={2} label="2">
                            2
                          </Option>
                          <Option value={3} label="3">
                            3
                          </Option>
                        </Select>
                      </Box>
                    </FormControl>
                    <FormControl required sx={{ width: "100%" }}>
                      <FormLabel
                        sx={{
                          fontSize: "18px",
                        }}
                      >
                        Ada SubMenu
                      </FormLabel>
                      <RadioGroup
                        value={hasSubMenu}
                        onChange={(e) => setHasSubMenu(e.target.value)}
                        orientation="horizontal"
                        aria-labelledby="segmented-controls-example"
                        name="justify"
                        sx={{
                          height: "48px",
                          padding: "4px",
                          margin: "0px",
                          borderRadius: "md",
                          bgcolor: "neutral.softBg",
                          "--RadioGroup-gap": "4px",
                          "--Radio-actionRadius": "8px",
                        }}
                      >
                        {menuLevel === 3
                          ? ["Tidak"].map((item) => (
                              <Radio
                                key={item}
                                color="neutral"
                                value={item}
                                disableIcon
                                label={item}
                                variant="plain"
                                sx={{
                                  px: 2,
                                  alignItems: "center",
                                  width: "100%",
                                }}
                                slotProps={{
                                  action: ({ checked }) => ({
                                    sx: {
                                      ...(checked && {
                                        bgcolor: "background.surface",
                                        boxShadow: "md",
                                        "&:hover": {
                                          bgcolor: "background.surface",
                                        },
                                      }),
                                    },
                                  }),
                                }}
                              />
                            ))
                          : ["Iya", "Tidak"].map((item) => (
                              <Radio
                                key={item}
                                color="neutral"
                                value={item}
                                disableIcon
                                label={item}
                                variant="plain"
                                sx={{
                                  px: 2,
                                  alignItems: "center",
                                  width: "100%",
                                }}
                                slotProps={{
                                  action: ({ checked }) => ({
                                    sx: {
                                      ...(checked && {
                                        bgcolor: "background.surface",
                                        boxShadow: "md",
                                        "&:hover": {
                                          bgcolor: "background.surface",
                                        },
                                      }),
                                    },
                                  }),
                                }}
                              />
                            ))}
                      </RadioGroup>
                    </FormControl>
                  </Box>
                  <Box sx={{ width: "100%", paddingTop: "20px", display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: "20px" }}>
                    <FormControl required sx={{ width: "100%" }}>
                      <FormLabel
                        sx={{
                          fontSize: "18px",
                        }}
                      >
                        dari Menu
                      </FormLabel>
                      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Select
                          value={parentId}
                          onChange={(e, v) => setParentId(v)}
                          placeholder="Pilih Menu Sebelum"
                          sx={{
                            width: "100%",
                            borderColor: "#252525",
                            height: "48px",
                          }}
                          required
                        >
                          {menuLevel === 1 ? (
                            <Option value={0} label="!! Ini Menu Awal !!">
                              !! Ini Menu Awal !!
                            </Option>
                          ) : null}
                          {menuLevel === 2
                            ? ParentMenu1.map((option) => (
                                <Option key={option.menuId} value={option.menuId} label={option.menuText}>
                                  {option.menuText}
                                </Option>
                              ))
                            : null}
                          {menuLevel === 3
                            ? ParentMenu2.map((option) => (
                                <Option key={option.menuId} value={option.menuId} label={option.menuText}>
                                  {option.menuText}
                                </Option>
                              ))
                            : null}
                        </Select>
                      </Box>
                    </FormControl>
                  </Box>
                </GridFlex>
                <GridFlex item xs={12} md={12} sx={{ justifyContent: { xs: "center", md: "left" } }}>
                  <Box sx={{ height: "100%", width: "100%", paddingTop: "10px", display: "flex", flexDirection: "column", justifyContent: "left", gap: "30px" }}>
                    <Button
                      type="submit"
                      sx={{
                        width: { xs: "100%", md: "25%" },
                        height: "48px",
                        fontSize: "16px",
                        marginTop: "50px",
                      }}
                    >
                      Submit
                    </Button>
                    {errorMessage && <FormHelperText sx={(theme) => ({ color: theme.vars.palette.danger[400] })}>Upload Menu Gagal</FormHelperText>}
                  </Box>
                </GridFlex>
              </SpaceGrid>
            </form>
          </Kotak>
        </Grid>
      </Grid>
    </Box>
  );
};

CrMenu.propTypes = {
  mode: PropTypes.string,
};

// Export Code
export default CrMenu;
