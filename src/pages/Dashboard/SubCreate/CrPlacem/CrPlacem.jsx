// Import Library
import { useCallback, useEffect, useRef, useState } from "react";
import { Grid, Box, Typography, Divider } from "@mui/material";
import { Radio, RadioGroup, Option, Select, Button, IconButton, Input, FormControl, FormLabel, FormHelperText } from "@mui/joy";
import { styled } from "@mui/material/styles";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

// Import Assets
import UploadIcon from "@mui/icons-material/Upload";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { createPlacem, editPlacem, getPlacemData } from "../../../../features/actions/placem.action";
import { BASE_URL } from "../../../../services/api";
import { pejabatService } from "../../../../services/pejabat.service";

// Import Editor
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import "font-awesome/css/font-awesome.css";
import FroalaEditorComponent from "react-froala-wysiwyg";

// Import CSS
import { EditorConfig } from "./EditorConfig";

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
const CrPlacem = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const inputFileImage = useRef();
  const { id } = useParams();
  const [placemId, setPlacemId] = useState(id);
  console.log("ini id", placemId);
  const [nama, setNama] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [pathGambar, setPathGambar] = useState("");
  const [eselon, setEselon] = useState();
  const [atasanId, setAtasanId] = useState();
  const [publishedAt, setPublishedAt] = useState(null);
  const [hasSubJabatan, setHasSubJabatan] = useState("Tidak");
  const [fileImage, setFileImage] = useState();
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null);

  const { errorMessage } = useAppSelector((state) => state.placem.createPlacem);
  const dataPlacem = useAppSelector((state) => state.placem.placemAll.dataPlacem);
  const parentSub1 = dataPlacem.filter((item) => item.eselon === 1);
  const parentSub2 = dataPlacem.filter((item) => item.eselon === 2);
  const parentSub3 = dataPlacem.filter((item) => item.eselon === 3);

  const fetchPlacemById = useCallback(async () => {
    const response = await pejabatService.getPejabatById(id);
    setPlacemId(response.id);
    setNama(response.nama);
    setJabatan(response.jabatan);
    setDeskripsi(response.deskripsi);
    setPathGambar(response.pathGambar);
    setEselon(response.eselon);
    setAtasanId(response.atasanId);
    setPublishedAt(moment(response.publishedAt));
    setHasSubJabatan(response.hasSubJabatan === true ? "Iya" : "Tidak");
  }, [id]);

  useEffect(() => {
    dispatch(getPlacemData());
    if (props.mode === "Edit") {
      fetchPlacemById();
    }
  }, [fetchPlacemById, props, dispatch]);

  const generateFileName = (originalName) => {
    const uuid = uuidv4();
    const extension = originalName.split(".").pop();
    return `${uuid}.${extension}`;
  };

  function handleFileImage(event) {
    setFileImage(event.target.files[0]);
    setPathGambar(event.target.files[0].name);
  }

  const handleUploadPlacem = (e) => {
    e.preventDefault();
    const newImageName = generateFileName(pathGambar);

    if (fileImage) {
      let data = new FormData();
      data.append("image", fileImage, newImageName);
      let newFile = data.get("image");
      const url = `${BASE_URL}api/upload/images`;
      const formData = new FormData();
      formData.append("file", newFile);

      setMsg("Uploading...");
      setProgress((prevState) => {
        return { ...prevState, started: true };
      });

      const config = {
        onUploadProgress: (progressEvent) => {
          setProgress((prevState) => {
            return { ...prevState, pc: progressEvent.progress * 100 };
          });
        },
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      axios
        .post(url, formData, config)
        .then((response) => {
          setMsg("Upload Successful");
          console.log(response.data);
        })
        .catch((err) => {
          setMsg("Upload failed");
          console.log(err);
        });
    }

    let tableConfig = {
      id: id,
      nama,
      jabatan,
      deskripsi,
      eselon,
      atasanId,
      pathGambar: !fileImage ? pathGambar : newImageName,
      publishedAt: moment(publishedAt),
      hasSubJabatan: hasSubJabatan === "Iya" ? true : false,
    };

    if (props.mode === "Edit") {
      dispatch(editPlacem({ id, tableConfig }));
      console.log("ini table", tableConfig);
    } else {
      if (!fileImage) {
        console.log("No file Selected");
        return;
      }
      dispatch(createPlacem(tableConfig));
    }

    navigate("/dashboard/pejabat");
    navigate(0);
  };

  console.log("ini mode", props.mode);

  // Main Code
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#D9D9D9", height: "100%" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Kotak>
            <Judul>{props.mode} Pejabat</Judul>
            <Divider sx={{ borderSize: "20px" }} />
            <form onSubmit={handleUploadPlacem}>
              <SpaceGrid container sx={{ justifyContent: { xs: "center", md: "left" }, paddingTop: "10px" }}>
                <GridFlex item xs={12} md={6} sx={{ justifyContent: { xs: "center", md: "left" } }}>
                  <FormControl required sx={{ width: "100%" }}>
                    <FormLabel
                      sx={{
                        fontSize: "18px",
                      }}
                    >
                      Nama
                    </FormLabel>
                    <Input value={nama} onChange={(e) => setNama(e.target.value)} size="lg" name="Size" placeholder="Tulis Baru" sx={{ width: "100%", borderColor: "#252525" }} />
                  </FormControl>
                  <Box sx={{ width: "100%", paddingTop: "20px", display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: "20px" }}>
                    <FormControl required sx={{ width: "100%" }}>
                      <FormLabel
                        sx={{
                          fontSize: "18px",
                        }}
                      >
                        Jabatan
                      </FormLabel>
                      <Input value={jabatan} onChange={(e) => setJabatan(e.target.value)} size="lg" name="Size" placeholder="Menjabat Sebagai" sx={{ width: "100%", borderColor: "#252525" }} />
                    </FormControl>
                    <FormControl required sx={{ width: "100%" }}>
                      <FormLabel
                        sx={{
                          fontSize: "18px",
                        }}
                      >
                        Eselon
                      </FormLabel>
                      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Select
                          value={eselon}
                          onChange={(e, v) => setEselon(v)}
                          placeholder="Pilih Eselon"
                          sx={{
                            width: "100%",
                            borderColor: "#252525",
                            height: "48px",
                          }}
                          required
                        >
                          <Option value={1} label="1">
                            1
                          </Option>
                          <Option value={2} label="2">
                            2
                          </Option>
                          <Option value={3} label="3">
                            3
                          </Option>
                          <Option value={4} label="4">
                            4
                          </Option>
                        </Select>
                      </Box>
                    </FormControl>
                  </Box>
                </GridFlex>
                <GridFlex item xs={12} md={6} sx={{ justifyContent: { xs: "center", md: "left" } }}>
                  <Box sx={{ width: "100%", display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: "20px" }}>
                    <FormControl required sx={{ width: "100%" }}>
                      <FormLabel
                        sx={{
                          fontSize: "18px",
                        }}
                      >
                        Atasan
                      </FormLabel>
                      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Select
                          value={atasanId}
                          onChange={(e, v) => setAtasanId(v)}
                          placeholder="Pilih Atasannya"
                          sx={{
                            width: "100%",
                            borderColor: "#252525",
                            height: "48px",
                          }}
                          required
                        >
                          {eselon === 1 ? (
                            <Option value={0} label="!! Ini Menu Awal !!">
                              !! Tanpa Atasan !!
                            </Option>
                          ) : null}
                          {eselon === 2
                            ? parentSub1.map((option) => (
                                <Option key={option.id} value={option.id} label={option.nama}>
                                  {option.nama}
                                </Option>
                              ))
                            : null}
                          {eselon === 3
                            ? parentSub2.map((option) => (
                                <Option key={option.id} value={option.id} label={option.nama}>
                                  {option.nama}
                                </Option>
                              ))
                            : null}
                          {eselon === 4
                            ? parentSub3.map((option) => (
                                <Option key={option.id} value={option.id} label={option.nama}>
                                  {option.nama}
                                </Option>
                              ))
                            : null}
                        </Select>
                      </Box>
                    </FormControl>
                    <FormControl required sx={{ width: "100%" }}>
                      <FormLabel
                        sx={{
                          fontSize: "18px",
                        }}
                      >
                        Ada Sub Jabatan
                      </FormLabel>
                      <RadioGroup
                        value={hasSubJabatan}
                        onChange={(e) => setHasSubJabatan(e.target.value)}
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
                        {["Iya", "Tidak"].map((item) => (
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
                  <Box sx={{ width: "100%", paddingTop: "20px", display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: "20px" }}>
                    <FormControl required sx={{ width: "100%" }}>
                      <FormLabel
                        sx={{
                          fontSize: "18px",
                        }}
                      >
                        Gambar
                      </FormLabel>
                      <Input
                        value={pathGambar}
                        onChange={() => setPathGambar(inputFileImage.current)}
                        onClick={() => inputFileImage.current.click()}
                        readOnly
                        size="lg"
                        name="Size"
                        placeholder="Gambar rasio 4/3"
                        endDecorator={
                          <IconButton aria-label="upload btn" color="neutral">
                            <input hidden type="file" ref={inputFileImage} onChange={handleFileImage}></input>
                            <UploadIcon />
                          </IconButton>
                        }
                        sx={{ width: "100%", borderColor: "#252525" }}
                      />
                      {progress.started && <progress max="100" value={progress.pc}></progress>}
                      {msg && <span>{msg}</span>}
                    </FormControl>
                    <FormControl required sx={{ width: "100%" }}>
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
                            placeholder="Pilih Tanggal"
                            value={publishedAt}
                            onChange={(e) => setPublishedAt(e)}
                            sx={{ width: "100%", "& .MuiOutlinedInput-root": { height: "48px", fontSize: "15px", overflow: "hidden", borderRadius: "7px" }, "& .MuiOutlinedInput-notchedOutline": { borderColor: "#252525", padding: "0px" } }}
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </FormControl>
                  </Box>
                </GridFlex>
                <GridFlex item xs={12} md={12} sx={{ justifyContent: { xs: "center", md: "left" } }}>
                  <Box sx={{ height: "100%", width: "100%", paddingTop: "10px", display: "flex", flexDirection: "column", justifyContent: "left", gap: "30px" }}>
                    <Box sx={{ maxWidth: { xs: "350px", sm: "600px", md: "900px", lg: "1250px" } }}>
                      <FroalaEditorComponent tag="textarea" config={EditorConfig} model={deskripsi} onModelChange={(e) => setDeskripsi(e)} />
                    </Box>
                    <Button
                      type="submit"
                      sx={{
                        width: { xs: "100%", md: "25%" },
                        height: "48px",
                        fontSize: "16px",
                        marginTop: "50px",
                      }}
                    >
                      Submit
                    </Button>
                    {errorMessage && <FormHelperText sx={(theme) => ({ color: theme.vars.palette.danger[400] })}>Upload Pejabat Gagal</FormHelperText>}
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

CrPlacem.propTypes = {
  mode: PropTypes.string,
};

// Export Code
export default CrPlacem;
