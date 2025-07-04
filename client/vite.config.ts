import { defineConfig, type UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    test: {
        globals: true,
        ui: true,
        environment: "jsdom",
        setupFiles: "./src/setupTests.ts",
    },
} as UserConfig);
