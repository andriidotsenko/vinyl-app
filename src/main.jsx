import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { SearchResultsPage } from "./pages/SearchResultPage/SearchResultPage";
import { VinylPage } from "./pages/VinylPage/VinylPage";
import { HelmetProvider } from "react-helmet-async";

const appElement = document.getElementById("app");
const root = createRoot(appElement);

async function bootstrap() {
  if (import.meta.env.DEV) {
    const { worker } = await import("./mocks/browser.js");
    worker.start();
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },

      {
        path: "results",

        element: <SearchResultsPage />,
      },
      {
        path: "vinyls/:vinylId",
        element: <VinylPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

bootstrap().then(() => {
  root.render(
    <StrictMode>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </StrictMode>
  );
});
