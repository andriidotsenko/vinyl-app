import GenreCard from "../GenreCard/GenreCard.jsx";
import styles from "./GenreList.module.css";
import { useGenreList } from "../../hooks/useGenreList.js";
import { Link } from "react-router-dom";

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
          <p className={styles.not_found}>Don't find Genres</p>
        ) : (
          genreList.map((genre) => (
            <div key={genre.id}>
              <Link key={genre.id} to={"/results?genre=" + genre.id}>
                <GenreCard {...genre} />
              </Link>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default GenreList;
