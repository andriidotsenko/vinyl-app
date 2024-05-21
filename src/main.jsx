import { createRoot } from "react-dom/client";
import { StrictMode, Suspense, lazy } from "react";
import { App } from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Loader } from "./components/Loader/Loader.jsx";

const appElement = document.getElementById("app");
const root = createRoot(appElement);

async function bootstrap() {
  // if (import.meta.env.DEV) {
  const { worker } = await import("./mocks/browser.js");
  worker.start();
  // }
}

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const SearchPage = lazy(() => import("./pages/SearchPage/SearchPage"));
const SearchResultPage = lazy(() =>
  import("./pages/SearchResultPage/SearchResultPage")
);
const VinylPage = lazy(() => import("./pages/VinylPage/VinylPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "search",
        element: (
          <Suspense fallback={<Loader />}>
            <SearchPage />
          </Suspense>
        ),
      },
      {
        path: "results",
        element: (
          <Suspense fallback={<Loader />}>
            <SearchResultPage />
          </Suspense>
        ),
      },
      {
        path: "vinyls/:vinylId",
        element: (
          <Suspense fallback={<Loader />}>
            <VinylPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Loader />}>
            <NotFoundPage />
          </Suspense>
        ),
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
