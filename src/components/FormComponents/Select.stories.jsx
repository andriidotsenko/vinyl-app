import SingleSelect from "./Select";
import { useCountriesList } from "../../hooks/useCountriesList";

export default {
  title: "SingleSelect",
  component: SingleSelect,
};

export const Default = () => (
  <SingleSelect
    options={useCountriesList()}
    placeholder={"Countries"}
    value={null}
  />
);
Default.args = {};
