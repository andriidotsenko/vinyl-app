import { useState, useEffect } from "react";

export const useCollection = (addNotification) => {
  const [collectionList, setCollectionList] = useState(
    localStorage.getItem("collectionList")
      ? JSON.parse(localStorage.getItem("collectionList"))
      : []
  );

  function handleCollectionToggle(vinyl) {
    const inCollection = collectionList.includes(vinyl.id);
    setCollectionList((prevCollectionList) =>
      prevCollectionList.includes(vinyl.id)
        ? prevCollectionList.filter((id) => id !== vinyl.id)
        : [...prevCollectionList, vinyl.id]
    );

    addNotification(
      inCollection
        ? `"${vinyl}" removed from collection`
        : `"${vinyl.title}" added to collection`
    );
  }
  useEffect(() => {
    localStorage.setItem("collectionList", JSON.stringify(collectionList));
  }, [collectionList]);
  return { collectionList, handleCollectionToggle };
};
