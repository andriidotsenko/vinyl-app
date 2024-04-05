import styles from "./SearchResultPage.module.css";
import Pagination from "../../components/Pagination/Pagination.jsx";
import VinylCardList from "../../components/VinylCardList/VinylCardList.jsx";
import { FiltersChips } from "../../components/FiltersChips/FiltersChips.jsx";
import { Navigate, useOutletContext, useSearchParams } from "react-router-dom";
import {
  emptyFilters,
  getFiltersFromParams,
  getSearchParamsFromFilters,
} from "../../utils/filters.js";
import NonResultsPageIcon from "../../components/Icon/NonResultsPageIcon.jsx";
import { Loader } from "../../components/Loader/Loader.jsx";
import { Helmet } from "react-helmet-async";
import useGenerateTitleSearchResult from "../../hooks/useGenerateTitleSearchResult.js";
import { useFilteredVinylListAsync } from "../../hooks/useFilteredVinylListAsync.js";
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
const CARDS_PER_PAGE = pageSize;

export const SearchResultsPage = () => {
  const [params, setParams] = useSearchParams(emptyFilters);
  const {
    collectionList,
    favoritesList,
    handleCollectionToggle,
    handleFavoritesToggle,
  } = useOutletContext();

  const filters = getFiltersFromParams(params);
  const page = Number(params.get("page")) || 1;

  const vinylListQuery = useFilteredVinylListAsync(filters, {
    limit: CARDS_PER_PAGE,
    offset: (page - 1) * CARDS_PER_PAGE,
  });

  const setFilters = (filters) =>
    setParams(getSearchParamsFromFilters(filters));

  const setPage = (page) => {
    const nextParams = getSearchParamsFromFilters(filters);

    if (page > 1) {
      nextParams.set("page", page);
    }

    setParams(nextParams);
  };
  const generateTitleSearchResult = useGenerateTitleSearchResult(filters);
  const pagesCount = Math.ceil(vinylListQuery.total / CARDS_PER_PAGE);

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
          {vinylListQuery.isLoading ? (
            <Loader />
          ) : !vinylListQuery.results.length ? (
            <div className={styles.errorMessage}>
              <span>No results found.</span> <NonResultsPageIcon />
            </div>
          ) : (
            <>
              <VinylCardList
                isHasTitle={false}
                cardList={vinylListQuery.results}
                collectionList={collectionList}
                favoritesList={favoritesList}
                onClickInCollection={handleCollectionToggle}
                onClickInFavorites={handleFavoritesToggle}
              />
              <Pagination
                totalPages={pagesCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </div>
      </main>
    </>
  );
};
