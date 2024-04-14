import clsx from "clsx";
import PropTypes from "prop-types";
import styles from "./Button.module.css";
import { motion } from "framer-motion";

export const Button = ({
  variant = "primary",
  isFullWidth = false,
  children,
  icon,
  className,
  ...props
}) => {
  return (
    <motion.button
      initial={{
        scale: 1,
        backgroundColor:
          variant === "primary" ? "var(--dark-blue)" : "var(--blue)",
      }}
      whileHover={{
        backgroundColor:
          variant === "primary"
            ? "var(--dark-blue-hover)"
            : "var(--blue-hover)",
      }}
      whileTap={{
        scale: 0.9,
        backgroundColor:
          variant === "primary" ? "var(--dark-blue-tap)" : "var(--blue-tap)",
      }}
      className={clsx(styles.root, className, {
        [styles.isFullWidth]: isFullWidth,
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
      })}
      {...props}
    >
      <span className={styles.label}>{children}</span>
      <span className={styles.icon}>{icon}</span>
    </motion.button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  isFullWidth: PropTypes.bool,
  children: PropTypes.node,
  icon: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
