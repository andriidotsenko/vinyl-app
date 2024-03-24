import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./MultiSelect.module.css";
import CheckIcon from "../Icon/CheckIcon.jsx";
import UncheckIcon from "../Icon/UncheckIcon.jsx";
import ArrowUpIcon from "../Icon/ArrowUpIcon.jsx";
import ArrowDownIcon from "../Icon/ArrowDownIcon.jsx";

const CustomCheckbox = ({ value, checked, onChange }) => {
  return (
    <>
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
        className={styles.checkboxInput}
      />
      {checked ? <CheckIcon /> : <UncheckIcon />}
    </>
  );
};

CustomCheckbox.propTypes = {
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

const MultiSelect = ({ options, value, onChange, placeholder }) => {
  const [selectedOptions, setSelectedOptions] = useState(value || []);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleOption = (optionId) => {
    const updatedOptions = selectedOptions.includes(optionId)
      ? selectedOptions.filter((id) => id !== optionId)
      : [...selectedOptions, optionId];
    setSelectedOptions(updatedOptions);
    onChange(updatedOptions);
  };

  const getOptionNames = () => {
    return selectedOptions.map(
      (optionId) => options.find((option) => option.id === optionId)?.name || ""
    );
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClearAll = () => {
    const newSelectedOptions =
      selectedOptions.length === options.length
        ? []
        : options.map((option) => option.id);
    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions);
  };

  return (
    <div className={clsx(styles.root)}>
      <button
        type="button"
        onClick={handleDropdownToggle}
        className={clsx(styles.field, {
          [styles.closed]: !isDropdownOpen,
        })}
      >
        <span>{getOptionNames().join(", ") || placeholder}</span>
        {isDropdownOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
      </button>
      <input
        type="hidden"
        name="selectedOptions"
        value={selectedOptions.join(",")}
      />
      {isDropdownOpen && (
        <div className={styles.dropdown}>
          <button
            type="button"
            onClick={handleClearAll}
            className={styles.clearButton}
          >
            {selectedOptions.length >= options.length ? (
              <CheckIcon />
            ) : (
              <UncheckIcon />
            )}
            <span>All</span>
          </button>
          {options.map((option) => (
            <label key={option.id} className={styles.checkbox}>
              <CustomCheckbox
                value={option.id.toString()}
                checked={selectedOptions.includes(option.id)}
                onChange={() => toggleOption(option.id)}
              />
              <span>{option.name}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

MultiSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.arrayOf(PropTypes.number),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default MultiSelect;
