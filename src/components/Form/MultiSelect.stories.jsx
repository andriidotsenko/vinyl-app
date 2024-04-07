import { useState } from "react";
import MultiSelect from "./MultiSelect";

export default {
  title: "Components/MultiSelect",
  component: MultiSelect,
};

const options = [
  { id: 1, title: "Option 1" },
  { id: 2, title: "Option 2" },
];

export const Default = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleMultiSelectChange = (updatedOptions) => {
    setSelectedOptions(updatedOptions);
  };

  return (
    <MultiSelect
      options={options}
      placeholder={"Genre"}
      value={selectedOptions}
      onChange={handleMultiSelectChange}
    />
  );
};

Default.args = {};
