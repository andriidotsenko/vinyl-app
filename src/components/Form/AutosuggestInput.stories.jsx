import AutosuggestInput from "./AutosuggestInput";
import { action } from "@storybook/addon-actions";

export default {
  title: "AutosuggestInput",
  component: AutosuggestInput,
};

const options = [
  { id: 1, title: "Title 1", artist: "Artist 1" },
  { id: 2, title: "Title 2", artist: "Artist 2" },
  { id: 3, title: "Title 3", artist: "Artist 3" },
];

export const Default = () => (
  <AutosuggestInput
    options={options}
    value=""
    onChange={action("onChange")}
    placeholder="Search artist..."
    filterFunction={(options, value) =>
      options.filter((option) =>
        option.artist.toLowerCase().includes(value.toLowerCase())
      )
    }
  />
);

export const WithValue = () => (
  <AutosuggestInput
    options={options}
    value="Artist"
    onChange={action("onChange")}
    placeholder="Search artist..."
    filterFunction={(options, value) =>
      options.filter((option) =>
        option.artist.toLowerCase().includes(value.toLowerCase())
      )
    }
  />
);

export const WithError = () => (
  <AutosuggestInput
    options={options}
    value=""
    onChange={action("onChange")}
    placeholder="Search artist..."
    error="Please select an artist."
    filterFunction={(options, value) =>
      options.filter((option) =>
        option.artist.toLowerCase().includes(value.toLowerCase())
      )
    }
  />
);
