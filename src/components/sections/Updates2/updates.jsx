// Import Library
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, Container, Box, Typography, Button, ButtonGroup, Divider } from "@mui/material";
import { AspectRatio, Card, CardOverflow, CardContent } from "@mui/joy";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { formatDate } from "../../../utils/custom-format-date";

// Import Assets
import { BiNews } from "react-icons/bi";
import { MdOutlineAnnouncement } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { BsPersonVcard } from "react-icons/bs";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../hooks/useTypedSelector";
import { getArticleByCategory } from "../../../features/actions/article.action";
import { getCategory } from "../../../features/actions/category.action";
import { BASE_URL } from "../../../services/api";

// Main Declaration
const Updates = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getArticleByCategory(2));
    dispatch(getCategory());
  }, [dispatch]);
  const { dataArticle } = useAppSelector((state) => state.article.articleCategory);
  const dataCategory = useAppSelector((state) => state.category.categoryAll.dataCategory);
  console.log("kategori artikel ini = " + dataCategory);

  function FetchArticleByCategory(categoryId) {
    dispatch(getArticleByCategory(categoryId));
  }


  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 10,
    },
    breakpoints: {
      "(max-width: 1200px)": {
        slides: {
          perView: 2,
        },
      },
      "(max-width: 600px)": {
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
    padding: "50px 0px 70px 0px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  // MUI Styling CSS
  const CustomButton = styled(Button)(({ theme }) => ({
    width: "100%",
    backgroundColor: "#0D5CAB",
    borderRadius: "0px",
    height: "100%",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#F05023",
    },

    [theme.breakpoints.down("md")]: {
      height: "100%",
    },
  }));

  const ButtonText = styled(Typography)(({ theme }) => ({
    marginLeft: "5px",
    fontSize: "16px",
    fontWeight: "600",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    fontSize: "20px",

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const MenuBox = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",

    [theme.breakpoints.down("md")]: {
      padding: "20px",
    },
  }));

  const MenuGroup = styled(ButtonGroup)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "250px",
    borderRadius: "12px",
    borderWidth: "0px",
    borderColor: "#08245C",
    height: "360px",
    overflow: "hidden",

    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
      height: "60px",
    },
  }));

  const ClickButton = styled(Button)(() => ({
    width: "100%",
    borderRadius: "0px 0px 12px 12px",
    borderColor: "#F05023",
    borderWidth: "5px",
    backgroundColor: "#F05023",
    margin: "0px",
    textTransform: "capitalize",
    color: "#fff",
    fontWeight: "600",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "#0D5CAB",
    },
  }));

  // Main Code
  return (
    <CustomContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography
            sx={{
              fontSize: "32px",
              color: "#000000",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Infromasi Terbaru
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box>
            <MenuBox>
              <MenuGroup variant="contained" size="large" aria-label="menu button group">
                <CustomButton onClick={() => FetchArticleByCategory(2)}>
                  <IconBox>
                    <BiNews />
                  </IconBox>
                  <ButtonText>Berita</ButtonText>
                </CustomButton>
                <Divider />
                <CustomButton onClick={() => FetchArticleByCategory(3)}>
                  <IconBox>
                    <MdOutlineAnnouncement />
                  </IconBox>
                  <ButtonText>Pengumuman</ButtonText>
                </CustomButton>
                <Divider />
                <CustomButton onClick={() => FetchArticleByCategory(4)}>
                  <IconBox>
                    <VscGraph />
                  </IconBox>
                  <ButtonText>Laporan</ButtonText>
                </CustomButton>
                <Divider />
                <CustomButton onClick={() => FetchArticleByCategory(5)}>
                  <IconBox>
                    <BsPersonVcard />
                  </IconBox>
                  <ButtonText>Siaran Pers</ButtonText>
                </CustomButton>
              </MenuGroup>
            </MenuBox>
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box>
            <div className="navigation-wrapper">
              <div ref={sliderRef} className="keen-slider" style={{ height: "370px" }}>
                {dataArticle.map((obj, index) => (
                  <div key={index} className="keen-slider__slide" style={{ display: "flex", justifyContent: "center" }}>
                    <Card variant="outlined" sx={{ width: "270px", maxWidth: "100%", maxHeight: "360px", borderRadius: "20px", boxShadow: "lg", gap: "5px" }}>
                      <CardOverflow>
                        <AspectRatio ratio="16/9">
                          <img src={`${BASE_URL}images/${obj.featuredImage}`} loading="lazy" alt="" />
                        </AspectRatio>
                      </CardOverflow>
                      <CardContent sx={{ display: "flex", textAlign: "center" }}>
                        <Typography
                          gutterBottom
                          sx={{
                            fontSize: "14px",
                            color: "#0D5CAB",
                            fontWeight: "500",
                            margin: "10px 0px 10px 0px",
                          }}
                        >
                          {formatDate(obj.publishedAt)}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: "600",
                            marginBottom: "2px",
                          }}
                        >
                          {obj.title}
                        </Typography>
                      </CardContent>
                      <CardOverflow variant="soft" sx={{ bgcolor: "background.level1", padding: "0px" }}>
                        <CardContent sx={{ width: "100%", padding: "0px" }}>
                          <Link to={`/${obj.categoryId}/` + obj.title.replace(/ /g, '-')} className="link">
                            <ClickButton variant="solid" size="lg">
                              Baca Artikel
                            </ClickButton>
                          </Link>
                        </CardContent>
                      </CardOverflow>
                    </Card>
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
          </Box>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

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

// Export Code
export default Updates;
