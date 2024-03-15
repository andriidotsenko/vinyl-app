import { useCountriesList } from "./useCountriesList.js";
import { useVinylCardList } from "./useVinylCardList.js";
// import { useDecadeList } from "./useDecadeList.js";

export const useFilteredVinylCardList = (filters) => {
  const vinylList = useVinylCardList();

  const countries = useCountriesList();

  const filterVinyl = (vinyl) => {
    if (filters.country) {
      const country = countries.find((c) => c.id === filters.country);
      if (!country) {
        return false;
      }
      if (vinyl.country !== country.name) {
        return false;
      }
    }

    return true;
  };

  return vinylList.filter(filterVinyl);
};
