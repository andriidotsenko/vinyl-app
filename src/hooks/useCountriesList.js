export const useCountriesList = () => {
  const [countriesList, setCountriesList] = useState([
    {
      id: 1,
      name: "USA",
    },
    {
      id: 2,
      name: "United Kingdom",
    },
    {
      id: 3,
      name: "Germany",
    },
    {
      id: 4,
      name: "Sweden",
    },
    {
      id: 5,
      name: "Ukraine",
    },
  ]);

  return countriesList;
};
