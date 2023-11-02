// Import Library
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from 'redux-persist';

// Import API
import { Provider } from "react-redux";
import store from "./store";

let persistor = persistStore(store)

// Main Code
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
