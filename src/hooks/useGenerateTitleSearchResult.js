import { useState } from "react";

const useGenerateTitleSearchResult = (
  filters,
  genreName,
  decadeName,
  countryName
) => {
  const [title, setTitle] = useState("");

  const generateTitle = () => {
    const titlePrefix = "Results for: ";
    const artistPart = filters.artist ? ` artist - "${filters.artist}",` : "";
    const genrePart =
      filters.genre && genreName ? ` genre - ${genreName},` : "";
    const decadePart =
      filters.decade && decadeName ? `, decade - ${decadeName},` : "";
    const countryPart =
      filters.country && countryName ? `, country - ${countryName},` : "";

    return `${titlePrefix}${artistPart}${genrePart}${decadePart}${countryPart}`;
  };

  useState(() => {
    setTitle(generateTitle());
  }, [filters, genreName, decadeName, countryName]);

  return title;
};

export default useGenerateTitleSearchResult;
