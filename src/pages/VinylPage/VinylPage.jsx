import VinylCard from "../../components/VinylCard/VinylCard";
import { useVinylById } from "../../hooks/useVinylById";
import styles from "./VinylPage.module.css";

import { useOutletContext, useParams } from "react-router-dom";

export function VinylPage() {
  const {
    collectionList,
    favoritesList,
    handleCollectionToggle,
    handleFavoritesToggle,
  } = useOutletContext();

  const { vinylId } = useParams();

  const card = useVinylById(Number(vinylId));

  return (
    <div className={styles.main}>
      <VinylCard
        card={card}
        inCollection={collectionList.includes(card.id)}
        inFavorites={favoritesList.includes(card.id)}
        onClickInCollection={() => handleCollectionToggle(card.id)}
        onClickInFavorites={() => handleFavoritesToggle(card.id)}
      />
    </div>
  );
}
