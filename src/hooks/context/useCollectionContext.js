import { useContext } from "react";
import { CollectionContext } from "../../components/contexts/providers/CollectionNotes/CollectionNotesContext";

export function useCollectionContext() {
  return useContext(CollectionContext);
}
