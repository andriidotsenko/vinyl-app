import PropTypes from "prop-types";
import { useCountriesList } from "../../hooks/useCountriesList";
import { useDecadeList } from "../../hooks/useDecadeList";
import { useGenreList } from "../../hooks/useGenreList";
import styles from "./FiltersChips.module.css";
import FilterChip from "./FilterChip.jsx";

export const FiltersChips = ({ filters, onFiltersChange }) => {
  const genreList = useGenreList();
  const decadeList = useDecadeList();
  const countryList = useCountriesList();

  const country = countryList.find((item) => item.id === filters.country);

  function handleRemove(name) {
    onFiltersChange({ ...filters, [name]: "" });
  }

  function handleArrayRemove(name, value) {
    onFiltersChange({
      ...filters,
      [name]: filters[name].filter((item) => item !== value),
    });
  }

  return (
    <div className={styles.root}>
      {filters.artist && (
        <FilterChip
          label={filters.artist}
          onRemove={() => handleRemove("artist")}
        />
      )}
      {Boolean(filters.genres?.length) && (
        <>
          {filters.genres.map((genreId) => {
            const genre = genreList.find((item) => item.id === genreId);

            if (!genre) {
              return null;
            }

            return (
              <FilterChip
                key={genre.id}
                label={genre.title}
                onRemove={() => handleArrayRemove("genres", genreId)}
              />
            );
          })}
        </>
      )}

      {Boolean(filters.decades?.length) && (
        <>
          {filters.decades.map((from) => {
            const decade = decadeList.find((item) => item.from === from);

            if (!decade) {
              return null;
            }

            return (
              <FilterChip
                key={decade.from}
                label={decade.title}
                onRemove={() => handleArrayRemove("decades", from)}
              />
            );
          })}
        </>
      )}

      {country && (
        <FilterChip
          label={country.title}
          onRemove={() => handleRemove("country")}
        />
      )}
    </div>
  );
};

FiltersChips.propTypes = {
  filters: PropTypes.shape({
    artist: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.number),
    decades: PropTypes.arrayOf(PropTypes.number),
    country: PropTypes.string,
  }),
  onFiltersChange: PropTypes.func,
};
