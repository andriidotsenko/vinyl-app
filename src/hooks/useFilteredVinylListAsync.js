import useSWR from "swr";
import { useGenreListAsync } from "./useGenreListAsync";
import { useCountryListAsync } from "./useCountryListAsync.js";

export function mapVinylSearchResult(item, genreList, countryList) {
  return {
    id: item.id,
    title: item.title,
    artist: item.artist,
    year: item.year,
    country: countryList.find((country) => country.id === item.country),
    genre: genreList.find((genre) => genre.id === item.genre),
    styles: item.styles,
    image: item.thumb_image,
  };
}

function getFiltersParams(filters) {
  const params = new URLSearchParams();

  if (filters.artist) {
    params.set("artist", filters.artist);
  }

  if (filters.genres && filters.genres.length > 0) {
    filters.genres.forEach((genre) => params.append("genre", genre));
  }

  if (filters.country) {
    params.set("country", filters.country);
  }

  if (filters.decade) {
    params.set("year_from", filters.decade);
    params.set("year_to", filters.decade + 9);
  }

  return params;
}

export const useFilteredVinylListAsync = (
  filters,
  { offset, limit },
  options = null
) => {
  const { data: genreList, isLoading: genreListLoading } =
    useGenreListAsync(options);
  const { data: countryList, isLoading: countryListLoading } =
    useCountryListAsync(options);

  const result = useSWR(
    ["/api/search", filters, offset, limit],
    () =>
      fetch(
        `/api/search?limit=${limit}&offset=${offset}&${getFiltersParams(
          filters
        ).toString()}`
      ).then((response) => response.json()),
    options || {
      suspense: false,
    }
  );

  const results =
    genreListLoading || countryListLoading ? [] : result.data?.results || [];

  return {
    results: results.map((vinyl) =>
      mapVinylSearchResult(vinyl, genreList, countryList)
    ),
    total: result.data?.total || 0,
    isLoading: result.isLoading,
  };
};
