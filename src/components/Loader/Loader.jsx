import styles from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.root}>
      <div className={styles.loader}></div>
    </div>
  );
};

Loader.propTypes = {};
