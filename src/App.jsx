import { Suspense } from "react";
import Header from "./components/Header/Header.jsx";
import { useCollectionNotes } from "./hooks/useCollection.js";
import { useFavorites } from "./hooks/useFavorites.js";
import { Outlet } from "react-router-dom";
import { Loader } from "./components/Loader/Loader.jsx";
import { Notifications } from "./components/Notifications/Notifications.jsx";
import { useNotifications } from "./hooks/useNotifications.js";
import { AppProvider } from "./AppContext.jsx";

export function App() {
  const [addNotification, notifications] = useNotifications();
  const { collectionList, toggleCollection, changeNote, noteList } =
    useCollectionNotes(addNotification);
  const { favoritesList, handleFavoritesToggle } =
    useFavorites(addNotification);

  return (
    <AppProvider
      collectionList={collectionList}
      favoritesList={favoritesList}
      toggleCollection={toggleCollection}
      handleFavoritesToggle={handleFavoritesToggle}
      noteList={noteList}
      changeNote={changeNote}
    >
      <>
        <Header
          collectionCount={collectionList.length}
          favoriteCount={favoritesList.length}
        />
        <Suspense fallback={<Loader />}>
          <Outlet />
          <Notifications notifications={notifications} />
        </Suspense>
      </>
    </AppProvider>
  );
}
