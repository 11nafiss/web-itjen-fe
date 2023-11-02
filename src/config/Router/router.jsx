// Import Library
import { Routes, Route } from "react-router-dom";
import { MainApp, Admin, Dashboard } from "../../pages/index";

// Import Api
import { useAppSelector } from "../../hooks/useTypedSelector";

// Main Declaration
const Router = () => {
  const currentUser = useAppSelector((state) => state.user.loginUser.currentUser);

  if (currentUser !== null) {
    return (
      <Routes>
        <Route path="/*" element={<MainApp />} />
        <Route path="admin-login/*" element={<Admin />} />
        <Route path="dashboard/*" element={<Dashboard />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/*" element={<MainApp />} />
        <Route path="admin-login/*" element={<Admin />} />
      </Routes>
    );
  }
};

// Export Code
export default Router;
