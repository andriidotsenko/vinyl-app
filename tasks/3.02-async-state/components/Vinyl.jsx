import { useState } from "react";

import Button from "./Button.jsx";
import HeartIcon from "./HeartIcon.jsx";
import IconButton from "./IconButton.jsx";

import styles from "./Vinyl.module.css";
import {
  fetchAddVinylToCollection,
  fetchRemoveVinylFromCollection,
} from "../api/vinylCollection.js";
import {
  fetchAddVinylToWishlist,
  fetchRemoveVinylFromWishlist,
} from "../api/vinylWishlist.js";

function Vinyl({ vinyl }) {
  const [inWishlist, setInWishlist] = useState(false);
  const [inCollection, setInCollection] = useState(false);
  const [requestCount, setRequestCount] = useState(0);

  async function handleWishlistButtonClick() {
    const updatedInWishlist = !inWishlist;
    setInWishlist(updatedInWishlist);
    const currentRequestCount = requestCount + 1;
    setRequestCount(currentRequestCount);

    try {
      await Promise.all([
        updatedInWishlist
          ? fetchRemoveVinylFromWishlist(vinyl.id)
          : fetchAddVinylToWishlist(vinyl.id),
        new Promise((resolve) => setTimeout(resolve, 2000)),
      ]);

      if (currentRequestCount === requestCount) {
        setRequestCount(0);
      }
    } catch (error) {
      console.error("Error toggling wishlist status:", error);
      setInWishlist(!updatedInWishlist);
      if (currentRequestCount === requestCount) {
        setRequestCount(0);
      }
    }
  }

  async function handleAddToCollection() {
    try {
      if (!inCollection) {
        await fetchAddVinylToCollection(vinyl.id);
        setInCollection(true);
      } else {
        await fetchRemoveVinylFromCollection(vinyl.id);
        setInCollection(false);
      }
    } catch (error) {
      console.error("Error toggling collection status:", error);
    }
  }

  return (
    <article className={styles.root}>
      <div className={styles.cover}>
        <div className={styles.coverActions}>
          <IconButton
            white
            title="Add to wishlist"
            onClick={handleWishlistButtonClick}
            icon={
              inWishlist ? (
                <HeartIcon size={24} filled style={{ fill: "#FF4500" }} />
              ) : (
                <HeartIcon size={24} />
              )
            }
          />
        </div>
        <img className={styles.coverImage} src={vinyl.image} alt="" />
      </div>
      <div className={styles.content}>
        <header>
          <h4 className={styles.title}>{vinyl.title}</h4>
          <div className={styles.artist}>{vinyl.artist}</div>
        </header>
        <div className={styles.releaseRow}>
          <div className={styles.release}>
            <span>{vinyl.country}</span>
            <span>{vinyl.year}</span>
          </div>
        </div>
      </div>
      <div className={styles.action}>
        <Button
          fullWidth
          active={inCollection}
          label={inCollection ? "In collection" : "Add to collection"}
          onClick={handleAddToCollection}
        />
      </div>
      <div className={styles.tracklist}>
        <h3 className={styles.tracklistTitle}>Track list</h3>
        <ol className={styles.tracks}>
          {vinyl.tracklist.map((track, index) => (
            <li key={index} className={styles.trackItem}>
              {track.position && (
                <span className={styles.trackPosition}>{track.position}</span>
              )}
              <span className={styles.trackTitle}>{track.title}</span>
              {track.duration && (
                <span className={styles.trackDuration}>{track.duration}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}

export default Vinyl;
