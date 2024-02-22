/* eslint-disable no-console */
import vinylListExample from "./vinylListExample";

export async function fetchSearchVinyl(query, field) {
  try {
    console.log('Searching for "' + query + '"');
    await randomizedDelay();

    return vinylListExample.filter((vinyl) => {
      const search = query.toLowerCase();

      const matchedTitle = vinyl.title.toLowerCase().startsWith(search);
      const matchedArtist = vinyl.artist.toLowerCase().startsWith(search);

      if (field === "album") {
        return matchedTitle;
      }

      if (field === "artist") {
        return matchedArtist;
      }

      return matchedTitle || matchedArtist;
    });
  } finally {
    console.log('Received results for "' + query + '"');
  }
}

function randomizedDelay() {
  return delay(Math.random() > 0.5 ? 1000 : 10000);
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
