import PropTypes from "prop-types";
import styles from "./FavoriteButton.module.css";
import ActiveFavoriteIcon from "../icons/ActiveFavoriteIcon/ActiveFavoriteIcon.jsx";
import InactiveFavoriteIcon from "../icons/InactiveFavoriteIcon/InactiveFavoriteIcon.jsx";

function FavoriteButton({ isFill, onFavoritesToggle }) {
  return (
    <button className={styles.fav} onClick={onFavoritesToggle}>
      {isFill ? <ActiveFavoriteIcon /> : <InactiveFavoriteIcon />}
    </button>
  );
}

FavoriteButton.propTypes = {
  isFill: PropTypes.bool.isRequired,
  onFavoritesToggle: PropTypes.func.isRequired,
};

export default FavoriteButton;
