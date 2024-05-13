import { useCollectionNotesContext } from "../hooks/context/useCollectonNotesContext.js";

export const useNoteById = (vinylId) => {
  const { noteList, changeNote } = useCollectionNotesContext();

  const note = noteList[vinylId];

  const changeNoteById = (newNote) => {
    changeNote(vinylId, newNote);
  };

  return { note, changeNoteById };
};
