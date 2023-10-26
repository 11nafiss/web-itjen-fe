// Import Library
import Carousel from "react-material-ui-carousel";
import { AspectRatio, Box } from "@mui/joy";

// Import Assets
import { BannerContact, BannerReport, BannerWise } from "../../../assets/assets";

// Main Declaration
function Banner() {

// Main Code
  return (
    <div>
      <Carousel navButtonsAlwaysVisible={true} fullHeightHover={false}>
        <AspectRatio ratio="16/9" sx={{ maxHeight: { xs: "100%", lg: "100vh" }, background: "transparent" }}>
          <Box sx={{ maxHeight: { xs: "100%", lg: "100vh" }, display: { xs: "flex", lg: "none" } }}>
              <img style={{ objectFit: "cover", height: "100", width: "100%" }} src={BannerContact} alt="" />
          </Box>
        </AspectRatio>
        <AspectRatio ratio="16/9" sx={{ maxHeight: { xs: "100%", lg: "100vh" }, background: "transparent" }}>
          <Box sx={{ maxHeight: { xs: "100%", lg: "100vh" }, display: { xs: "flex", lg: "none" } }}>
              <img style={{ objectFit: "cover", height: "100", width: "100%" }} src={BannerReport} alt="" />
          </Box>
        </AspectRatio>
        <AspectRatio ratio="16/9" sx={{ maxHeight: { xs: "100%", lg: "100vh" }, background: "transparent" }}>
          <Box sx={{ maxHeight: { xs: "100%", lg: "100vh" }, display: { xs: "flex", lg: "none" } }}>
              <img style={{ objectFit: "cover", height: "100", width: "100%" }} src={BannerWise} alt="" />
          </Box>
        </AspectRatio>
      </Carousel>
    </div>
  );
}

// Export Code
export default Banner;
