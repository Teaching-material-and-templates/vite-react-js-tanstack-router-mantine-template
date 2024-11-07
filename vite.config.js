import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/vite-react-js-tanstack-router-mantine-template/",
  plugins: [TanStackRouterVite(), react()],
});
