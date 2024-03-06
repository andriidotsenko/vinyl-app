import PropTypes from "prop-types";
import GenreItem from "../GenreItem/GenreItem";
import styles from "./GenreList.module.css";

const GenreList = ({ genres }) => {
  return (
    <div className={styles.list} id="genreItems">
      {genres.length === 0 ? (
        <p className={styles.not_found}>Not found</p>
      ) : (
        genres.map((genre) => <GenreItem key={genre.id} genre={genre} />)
      )}
    </div>
  );
};

GenreList.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default GenreList;
