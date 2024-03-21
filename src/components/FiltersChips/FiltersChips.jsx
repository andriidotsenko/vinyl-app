import PropTypes from "prop-types";
import FilterChip from "./FilterChip";
import { useGenreList } from "../../hooks/useGenreList";
import { useCountriesList } from "../../hooks/useCountriesList";
import { useDecadeList } from "../../hooks/useDecadeList";
import styles from "./FiltersChips.module.css";

const FiltersChips = ({ filters, onFiltersChange }) => {
  const genres = useGenreList();
  const countries = useCountriesList();
  const decades = useDecadeList();

  function handleRemove(name) {
    onFiltersChange({ ...filters, [name]: "" });
  }

  const genreName = genres.find((genre) => genre.id === +filters.genre)?.name;
  const countryName = countries.find((c) => c.id === filters.country)?.name;
  const decadeName = decades.find((d) => d.id === +filters.decade)?.name;

  return (
    <>
      <div className={styles.chips}>
        {filters.artist && (
          <FilterChip
            label="Artist"
            onRemove={() => handleRemove("artist")}
            value={filters.artist}
          />
        )}
        {filters.genre && (
          <FilterChip
            label="Genre"
            onRemove={() => handleRemove("genre")}
            value={genreName || "Unknown Genre"}
          />
        )}
        {filters.decade && (
          <FilterChip
            label="Decade"
            onRemove={() => handleRemove("decade")}
            value={decadeName || "Unknown Decade"}
          />
        )}{" "}
        {filters.country && (
          <FilterChip
            label="Country"
            onRemove={() => handleRemove("country")}
            value={countryName || "Unknown Country"}
          />
        )}
      </div>
    </>
  );
};

FiltersChips.propTypes = {
  filters: PropTypes.object.isRequired,
  onFiltersChange: PropTypes.func.isRequired,
};

export default FiltersChips;
