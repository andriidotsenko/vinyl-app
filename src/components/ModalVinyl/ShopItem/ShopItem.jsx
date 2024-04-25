import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ShopItem.module.css";

function ShopItem({ imageSrc, linkUrl, name, price }) {
  return (
    <div className={styles.shop}>
      <div className={styles.shopImg}>
        <img src={imageSrc} alt={name} />
      </div>
      <div className={styles.shopLink}>
        <Link to={linkUrl}>
          {name} {price} uah
        </Link>
      </div>
    </div>
  );
}

ShopItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ShopItem;
