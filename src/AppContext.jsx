// import { createContext, useContext } from "react";
// import PropTypes from "prop-types";
// import { useNotifications } from "./hooks/useNotifications.js";
// import { useCollectionNotes } from "./hooks/useCollectionNotes.js";
// import { useFavorites } from "./hooks/useFavorites.js";

// export const AppContext = createContext();

// export function AppProvider({ children }) {
//   const [addNotification, notifications] = useNotifications();

//   const { collectionList, toggleCollection, changeNote, noteList } =
//     useCollectionNotes(addNotification);

//   const { favoritesList, handleFavoritesToggle } =
//     useFavorites(addNotification);

//   return (
//     <AppContext.Provider
//       value={{
//         collectionList,
//         toggleCollection,
//         favoritesList,
//         handleFavoritesToggle,
//         noteList,
//         changeNote,
//         notifications,
//         addNotification,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// }

// AppProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export function useAppContext() {
//   return useContext(AppContext);
// }
