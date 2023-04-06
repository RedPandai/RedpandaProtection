import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { DonationContextProvider } from "./components/context/DonationContext";
import App from "./App";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DonationContextProvider>
        <App />
      </DonationContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
