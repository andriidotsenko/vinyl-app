import { useFilteredVinylListAsync } from "./useFilteredVinylListAsync.js";

export const useVinylById = (vinylId) => {
  const vinylList = useFilteredVinylListAsync();

  return vinylList.find((vinyl) => vinyl.id === vinylId);
};
