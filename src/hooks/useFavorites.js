import { useState, useEffect } from "react";

export const useFavorites = () => {
  const [favoritesList, setFavoritesList] = useState(
    localStorage.getItem("favoritesList")
      ? JSON.parse(localStorage.getItem("favoritesList"))
      : []
  );

  function handleFavoritesToggle(cardId) {
    setFavoritesList((prevFavoritesList) =>
      prevFavoritesList.includes(cardId)
        ? prevFavoritesList.filter((id) => id !== cardId)
        : [...prevFavoritesList, cardId]
    );
  }
  useEffect(() => {
    localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
  }, [favoritesList]);

  return { favoritesList, handleFavoritesToggle };
};
