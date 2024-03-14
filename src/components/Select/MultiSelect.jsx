import PropTypes from "prop-types";

import styles from "./Select.module.css";
import { useState } from "react";
import clsx from "clsx";
import { ArrowDownIcon } from "../Icon/ArrowDownIcon.jsx";
import { ArrowUpIcon } from "../Icon/ArrowUpIcon.jsx";
import { Checkbox } from "./Checkbox.jsx";

export const MultiSelect = ({
  value,
  onChange,
  options,
  placeholder,
  ...props
}) => {
  const [isOpened, setIsOpened] = useState(false);

  const activeOptions = options.filter((option) =>
    value.includes(option.value)
  );

  return (
    <div className={styles.holder}>
      <input type="hidden" value={value} {...props} />
      <button
        type="button"
        className={clsx(styles.root, {
          [styles.isActive]: isOpened,
        })}
        onClick={() => setIsOpened((isOpened) => !isOpened)}
      >
        <div className={styles.innerContent}>
          {activeOptions?.length ? (
            <span className={styles.value}>
              {activeOptions.map((option) => option.label).join(", ")}
            </span>
          ) : (
            <span className={styles.placeholder}>{placeholder}</span>
          )}
          {isOpened ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </div>
      </button>
      {isOpened && (
        <div aria-label="options" className={styles.dropdown}>
          {options.map((option) => (
            <button
              key={option.value}
              className={styles.multipleOption}
              type="button"
              onClick={(event) => {
                event.preventDefault();
                if (value.includes(option.value)) {
                  onChange(value.filter((item) => item !== option.value));
                } else {
                  onChange([...value, option.value]);
                }
              }}
            >
              <div className={styles.optionIndicator}>
                <Checkbox
                  name={name}
                  checked={value.includes(option.value)}
                  onChange={() => undefined}
                />
              </div>
              <div className={styles.optionLabel}>{option.label}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

MultiSelect.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string,
};
