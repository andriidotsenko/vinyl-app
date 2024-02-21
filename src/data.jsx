const randomHexColor = () => {
  const r = Math.floor(Math.random() * 128) + 128;
  const g = Math.floor(Math.random() * 128) + 128;
  const b = Math.floor(Math.random() * 128) + 128;
  const hex = ((r << 16) | (g << 8) | b).toString(16);
  return "#" + "0".repeat(6 - hex.length) + hex;
};

export const genreListData = [
  {
    id: 1,
    name: "Rock",
    backgroundColor: "#505050",
    images: ["/genrebg/rock1.jpg", "/genrebg/rock2.jpg", "/genrebg/rock3.jpg"],
  },
  {
    id: 2,
    name: "Pop",
    backgroundColor: randomHexColor(),
    images: ["/genrebg/pop1.jpg", "/genrebg/pop2.jpg", "/genrebg/pop3.jpg"],
  },
  {
    id: 3,
    name: "Electronic",
    backgroundColor: randomHexColor(),
    images: [
      "/genrebg/electronic1.jpg",
      "/genrebg/electronic2.jpg",
      "/genrebg/electronic3.jpg",
    ],
  },
  {
    id: 4,
    name: "Country",
    backgroundColor: randomHexColor(),
    images: [
      "/genrebg/country1.jpg",
      "/genrebg/country2.jpg",
      "/genrebg/country3.jpg",
    ],
  },
  {
    id: 5,
    name: "Jazz",
    backgroundColor: randomHexColor(),
    images: ["/genrebg/jazz1.jpg", "/genrebg/jazz2.jpg", "/genrebg/jazz3.jpg"],
  },
  {
    id: 6,
    name: "Classical",
    backgroundColor: randomHexColor(),
    images: [
      "/genrebg/classical1.jpg",
      "/genrebg/classical2.jpg",
      "/genrebg/classical3.jpg",
    ],
  },
  {
    id: 7,
    name: "Hip-Hop",
    backgroundColor: randomHexColor(),
    images: [
      "/genrebg/hiphop1.jpg",
      "/genrebg/hiphop2.jpg",
      "/genrebg/hiphop3.jpg",
    ],
  },
];

export const countriesListData = [
  {
    id: 1,
    name: "USA",
  },
  {
    id: 2,
    name: "United Kingdom",
  },
  {
    id: 3,
    name: "Germany",
  },
  {
    id: 4,
    name: "Sweden",
  },
  {
    id: 5,
    name: "Ukraine",
  },
];

export const decadeListData = [
  { id: 1, value: "50-60", label: "1950-60 pp." },
  { id: 2, value: "60-70", label: "1960-70 pp." },
  { id: 3, value: "70-80", label: "1970-80 pp." },
  { id: 4, value: "80-90", label: "1980-90 pp." },
  { id: 5, value: "90-00", label: "1990-00 pp." },
  { id: 6, value: "00-10", label: "2000-10 pp." },
  { id: 7, value: "10-20", label: "2010-20 pp." },
  { id: 8, value: "20-30", label: "2020-30 pp." },
];

export const cardListData = [
  {
    id: 1,
    image: {
      normal: "/content/rhcp-californication.jpg",
      double: "/content/rhcp-californication.jpg",
    },
    title: "Californication",
    artist: "Red Hot Chili Peppers",
    year: "1999",
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
    year: "2006",
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
    year: "2007",
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
    year: "2013",
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
    year: "2005",
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
    year: "2001",
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
    year: "2018",
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
    year: "2017",
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
    year: "2009",
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
    year: "2018",
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
    year: "2018",
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
    year: "2011",
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
    year: "1998",
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
    year: "1997",
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
    year: "2012",
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
    year: "2017",
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
    year: "1999",
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
    year: "2002",
    genreId: 1, // Rock
    country: "USA",
  },
];
