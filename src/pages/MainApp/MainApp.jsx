// Import Library
import { Routes, Route } from "react-router-dom";

// Import Components
import { Footer, Header, LiveChat } from "../../components/components";

// Import MainApp Pages
import NotFound from "../NotFound/NotFound";
import { Profile, OrganSub, News, Home, Organ, Placem, Gallery, Audit, AuditBook, Article, Search, Report, ReportBook } from "./SubMain/SubMain";

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
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/organisasi" element={<Organ />} />
          <Route path="/organisasi/:eselon/:id" element={<OrganSub />} />
          <Route path="/pejabat" element={<Placem />} />
          <Route path="/pejabat/:id" element={<Profile />} />
          <Route path="/galeri" element={<Gallery />} />
          <Route path="/auditoria" element={<Audit />} />
          <Route path="/baca/auditoria/:id" element={<AuditBook />} />
          <Route path="/laporan/:jenis" element={<Report />} />
          <Route path="/baca/laporan/:id" element={<ReportBook />} />
          <Route path="/cari" element={<Search />} />
          <Route path="/artikel/:category" element={<News />} />
          <Route path="/artikel/:category/:title" element={<Article />} />
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
