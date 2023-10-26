// Import Library
import { Button } from "@mui/joy";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { useNavigate } from "react-router-dom";

// Main Declaration
const BackButton = () => {
  const navigate = useNavigate();

// Main Code
  return (
    <Button
      onClick={() => navigate(-1)}
      color="danger"
      startDecorator={<BackspaceIcon sx={{ fontWeight: "300" }} />}
      sx={{
        height: "30px",
        width: "100px",
      }}
    >
      Kembali
    </Button>
  );
};

// Export Code
export default BackButton;
