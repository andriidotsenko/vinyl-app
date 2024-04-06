import { useState } from "react";
import Pagination from "../../components/Pagination/Pagination.jsx";
import VinylCardList from "../../components/VinylCardList/VinylCardList.jsx";
import GenreList from "../../components/GenreList/GenreList.jsx";
import { useFilteredVinylListAsync } from "../../hooks/useFilteredVinylListAsync.js";
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export function HomePage() {
  const screenWidth = window.innerWidth;
  const pageSize =
    screenWidth < 500
      ? 6
      : screenWidth < 768
      ? 8
      : screenWidth < 1024
      ? 9
      : screenWidth < 1440
      ? 12
      : 10;
  const { results } = useFilteredVinylListAsync(
    {},
    { offset: 0, limit: 24 },
    { suspense: true }
  );

  const {
    collectionList,
    favoritesList,
    handleCollectionToggle,
    handleFavoritesToggle,
  } = useOutletContext();

  const [currentPage, setCurrentPage] = useState(1);
  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  const filteredList = results;

  const totalPages = Math.ceil(filteredList.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, filteredList.length - 1);
  const currentPageItems = filteredList.slice(startIndex, endIndex + 1);

  return (
    <>
      <main className="main">
        <div className="container">
          <Helmet>
            <title>{"Home"}</title>
          </Helmet>
          <GenreList />
          <VinylCardList
            cardList={currentPageItems}
            collectionList={collectionList}
            favoritesList={favoritesList}
            onClickInCollection={handleCollectionToggle}
            onClickInFavorites={handleFavoritesToggle}
          />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </main>
    </>
  );
}
