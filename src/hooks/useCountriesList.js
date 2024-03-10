/* eslint-disable no-unused-vars */
import { useState } from "react";

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
    {
      id: 12,
      name: "Denmark",
    },
    {
      id: 13,
      name: "China",
    },
    {
      id: 14,
      name: "India",
    },
    {
      id: 15,
      name: "Spain",
    },
    {
      id: 16,
      name: "South Korea",
    },
    {
      id: 17,
      name: "Mexico",
    },
    {
      id: 18,
      name: "Argentina",
    },
    {
      id: 19,
      name: "Netherlands",
    },
    {
      id: 20,
      name: "Switzerland",
    },
  ]);

  return countriesList;
};
