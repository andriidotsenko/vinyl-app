import useSWR from "swr";
import { useCallback } from "react";

export const useVinylById = (id) => {
  const fetcher = useCallback(
    () =>
      fetch(`/api/releases/${id}`)
        .then((response) => response.json())
        .then((data) => data.release),
    [id]
  );

  return useSWR(`/api/releases/${id}`, fetcher, {});
};
