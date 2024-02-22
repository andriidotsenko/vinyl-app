import clsx from "clsx";

import styles from "./Button.module.css";

function Button({ active, fullWidth, label, ...props }) {
  return (
    <button
      className={clsx(styles.root, {
        [styles.isFullWidth]: fullWidth,
        [styles.isActive]: active,
      })}
      {...props}
    >
      <span className={styles.label}>{label}</span>
    </button>
  );
}

export default Button;
