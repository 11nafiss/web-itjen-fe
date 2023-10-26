// Import Library
import React from "react";
import { Link } from "react-router-dom";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Accordion, AccordionSummary, AccordionDetails, Menu, MenuItem, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// Import Assets
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PopupNav, SearchNav } from "../../components";

// Main Declaration
const Navbar = () => {
  // MUI Styling CSS
  const MenuButton = styled(Button)(() => ({
    color: "#08347C",
    background: "transparent",
    textShadow: "1px 1px 3px #fff",
    fontWeight: 700,
    marginInline: "5px",
  }));

  const TypeItem = styled(MenuItem)(() => ({
    color: "#252525",
    fontSize: "14px",
    fontWeight: 700,
  }));

  const CustomItem = styled(MenuItem)(() => ({
    padding: "0px",
  }));

  const AccorItem = styled(AccordionSummary)(() => ({
    color: "#000000",
    fontSize: "14px",
    fontWeight: 700,
  }));

  const CustomAccor = styled(Accordion)(() => ({
    boxShadow: "0px 0px #fff",
    borderWidth: "0px",
    borderRadius: "0px",
    width: "250px",
  }));

  const SubItem = styled(MenuItem)(() => ({
    color: "#252525",
    fontSize: "14px",
    fontWeight: 500,
  }));


  // Main Code
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <Link to="/" className="link">
          <MenuButton variant="text">Beranda</MenuButton>
        </Link>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <MenuButton variant="text" {...bindTrigger(popupState)}>
                Profil Instansi
              </MenuButton>
              <Menu {...bindMenu(popupState)} sx={{ maxWidth: "500px" }}>
                <Link to="/profil/visi" className="link">
                  <TypeItem onClick={popupState.close}>Visi Misi</TypeItem>
                </Link>
                <TypeItem onClick={popupState.close}>Sejarah Singkat</TypeItem>
                <Link to="/profil/nilai-kemenkeu" className="link">
                  <TypeItem onClick={popupState.close}>Nilai-Nilai Kemenkeu</TypeItem>
                </Link>
                <Link to="/profil/organisasi" className="link">
                  <TypeItem onClick={popupState.close}>Struktur Organisasi</TypeItem>
                </Link>
                <CustomItem>
                  <CustomAccor>
                    <AccorItem expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                      Tujuan dan Fungsi
                    </AccorItem>
                    <AccordionDetails>
                      <SubItem onClick={popupState.close}>Sekretariat ItJen</SubItem>
                      <SubItem onClick={popupState.close}>Inspektorat I</SubItem>
                      <SubItem onClick={popupState.close}>Inspektorat II</SubItem>
                      <SubItem onClick={popupState.close}>Inspektorat III</SubItem>
                      <SubItem onClick={popupState.close}>Inspektorat IV</SubItem>
                      <SubItem onClick={popupState.close}>Inspektorat V</SubItem>
                      <SubItem onClick={popupState.close}>Inspektorat VI</SubItem>
                      <SubItem onClick={popupState.close}>Inspektorat VII</SubItem>
                      <SubItem onClick={popupState.close}>Inspektorat B.I</SubItem>
                    </AccordionDetails>
                  </CustomAccor>
                </CustomItem>
                <Link to="/profil/pejabat" className="link">
                  <TypeItem onClick={popupState.close}>Profil Pejabat</TypeItem>
                </Link>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <MenuButton variant="text" {...bindTrigger(popupState)}>
                Informasi Publik
              </MenuButton>
              <Menu {...bindMenu(popupState)}>
                <CustomItem>
                  <CustomAccor>
                    <AccorItem expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                      Daftar Info Publik
                    </AccorItem>
                    <AccordionDetails>
                      <SubItem onClick={popupState.close}>Info Secara Berkala</SubItem>
                      <SubItem onClick={popupState.close}>Info Secara Merata</SubItem>
                      <SubItem onClick={popupState.close}>Info Wajib Tersedia</SubItem>
                    </AccordionDetails>
                  </CustomAccor>
                </CustomItem>
                <CustomItem>
                  <CustomAccor>
                    <AccorItem expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                      Permohonan Info Publik
                    </AccorItem>
                    <AccordionDetails>
                      <SubItem onClick={popupState.close}>Mekanisme Permohonan</SubItem>
                      <SubItem onClick={popupState.close}>Formulir Permohonan</SubItem>
                      <SubItem onClick={popupState.close}>Maklumat pelayanan</SubItem>
                    </AccordionDetails>
                  </CustomAccor>
                </CustomItem>
                <CustomItem>
                  <CustomAccor>
                    <AccorItem expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                      Anggaran dan Realisasi
                    </AccorItem>
                    <AccordionDetails>
                      <SubItem onClick={popupState.close}>Raker dan Anggaran</SubItem>
                      <SubItem onClick={popupState.close}>Pelaksanaan Anggaran</SubItem>
                      <SubItem onClick={popupState.close}>Laporan Keuangan</SubItem>
                    </AccordionDetails>
                  </CustomAccor>
                </CustomItem>
                <CustomItem>
                  <CustomAccor>
                    <AccorItem expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                      PPID ItJen Kemenkeu
                    </AccorItem>
                    <AccordionDetails>
                      <SubItem onClick={popupState.close}>Profil PPID</SubItem>
                      <SubItem onClick={popupState.close}>PID Kemenkeu</SubItem>
                      <SubItem onClick={popupState.close}>Standar Pelayanan</SubItem>
                    </AccordionDetails>
                  </CustomAccor>
                </CustomItem>
                <Link to="/galeri" className="link">
                  <TypeItem onClick={popupState.close}>Galeri ItJen Kemenkeu</TypeItem>
                </Link>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <MenuButton variant="text" {...bindTrigger(popupState)}>
                Artikel
              </MenuButton>
              <Menu {...bindMenu(popupState)}>
                <TypeItem onClick={popupState.close}>Berita</TypeItem>
                <TypeItem onClick={popupState.close}>Pengumuman</TypeItem>
                <CustomItem>
                  <CustomAccor>
                    <AccorItem expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                      Laporan
                    </AccorItem>
                    <AccordionDetails>
                      <Link to="/laporan-kinerja" className="link">
                        <SubItem onClick={popupState.close}>Laporan Kinerja</SubItem>
                      </Link>
                      <SubItem onClick={popupState.close}>Laporan Tahunan</SubItem>
                      <SubItem onClick={popupState.close}>Laporan Layanan</SubItem>
                    </AccordionDetails>
                  </CustomAccor>
                </CustomItem>
                <TypeItem onClick={popupState.close}>Siaran Pers</TypeItem>
                <Link to="/auditoria" className="link">
                  <TypeItem onClick={popupState.close}>Auditoria</TypeItem>
                </Link>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </Box>
      <SearchNav />
      <PopupNav />
    </Box>
  );
};

// Export Code
export default Navbar;
