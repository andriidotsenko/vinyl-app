import PropTypes from "prop-types";
import styles from "./GenreCard.module.css";
import { GENRE_COLORS_BY_GENRE_ID } from "../../constants/genres";

const GenreCard = ({ genres }) => {
  const getRandomOffset = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const getRandomRotation = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const images = GENRE_COLORS_BY_GENRE_ID[genres.id].images;

  const minOffset = 41;
  const maxOffset = 100;
  const minRotation = -30;
  const maxRotation = 45;

  const getBrightness = (color) => {
    const r = parseInt(color.substring(1, 3), 16);
    const g = parseInt(color.substring(3, 5), 16);
    const b = parseInt(color.substring(5, 7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000;
  };

  const textColor =
    getBrightness(GENRE_COLORS_BY_GENRE_ID[genres.id].color) > 128
      ? "var(--dark-green)"
      : "var(--white)";

  return (
    <div
      className={styles.item}
      style={{
        backgroundColor: GENRE_COLORS_BY_GENRE_ID[genres.id].color,
        color: textColor,
      }}
    >
      <div className={styles.title}>{genres.title}</div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${genres.title}_Image${index + 1}`}
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
  genres: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default GenreCard;
