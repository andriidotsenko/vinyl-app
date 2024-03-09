import BackIcon from "../icons/BackIcon";
import styles from "./BackButton.module.css";

function BackButton() {
  return (
    <a href="/" className={styles.back} id="headerBack">
      <BackIcon />
      Go back
    </a>
  );
}

export default BackButton;
