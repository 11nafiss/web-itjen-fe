// Import Library
import { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { AspectRatio, Box } from "@mui/joy";
import { Link } from "react-router-dom";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../hooks/useTypedSelector";
import { getBanner } from "../../../features/actions/banner.action";
import { BASE_URL } from "../../../services/api";

// Main Declaration
function Banner() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBanner());
  }, [dispatch]);
  const { dataBanner } = useAppSelector((state) => state.banner.bannerAll);

  // Main Code
  return (
    <div>
      <Carousel navButtonsAlwaysVisible={true} fullHeightHover={false}>
        {dataBanner.map((obj, index) => {
          if (obj.link === "" || obj.link === null) {
            return (
              <AspectRatio ratio="16/9" key={index} sx={{ maxHeight: { xs: "100%", lg: "100dvh" }, background: "transparent" }}>
                <Box sx={{ maxHeight: { xs: "100%", lg: "100vh" }, display: { xs: "flex", lg: "none" } }}>
                  <img style={{ objectFit: "cover", height: "100%", width: "100%" }} src={`${BASE_URL}images/${obj.pathGambar}`} alt="" />
                </Box>
              </AspectRatio>
            );
          } else {
            return (
              <Link to={obj.link} key={index} className="link">
                <AspectRatio ratio="16/9" sx={{ maxHeight: { xs: "100%", lg: "100vh" }, background: "transparent" }}>
                  <Box sx={{ maxHeight: { xs: "100%", lg: "100vh" }, display: { xs: "flex", lg: "none" } }}>
                    <img style={{ objectFit: "cover", height: "100%", width: "100%" }} src={`${BASE_URL}images/${obj.pathGambar}`} alt="" />
                  </Box>
                </AspectRatio>
              </Link>
            );
          }
        })}
      </Carousel>
    </div>
  );
}

// Export Code
export default Banner;
