import { createContext, useMemo } from "react";
import PropTypes from "prop-types";
import { useFavorites } from "../../../hooks/useFavorites.js";
import { useNotificationsContext } from "../../../hooks/context/useNotificationsContext.js";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const { addNotification } = useNotificationsContext();

  const { favoritesList, handleFavoritesToggle } =
    useFavorites(addNotification);

  const memoizedValue = useMemo(
    () => ({ favoritesList, handleFavoritesToggle }),
    [favoritesList, handleFavoritesToggle]
  );

  return (
    <FavoritesContext.Provider value={memoizedValue}>
      {children}
    </FavoritesContext.Provider>
  );
}

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
