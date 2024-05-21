const RESET_NOTE = "";

export const collectionNoteReducer = (state, action) => {
  switch (action.type) {
    case "ADDED_TO_COLLECTION":
      return {
        ...state,
        collectionList: [...state.collectionList, action.payload.vinyl.id],
        noteList: {
          ...state.noteList,
          [action.payload.vinyl.id]: RESET_NOTE,
        },
      };

    case "REMOVED_FROM_COLLECTION":
      const { [action.payload.vinyl.id]: removedNote, ...remainingNotes } =
        state.noteList;
      return {
        ...state,
        collectionList: state.collectionList.filter(
          (id) => id !== action.payload.vinyl.id
        ),
        noteList: remainingNotes,
      };
    case "CHANGED_NOTE":
      return {
        ...state,
        noteList: {
          ...state.noteList,
          [action.payload.id]: action.payload.newNote,
        },
      };
    default:
      return state;
  }
};
