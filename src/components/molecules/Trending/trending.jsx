// Import Library
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Box, Typography, List, ListItemButton, ListItemText, ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../hooks/useTypedSelector";
import { getArticleTopNews } from "../../../features/actions/article.action";
import { BASE_URL } from "../../../services/api";
import { Juanda } from "../../../assets/assets";
import { AspectRatio } from "@mui/joy";

// MUI Styling CSS
const CustomContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "start",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

const TrendsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "100%",
  width: "100%",
  padding: "35px",
  backgroundColor: "#fff",
  overflow: "hidden",
  justifyContent: "start",
  flexDirection: "column",
  marginInline: "50px",
  [theme.breakpoints.down("md")]: {
    marginInline: "10px",
  },
}));

const ListBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

const MiniTitle = styled(Typography)(({ theme }) => ({
  fontSize: "22px",
  fontWeight: "600",
  textTransform: "capitalize",
  marginBottom: "5px",
  marginInline: "25px",
  [theme.breakpoints.down("md")]: {
    marginInline: "5px",
  },
}));

const ListButton = styled(ListItemButton)(({ theme }) => ({
  width: "300px",
  padding: "25px",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    padding: "10px 0px",
  },
}));


const SubList = styled(ListItemText)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginBottom: "30px",
}));

const ListText = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "600",
  display: "flex",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    margin: "0px 60px",
  },
}));

// Main Declaration
const Trending = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getArticleTopNews());
  }, [dispatch]);

  const { dataArticle } = useAppSelector((state) => state.article.articleTopNews);
  const dataCategory = useAppSelector((state) => state.category.categoryAll.dataCategory);

  console.log(dataArticle);

  const handleUrlCategory = (categoryId) => {
    let category = null;
    for (const obj of dataCategory) {
      if (categoryId === obj.categoryId) {
        category = obj.categoryName;
      }
    }
    if (category !== null) {
      return category.replace(/ /g, "-");
    } else {
      return category;
    }
  };

  // Main Code
  return (
    <CustomContainer>
      <TrendsBox>
        <ListBox>
          <MiniTitle>Berita Terkini</MiniTitle>
          <List sx={{ width: "100%", display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "center", alignItems: "start" }}>
            {dataArticle.map((obj, index) => (
              <ListItem key={index} sx={{ width: "100%", padding: "0px", maxHeight: "250px", justifyContent: "center", alignItems: { xs: "center", md: "start" } }}>
                <Link to={`/artikel/${handleUrlCategory(obj.categoryId)}/${obj.title.replace(/ /g, "-")}`} className="link" style={{ color: "black", width: "100%", display: "flex", justifyContent: "center" }}>
                  <ListButton>
                    <Box sx={{ width: "200px", height: "120px", margin: "0px", marginBottom: "20px" }}>
                      <AspectRatio ratio="16/9">
                        <img src={obj.featuredImage === "" ? Juanda : `${BASE_URL}thumbnail/${obj.featuredImage}`} style={{ maxWidth: "100%", height: "100%", borderRadius: "10px", display: "block" }} />
                      </AspectRatio>
                    </Box>
                    <SubList>
                      <ListText>{obj.title}</ListText>
                    </SubList>
                  </ListButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </ListBox>
      </TrendsBox>
    </CustomContainer>
  );
};

// Export Code
export default Trending;
