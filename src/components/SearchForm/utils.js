export const filterOptions = (options, searchText) => {
  const uniqueArtists = {};
  const filteredOptions = [];

  options.forEach((option) => {
    const artistLowerCase = option.artist.toLowerCase();
    if (
      !uniqueArtists[artistLowerCase] &&
      artistLowerCase.includes(searchText.toLowerCase().trim())
    ) {
      uniqueArtists[artistLowerCase] = true;
      filteredOptions.push(option);
    }
  });

  return filteredOptions;
};
