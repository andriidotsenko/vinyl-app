import PropTypes from "prop-types";
import styles from "./SearchForm.module.css";
import clsx from "clsx";

import { useCountriesList } from "../../hooks/useCountriesList.js";
import { useDecadeList } from "../../hooks/useDecadeList.js";
import { useGenreList } from "../../hooks/useGenreList.js";

import { Button } from "../Button/Button.jsx";

import { useSearchParams } from "react-router-dom";

import {
  getFiltersFromParams,
  getSearchParamsFromFilters,
} from "../../utils/filters.js";

export const SearchForm = ({ onSubmit }) => {
  const genreList = useGenreList();
  const decadeList = useDecadeList();
  const countriesList = useCountriesList();

  const [params, setParams] = useSearchParams({
    artist: "",
    genre: "",
    decade: "",
    country: "",
  });

  const filters = getFiltersFromParams(params);

  function handleFilterChange(name, value) {
    const nextParams = getSearchParamsFromFilters({
      ...filters,
      [name]: value,
    });
    setParams(nextParams);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(filters);
  }

  const isFiltersEmpty = Object.values(filters).every((value) =>
    Array.isArray(value) ? !value?.length : !value
  );

  return (
    <div className={styles.filter}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={clsx(styles.block, styles.artist)}>
          <input
            type="text"
            name="artist"
            placeholder="Artist"
            id="filterArtist"
            onChange={(event) =>
              handleFilterChange("artist", event.target.value)
            }
          />
        </label>
        <label className={clsx(styles.block, styles.genre)}>
          <select
            name="genre"
            id="filterGenre"
            defaultValue={"0"}
            onChange={(v) => handleFilterChange("genre", v.target.value)}
          >
            <option value="0" disabled>
              Genre
            </option>
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
            defaultValue={"0"}
            onChange={(v) => handleFilterChange("decade", v.target.value)}
          >
            <option value="0" disabled>
              Decade
            </option>
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
            defaultValue={"0"}
            onChange={(v) => handleFilterChange("country", v.target.value)}
          >
            <option value="0" disabled>
              Country
            </option>
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
