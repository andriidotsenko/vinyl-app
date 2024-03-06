import PropTypes from "prop-types";
import styles from "./GenreList.module.css";

const getRandomOffset = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomRotation = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const renderGenre = (genre) => {
  const minOffset = 40;
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
    getBrightness(genre.backgroundColor) > 128
      ? "var(--dark-green)"
      : "var(--white)";

  return (
    <div
      key={genre.id}
      value={genre.id}
      className={styles.item}
      style={{
        backgroundColor: genre.backgroundColor,
        color: textColor,
      }}
    >
      <div className={styles.title}>{genre.name}</div>
      {genre.images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${genre.name}_Image${index + 1}`}
          style={{
            position: "absolute",
            width: "70px",
            height: "70px",
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

function GenreList({ genres }) {
  return (
    <div className={styles.list} id="genreItems">
      {genres.length === 0 ? (
        <p className={styles.not_found}>Not found</p>
      ) : (
        genres.map(renderGenre)
      )}
    </div>
  );
}

GenreList.propTypes = {
  genres: PropTypes.array.isRequired,
};

export default GenreList;
