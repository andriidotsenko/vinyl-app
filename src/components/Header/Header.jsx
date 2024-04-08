import PropTypes from "prop-types";
import styles from "./Header.module.css";
import HeaderCountingButton from "../HeaderCountingButton/HeaderCountingButton.jsx";
import BackButton from "../BackButton/BackButton.jsx";
import InactiveFavoriteIcon from "../Icon/InactiveFavoriteIcon.jsx";
import CollectionIcon from "../Icon/CollectionIcon.jsx";

import { Link } from "react-router-dom";

function Header({ favoriteCount, collectionCount }) {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.actions}>
            <BackButton buttonText={"Back"} />
            <Link className={styles.link} to={"/"}>
              Home
            </Link>
          </div>
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
