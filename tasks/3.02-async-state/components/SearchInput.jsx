import clsx from "clsx";

import SearchInputTab from "./SearchInputTab.jsx";
import SearchInputVinylOption from "./SearchInputVinylOption.jsx";
import SearchInputLink from "./SearchInputLink.jsx";

import "./SearchInput.css";

function SearchInput({
  inputValue,
  isDropdownOpened,
  isEmpty,
  tabs,
  footer,
  children,
  onInputChange,
  onInputFocus,
  onInputBlur,
  onInputKeyDown,
}) {
  return (
    <div className="search-input">
      <div className="search-input__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
        >
          <path
            stroke="#090A0A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m15.75 15.75-3.262-3.262M14.25 8.25a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
          />
        </svg>
      </div>

      <input
        type="text"
        className="search-input__input"
        placeholder="Search artists, albums..."
        value={inputValue}
        onChange={onInputChange}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        onKeyDown={onInputKeyDown}
      />

      <div
        className={clsx("search-input-dropdown", {
          "search-input-dropdown--closed": !isDropdownOpened,
        })}
      >
        <div className="search-input-dropdown__header">
          <div className="search-input-tabs">{tabs}</div>
        </div>

        {isEmpty ? (
          <div className="search-input-dropdown__empty-message">
            {inputValue === "" ? (
              "Start typing to search"
            ) : (
              <>No results for &quot;{inputValue}&quot;. Change your query</>
            )}
          </div>
        ) : (
          <div className="search-input-dropdown__options">{children}</div>
        )}

        <div className="search-input-dropdown__footer">{footer}</div>
      </div>
    </div>
  );
}

SearchInput.Tab = SearchInputTab;
SearchInput.VinylOption = SearchInputVinylOption;
SearchInput.Link = SearchInputLink;

export default SearchInput;
