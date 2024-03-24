import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./CustomInputField.module.css";
import clsx from "clsx";

const CustomInputField = ({ options, value, onChange, placeholder, error }) => {
  const [inputValue, setInputValue] = useState(value || "");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputChange = (value) => {
    setInputValue(value);
    onChange(value);
    const searchText = value.toLowerCase().trim();
    const filteredArtists = options.filter((option) =>
      option.artist.toLowerCase().includes(searchText)
    );
    setFilteredOptions(filteredArtists);
  };

  const handleOptionSelect = (option) => {
    setInputValue(option.artist);
    onChange(option.artist);
    setFilteredOptions([]);
    setIsDropdownOpen(false);
  };

  const handleInputFocus = () => {
    setIsDropdownOpen(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  useState(() => {
    setInputValue(value || "");
  }, [value]);

  return (
    <>
      {error && <div style={{ color: "red", fontSize: "11px" }}>{error}</div>}
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={inputValue}
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
                onChange={() => handleOptionSelect(value)}
              >
                {option.artist}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

CustomInputField.propTypes = {
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
  error: PropTypes.object,
};

export default CustomInputField;
