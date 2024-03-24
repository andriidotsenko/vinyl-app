import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./SearchForm.module.css";
import clsx from "clsx";

import { useCountriesList } from "../../hooks/useCountriesList.js";
import { useDecadeList } from "../../hooks/useDecadeList.js";
import { useGenreList } from "../../hooks/useGenreList.js";
// import MultiSelect from "../MultiSelect/MultiSelect.jsx";

import { Button } from "../Button/Button.jsx";

export const SearchForm = ({ onSubmit }) => {
  const genreList = useGenreList();
  const decadeList = useDecadeList();
  const countriesList = useCountriesList();

  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [decade, setDecade] = useState("");
  const [country, setCountry] = useState("");

  const filters = {
    artist,
    genre,
    decade,
    country,
  };

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(filters);
  }

  const isFiltersEmpty = !(artist || genre || decade || country);

  return (
    <div className={styles.filter}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={clsx(styles.block, styles.artist)}>
          <input
            type="text"
            name="artist"
            placeholder="Artist"
            id="filterArtist"
            value={artist}
            onChange={(event) => setArtist(event.target.value)}
          />
        </label>
        <label className={clsx(styles.block, styles.genre)}>
          <select
            name="genre"
            id="filterGenre"
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
          >
            <option value="">Genre</option>
            {genreList.map((element) => (
              <option key={element.id} value={element.id}>
                {element.name}
              </option>
            ))}
          </select>
        </label>

        <label className={clsx(styles.block, styles.decade)}>
          <select
            name="decade"
            id="filterDecade"
            value={decade}
            onChange={(event) => setDecade(event.target.value)}
          >
            <option value="">Decade</option>
            {decadeList.map((element) => (
              <option key={element.id} value={element.id}>
                {element.name}
              </option>
            ))}
          </select>
        </label>
        <label className={clsx(styles.block, styles.country)}>
          <select
            name="country"
            id="filterCountry"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          >
            <option value="">Country</option>
            {countriesList.map((element) => (
              <option key={element.id} value={element.id}>
                {element.name}
              </option>
            ))}
          </select>
        </label>

        <div className={clsx(styles.block, styles.searchButton)}>
          <Button type="submit" disabled={isFiltersEmpty}>
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
