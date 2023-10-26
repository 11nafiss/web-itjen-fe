// Import Library
import React from "react";
import { Link } from "react-router-dom";
import { Grid, Box, Typography, Divider } from "@mui/material";
import { Option, Select, Radio, RadioGroup, Button, IconButton, Input, FormControl, FormLabel, Checkbox } from "@mui/joy";
import { styled } from "@mui/material/styles";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// Import Components
import { RichText } from "../../../../components/components";

// Import Assets
import UploadIcon from "@mui/icons-material/Upload";
import AddIcon from '@mui/icons-material/Add';

// Main Declaration
const CrArticle = () => {
  const [justify, setJustify] = React.useState("publish");
  const [value, setValue] = React.useState(null);
  const [setUpload] = React.useState(false);

  const handleClickUpload = () => setUpload((bool) => !bool);

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

// Main Code
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#D9D9D9", height: "100%" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Kotak>
            <Judul>Tambah Artikel</Judul>
            <Divider sx={{ borderSize: "20px" }} />
            <SpaceGrid container sx={{ justifyContent: { xs: "center", md: "left" }, paddingTop: "10px" }}>
              <GridFlex item xs={12} md={6} sx={{ justifyContent: { xs: "center", md: "left" } }}>
                <FormControl sx={{ width: "100%" }}>
                  <FormLabel
                    sx={{
                      fontSize: "18px",
                    }}
                  >
                    Judul
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
                      Tanggal
                    </FormLabel>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DatePicker"]} sx={{ padding: "0px", borderColor: "#252525" }}>
                        <DatePicker
                          value={value}
                          onChange={(newValue) => setValue(newValue)}
                          sx={{ width: "100%", "& .MuiOutlinedInput-root": { height: "48px", fontSize: "15px", overflow: "hidden", borderRadius: "7px" }, "& .MuiOutlinedInput-notchedOutline": { borderColor: "#252525", padding: "0px" } }}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </FormControl>
                  <FormControl sx={{ width: "100%" }}>
                    <FormLabel
                      sx={{
                        fontSize: "18px",
                      }}
                    >
                      Kategori
                    </FormLabel>
                    <Select
                      placeholder="Select…"
                      sx={{
                        width: "100%",
                        borderColor: "#252525",
                        height: "48px",
                      }}
                      startDecorator={
                        <Link to="/dashboard/kategori/tambah">
                        <IconButton aria-label="upload btn" color="neutral" sx={{ backgroundColor: "#fff" }} onClick={handleClickUpload}>
                          <AddIcon />
                        </IconButton>
                        </Link>
                      }
                    >
                      <Option value="news">Berita</Option>
                      <Option value="announce">Pengumuman</Option>
                      <Option value="report">Laporan</Option>
                      <Option value="pers">Siaran Pers</Option>
                    </Select>
                  </FormControl>
                </Box>
              </GridFlex>
              <GridFlex item xs={12} md={6} sx={{ justifyContent: { xs: "center", md: "left" } }}>
                <FormControl sx={{ width: "100%" }}>
                  <FormLabel
                    sx={{
                      fontSize: "18px",
                    }}
                  >
                    Caption
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
                  <FormControl sx={{ width: "100%" }}>
                    <FormLabel
                      sx={{
                        fontSize: "18px",
                      }}
                    >
                      Publikasi
                    </FormLabel>
                    <RadioGroup
                      orientation="horizontal"
                      aria-labelledby="segmented-controls-example"
                      name="justify"
                      value={justify}
                      onChange={(event) => setJustify(event.target.value)}
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
                      {["publish", "pending"].map((item) => (
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
              </GridFlex>
              <GridFlex item xs={12} md={12} sx={{ justifyContent: { xs: "center", md: "left" } }}>
                <Box sx={{ height: "100%", width: "100%", paddingTop: "10px", display: "flex", flexDirection: "column", justifyContent: "left", gap: "30px" }}>
                  <RichText />
                  <Box sx={{ width: "100%", display: "flex", justifyContent: "left", padding: "50px 0px 0px 5px" }}>
                    <Checkbox label="Tampilkan di Beranda?" color="neutral" defaultChecked />
                  </Box>
                  <Button
                    sx={{
                      width: { xs: "100%", md: "25%" },
                      height: "48px",
                      fontSize: "16px",
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
export default CrArticle;
