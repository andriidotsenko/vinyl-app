import useSWR from "swr";
import { useMemo } from "react";

export const useVinylById = (id) => {
  const fetcher = useMemo(() => {
    return () =>
      fetch(`/api/releases/${id}`)
        .then((response) => response.json())
        .then((data) => data.release);
  }, [id]);

  const { data, error, isLoading } = useSWR(`/api/releases/${id}`, fetcher, {});

  return { data, error, isLoading };
};
