import PropTypes from "prop-types";
import styles from "./VinylCard.module.css";
import CollectionButton from "../CollectionButton/CollectionButton.jsx";
import FavoriteButton from "../FavoriteButton/FavoriteButton.jsx";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GENRE_COLORS_BY_GENRE_ID } from "../../constants/genres";
import clsx from "clsx";
import { useReliseById } from "../../hooks/useReliseById.js";

function VinylCard({
  card,
  inCollection,
  inFavorites,
  onClickInCollection,
  onClickInFavorites,

  setOpenedVinylId,
}) {
  const { id, title, artist, year, country, genre, image } = card;

  const roundedDecade = Math.floor(year / 10) * 10;
  const { data } = useReliseById(id);
  const { cover_image } = data || {};
  return (
    <motion.div
      key={id}
      className={styles.block}
      viewport={{ once: true }}
      initial={{
        opacity: 1,
        scale: 0.9,
        rotate: 0.5,
      }}
      whileInView={{
        scale: 1,
        rotate: 0,
        opacity: 0.9,
      }}
      whileHover={{
        cursor: "pointer",
        opacity: 1,
        zIndex: 100,
        border: "1px solid var(--grey-border)",
      }}
    >
      <button onClick={() => setOpenedVinylId(id)} className={styles.image}>
        <picture>
          <img
            src={cover_image ? cover_image : image}
            title={title}
            alt={title}
          />
        </picture>
        <FavoriteButton
          inFavorites={inFavorites}
          isFill={inFavorites}
          onClick={() => {
            onClickInFavorites(card.id);
          }}
        />
      </button>
      <Link to={`/vinyls/${id}`}>
        <h2 className={styles.name}>{title}</h2>
      </Link>
      <Link className={styles.group} to={`/results?artist=${artist}`}>
        {artist}
      </Link>
      <div className={styles.info}>
        <p>
          Year:
          <Link className={styles.link} to={`/results?decade=${roundedDecade}`}>
            {year}
          </Link>
        </p>
        <p>
          Genre:
          <Link to={`/results?genres=${genre.id}`}>
            <div
              className={clsx(styles.link, styles.genreLink)}
              style={{
                background:
                  GENRE_COLORS_BY_GENRE_ID[genre.id].linearGradientValue,
              }}
            >
              <div className={styles.genreText}>{genre.title}</div>
            </div>
          </Link>
        </p>
        <p>
          Country:
          <Link className={styles.link} to={`/results?country=${country.id}`}>
            {country.title}
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
    </motion.div>
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
  openedVinylId: PropTypes.number, // Added PropTypes for openedVinylId
  setOpenedVinylId: PropTypes.func, // Added PropTypes for setOpenedVinylId
};

export default VinylCard;
