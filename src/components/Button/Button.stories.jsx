import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    isPressed: { control: "boolean" },
    pressedValue: { control: "text" },
    unpressedValue: { control: "text" },
    className: { control: "text" },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  isPressed: true,
  onClick: action("clicked"),
  pressedValue: "Pressed",
  unpressedValue: "Unpressed",
};
