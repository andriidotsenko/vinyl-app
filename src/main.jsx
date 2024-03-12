import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App";
import { HomePage } from "./pages/HomePage/HomePage";

const appElement = document.getElementById("app");
const root = createRoot(appElement);

root.render(
  <StrictMode>
    {/* <App /> */}
    <HomePage />
  </StrictMode>
);
