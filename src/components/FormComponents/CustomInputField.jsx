import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./CustomInputField.module.css";

const CustomInputField = ({ options, onChange, placeholder }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputChange = (value) => {
    setInputValue(value);
    const searchText = value.toLowerCase();
    const filteredArtists = options.filter((option) =>
      option.artist.toLowerCase().includes(searchText)
    );
    const uniqueArtists = Array.from(
      new Set(filteredArtists.map((opt) => opt.artist))
    ).map((artist) => {
      return filteredArtists.find((opt) => opt.artist === artist);
    });
    setFilteredOptions(uniqueArtists);
  };

  const handleOptionSelect = (value) => {
    setInputValue(value.artist);
    onChange(value);
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

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder={placeholder}
        className={styles.inputField}
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
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default CustomInputField;
