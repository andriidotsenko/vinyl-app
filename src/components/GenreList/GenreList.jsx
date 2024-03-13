import GenreCard from "../GenreCard/GenreCard.jsx";
import styles from "./GenreList.module.css";
import { useGenreList } from "../../hooks/useGenreList.js";

const GenreList = () => {
  const genreList = useGenreList();

  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>You may like</h2>
        <h3 className={styles.more}>See more</h3>
      </div>
      <div className={styles.list} id="genreItems">
        {genreList.length === 0 ? (
          <p className={styles.not_found}>Dont find Genres</p>
        ) : (
          genreList.map((genre) => <GenreCard key={genre.id} {...genre} />)
        )}
      </div>
    </>
  );
};

export default GenreList;
