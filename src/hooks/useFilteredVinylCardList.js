// import { useCountriesList } from "./useCountriesList.js";
import { useVinylCardList } from "./useVinylCardList.js";
import { useDecadeList } from "./useDecadeList.js";
import { useCountriesList } from "./useCountriesList.js";

export const useFilteredVinylCardList = (filters) => {
  const vinylList = useVinylCardList();
  const decades = useDecadeList();
  const countryList = useCountriesList();
  const country = countryList.find((item) => item.id === +filters.country);
  const filterVinyl = (vinyl) => {
    if (filters.country && vinyl.country !== country.name) {
      return false;
    }

    if (filters.genres?.length && !filters.genres.includes(+vinyl.genreId)) {
      return false;
    }

    if (filters.decades?.length) {
      if (
        filters.decades.every((id) => {
          const decade = decades.find((decade) => decade.id === id);

          return (
            !decade ||
            vinyl.year <= decade.yearFrom ||
            vinyl.year >= decade.yearTo
          );
        })
      ) {
        return false;
      }
    }

    if (
      filters.artist &&
      !vinyl.artist.toLowerCase().includes(filters.artist.toLowerCase())
    ) {
      return false;
    }

    if (
      filters.title &&
      !vinyl.title.toLowerCase().includes(filters.title.toLowerCase())
    ) {
      return false;
    }

    return true;
  };
  const filteredVinylList = vinylList.filter(filterVinyl);
  const sortedVinylList = filteredVinylList.sort((a, b) => a.year - b.year);

  return sortedVinylList;
};
