// Import Library
import React, { useState } from "react";
import { Grid, Box, Typography, Divider } from "@mui/material";
import { Option, Select, Button, IconButton, Input, FormControl, FormLabel } from "@mui/joy";
import { styled } from "@mui/material/styles";

// Import Assets
import UploadIcon from "@mui/icons-material/Upload";

// Import Editor
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import "font-awesome/css/font-awesome.css";
import FroalaEditorComponent from "react-froala-wysiwyg";

// MUI Styling CSS
const Kotak = styled(Box)(() => ({
  borderRadius: "15px",
  backgroundColor: "#fff",
  width: "100%",
  minHeight: "555px",
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
const CrPlacem = () => {
  const [setUpload] = React.useState(false);
  const [content, setContent] = useState("");

  const handleClickUpload = () => setUpload((bool) => !bool);

  const handleModelChange = (event) => {
    setContent(event);
  };

  // Main Code
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#D9D9D9", height: "100%" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Kotak>
            <Judul>Tambah Pejabat</Judul>
            <Divider sx={{ borderSize: "20px" }} />
            <SpaceGrid container sx={{ justifyContent: { xs: "center", md: "left" }, paddingTop: "10px" }}>
              <GridFlex item xs={12} md={6} sx={{ justifyContent: { xs: "center", md: "left" } }}>
                <FormControl sx={{ width: "100%" }}>
                  <FormLabel
                    sx={{
                      fontSize: "18px",
                    }}
                  >
                    Nama
                  </FormLabel>
                  <Input size="lg" name="Size" placeholder="..." sx={{ width: "100%", borderColor: "#252525" }} />
                </FormControl>
                <Box sx={{ width: "100%", paddingTop: "20px", display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: "20px" }}>
                  <FormControl sx={{ width: "100%" }}>
                    <FormLabel
                      sx={{
                        fontSize: "18px",
                      }}
                    >
                      Jabatan
                    </FormLabel>
                    <Input size="lg" name="Size" placeholder="..." sx={{ width: "100%", borderColor: "#252525" }} />
                  </FormControl>
                </Box>
              </GridFlex>
              <GridFlex item xs={12} md={6} sx={{ justifyContent: { xs: "center", md: "left" } }}>
                <Box sx={{ width: "100%", display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: "20px" }}>
                  <FormControl sx={{ width: "100%" }}>
                    <FormLabel
                      sx={{
                        fontSize: "18px",
                      }}
                    >
                      Eselon
                    </FormLabel>
                    <Select
                      placeholder="Select…"
                      sx={{
                        width: "100%",
                        borderColor: "#252525",
                        height: "48px",
                      }}
                    >
                      <Option value="1">Eselon 1</Option>
                      <Option value="2">Eselon 2</Option>
                      <Option value="3">Eselon 3</Option>
                      <Option value="4">Eselon 4</Option>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ width: "100%" }}>
                    <FormLabel
                      sx={{
                        fontSize: "18px",
                      }}
                    >
                      Atasan
                    </FormLabel>
                    <Select
                      placeholder="Select…"
                      sx={{
                        width: "100%",
                        borderColor: "#252525",
                        height: "48px",
                      }}
                    >
                      <Option value="none">(Tanpa Atasan)</Option>
                      <Option value="awan">Awan Nurmawan Nuh</Option>
                      <Option value="bambang">Bambang Karuliawasto</Option>
                      <Option value="lucia">Lucia Widiharsanti</Option>
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ width: "100%", paddingTop: "20px", display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: "20px" }}>
                  <FormControl sx={{ width: "100%" }}>
                    <FormLabel
                      sx={{
                        fontSize: "18px",
                      }}
                    >
                      Gambar
                    </FormLabel>
                    <Input
                      size="lg"
                      name="Size"
                      placeholder="Insert..."
                      endDecorator={
                        <IconButton aria-label="upload btn" color="neutral" onClick={handleClickUpload}>
                          <UploadIcon />
                        </IconButton>
                      }
                      sx={{ width: "100%", borderColor: "#252525" }}
                    />
                  </FormControl>
                </Box>
              </GridFlex>
              <GridFlex item xs={12} md={12} sx={{ justifyContent: { xs: "center", md: "left" } }}>
                <Box sx={{ height: "100%", width: "100%", paddingTop: "10px", display: "flex", flexDirection: "column", justifyContent: "left", gap: "30px" }}>
                  <Box sx={{ maxWidth: { xs: "350px", sm: "600px", md: "900px", lg: "1250px" } }}>
                    <FroalaEditorComponent tag="textarea" model={content} onModelChange={handleModelChange} />
                  </Box>
                  <Button
                    sx={{
                      width: { xs: "100%", md: "25%" },
                      height: "48px",
                      fontSize: "16px",
                      marginTop: "50px",
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </GridFlex>
            </SpaceGrid>
          </Kotak>
        </Grid>
      </Grid>
    </Box>
  );
};

// Export Code
export default CrPlacem;
