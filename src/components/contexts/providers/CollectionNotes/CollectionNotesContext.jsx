import { createContext, useMemo } from "react";
import PropTypes from "prop-types";
import { useCollectionNotes } from "../../../../hooks/useCollectionNotes";
import { useNotificationsContext } from "../../../../hooks/context/useNotificationsContext";

export const CollectionNotesContext = createContext();
export const CollectionContext = createContext();

export function CollectionNotesProvider({ children }) {
  const { addNotification } = useNotificationsContext();
  const { collectionList, toggleCollection, changeNote, noteList } =
    useCollectionNotes(addNotification);

  const memoizedNoteValue = useMemo(
    () => ({ noteList, changeNote }),
    [noteList, changeNote]
  );

  const memoizedCollectionValue = useMemo(
    () => ({ collectionList, toggleCollection }),
    [collectionList, toggleCollection]
  );

  return (
    <CollectionContext.Provider value={memoizedCollectionValue}>
      <CollectionNotesContext.Provider value={memoizedNoteValue}>
        {children}
      </CollectionNotesContext.Provider>
    </CollectionContext.Provider>
  );
}

CollectionNotesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
