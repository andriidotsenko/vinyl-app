import PropTypes from "prop-types";
import VinylCard from "../VinylCard/VinylCard.jsx";
import styles from "./VinylCardList.module.css";
import { Link } from "react-router-dom";

function VinylCardList({
  cardList,
  collectionList,
  favoritesList,
  onClickInCollection,
  onClickInFavorites,
  isHasTitle,
}) {
  return (
    <>
      {isHasTitle && (
        <div className={styles.wrapper}>
          <h2 className={styles.title}>New in stock</h2>
          <h3 className={styles.more}>See more</h3>
        </div>
      )}
      <div className={styles.cardList}>
        {cardList.map((card) => (
          <Link key={card.id} to={`/vinyls/${card.id}`}>
            <VinylCard
              key={card.id}
              card={card}
              inCollection={collectionList.includes(card.id)}
              inFavorites={favoritesList.includes(card.id)}
              onClickInCollection={onClickInCollection}
              onClickInFavorites={onClickInFavorites}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

VinylCardList.propTypes = {
  cardList: PropTypes.arrayOf(PropTypes.object).isRequired,
  collectionList: PropTypes.arrayOf(PropTypes.number).isRequired,
  favoritesList: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClickInCollection: PropTypes.func.isRequired,
  onClickInFavorites: PropTypes.func.isRequired,
  isHasTitle: PropTypes.bool.isRequired,
};

VinylCardList.defaultProps = {
  isHasTitle: true,
};

export default VinylCardList;
