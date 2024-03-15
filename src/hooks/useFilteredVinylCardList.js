import { useVinylCardList } from "./useVinylCardList.js";
import { useDecadeList } from "./useDecadeList.js";

export const useFilteredVinylCardList = (filters) => {
  const vinylList = useVinylCardList();
  const decades = useDecadeList();

  const filterVinyl = (vinyl) => {
    if (filters.country && vinyl.country !== filters.country) {
      return false;
    }

    // if (filters.genre && !filters.genre !== vinyl.genreId) {
    //   return false;
    // }

    // if (filters.decade?.length) {
    //   if (
    //     filters.decade.some((from) => {
    //       const decade = decades.find((decade) => decade.from === from);

    //       return !decade || vinyl.year < decade.from || vinyl.year > decade.to;
    //     })
    //   ) {
    //     return false;
    //   }
    // }

    // if (
    //   filters.artist &&
    //   !vinyl.artist.toLowerCase().includes(filters.artist.toLowerCase())
    // ) {
    //   return false;
    // }

    // if (
    //   filters.title &&
    //   !vinyl.title.toLowerCase().includes(filters.title.toLowerCase())
    // ) {
    //   return false;
    // }

    return true;
  };

  return vinylList.filter(filterVinyl);
};
