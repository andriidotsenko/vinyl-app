import useSWR from "swr";

export const useArtistsAsync = (query) => {
  return useSWR(query ? ["/api/artists/autocomplete", query] : null, () =>
    fetch(`/api/artists/autocomplete?limit=5&query=${query}`)
      .then((response) => response.json())
      .then((data) => data.artists)
  );
};
