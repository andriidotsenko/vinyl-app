import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { useFavorites } from "./hooks/useFavorites.js";
import { NotificationsContext } from "./NotificationsContext.jsx";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const { addNotification } = useContext(NotificationsContext);

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

export function useFavoritesContext() {
  return useContext(FavoritesContext);
}
