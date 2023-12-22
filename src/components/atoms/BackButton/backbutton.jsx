// Import Library
import { Button } from "@mui/joy";
import ReplyIcon from '@mui/icons-material/Reply';
import { useNavigate } from "react-router-dom";

// Main Declaration
const BackButton = () => {
  const navigate = useNavigate();

// Main Code
  return (
    <Button
      onClick={() => navigate(-1)}
      color="danger"
      startDecorator={<ReplyIcon sx={{ fontWeight: "600", fontSize: "32px" }} />}
      sx={{
        height: "30px",
        width: "70px",
      }}
    >
    </Button>
  );
};

// Export Code
export default BackButton;
