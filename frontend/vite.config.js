import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Bind to all network interfaces
    port: parseInt(import.meta.env.VITE_PORT || '5173', 10),  // Use VITE_PORT or default to 5173
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});