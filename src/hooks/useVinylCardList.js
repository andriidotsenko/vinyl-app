import { useState } from "react";
import { useCountriesList } from "./useCountriesList";
import { useGenreList } from "./useGenreList";

export const useVinylCardList = () => {
  const countries = useCountriesList();
  const genreList = useGenreList();
  const [vinylCardList] = useState([
    {
      id: 1,
      image: {
        normal: "/content/rhcp-californication.jpg",
        double: "/content/rhcp-californication.jpg",
      },
      title: "Californication",
      artist: "Red Hot Chili Peppers",
      year: 1999,
      genreId: 1, // Rock
      country: "USA",
    },
    {
      id: 2,
      image: {
        normal: "/content/rhcp-stadium-arcadium.jpg",
        double: "/content/rhcp-stadium-arcadium.jpg",
      },
      title: "Stadium Arcadium",
      artist: "Red Hot Chili Peppers",
      year: 2006,
      genreId: 1, // Rock
      country: "USA",
    },
    {
      id: 3,
      image: {
        normal: "/content/mgmt-oracular-spectacular.jpg",
        double: "/content/mgmt-oracular-spectacular.jpg",
      },
      title: "Oracular Spectacular",
      artist: "MGMT",
      year: 2007,
      genreId: 2, // Pop
      country: "USA",
    },
    {
      id: 4,
      image: {
        normal: "/content/ffdp-the-wrong-side-of-heaven.jpg",
        double: "/content/ffdp-the-wrong-side-of-heaven.jpg",
      },
      title: "The Wrong Side of Heaven",
      artist: "Five Finger Death Punch",
      year: 2013,
      genreId: 1, // Rock
      country: "USA",
    },
    {
      id: 5,
      image: {
        normal: "/content/gorillaz-demon-days.jpg",
        double: "/content/gorillaz-demon-days.jpg",
      },
      title: "Demon Days",
      artist: "Gorillaz",
      year: 2005,
      genreId: 2, // Pop
      country: "United Kingdom",
    },
    {
      id: 6,
      image: {
        normal: "/content/muse-origin-of-symmetry.jpg",
        double: "/content/muse-origin-of-symmetry.jpg",
      },
      title: "Origin of Symmetry",
      artist: "Muse",
      year: 2001,
      genreId: 1, // Rock
      country: "United Kingdom",
    },
    {
      id: 7,
      image: {
        normal: "/content/ffdp-and-justice-for-none.png",
        double: "/content/ffdp-and-justice-for-none.png",
      },
      title: "And Justice for None",
      artist: "Five Finger Death Punch",
      year: 2018,
      genreId: 1, // Rock
      country: "USA",
    },
    {
      id: 8,
      image: {
        normal: "/content/portugal-the-man-woodstock.jpg",
        double: "/content/portugal-the-man-woodstock.jpg",
      },
      title: "Woodstock",
      artist: "Portugal. The Man",
      year: 2017,
      genreId: 1, // Rock
      country: "USA",
    },
    {
      id: 9,
      image: {
        normal: "/content/muse-the-resistance.jpg",
        double: "/content/muse-the-resistance.jpg",
      },
      title: "The Resistance",
      artist: "Muse",
      year: 2009,
      genreId: 1, // Rock
      country: "United Kingdom",
    },
    {
      id: 10,
      image: {
        normal: "/content/mgmt-little-dark-age.jpg",
        double: "/content/mgmt-little-dark-age.jpg",
      },
      title: "Little Dark Age",
      artist: "MGMT",
      year: 2018,
      genreId: 3, // Electronic
      country: "USA",
    },
    {
      id: 11,
      image: {
        normal: "/content/ghost-prequelle.jpg",
        double: "/content/ghost-prequelle.jpg",
      },
      title: "Prequelle",
      artist: "Ghost",
      year: 2018,
      genreId: 1, // Rock
      country: "Sweden",
    },
    {
      id: 12,
      image: {
        normal: "/content/metronomy-the-english-riviera.jpg",
        double: "/content/metronomy-the-english-riviera.jpg",
      },
      title: "The English Riviera",
      artist: "Metronomy",
      year: 2011,
      genreId: 2, // Pop
      country: "United Kingdom",
    },
    {
      id: 13,
      image: {
        normal: "/content/placebo-without-you-im-nothing.jpg",
        double: "/content/placebo-without-you-im-nothing.jpg",
      },
      title: "Without You I'm Nothing",
      artist: "Placebo",
      year: 1998,
      genreId: 1, // Rock
      country: "United Kingdom",
    },
    {
      id: 14,
      image: {
        normal: "/content/radiohead-ok-computer.jpg",
        double: "/content/radiohead-ok-computer.jpg",
      },
      title: "OK Computer",
      artist: "Radiohead",
      year: 1997,
      genreId: 1, // Rock
      country: "United Kingdom",
    },
    {
      id: 15,
      image: {
        normal: "/content/alt-j-an-awesome-wave.jpg",
        double: "/content/alt-j-an-awesome-wave.jpg",
      },
      title: "An Awesome Wave",
      artist: "alt-J",
      year: 2012,
      genreId: 3, // Electronic
      country: "United Kingdom",
    },
    {
      id: 16,
      image: {
        normal: "/content/electric-guest-plural.jpg",
        double: "/content/electric-guest-plural.jpg",
      },
      title: "Plural",
      artist: "Electric Guest",
      year: 2017,
      genreId: 2, // Pop
      country: "USA",
    },
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
    {
      id: 19,
      image: {
        normal: "/content/image_bg.jpg",
        double: "/content/image_bg.jpg",
      },
      title: "Unknown Pleasures",
      artist: "Joy Division",
      year: 1979,
      genreId: 4, // Post-Punk
      country: "United Kingdom",
    },
    {
      id: 20,
      image: {
        normal: "/content/image_bg.jpg",
        double: "/content/image_bg.jpg",
      },
      title: "Currents",
      artist: "Tame Impala",
      year: 2015,
      genreId: 3, // Electronic
      country: "Australia",
    },
    {
      id: 21,
      image: {
        normal: "/content/image_bg.jpg",
        double: "/content/image_bg.jpg",
      },
      title: "Random Access Memories",
      artist: "Daft Punk",
      year: 2013,
      genreId: 3, // Electronic
      country: "France",
    },
    {
      id: 22,
      image: {
        normal: "/content/image_bg.jpg",
        double: "/content/image_bg.jpg",
      },
      title: "The Suburbs",
      artist: "Arcade Fire",
      year: 2010,
      genreId: 1, // Rock
      country: "Canada",
    },
    {
      id: 23,
      image: {
        normal: "/content/image_bg.jpg",
        double: "/content/image_bg.jpg",
      },
      title: "AM",
      artist: "Arctic Monkeys",
      year: 2013,
      genreId: 1, // Rock
      country: "United Kingdom",
    },
    {
      id: 24,
      image: {
        normal: "/content/image_bg.jpg",
        double: "/content/image_bg.jpg",
      },
      title: "Is This It",
      artist: "The Strokes",
      year: 2001,
      genreId: 1, // Rock
      country: "USA",
    },
    {
      id: 25,
      image: {
        normal: "/content/image_bg.jpg",
        double: "/content/image_bg.jpg",
      },
      title: "Flying Microtonal Banana",
      artist: "King Gizzard & The Lizard Wizard",
      year: 2017,
      genreId: 1, // Rock
      country: "Australia",
    },
    {
      id: 26,
      image: {
        normal: "/content/image_bg.jpg",
        double: "/content/image_bg.jpg",
      },
      title: "Melophobia",
      artist: "Cage The Elephant",
      year: 2013,
      genreId: 1, // Rock
      country: "USA",
    },
    {
      id: 27,
      image: {
        normal: "/content/image_bg.jpg",
        double: "/content/image_bg.jpg",
      },
      title: "Melodrama",
      artist: "Lorde",
      year: 2017,
      genreId: 2, // Pop
      country: "New Zealand",
    },
    {
      id: 28,
      image: {
        normal: "/content/image_bg.jpg",
        double: "/content/image_bg.jpg",
      },
      title: "Ghost Stories",
      artist: "Coldplay",
      year: 2014,
      genreId: 2, // Pop
      country: "United Kingdom",
    },
    {
      id: 29,
      image: {
        normal: "/content/image_bg.jpg",
        double: "/content/image_bg.jpg",
      },
      title: "American Idiot",
      artist: "Green Day",
      year: 2004,
      genreId: 1, // Rock
      country: "USA",
    },
    {
      id: 30,
      image: {
        normal: "/content/image_bg.jpg",
        double: "/content/image_bg.jpg",
      },
      title: "Funeral",
      artist: "Arcade Fire",
      year: 2004,
      genreId: 1, // Rock
      country: "Canada",
    },
  ]);

  return vinylCardList.map((vinyl) => {
    const countryName =
      countries.find((country) => country.id === vinyl.country)?.name ??
      "Unknown";
    const genre =
      genreList.find((genre) => genre.id === vinyl.genreId)?.name ?? "Unknown";

    return {
      ...vinyl,
      countryName,
      genre,
    };
  });
};
