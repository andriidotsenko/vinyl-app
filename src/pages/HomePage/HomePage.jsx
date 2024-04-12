import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination.jsx";
import VinylCardList from "../../components/VinylCardList/VinylCardList.jsx";
import GenreList from "../../components/GenreList/GenreList.jsx";
import { useFilteredVinylListAsync } from "../../hooks/useFilteredVinylListAsync.js";
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { getPageSizeByScreenWidth } from "../../utils/getPageSizeByScreenWidth";
import { Portal } from "react-portal";
import Modal from "../../components/Modal/Modal.jsx";
import ModalVinyl from "../../components/ModalVinyl/ModalVinyl.jsx";

export function HomePage() {
  const screenWidth = window.innerWidth;
  const pageSize = getPageSizeByScreenWidth(screenWidth);

  const [currentPage, setCurrentPage] = useState(1);
  const { results, total } = useFilteredVinylListAsync(
    {},
    { offset: (currentPage - 1) * pageSize, limit: pageSize },
    { suspense: true }
  );
  const [openedVinylId, setOpenedVinylId] = useState(null);

  const closeModal = () => {
    setOpenedVinylId(null);
  };
  const {
    collectionList,
    favoritesList,
    handleCollectionToggle,
    handleFavoritesToggle,
    noteList,
    addNote,
  } = useOutletContext();

  function handlePageChange(page) {
    setCurrentPage(page);
  }
  useEffect(() => {
    if (openedVinylId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openedVinylId]);
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
            setOpenedVinylId={setOpenedVinylId}
          />
          <Pagination
            totalPages={Math.ceil(total / pageSize)}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </main>
      <Portal>
        {openedVinylId && (
          <Modal onClose={closeModal}>
            <div>
              <ModalVinyl
                id={openedVinylId}
                inCollection={collectionList.includes(openedVinylId)}
                inFavorites={favoritesList.includes(openedVinylId)}
                onFavoritesToggle={handleFavoritesToggle}
                onCollectionToggle={handleCollectionToggle}
                onClose={closeModal}
                variant={"primary"}
                noteList={noteList}
                addNote={addNote}
              />
            </div>
          </Modal>
        )}
      </Portal>
    </>
  );
}
