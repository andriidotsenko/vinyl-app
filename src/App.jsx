import { clsx } from "clsx";

export function App() {
  const genreList = [
    {
      id: 1,
      name: "Rock",
    },
    {
      id: 2,
      name: "Pop",
    },
    {
      id: 3,
      name: "Electronic",
    },
    {
      id: 4,
      name: "Country",
    },
    {
      id: 5,
      name: "Jazz",
    },
  ];

  const countriesList = [
    {
      id: 1,
      name: "USA",
    },
    {
      id: 2,
      name: "United Kingdom",
    },
    {
      id: 3,
      name: "Germany",
    },
    {
      id: 4,
      name: "Sweden",
    },
    {
      id: 5,
      name: "Ukraine",
    },
  ];

  const decadeList = [
    { id: 1, value: "50-60", label: "1950-60 pp." },
    { id: 2, value: "60-70", label: "1960-70 pp." },
    { id: 3, value: "70-80", label: "1970-80 pp." },
    { id: 4, value: "80-90", label: "1980-90 pp." },
    { id: 5, value: "90-00", label: "1990-00 pp." },
    { id: 6, value: "00-10", label: "2000-10 pp." },
    { id: 7, value: "10-20", label: "2010-20 pp." },
    { id: 8, value: "20-30", label: "2020-30 pp." },
  ];

  const collectionList = [1, 2, 3, 4, 5, 6, 15];
  const favoriteList = [1, 3, 6, 12, 18];

  const cardList = [
    {
      id: 1,
      image: {
        normal: "./content/rhcp-californication.jpg",
        double: "./content/rhcp-californication.jpg",
      },
      title: "Californication",
      artist: "Red Hot Chili Peppers",
      year: "1999",
      genreId: 1, // Rock
      country: "USA",
    },
    {
      id: 2,
      image: {
        normal: "./content/rhcp-stadium-arcadium.jpg",
        double: "./content/rhcp-stadium-arcadium.jpg",
      },
      title: "Stadium Arcadium",
      artist: "Red Hot Chili Peppers",
      year: "2006",
      genreId: 1, // Rock
      country: "USA",
    },
    {
      id: 3,
      image: {
        normal: "./content/mgmt-oracular-spectacular.jpg",
        double: "./content/mgmt-oracular-spectacular.jpg",
      },
      title: "Oracular Spectacular",
      artist: "MGMT",
      year: "2007",
      genreId: 2, // Pop
      country: "USA",
    },
    {
      id: 4,
      image: {
        normal: "./content/ffdp-the-wrong-side-of-heaven.jpg",
        double: "./content/ffdp-the-wrong-side-of-heaven.jpg",
      },
      title: "The Wrong Side of Heaven",
      artist: "Five Finger Death Punch",
      year: "2013",
      genreId: 1, // Rock
      country: "USA",
    },
    {
      id: 5,
      image: {
        normal: "./content/gorillaz-demon-days.jpg",
        double: "./content/gorillaz-demon-days.jpg",
      },
      title: "Demon Days",
      artist: "Gorillaz",
      year: "2005",
      genreId: 2, // Pop
      country: "United Kingdom",
    },
    {
      id: 6,
      image: {
        normal: "./content/muse-origin-of-symmetry.jpg",
        double: "./content/muse-origin-of-symmetry.jpg",
      },
      title: "Origin of Symmetry",
      artist: "Muse",
      year: "2001",
      genreId: 1, // Rock
      country: "United Kingdom",
    },
    {
      id: 7,
      image: {
        normal: "./content/ffdp-and-justice-for-none.png",
        double: "./content/ffdp-and-justice-for-none.png",
      },
      title: "And Justice for None",
      artist: "Five Finger Death Punch",
      year: "2018",
      genreId: 1, // Rock
      country: "USA",
    },
    {
      id: 8,
      image: {
        normal: "./content/portugal-the-man-woodstock.jpg",
        double: "./content/portugal-the-man-woodstock.jpg",
      },
      title: "Woodstock",
      artist: "Portugal. The Man",
      year: "2017",
      genreId: 1, // Rock
      country: "USA",
    },
    {
      id: 9,
      image: {
        normal: "./content/muse-the-resistance.jpg",
        double: "./content/muse-the-resistance.jpg",
      },
      title: "The Resistance",
      artist: "Muse",
      year: "2009",
      genreId: 1, // Rock
      country: "United Kingdom",
    },
    {
      id: 10,
      image: {
        normal: "./content/mgmt-little-dark-age.jpg",
        double: "./content/mgmt-little-dark-age.jpg",
      },
      title: "Little Dark Age",
      artist: "MGMT",
      year: "2018",
      genreId: 3, // Electronic
      country: "USA",
    },
    {
      id: 11,
      image: {
        normal: "./content/ghost-prequelle.jpg",
        double: "./content/ghost-prequelle.jpg",
      },
      title: "Prequelle",
      artist: "Ghost",
      year: "2018",
      genreId: 1, // Rock
      country: "Sweden",
    },
    {
      id: 12,
      image: {
        normal: "./content/metronomy-the-english-riviera.jpg",
        double: "./content/metronomy-the-english-riviera.jpg",
      },
      title: "The English Riviera",
      artist: "Metronomy",
      year: "2011",
      genreId: 2, // Pop
      country: "United Kingdom",
    },
    {
      id: 13,
      image: {
        normal: "./content/placebo-without-you-im-nothing.jpg",
        double: "./content/placebo-without-you-im-nothing.jpg",
      },
      title: "Without You I'm Nothing",
      artist: "Placebo",
      year: "1998",
      genreId: 1, // Rock
      country: "United Kingdom",
    },
    {
      id: 14,
      image: {
        normal: "./content/radiohead-ok-computer.jpg",
        double: "./content/radiohead-ok-computer.jpg",
      },
      title: "OK Computer",
      artist: "Radiohead",
      year: "1997",
      genreId: 1, // Rock
      country: "United Kingdom",
    },
    {
      id: 15,
      image: {
        normal: "./content/alt-j-an-awesome-wave.jpg",
        double: "./content/alt-j-an-awesome-wave.jpg",
      },
      title: "An Awesome Wave",
      artist: "alt-J",
      year: "2012",
      genreId: 3, // Electronic
      country: "United Kingdom",
    },
    {
      id: 16,
      image: {
        normal: "./content/electric-guest-plural.jpg",
        double: "./content/electric-guest-plural.jpg",
      },
      title: "Plural",
      artist: "Electric Guest",
      year: "2017",
      genreId: 2, // Pop
      country: "USA",
    },
    {
      id: 17,
      image: {
        normal: "./content/blink-182-enema-of-the-state.jpg",
        double: "./content/blink-182-enema-of-the-state.jpg",
      },
      title: "Enema of the State",
      artist: "blink-182",
      year: "1999",
      genreId: 1, // Rock
      country: "USA",
    },
    {
      id: 18,
      image: {
        normal: "./content/interpol-turn-on-the-bright-lights.jpg",
        double: "./content/interpol-turn-on-the-bright-lights.jpg",
      },
      title: "Turn On the Bright Lights",
      artist: "Interpol",
      year: "2002",
      genreId: 1, // Rock
      country: "USA",
    },
  ];

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
          className={clsx(
            "btn",
            inCollection ? "btn-collection" : "btn-add"
          )}
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
              filteredList.map(renderCard)
            )}
          </div>
          <div className="pagination" id="pagination">
            <a
              href="./index.html?page=1"
              className={clsx("pagination__item", "active")}
            >
              1
            </a>
            <a href="./index.html?page=2" className="pagination__item">
              2
            </a>
            <a href="./index.html?page=3" className="pagination__item">
              3
            </a>
            <a href="./index.html?page=4" className="pagination__item">
              4
            </a>{" "}
            <a href="./index.html?page=5" className="pagination__item">
              5
            </a>{" "}
            <a href="./index.html?page=6" className="pagination__item">
              6
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
