import { useState } from "react";
import { useVinylCardList } from "../../hooks/useVinylCardList.js";

import Header from "../../components/Header/Header.jsx";

import Pagination from "../../components/Pagination/Pagination.jsx";
import VinylCardList from "../../components/VinylCardList/VinylCardList.jsx";
import GenreList from "../../components/GenreList/GenreList.jsx";

export function HomePage() {
  const [collectionList, setCollectionList] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const vinylCardListData = useVinylCardList();

  function handleCollectionToggle(cardId) {
    if (collectionList.includes(cardId)) {
      setCollectionList((prevCollectionList) =>
        prevCollectionList.filter((id) => id !== cardId)
      );
    } else {
      setCollectionList((prevCollectionList) => [
        ...prevCollectionList,
        cardId,
      ]);
    }
  }

  function handleClickInCollection(cardId) {
    if (favoriteList.includes(cardId)) {
      setFavoriteList((prevFavoriteList) =>
        prevFavoriteList.filter((id) => id !== cardId)
      );
    } else {
      setFavoriteList((prevFavoriteList) => [...prevFavoriteList, cardId]);
    }
  }

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  const filteredList = vinylCardListData.filter((item) => {
    return item.title.toLowerCase().indexOf("") !== -1;
  });

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
      <Header
        favoriteCount={favoriteList.length}
        collectionCount={collectionList.length}
      />
      <main className="main">
        <div className="container">
          <GenreList />
          <VinylCardList
            cardList={currentPageItems}
            collectionList={collectionList}
            favoriteList={favoriteList}
            onClickInCollection={handleCollectionToggle}
            onClickInFavorites={handleClickInCollection}
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
