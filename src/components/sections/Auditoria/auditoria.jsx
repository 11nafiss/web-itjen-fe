// Import Library
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, Container, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/joy";

// Import Assets
import { MdOutlineArrowCircleRight, MdOutlineDownloadForOffline } from "react-icons/md";
// import { Audit } from "../../../assets/assets";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../hooks/useTypedSelector";
import { getAuditoriaTake } from "../../../features/actions/auditoria.action";
import { BASE_URL } from "../../../services/api";

// Main Declaration
const Auditoria = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAuditoriaTake());
  }, [dispatch]);
  const { dataAuditoria } = useAppSelector((state) => state.auditoria.auditoriaTake);

  // MUI Styling CSS
  const Background = styled(Box)(() => ({
    backgroundColor: "#F05023",
    color: "#fff",
  }));

  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    padding: "50px 0px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const CustomTitle = styled(Typography)(() => ({
    fontSize: "32px",
    color: "#fff",
    fontWeight: "700",
    margin: "5px 0px",
  }));

  const CustomText = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    color: "#fff",
    fontWeight: "500",
    margin: "20px 0px",
    [theme.breakpoints.down("md")]: {
      margin: "20px",
    },
  }));

  const ButtonText = styled(Typography)(() => ({
    fontSize: "16px",
    color: "#0D5CAB",
    fontWeight: "600",
  }));

  const ButtonAudit = styled(Button)(() => ({
    backgroundColor: "#fff",
    padding: "9px",
    margin: "20px 0px",
    fontSize: "16px",
    fontWeight: "500",
    display: "flex",
    justifyContent: "space-between",
    "&:hover": {
      borderColor: "#0D5CAB",
    },
    borderWidth: "2px",
    borderColor: "#0D5CAB",
  }));

  const IconBox = styled(Box)(() => ({
    display: "flex",
    fontSize: "24px",
    marginLeft: "10px",
  }));

  // Main Code
  return (
    <Background>
      {dataAuditoria.map((obj, index) => (
        <CustomContainer key={index}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={{ marginY: "auto" }}>
              <CustomTitle>Auditoria</CustomTitle>
              <CustomText>
                Auditoria adalah majalah internal resmi Inspektorat Jenderal kementerian Keuangan. Memberikan informasi seputar pengawasan disektor pemerintahan didukung oleh penulis dan praktisi yang kredibel pada bidangnya.
              </CustomText>
              <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "start" } }}>
                <Link to={`/baca/${obj.judul}`} className="link">
                  <ButtonAudit variant="outlined" sx={{ marginRight: "10px" }}>
                    <ButtonText>{obj.judul}</ButtonText>
                    <IconBox>
                      <MdOutlineDownloadForOffline />
                    </IconBox>
                  </ButtonAudit>
                </Link>
                <Link to="/auditoria" className="link">
                  <ButtonAudit variant="outlined" sx={{ marginLeft: "10px" }}>
                    <ButtonText>Edisi Lainnya</ButtonText>
                    <IconBox>
                      <MdOutlineArrowCircleRight />
                    </IconBox>
                  </ButtonAudit>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Box sx={{ width: "100%", margin: "30px 50px", display: "flex", justifyContent: "center" }}>
                <img src={`${BASE_URL}images/${obj.pathImage}`} alt="auditoria" className="img-audit" />
              </Box>
            </Grid>
          </Grid>
        </CustomContainer>
      ))}
    </Background>
  );
};

// Export Code
export default Auditoria;
