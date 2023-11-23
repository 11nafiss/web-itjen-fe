// Import Library
import { Box } from "@mui/material";

// Import Components
import { Banner, Updates, Auditoria, Features, Wisedesc, Eselons, Conmaps, Header } from "../../../../components/components";

// Main Declaration
const Home = () => {
  // Main Code
  return (
    <div>
      <div className="header-wrapper">
        <Header mode="white" />
      </div>
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
    </div>
  );
};

// Export Code
export default Home;
