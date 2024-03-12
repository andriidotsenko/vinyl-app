import { useState } from "react";

export const useFavorites = () => {
  const [favoritesList, setFavoritesList] = useState([]);

  function handleFavoritesToggle(cardId) {
    setFavoritesList((prevFavoritesList) =>
      prevFavoritesList.includes(cardId)
        ? prevFavoritesList.filter((id) => id !== cardId)
        : [...prevFavoritesList, cardId]
    );
  }

  return { favoritesList, handleFavoritesToggle };
};
