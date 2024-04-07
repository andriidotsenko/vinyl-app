import GenreCard from "../GenreCard/GenreCard.jsx";
import styles from "./GenreList.module.css";
// import { useGenreList } from "../../hooks/useGenreList.js";
import { Link } from "react-router-dom";
import { useGenreListAsync } from "../../hooks/useGenreListAsync.js";
import { Loader } from "../Loader/Loader.jsx";

const GenreList = () => {
  // const genreList = useGenreList();
  const { data, isLoading } = useGenreListAsync();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>You may like</h2>
        <h3 className={styles.more}>See more</h3>
      </div>
      <div className={styles.list} id="genreItems">
        {data.length === 0 ? (
          <p className={styles.not_found}>Dont find Genres</p>
        ) : (
          data.map((genre) => (
            <div key={genre.id}>
              <Link key={genre.id} to={"/results?genres=" + genre.id}>
                <GenreCard key={genre.id} genre={genre} />
              </Link>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default GenreList;
