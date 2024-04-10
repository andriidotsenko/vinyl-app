import useSWR from "swr";

export const useReliseById = (id) => {
  const result = useSWR(
    `/api/releases/${id}`,
    () =>
      fetch(`/api/releases/${id}`)
        .then((response) => response.json())
        .then((data) => data.release)
    // {
    //   suspense: true,
    // }
  );

  return result;
};
