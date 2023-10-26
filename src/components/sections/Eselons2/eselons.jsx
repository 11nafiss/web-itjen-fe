// Import Library
import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Grid, Container, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/joy/Tooltip";
import PropTypes from "prop-types";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../hooks/useTypedSelector";
import { getEselonData } from "../../../features/actions/eselon.action";
import { Link } from "react-router-dom";

// Additional Code
function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";

  return (
    <svg onClick={props.onClick} className={`arrow arrow--mid ${props.left ? "arrow--left" : "arrow--right"} ${disabled}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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

// Main Declaration & Export
export default function Eselons() {
  const [currentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      created() {
        setLoaded(true);
      },
      mode: "free-snap",
      slides: {
        perView: 4,
      },
      breakpoints: {
        "(max-width: 800px)": {
          slides: {
            perView: 2,
          },
        },
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getEselonData());
  }, [dispatch]);
  const { dataEselon } = useAppSelector((state) => state.eselon.eselonAll);

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

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "25px",
    padding: "20px",
    backgroundColor: "#08347C",
    width: "220px",
    height: "150px",
    margin: "35px auto",
    cursor: "pointer",
    [theme.breakpoints.down("lg")]: {
      width: "150px",
    },
  }));

  const CustomType = styled(Typography)(() => ({
    color: "#fff",
    fontWeight: "700",
    fontSize: "14px",
    textAlign: "center",
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
            Eselon I
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className="navigation-wrapper">
            <div ref={sliderRef} className="keen-slider">
              {dataEselon.map((obj, index) => (
                <div key={index} className="keen-slider__slide">
                  <Tooltip title={obj.id} color="primary" placement="top" variant="solid" arrow>
                    <Link to={obj.link} className="link">
                      <CustomBox>
                        <CustomType>{obj.namaEs1}</CustomType>
                      </CustomBox>
                    </Link>
                  </Tooltip>
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
}
