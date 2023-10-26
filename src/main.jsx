// Import Library
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";

// Import API
import { Provider } from "react-redux";
import store from "./store";

// Main Code
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
