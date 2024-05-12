import { useEffect, useReducer } from "react";
import { collectionNoteReducer } from "../reducers/collectionNoteReducer";

export const useCollectionNotes = (addNotification) => {
  const initialState = {
    collectionList: localStorage.getItem("collectionList")
      ? JSON.parse(localStorage.getItem("collectionList"))
      : [],
    noteList: JSON.parse(localStorage.getItem("noteList")) || {},
  };

  const [state, dispatch] = useReducer(collectionNoteReducer, initialState);
  const toggleCollection = (vinyl) => {
    const isInCollection = state.collectionList.includes(vinyl.id);
    const actionType = isInCollection
      ? "REMOVED_FROM_COLLECTION"
      : "ADDED_TO_COLLECTION";
    const notificationMessage = isInCollection
      ? `"${vinyl.title}" removed from collection`
      : `"${vinyl.title}" added to collection`;
    dispatch({ type: actionType, payload: { vinyl } });
    addNotification(notificationMessage);
  };

  const changeNote = (id, newNote) => {
    dispatch({ type: "CHANGED_NOTE", payload: { id, newNote } });
  };

  useEffect(() => {
    localStorage.setItem("noteList", JSON.stringify(state.noteList));
  }, [state.noteList]);

  useEffect(() => {
    localStorage.setItem(
      "collectionList",
      JSON.stringify(state.collectionList)
    );
  }, [state.collectionList]);

  return {
    collectionList: state.collectionList,
    noteList: state.noteList,
    toggleCollection,
    changeNote,
  };
};
