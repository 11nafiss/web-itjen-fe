// Import Library
import { BrowserRouter } from "react-router-dom";
import { Router } from "../config/config";
import "./App.scss";

// Import Api
import { useAppSelector } from "../hooks/useTypedSelector";

// Main Declaration
function App() {
  const currentUser = useAppSelector((state) => state.user.loginUser.currentUser);
  console.log("ini current user ", currentUser);

  // Main Code
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

// Export Code
export default App;
