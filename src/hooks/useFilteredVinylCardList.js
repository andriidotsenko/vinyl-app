import { useCountriesList } from "./useCountriesList.js";
import { useVinylCardList } from "./useVinylCardList.js";
import { useDecadeList } from "./useDecadeList.js";

export const useFilteredVinylCardList = (filters) => {
  const vinylList = useVinylCardList();
  const countries = useCountriesList();
  const decades = useDecadeList();

  const decade = decades.find((d) => d.id === +filters.decade);
  const yearFrom = decade?.yearFrom;
  const yearTo = decade?.yearTo;

  const filterVinyl = (vinyl) =>
    (!filters.country ||
      vinyl.country ===
        countries.find((c) => c.id === filters.country)?.name) &&
    (!filters.genre || +filters.genre === vinyl.genreId) &&
    (!+filters.decade || (vinyl.year > yearFrom && vinyl.year <= yearTo));

  const filteredVinylList = vinylList.filter(filterVinyl);
  const sortedVinylList = filteredVinylList.sort((a, b) => a.year - b.year);

  return sortedVinylList;
};
