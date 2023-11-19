// @ts-ignore

// Import Library
import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Grid, Container, Box, Typography } from "@mui/material";
import Tooltip from "@mui/joy/Tooltip";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../hooks/useTypedSelector";
import { getFeatureData } from "../../../features/actions/feature.action";

// Import Assets
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../services/api";

const CustomBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "100%",
  backgroundColor: "#08347C",
  width: "110px",
  height: "110px",
  marginTop: "15px",
  marginInline: "auto",
}));

const CustomType = styled(Typography)(() => ({
  color: "#000000",
  fontSize: "16px",
  fontWeight: "700",
  textAlign: "center",
  cursor: "pointer",
}));

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
      perView: 6,
      spacing: 10,
    },
    breakpoints: {
      "(max-width: 1200px)": {
        slides: {
          perView: 4,
        },
      },
      "(max-width: 800px)": {
        slides: {
          perView: 2,
        },
      },
    },
  });

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFeatureData());
  }, [dispatch]);
  const { dataFeature } = useAppSelector((state) => state.feature.featureAll);

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
              {dataFeature.map((obj, index) => (
                <div key={index} className="keen-slider__slide">
                  <Link to={obj.link} className="link">
                    <Grid container spacing={2}>
                      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Tooltip title={obj.deskripsi} color="primary" placement="top" variant="solid" arrow sx={{ cursor: "pointer" }}>
                          <CustomBox style={{ padding: "20px" }}>
                            <img src={`${BASE_URL}images/${obj.image}`} style={{ width: "50px", height: "50px" }} />
                          </CustomBox>
                        </Tooltip>
                      </Grid>
                      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <CustomType>{obj.singkatan}</CustomType>
                      </Grid>
                    </Grid>
                  </Link>
                </div>
              ))}
            </div>
            {loaded && instanceRef.current && (
              <>
                <Arrow left onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()} disabled={currentSlide === 0} />

                <Arrow onClick={(e) => e.stopPropagation() || instanceRef.current?.next()} disabled={currentSlide === instanceRef.current.track.details - 1} />
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
