import PropTypes from "prop-types";
import Card from "./card/Card";
import styles from "./cardList.module.css";

function CardList({
  cardList,
  collectionList,
  favoriteList,
  handleClickInCollection,
  handleClickInFavorites,
}) {
  return (
    <div className={styles.cardList}>
      {cardList.map((card) => (
        <Card
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

CardList.propTypes = {
  cardList: PropTypes.arrayOf(PropTypes.object).isRequired,
  collectionList: PropTypes.arrayOf(PropTypes.number).isRequired,
  favoriteList: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleClickInCollection: PropTypes.func.isRequired,
  handleClickInFavorites: PropTypes.func.isRequired,
};

export default CardList;
