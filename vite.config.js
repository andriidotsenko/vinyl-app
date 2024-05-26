import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import packageJson from "./package.json";

const splitHomepage = packageJson.homepage.split("/");
const baseUrl = splitHomepage[splitHomepage.length - 2];
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    assetsDir:
      // eslint-disable-next-line no-undef
      process.env.NODE_ENV === "production" ? baseUrl : "./",
  },
  plugins: [
    react({
      jsxImportSource: "@welldone-software/why-did-you-render",
    }),
  ],
  test: { environment: "jsdom", setupFiles: ["./tests/setup.js"] },
});
