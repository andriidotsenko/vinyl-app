import clsx from "clsx";

function SearchInputTab({ label, active, ...props }) {
  return (
    <button
      className={clsx("search-input-tabs__tab", {
        "search-input-tabs__tab--active": active,
      })}
      {...props}
    >
      {label}
    </button>
  );
}

export default SearchInputTab;
