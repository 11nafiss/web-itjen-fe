// Import Library
import { Box } from "@mui/material";
import { Avatar, Button, Typography } from "@mui/joy";
import { styled } from "@mui/material/styles";

// Import Assets
import { ImgIr6 } from "../../../../assets/assets";

// Main Declaration
const BoxIrtor6 = () => {

// MUI Styling CSS
  const BackgroundPf = styled(Button)(() => ({
    display: "flex",
    height: "90px",
    width: "260px",
    backgroundColor: "#048BCC",
    alignItems: "start",
    borderColor: "#048BCC",
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
    alignItems: "start",
    justifyContent: "start",
    marginLeft: "15px",
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
        <Avatar alt="inspektorat VI" src={ImgIr6} size="lg" />
        <NameBox>
          <Pfposition>Inspektorat VI</Pfposition>
          <Pfname>Dr. Dedhi Suharto</Pfname>
        </NameBox>
      </ProfileBox>
    </BackgroundPf>
  );
};

// Export Code
export default BoxIrtor6;
