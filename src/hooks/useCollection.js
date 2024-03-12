import { useState } from "react";

export const useCollection = () => {
  const [collectionList, setCollectionList] = useState([]);

  function handleCollectionToggle(cardId) {
    setCollectionList((prevCollectionList) =>
      prevCollectionList.includes(cardId)
        ? prevCollectionList.filter((id) => id !== cardId)
        : [...prevCollectionList, cardId]
    );
  }

  return { collectionList, handleCollectionToggle };
};
