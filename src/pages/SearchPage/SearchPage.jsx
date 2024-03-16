import { useVinylCardList } from "../../hooks/useVinylCardList.js";
import VinylCardList from "../../components/VinylCardList/VinylCardList.jsx";
import GenreList from "../../components/GenreList/GenreList.jsx";
import { useNavigate, useOutletContext } from "react-router-dom";
import { SearchForm } from "../../components/SearchForm/SearchForm.jsx";
import { getSearchParamsFromFilters } from "../../utils/filters";
import { useShuffledList } from "../../hooks/useShuffledList";
import { Helmet } from "react-helmet-async";

export function SearchPage() {
  const {
    collectionList,
    favoritesList,
    handleCollectionToggle,
    handleFavoritesToggle,
  } = useOutletContext();

  const navigate = useNavigate();
  const vinylCardListData = useVinylCardList();
  const shuffledList = useShuffledList(vinylCardListData);

  const screenWidth = window.innerWidth;
  const pageSize =
    screenWidth < 500
      ? 1
      : screenWidth < 768
      ? 2
      : screenWidth < 1024
      ? 3
      : screenWidth < 1440
      ? 4
      : 5;

  const filteredList = shuffledList.slice(0, pageSize);

  const handleFormSubmit = (filters) => {
    const params = getSearchParamsFromFilters(filters);

    navigate({
      pathname: "/results",
      search: params.toString(),
    });
  };

  return (
    <>
      <Helmet>
        <title>{"Search"}</title>
      </Helmet>
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
