// Import Library
import { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { AspectRatio, Box } from "@mui/joy";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../hooks/useTypedSelector";
import { getCarouselImage } from "../../../features/actions/carousel.action";
import { BASE_URL } from "../../../services/api";

// Main Declaration
function Banner() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCarouselImage());
  }, [dispatch]);
  const { pathGambar } = useAppSelector((state) => state.carousel.carouselAll);

  // Main Code
  return (
    <div>
      <Carousel navButtonsAlwaysVisible={true} fullHeightHover={false}>
        {pathGambar.map((obj, index) => (
          <AspectRatio ratio="16/9" key={index} sx={{ maxHeight: { xs: "100%", lg: "100vh" }, background: "transparent" }} >
            <Box sx={{ maxHeight: { xs: "100%", lg: "100vh" }, display: { xs: "flex", lg: "none" } }}>
              <img style={{ objectFit: "cover", height: "100%", width: "100%" }} src={`${BASE_URL}images/${obj.pathGambar}`} alt="" />
            </Box>
          </AspectRatio>
        ))}
      </Carousel>
    </div>
  );
}

// Export Code
export default Banner;


