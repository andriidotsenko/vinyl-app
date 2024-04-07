import { useState } from "react";
import Pagination from "../../components/Pagination/Pagination.jsx";
import VinylCardList from "../../components/VinylCardList/VinylCardList.jsx";
import GenreList from "../../components/GenreList/GenreList.jsx";
import { useFilteredVinylListAsync } from "../../hooks/useFilteredVinylListAsync.js";
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { getPageSizeByScreenWidth } from "../../utils/getPageSizeByScreenWidth";

export function HomePage() {
  const screenWidth = window.innerWidth;
  const pageSize = getPageSizeByScreenWidth(screenWidth);

  const [currentPage, setCurrentPage] = useState(1);
  const { results, total } = useFilteredVinylListAsync(
    {},
    { offset: (currentPage - 1) * pageSize, limit: pageSize },
    { suspense: true }
  );

  const {
    collectionList,
    favoritesList,
    handleCollectionToggle,
    handleFavoritesToggle,
  } = useOutletContext();

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  return (
    <>
      <main className="main">
        <div className="container">
          <Helmet>
            <title>{"Home"}</title>
          </Helmet>
          <GenreList />
          <VinylCardList
            cardList={results}
            collectionList={collectionList}
            favoritesList={favoritesList}
            onClickInCollection={handleCollectionToggle}
            onClickInFavorites={handleFavoritesToggle}
          />
          <Pagination
            totalPages={total}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </main>
    </>
  );
}
