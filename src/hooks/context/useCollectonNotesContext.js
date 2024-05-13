import { useContext } from "react";
import { CollectionNotesContext } from "../../components/contexts/providers/CollectionNotes/CollectionNotesContext";

export function useCollectionNotesContext() {
  return useContext(CollectionNotesContext);
}
