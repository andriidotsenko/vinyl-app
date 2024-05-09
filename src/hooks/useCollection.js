import { useEffect, useReducer } from "react";

const collectionNoteReducer = (state, action) => {
  let newNoteList;
  switch (action.type) {
    case "ADDED_TO_COLLECTION":
      return {
        ...state,
        collectionList: [...state.collectionList, action.payload.vinyl.id],
      };
    case "REMOVED_FROM_COLLECTION":
      return {
        ...state,
        collectionList: state.collectionList.filter(
          (id) => id !== action.payload.vinyl.id
        ),
      };
    case "ADDED_NOTE":
      return {
        ...state,
        noteList: {
          ...state.noteList,
          [action.payload.id]: action.payload.note,
        },
      };
    case "REMOVED_NOTE":
      newNoteList = { ...state.noteList };
      delete newNoteList[action.payload.id];
      return {
        ...state,
        noteList: newNoteList,
      };
    default:
      return state;
  }
};

const resetNote = "";
export const useCollectionNotes = (addNotification) => {
  const initialState = {
    collectionList: localStorage.getItem("collectionList")
      ? JSON.parse(localStorage.getItem("collectionList"))
      : [],
    noteList: JSON.parse(localStorage.getItem("noteList")) || {},
  };
  const [state, dispatch] = useReducer(collectionNoteReducer, initialState);

  const handleAddedToCollection = (vinyl, id) => {
    dispatch({ type: "ADDED_NOTE", payload: { id, note: resetNote } });
    dispatch({ type: "ADDED_TO_COLLECTION", payload: { vinyl } });
    addNotification(`"${vinyl.title}" added to collection`);
  };

  const handleRemovedFromCollection = (vinyl, id) => {
    dispatch({ type: "REMOVED_FROM_COLLECTION", payload: { vinyl } });
    dispatch({ type: "REMOVED_NOTE", payload: { id } });
    addNotification(`"${vinyl.title}" removed from collection`);
  };

  const addNote = (id, note) => {
    dispatch({ type: "ADDED_NOTE", payload: { id, note } });
  };

  const removeNote = (id) => {
    dispatch({ type: "REMOVED_NOTE", payload: { id } });
  };

  useEffect(() => {
    localStorage.setItem(
      "collectionList",
      JSON.stringify(state.collectionList)
    );
    localStorage.setItem("noteList", JSON.stringify(state.noteList));
  }, [state.collectionList, state.noteList]);

  return {
    collectionList: state.collectionList,
    noteList: state.noteList,
    handleAddedToCollection,
    handleRemovedFromCollection,
    addNote,
    removeNote,
  };
};
