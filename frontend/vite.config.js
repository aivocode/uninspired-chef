import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Bind to all network interfaces
    port: 5173,  // Use the default Vite port
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});