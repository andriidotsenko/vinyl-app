import { useState } from "react";
import CollectionBanner from "./CollectionBanner.jsx";
import SearchInput from "./SearchInput.jsx";
import VinylCard from "./VinylCard.jsx";

import styles from "./VinylList.module.css";

function VinylList({ list }) {
  const [collection, setCollection] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  function handleCollectionToggle(vinylId) {
    setCollection((prevCollection) => {
      if (prevCollection.includes(vinylId)) {
        return prevCollection.filter((id) => id !== vinylId);
      } else {
        return [...prevCollection, vinylId];
      }
    });
  }

  function handleSearchInputChange(value) {
    setSearchValue(value);
  }

  const filteredList = list.filter((vinyl) => {
    const title = vinyl.title.toLowerCase();
    const artist = vinyl.artist.toLowerCase();
    const searchTerm = searchValue.toLowerCase();
    return title.includes(searchTerm) || artist.includes(searchTerm);
  });

  return (
    <div className={styles.root}>
      <div className={styles.collection}>
        <CollectionBanner collectionSize={collection.length} />
      </div>

      <div className={styles.filter}>
        <SearchInput
          maxLength={100}
          placeholder="Filter by artist or title"
          value={searchValue}
          setSearchValue={setSearchValue}
          onChange={handleSearchInputChange}
        />
      </div>

      <div className={styles.results}>
        {filteredList.map((vinyl) => (
          <VinylCard
            key={vinyl.id}
            vinyl={vinyl}
            inCollection={collection.includes(vinyl.id)}
            onCollectionToggle={() => handleCollectionToggle(vinyl.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default VinylList;
