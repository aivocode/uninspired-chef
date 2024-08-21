import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Allows access from network
    port: parseInt(import.meta.env.VITE_FRONTEND_PORT || '5173', 10),  // Use the environment variable or fallback to 5173
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});