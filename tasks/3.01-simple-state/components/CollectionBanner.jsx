import styles from "./CollectionBanner.module.css";

function CollectionBanner({ collectionSize }) {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>My Collection</h2>
      <p className={styles.description}>{collectionSize} records</p>
    </div>
  );
}

export default CollectionBanner;
