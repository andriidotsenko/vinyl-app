import useSWR from "swr";

export const useCountryListAsync = () => {
  const result = useSWR(
    "/api/countries",
    () =>
      fetch("/api/countries")
        .then((response) => response.json())
        .then((data) => data.countries),
    {
      suspense: true,
    }
  );
  return result;
};
