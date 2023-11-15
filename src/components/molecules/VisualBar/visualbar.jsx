// Import Library
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FaListAlt } from "react-icons/fa";
import { RiHomeSmileFill } from "react-icons/ri";

// MUI Styling CSS
const MenuButton = styled(Button)(() => ({
  color: "#08347C",
  background: "transparent",
  textShadow: "0.5px 0.5px 1.5px #fff",
  fontWeight: 700,
  marginInline: "5px",
}));

// Main Declaration
const VisualBar = () => {
  // Main Code
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginRight: { xs: "10px", md: "65px" } }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Link to="/visual" className="link">
          <MenuButton variant="text" sx={{ fontSize: "16px", display: "flex", alignItems: "center" }}>
            <Box sx={{ fontSize: "30px", mt: "10px", mr: "10px" }}>
              <RiHomeSmileFill />
            </Box>
            Beranda
          </MenuButton>
        </Link>
        <Link to="/visual/semua" className="link">
          <MenuButton variant="text" sx={{ fontSize: "16px", display: "flex", alignItems: "center" }}>
            <Box sx={{ fontSize: "30px", mt: "10px", mr: "10px" }}>
              <FaListAlt />
            </Box>
            Lihat Semua
          </MenuButton>
        </Link>
      </Box>
    </Box>
  );
};

// Export Code
export default VisualBar;
