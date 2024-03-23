import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./MultiSelect.module.css";
import CheckIcon from "../Icon/CheckIcon.jsx";
import UncheckIcon from "../Icon/UncheckIcon.jsx";

const CustomCheckbox = ({ value, checked, onChange }) => {
  return (
    <>
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        className={styles.checkboxInput}
      />

      {checked ? (
        <CheckIcon className={styles.customCheckbox} />
      ) : (
        <UncheckIcon className={styles.customCheckbox} />
      )}
    </>
  );
};

CustomCheckbox.propTypes = {
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

const SingleSelect = ({ options, value, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(value || "");

  const handleOptionChange = (optionId) => {
    const newOption = selectedOption === optionId ? "" : optionId;
    setSelectedOption(newOption);
    onChange(newOption);
  };

  return (
    <div className={clsx(styles.root)}>
      <div className={clsx(styles.field)}>
        {selectedOption
          ? options.find((option) => option.id === selectedOption)?.name || ""
          : ""}
      </div>
      <input type="hidden" name="selectedOption" value={selectedOption} />
      <div className={styles.dropdown}>
        {options.map((option) => (
          <label key={option.id} className={styles.checkbox}>
            <CustomCheckbox
              value={option.id.toString()}
              checked={selectedOption === option.id}
              onChange={() => handleOptionChange(option.id)}
            />
            <span>{option.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

SingleSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default SingleSelect;
