import clsx from "clsx";

import styles from "./IconButton.module.css";

function IconButton({ icon, white, dark, small, ...props }, ref) {
  return (
    <button
      ref={ref}
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
