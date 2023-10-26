// Import Library
import { Routes, Route } from "react-router-dom";

// Import Components
import { HeadSmall } from "../../components/components";

// Import Admin Pages
import NotFound from "../NotFound/NotFound";
import { 
    Login,
} from "./SubAdmin/SubAdmin";

// Main Declaration
const Admin = () => {

// Main Code
  return (
    <div className="main-wrapper" style={{ height: "100vh" }}>
      <div className="header-wrapper">
        <HeadSmall />
      </div>
      <div className="content-wrapper" style={{ paddingTop: "90px", height: "100%" }}>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

// Export Code
export default Admin;