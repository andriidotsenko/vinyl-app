import { useState, useEffect } from "react";

export const useNote = () => {
  const initialNoteList = JSON.parse(localStorage.getItem("noteList")) || {};
  const [noteList, setNoteList] = useState(initialNoteList);

  const addNote = (id, note) => {
    setNoteList((prevNoteList) => ({
      ...prevNoteList,
      [id]: note,
    }));
  };

  const removeNote = (id) => {
    setNoteList((prevNoteList) => {
      const newNoteList = { ...prevNoteList };
      delete newNoteList[id];
      return newNoteList;
    });
  };

  useEffect(() => {
    localStorage.setItem("noteList", JSON.stringify(noteList));
  }, [noteList]);

  return { noteList, addNote, removeNote };
};
