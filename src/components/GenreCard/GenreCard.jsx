import PropTypes from "prop-types";
import styles from "./GenreCard.module.css";
import { GENRE_COLORS_BY_GENRE_ID } from "../../constants/genres";
import { motion } from "framer-motion";

const GenreCard = ({ genre }) => {
  const getRandomOffset = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const getRandomRotation = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const images = GENRE_COLORS_BY_GENRE_ID[genre.id].images;

  const minOffset = 31;
  const maxOffset = 80;
  const minRotation = -50;
  const maxRotation = 50;

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
        <motion.img
          animate={{
            // transition: { duration: 0.33 },
            rotate: `${getRandomRotation(minRotation, maxRotation)}deg`,
            top: `${getRandomOffset(minOffset, maxOffset)}px`,
            left: `${getRandomOffset(minOffset, maxOffset)}px`,
          }}
          key={index}
          src={image}
          alt={`${genre.title}_Image${index + 1}`}
          style={{
            position: "absolute",
            width: "70px",
            height: "70px",
            borderRadius: 4,
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
