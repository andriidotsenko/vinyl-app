import PropTypes from "prop-types";
import styles from "./FavoriteButton.module.css";

import { motion } from "framer-motion";
import FavoriteIcon from "../Icon/FavoriteIcon.jsx";

function FavoriteButton({ isFill, onClick }) {
  return (
    <motion.button
      className={styles.fav}
      onClick={onClick}
      initial={{
        fill: isFill ? "red" : "black",
      }}
      animate={{
        scale: isFill ? [1.2, 1, 0.6, 1, 0.8, 1] : [0.8, 1, 0.6, 1, 1.2, 1],
        borderRadius: isFill ? ["8px", "10px"] : ["8px", "9px"],
        border: "1px solid black",
      }}
    >
      <FavoriteIcon isActive={isFill} />
    </motion.button>
  );
}

FavoriteButton.propTypes = {
  isFill: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FavoriteButton;
