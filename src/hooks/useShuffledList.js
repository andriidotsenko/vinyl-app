import { useState } from "react";

export function useShuffledList(list) {
  const [shuffledList] = useState(() => {
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    return shuffleArray(list);
  });

  return shuffledList;
}
