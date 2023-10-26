// Import Library
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// Import Components
import { TitleBar2, ImagesBar } from "../../../../components/components";

// MUI Styling CSS
const Background = styled(Box)(() => ({
  backgroundColor: "#F05023",
  color: "#fff",
}));

// Main Declaration
const Gallery = () => {

// Main Code
  return (
    <Background>
      <main style={{ paddingTop: "90px" }}>
        <TitleBar2 />
        <ImagesBar />
      </main>
    </Background>
  );
};

// Export Code
export default Gallery;
