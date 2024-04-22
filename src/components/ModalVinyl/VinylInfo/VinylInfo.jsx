import PropTypes from "prop-types";
import styles from "./VinylInfo.module.css";

function VinylInfo({ year, releaseStyles, country, getCountryName }) {
  return (
    <div className={styles.info}>
      <div className={styles.wrapper}>
        <div className={styles.text}>Year released :</div>
        <div className={styles.value}>{year}</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.text}>Style :</div>
        <div className={styles.value}>
          {releaseStyles?.map((style, index) => (
            <div className={styles.styleRelease} key={style}>
              {style}
              {index !== releaseStyles.length - 1 && (
                <span className={styles.text}>, </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.text}>Country :</div>
        <div className={styles.value}>{getCountryName(country)}</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.text}>Format: </div>
        <div className={styles.value}>2 x Vinyl, LP, Album</div>
      </div>
    </div>
  );
}

VinylInfo.propTypes = {
  year: PropTypes.number.isRequired,
  releaseStyles: PropTypes.arrayOf(PropTypes.string),
  country: PropTypes.string.isRequired,
  getCountryName: PropTypes.func.isRequired,
};

export default VinylInfo;
