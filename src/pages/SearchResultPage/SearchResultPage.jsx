import { useState } from "react";
import { useVinylCardList } from "../../hooks/useVinylCardList.js";

import Pagination from "../../components/Pagination/Pagination.jsx";
import VinylCardList from "../../components/VinylCardList/VinylCardList.jsx";

import { useOutletContext, useSearchParams } from "react-router-dom";

import {
  emptyFilters,
  getFiltersFromParams,
  getSearchParamsFromFilters,
} from "../../utils/filters.js";
import { useFilteredVinylCardList } from "../../hooks/useFilteredVinylCardList.js";

export const SearchResultsPage = () => {
  const [params, setParams] = useSearchParams(emptyFilters);

  const {
    collectionList,
    favoritesList,
    handleCollectionToggle,
    handleFavoritesToggle,
  } = useOutletContext();
  const filters = getFiltersFromParams(params);
  console.log(filters);
  const vinylCardListData = useVinylCardList();

  const [currentPage, setCurrentPage] = useState(1);
  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  // const filteredList = vinylCardListData.filter((item) => {
  //   return item.title.toLowerCase().indexOf("is") !== -1;
  // });

  const filteredList = useFilteredVinylCardList(filters);

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

  const totalPages = Math.ceil(filteredList.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, filteredList.length - 1);
  const currentPageItems = filteredList.slice(startIndex, endIndex + 1);

  return (
    <>
      <main className="main">
        <div className="container">
          <div className="chips">
            chips chips chips chips chips chips chips chips chips chips chips
            chips chips chips chips chips chips chips chips chips chips chips
            chips chips chips chips chips chips chips chips chips chips chips
          </div>
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
};
