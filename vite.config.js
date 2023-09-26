import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Add the FontAwesome icons to the external array
const external = [
  "@fortawesome/fontawesome-svg-core",
  "@fortawesome/free-brands-svg-icons",
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external,
    },
  },
});
