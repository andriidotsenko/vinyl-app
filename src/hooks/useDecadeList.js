import { useState } from "react";

export const useDecadeList = () => {
  const [decadeList] = useState([
    { id: 1, yearFrom: 1950, yearTo: 1959, name: "1950s" },
    { id: 2, yearFrom: 1960, yearTo: 1969, name: "1960s" },
    { id: 3, yearFrom: 1970, yearTo: 1979, name: "1970s" },
    { id: 4, yearFrom: 1980, yearTo: 1989, name: "1980s" },
    { id: 5, yearFrom: 1990, yearTo: 1999, name: "1990s" },
    { id: 6, yearFrom: 2000, yearTo: 2009, name: "2000s" },
    { id: 7, yearFrom: 2010, yearTo: 2019, name: "2010s" },
    { id: 8, yearFrom: 2020, yearTo: 2029, name: "2020s" },
  ]);

  return decadeList;
};
