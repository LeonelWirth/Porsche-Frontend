import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Cargar las variables de entorno
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: env.VITE_BACKEND_URL,
          changeOrigin: true,
          secure: false, // solo si es necesario para evitar problemas con HTTPS en el entorno de desarrollo
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});