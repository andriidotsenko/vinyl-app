import styles from "./SearchResultPage.module.css";
import Pagination from "../../components/Pagination/Pagination.jsx";
import VinylCardList from "../../components/VinylCardList/VinylCardList.jsx";
import FiltersChips from "../../components/FiltersChips/FiltersChips.jsx";
import { Navigate, useOutletContext, useSearchParams } from "react-router-dom";
import {
  emptyFilters,
  getFiltersFromParams,
  getSearchParamsFromFilters,
} from "../../utils/filters.js";
import { useFilteredVinylCardList } from "../../hooks/useFilteredVinylCardList.js";
import NonResultsPageIcon from "../../components/Icon/NonResultsPageIcon.jsx";
import { Helmet } from "react-helmet-async";
import useGenerateTitleSearchResult from "../../hooks/useGenerateTitleSearchResult.js";

export const SearchResultsPage = () => {
  const [params, setParams] = useSearchParams(emptyFilters);
  const {
    collectionList,
    favoritesList,
    handleCollectionToggle,
    handleFavoritesToggle,
  } = useOutletContext();
  const filters = getFiltersFromParams(params);
  const currentPage = +params.get("page") || 1;

  function handlePageChange(pageNumber) {
    const queryParams = new URLSearchParams(params);
    queryParams.set("page", pageNumber);
    setParams(queryParams.toString());
  }

  const filteredList = useFilteredVinylCardList(filters);
  const setFilters = (filters) =>
    setParams(getSearchParamsFromFilters(filters));
  const generateTitleSearchResult = useGenerateTitleSearchResult(filters);
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

  const isFiltersEmpty = Object.values(filters).every((value) =>
    Array.isArray(value) ? !value?.length : !value
  );

  if (isFiltersEmpty) {
    return <Navigate to={"/search"} />;
  }

  return (
    <>
      <Helmet>
        <title>{generateTitleSearchResult}</title>
      </Helmet>
      <main className="main">
        <div className="container">
          <div className={styles.header}>
            <div className={styles.title}>Filters applied:</div>
            <div
              className={styles.resetButton}
              onClick={() => setFilters(emptyFilters)}
              role="button"
              tabIndex={0}
            >
              Reset changes
            </div>
          </div>
          <FiltersChips filters={filters} onFiltersChange={setParams} />
          {filteredList.length > 0 ? (
            <>
              <VinylCardList
                isHasTitle={false}
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
            </>
          ) : (
            <div className={styles.errorMessage}>
              <span>No results found.</span> <NonResultsPageIcon />
            </div>
          )}
        </div>
      </main>
    </>
  );
};
