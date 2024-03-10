import PropTypes from "prop-types";
import styles from "./FavoriteButton.module.css";
import ActiveFavoriteIcon from "../Icon/ActiveFavoriteIcon.jsx";
import InactiveFavoriteIcon from "../Icon/InactiveFavoriteIcon.jsx";

function FavoriteButton({ isFill, onClick }) {
  return (
    <button className={styles.fav} onClick={onClick}>
      {isFill ? <ActiveFavoriteIcon /> : <InactiveFavoriteIcon />}
    </button>
  );
}

FavoriteButton.propTypes = {
  isFill: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FavoriteButton;
