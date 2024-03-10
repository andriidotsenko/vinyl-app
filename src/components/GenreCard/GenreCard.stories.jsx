import GenreCard from "./GenreCard.jsx";

export default {
  title: "GenreCard",
  component: GenreCard,
  genre: { control: { disable: true } },
  backgroundColor: { control: "color" },
  images: { control: "text" },
};

const Template = (args) => <GenreCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  name: "Rock",
  backgroundColor: "red",
  images: [
    "/genrebg/classical1.jpg",
    "/genrebg/classical2.jpg",
    "/genrebg/classical3.jpg",
  ],
};
