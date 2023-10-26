// Import Library
import { Grid, Box, Typography, Divider } from "@mui/material";
import { Option, Select, Button, Input, FormControl, FormLabel, Textarea } from "@mui/joy";
import { styled } from "@mui/material/styles";

// Main Declaration
const CrMenu = () => {

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

// Main Code
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#D9D9D9", height: "100%" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Kotak>
            <Judul>Tambah Navigasi</Judul>
            <Divider sx={{ borderSize: "20px" }} />
            <SpaceGrid container sx={{ justifyContent: { xs: "center", md: "left" }, paddingTop: "10px" }}>
              <GridFlex item xs={12} md={6} sx={{ justifyContent: { xs: "center", md: "left" } }}>
                <Box sx={{ width: "100%", display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: "20px" }}>
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
                </Box>
                <Box sx={{ width: "100%", paddingTop: "20px", display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: "20px" }}>
                  <FormControl sx={{ width: "100%" }}>
                    <FormLabel
                      sx={{
                        fontSize: "18px",
                      }}
                    >
                      Upload
                    </FormLabel>
                    <Input size="lg" name="Size" placeholder="Insert Link.." sx={{ width: "100%", borderColor: "#252525" }} />
                  </FormControl>
                  <FormControl sx={{ width: "100%" }}>
                    <FormLabel
                      sx={{
                        fontSize: "18px",
                      }}
                    >
                      Urutan
                    </FormLabel>
                    <Select
                      placeholder="Select…"
                      sx={{
                        width: "100%",
                        borderColor: "#252525",
                        height: "48px",
                      }}
                    >
                      <Option value="1">1</Option>
                      <Option value="2">2</Option>
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
                    Deskripsi
                  </FormLabel>
                  <Textarea name="desc" placeholder="Type in here…" variant="soft" size="lg" sx={{ width: "100%", borderColor: "#252525", height: "150px" }} />
                </FormControl>
              </GridFlex>
              <GridFlex item xs={12} md={12} sx={{ justifyContent: { xs: "center", md: "left" } }}>
                <Box sx={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "left", gap: "30px" }}>
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
export default CrMenu;
