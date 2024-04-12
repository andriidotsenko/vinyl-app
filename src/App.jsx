import { Suspense } from "react";
import Header from "./components/Header/Header.jsx";
import { useCollection } from "./hooks/useCollection.js";
import { useFavorites } from "./hooks/useFavorites.js";
import { Outlet } from "react-router-dom";
import { Loader } from "./components/Loader/Loader.jsx";
import { useNote } from "./hooks/useNotes.js";

import { Notifications } from "./components/Notifications/Notifications.jsx";
import { useNotifications } from "./hooks/useNotifications.js";

export function App() {
  const [addNotification, notifications] = useNotifications();
  const { collectionList, handleCollectionToggle } =
    useCollection(addNotification);
  const { favoritesList, handleFavoritesToggle } =
    useFavorites(addNotification);
  const { noteList, addNote } = useNote();
  return (
    <>
      <Header
        collectionCount={collectionList.length}
        favoriteCount={favoritesList.length}
      />
      <Suspense fallback={<Loader />}>
        <Outlet
          context={{
            collectionList,
            favoritesList,
            handleCollectionToggle,
            handleFavoritesToggle,
            noteList,
            addNote,
          }}
        />
        <Notifications notifications={notifications} />
      </Suspense>
    </>
  );
}
