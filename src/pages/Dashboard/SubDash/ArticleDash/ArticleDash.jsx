// Import Library
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import { Button, AspectRatio, IconButton, Card, CardOverflow, Divider, Typography, Input, FormControl } from "@mui/joy";
import { styled } from "@mui/material/styles";

// Import Components
import { AddButton } from "../../../../components/components";
import { formatDate } from "../../../../utils/custom-format-date";

// Import Assets
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { FaSearch } from "react-icons/fa";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { getArticleAll, deleteArticle } from "../../../../features/actions/article.action";
import { BASE_URL } from "../../../../services/api";

// MUI Styling CSS
const CustomBox = styled(Box)(() => ({
  borderRadius: "15px",
  backgroundColor: "#fff",
  width: "100%",
  maxWidth: "1400px",
  overflow: "hidden",
  minHeight: "555px",
  padding: "30px",
}));

const SpaceGrid = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "right",
  width: "100%",
}));

const GridFlex = styled(Grid)(() => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "60px",
}));

// Main Declaration
const ArticleDash = () => {
  const [searchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useAppDispatch();

  const dataArticle = useAppSelector((state) => state.article.articleAll.dataArticle);

  useEffect(() => {
    dispatch(getArticleAll());
  }, [dispatch, searchParams]);

  

  function handleSubmit(event) {
    event.preventDefault();
    console.log(searchInput);
  }

  // Main Code
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#D9D9D9", height: "100%" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <CustomBox>
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "700",
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                height: "100%",
                margin: "10px",
              }}
            >
              Daftar Artikel
            </Typography>
            <Divider sx={{ borderSize: "20px" }} />
            <SpaceGrid container>
              <GridFlex item xs={12} md={6} sx={{ justifyContent: { xs: "left" } }}>
                <Link to="/dashboard/artikel/tambah">
                  <AddButton />
                </Link>
                <Button
                  color="success"
                  sx={{
                    height: "30px",
                    width: "100px",
                    margin: "10px",
                  }}
                >
                  Published
                </Button>
                <Button
                  color="neutral"
                  sx={{
                    height: "30px",
                    width: "100px",
                  }}
                >
                  Pending
                </Button>
              </GridFlex>
              <GridFlex item xs={12} md={6} sx={{ justifyContent: { xs: "center", md: "right" } }}>
                <form onSubmit={handleSubmit}>
                  <FormControl
                    sx={() => ({
                      display: "flex",
                      justifyContent: "right",
                      width: { xs: "100%", md: "300px" },
                    })}
                  >
                    <Input
                      placeholder="Cari"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      endDecorator={
                        <IconButton color="neutral" sx={{ width: "100%", height: "100%" }}>
                          <FaSearch />
                        </IconButton>
                      }
                      sx={{
                        width: "100%",
                        height: "30px",
                        borderColor: "#252525",
                        borderWidth: "3px",
                        margin: "12px 0px",
                      }}
                    />
                  </FormControl>
                </form>
              </GridFlex>
              <GridFlex item xs={12} md={12} sx={{ justifyContent: { xs: "center", md: "left" }, height: "100%" }}>
                <Box sx={{ height: "100%", paddingTop: "30px", display: "grid", gap: "30px", width: "100%", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr 1fr" } }}>
                  {dataArticle.map((obj, index) => (
                    <Card key={index} variant="outlined" sx={{ width: 300, gap: "0px", height: "100%" }}>
                      <CardOverflow>
                        <AspectRatio ratio="16/9">
                          <img src={`${BASE_URL}images/${obj.featuredImage}`} loading="lazy" alt="" />
                        </AspectRatio>
                        <IconButton
                          aria-label="Like minimal photography"
                          size="md"
                          variant="solid"
                          color="warning"
                          sx={{
                            position: "absolute",
                            zIndex: 2,
                            borderRadius: "50%",
                            right: "4rem",
                            bottom: 0,
                            transform: "translateY(50%)",
                          }}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => dispatch(deleteArticle(obj.id))}
                          aria-label="Like minimal photography"
                          size="md"
                          variant="solid"
                          color="danger"
                          sx={{
                            position: "absolute",
                            zIndex: 2,
                            borderRadius: "50%",
                            right: "1rem",
                            bottom: 0,
                            transform: "translateY(50%)",
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </CardOverflow>
                      <Box sx={{ display: "flex", alignItems: "start", mt: "20px" }}>
                        <Typography level="body3" sx={{ fontWeight: "md", color: "blue", fontSize: "14px" }}>
                          {formatDate(obj.publishedAt)}
                        </Typography>
                      </Box>
                      <Typography level="h2" sx={{ fontSize: "16px", my: "10px" }}>
                        {obj.title}
                      </Typography>
                    </Card>
                  ))}
                </Box>
              </GridFlex>
            </SpaceGrid>
          </CustomBox>
        </Grid>
      </Grid>
    </Box>
  );
};

// Export Code
export default ArticleDash;
