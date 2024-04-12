import { Suspense } from "react";
import Header from "./components/Header/Header.jsx";
import { useCollection } from "./hooks/useCollection.js";
import { useFavorites } from "./hooks/useFavorites.js";
import { Outlet } from "react-router-dom";
import { Loader } from "./components/Loader/Loader.jsx";
import { useNote } from "./hooks/useNotes.js";

export function App() {
  const { collectionList, handleCollectionToggle } = useCollection();
  const { favoritesList, handleFavoritesToggle } = useFavorites();
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
      </Suspense>
    </>
  );
}
