// Import Library
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// Import Components
import { TitleBar3, CardsBar3 } from "../../../../components/components";

// MUI Styling CSS
const Background = styled(Box)(() => ({
  backgroundColor: "#F05023",
  color: "#fff",
}));

// Main Declaration
const Placem = () => {

// Main Code
  return (
    <Background>
      <main style={{ paddingTop: "90px" }}>
        <TitleBar3 />
        <CardsBar3 />
      </main>
    </Background>
  );
};

// Export Code
export default Placem;