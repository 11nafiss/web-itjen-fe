// Import Library
import { Routes, Route } from "react-router-dom";

// Import Components
import { Footer, Header, LiveChat } from "../../components/components";

// Import MainApp Pages
import NotFound from "../NotFound/NotFound";
import { Home, Vision, Organ, Values, Placem, Gallery, Audit, Books, Article, Search, Report, Books2 } from "./SubMain/SubMain";
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
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/profil/visi" element={<Vision />} />
          <Route path="/profil/nilai-kemenkeu" element={<Values />} />
          <Route path="/profil/organisasi" element={<Organ />} />
          <Route path="/profil/organisasi/bsip" element={<OrgBsip />} />
          <Route path="/profil/pejabat" element={<Placem />} />
          <Route path="/profil/pejabat/irjen" element={<ProIrjen />} />
          <Route path="/galeri" element={<Gallery />} />
          <Route path="/auditoria" element={<Audit />} />
          <Route path="/baca/:id" element={<Books />} />
          <Route path="/laporan-kinerja" element={<Report />} />
          <Route path="/baca/lakin-itjen-2022" element={<Books2 />} />
          <Route path="/cari" element={<Search />} />
          <Route path="/:title" element={<Article />} />
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
