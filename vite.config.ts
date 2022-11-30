import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      $src: path.resolve(__dirname, "./src"),
      $components: path.resolve(__dirname, "./src/components"),
      $types: path.resolve(__dirname, "./src/types"),
      $api: path.resolve(__dirname, "./src/api"),
      $models: path.resolve(__dirname, "./src/models"),
      $hooks: path.resolve(__dirname, "./src/hooks"),
    },
  },
});
