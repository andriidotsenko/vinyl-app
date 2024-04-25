import { useRef, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./Selects.module.css";
import ArrowDownIcon from "../Icon/ArrowDownIcon.jsx";
import ArrowUpIcon from "../Icon/ArrowUpIcon.jsx";
import { CSSTransition } from "react-transition-group";
import useClickOutside from "../../hooks/useClickOutside";

const Select = ({
  options,
  error,
  value,
  onChange,
  name,
  placeholder = "Placeholder",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleOptionChange = (optionId) => {
    setIsOpen(false);
    const newValue = value === optionId ? null : optionId;
    onChange(newValue);
  };

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useClickOutside(ref, () => {
    setIsOpen(false);
  });

  return (
    <div ref={ref}>
      <input type="hidden" name={name} value={value || ""} />
      <div className={clsx(styles.root)}>
        <button
          type="button"
          onClick={toggleDropdown}
          className={clsx(styles.field, { [styles.error]: error })}
        >
          {value
            ? options.find((option) => option.value === value)?.label || ""
            : placeholder}
          {isOpen ? (
            <ArrowUpIcon styles={{ PointerEvents: "none" }} />
          ) : (
            <ArrowDownIcon />
          )}
        </button>

        <CSSTransition
          in={isOpen}
          timeout={300}
          classNames={styles}
          mountOnEnter
          unmountOnExit
        >
          <div className={styles.dropdown}>
            {options.map((options) => (
              <button
                key={options.value}
                type="button"
                className={clsx(styles.checkbox, {
                  [styles.selected]: value === options.value,
                })}
                onClick={() => handleOptionChange(options.value)}
              >
                <span>{options.label}</span>
              </button>
            ))}
          </div>
        </CSSTransition>
      </div>
      {error && <div style={{ color: "red", fontSize: "11px" }}>{error}</div>}
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Select;
