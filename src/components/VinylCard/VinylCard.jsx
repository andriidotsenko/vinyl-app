import PropTypes from "prop-types";
import styles from "./VinylCard.module.css";
import CollectionButton from "../CollectionButton/CollectionButton.jsx";

import { useGenreList } from "../../hooks/useGenreList.js";
import FavoriteButton from "../FavoriteButton/FavoriteButton.jsx";

function VinylCard({
  card,
  inCollection,
  inFavorites,
  onClickInCollection,
  onClickInFavorites,
}) {
  const { id, title, artist, year, country, genreId, image } = card;

  const { getGenreNameById } = useGenreList();
  const genreName = getGenreNameById(genreId);

  const onCollectionToggle = () => {
    onClickInCollection(card.id);
  };

  const onFavoritesToggle = () => {
    onClickInFavorites(card.id);
  };

  return (
    <div key={id} className={styles.block}>
      <div className={styles.image}>
        <picture>
          <source srcSet={image.normal + " 1x, " + image.double + " 2x"} />
          <img src={image.normal} title={title} alt={title} />
        </picture>
        <FavoriteButton
          inFavorites={inFavorites}
          isFill={inFavorites}
          onFavoritesToggle={onFavoritesToggle}
        />
      </div>
      <h2 className={styles.name}>{title}</h2>
      <p className={styles.group}>{artist}</p>
      <div className={styles.info}>
        <p>
          Year: <span>{year}</span>
        </p>
        <p>
          Genre: <span>{genreName}</span>
        </p>
        <p>
          Country: <span>{country}</span>
        </p>
      </div>
      <CollectionButton
        inCollection={inCollection}
        onClick={onCollectionToggle}
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
