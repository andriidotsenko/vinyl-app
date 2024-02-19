import { clsx } from "clsx";

import {
  genreListData,
  countriesListData,
  decadeListData,
  cardListData,
} from "./data.jsx";

export function App() {
  const genreList = [...genreListData];
  const countriesList = [...countriesListData];
  const decadeList = [...decadeListData];
  const cardList = [...cardListData];

  const collectionList = [1, 2, 3];
  const favoriteList = [1, 2, 3];

  const filterValues = {};

  function handleClickInCollection(event, card) {
    collectionList.includes(card.id)
      ? console.error("Not implemented: In collection: id: " + card.id)
      : console.error("Not implemented: Add: id: " + card.id);
  }
  function handleClickInFavorites(event, card) {
    favoriteList.includes(card.id)
      ? console.error("Not implemented: In favorites: id: " + card.id)
      : console.error("Not implemented: Add to favorites: id: " + card.id);
  }

  function handleChangeArtist(event) {
    const value = event.target.value;
    const name = event.target.getAttribute("name");
    filterValues[name] = value;
  }
  function handleChangeGenre(event) {
    const value = event.target.value;
    const name = event.target.getAttribute("name");
    filterValues[name] = value;
  }
  function handleChangeDecade(event) {
    const value = event.target.value;
    const name = event.target.getAttribute("name");
    filterValues[name] = value;
  }
  function handleChangeCountry(event) {
    const value = event.target.value;
    const name = event.target.getAttribute("name");
    filterValues[name] = value;
  }

  function applyFilters(event) {
    event.preventDefault();
    console.error(filterValues);
  }

  const renderOptionDecade = (option) => {
    return (
      <option key={option.id} value={option.value}>
        {option.label}
      </option>
    );
  };

  const renderOption = (option) => {
    return (
      <option key={option.id} value={option.id}>
        {option.name}
      </option>
    );
  };
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

  let currentPage = 1;
  const screenWidth = window.innerWidth;
  const pageSize = screenWidth < 800 ? 6 : 20;

  const totalPages = Math.ceil(filteredList.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, filteredList.length - 1);
  const currentPageItems = filteredList.slice(startIndex, endIndex + 1);

  const renderPaginationLinks = () => (
    <>
      {
      Array.from({ length: totalPages }).map((_, i) => (
        <a
            key={i+1}
            href={`./index.html?page=${i+1}`}
            className={clsx("pagination__item", {
              active: i+1 === currentPage,
            })}
          >
            {i+1}
          </a>
      ))
      }
    </>
  )




  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrap">
            <a href="/" className="header__back" id="headerBack">
              <span
                className={clsx("header__icon", "header__icon_back")}
              ></span>
              Back
            </a>
            <div className="header__actions">
              <a href="/" className={clsx("header__icon", "header__icon_fav")}>
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 6.32647C19 11.4974 10 17 10 17C10 17 1 11.4974 1 6.32647C1 -0.694364 10 -0.599555 10 5.57947C10 -0.599555 19 -0.507124 19 6.32647Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="/"
                className={clsx("header__icon", "header__icon_folder")}
              >
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 15.2222V6.33333C19 5.86184 18.8104 5.40965 18.4728 5.07625C18.1352 4.74286 17.6774 4.55556 17.2 4.55556H11.1124C10.7781 4.55554 10.4503 4.46356 10.1659 4.28992C9.88155 4.11628 9.65175 3.86783 9.5023 3.57244L8.6977 1.98311C8.54818 1.68759 8.31824 1.43906 8.03368 1.2654C7.74912 1.09175 7.4212 0.999846 7.0867 1H2.8C2.32261 1 1.86477 1.1873 1.52721 1.5207C1.18964 1.8541 1 2.30628 1 2.77778V15.2222C1 15.6937 1.18964 16.1459 1.52721 16.4793C1.86477 16.8127 2.32261 17 2.8 17H17.2C17.6774 17 18.1352 16.8127 18.4728 16.4793C18.8104 16.1459 19 15.6937 19 15.2222Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <div className="filter">
            <form className="filter__form" onSubmit={applyFilters}>
              <label className={clsx("filter__block", "filter__block_artist")}>
                <input
                  type="text"
                  name="artist"
                  placeholder="Artist"
                  id="filterArtist"
                  onChange={handleChangeArtist}
                />
                <p className="error-block">
                  Value must be less than 20 characters
                </p>
              </label>
              <label className={clsx("filter__block", "filter__block_genre")}>
                <select
                  name="genre"
                  id="filterGenre"
                  defaultValue={"0"}
                  onChange={handleChangeGenre}
                >
                  <option value="0" disabled>
                    Genre
                  </option>
                  {genreList.map((element) => renderOption(element))};
                </select>
              </label>
              <label className={clsx("filter__block", "filter__block_decade")}>
                <select
                  name="decade"
                  id="filterDecade"
                  defaultValue={"0"}
                  onChange={handleChangeDecade}
                >
                  <option value="0" disabled>
                    Decade
                  </option>
                  {decadeList.map((element) => renderOptionDecade(element))};
                </select>
              </label>
              <label className={clsx("filter__block", "filter__block_country")}>
                <select
                  name="country"
                  id="filterCountry"
                  defaultValue={"0"}
                  onChange={handleChangeCountry}
                >
                  <option value="0" disabled>
                    Country
                  </option>
                  {countriesList.map((element) => renderOption(element))};
                </select>
              </label>
              <button className={clsx("btn", "btn-green")} id="searchButton">
                Search
              </button>
            </form>
          </div>
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
