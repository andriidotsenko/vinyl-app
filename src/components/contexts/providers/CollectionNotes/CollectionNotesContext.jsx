import { createContext, useMemo } from "react";
import PropTypes from "prop-types";
import { useCollectionNotes } from "../../../../hooks/useCollectionNotes.js";
import { useNotificationsContext } from "../../../../hooks/context/useNotificationsContext.js";

export const CollectionNotesContext = createContext();
export const CollectionContext = createContext();

export function CollectionNotesProvider({ children }) {
  const { addNotification } = useNotificationsContext();
  const { collectionList, toggleCollection, changeNote, noteList } =
    useCollectionNotes(addNotification);

  const memoizedValue = useMemo(
    () => ({ noteList, changeNote }),
    [noteList, changeNote]
  );

  return (
    <CollectionContext.Provider value={{ collectionList, toggleCollection }}>
      <CollectionNotesContext.Provider value={memoizedValue}>
        {children}
      </CollectionNotesContext.Provider>
    </CollectionContext.Provider>
  );
}

CollectionNotesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
