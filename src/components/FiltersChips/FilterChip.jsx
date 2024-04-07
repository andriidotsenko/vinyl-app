import PropTypes from "prop-types";
import DeleteIcon from "../Icon/DeleteIcon";
import styles from "./FiltersChip.module.css";

const FilterChip = ({ label, onRemove, ...props }) => {
  return (
    <button className={styles.chip} {...props} onClick={onRemove}>
      <div className={styles.chipContent}>
        <span>{label}</span>
        <DeleteIcon {...props} />
      </div>
    </button>
  );
};

FilterChip.propTypes = {
  label: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default FilterChip;
