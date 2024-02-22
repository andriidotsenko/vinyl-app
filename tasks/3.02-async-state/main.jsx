import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import App from "./App.jsx";

import "./main.css";

const appRootElement = document.querySelector("#app");
const root = createRoot(appRootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
