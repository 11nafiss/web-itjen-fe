// Import Library
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Grid, Container, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/joy/Tooltip";
import PropTypes from "prop-types";


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
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    created() {
      setLoaded(true);
    },
    mode: "free-snap",
    slides: {
      perView: 1,
    },
    breakpoints: {
      "(max-width: 800px)": {
        slides: {
          perView: 1,
        },
      },
    },
  },
  [
    (slider) => {
      let timeout
      let mouseOver = false
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 2000)
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true
          clearNextTimeout()
        })
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false
          nextTimeout()
        })
        nextTimeout()
      })
      slider.on("dragStarted", clearNextTimeout)
      slider.on("animationEnded", nextTimeout)
      slider.on("updated", nextTimeout)
    },
  ]
  );

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
    margin: "35px 0px 15px 0px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
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
              <div className="keen-slider__slide">
                <Grid container spacing={1}>
                  <Grid item xs={6} lg={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Tooltip title="Setjen" color="primary" placement="top" variant="solid" arrow>
                      <CustomBox>
                        <CustomType>Sekretariat Jenderal</CustomType>
                      </CustomBox>
                    </Tooltip>
                  </Grid>
                  <Grid item xs={6} lg={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Tooltip title="DJP" color="primary" placement="top" variant="solid" arrow>
                      <CustomBox>
                        <CustomType>Direktorat Jenderal Pajak</CustomType>
                      </CustomBox>
                    </Tooltip>
                  </Grid>
                  <Grid item xs={6} lg={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Tooltip title="DJA" color="primary" placement="top" variant="solid" arrow>
                      <CustomBox>
                        <CustomType>Direktorat Jenderal Anggaran</CustomType>
                      </CustomBox>
                    </Tooltip>
                  </Grid>
                  <Grid item xs={6} lg={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Tooltip title="DJBC" color="primary" placement="top" variant="solid" arrow>
                      <CustomBox>
                        <CustomType>Direktorat Jenderal Bea dan Cukai</CustomType>
                      </CustomBox>
                    </Tooltip>
                  </Grid>
                </Grid>
              </div>
              <div className="keen-slider__slide">
                <Grid container spacing={1}>
                  <Grid item xs={6} lg={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Tooltip title="DJKN" color="primary" placement="top" variant="solid" arrow>
                      <CustomBox>
                        <CustomType>Direktorat Jenderal Kekayaan Negara</CustomType>
                      </CustomBox>
                    </Tooltip>
                  </Grid>
                  <Grid item xs={6} lg={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Tooltip title="DJPb" color="primary" placement="top" variant="solid" arrow>
                      <CustomBox>
                        <CustomType>Direktorat Jenderal Perbendaharaan</CustomType>
                      </CustomBox>
                    </Tooltip>
                  </Grid>
                  <Grid item xs={6} lg={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Tooltip title="DJPK" color="primary" placement="top" variant="solid" arrow>
                      <CustomBox>
                        <CustomType>Direktorat Jenderal Perimbangan Keuangan</CustomType>
                      </CustomBox>
                    </Tooltip>
                  </Grid>
                  <Grid item xs={6} lg={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Tooltip title="DJPPR" color="primary" placement="top" variant="solid" arrow>
                      <CustomBox>
                        <CustomType>Direktorat Jenderal Pengelolaan Pembiayaan dan Resiko</CustomType>
                      </CustomBox>
                    </Tooltip>
                  </Grid>
                </Grid>
              </div>
              <div className="keen-slider__slide">
                <Grid container spacing={1}>
                  <Grid item xs={6} lg={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Tooltip title="BPPK" color="primary" placement="top" variant="solid" arrow>
                      <CustomBox>
                        <CustomType>Badan Pendidikan & Pelatihan Keuangan</CustomType>
                      </CustomBox>
                    </Tooltip>
                  </Grid>
                  <Grid item xs={6} lg={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Tooltip title="BKF" color="primary" placement="top" variant="solid" arrow>
                      <CustomBox>
                        <CustomType>Badan Kebijakan Fiskal</CustomType>
                      </CustomBox>
                    </Tooltip>
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
}