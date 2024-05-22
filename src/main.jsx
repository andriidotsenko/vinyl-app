import "./wdyr.js";
import { createRoot } from "react-dom/client";
import { StrictMode, Suspense, lazy } from "react";
import { App } from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Loader } from "./components/Loader/Loader.jsx";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx"; // Import ErrorBoundary

const appElement = document.getElementById("app");
const root = createRoot(appElement);

async function bootstrap() {
  const { worker } = await import("./mocks/browser.js");
  worker.start();
}

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const SearchPage = lazy(() => import("./pages/SearchPage/SearchPage.jsx"));
const SearchResultPage = lazy(() =>
  import("./pages/SearchResultPage/SearchResultPage.jsx")
);
const VinylPage = lazy(() => import("./pages/VinylPage/VinylPage.jsx"));
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage.jsx")
);

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
        element: <SearchResultPage />,
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
        <ErrorBoundary>
          <RouterProvider router={router} />
        </ErrorBoundary>
      </HelmetProvider>
    </StrictMode>
  );
});
