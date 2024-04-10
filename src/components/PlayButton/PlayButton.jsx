import PropTypes from "prop-types";
import styles from "./PlayButton.module.css";
import PlayIcon from "../Icon/PlayIcon.jsx";
import PauseButton from "../Icon/PauseIcon.jsx";

const PlayButton = ({ isFill, onClick }) => {
  return (
    <button className={styles.здфн} onClick={onClick}>
      {isFill ? <PauseButton /> : <PlayIcon />}
    </button>
  );
};

PlayButton.propTypes = {
  isFill: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PlayButton;
