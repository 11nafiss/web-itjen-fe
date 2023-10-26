// Import Library
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Grid, Container, Box, IconButton, Typography } from "@mui/material";

// Import Assets
import { Kemenkeu } from "../../../assets/assets";
import { AiFillFacebook, AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from "react-icons/ai";

// Main Declaration
const Footer = () => {
  // MUI Styling CSs
  const Background = styled(Box)(() => ({
    backgroundColor: "#08347C",
    color: "#fff",
  }));

  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  }));

  const ImgBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "90px",
    width: "110px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(() => ({
    fontSize: "16px",
    color: "#fff",
    fontWeight: "500",
    cursor: "pointer",
    "&:hover": {
      color: "#7A7A7E",
    },
  }));

  // Main Code
  return (
    <Background>
      <Box sx={{ backgroundColor: "#08245C", height: "50px", width: "100%" }} />
      <CustomContainer sx={{ py: 7 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <ImgBox>
                <img src={Kemenkeu} className="footerLogo" />
              </ImgBox>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "#fff",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                Kementerian Keuangan
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#fff",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  mb: 2,
                }}
              >
                Inspektorat Jenderal
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#fff",
                  fontWeight: "500",
                  mb: 2,
                }}
              >
                Hak Cipta Inspektorat Jenderal Kementerian Keuangan
                <br />
                Republik Indonesia
                <br />
                Manajemen Situs Itjen Kemenkeu Gedung Djuanda II Lt. 13
                <br />
                Jalan dr.Wahidin No 1 Jakarta 10710 Kotak Pos 3132 Jkt. 10031
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Box
              sx={{
                gap: "1rem",
                marginBottom: "15px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#fff",
                  fontWeight: "700",
                  mb: 2,
                }}
              >
                More
              </Typography>

              <FooterLink>Peta Situs</FooterLink>
              <br />
              <FooterLink>Prasyarat</FooterLink>
              <br />
              <Link to="https://www.kemenkeu.go.id/hubungi-kami" className="link">
                <FooterLink>Penghubung</FooterLink>
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Box
              sx={{
                gap: "1rem",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#fff",
                  fontWeight: "700",
                  mb: 2,
                }}
              >
                Follow Us
              </Typography>

              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#fff",
                  fontWeight: "500",
                  mb: 1,
                }}
              >
                Cari tahu Informasi Kami lebih lanjut:
              </Typography>

              <IconBox sx={{ margin: "auto" }}>
                <IconButton
                  color="inherit"
                  aria-label="facebook"
                  sx={{
                    width: { xs: "70px", md: "35px" },
                    "&:hover": {
                      color: "#7A7A7E",
                    },
                  }}
                >
                  <AiFillFacebook style={{ cursor: "pointer" }} />
                </IconButton>
                <IconButton
                  color="inherit"
                  aria-label="twitter"
                  sx={{
                    width: { xs: "70px", md: "35px" },
                    "&:hover": {
                      color: "#7A7A7E",
                    },
                  }}
                >
                  <AiOutlineTwitter style={{ cursor: "pointer" }} />
                </IconButton>
                <IconButton
                  color="inherit"
                  aria-label="youtube"
                  sx={{
                    width: { xs: "70px", md: "35px" },
                    "&:hover": {
                      color: "#7A7A7E",
                    },
                  }}
                >
                  <AiFillYoutube style={{ cursor: "pointer" }} />
                </IconButton>
                <IconButton
                  color="inherit"
                  aria-label="instagram"
                  sx={{
                    width: { xs: "70px", md: "35px" },
                    "&:hover": {
                      color: "#7A7A7E",
                    },
                  }}
                >
                  <AiFillInstagram style={{ cursor: "pointer" }} />
                </IconButton>
              </IconBox>
            </Box>
          </Grid>
        </Grid>
      </CustomContainer>
    </Background>
  );
};

// Export Code
export default Footer;
