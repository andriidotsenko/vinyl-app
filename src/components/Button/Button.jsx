import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({
  isPressed,
  onClick,
  className,
  pressedValue,
  unpressedValue,
  ...rest
}) => {
  const buttonText = isPressed ? pressedValue : unpressedValue;

  return (
    <button
      className={`${styles.button} ${
        isPressed ? styles.pressed : styles.unpressed
      } ${className}`}
      onClick={onClick}
      {...rest}
    >
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  isPressed: PropTypes.bool,
  onClick: PropTypes.func,
  pressedValue: PropTypes.node,
  unpressedValue: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
