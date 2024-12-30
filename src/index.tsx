import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import LocalizationProvider from "./services/translate/LocalizationProvider";

const rootElement = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <LocalizationProvider>
      <App />
    </LocalizationProvider>
  </React.StrictMode>
);
