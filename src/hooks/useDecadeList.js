import { useState } from "react";

export const useDecadeList = () => {
  const [decadeList] = useState([
    { id: 1, yearFrom: 1950, yearTo: 1959, label: "1950-1959" },
    { id: 2, yearFrom: 1960, yearTo: 1969, label: "1960-1969" },
    { id: 3, yearFrom: 1970, yearTo: 1979, label: "1970-1979" },
    { id: 4, yearFrom: 1980, yearTo: 1989, label: "1980-1989" },
    { id: 5, yearFrom: 1990, yearTo: 1999, label: "1990-1999" },
    { id: 6, yearFrom: 2000, yearTo: 2009, label: "2000-2009" },
    { id: 7, yearFrom: 2010, yearTo: 2019, label: "2010-2019" },
    { id: 8, yearFrom: 2020, yearTo: 2029, label: "2020-2029" },
  ]);

  return decadeList;
};
