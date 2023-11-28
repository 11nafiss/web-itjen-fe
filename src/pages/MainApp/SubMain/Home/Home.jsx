// Import Library
import { Box } from "@mui/material";
import { useEffect } from "react";

// Import Components
import { Banner, Updates, Auditoria, Features, Wisedesc, Eselons, Conmaps, Header } from "../../../../components/components";

// Main Declaration
const Home = () => {

  useEffect(() => {
      const storedCount = localStorage.getItem("visitCounter");
      const storedVisits = Number(storedCount) || 0;
      console.info("stored : ", storedVisits);
      localStorage.setItem("visitCounter", storedVisits + 1);
  }, []);

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
