import PropTypes from "prop-types";
import styles from "./VinylCard.module.css";
import CollectionButton from "../CollectionButton/CollectionButton.jsx";
import FavoriteButton from "../FavoriteButton/FavoriteButton.jsx";
import { Link } from "react-router-dom";

function VinylCard({
  card,
  inCollection,
  inFavorites,
  onClickInCollection,
  onClickInFavorites,
}) {
  const { id, title, artist, year, country, genre, image } = card;

  // Вычисление округленного десятилетия
  const roundedDecade = Math.floor(year / 10) * 10;

  return (
    <div key={id} className={styles.block}>
      <div className={styles.image}>
        <picture>
          <source srcSet={image.normal} media="(max-width: 768.98px)" />
          <source srcSet={image.double} media="(min-width: 768.99px)" />
          <img src={image} title={title} alt={title} />
        </picture>
        <FavoriteButton
          inFavorites={inFavorites}
          isFill={inFavorites}
          onClick={() => {
            onClickInFavorites(card.id);
          }}
        />
      </div>
      <Link to={`/vinyls/${id}`}>
        <h2 className={styles.name}>{title}</h2>
      </Link>
      <p className={styles.group}>{artist}</p>
      <div className={styles.info}>
        <p>
          Year:
          <Link to={`/results?decade=${roundedDecade}`}>
            <span>{year}</span>
          </Link>
        </p>
        <p>
          Genre:
          <Link to={`/results?genres=${genre.id}`}>
            <span>{genre.title}</span>
          </Link>
        </p>
        <p>
          Country:
          <Link to={`/results?country=${country.id}`}>
            <span>{country.title}</span>
          </Link>
        </p>
      </div>
      <CollectionButton
        className={styles.root}
        isActive={inCollection}
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
    country: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
    genre: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  inCollection: PropTypes.bool.isRequired,
  inFavorites: PropTypes.bool.isRequired,
  onClickInCollection: PropTypes.func.isRequired,
  onClickInFavorites: PropTypes.func.isRequired,
};

export default VinylCard;
