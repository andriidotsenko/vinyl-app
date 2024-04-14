import { useState, useEffect } from "react";

export const useFavorites = (addNotification) => {
  const [favoritesList, setFavoritesList] = useState(
    localStorage.getItem("favoritesList")
      ? JSON.parse(localStorage.getItem("favoritesList"))
      : []
  );

  function handleFavoritesToggle(vinyl) {
    const inCollection = favoritesList.includes(vinyl.id);
    setFavoritesList((prevFavoritesList) =>
      prevFavoritesList.includes(vinyl.id)
        ? prevFavoritesList.filter((id) => id !== vinyl.id)
        : [...prevFavoritesList, vinyl.id]
    );

    addNotification(
      inCollection
        ? `"${vinyl.title}" removed from favorites`
        : `"${vinyl.title}" added to favorites`
    );
  }
  useEffect(() => {
    localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
  }, [favoritesList]);

  return { favoritesList, handleFavoritesToggle };
};
