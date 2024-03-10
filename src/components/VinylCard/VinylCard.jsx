import PropTypes from "prop-types";
import styles from "./VinylCard.module.css";
import CollectionButton from "../CollectionButton/CollectionButton.jsx";

import FavoriteButton from "../FavoriteButton/FavoriteButton.jsx";

function VinylCard({
  card,
  inCollection,
  inFavorites,
  onClickInCollection,
  onClickInFavorites,
}) {
  const { id, title, artist, year, country, genreId, image } = card;

  return (
    <div key={id} className={styles.block}>
      <div className={styles.image}>
        <picture>
          <source srcSet={image.normal} media="(max-width: 768.98px)" />
          <source srcSet={image.double} media="(min-width: 768.99px)" />
          <img src={image.normal} title={title} alt={title} />
        </picture>
        <FavoriteButton
          inFavorites={inFavorites}
          isFill={inFavorites}
          onClick={() => {
            onClickInFavorites(card.id);
          }}
        />
      </div>
      <h2 className={styles.name}>{title}</h2>
      <p className={styles.group}>{artist}</p>
      <div className={styles.info}>
        <p>
          Year: <span>{year}</span>
        </p>
        <p>
          Genre: <span>{genreId}</span>
        </p>
        <p>
          Country: <span>{country}</span>
        </p>
      </div>
      <CollectionButton
        className={styles.root}
        inCollection={inCollection}
        onClick={() => {
          onClickInCollection(card.id);
        }}
      />
    </div>
  );
}

VinylCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    genreId: PropTypes.number.isRequired,
    image: PropTypes.shape({
      normal: PropTypes.string.isRequired,
      double: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  inCollection: PropTypes.bool.isRequired,
  inFavorites: PropTypes.bool.isRequired,
  onClickInCollection: PropTypes.func.isRequired,
  onClickInFavorites: PropTypes.func.isRequired,
};

export default VinylCard;
