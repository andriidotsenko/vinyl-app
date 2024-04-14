import GenreCard from "../GenreCard/GenreCard.jsx";
import styles from "./GenreList.module.css";
import { Link } from "react-router-dom";
import { useGenreListAsync } from "../../hooks/useGenreListAsync.js";
import { Loader } from "../Loader/Loader.jsx";
import { motion } from "framer-motion";

const GenreList = () => {
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
            <motion.div
              className={styles.block}
              initial={{
                opacity: 0,
                scale: 0.1,
                rotate: -5,
              }}
              viewport={{ once: true }}
              whileInView={{
                opacity: 0.9,
                scale: 1,
                rotate: 0,
              }}
              whileHover={{
                cursor: "pointer",
                opacity: 1,
                scale: 0.96,
              }}
              key={genre.id}
            >
              <Link to={"/results?genres=" + genre.id}>
                <GenreCard genre={genre} />
              </Link>
            </motion.div>
          ))
        )}
      </div>
    </>
  );
};

export default GenreList;
