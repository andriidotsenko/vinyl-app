import PropTypes from "prop-types";
import styles from "./Header.module.css";
import HeaderCountingButton from "../HeaderCountingButton/HeaderCountingButton.jsx";
import BackButton from "../BackButton/BackButton.jsx";
import InactiveFavoriteIcon from "../Icon/InactiveFavoriteIcon.jsx";
import CollectionIcon from "../Icon/CollectionIcon.jsx";

function Header({ favoriteCount, collectionCount }) {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrap}>
          <BackButton buttonText={"Back"} />
          <div className={styles.actions}>
            <HeaderCountingButton
              count={favoriteCount}
              icon={<InactiveFavoriteIcon />}
            />
            <HeaderCountingButton
              count={collectionCount}
              icon={<CollectionIcon />}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  favoriteCount: PropTypes.number.isRequired,
  collectionCount: PropTypes.number.isRequired,
};

export default Header;
