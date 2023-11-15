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

            <Route path="/artikel/tambah" element={<CrArticle mode="create" />} />
            <Route path="/banner/tambah" element={<CrBanner mode="create" />} />
            <Route path="/auditoria/tambah" element={<CrAudit mode="create" />} />
            <Route path="/eselon/tambah" element={<CrEselon mode="create" />} />
            <Route path="/layanan/tambah" element={<CrFeatur mode="create" />} />
            <Route path="/gambar/tambah" element={<CrImage mode="create" />} />
            <Route path="/pejabat/tambah" element={<CrPlacem mode="create" />} />
            <Route path="/menus/tambah" element={<CrMenu mode="create" />} />
            <Route path="/laporan/tambah" element={<CrReport mode="create" />} />
            <Route path="/users/tambah" element={<CrUser mode="create" />} />
            <Route path="/kategori/tambah" element={<CrCategory mode="create" />} />

            <Route path="/artikel/edit/:id" element={<CrArticle mode="edit" />} />
            <Route path="/banner/edit/:id" element={<CrBanner mode="edit" />} />
            <Route path="/auditoria/edit/:id" element={<CrAudit mode="edit" />} />
            <Route path="/eselon/edit/:id" element={<CrEselon mode="edit" />} />
            <Route path="/layanan/edit/:id" element={<CrFeatur mode="edit" />} />
            <Route path="/gambar/edit/:id" element={<CrImage mode="edit" />} />
            <Route path="/pejabat/edit/:id" element={<CrPlacem mode="edit" />} />
            <Route path="/menus/edit/:id" element={<CrMenu mode="edit" />} />
            <Route path="/laporan/edit/:id" element={<CrReport mode="edit" />} />
            <Route path="/users/edit/:id" element={<CrUser mode="edit" />} />
            <Route path="/kategori/edit/:id" element={<CrCategory mode="edit" />} />
          </Routes>
        </div>
      </Box>
    </div>
  );
};

// Export Code
export default Dashboard;
