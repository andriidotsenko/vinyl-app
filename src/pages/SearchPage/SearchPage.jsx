import { useVinylCardList } from "../../hooks/useVinylCardList.js";

import VinylCardList from "../../components/VinylCardList/VinylCardList.jsx";
import GenreList from "../../components/GenreList/GenreList.jsx";
import { useNavigate, useOutletContext } from "react-router-dom";
import { SearchForm } from "../../components/SearchForm/SearchForm.jsx";
import { getSearchParamsFromFilters } from "../../utils/filters";

export function SearchPage() {
  const {
    collectionList,
    favoritesList,
    handleCollectionToggle,
    handleFavoritesToggle,
  } = useOutletContext();

  const navigate = useNavigate();

  const handleFormSubmit = (filters) => {
    const params = getSearchParamsFromFilters(filters);

    navigate({
      pathname: "/search/results",
      search: params.toString(),
    });
  };
  const vinylCardListData = useVinylCardList();

  const filteredList = vinylCardListData.filter((item) => {
    return item.title.toLowerCase().indexOf("er") !== -1;
  });

  return (
    <>
      <main className="main">
        <div className="container">
          <SearchForm onSubmit={handleFormSubmit} />
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
