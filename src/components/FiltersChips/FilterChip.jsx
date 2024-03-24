import PropTypes from "prop-types";
import DeleteIcon from "../Icon/DeleteIcon";
import styles from "./FiltersChip.module.css";

const FilterChip = ({ label, onRemove }) => {
  return (
    <button className={styles.chip} onClick={onRemove}>
      <span>{label}</span>
      <DeleteIcon />
    </button>
  );
};

FilterChip.propTypes = {
  label: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default FilterChip;
