import { action } from "@storybook/addon-actions";
import CollectionButton from "./SearchButton";

export default {
  title: "CollectionButton",
  component: CollectionButton,
  argTypes: {
    inCollection: { control: "boolean" },
    className: { control: "text" },
  },
};

const Template = (args) => <CollectionButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  inCollection: false,
  onClick: action("clicked"),
};
