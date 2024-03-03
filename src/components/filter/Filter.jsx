import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./filter.module.css";

import { countriesListData, decadeListData } from "../../data.jsx";

const countriesList = [...countriesListData];
const decadeList = [...decadeListData];
const filterValues = {};

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

function onChangeArtist(event) {
  const value = event.target.value;
  const name = event.target.getAttribute("name");
  filterValues[name] = value;
}
function onChangeGenre(event) {
  const value = event.target.value;
  const name = event.target.getAttribute("name");
  filterValues[name] = value;
}
function onChangeDecade(event) {
  const value = event.target.value;
  const name = event.target.getAttribute("name");
  filterValues[name] = value;
}
function onChangeCountry(event) {
  const value = event.target.value;
  const name = event.target.getAttribute("name");
  filterValues[name] = value;
}

function onApplyFilters(event) {
  event.preventDefault();
  console.error(filterValues);
}

function Filter({ genres }) {
  return (
    <div className="filter">
      <form className={styles.form} onSubmit={onApplyFilters}>
        <label className={clsx(styles.block, styles.block_artist)}>
          <input
            type="text"
            name="artist"
            placeholder="Artist"
            id="filterArtist"
            onChange={onChangeArtist}
          />
        </label>
        <label className={clsx(styles.block, styles.block_genre)}>
          <select
            name="genre"
            id="filterGenre"
            defaultValue={"0"}
            onChange={onChangeGenre}
          >
            <option value="0" disabled>
              Genre
            </option>
            {genres.map((element) => renderOption(element))};
          </select>
        </label>
        <label className={clsx(styles.block, styles.block_decade)}>
          <select
            name="decade"
            id="filterDecade"
            defaultValue={"0"}
            onChange={onChangeDecade}
          >
            <option value="0" disabled>
              Decade
            </option>
            {decadeList.map((element) => renderOptionDecade(element))};
          </select>
        </label>
        <label className={clsx(styles.block, styles.block_country)}>
          <select
            name="country"
            id="filterCountry"
            defaultValue={"0"}
            onChange={onChangeCountry}
          >
            <option value="0" disabled>
              Country
            </option>
            {countriesList.map((element) => renderOption(element))};
          </select>
        </label>
        <button
          className={clsx("btn", styles.btn, "btn-green")}
          id="searchButton"
        >
          Search
        </button>
      </form>
    </div>
  );
}

Filter.propTypes = {
  genres: PropTypes.array.isRequired,
};

export default Filter;
