import { action } from "@storybook/addon-actions";
import FavoriteButton from "./FavoriteButton";

export default {
  title: "FavoriteButton",
  component: FavoriteButton,
  argTypes: {
    isFill: { control: "boolean" },
  },
};

const Template = (args) => <FavoriteButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  isFill: false,
  onFavoritesToggle: action("favorites toggled"),
};
