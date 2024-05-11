import { AppProvider } from "./AppContext.jsx";
import { Suspense } from "react";
import Header from "./components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import { Loader } from "./components/Loader/Loader.jsx";
import { Notifications } from "./components/Notifications/Notifications.jsx";

export function App() {
  return (
    <AppProvider>
      <>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
          <Notifications />
        </Suspense>
      </>
    </AppProvider>
  );
}
