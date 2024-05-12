import { Suspense } from "react";
import Header from "./components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import { Loader } from "./components/Loader/Loader.jsx";
import { Notifications } from "./components/Notifications/Notifications.jsx";
import { FavoritesProvider } from "./FavoritesContext.jsx";
import { CollectionNotesProvider } from "./CollectionNotesContext.jsx";
import { NotificationsProvider } from "./NotificationsContext.jsx";

export function App() {
  return (
    <NotificationsProvider>
      <FavoritesProvider>
        <CollectionNotesProvider>
          <Header />
          <Suspense fallback={<Loader />}>
            <Outlet />
            <Notifications />
          </Suspense>
        </CollectionNotesProvider>
      </FavoritesProvider>
    </NotificationsProvider>
  );
}
