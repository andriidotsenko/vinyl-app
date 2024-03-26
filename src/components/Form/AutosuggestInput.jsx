import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./AutosuggestInput.module.css";
import clsx from "clsx";

const AutosuggestInput = ({
  options,
  value,
  onChange,
  placeholder,
  error,
  filterFunction,
}) => {
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
    onChange(option.artist);
    setIsDropdownOpen(false);
  };

  const filteredOptions = filterFunction(options, value);

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
            {filteredOptions.map((option) => (
              <button
                type="button"
                key={option.id}
                className={styles.dropdownOption}
                onClick={() => handleOptionSelect(option)}
              >
                {option.artist}
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
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
  filterFunction: PropTypes.func.isRequired,
};

export default AutosuggestInput;
