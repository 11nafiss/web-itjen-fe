// Import Library
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Box, Typography, Divider } from "@mui/material";
import { Button, IconButton, Input, FormControl, FormLabel, Textarea, Checkbox } from "@mui/joy";
import { styled } from "@mui/material/styles";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router-dom";
import moment from "moment";

// Import Assets
import UploadIcon from "@mui/icons-material/Upload";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { createAuditoria, editAuditoria } from "../../../../features/actions/auditoria.action";
import { auditoriaService } from "../../../../services/auditoria.service";

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
const CrAudit = (mode) => {
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [pathPdf, setPathPdf] = useState("");
  const [pathImage, setPathImage] = useState();
  const [tahunItem, setTahunItem] = useState("published");
  const [tampilDiBeranda, setTampilDiBeranda] = useState(false);
  const [link, setLink] = useState("");
  const [publishedAt, setPublishedAt] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { isLoading, errorMessage } = useAppSelector((state) => state.auditoria.createAuditoria);

  const fetchAuditoriaById = useCallback(async() => {
    const response = await auditoriaService.getAuditoriaById(id);
    setJudul(response.judul);
    setDeskripsi(response.deskripsi);
    setPathPdf(response.pathPdf);
    setPathImage(response.pathImage);
    setPublishedAt(moment(response.publishedAt));
    setTampilDiBeranda(response.tampilDiBeranda);
    setTahunItem(response.tahunItem);
    setLink(response.link);
  }, [id]);

  useEffect(() => {
    if (mode.mode === "edit") {
      fetchAuditoriaById();
    }
  }, [fetchAuditoriaById, mode]);


  const handleUploadAuditoria = (e) => {
    e.preventDefault();
    let auditoriaCredentials = {
      judul,
      deskripsi,
      tahunItem,
      link,
      tampilDiBeranda,
      pathImage,
      publishedAt: moment(publishedAt).format('YYYY'),
      pathPdf,
    };

    navigate("/dashboard/auditoria");
    
    if (mode.mode === "edit") {
      dispatch(editAuditoria(id, auditoriaCredentials));
    } else {
      dispatch(createAuditoria(auditoriaCredentials));
    }
  };

  // Main Code
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#D9D9D9", height: "100%" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Kotak>
            <Judul>Tambah Auditoria</Judul>
            <Divider sx={{ borderSize: "20px" }} />
            <form onSubmit={handleUploadAuditoria}>
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
                  <Input size="lg" name="Size" placeholder="..." sx={{ width: "100%", borderColor: "#252525" }} />
                </FormControl>
                <Box sx={{ width: "100%", paddingTop: "20px", display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: "20px" }}>
                  <FormControl sx={{ width: "100%" }}>
                    <FormLabel
                      sx={{
                        fontSize: "18px",
                      }}
                    >
                      Gambar
                    </FormLabel>
                    <Input
                      size="lg"
                      name="Size"
                      placeholder="Insert..."
                      endDecorator={
                        <IconButton aria-label="upload btn" color="neutral">
                          <UploadIcon />
                        </IconButton>
                      }
                      sx={{ width: "100%", borderColor: "#252525" }}
                    />
                  </FormControl>
                  <FormControl sx={{ width: "100%" }}>
                    <FormLabel
                      sx={{
                        fontSize: "18px",
                      }}
                    >
                      Tahun
                    </FormLabel>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DatePicker"]} sx={{ padding: "0px", borderColor: "#252525" }}>
                        <DatePicker
                          value={value}
                          onChange={(newValue) => setValue(newValue)}
                          views={["year"]}
                          sx={{ width: "100%", "& .MuiOutlinedInput-root": { height: "48px", fontSize: "15px", overflow: "hidden", borderRadius: "7px" }, "& .MuiOutlinedInput-notchedOutline": { borderColor: "#252525", padding: "0px" } }}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </FormControl>
                </Box>
                <FormControl sx={{ width: "100%", paddingTop: "25px" }}>
                  <FormLabel
                    sx={{
                      fontSize: "18px",
                    }}
                  >
                    Dokumen
                  </FormLabel>
                  <Input
                    size="lg"
                    name="Size"
                    placeholder="Select PDF..."
                    endDecorator={
                      <IconButton aria-label="upload btn" color="neutral">
                        <UploadIcon />
                      </IconButton>
                    }
                    sx={{ width: "100%", borderColor: "#252525" }}
                  />
                </FormControl>
              </GridFlex>
              <GridFlex item xs={12} md={6} sx={{ justifyContent: { xs: "center", md: "left" }, height: "100%" }}>
                <FormControl sx={{ width: "100%" }}>
                  <FormLabel
                    sx={{
                      fontSize: "18px",
                    }}
                  >
                    Link
                  </FormLabel>
                  <Input size="lg" name="Size" placeholder="Go to..." sx={{ width: "100%", borderColor: "#252525" }} />
                </FormControl>
                <FormControl sx={{ width: "100%",  mt: "20px" }}>
                  <FormLabel
                    sx={{
                      fontSize: "18px",
                    }}
                  >
                    Deskripsi
                  </FormLabel>
                  <Textarea name="desc" placeholder="Type in here…" variant="soft" size="lg" sx={{ width: "100%", borderColor: "#252525", height: "150px" }} />
                </FormControl>
              </GridFlex>
              <GridFlex item xs={12} md={12} sx={{ justifyContent: { xs: "center", md: "left" } }}>
                <Box sx={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "left", gap: "30px" }}>
                  <Box sx={{ width: "100%", display: "flex", justifyContent: "left", paddingLeft: "5px" }}>
                    <Checkbox label="Tampilkan di Beranda?" color="neutral" defaultChecked />
                  </Box>
                  <Button
                    sx={{
                      width: { xs: "100%", md: "25%" },
                      height: "48px",
                      fontSize: "16px",
                    }}
                  >
                    Submit
                  </Button>
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
export default CrAudit;
