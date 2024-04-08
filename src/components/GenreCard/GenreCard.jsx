import PropTypes from "prop-types";
import styles from "./GenreCard.module.css";
import { GENRE_COLORS_BY_GENRE_ID } from "../../constants/genres";

const GenreCard = ({ genre }) => {
  const getRandomOffset = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const getRandomRotation = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const images = GENRE_COLORS_BY_GENRE_ID[genre.id].images;

  const minOffset = 41;
  const maxOffset = 100;
  const minRotation = -30;
  const maxRotation = 45;

  const textColor =
    GENRE_COLORS_BY_GENRE_ID[genre.id].textTheme === "dark"
      ? "var(--dark-green)"
      : "var(--white)";

  return (
    <div
      className={styles.item}
      style={{
        background: GENRE_COLORS_BY_GENRE_ID[genre.id].linearGradientValue,
        color: textColor,
      }}
    >
      <div className={styles.title}>{genre.title}</div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${genre.title}_Image${index + 1}`}
          style={{
            position: "absolute",
            width: "70px",
            height: "70px",
            borderRadius: 4,
            top: `${getRandomOffset(minOffset, maxOffset)}px`,
            left: `${getRandomOffset(minOffset, maxOffset)}px`,
            transform: `rotate(${getRandomRotation(
              minRotation,
              maxRotation
            )}deg)`,
          }}
        />
      ))}
    </div>
  );
};

GenreCard.propTypes = {
  genre: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default GenreCard;
