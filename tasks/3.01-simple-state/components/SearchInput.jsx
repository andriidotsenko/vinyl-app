import styles from "./SearchInput.module.css";

function SearchInput(props) {
  // Implement SearchInput component using available styles
  return <input className={styles.root} {...props} />;
}

export default SearchInput;
