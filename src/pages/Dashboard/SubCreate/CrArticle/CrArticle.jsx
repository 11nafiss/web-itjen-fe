// Import Library
import { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Box, Typography, Divider } from "@mui/material";
import { FormHelperText, Option, Select, Radio, RadioGroup, Button, IconButton, Input, FormControl, FormLabel, Checkbox } from "@mui/joy";
import { styled } from "@mui/material/styles";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router-dom";

// Import Assets
import UploadIcon from "@mui/icons-material/Upload";
import AddIcon from "@mui/icons-material/Add";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { createArticle } from "../../../../features/actions/article.action";

// Import Editor
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import FroalaEditorComponent from "react-froala-wysiwyg";

// MUI Styling CSS
const Kotak = styled(Box)(() => ({
  borderRadius: "15px",
  backgroundColor: "#fff",
  width: "100%",
  minHeight: "555px",
  padding: "30px",
}));

const Judul = styled(Typography)(() => ({
  fontSize: "30px",
  fontWeight: "700",
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
  height: "100%",
  margin: "10px",
}));

const SpaceGrid = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "right",
  width: "100%",
}));

const GridFlex = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "100%",
  padding: "20px 30px",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    padding: "10px 0px",
  },
}));

// Main Declaration
const CrArticle = () => {
  const [title, setTitle] = useState("");
  const [content] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [attachment] = useState("");
  const [authorName] = useState("");
  const [categoryId, setCategoryId] = useState();
  const [published, setPublished] = useState("published");
  const [tampilDiBeranda, setTampilDiBeranda] = useState();
  const [pending] = useState();
  const [caption, setCaption] = useState("");
  const [publishedAt, setPublishedAt] = useState("");
  const [thumbnail] = useState();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isLoading, errorMessage } = useAppSelector((state) => state.article.createArticle);

  const [model, setModel] = useState("Example Set");

  const handleModelChange = (event) => {
    setModel(event);
  };

  const handleUploadArticle = (e) => {
    e.preventDefault();
    let articleCredentials = {
      title,
      content,
      featuredImage,
      attachment,
      authorName,
      categoryId,
      published,
      tampilDiBeranda,
      pending,
      caption,
      publishedAt,
      thumbnail,
    };
    dispatch(createArticle(articleCredentials));
    navigate("/dashboard/artikel");
  };

  // Main Code
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#D9D9D9", height: "100%" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Kotak>
            <Judul>Tambah Artikel</Judul>
            <Divider sx={{ borderSize: "20px" }} />
            <form onSubmit={handleUploadArticle}>
              <SpaceGrid container sx={{ justifyContent: { xs: "center", md: "left" }, paddingTop: "10px" }}>
                <GridFlex item xs={12} md={6} sx={{ justifyContent: { xs: "center", md: "left" } }}>
                  <FormControl sx={{ width: "100%" }}>
                    <FormLabel
                      sx={{
                        fontSize: "18px",
                      }}
                    >
                      Judul
                    </FormLabel>
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} size="lg" name="Size" placeholder="Tulis..." sx={{ width: "100%", borderColor: "#252525" }} />
                  </FormControl>
                  <Box sx={{ width: "100%", paddingTop: "20px", display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: "20px" }}>
                    <FormControl sx={{ width: "100%" }}>
                      <FormLabel
                        sx={{
                          fontSize: "18px",
                        }}
                      >
                        Tanggal
                      </FormLabel>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DatePicker"]} sx={{ padding: "0px", borderColor: "#252525" }}>
                          <DatePicker
                            value={publishedAt}
                            onChange={(e) => setPublishedAt(e.target.value)}
                            sx={{ width: "100%", "& .MuiOutlinedInput-root": { height: "48px", fontSize: "15px", overflow: "hidden", borderRadius: "7px" }, "& .MuiOutlinedInput-notchedOutline": { borderColor: "#252525", padding: "0px" } }}
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </FormControl>
                    <FormControl sx={{ width: "100%" }}>
                      <FormLabel
                        sx={{
                          fontSize: "18px",
                        }}
                      >
                        Kategori
                      </FormLabel>
                      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Select
                          value={categoryId}
                          onChange={(e) => setCategoryId(e.target.value)}
                          placeholder="Pilih…"
                          sx={{
                            width: "100%",
                            borderColor: "#252525",
                            height: "48px",
                          }}
                        >
                          <Option value="1">Berita</Option>
                          <Option value="2">Pengumuman</Option>
                          <Option value="4">Siaran Pers</Option>
                        </Select>
                        <Link to="/dashboard/kategori/tambah">
                          <IconButton aria-label="upload btn" color="neutral" sx={{ backgroundColor: "#252525", color: "#fff", "&:hover": { color: "#252525" }, height: "100%", borderRadius: "0px 10px 10px 0px" }}>
                            <AddIcon />
                          </IconButton>
                        </Link>
                      </Box>
                    </FormControl>
                  </Box>
                </GridFlex>
                <GridFlex item xs={12} md={6} sx={{ justifyContent: { xs: "center", md: "left" } }}>
                  <FormControl sx={{ width: "100%" }}>
                    <FormLabel
                      sx={{
                        fontSize: "18px",
                      }}
                    >
                      Gambar
                    </FormLabel>
                    <Input
                      value={featuredImage}
                      onChange={(e) => setFeaturedImage(e.target.value)}
                      size="lg"
                      name="Size"
                      placeholder="Upload..."
                      endDecorator={
                        <IconButton aria-label="upload btn" color="neutral">
                          <UploadIcon />
                        </IconButton>
                      }
                      sx={{ width: "100%", borderColor: "#252525" }}
                    />
                  </FormControl>
                  <Box sx={{ width: "100%", paddingTop: "20px", display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: "20px" }}>
                    <FormControl sx={{ width: "100%" }}>
                      <FormLabel
                        sx={{
                          fontSize: "18px",
                        }}
                      >
                        Caption
                      </FormLabel>
                      <Input value={caption} onChange={(e) => setCaption(e.target.value)} size="lg" name="Size" placeholder="Tulis..." sx={{ width: "100%", borderColor: "#252525" }} />
                    </FormControl>
                    <FormControl sx={{ width: "100%" }}>
                      <FormLabel
                        sx={{
                          fontSize: "18px",
                        }}
                      >
                        Publikasi
                      </FormLabel>
                      <RadioGroup
                        value={published}
                        onChange={(e) => setPublished(e.target.value)}
                        orientation="horizontal"
                        aria-labelledby="segmented-controls-example"
                        name="justify"
                        sx={{
                          height: "48px",
                          padding: "4px",
                          margin: "0px",
                          borderRadius: "md",
                          bgcolor: "neutral.softBg",
                          "--RadioGroup-gap": "4px",
                          "--Radio-actionRadius": "8px",
                        }}
                      >
                        {["published", "pending"].map((item) => (
                          <Radio
                            key={item}
                            color="neutral"
                            value={item}
                            disableIcon
                            label={item}
                            variant="plain"
                            sx={{
                              px: 2,
                              alignItems: "center",
                              width: "100%",
                            }}
                            slotProps={{
                              action: ({ checked }) => ({
                                sx: {
                                  ...(checked && {
                                    bgcolor: "background.surface",
                                    boxShadow: "md",
                                    "&:hover": {
                                      bgcolor: "background.surface",
                                    },
                                  }),
                                },
                              }),
                            }}
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Box>
                </GridFlex>
                <GridFlex item xs={12} md={12} sx={{ justifyContent: { xs: "center", md: "left" } }}>
                  <Box sx={{ height: "100%", width: "100%", paddingTop: "10px", display: "flex", flexDirection: "column", justifyContent: "left", gap: "30px" }}>
                    <FroalaEditorComponent tag="textarea" values={model} onModelChange={handleModelChange} />
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "left", padding: "50px 0px 0px 5px" }}>
                      <Checkbox value={tampilDiBeranda} onChange={(e) => setTampilDiBeranda(e.target.value)} label="Tampilkan di Beranda?" color="neutral" defaultChecked />
                    </Box>
                    <Button
                      sx={{
                        width: { xs: "100%", md: "25%" },
                        height: "48px",
                        fontSize: "16px",
                      }}
                    >
                      {isLoading ? "Loading..." : "Submit"}
                    </Button>
                    {errorMessage && <FormHelperText sx={(theme) => ({ color: theme.vars.palette.danger[400] })}>Upload Article Gagal</FormHelperText>}
                  </Box>
                </GridFlex>
              </SpaceGrid>
            </form>
          </Kotak>
        </Grid>
      </Grid>
    </Box>
  );
};

// Export Code
export default CrArticle;
