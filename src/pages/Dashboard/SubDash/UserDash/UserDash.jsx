// Import Library
import { Link } from "react-router-dom";
import { Grid, Box, Typography, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

// Import Components
import { AddButton, SearchBox, TableSpace } from "../../../../components/components";

// Main Declaration
const UserDash = () => {

// MUI Styling CSS
  const CustomBox = styled(Box)(() => ({
    borderRadius: "15px",
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: "1400px",
    minHeight: "555px",
    padding: "30px",
  }));

  const CustomTitle = styled(Typography)(() => ({
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

  const GridFlex = styled(Grid)(() => ({
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "60px",
  }));

// Main Code
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#D9D9D9", height: "100%" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <CustomBox>
            <CustomTitle>Daftar Pengguna</CustomTitle>
            <Divider sx={{ borderSize: "20px" }} />
            <SpaceGrid container>
              <GridFlex item xs={12} md={6} sx={{ justifyContent: { xs: "left"} }}>
              <Link to="/dashboard/users/tambah">
                <AddButton />
                </Link>
              </GridFlex>
              <GridFlex item xs={12} md={6} sx={{ justifyContent: { xs: "center", md:"right"} }}>
                <SearchBox />
              </GridFlex>
              <GridFlex item xs={12} md={12} sx={{ justifyContent: { xs: "center", md:"left"}, height: "100%" }}>
                <Box sx={{ height: "100%", paddingTop: "30px" }}>
                <TableSpace />
                </Box>
              </GridFlex>
            </SpaceGrid>
          </CustomBox>
        </Grid>
      </Grid>
    </Box>
  );
};

// Export Code
export default UserDash;
