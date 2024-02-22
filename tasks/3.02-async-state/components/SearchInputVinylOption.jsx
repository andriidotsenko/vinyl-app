import clsx from "clsx";

function SearchInputVinylOption({ vinyl, active, ...props }) {
  return (
    <div
      className={clsx("search-input-vinyl-option", {
        "search-input-vinyl-option--active": active,
      })}
    >
      <div className="search-input-vinyl-option__cover">
        <img
          className="search-input-vinyl-option__cover-image"
          src={vinyl.image}
          alt=""
        />
      </div>
      <a
        href={`#vinyl-${vinyl.id}`}
        className="search-input-vinyl-option__content"
        {...props}
      >
        <h4 className="search-input-vinyl-option__title">{vinyl.title}</h4>
        <p className="search-input-vinyl-option__artist">{vinyl.artist}</p>
      </a>
    </div>
  );
}

export default SearchInputVinylOption;
