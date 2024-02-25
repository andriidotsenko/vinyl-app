import { useState } from "react";
import CollectionBanner from "./CollectionBanner.jsx";
import SearchInput from "./SearchInput.jsx";
import VinylCard from "./VinylCard.jsx";

import styles from "./VinylList.module.css";

function VinylList({ list }) {
  const [collection, setCollection] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  function handleCollectionToggle(vinylId) {
    const index = collection.findIndex((item) => item.id === vinylId);
    if (index === -1) {
      const vinylToAdd = list.find((vinyl) => vinyl.id === vinylId);
      setCollection([...collection, vinylToAdd]);
    } else {
      const updatedCollection = [...collection];
      updatedCollection.splice(index, 1);
      setCollection(updatedCollection);
    }
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
          maxLength="100"
          placeholder="Filter by artist or title"
          value=""
          onChange={handleSearchInputChange}
        />
      </div>

      <div className={styles.results}>
        {filteredList.map((vinyl) => (
          <VinylCard
            key={vinyl.id}
            vinyl={vinyl}
            inCollection={collection.some((item) => item.id === vinyl.id)}
            onAddToCollection={() => handleCollectionToggle(vinyl.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default VinylList;
