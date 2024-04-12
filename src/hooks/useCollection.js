import { useState, useEffect } from "react";

export const useCollection = (addNotification) => {
  const [collectionList, setCollectionList] = useState(
    localStorage.getItem("collectionList")
      ? JSON.parse(localStorage.getItem("collectionList"))
      : []
  );

  function handleCollectionToggle(cardId) {
    const inCollection = collectionList.includes(cardId);
    setCollectionList((prevCollectionList) =>
      prevCollectionList.includes(cardId)
        ? prevCollectionList.filter((id) => id !== cardId)
        : [...prevCollectionList, cardId]
    );

    addNotification(
      inCollection
        ? `"${cardId}" removed from collection`
        : `"${cardId.title}" added to collection`
    );
  }
  useEffect(() => {
    localStorage.setItem("collectionList", JSON.stringify(collectionList));
  }, [collectionList]);
  return { collectionList, handleCollectionToggle };
};
