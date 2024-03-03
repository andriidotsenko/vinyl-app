import { useState } from "react";
import { clsx } from "clsx";

import Header from "./components/header/Header";
import GenreList from "./components/genreList/GenreList";

import { genreListData, cardListData } from "./data.jsx";

import Filter from "./components/filter/Filter.jsx";

export function App() {
  const genreList = [...genreListData];
  const cardList = [...cardListData];

  const [collectionList, setCollectionList] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  function handleClickInCollection(event, card) {
    if (collectionList.includes(card.id)) {
      setCollectionList((prevCollectionList) =>
        prevCollectionList.filter((item) => item !== card.id)
      );
    } else {
      setCollectionList((prevCollectionList) => [
        ...prevCollectionList,
        card.id,
      ]);
    }
  }

  function handleClickInFavorites(event, card) {
    if (favoriteList.includes(card.id)) {
      setFavoriteList((prevFavoriteList) =>
        prevFavoriteList.filter((item) => item !== card.id)
      );
    } else {
      setFavoriteList((prevFavoriteList) => [...prevFavoriteList, card.id]);
    }
  }

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  const renderPaginationLinks = () => (
    <>
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i + 1}
          className={clsx("pagination__item", {
            active: i + 1 === currentPage,
          })}
          onClick={() => handlePageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </>
  );

  const renderCard = (card) => {
    const genreData = genreList.find((genre) => genre.id === card.genreId);
    const inCollection = collectionList.includes(card.id);
    const inFavorites = favoriteList.includes(card.id);
    return (
      <div key={card.id} className="item-block">
        <div className="item-block__image">
          <picture>
            <source
              srcSet={card.image.normal + " 1x, " + card.image.double + " 2x"}
            />
            <img src={card.image.normal} title={card.title} alt={card.title} />
          </picture>
          <div
            className="item-block__fav"
            data-id="1"
            onClick={(event) => handleClickInFavorites(event, card)}
            aria-hidden="true"
          >
            {inFavorites ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
              >
                <path
                  d="M16 4.99679C16 9.53232 8 14.3588 8 14.3588C8 14.3588 0 9.53232 0 4.99679C0 -1.16133 8 -1.07817 8 4.34158C8 -1.07817 16 -0.997101 16 4.99679Z"
                  fill="#FF4500"
                />
              </svg>
            ) : (
              <svg
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 4.6617C14 8.21672 7.5 11.9998 7.5 11.9998C7.5 11.9998 1 8.21672 1 4.6617C1 -0.165119 7.5 -0.0999381 7.5 4.14814C7.5 -0.0999381 14 -0.0363918 14 4.6617Z"
                  stroke="black"
                  strokeWidth="1.10308"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
        <h2 className="item-block__name">{card.title}</h2>
        <p className="item-block__group">{card.artist}</p>
        <div className="item-block__info">
          <p>
            Year: <span>{card.year}</span>
          </p>
          <p>
            Genre: <span>{genreData.name}</span>
          </p>
          <p>
            Country: <span>{card.country}</span>
          </p>
        </div>
        <button
          className={clsx("btn", inCollection ? "btn-collection" : "btn-add")}
          onClick={(event) => handleClickInCollection(event, card)}
        >
          <span>{inCollection ? "In collection" : "Add"}</span>
        </button>
      </div>
    );
  };

  const filteredList = cardList.filter((item) => {
    return item.title.toLowerCase().indexOf("") !== -1;
  });

  const screenWidth = window.innerWidth;
  const pageSize = screenWidth < 800 ? 3 : 8;

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
          <Filter genres={genreList} />
          <GenreList genres={genreList} />

          <div className="list-items" id="listItems">
            {filteredList.length === 0 ? (
              <p className="item-block__name">Not found</p>
            ) : (
              currentPageItems.map(renderCard)
            )}
          </div>

          <div className="pagination" id="pagination">
            {renderPaginationLinks()}
          </div>
        </div>
      </main>
    </>
  );
}
