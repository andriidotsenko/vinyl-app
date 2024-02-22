/* eslint-disable no-console */
export async function fetchAddVinylToCollection(id) {
  try {
    console.log("Adding vinyl with id " + id + " to collection");
    await delay(1000);
  } finally {
    console.log("Vinyl with id " + id + " added to collection");
  }
}

export async function fetchRemoveVinylFromCollection(id) {
  try {
    console.log("Removing vinyl with id " + id + " from collection");
    await delay(2000);
  } finally {
    console.log("Vinyl with id " + id + " removed from collection");
  }
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
