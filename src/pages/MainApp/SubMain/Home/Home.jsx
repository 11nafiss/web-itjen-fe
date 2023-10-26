// Import Library
import { Box } from "@mui/material";

// Import Components
import { 
    Banner,
    Updates, 
    Auditoria, 
    Features, 
    Wisedesc, 
    Eselons, 
    Conmaps 
} from "../../../../components/components";

// Main Declaration
const Home = () => {

// Main Code
  return (
    <main>
      <Box sx={{ paddingTop: { xs: "90px", lg: "0px" } }}>
        <Banner />
        <Updates />
        <Auditoria />
        <Features />
        <Wisedesc />
        <Eselons />
        <Conmaps />
      </Box>
    </main>
  );
};

// Export Code
export default Home;