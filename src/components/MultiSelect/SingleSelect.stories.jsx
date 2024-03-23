import SingleSelect from "./Singleselect";
import { useCountriesList } from "../../hooks/useCountriesList";

export default {
  title: "SingleSelect",
  component: SingleSelect,
};

export const Default = () => (
  <SingleSelect
    options={useCountriesList()}
    onChange={console.log("Countries")}
    // placeholder={"Countries"}
    value={"uk"}
  />
);
Default.args = {};
