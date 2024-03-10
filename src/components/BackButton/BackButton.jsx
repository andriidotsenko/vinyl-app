import PropTypes from "prop-types";
import BackIcon from "../Icon/BackIcon";
import styles from "./BackButton.module.css";

function BackButton({ buttonText }) {
  return (
    <a href="/" className={styles.back} id="headerBack">
      <BackIcon />
      {buttonText}
    </a>
  );
}

BackButton.propTypes = {
  buttonText: PropTypes.string,
};

BackButton.defaultProps = {
  buttonText: "Back",
};

export default BackButton;
