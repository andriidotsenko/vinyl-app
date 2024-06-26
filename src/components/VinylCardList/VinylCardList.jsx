import styles from "./VinylCardList.module.css";

import PropTypes from "prop-types";
import VinylCard from "../VinylCard/VinylCard.jsx";

function VinylCardList({
  cardList,
  collectionList,
  favoritesList,
  onClickInCollection,
  onClickInFavorites,
  isHasTitle = true,
  onVinylImageClick,
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
        {cardList.map((card) => {
          return (
            <VinylCard
              key={card.id}
              card={{ ...card }}
              inCollection={collectionList.includes(card.id)}
              inFavorites={favoritesList.includes(card.id)}
              onClickInCollection={onClickInCollection}
              onClickInFavorites={onClickInFavorites}
              onImageClick={onVinylImageClick}
            />
          );
        })}
      </div>
    </>
  );
}

VinylCardList.propTypes = {
  cardList: PropTypes.arrayOf(PropTypes.object).isRequired,
  collectionList: PropTypes.array.isRequired,
  favoritesList: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClickInCollection: PropTypes.func.isRequired,
  onClickInFavorites: PropTypes.func.isRequired,
  isHasTitle: PropTypes.bool.isRequired,
  onVinylImageClick: PropTypes.func.isRequired,
};

export default VinylCardList;
