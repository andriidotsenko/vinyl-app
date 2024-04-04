import { useGenreListAsync } from "./useGenreListAsync";
import { useCountriesList } from "./useCountriesList";
import { useDecadeList } from "./useDecadeList";
import { useMemo } from "react";

const useGenerateTitleSearchResult = (filters) => {
  const genres = useGenreListAsync();
  const countries = useCountriesList();
  const decades = useDecadeList();

  const genreName = useMemo(() => {
    if (!Array.isArray(genres)) return ""; // Handle non-array case
    return genres.find((genre) => genre.id === +filters.genre)?.title;
  }, [filters.genre, genres]);

  const countryName = useMemo(() => {
    if (!Array.isArray(countries)) return ""; // Handle non-array case
    return countries.find((c) => c.id === filters.country)?.name;
  }, [filters.country, countries]);

  const decadeName = useMemo(() => {
    if (!Array.isArray(decades)) return ""; // Handle non-array case
    return decades.find((d) => d.id === +filters.decade)?.name;
  }, [filters.decade, decades]);

  const titleParts = [];

  if (filters.artist) {
    titleParts.push(`artist="${filters.artist}"`);
  }
  if (filters.genre && genreName) {
    titleParts.push(`genre="${genreName}"`);
  }
  if (filters.decade && decadeName) {
    titleParts.push(`decade="${decadeName}"`);
  }
  if (filters.country && countryName) {
    titleParts.push(`country="${countryName}"`);
  }

  const titlePrefix = "Results for:";
  const title = `${titlePrefix} ${titleParts.join(", ")}`;

  return title;
};

export default useGenerateTitleSearchResult;
