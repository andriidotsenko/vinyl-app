import { useState } from "react";
import SearchInput from "./SearchInput.jsx";
import styles from "./NavigationBar.module.css";
import SearchIcon from "./SearchIcon.jsx";
import { fetchSearchVinyl } from "../api/searchVinyl.js";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchTab, setSearchTab] = useState("all");
  const [filteredSearchResults, setFilteredSearchResults] = useState([]);
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const isAll = searchTab === "all";
  const isByArtist = searchTab === "artist";
  const isByAlbum = searchTab === "album";

  function handleSearchInputChange(event) {
    const { value } = event.target;
    setSearchValue(value);
    setIsOpen(true);

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const newDebounceTimeout = setTimeout(() => {
      setDebouncedSearchValue(value);
    }, 500);

    setDebounceTimeout(newDebounceTimeout);
  }

  function handleTabChange(tab) {
    setSearchTab(tab);
  }

  function handleSearchInputBlur() {
    setIsOpen(false);
    setSearchValue("");
    setFilteredSearchResults([]);
  }

  function setDebouncedSearchValue(value) {
    fetchSearchVinyl(value, searchTab)
      .then((results) => setFilteredSearchResults(results))
      .catch((error) => console.error("Error fetching search results:", error));
  }

  return (
    <div className={styles.root}>
      <div className={styles.search}>
        <SearchInput
          inputValue={searchValue}
          isDropdownOpened={isOpen}
          isEmpty={filteredSearchResults.length === 0}
          onInputChange={handleSearchInputChange}
          onInputBlur={handleSearchInputBlur}
          tabs={[
            <SearchInput.Tab
              key="all"
              label="All"
              active={isAll}
              onClick={() => handleTabChange("all")}
            />,
            <SearchInput.Tab
              key="by_artist"
              label="By Artist"
              active={isByArtist}
              onClick={() => handleTabChange("artist")}
            />,
            <SearchInput.Tab
              key="by_album"
              label="By Album"
              active={isByAlbum}
              onClick={() => handleTabChange("album")}
            />,
          ]}
          footer={[
            <SearchInput.Link
              key="advanced"
              href="#search_new"
              label="Advanced search"
              icon={<SearchIcon />}
            />,
          ]}
        >
          {filteredSearchResults.map((item) => (
            <SearchInput.VinylOption key={item.id} vinyl={item} />
          ))}
        </SearchInput>
      </div>
    </div>
  );
}

export default NavigationBar;
