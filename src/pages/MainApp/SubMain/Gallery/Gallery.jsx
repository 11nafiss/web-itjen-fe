// Import Library
import { useEffect } from "react";
import { ImageList, ImageListItem, Grid, Container, Box, Typography, ImageListItemBar } from "@mui/material";
import { AspectRatio } from "@mui/joy";
import { styled } from "@mui/material/styles";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { getImageData } from "../../../../features/actions/image.action";
import { BASE_URL } from "../../../../services/api";
import { formatDate } from "../../../../utils/custom-format-date";
import { Header } from "../../../../components/components";

// MUI Styling CSS
const Background = styled(Box)(() => ({
  backgroundColor: "#F05023",
  color: "#fff",
}));

const BoxBg = styled(Box)(() => ({
  backgroundColor: "#fff",
  color: "#252525",
  borderRadius: "45px 45px 0px 0px",
}));

const CustomContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "left",
  gap: theme.spacing(5),
  padding: "50px 0px",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const GridCenter = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const SubText = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  fontWeight: "700",
  margin: "10px",
  marginLeft: "60px",
  color: "#08347C",
  [theme.breakpoints.down("md")]: {
    fontSize: "26px",
    marginLeft: "0px",
  },
}));

const CustomTitle = styled(Typography)(({ theme }) => ({
  fontSize: "65px",
  fontWeight: "700",
  margin: "50px 0px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "45px",
  },
}));

// Main Declaration
const Gallery = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getImageData());
  }, [dispatch]);
  const dataImage = useAppSelector((state) => state.image.imageAll.dataImage);

  // Main Code
  return (
    <div>
      <div className="header-wrapper">
        <Header mode="white" />
      </div>
      <Background>
        <main style={{ paddingTop: "90px" }}>
          <Background>
            <CustomContainer>
              <Grid container spacing={1}>
                <GridCenter item xs={12}>
                  <CustomTitle>Galeri</CustomTitle>
                </GridCenter>
              </Grid>
            </CustomContainer>
          </Background>
          <BoxBg>
            <CustomContainer>
              <SubText>Daftar Gambar</SubText>
              <ImageList sx={{ width: "100%", height: "100%", maxHeight: "900px", overflowY: "scroll", borderRadius: "50px" }} cols={3} gap={5}>
                {dataImage.map((item) => (
                  <ImageListItem key={item.id} sx={{ height: "100%", width: "100%" }}>
                    <AspectRatio ratio="16/9">
                      <img
                        src={`${BASE_URL}images/${item.pathGambar}?w=248&fit=crop&auto=format`}
                        srcSet={`${BASE_URL}images/${item.pathGambar}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.namaFile}
                        loading="lazy"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </AspectRatio>
                    <ImageListItemBar title={item.namaFile} subtitle={formatDate(item.publishedAt)} />
                  </ImageListItem>
                ))}
              </ImageList>
            </CustomContainer>
          </BoxBg>
        </main>
      </Background>
    </div>
  );
};

// Export Code
export default Gallery;
