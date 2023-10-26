// Import Library
import { Box, Link } from "@mui/material";
import { TbArrowRight } from "react-icons/tb";
import { Typography } from "@mui/joy";
import { styled } from "@mui/material/styles";

// Import Assets
import { Kemenkeu } from "../../assets/assets";

// Main Declaration
const NotFound = () => {

// MUI Styling CSS
  const Background = styled(Box)(({ theme }) => ({
    backgroundColor: "#D9D9D9",
    color: "#000000",
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    [theme.breakpoints.down("md")]: {
      height: "100%",
      paddingBottom: "150px",
    },
  }));

  const ImgBox = styled(Box)(() => ({
    maxWidth: "150px",
    margin: "40px 0px",
  }));

  const LinkBox = styled(Box)(() => ({
    padding: "25px",
    width: "500px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  }));

  const CustomLink = styled(Link)(() => ({
    textDecoration: "none",
    color: "default",
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  }));

  const Title = styled(Typography)(({ theme }) => ({
    color: "default",
    fontSize: "75px",
    fontWeight: "600",
    margin: "50px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "50px",
    },
  }));

// Main Code
  return (
    <div className="main-wrapper" style={{ height: "100%", backgroundColor: "#D9D9D9" }}>
      <div className="content-wrapper" style={{ paddingTop: "60px", height: "100%" }}>
        <Background>
          <ImgBox>
            <img src={Kemenkeu} style={{ height: "150px", display: "flex" }} />
          </ImgBox>
          <Title>Halaman Tidak Ditemukan</Title>
          <LinkBox>
            <CustomLink href="/">
              <TbArrowRight style={{ marginRight: "10px", fontSize: "30px" }} /> Kembali Ke Beranda
            </CustomLink>
          </LinkBox>
        </Background>
      </div>
    </div>
  );
};

// Export Code
export default NotFound;
