import { useGenreList } from "../../hooks/useGenreList";
import { useDecadeList } from "../../hooks/useDecadeList";
import { useCountriesList } from "../../hooks/useCountriesList";

import styles from "./SearchForm.module.css";

export const SearchForm = () => {
  const genreList = useGenreList();
  const decadeList = useDecadeList();
  const countriesList = useCountriesList();

  const filterValues = {};
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
      <option key={option.id} value={option.from}>
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
  return (
    <div className={styles.filter}>
      <form className={styles.form} onSubmit={applyFilters}>
        <label className={styles.block}>
          <input
            type="text"
            name="artist"
            placeholder="Artist"
            id="filterArtist"
            onChange={handleChangeArtist}
          />
          {/* <p className={styles.errorBlock}>
            Value must be less than 20 characters
          </p> */}
        </label>
        <label className={styles.block}>
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
        <label className={styles.block}>
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
        <label className={styles.block}>
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
      </form>
    </div>
  );
};
