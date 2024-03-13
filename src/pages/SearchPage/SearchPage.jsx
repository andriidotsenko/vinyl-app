import { useVinylCardList } from "../../hooks/useVinylCardList.js";

import VinylCardList from "../../components/VinylCardList/VinylCardList.jsx";
import GenreList from "../../components/GenreList/GenreList.jsx";

import { useOutletContext } from "react-router-dom";
import { SearchForm } from "../../components/SearchForm/SearchForm.jsx";

export function SearchPage() {
  const {
    collectionList,
    favoritesList,
    handleCollectionToggle,
    handleFavoritesToggle,
  } = useOutletContext();

  const vinylCardListData = useVinylCardList();

  const filteredList = vinylCardListData.filter((item) => {
    return item.title.toLowerCase().indexOf("er") !== -1;
  });

  return (
    <>
      <main className="main">
        <div className="container">
          <SearchForm />
          <GenreList />
          <VinylCardList
            cardList={filteredList}
            collectionList={collectionList}
            favoritesList={favoritesList}
            onClickInCollection={handleCollectionToggle}
            onClickInFavorites={handleFavoritesToggle}
          />
        </div>
      </main>
    </>
  );
}
