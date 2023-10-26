// Import Library
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// Import Components
import { Reader3 } from "../../../../components/components";

// MUI Styling CSS
const Background = styled(Box)(() => ({
  backgroundColor: "#D9D9D9",
  color: "#000000",
  height: "100vh",
  width: "100%",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  margin: "0px",
  padding: "0px",
}));

// Main Declaration
const Books2 = () => {

// Main Code
  return (
    <div className="main-wrapper" style={{ height: "100%" }}>
      <div className="content-wrapper" style={{ paddingTop: "90px", height: "100%", width: "100%" }}>
        <Background>
            <Reader3 />
        </Background>
      </div>
    </div>
  );
};

// Export Code
export default Books2;
