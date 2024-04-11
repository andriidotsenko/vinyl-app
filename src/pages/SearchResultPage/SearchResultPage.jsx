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
import { getPageSizeByScreenWidth } from "../../utils/getPageSizeByScreenWidth";
import { Portal } from "react-portal";
import ModalVinyl from "../../components/ModalVinyl/ModalVinyl.jsx";
import Modal from "../../components/Modal/Modal.jsx";
import { useState } from "react";

const screenWidth = window.innerWidth;
const pageSize = getPageSizeByScreenWidth(screenWidth);

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
  const [openedVinylId, setOpenedVinylId] = useState(null);
  const vinylListQuery = useFilteredVinylListAsync(filters, {
    limit: pageSize,
    offset: (page - 1) * pageSize,
  });
  const closeModal = () => {
    setOpenedVinylId(null);
  };
  const setFilters = (filters) =>
    setParams(getSearchParamsFromFilters(filters));

  const handlePageChange = (page) => {
    const nextParams = getSearchParamsFromFilters(filters);

    if (page > 1) {
      nextParams.set("page", page);
    }

    setParams(nextParams);
  };
  const generateTitleSearchResult = useGenerateTitleSearchResult(filters);
  const pagesCount = Math.ceil(vinylListQuery.total / pageSize);

  const isFiltersEmpty = Object.values(filters).every((value) =>
    Array.isArray(value) ? !value?.length : !value
  );

  if (isFiltersEmpty) {
    return <Navigate to={"/search"} />;
  }
  function countFilledParams(params) {
    return Object.values(params).reduce(
      (count, param) =>
        count +
        ((typeof param === "string" && param.trim() !== "") ||
        (Array.isArray(param) && param.length > 0)
          ? Array.isArray(param)
            ? param.length
            : 1
          : 0),
      0
    );
  }

  const filledParams = countFilledParams(filters);

  return (
    <>
      <Helmet>
        <title>{generateTitleSearchResult}</title>
      </Helmet>

      <main className="main">
        <div className="container">
          <div className={styles.header}>
            <div className={styles.title}>
              <span className={styles.count}>{filledParams}</span>{" "}
              {filledParams > 1 ? "filters" : "filter"} applied:
            </div>
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
                setOpenedVinylId={setOpenedVinylId}
              />
              <Pagination
                totalPages={pagesCount}
                currentPage={page}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
      </main>
      <Portal>
        {openedVinylId && (
          <Modal onClose={closeModal}>
            <div>
              <Modal>
                <ModalVinyl
                  id={openedVinylId}
                  inCollection={collectionList.includes(openedVinylId)}
                  inFavorites={favoritesList.includes(openedVinylId)}
                  onFavoritesToggle={handleFavoritesToggle}
                  onCollectionToggle={handleCollectionToggle}
                  onClose={closeModal}
                />
              </Modal>
            </div>
          </Modal>
        )}
      </Portal>
    </>
  );
};
