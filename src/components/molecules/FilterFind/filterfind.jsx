// Import Library
import {
  Grid,
  Container,
  Box,
  Typography,
} from "@mui/material";
import { Button, Autocomplete, FormControl } from "@mui/joy";
import { styled } from "@mui/material/styles";

// Main Declaration
const FilterFind = () => {

// MUI Styling CSS
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#ECBC2A",
    color: "#252525",
    height: "80px",
    margin: "25px 25px 0px 25px",
    width: "100%",
    borderWidth: "0px",
    borderColor: "#252525",
    borderRadius: "50px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      margin: "0px",
      height: "250px",
    },
  }));

  const FilterText = styled(Typography)(() => ({
    fontSize: "18px",
    fontWeight: "700",
    textTransform: "capitalize",
  }));

  const GridCenter = styled(Grid)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5px",
  }));

// Main Code
  return (
    <CustomContainer>
      <CustomBox>
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <GridCenter item xs={12} md={5} sx={{ padding: "0px 10px" }}>
              <FilterText>Cari majalah berdasarkan waktu penerbitan</FilterText>
            </GridCenter>
            <GridCenter item xs={12} md={4}>
              <FormControl >
                <Autocomplete placeholder="Pilih Tahun" options={tahun} sx={{ width: { xs:350, md:220, lg:280 } }} />
              </FormControl>
            </GridCenter>
            <GridCenter item xs={12} md={3}>
              <Button color="neutral" sx={{ backgroundColor: "#252525", width: { xs:350, md:190 } }}>
                Submit
              </Button>
            </GridCenter>
          </Grid>
        </Container>
      </CustomBox>
    </CustomContainer>
  );
};

// Export Code
export default FilterFind;

// Array Data
const tahun = [{ label: "Semua Tahun" }, { label: "2023" }, { label: "2022" }, { label: "2021" }, { label: "2020" }, { label: "2019" }];
