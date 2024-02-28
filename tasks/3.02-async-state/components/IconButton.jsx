import clsx from "clsx";

import styles from "./IconButton.module.css";

function IconButton({ icon, white, dark, small, ...props }) {
  return (
    <button
      className={clsx(styles.root, {
        [styles.isWhite]: white,
        [styles.isDark]: dark,
        [styles.isSmall]: small,
      })}
      {...props}
    >
      {icon}
    </button>
  );
}

export default IconButton;
