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

  const isAll = searchTab === "all";
  const isByArtist = searchTab === "artist";
  const isByAlbum = searchTab === "album";

  function handleSearchInputFocus() {
    setIsOpen(true);
  }

  function handleSearchInputBlur() {
    setIsOpen(false);
    setSearchValue("");
    setFilteredSearchResults([]);
  }

  async function handleSearchInputChange(event) {
    const value = event.target.value;
    setSearchValue(value);
    const results = await fetchSearchVinyl(value, searchTab);
    setFilteredSearchResults(results);
  }

  return (
    <div className={styles.root}>
      <div className={styles.search}>
        <SearchInput
          inputValue={searchValue}
          isDropdownOpened={isOpen}
          isEmpty={filteredSearchResults.length === 0}
          onInputChange={handleSearchInputChange}
          onInputFocus={handleSearchInputFocus}
          onInputBlur={handleSearchInputBlur}
          tabs={[
            <SearchInput.Tab
              key="all"
              label="All"
              active={isAll}
              onMouseDown={(event) => {
                event.preventDefault();
              }}
              onClick={(event) => {
                event.preventDefault();
                setSearchTab("all");
              }}
            />,
            <SearchInput.Tab
              key="by_artist"
              label="By Artist"
              active={isByArtist}
              onMouseDown={(event) => {
                event.preventDefault();
              }}
              onClick={(event) => {
                event.preventDefault();
                setSearchTab("artist");
              }}
            />,
            <SearchInput.Tab
              key="by_album"
              label="By Album"
              active={isByAlbum}
              onMouseDown={(event) => {
                event.preventDefault();
              }}
              onClick={(event) => {
                event.preventDefault();
                setSearchTab("album");
              }}
            />,
          ]}
          footer={[
            <SearchInput.Link
              key="advanced"
              href="#search_new"
              label="Advanced search"
              icon={<SearchIcon />}
              onMouseDown={(event) => {
                event.preventDefault();
              }}
            />,
          ]}
        >
          {filteredSearchResults.map((item) => (
            <SearchInput.VinylOption
              key={item.id}
              vinyl={item}
              onMouseDown={(event) => {
                event.preventDefault();
              }}
            />
          ))}
        </SearchInput>
      </div>
    </div>
  );
}

export default NavigationBar;
