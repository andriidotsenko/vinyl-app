import MultiSelect from "./MultiSelect";
import { useDecadeList } from "../../hooks/useDecadeList";
import { useGenreListAsync } from "../../hooks/useGenreListAsync";

export default {
  title: "MultiSelect",
  component: MultiSelect,
};

export const Default = () => (
  <MultiSelect
    options={useGenreListAsync()}
    // onChange={() => console.log("genres")}
    placeholder={"Genre"}
    value={[]}
  />
);
Default.args = {};

export const Decades = () => (
  <MultiSelect
    options={useDecadeList()}
    // onChange={console.log("decades")}
    placeholder={"Decades"}
    value={[]}
  />
);
