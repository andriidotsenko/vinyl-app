import useSWR from "swr";

export const useDeezerSearch = (query) => {
  const deezer = useSWR(
    `http://localhost:3001/api/deezer/search?q=track:"${query}"`,
    () =>
      fetch(`http://localhost:3001/api/deezer/search?q=track:"${query}"`)
        .then((response) => response.json())
        .then((data) => data.data)
  );

  return deezer;
};
