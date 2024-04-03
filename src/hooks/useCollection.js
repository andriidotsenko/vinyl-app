import { useState, useEffect } from "react";

export const useCollection = () => {
  const [collectionList, setCollectionList] = useState(
    localStorage.getItem("collectionList")
      ? JSON.parse(localStorage.getItem("collectionList"))
      : []
  );

  function handleCollectionToggle(cardId) {
    setCollectionList((prevCollectionList) =>
      prevCollectionList.includes(cardId)
        ? prevCollectionList.filter((id) => id !== cardId)
        : [...prevCollectionList, cardId]
    );
  }
  useEffect(() => {
    localStorage.setItem("collectionList", JSON.stringify(collectionList));
  });
  return { collectionList, handleCollectionToggle };
};
