// Import Library
import { useCallback, useEffect, useRef, useState } from "react";
import { Grid, Box, Typography, Divider } from "@mui/material";
import { Button, IconButton, Input, FormControl, FormLabel, Textarea, Checkbox, FormHelperText } from "@mui/joy";
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
import { createAuditoria, editAuditoria } from "../../../../features/actions/auditoria.action";
import { auditoriaService } from "../../../../services/auditoria.service";
import { BASE_URL } from "../../../../services/api";

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
const CrAudit = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const inputFilePdf = useRef();
  const inputFileImage = useRef();
  const { id } = useParams();
  const [auditoriaId, setAuditoriaId] = useState(id);
  console.log("ini id", auditoriaId);
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [pathPdf, setPathPdf] = useState("");
  const [pathImage, setPathImage] = useState("");
  const [tampilDiBeranda, setTampilDiBeranda] = useState(true);
  const [link, setLink] = useState("");
  const [publishedAt, setPublishedAt] = useState(null);
  const [fileImage, setFileImage] = useState();
  const [filePdf, setFilePdf] = useState();
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null);

  const { errorMessage } = useAppSelector((state) => state.auditoria.createAuditoria);

  const fetchAuditoriaById = useCallback(async () => {
    const response = await auditoriaService.getAuditoriaById(id);
    setAuditoriaId(response.id);
    setJudul(response.judul);
    setDeskripsi(response.deskripsi);
    setPathPdf(response.pathPdf);
    setPathImage(response.pathImage);
    setLink(response.link);
    setPublishedAt(moment(response.publishedAt));
    setTampilDiBeranda(response.tampilDiBeranda);
  }, [id]);

  useEffect(() => {
    if (props.mode === "Edit") {
      fetchAuditoriaById();
    }
  }, [fetchAuditoriaById, props, dispatch]);

  const generateFileName = (originalName) => {
    const uuid = uuidv4();
    const extension = originalName.split(".").pop();
    return `${uuid}.${extension}`;
  };

  function handleFilePdf(event) {
    setFilePdf(event.target.files[0]);
    setPathPdf(event.target.files[0].name);
    console.log("ini setFile", pathPdf);
  }

  function handleFileImage(event) {
    setFileImage(event.target.files[0]);
    setPathImage(event.target.files[0].name);
    console.log("ini setFile", pathImage);
  }

  const handleUploadAuditoria = (e) => {
    e.preventDefault();
    const newPdfName = generateFileName(pathPdf);
    const newImageName = generateFileName(pathImage);

    if (filePdf) {
      let data = new FormData();
      data.append("pdf", filePdf, newPdfName);
      let newFile = data.get("pdf");
      const url = `${BASE_URL}api/upload/pdf`;
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
      auditoriaId: id,
      judul,
      deskripsi,
      pathPdf: !filePdf ? pathPdf : newPdfName,
      bulanItem: parseInt(moment(publishedAt).format("M")),
      tahunItem: parseInt(moment(publishedAt).format("YYYY")),
      tampilDiBeranda,
      link,
      isActive: false,
      pathImage: !fileImage ? pathImage : newImageName,
      publishedAt: moment(publishedAt),
    };

    if (props.mode === "Edit") {
      dispatch(editAuditoria({ id, tableConfig }));
      console.log("ini table", tableConfig);
    } else {
      if (!filePdf) {
        console.log("No file Selected");
        return;
      }
      if (!fileImage) {
        console.log("No file Selected");
        return;
      }
      dispatch(createAuditoria(tableConfig));
    }

    navigate("/dashboard/auditoria");
    navigate(0);
  };

  console.log("ini mode", props.mode);

  // Main Code
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#D9D9D9", height: "100%" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Kotak>
            <Judul>{props.mode} Auditoria</Judul>
            <Divider sx={{ borderSize: "20px" }} />
            <form onSubmit={handleUploadAuditoria}>
              <SpaceGrid container sx={{ justifyContent: { xs: "center", md: "left" }, paddingTop: "10px" }}>
                <GridFlex item xs={12} md={6} sx={{ justifyContent: { xs: "center", md: "left" } }}>
                  <FormControl required sx={{ width: "100%" }}>
                    <FormLabel
                      sx={{
                        fontSize: "18px",
                      }}
                    >
                      Judul
                    </FormLabel>
                    <Input value={judul} onChange={(e) => setJudul(e.target.value)} size="lg" name="Size" placeholder="Tulis..." sx={{ width: "100%", borderColor: "#252525" }} />
                  </FormControl>
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
                        value={pathImage}
                        onChange={() => setPathImage(inputFileImage.current)}
                        onClick={() => inputFileImage.current.click()}
                        readOnly
                        size="lg"
                        name="Size"
                        placeholder="Upload..."
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
                  </Box>
                  <Box sx={{ width: "100%", paddingTop: "20px", display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: "20px" }}>
                    <FormControl required sx={{ width: "100%" }}>
                      <FormLabel
                        sx={{
                          fontSize: "18px",
                        }}
                      >
                        Dokumen
                      </FormLabel>
                      <Input
                        value={pathPdf}
                        onChange={() => setPathPdf(inputFilePdf.current)}
                        onClick={() => inputFilePdf.current.click()}
                        readOnly
                        size="lg"
                        name="Size"
                        placeholder="Upload..."
                        endDecorator={
                          <IconButton aria-label="upload btn" color="neutral">
                            <input hidden type="file" ref={inputFilePdf} onChange={handleFilePdf}></input>
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
                <GridFlex item xs={12} md={6} sx={{ justifyContent: { xs: "center", md: "left" }, height: "100%" }}>
                  <FormControl required sx={{ width: "100%" }}>
                    <FormLabel
                      sx={{
                        fontSize: "18px",
                      }}
                    >
                      Link
                    </FormLabel>
                    <Input value={link} onChange={(e) => setLink(e.target.value)} size="lg" name="Size" placeholder="Tulis..." sx={{ width: "100%", borderColor: "#252525" }} />
                  </FormControl>
                  <Box sx={{ width: "100%", paddingTop: "20px", display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: "20px" }}>
                    <FormControl required sx={{ width: "100%" }}>
                      <FormLabel
                        sx={{
                          fontSize: "18px",
                        }}
                      >
                        Deskripsi
                      </FormLabel>
                      <Textarea value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} name="desc" placeholder="Type in here…" variant="soft" size="lg" sx={{ width: "100%", borderColor: "#252525", height: "150px" }} />
                    </FormControl>
                  </Box>
                </GridFlex>
                <GridFlex item xs={12} md={12} sx={{ justifyContent: { xs: "center", md: "left" } }}>
                  <Box sx={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "left", gap: "30px" }}>
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "left", paddingLeft: "5px" }}>
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
                    {errorMessage && <FormHelperText sx={(theme) => ({ color: theme.vars.palette.danger[400] })}>Upload Auditoria Gagal</FormHelperText>}
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

CrAudit.propTypes = {
  mode: PropTypes.string,
};

// Export Code
export default CrAudit;
