import Header from "./Header.jsx";

export default {
  title: "Header",
  component: Header,
  argTypes: {
    favoriteCount: {
      control: "number",
    },
    collectionCount: {
      control: "number",
    },
  },
};

export const Default = () => <Header favoriteCount={5} collectionCount={2} />;

export const Default2 = (args) => <Header {...args} />;
Default2.args = {
  favoriteCount: 54,
  collectionCount: 45,
};
