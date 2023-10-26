// Import Library
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainApp, Admin, Dashboard } from "../../pages/index";

// Main Declaration
const Router = () => {

// Main Code
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainApp />} />
        <Route path="admin-login/*" element={<Admin />} />
        <Route path="dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    )
}


// Export Code
export default Router;