import { useState } from "react";

export const useCountriesList = () => {
  const [countriesList] = useState([
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
    {
      id: 6,
      name: "France",
    },
    {
      id: 7,
      name: "Italy",
    },
    {
      id: 8,
      name: "Canada",
    },
    {
      id: 9,
      name: "Australia",
    },
    {
      id: 10,
      name: "Japan",
    },
    {
      id: 11,
      name: "Brazil",
    },
  ]);

  return countriesList;
};
