import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { useCollectionNotes } from "./hooks/useCollectionNotes.js";
import { NotificationsContext } from "./NotificationsContext.jsx";

export const CollectionNotesContext = createContext();

export function CollectionNotesProvider({ children }) {
  const { addNotification } = useContext(NotificationsContext);
  const { collectionList, toggleCollection, changeNote, noteList } =
    useCollectionNotes(addNotification);

  return (
    <CollectionNotesContext.Provider
      value={{
        collectionList,
        toggleCollection,
        noteList,
        changeNote,
      }}
    >
      {children}
    </CollectionNotesContext.Provider>
  );
}

CollectionNotesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useCollectionNotesContext() {
  return useContext(CollectionNotesContext);
}
