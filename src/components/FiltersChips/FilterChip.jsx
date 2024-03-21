import PropTypes from "prop-types";
import DeleteIcon from "../Icon/DeleteIcon";
import styles from "./FiltersChip.module.css";

const FilterChip = ({ label, value, onRemove }) => {
  return (
    <button className={styles.chip} onClick={onRemove}>
      <span>
        {label}: {value}
      </span>
      <DeleteIcon />
    </button>
  );
};

FilterChip.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default FilterChip;
