import PropTypes from "prop-types";
import styles from "./SearchForm.module.css";
import clsx from "clsx";

import { useCountriesList } from "../../hooks/useCountriesList.js";
import { useDecadeList } from "../../hooks/useDecadeList.js";
import { useGenreList } from "../../hooks/useGenreList.js";

import { Select } from "../Select/Select.jsx";
import { MultiSelect } from "../Select/MultiSelect.jsx";
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
    genres: [],
    decades: [],
    countries: "",
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
    <form className={styles.root} onSubmit={handleSubmit}>
      <div className={clsx(styles.artist)}>
        <input
          className={clsx(styles.input)}
          type="text"
          name="artist"
          placeholder="Artist"
          value={filters.artist}
          onChange={(event) => handleFilterChange("artist", event.target.value)}
        />
      </div>

      <div className={clsx(styles.genre)}>
        <MultiSelect
          onChange={(v) => handleFilterChange("genres", v)}
          options={genreList.map((genre) => ({
            label: genre.name,
            value: genre.id,
          }))}
          value={filters.genres}
          placeholder={"Genre"}
        />
      </div>
      <div className={clsx(styles.decade)}>
        <MultiSelect
          onChange={(v) => handleFilterChange("decades", v)}
          options={decadeList.map((decade) => ({
            label: decade.name,
            value: decade.id,
          }))}
          value={filters.decades}
          placeholder={"Decade"}
        />
      </div>
      <div className={clsx(styles.country)}>
        {" "}
        <Select
          onChange={(v) => handleFilterChange("countries", v)}
          options={countriesList.map((countries) => ({
            label: countries.name,
            value: countries.id,
          }))}
          value={filters.countries}
          placeholder={"Country"}
        />
      </div>
      <div className={clsx(styles.search)}>
        <Button type="submit" isFullWidth disabled={isFiltersEmpty}>
          Search
        </Button>
      </div>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
