import MultiSelect from "./MultiSelect";
import { useGenreList } from "../../hooks/useGenreList";
import { useDecadeList } from "../../hooks/useDecadeList";

export default {
  title: "MultiSelect",
  component: MultiSelect,
};

export const Default = () => (
  <MultiSelect
    options={useGenreList()}
    onChange={console.log("genres")}
    placeholder={"Genre"}
    value={[]}
  />
);
Default.args = {};

export const Decades = () => (
  <MultiSelect
    options={useDecadeList()}
    onChange={console.log("decades")}
    placeholder={"Decades"}
    value={[]}
  />
);
