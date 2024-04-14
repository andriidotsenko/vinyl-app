import useSWR from "swr";

export const useVinylById = (id) => {
  const vinyl = useSWR(
    `/api/releases/${id}`,
    () =>
      fetch(`/api/releases/${id}`)
        .then((response) => response.json())
        .then((data) => data.release)
    // {
    //   suspense: true,
    // }
  );

  return vinyl;
};
