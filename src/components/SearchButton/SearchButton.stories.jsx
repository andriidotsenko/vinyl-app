import { action } from "@storybook/addon-actions";
import SearchButton from "./SearchButton";

export default {
  title: "SearchButton",
  component: SearchButton,
  argTypes: {
    inCollection: { control: "boolean" },
    className: { control: "text" },
  },
};

const Template = (args) => <SearchButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  inCollection: false,
  onClick: action("clicked"),
};
