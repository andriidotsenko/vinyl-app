import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react({
      jsxImportSource: "@welldone-software/why-did-you-render",
    }),
  ],
  test: { environment: "jsdom", setupFiles: ["./tests/setup.js"] },
});
