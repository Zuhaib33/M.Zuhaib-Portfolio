import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Tailwind CSS v4 is loaded as a Vite plugin.
// This means there is no tailwind.config.js and no postcss.config.js to manage.
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
