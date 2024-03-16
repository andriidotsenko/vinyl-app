import PropTypes from "prop-types";
import BackIcon from "../Icon/BackIcon.jsx";
import styles from "./BackButton.module.css";
import { Link, useNavigate } from "react-router-dom";

function BackButton({ buttonText }) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Link onClick={handleGoBack} className={styles.back} id="headerBack">
      <BackIcon />
      <span className={styles.text}>{buttonText}</span>
    </Link>
  );
}

BackButton.propTypes = {
  buttonText: PropTypes.string,
};

BackButton.defaultProps = {
  buttonText: "Back",
};

export default BackButton;
