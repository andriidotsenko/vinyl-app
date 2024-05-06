import { useState, useEffect } from "react";
import { useNote } from "../hooks/useNotes";

export const useCollection = (addNotification) => {
  const [collectionList, setCollectionList] = useState(
    localStorage.getItem("collectionList")
      ? JSON.parse(localStorage.getItem("collectionList"))
      : []
  );
  const { removeNote, addNote } = useNote();

  function handleCollectionToggle(vinyl) {
    const inCollection = collectionList.includes(vinyl.id);
    if (inCollection) {
      removeNote(vinyl.id);
    } else addNote(vinyl.id, "");
    setCollectionList((prevCollectionList) =>
      prevCollectionList.includes(vinyl.id)
        ? prevCollectionList.filter((id) => id !== vinyl.id)
        : [...prevCollectionList, vinyl.id]
    );

    addNotification(
      inCollection
        ? `"${vinyl.title}" removed from collection`
        : `"${vinyl.title}" added to collection`
    );
  }

  useEffect(() => {
    localStorage.setItem("collectionList", JSON.stringify(collectionList));
  }, [collectionList]);

  return { collectionList, handleCollectionToggle };
};
