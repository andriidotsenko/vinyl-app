import { useVinylCardList } from "./useVinylCardList.js";

export const useVinylById = (vinylId) => {
  const vinylList = useVinylCardList();

  return vinylList.find((vinyl) => vinyl.id === vinylId);
};
