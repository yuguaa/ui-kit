import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/**
 * React 组件 playground：脱离 VitePress 的纯组件环境。
 * 组件源码直连（@/ 别名指向 packages/react/src）。
 */
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@/": fileURLToPath(new URL("../../packages/react/src/", import.meta.url)),
    },
  },
  server: {
    fs: { allow: ["../.."] },
    port: 5191,
  },
  build: {
    chunkSizeWarningLimit: Infinity,
  },
});
