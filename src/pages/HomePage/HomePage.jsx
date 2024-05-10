import { useState } from "react";
import { useAppContext } from "../../AppContext.jsx";
import { Portal } from "react-portal";
import { Helmet } from "react-helmet-async";

import { useFilteredVinylListAsync } from "../../hooks/useFilteredVinylListAsync.js";
import { useBodyScrollDisabled } from "../../hooks/useBodyScrollDisabled.js";

import GenreList from "../../components/GenreList/GenreList.jsx";
import VinylCardList from "../../components/VinylCardList/VinylCardList.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";

import Modal from "../../components/Modal/Modal.jsx";
import ModalVinyl from "../../components/ModalVinyl/ModalVinyl.jsx";

import { getPageSizeByScreenWidth } from "../../utils/getPageSizeByScreenWidth";

const screenWidth = window.innerWidth;
const pageSize = getPageSizeByScreenWidth(screenWidth);

export function HomePage() {
  const {
    collectionList,
    favoritesList,
    toggleCollection,
    handleFavoritesToggle,
    noteList,
    changeNote,
  } = useAppContext();

  const [openedVinylId, setOpenedVinylId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const { results, total } = useFilteredVinylListAsync(
    {},
    { offset: (currentPage - 1) * pageSize, limit: pageSize },
    { suspense: true }
  );
  function handlePageChange(page) {
    setCurrentPage(page);
  }
  const closeModal = () => {
    setOpenedVinylId(null);
  };

  useBodyScrollDisabled(openedVinylId);

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
            onClickInCollection={toggleCollection}
            onClickInFavorites={handleFavoritesToggle}
            onVinylImageClick={setOpenedVinylId}
            isHasTitle={false}
          />
          <Pagination
            totalPages={Math.ceil(total / pageSize)}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </main>
      <Portal>
        {Boolean(openedVinylId) && (
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
        )}
      </Portal>
    </>
  );
}
