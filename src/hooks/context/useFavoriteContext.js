import { useContext } from "react";
import { FavoritesContext } from "../../components/contexts/providers/FavoritesContext";

export function useFavoritesContext() {
  return useContext(FavoritesContext);
}
