import CustomInputField from "./CustomInputField";

import { useVinylCardList } from "../../hooks/useVinylCardList";

export default {
  title: "CustomInputField",
  component: CustomInputField,
};

export const Default = () => (
  <CustomInputField
    options={useVinylCardList()}
    onChange={console.log("Artist")}
    placeholder={"Artist"}
    value={null}
  />
);
Default.args = {};
