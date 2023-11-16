// Import Library
import { Routes, Route } from "react-router-dom";

// Import Components
import { Footer, Header, LiveChat } from "../../components/components";

// Import MainApp Pages
import NotFound from "../NotFound/NotFound";
import { News, Home, Vision, Organ, Values, Placem, Gallery, Audit, AuditBook, Article, Search, Report, ReportBook } from "./SubMain/SubMain";
import { OrgBsip, ProIrjen } from "./SubContent/SubContent";

// Main Declaration
const MainApp = () => {

  // Main Code
  return (
    <div className="main-wrapper">
      <div className="header-wrapper">
        <Header />
      </div>
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil/visi" element={<Vision />} />
          <Route path="/profil/nilai-kemenkeu" element={<Values />} />
          <Route path="/organisasi" element={<Organ />} />
          <Route path="/organisasi/bsip" element={<OrgBsip />} />
          <Route path="/pejabat" element={<Placem />} />
          <Route path="/pejabat/irjen" element={<ProIrjen />} />
          <Route path="/galeri" element={<Gallery />} />
          <Route path="/auditoria" element={<Audit />} />
          <Route path="/baca/auditoria/:id" element={<AuditBook />} />
          <Route path="/laporan/:jenis" element={<Report />} />
          <Route path="/baca/laporan/:id" element={<ReportBook />} />
          <Route path="/cari" element={<Search />} />
          <Route path="/artikel/:category" element={<News />} />
          <Route path="/artikel/:category/:title" element={<Article />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <LiveChat />
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

// Export Code
export default MainApp;
