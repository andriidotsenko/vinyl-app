import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./AutosuggestInput.module.css";
import clsx from "clsx";

const AutosuggestInput = ({ value, onChange, placeholder, error, options }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleInputChange = (newValue) => {
    onChange(newValue);
  };

  const handleInputFocus = () => {
    setIsDropdownOpen(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const handleOptionSelect = (option) => {
    onChange(option);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={value}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          className={clsx(styles.inputField, { [styles.error]: error })}
        />
        {isDropdownOpen && (
          <div className={styles.dropdownContainer}>
            {options &&
              options.map((option) => (
                <button
                  type="button"
                  key={option}
                  className={styles.dropdownOption}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </button>
              ))}
          </div>
        )}
      </div>
      {error && <div style={{ color: "red", fontSize: "11px" }}>{error}</div>}
    </>
  );
};

AutosuggestInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default AutosuggestInput;
