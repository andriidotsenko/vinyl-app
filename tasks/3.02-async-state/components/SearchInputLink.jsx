function SearchInputLink({ icon, label, ...props }) {
  return (
    <a className="search-input-advanced-button" {...props}>
      <span className="search-input-advanced-button__icon">{icon}</span>
      <span className="search-input-advanced-button__label">{label}</span>
    </a>
  );
}

export default SearchInputLink;
