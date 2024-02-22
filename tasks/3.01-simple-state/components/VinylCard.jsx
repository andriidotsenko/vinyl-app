import Button from "./Button.jsx";

import styles from "./VinylCard.module.css";

function VinylCard({ vinyl }) {
  const inCollection = false;

  function handleCollectionButtonClick() {
    // TODO: add to/remove from collection
  }

  return (
    <article className={styles.root}>
      <div className={styles.cover}>
        <img className={styles.coverImage} src={vinyl.image} alt="cover" />
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>
          {vinyl.title} - {vinyl.artist}
        </h4>

        <div className={styles.releaseRow}>
          <div className={styles.release}>
            <span>{vinyl.year}</span> <span>{vinyl.country}</span>
          </div>
        </div>
      </div>
      <div className={styles.action}>
        <Button
          fullWidth
          active={inCollection}
          onClick={handleCollectionButtonClick}
          label={inCollection ? "In collection" : "Add to collection"}
        />
      </div>
    </article>
  );
}

export default VinylCard;
