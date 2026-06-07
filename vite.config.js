import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: "docs",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        // GitHub Pages serves this for unmatched paths (e.g. /article1
        // refreshed directly); it boots the same SPA, which then reads
        // the URL and opens the matching project.
        notFound: resolve(__dirname, "404.html"),
      },
    },
  },
  plugins: [react()],
});
