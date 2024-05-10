import { createContext, useContext } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

export function AppProvider({
  children,
  collectionList,
  favoritesList,
  toggleCollection,
  handleFavoritesToggle,
  noteList,
  changeNote,
}) {
  return (
    <AppContext.Provider
      value={{
        collectionList,
        favoritesList,
        toggleCollection,
        handleFavoritesToggle,
        noteList,
        changeNote,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
  collectionList: PropTypes.array.isRequired,
  favoritesList: PropTypes.array.isRequired,
  toggleCollection: PropTypes.func.isRequired,
  handleFavoritesToggle: PropTypes.func.isRequired,
  noteList: PropTypes.array.isRequired,
  changeNote: PropTypes.func.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext() {
  return useContext(AppContext);
}
