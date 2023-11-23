// Import Library
import { Grid, Container, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// Import Assets
import { IoCall } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IoIosBrowsers } from "react-icons/io";

// MUI Styling CSS
const CustomContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  gap: theme.spacing(5),
  padding: "10px 0px 80px 0px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const CustomType = styled(Typography)(() => ({
  fontSize: "16px",
  color: "#00000",
  fontWeight: "300",
}));

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));


// Main Declaration
const Consmaps = () => {

// Main Code
  return (
    <CustomContainer>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: "32px",
              color: "#000000",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Kontak Kami
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", padding: { md: "0px 50px 25px 0px", xs: "auto" } }}>
                <iframe
                  width="100%"
                  height="350"
                  src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=inspektorat%20jenderal%20kementrian%20keuangan+(Itjen%20Kemenkeu)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                  scrolling="no"
                ></iframe>
              </Box>
              <Box sx={{ margin: { xs: "20px 0px", md: "0px" } }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={2}>
                    <CustomBox>
                      <IoIosBrowsers style={{ fontSize: "18px", marginRight: "5px" }} />
                      <CustomType>kemenkeu.go.id</CustomType>
                    </CustomBox>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <CustomBox>
                      <IoCall style={{ fontSize: "18px", marginRight: "5px" }} />
                      <CustomType>(021) 3865430</CustomType>
                    </CustomBox>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <CustomBox>
                      <RiWhatsappFill style={{ fontSize: "18px", marginRight: "5px" }} />
                      <CustomType>081310004134</CustomType>
                    </CustomBox>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <CustomBox>
                      <MdEmail style={{ fontSize: "18px", marginRight: "5px" }} />
                      <CustomType>pengaduan.itjen@kemenkeu.go.id</CustomType>
                    </CustomBox>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

// Export Code
export default Consmaps;
