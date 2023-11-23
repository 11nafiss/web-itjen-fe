// Import Library
import { useEffect } from "react";
import { Grid, Container, Box, Typography } from "@mui/material";
import { Button } from "@mui/joy";
import { styled } from "@mui/material/styles";
import { RWebShare } from "react-web-share";
import { useParams } from "react-router-dom";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";

// Import Components
import { formatDate } from "../../../../utils/custom-format-date";

// Import Assets
import { HiShare } from "react-icons/hi";
import { Juanda } from "../../../../assets/assets";

// Import Components
import { Header, Trending } from "../../../../components/components";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { getArticleTitle } from "../../../../features/actions/article.action";
import { BASE_URL } from "../../../../services/api";

// MUI Styling CSS
const Background = styled(Box)(() => ({
  backgroundColor: "#D9D9D9",
  color: "#000000",
  height: "100%",
  overflow: "hidden",
}));

const CustomContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "80px",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  height: "100%",
  width: "100%",
  backgroundColor: "#fff",
  borderRadius: "50px 50px 0 0",
  overflow: "hidden",
  marginInline: "50px",
  [theme.breakpoints.down("md")]: {
    marginInline: "10px",
  },
}));

const TimeBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingInline: "50px",
  height: "60px",
  width: "100%",
  backgroundColor: "#ECBC2A",
  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },
}));

const TimeText = styled(Typography)(() => ({
  fontSize: "16px",
  fontWeight: "700",
  textTransform: "capitalize",
}));

const GridCenter = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
  padding: "0",
  width: "100%",
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "left",
  flexDirection: "column",
  padding: "30px 50px 150px 50px",
  height: "100%",
  width: "100%",
  backgroundColor: "#fff",
  [theme.breakpoints.down("md")]: {
    padding: "50px 30px",
  },
}));

const CustomTitle = styled(Typography)(() => ({
  fontSize: "32px",
  fontWeight: "700",
  textTransform: "capitalize",
  marginBottom: "50px",
}));

// Main Declaration
const Article = () => {
  const { title } = useParams();
  const { category } = useParams();

  console.log("ini kategori artikel", category);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getArticleTitle(title));
  }, [dispatch, title]);

  const { dataArticle } = useAppSelector((state) => state.article.articleTitle);

  // Main Code
  return (
    <div>
      <div className="header-wrapper">
        <Header mode="blue" />
      </div>
      <Background>
        <main style={{ paddingTop: "25px", height: "100%" }}>
          <Grid container sx={{ height: "100%" }}>
            <GridCenter item xs={12} sx={{ alignItems: "start" }}>
              <CustomContainer>
                <CustomBox>
                  <Grid container spacing={0}>
                    <GridCenter item xs={12}>
                      <Box style={{ maxWidth: "1600px", maxHeight: "900px", padding: "0" }}>
                        <img src={dataArticle.featuredImage === "" ? Juanda : `${BASE_URL}thumbnail/${dataArticle.featuredImage}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </Box>
                    </GridCenter>
                    <GridCenter item xs={12}>
                      <TimeBox>
                        <TimeText>{formatDate(dataArticle.publishedAt)}</TimeText>
                        <RWebShare
                          data={{
                            text: `${dataArticle.title}`,
                            url: `https://itjen.kemenkeu.go.id/artikel/${category}/${dataArticle.title?.replace(/ /g, "-")}`,
                            title: `${dataArticle.title}`,
                          }}
                          onClick={() => console.log("shared successfully!")}
                        >
                          <Button variant="soft" endDecorator={<HiShare style={{ fontSize: "20px" }} />} color="neutral" sx={{ backgroundColor: "#252525", color: "#ECBC2A", fontSize: "16px" }}>
                            Share
                          </Button>
                        </RWebShare>
                      </TimeBox>
                    </GridCenter>
                    <GridCenter item xs={12}>
                      <ContentBox>
                        <CustomTitle>{dataArticle.title}</CustomTitle>
                        <FroalaEditorView model={dataArticle.content} />
                      </ContentBox>
                    </GridCenter>
                  </Grid>
                </CustomBox>
              </CustomContainer>
            </GridCenter>
            <GridCenter item xs={12} sx={{ alignItems: "start" }}>
              <Trending />
            </GridCenter>
          </Grid>
        </main>
      </Background>
    </div>
  );
};

// Export Code
export default Article;
