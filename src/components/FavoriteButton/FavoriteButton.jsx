import PropTypes from "prop-types";
import styles from "./FavoriteButton.module.css";
import { motion } from "framer-motion";
import FavoriteIcon from "../Icon/FavoriteIcon.jsx";

const FavoriteButton = (isFill, onClick, onPointerEnter, onPointerLeave) => {
  return (
    <motion.button
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      className={styles.fav}
      onClick={onClick}
      initial={{
        fill: isFill ? "red" : "black",
        scale: 1,
      }}
      whileTap={{
        scale: 1,
      }}
      whileHover={{
        scale: 1.1,
      }}
    >
      <FavoriteIcon isActive={isFill} />
    </motion.button>
  );
};

FavoriteButton.propTypes = {
  isFill: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onPointerEnter: PropTypes.func,
  onPointerLeave: PropTypes.func,
};

export default FavoriteButton;
