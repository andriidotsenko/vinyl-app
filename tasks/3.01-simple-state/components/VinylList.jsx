import { useState } from "react";

import CollectionBanner from "./CollectionBanner.jsx";
import SearchInput from "./SearchInput.jsx";
import VinylCard from "./VinylCard.jsx";

import styles from "./VinylList.module.css";

function VinylList({ list }) {
  const [collection, setCollection] = useState(null);

  function handleCollectionToggle(vinylId) {}

  return (
    <div className={styles.root}>
      <div className={styles.collection}>
        <CollectionBanner collectionSize={0} />
      </div>

      <div className={styles.filter}>
        <SearchInput
          placeholder="Filter by artist or title"
          value=""
          onChange={() => {}}
        />
      </div>

      <div className={styles.results}>
        {list.map((vinyl) => (
          <VinylCard
            key={vinyl.id}
            vinyl={vinyl}
            onAddToCollection={handleCollectionToggle(vinyl.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default VinylList;
