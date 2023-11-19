// Import Library
import { useCallback, useEffect, useState } from "react";
import { Grid, Box, Typography, Divider } from "@mui/material";
import { FormHelperText, Button, Input, FormControl, FormLabel } from "@mui/joy";
import { styled } from "@mui/material/styles";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { createEselon, editEselon } from "../../../../features/actions/eselon.action";
import { eselon1Service } from "../../../../services/eselon1.service";

// MUI Styling CSS
const Kotak = styled(Box)(() => ({
  borderRadius: "15px",
  backgroundColor: "#fff",
  width: "100%",
  minHeight: "505px",
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
const CrEselon = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [eselonId, setEselonId] = useState(id);
  console.log("ini id", eselonId);
  const [nama, setNama] = useState("");
  const [singkatan, setSingkatan] = useState();
  const [link, setLink] = useState("");
  const [publishedAt, setPublishedAt] = useState(null);

  const { errorMessage } = useAppSelector((state) => state.eselon.createEselon);

  const fetchEselonById = useCallback(async () => {
    const response = await eselon1Service.getEselon1ById(id);
    setEselonId(response.id);
    setNama(response.namaEs1);
    setSingkatan(response.singkatan);
    setLink(response.link);
    setPublishedAt(moment(response.publishedAt));
  }, [id]);

  useEffect(() => {
    if (props.mode === "Edit") {
      fetchEselonById();
    }
  }, [fetchEselonById, props, dispatch]);

  const handleUploadEselon = (e) => {
    e.preventDefault();

    let tableConfig = {
      id: id,
      namaEs1: nama,
      singkatan,
      link,
      warna: "000000",
      publishedAt: moment(publishedAt),
    };

    if (props.mode === "Edit") {
      dispatch(editEselon({ id, tableConfig }));
      console.log("ini table", tableConfig);
    } else {
      dispatch(createEselon(tableConfig));
    }

    navigate("/dashboard/eselon");
    // navigate(0);
  };

  console.log("ini mode", props.mode);

  // Main Code
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#D9D9D9", height: "100%" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Kotak>
            <Judul>{props.mode} Eselons</Judul>
            <Divider sx={{ borderSize: "20px" }} />
            <form onSubmit={handleUploadEselon}>
              <SpaceGrid container sx={{ justifyContent: { xs: "center", md: "left" }, paddingTop: "10px" }}>
                <GridFlex item xs={12} md={6} sx={{ justifyContent: { xs: "center", md: "left" } }}>
                  <Box sx={{ width: "100%", display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: "20px" }}>
                    <FormControl required sx={{ width: "100%" }}>
                      <FormLabel
                        sx={{
                          fontSize: "18px",
                        }}
                      >
                        Nama Eselon 1
                      </FormLabel>
                      <Input value={nama} onChange={(e) => setNama(e.target.value)} size="lg" name="Size" placeholder="Tulis..." sx={{ width: "100%", borderColor: "#252525" }} />
                    </FormControl>
                    <FormControl required sx={{ width: "100%" }}>
                      <FormLabel
                        sx={{
                          fontSize: "18px",
                        }}
                      >
                        Singakatan
                      </FormLabel>
                      <Input value={singkatan} onChange={(e) => setSingkatan(e.target.value)} size="lg" name="Size" placeholder="Tulis..." sx={{ width: "100%", borderColor: "#252525" }} />
                    </FormControl>
                  </Box>
                  <Box sx={{ width: "100%", paddingTop: "20px", display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: "20px" }}>
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
                  <Box sx={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "left", gap: "30px" }}>
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

CrEselon.propTypes = {
  mode: PropTypes.string,
};

// Export Code
export default CrEselon;
