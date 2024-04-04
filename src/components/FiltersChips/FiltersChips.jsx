import PropTypes from "prop-types";
import { useCountryListAsync } from "../../hooks/useCountryListAsync";
import { useDecadeList } from "../../hooks/useDecadeList";
import styles from "./FiltersChips.module.css";
import FilterChip from "./FilterChip.jsx";

import { useGenreListAsync } from "../../hooks/useGenreListAsync.js";

export const FiltersChips = ({ filters, onFiltersChange }) => {
  const decadeList = useDecadeList();

  const { data: genreList, isLoading: isGenreListIsLoading } =
    useGenreListAsync();
  const { data: countryList, isLoading: isCountryListIsLoading } =
    useCountryListAsync();

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
          {filters.decades.map((id) => {
            const decade = decadeList.find((item) => item.id === id);

            if (!decade) {
              return null;
            }

            return (
              <FilterChip
                key={decade.id}
                label={decade.title}
                onRemove={() => handleArrayRemove("decades", id)}
              />
            );
          })}
        </>
      )}

      {filters.country && (
        <FilterChip
          label={countryList.find((item) => item.id === filters.country).title}
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
