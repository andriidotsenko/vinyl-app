import BackButton from "./BackButton";

export default {
  title: "BackButton",
  component: BackButton,
  argTypes: {
    buttonText: { control: "text" },
  },
};

const Template = (args) => <BackButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonText: "Back",
};
