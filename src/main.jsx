import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App.jsx";

const appElement = document.getElementById("app");
const root = createRoot(appElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
