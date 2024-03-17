import PropTypes from "prop-types";
import styles from "./GenreCard.module.css";
import { Link } from "react-router-dom";

const GenreCard = ({ name, backgroundColor, images }) => {
  const getRandomOffset = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const getRandomRotation = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

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
    getBrightness(backgroundColor) > 128 ? "var(--dark-green)" : "var(--white)";

  return (
    <div
      className={styles.item}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <div className={styles.title}>{name}</div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${name}_Image${index + 1}`}
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
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GenreCard;
