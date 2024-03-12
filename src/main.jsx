import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";

const appElement = document.getElementById("app");
const root = createRoot(appElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
