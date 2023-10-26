// Import Library
import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Divider, List, ListItemButton, ListItemText, Collapse, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// Import Assets
import { ItjenLogo } from "../../../assets/assets";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

// Main Declaration
const DrawerBar = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);

  const handleClose = (event) => {
    event.preventDefault();
  };

  // MUI Styling CSS
  const Headlist = styled(Typography)(() => ({
    color: "#08347C",
    fontWeight: 700,
    textTransform: "capitalize",
  }));

  const Sublist = styled(Typography)(() => ({
    color: "#000000",
    fontWeight: 600,
    textTransform: "capitalize",
  }));

  const Textlist = styled(Typography)(() => ({
    textTransform: "capitalize",
  }));

  // Main Code
  return (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={{ flexGrow: 1, my: 2, display: "flex", justifyContent: "center" }}>
        <img src={ItjenLogo} className="headerLogo" />
      </Box>
      <Divider />
      <Box>
        <List sx={{ width: "100%", bgcolor: "background.paper" }} component="nav" aria-labelledby="nested-list-subheader">
          <Link to="/" className="link">
            <ListItemButton>
              <Headlist onClick={handleClose}>Beranda</Headlist>
            </ListItemButton>
          </Link>
          <ListItemButton onClick={() => setOpen((bool) => !bool)}>
            <ListItemText>
              <Headlist>Profil Instansi</Headlist>
            </ListItemText>
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to="/profil/visi" className="link">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText>
                    <Sublist>visi misi</Sublist>
                  </ListItemText>
                </ListItemButton>
              </Link>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText>
                  <Sublist>Sejarah Singkat</Sublist>
                </ListItemText>
              </ListItemButton>
              <Link to="/profil/nilai-kemenkeu" className="link">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText>
                    <Sublist>Nilai-nilai Kemenkeu</Sublist>
                  </ListItemText>
                </ListItemButton>
              </Link>
              <Link to="/profil/organisasi" className="link">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText>
                    <Sublist>Struktur Organisasi</Sublist>
                  </ListItemText>
                </ListItemButton>
              </Link>
              <ListItemButton sx={{ pl: 4 }} onClick={() => setOpen4((bool) => !bool)}>
                <ListItemText>
                  <Sublist>Tujuan dan Fungsi</Sublist>
                </ListItemText>
                {open4 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open4} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText>
                      <Textlist>Sekretariat ItJen</Textlist>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText>
                      <Textlist>Inspektorat I</Textlist>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText>
                      <Textlist>Inspektorat II</Textlist>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText>
                      <Textlist>Inspektorat III</Textlist>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText>
                      <Textlist>Inspektorat IV</Textlist>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText>
                      <Textlist>Inspektorat V</Textlist>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText>
                      <Textlist>Inspektorat VI</Textlist>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText>
                      <Textlist>Inspektorat VII</Textlist>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText>
                      <Textlist>Inspektorat B.I</Textlist>
                    </ListItemText>
                  </ListItemButton>
                </List>
              </Collapse>
              <Link to="/profil/pejabat" className="link">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText>
                    <Sublist>Profil Pejabat</Sublist>
                  </ListItemText>
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
          <ListItemButton onClick={() => setOpen2((bool) => !bool)}>
            <ListItemText>
              <Headlist>informasi publik</Headlist>
            </ListItemText>
            {open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={() => setOpen5((bool) => !bool)}>
                <ListItemText>
                  <Sublist>Daftar Info publik</Sublist>
                </ListItemText>
                {open5 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open5} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText>
                      <Textlist>info secara berkala</Textlist>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText>
                      <Textlist>info secara merata</Textlist>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText>
                      <Textlist>info wajib tersedia</Textlist>
                    </ListItemText>
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton sx={{ pl: 4 }} onClick={() => setOpen6((bool) => !bool)}>
                <ListItemText>
                  <Sublist>Permohonan Info publik</Sublist>
                </ListItemText>
                {open6 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open6} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText>
                      <Textlist>mekanisme permohonan</Textlist>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText>
                      <Textlist>formulir permohonan</Textlist>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText>
                      <Textlist>maklumat pelayanan</Textlist>
                    </ListItemText>
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton sx={{ pl: 4 }} onClick={() => setOpen7((bool) => !bool)}>
                <ListItemText>
                  <Sublist>anggaran dan realisasi</Sublist>
                </ListItemText>
                {open7 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open7} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText>
                      <Textlist>raker dan anggaran</Textlist>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText>
                      <Textlist>pelaksanaan anggaran</Textlist>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText>
                      <Textlist>laporan keuangan</Textlist>
                    </ListItemText>
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton sx={{ pl: 4 }} onClick={() => setOpen8((bool) => !bool)}>
                <ListItemText>
                  <Sublist>PPID ItJen Kemenkeu</Sublist>
                </ListItemText>
                {open8 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open8} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText>
                      <Textlist>profil PPID</Textlist>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText>
                      <Textlist>PID kemenkeu</Textlist>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText>
                      <Textlist>standar pelayanan</Textlist>
                    </ListItemText>
                  </ListItemButton>
                </List>
              </Collapse>
              <Link to="/galeri" className="link">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText>
                    <Sublist>galeri itJen kemenkeu</Sublist>
                  </ListItemText>
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
          <ListItemButton onClick={() => setOpen3((bool) => !bool)}>
            <ListItemText>
              <Headlist>artikel</Headlist>
            </ListItemText>
            {open3 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText>
                  <Sublist>berita</Sublist>
                </ListItemText>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText>
                  <Sublist>pengumuman</Sublist>
                </ListItemText>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={() => setOpen9((bool) => !bool)}>
                <ListItemText>
                  <Sublist>Laporan</Sublist>
                </ListItemText>
                {open9 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open9} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText>
                      <Textlist>laporan kinerja</Textlist>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText>
                      <Textlist>laporan tahunan</Textlist>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText>
                      <Textlist>laporan layanan</Textlist>
                    </ListItemText>
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText>
                  <Sublist>siaran pers</Sublist>
                </ListItemText>
              </ListItemButton>
              <Link to="/auditoria" className="link">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText>
                    <Sublist>auditoria</Sublist>
                  </ListItemText>
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
        </List>
      </Box>
    </Box>
  );
};

// Export Code
export default DrawerBar;
