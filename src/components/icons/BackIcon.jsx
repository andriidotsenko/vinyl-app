import styles from "./BackIcon.module.css";

function BackIcon() {
  return (
    <>
      <svg
        className={styles.root}
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        viewBox="0 0 24 24"
        width="20"
        // fill="white"
      >
        <path
          d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
          stroke="none"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}

export default BackIcon;
