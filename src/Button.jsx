import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ isPressed, onPress, handleClick }) => {
  const [pressed, setPressed] = useState(isPressed);

  const handleButtonClick = () => {
    const newPressedState = !pressed;
    setPressed(newPressedState);
    if (handleClick) {
      handleClick(newPressedState);
    }
    if (onPress) {
      onPress(newPressedState);
    }
  };

  return (
    <button
      className={`${styles.button} ${
        pressed ? styles.pressed : styles.unpressed
      }`}
      onClick={handleButtonClick}
    >
      {pressed ? "Нажата" : "Не нажата"}
    </button>
  );
};

Button.propTypes = {
  isPressed: PropTypes.bool.isRequired,
  onPress: PropTypes.func,
  handleClick: PropTypes.func,
};

export default Button;
