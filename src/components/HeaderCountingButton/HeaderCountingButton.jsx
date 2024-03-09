import PropTypes from "prop-types";
import styles from "./HeaderCountingButton.module.css";

function HeaderCountingButton({ count, icon }) {
  const formatNumber = (number) =>
    number >= 1e6
      ? (number / 1e6).toFixed(1) + "M"
      : number >= 1e3
      ? (number / 1e3).toFixed(1) + "K"
      : number.toString();

  return (
    <a href="/" className={styles.icon}>
      {icon}
      {count > 0 && (
        <span className={styles.counter}>{formatNumber(count)}</span>
      )}
    </a>
  );
}

HeaderCountingButton.propTypes = {
  count: PropTypes.number.isRequired,
  icon: PropTypes.node.isRequired,
};

export default HeaderCountingButton;
