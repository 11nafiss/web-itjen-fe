// @ts-ignore

// Import Library
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Grid, Container, Box, Typography } from "@mui/material";
import Tooltip from "@mui/joy/Tooltip";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

// Import Assets
import { GiWhistle } from "react-icons/gi";
import { HiOutlineCursorClick, HiDocumentReport } from "react-icons/hi";
import { IoChatboxEllipses } from "react-icons/io5";
import { GoFileSubmodule } from "react-icons/go";
import { RiBook2Fill, RiPencilRuler2Fill } from "react-icons/ri";
import { AiFillPieChart } from "react-icons/ai";

// Main Declaration
const Features = () => {
  const [currentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    created() {
      setLoaded(true);
    },
    mode: "free-snap",
    slides: {
      perView: 2,
      spacing: 10,
    },
    breakpoints: {
      "(max-width: 800px)": {
        slides: {
          perView: 1,
        },
      },
    },
  });

  // MUI Styling CSS
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    padding: "50px 0px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const CustomBox = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    backgroundColor: "#08347C",
    width: "110px",
    height: "110px",
    marginTop: "15px",
  }));

  const CustomType = styled(Typography)(() => ({
    color: "#000000",
    fontSize: "16px",
    fontWeight: "700",
    textAlign: "center",
    cursor: "pointer",
  }));

  // Main Code
  return (
    <CustomContainer>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: "32px",
              color: "#000000",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Fitur Layanan
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className="navigation-wrapper">
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide">
                <Grid container spacing={1}>
                  <Grid item xs={6} lg={3} sx={{ margin: "15px 0px" }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Tooltip title="WISE" color="primary" placement="top" variant="solid" arrow sx={{ cursor: "pointer" }}>
                          <CustomBox style={{ color: "#fff", fontSize: "60px" }}>
                            <GiWhistle  />
                          </CustomBox>
                        </Tooltip>
                      </Grid>
                      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <CustomType>WISE</CustomType>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} lg={3} sx={{ margin: "10px 0px" }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Tooltip title="AlPHA" color="primary" placement="top" variant="solid" arrow sx={{ cursor: "pointer" }}>
                          <CustomBox style={{ color: "#fff", fontSize: "60px" }}>
                            <HiOutlineCursorClick  />
                          </CustomBox>
                        </Tooltip>
                      </Grid>
                      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <CustomType>ALPHA</CustomType>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} lg={3} sx={{ margin: "10px 0px" }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Tooltip title="PNPB" color="primary" placement="top" variant="solid" arrow sx={{ cursor: "pointer" }}>
                          <CustomBox style={{ color: "#fff", fontSize: "60px" }}>
                            <IoChatboxEllipses  />
                          </CustomBox>
                        </Tooltip>
                      </Grid>
                      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <CustomType>PNPB</CustomType>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} lg={3} sx={{ margin: "10px 0px" }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Tooltip title="RKAKL" color="primary" placement="top" variant="solid" arrow sx={{ cursor: "pointer" }}>
                          <CustomBox style={{ color: "#fff", fontSize: "60px" }}>
                            <AiFillPieChart />
                          </CustomBox>
                        </Tooltip>
                      </Grid>
                      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <CustomType>RKAKL</CustomType>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
              <div className="keen-slider__slide">
                <Grid container spacing={1}>
                  <Grid item xs={6} lg={3} sx={{ margin: "10px 0px" }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Tooltip title="Prouki" color="primary" placement="top" variant="solid" arrow sx={{ cursor: "pointer" }}>
                          <CustomBox style={{ color: "#fff", fontSize: "60px" }}>
                            <GoFileSubmodule />
                          </CustomBox>
                        </Tooltip>
                      </Grid>
                      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <CustomType>Prouki</CustomType>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} lg={3} sx={{ margin: "10px 0px" }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Tooltip title="Library" color="primary" placement="top" variant="solid" arrow sx={{ cursor: "pointer" }}>
                          <CustomBox style={{ color: "#fff", fontSize: "55px" }}>
                            <RiBook2Fill />
                          </CustomBox>
                        </Tooltip>
                      </Grid>
                      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <CustomType>Library</CustomType>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} lg={3} sx={{ margin: "10px 0px" }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Tooltip title="EReviuLK" color="primary" placement="top" variant="solid" arrow sx={{ cursor: "pointer" }}>
                          <CustomBox style={{ color: "#fff", fontSize: "60px" }}>
                            <HiDocumentReport />
                          </CustomBox>
                        </Tooltip>
                      </Grid>
                      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <CustomType>ERviuLK</CustomType>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} lg={3} sx={{ margin: "10px 0px" }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Tooltip title="Rules" color="primary" placement="top" variant="solid" arrow sx={{ cursor: "pointer" }}>
                          <CustomBox style={{ color: "#fff", fontSize: "60px" }}>
                            <RiPencilRuler2Fill />
                          </CustomBox>
                        </Tooltip>
                      </Grid>
                      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <CustomType>Rules</CustomType>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </div>
            {loaded && instanceRef.current && (
              <>
                <Arrow left onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()} disabled={currentSlide === 0} />

                <Arrow onClick={(e) => e.stopPropagation() || instanceRef.current?.next()} disabled={currentSlide === instanceRef.current.track.details.slides.length - 1} />
              </>
            )}
          </div>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

// Export Code
export default Features;

// Additional Code
function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";

  return (
    <svg onClick={props.onClick} className={`arrow ${props.left ? "arrow--left" : "arrow--right"} ${disabled} `} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      {props.left && <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />}
      {!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </svg>
  );
}

Arrow.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  left: PropTypes.bool,
};
