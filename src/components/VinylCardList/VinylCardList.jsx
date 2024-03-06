import PropTypes from "prop-types";
import VinylCard from "../VinylCard/VinylCard.jsx";
import styles from "./VinylCardList.module.css";

function VinylCardList({
  cardList,
  collectionList,
  favoriteList,
  handleClickInCollection,
  handleClickInFavorites,
}) {
  return (
    <div className={styles.cardList}>
      {cardList.map((card) => (
        <VinylCard
          key={card.id}
          card={card}
          inCollection={collectionList.includes(card.id)}
          inFavorites={favoriteList.includes(card.id)}
          handleClickInCollection={() => handleClickInCollection(card)}
          handleClickInFavorites={() => handleClickInFavorites(card)}
        />
      ))}
    </div>
  );
}

VinylCardList.propTypes = {
  cardList: PropTypes.arrayOf(PropTypes.object).isRequired,
  collectionList: PropTypes.arrayOf(PropTypes.number).isRequired,
  favoriteList: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleClickInCollection: PropTypes.func.isRequired,
  handleClickInFavorites: PropTypes.func.isRequired,
};

export default VinylCardList;
