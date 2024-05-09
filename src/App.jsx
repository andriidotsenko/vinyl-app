import { Suspense } from "react";
import Header from "./components/Header/Header.jsx";
import { useCollectionNotes } from "./hooks/useCollection.js";
import { useFavorites } from "./hooks/useFavorites.js";
import { Outlet } from "react-router-dom";
import { Loader } from "./components/Loader/Loader.jsx";

import { Notifications } from "./components/Notifications/Notifications.jsx";
import { useNotifications } from "./hooks/useNotifications.js";

export function App() {
  const [addNotification, notifications] = useNotifications();

  const {
    collectionList,
    handleAddedToCollection,
    handleRemovedFromCollection,
    addNote,
    noteList,
  } = useCollectionNotes(addNotification);

  const { favoritesList, handleFavoritesToggle } =
    useFavorites(addNotification);

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
            handleAddedToCollection,
            handleRemovedFromCollection,
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
