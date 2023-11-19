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
  CategoryDash,
  VitjenDash,
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
  CrVitjen
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
            <Route path="/kategori" element={<CategoryDash />} />
            <Route path="/visual" element={<VitjenDash />} />

            <Route path="/artikel/tambah" element={<CrArticle mode="Tambah" />} />
            <Route path="/banner/tambah" element={<CrBanner mode="Tambah" />} />
            <Route path="/auditoria/tambah" element={<CrAudit mode="Tambah" />} />
            <Route path="/eselon/tambah" element={<CrEselon mode="Tambah" />} />
            <Route path="/layanan/tambah" element={<CrFeatur mode="Tambah" />} />
            <Route path="/gambar/tambah" element={<CrImage mode="Tambah" />} />
            <Route path="/pejabat/tambah" element={<CrPlacem mode="Tambah" />} />
            <Route path="/menus/tambah" element={<CrMenu mode="Tambah" />} />
            <Route path="/laporan/tambah" element={<CrReport mode="Tambah" />} />
            <Route path="/users/tambah" element={<CrUser mode="Tambah" />} />
            <Route path="/kategori/tambah" element={<CrCategory mode="Tambah" />} />
            <Route path="/visual/tambah" element={<CrVitjen mode="Tambah" />} />

            <Route path="/artikel/edit/:id" element={<CrArticle mode="Edit" />} />
            <Route path="/banner/edit/:id" element={<CrBanner mode="Edit" />} />
            <Route path="/auditoria/edit/:id" element={<CrAudit mode="Edit" />} />
            <Route path="/eselon/edit/:id" element={<CrEselon mode="Edit" />} />
            <Route path="/layanan/edit/:id" element={<CrFeatur mode="Edit" />} />
            <Route path="/gambar/edit/:id" element={<CrImage mode="Edit" />} />
            <Route path="/pejabat/edit/:id" element={<CrPlacem mode="Edit" />} />
            <Route path="/menus/edit/:id" element={<CrMenu mode="Edit" />} />
            <Route path="/laporan/edit/:id" element={<CrReport mode="Edit" />} />
            <Route path="/users/edit/:id" element={<CrUser mode="Edit" />} />
            <Route path="/kategori/edit/:id" element={<CrCategory mode="Edit" />} />
            <Route path="/visual/edit/:id" element={<CrVitjen mode="Edit" />} />
          </Routes>
        </div>
      </Box>
    </div>
  );
};

// Export Code
export default Dashboard;
