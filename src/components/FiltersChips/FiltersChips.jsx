import PropTypes from "prop-types";
import { useCountryListAsync } from "../../hooks/useCountryListAsync";
import { useDecadeList } from "../../hooks/useDecadeList";
import styles from "./FiltersChips.module.css";
import FilterChip from "./FilterChip.jsx";

import { useGenreListAsync } from "../../hooks/useGenreListAsync.js";

export const FiltersChips = ({ filters, onFiltersChange }) => {
  const decadeList = useDecadeList();

  const { data: genreList } = useGenreListAsync();
  const { data: countryList } = useCountryListAsync();

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
            const genre = genreList?.find((item) => item.id === genreId);

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
      {filters.decade && (
        <FilterChip
          label={
            decadeList.find((item) => item.from === filters.decade)?.title + "f"
          }
          onRemove={() => handleRemove("decade")}
        />
      )}

      {filters.country &&
        countryList?.find((item) => item.id === filters.country) && (
          <FilterChip
            label={
              countryList.find((item) => item.id === filters.country)?.title
            }
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
    decade: PropTypes.string,
    country: PropTypes.string,
  }),
  onFiltersChange: PropTypes.func,
};
