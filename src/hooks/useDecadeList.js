import { useState } from "react";

export const useDecadeList = () => {
  const [decadeList, setDecadeList] = useState([
    { id: 1, value: "50-60", label: "1950-60 pp." },
    { id: 2, value: "60-70", label: "1960-70 pp." },
    { id: 3, value: "70-80", label: "1970-80 pp." },
    { id: 4, value: "80-90", label: "1980-90 pp." },
    { id: 5, value: "90-00", label: "1990-00 pp." },
    { id: 6, value: "00-10", label: "2000-10 pp." },
    { id: 7, value: "10-20", label: "2010-20 pp." },
    { id: 8, value: "20-30", label: "2020-30 pp." },
  ]);

  return decadeList;
};
