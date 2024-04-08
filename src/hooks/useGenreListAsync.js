import useSWR from "swr";

export const useGenreListAsync = () => {
  const result = useSWR(
    "/api/genres",
    () =>
      fetch("/api/genres")
        .then((response) => response.json())
        .then((data) => data.genres),
    {
      suspense: true,
    }
  );

  return result;
};
