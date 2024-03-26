import Select from "./Select";
import { useState } from "react";

export default {
  title: "Select",
  component: Select,
};

const Template = (args) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (newValue) => {
    setSelectedValue(newValue);
    console.error("Selected Value:", newValue);
  };

  return <Select {...args} value={selectedValue} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  options: [
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
  ],
  placeholder: "Select an option",
  name: "select",
};
