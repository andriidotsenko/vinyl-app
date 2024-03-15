export const getFiltersFromParams = (params) => ({
  artist: params.get("artist") || "",
  genre: params.get("genre") || "",
  decade: params.get("decade") || "",
  country: params.get("country") || "",
});

export const getSearchParamsFromFilters = (filters) => {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value) {
      const existingValue = params.get(key);
      if (existingValue) {
        params.set(key, `${existingValue},${value}`);
      } else {
        params.set(key, value);
      }
    }
  });

  return params;
};

export const emptyFilters = {
  artist: "",
  genre: "",
  decade: "",
  country: "",
};
