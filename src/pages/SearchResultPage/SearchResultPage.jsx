import { useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { Portal } from "react-portal";
import { Helmet } from "react-helmet-async";
import { useAppContext } from "../../AppContext.jsx";

import styles from "./SearchResultPage.module.css";

import { Loader } from "../../components/Loader/Loader.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import VinylCardList from "../../components/VinylCardList/VinylCardList.jsx";
import { FiltersChips } from "../../components/FiltersChips/FiltersChips.jsx";
import NonResultsPageIcon from "../../components/Icon/NonResultsPageIcon.jsx";

import Modal from "../../components/Modal/Modal.jsx";
import ModalVinyl from "../../components/ModalVinyl/ModalVinyl.jsx";

import useGenerateTitleSearchResult from "../../hooks/useGenerateTitleSearchResult.js";
import { useFilteredVinylListAsync } from "../../hooks/useFilteredVinylListAsync.js";
import { useBodyScrollDisabled } from "../../hooks/useBodyScrollDisabled.js";

import { getPageSizeByScreenWidth } from "../../utils/getPageSizeByScreenWidth";
import {
  emptyFilters,
  getFiltersFromParams,
  getSearchParamsFromFilters,
} from "../../utils/filters.js";

const screenWidth = window.innerWidth;
const pageSize = getPageSizeByScreenWidth(screenWidth);

export const SearchResultsPage = () => {
  const [params, setParams] = useSearchParams(emptyFilters);
  const {
    collectionList,
    favoritesList,
    toggleCollection,
    handleFavoritesToggle,
    noteList,
    changeNote,
  } = useAppContext();
  const [openedVinylId, setOpenedVinylId] = useState(null);

  useBodyScrollDisabled(Boolean(openedVinylId));

  const filters = getFiltersFromParams(params);
  const page = Number(params.get("page")) || 1;

  const vinylListQuery = useFilteredVinylListAsync(filters, {
    limit: pageSize,
    offset: (page - 1) * pageSize,
  });
  const pagesCount = Math.ceil(vinylListQuery.total / pageSize);
  const generateTitleSearchResult = useGenerateTitleSearchResult(filters);
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
                onClickInCollection={toggleCollection}
                onClickInFavorites={handleFavoritesToggle}
                onVinylImageClick={setOpenedVinylId}
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
      {Boolean(openedVinylId) && (
        <Portal>
          <Modal onClose={closeModal}>
            <div>
              <ModalVinyl
                id={openedVinylId}
                inCollection={collectionList.includes(openedVinylId)}
                inFavorites={favoritesList.includes(openedVinylId)}
                onFavoritesToggle={handleFavoritesToggle}
                onCollectionToggle={toggleCollection}
                onClose={closeModal}
                variant={"primary"}
                noteList={noteList}
                changeNote={changeNote}
              />
            </div>
          </Modal>
        </Portal>
      )}
    </>
  );
};
