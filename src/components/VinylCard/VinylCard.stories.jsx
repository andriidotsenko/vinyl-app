import VinylCard from "./VinylCard";

export default {
  title: "VinylCard",
  component: VinylCard,
  argTypes: {
    card: {
      control: { disable: true },
    },
    inCollection: { control: "boolean" },
    inFavorites: { control: "boolean" },
    onClickInCollection: { action: "Clicked in collection" },
    onClickInFavorites: { action: "Clicked in favorites" },
  },
};

const Template = (args) => <VinylCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  card: {
    id: 1,
    title: "Example Title",
    artist: "Example Artist",
    year: 2022,
    country: "Example Country",
    genreId: 1,
    image: {
      normal: "/genrebg/classical1.jpg",
      double: "/genrebg/classical1.jpg",
    },
  },
  inCollection: false,
  inFavorites: false,
};
