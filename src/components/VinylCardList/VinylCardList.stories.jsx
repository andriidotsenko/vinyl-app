import VinylCardList from "./VinylCardList";

export default {
  title: "VinylCardList",
  component: VinylCardList,
  argTypes: {
    cardList: { control: { disable: true } },
    collectionList: { control: { disable: true } },
    favoriteList: { control: { disable: true } },
    onClickInCollection: { action: "Clicked in collection" },
    onClickInFavorites: { action: "Clicked in favorites" },
  },
};

const Template = (args) => <VinylCardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardList: [
    {
      id: 17,
      image: {
        normal: "/content/blink-182-enema-of-the-state.jpg",
        double: "/content/blink-182-enema-of-the-state.jpg",
      },
      title: "Enema of the State",
      artist: "blink-182",
      year: 1999,
      genreId: 1, // Rock
      country: "USA",
    },
    {
      id: 18,
      image: {
        normal: "/content/interpol-turn-on-the-bright-lights.jpg",
        double: "/content/interpol-turn-on-the-bright-lights.jpg",
      },
      title: "Turn On the Bright Lights",
      artist: "Interpol",
      year: 2002,
      genreId: 1, // Rock
      country: "USA",
    },
    // Add more sample card objects as needed
  ],
  collectionList: [1], // Example collection list with one item
  favoriteList: [], // Example empty favorite list
};
