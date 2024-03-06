import PropTypes from "prop-types";
import styles from "./Counter.module.css";

function Counter({ count, icon }) {
  return (
    <a href="/" className={styles.icon}>
      {icon}
      {count > 0 && <span className={styles.counter}>{count}</span>}
    </a>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  icon: PropTypes.node.isRequired,
};

export default Counter;
