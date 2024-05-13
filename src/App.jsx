import { Suspense } from "react";
import Header from "./components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import { Loader } from "./components/Loader/Loader.jsx";
import { Notifications } from "./components/Notifications/Notifications.jsx";
import { FavoritesProvider } from "./components/contexts/providers/FavoritesContext.jsx";
import { CollectionNotesProvider } from "./components/contexts/providers/CollectionNotes/CollectionNotesContext.jsx";
import { NotificationsProvider } from "./components/contexts/providers/NotificationsContext.jsx";

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
