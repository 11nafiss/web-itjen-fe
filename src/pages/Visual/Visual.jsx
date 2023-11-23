// Import Library
import { Routes, Route } from "react-router-dom";

// Import MainApp Pages
import NotFound from "../NotFound/NotFound";
import { Front, Locker, Present } from "./SubVisual/SubVisual";

// Main Declaration
const MainApp = () => {
  // Main Code
  return (
    <div className="main-wrapper">
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/semua" element={<Locker />} />
          <Route path="/lihat/:id" element={<Present />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};



// Export Code
export default MainApp;
