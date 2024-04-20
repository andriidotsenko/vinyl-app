import PropTypes from "prop-types";
import styles from "./PlayButton.module.css";
import PlayIcon from "../Icon/PlayIcon.jsx";
import PauseButton from "../Icon/PauseIcon.jsx";
import { motion } from "framer-motion";

const PlayButton = ({ isFill, onClick }) => {
  return (
    <motion.button
      initial={{
        scale: 1,
      }}
      animate={{
        scale: isFill ? [1.2, 1] : [1.1, 1],
      }}
      type="button"
      className={styles.play}
      onClick={onClick}
    >
      {isFill ? <PauseButton /> : <PlayIcon />}
    </motion.button>
  );
};

PlayButton.propTypes = {
  isFill: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PlayButton;
