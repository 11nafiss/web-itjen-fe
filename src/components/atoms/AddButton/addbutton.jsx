// Import Library
import { Button } from "@mui/joy";

// Import Assets
import Add from "@mui/icons-material/Add";

// Main Declaration
const AddButton = () => {

// Main Code
  return (
    <Button
      startDecorator={<Add sx={{ fontWeight: "300" }} />}
      sx={{
        height: "30px",
        width: "100px",
      }}
    >
      Tambah
    </Button>
  );
};

// Export Code
export default AddButton;
