import PropTypes from "prop-types";

import styles from "./Select.module.css";
import { CheckboxIcon } from "../Icon/CheckboxIcon.jsx";
import { CheckboxEmpty } from "../Icon/CheckboxEmpty.jsx";

export function Checkbox({ checked, ...props }) {
  return (
    <label className={styles.checkbox}>
      <input
        className={styles.hiddenInput}
        type="checkbox"
        checked={checked}
        {...props}
      />

      <span className={styles.checkboxIcon}>
        {checked ? <CheckboxIcon /> : <CheckboxEmpty />}
      </span>
    </label>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
};
