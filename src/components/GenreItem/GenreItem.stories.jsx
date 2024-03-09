import React from "react";
import GenreItem from "./GenreItem";

export default {
  title: "GenreItem",
  component: GenreItem,
  argTypes: {
    genre: { control: { disable: true } }, // Для блокировки изменений genre
    backgroundColor: { control: "color" }, // Контроль для цвета backgroundColor
  },
};

const Template = (args) => <GenreItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  genre: {
    id: 1,
    name: "Rock",
    backgroundColor: "#ff5722",
    images: [
      "/genrebg/classical1.jpg",
      "/genrebg/classical2.jpg",
      "/genrebg/classical3.jpg",
    ],
  },
};
