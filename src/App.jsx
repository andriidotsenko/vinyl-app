import Header from "./components/Header/Header.jsx";
import { useCollection } from "./hooks/useCollection.js";
import { useFavorites } from "./hooks/useFavorites.js";
import { Outlet } from "react-router-dom";

export function App() {
  const { collectionList, handleCollectionToggle } = useCollection();
  const { favoritesList, handleFavoritesToggle } = useFavorites();
  return (
    <>
      <Header
        collectionCount={collectionList.length}
        favoriteCount={favoritesList.length}
      />
      <Outlet
        context={{
          collectionList,
          favoritesList,
          handleCollectionToggle,
          handleFavoritesToggle,
        }}
      />
    </>
  );
}
