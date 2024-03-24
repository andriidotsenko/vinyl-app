import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./MultiSelect.module.css";
import CheckIcon from "../Icon/CheckIcon.jsx";
import UncheckIcon from "../Icon/UncheckIcon.jsx";
import ArrowDownIcon from "../Icon/ArrowDownIcon.jsx";
import ArrowUpIcon from "../Icon/ArrowUpIcon.jsx";

const CustomCheckbox = ({ value, checked, onChange }) => (
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

CustomCheckbox.propTypes = {
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

const SingleSelect = ({
  options,
  error,
  value,
  onChange,
  placeholder = "Placeholder",
}) => {
  const [selectedOption, setSelectedOption] = useState(value || null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionChange = (optionId) => {
    setSelectedOption(optionId);
    setIsOpen(false);
    onChange(optionId);
  };

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      {error && <div style={{ color: "red", fontSize: "14px" }}>{error}</div>}
      <div className={clsx(styles.root)}>
        <button
          type="button"
          onClick={toggleDropdown}
          className={clsx(styles.field, { [styles.error]: error })}
        >
          {selectedOption
            ? options.find((option) => option.id === selectedOption)?.name || ""
            : placeholder}
          {isOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
        </button>
        <input
          type="hidden"
          name="selectedOption"
          value={selectedOption || ""}
        />
        {isOpen && (
          <div className={styles.dropdown}>
            {options.map((option) => (
              <label key={option.id} className={styles.checkbox}>
                <CustomCheckbox
                  value={option.id.toString()}
                  checked={selectedOption === option.id}
                  onChange={() => handleOptionChange(option.id)}
                />
                {option.name}
              </label>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

SingleSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.object,
};

export default SingleSelect;
