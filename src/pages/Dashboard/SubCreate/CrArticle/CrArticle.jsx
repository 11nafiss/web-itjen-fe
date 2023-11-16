// Import Library
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Grid, Box, Typography, Divider } from "@mui/material";
import { FormHelperText, Option, Select, Radio, RadioGroup, Button, IconButton, Input, FormControl, FormLabel, Checkbox } from "@mui/joy";
import { styled } from "@mui/material/styles";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import PropTypes from "prop-types";

// Import Assets
import AddIcon from "@mui/icons-material/Add";
import UploadIcon from "@mui/icons-material/Upload";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { createArticle, editArticle } from "../../../../features/actions/article.action";
import { artikelService } from "../../../../services/artikel.service";
import { getCategory } from "../../../../features/actions/category.action";
import { BASE_URL } from "../../../../services/api";

// Import Editor
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import "font-awesome/css/font-awesome.css";
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
const CrArticle = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [categoryId, setCategoryId] = useState();
  const [published, setPublished] = useState("published");
  const [tampilDiBeranda, setTampilDiBeranda] = useState(false);
  const [caption, setCaption] = useState("");
  const [publishedAt, setPublishedAt] = useState(null);
  const [thumbnail, setThumbnail] = useState();
  const [file, setFile] = useState();
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, SetMsg] = useState(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const inputFile = useRef();
  const [articleId, SetArticleId] = useState(id);

  const { errorMessage } = useAppSelector((state) => state.article.createArticle);
  const dataCategory = useAppSelector((state) => state.category.categoryAll.dataCategory);
  const currentUser = useAppSelector((state) => state.user.loginUser.currentUser);

  const fetchArticleById = useCallback(async () => {
    const response = await artikelService.getArtikelById(id);
    SetArticleId(response.id);
    setTitle(response.title);
    setContent(response.content);
    setFeaturedImage(response.featuredImage);
    setThumbnail(response.thumbnail);
    setCaption(response.caption);
    setPublishedAt(moment(response.publishedAt));
    setTampilDiBeranda(response.tampilDiBeranda);
    setCategoryId(response.categoryId);
    setPublished(response.published === true ? "published" : "pending");
  }, [id]);

  useEffect(() => {
    dispatch(getCategory());
    if (props.mode === "edit") {
      fetchArticleById();
    }
  }, [fetchArticleById, props, dispatch]);

  const handleModelChange = (event) => {
    setContent(event);
  };

  function handleFile(event) {
    setFile(event.target.files[0]);
    setFeaturedImage(event.target.files[0].name);
  }

  const handleChange = (event, newValue) => {
    setCategoryId(newValue);
    console.log(newValue);
  };

  const handleUploadArticle = (e) => {
    e.preventDefault();

    console.log("article submitted");
    if (!file) {
      console.log("No file Selected");
      return;
    }

    let articleCredentials = {
      id: articleId,
      title,
      content,
      featuredImage,
      authorName: currentUser.username,
      categoryId,
      published: published === "published" ? true : false,
      pending: false,
      tampilDiBeranda,
      caption,
      publishedAt: moment(publishedAt).format(),
      thumbnail,
    };

    if (props.mode === "edit") {
      dispatch(editArticle({ id, articleCredentials }));
      console.log("ini id", id);
    } else {
      dispatch(createArticle(articleCredentials));
    }

    // const url = `${BASE_URL}api/upload/imagesartikelthumbnail`;
    // const formData = new FormData();
    // formData.append("file", file);

    // SetMsg("Uploading...");
    // setProgress((prevState) => {
    //   return { ...prevState, started: true };
    // });

    // const config = {
    //   onUploadProgress: (progressEvent) => {
    //     setProgress((prevState) => {
    //       return { ...prevState, pc: progressEvent.progress * 100 };
    //     });
    //   },
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // };
    // axios
    //   .post(url, formData, config)
    //   .then((response) => {
    //     SetMsg("Upload Successful");
    //     console.log(response.data);
    //   })
    //   .catch((err) => {
    //     SetMsg("Upload failed");
    //     console.log(err);
    //   });

    // navigate("/dashboard/artikel");
  };

  console.log("ini mode", props.mode);

  // Main Code
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#D9D9D9", height: "100%", maxWidth: "100vw" }}>
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
                      <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DemoContainer components={["DatePicker"]} sx={{ padding: "0px", borderColor: "#252525" }}>
                          <DatePicker
                            value={publishedAt}
                            onChange={(e) => setPublishedAt(e)}
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
                          onChange={handleChange}
                          placeholder="Pilih…"
                          sx={{
                            width: "100%",
                            borderColor: "#252525",
                            height: "48px",
                          }}
                          required
                        >
                          {dataCategory.map((option) => (
                            <Option key={option.categoryId} value={option.categoryId} label={option.categoryName}>
                              {option.categoryName}
                            </Option>
                          ))}
                        </Select>
                        <Link to="/dashboard/kategori">
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
                      onChange={() => setFeaturedImage(inputFile.current)}
                      onClick={() => inputFile.current.click()}
                      readOnly
                      size="lg"
                      name="Size"
                      placeholder="Upload..."
                      endDecorator={
                        <IconButton aria-label="upload btn" color="neutral">
                          <input hidden type="file" ref={inputFile} onChange={handleFile}></input>
                          <UploadIcon />
                        </IconButton>
                      }
                      sx={{ width: "100%", borderColor: "#252525" }}
                    />
                    {progress.started && <progress max="100" value={progress.pc}></progress>}
                    {msg && <span>{msg}</span>}
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
                    <Box sx={{ maxWidth: { xs: "350px", sm: "600px", md: "900px", lg: "1250px" } }}>
                      <FroalaEditorComponent tag="textarea" model={content} onModelChange={handleModelChange} />
                    </Box>
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "left", padding: "50px 0px 0px 5px" }}>
                      <Checkbox checked={tampilDiBeranda} onChange={(e) => setTampilDiBeranda(e.target.checked)} label="Tampilkan di Beranda?" color="neutral" />
                    </Box>
                    <Button
                      type="submit"
                      sx={{
                        width: { xs: "100%", md: "25%" },
                        height: "48px",
                        fontSize: "16px",
                      }}
                    >
                      Submit
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

CrArticle.propTypes = {
  mode: PropTypes.string,
};

// Export Code
export default CrArticle;
