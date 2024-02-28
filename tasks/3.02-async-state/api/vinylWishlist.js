/* eslint-disable no-console */
export async function fetchAddVinylToWishlist(id) {
  try {
    console.log("Adding vinyl with id " + id + " to wishlist");
    await delay(1000);
    throw new Error("Server not responding");
  } finally {
    console.error("Failed: Vinyl with id " + id + " added to wishlist");
  }
}

export async function fetchRemoveVinylFromWishlist(id) {
  try {
    console.log("Removing vinyl with id " + id + " from wishlist");
    await delay(2000);
    throw new Error("Server not responding");
  } finally {
    console.error("Failed: Vinyl with id " + id + " removed from wishlist");
  }
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
