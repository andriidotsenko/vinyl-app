import PropTypes from "prop-types";
import VinylCard from "../VinylCard/VinylCard";
import styles from "./VinylCardList.module.css";

function VinylCardList({
  cardList,
  collectionList,
  favoriteList,
  onClickInCollection,
  onClickInFavorites,
}) {
  return (
    <div className={styles.cardList}>
      {cardList.map((card) => (
        <VinylCard
          key={card.id}
          card={card}
          inCollection={collectionList.includes(card.id)}
          inFavorites={favoriteList.includes(card.id)}
          onClickInCollection={onClickInCollection}
          onClickInFavorites={onClickInFavorites}
        />
      ))}
    </div>
  );
}

VinylCardList.propTypes = {
  cardList: PropTypes.arrayOf(PropTypes.object).isRequired,
  collectionList: PropTypes.arrayOf(PropTypes.number).isRequired,
  favoriteList: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClickInCollection: PropTypes.func.isRequired,
  onClickInFavorites: PropTypes.func.isRequired,
};

export default VinylCardList;
