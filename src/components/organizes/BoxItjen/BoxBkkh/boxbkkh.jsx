// Import Library
import { Box } from "@mui/material";
import { Avatar, Button, Typography } from "@mui/joy";
import { styled } from "@mui/material/styles";

// Main Declaration
const BoxBkkh = () => {

// MUI Styling CSS
  const BackgroundPf = styled(Button)(() => ({
    display: "flex",
    height: "200px",
    width: "90px",
    backgroundColor: "#F05023",
    alignItems: "start",
    borderColor: "#F05023",
    borderRadius: "15px",
    borderWidth: "5px",
    padding: "5px",
    margin: "auto",
  }));

  const ProfileBox = styled(Box)(() => ({
    display: "flex",
    padding: "10px",
    height: "90%",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: "15px",
  }));

  const NameBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    gap: "15px",
    width: "100%",
  }));

  const Pfposition = styled(Typography)(() => ({
    fontSize: "14px",
    fontWeight: "700",
  }));

  const Pfname = styled(Typography)(() => ({
    fontSize: "14px",
    fontWeight: "500",
  }));

// Main Code
  return (
    <BackgroundPf color="warning">
      <ProfileBox>
        <NameBox>
          <Pfposition>BKKH</Pfposition>
          <Avatar alt="BKKH" size="lg" />
          <Pfname>Agus</Pfname>
        </NameBox>
      </ProfileBox>
    </BackgroundPf>
  );
};

// Export Code
export default BoxBkkh;
