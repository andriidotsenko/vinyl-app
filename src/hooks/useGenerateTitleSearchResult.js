import { useGenreList } from "./useGenreList";
import { useCountriesList } from "./useCountriesList";
import { useDecadeList } from "./useDecadeList";

const useGenerateTitleSearchResult = (filters) => {
  const genres = useGenreList();
  const countries = useCountriesList();
  const decades = useDecadeList();

  const genreName = genres.find((genre) => genre.id === +filters.genre)?.name;
  const countryName = countries.find((c) => c.id === filters.country)?.name;
  const decadeName = decades.find((d) => d.id === +filters.decade)?.name;

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
