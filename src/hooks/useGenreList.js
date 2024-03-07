import { useState } from "react";

export const useGenreList = () => {
  const randomHexColor = () => {
    const r = Math.floor(Math.random() * 128) + 128;
    const g = Math.floor(Math.random() * 128) + 128;
    const b = Math.floor(Math.random() * 128) + 128;
    const hex = ((r << 16) | (g << 8) | b).toString(16);
    return "#" + "0".repeat(6 - hex.length) + hex;
  };

  const [genreList, setGenreList] = useState([
    {
      id: 1,
      name: "Rock",
      backgroundColor: randomHexColor(),
      images: [
        "/genrebg/rock1.jpg",
        "/genrebg/rock2.jpg",
        "/genrebg/rock3.jpg",
      ],
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
      images: [
        "/genrebg/jazz1.jpg",
        "/genrebg/jazz2.jpg",
        "/genrebg/jazz3.jpg",
      ],
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
  ]);

  return genreList;
};
