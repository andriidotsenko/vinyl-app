import { createContext } from "react";
import PropTypes from "prop-types";
import { useFavorites } from "../../../hooks/useFavorites.js";
import { useNotificationsContext } from "../../../hooks/context/useNotificationsContext.js";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const { addNotification } = useNotificationsContext();

  const { favoritesList, handleFavoritesToggle } =
    useFavorites(addNotification);

  return (
    <FavoritesContext.Provider value={{ favoritesList, handleFavoritesToggle }}>
      {children}
    </FavoritesContext.Provider>
  );
}

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
