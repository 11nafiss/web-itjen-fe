// Import Library
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

// Import Components
import { HeadDash } from "../../components/components";

// Import Admin Pages
import NotFound from "../NotFound/NotFound";
import { 
  HomeDash,
  ArticleDash,
  BannerDash,
  AuditDash, 
  EselonDash,
  FeaturDash,
  ImageDash,
  PlacemDash,
  MenuDash,
  ReportDash,
  UserDash,
} from "./SubDash/SubDash";
import { 
  CrArticle,
  CrAudit,
  CrBanner,
  CrCategory,
  CrEselon,
  CrFeatur,
  CrImage,
  CrPlacem,
  CrMenu,
  CrReport,
  CrUser,
} from "./SubCreate/SubCreate";

// Main Declaration
const Dashboard = () => {
  // Main Code
  return (
    <div className="main-wrapper" style={{ backgroundColor: "#D9D9D9", height: "100%" }}>
      <Box sx={{ display: "flex" }}>
        <div className="header-wrapper">
          <HeadDash />
        </div>
        <div className="content-wrapper" style={{ paddingTop: "90px", height: "100%" }}>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<HomeDash />} />
            <Route path="/artikel" element={<ArticleDash />} />
            <Route path="/banner" element={<BannerDash />} />
            <Route path="/auditoria" element={<AuditDash />} />
            <Route path="/eselon" element={<EselonDash />} />
            <Route path="/layanan" element={<FeaturDash />} />
            <Route path="/gambar" element={<ImageDash />} />
            <Route path="/pejabat" element={<PlacemDash />} />
            <Route path="/menus" element={<MenuDash />} />
            <Route path="/laporan" element={<ReportDash />} />
            <Route path="/users" element={<UserDash />} />

            <Route path="/artikel/tambah" element={<CrArticle />} />
            <Route path="/banner/tambah" element={<CrBanner />} />
            <Route path="/auditoria/tambah" element={<CrAudit />} />
            <Route path="/eselon/tambah" element={<CrEselon />} />
            <Route path="/layanan/tambah" element={<CrFeatur />} />
            <Route path="/gambar/tambah" element={<CrImage />} />
            <Route path="/pejabat/tambah" element={<CrPlacem />} />
            <Route path="/menus/tambah" element={<CrMenu />} />
            <Route path="/laporan/tambah" element={<CrReport />} />
            <Route path="/users/tambah" element={<CrUser />} />
            <Route path="/kategori/tambah" element={<CrCategory />} />
          </Routes>
        </div>
      </Box>
    </div>
  );
};

// Export Code
export default Dashboard;
