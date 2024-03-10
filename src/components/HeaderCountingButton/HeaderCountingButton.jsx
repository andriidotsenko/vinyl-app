import PropTypes from "prop-types";
import styles from "./HeaderCountingButton.module.css";

function HeaderCountingButton({ count, icon }) {
  const formatNumber = (number) =>
    number >= 1e6
      ? (number / 1e6).toFixed(0) + "M"
      : number >= 1e3
      ? (number / 1e3).toFixed(0) + "K"
      : number.toFixed(0);
  const formattedCount = count < 1 ? 0 : count;

  return (
    <a href="/" className={styles.icon}>
      {icon}
      {formattedCount > 0 && (
        <span className={styles.counter}>{formatNumber(formattedCount)}</span>
      )}
    </a>
  );
}

HeaderCountingButton.propTypes = {
  count: PropTypes.number.isRequired,
  icon: PropTypes.node.isRequired,
};

export default HeaderCountingButton;
