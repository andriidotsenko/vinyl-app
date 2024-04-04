// import { useState } from "react";

// export const useGenreList = () => {
//   const randomHexColor = () => {
//     const r = Math.floor(Math.random() * 128) + 128;
//     const g = Math.floor(Math.random() * 128) + 128;
//     const b = Math.floor(Math.random() * 128) + 128;
//     const hex = ((r << 16) | (g << 8) | b).toString(16);
//     return "#" + "0".repeat(6 - hex.length) + hex;
//   };

//   const [genreList] = useState([
//     {
//       id: 1,
//       name: "Rock",
//       backgroundColor: randomHexColor(),
//       images: [
//         "/genrebg/image1.jpg",
//         "/genrebg/image2.jpg",
//         "/genrebg/image3.jpg",
//       ],
//     },
//     {
//       id: 2,
//       name: "Pop",
//       backgroundColor: randomHexColor(),
//       images: [
//         "/genrebg/image1.jpg",
//         "/genrebg/image2.jpg",
//         "/genrebg/image3.jpg",
//       ],
//     },
//     {
//       id: 3,
//       name: "Electronic",
//       backgroundColor: randomHexColor(),
//       images: [
//         "/genrebg/image1.jpg",
//         "/genrebg/image2.jpg",
//         "/genrebg/image3.jpg",
//       ],
//     },
//     {
//       id: 4,
//       name: "Country",
//       backgroundColor: randomHexColor(),
//       images: [
//         "/genrebg/image1.jpg",
//         "/genrebg/image2.jpg",
//         "/genrebg/image3.jpg",
//       ],
//     },
//     {
//       id: 5,
//       name: "Jazz",
//       backgroundColor: randomHexColor(),
//       images: [
//         "/genrebg/image1.jpg",
//         "/genrebg/image2.jpg",
//         "/genrebg/image3.jpg",
//       ],
//     },
//     {
//       id: 6,
//       name: "Classical",
//       backgroundColor: randomHexColor(),
//       images: [
//         "/genrebg/image1.jpg",
//         "/genrebg/image2.jpg",
//         "/genrebg/image3.jpg",
//       ],
//     },
//     {
//       id: 7,
//       name: "Hip-Hop",
//       backgroundColor: randomHexColor(),
//       images: [
//         "/genrebg/image1.jpg",
//         "/genrebg/image2.jpg",
//         "/genrebg/image3.jpg",
//       ],
//     },
//     {
//       id: 8,
//       name: "Reggae",
//       backgroundColor: randomHexColor(),
//       images: [
//         "/genrebg/image1.jpg",
//         "/genrebg/image2.jpg",
//         "/genrebg/image3.jpg",
//       ],
//     },
//     {
//       id: 9,
//       name: "Blues",
//       backgroundColor: randomHexColor(),
//       images: [
//         "/genrebg/image1.jpg",
//         "/genrebg/image2.jpg",
//         "/genrebg/image3.jpg",
//       ],
//     },
//     {
//       id: 10,
//       name: "Funk",
//       backgroundColor: randomHexColor(),
//       images: [
//         "/genrebg/image1.jpg",
//         "/genrebg/image2.jpg",
//         "/genrebg/image3.jpg",
//       ],
//     },
//     {
//       id: 11,
//       name: "Metal",
//       backgroundColor: randomHexColor(),
//       images: [
//         "/genrebg/image1.jpg",
//         "/genrebg/image2.jpg",
//         "/genrebg/image3.jpg",
//       ],
//     },
//     {
//       id: 12,
//       name: "Reggaeton",
//       backgroundColor: randomHexColor(),
//       images: [
//         "/genrebg/image1.jpg",
//         "/genrebg/image2.jpg",
//         "/genrebg/image3.jpg",
//       ],
//     },
//     {
//       id: 13,
//       name: "Soul",
//       backgroundColor: randomHexColor(),
//       images: [
//         "/genrebg/image1.jpg",
//         "/genrebg/image2.jpg",
//         "/genrebg/image3.jpg",
//       ],
//     },
//     {
//       id: 14,
//       name: "R&B",
//       backgroundColor: randomHexColor(),
//       images: [
//         "/genrebg/image1.jpg",
//         "/genrebg/image2.jpg",
//         "/genrebg/image3.jpg",
//       ],
//     },
//     {
//       id: 15,
//       name: "Reggae Fusion",
//       backgroundColor: randomHexColor(),
//       images: [
//         "/genrebg/image1.jpg",
//         "/genrebg/image2.jpg",
//         "/genrebg/image3.jpg",
//       ],
//     },
//     {
//       id: 16,
//       name: "Indie",
//       backgroundColor: randomHexColor(),
//       images: [
//         "/genrebg/image1.jpg",
//         "/genrebg/image2.jpg",
//         "/genrebg/image3.jpg",
//       ],
//     },
//     {
//       id: 17,
//       name: "Alternative",
//       backgroundColor: randomHexColor(),
//       images: [
//         "/genrebg/image1.jpg",
//         "/genrebg/image2.jpg",
//         "/genrebg/image3.jpg",
//       ],
//     },
//     {
//       id: 18,
//       name: "Punk",
//       backgroundColor: randomHexColor(),
//       images: [
//         "/genrebg/image1.jpg",
//         "/genrebg/image2.jpg",
//         "/genrebg/image3.jpg",
//       ],
//     },
//     {
//       id: 19,
//       name: "Ska",
//       backgroundColor: randomHexColor(),
//       images: [
//         "/genrebg/image1.jpg",
//         "/genrebg/image2.jpg",
//         "/genrebg/image3.jpg",
//       ],
//     },
//     {
//       id: 20,
//       name: "Gospel",
//       backgroundColor: randomHexColor(),
//       images: [
//         "/genrebg/image1.jpg",
//         "/genrebg/image2.jpg",
//         "/genrebg/image3.jpg",
//       ],
//     },
//   ]);

//   return genreList;
// };
