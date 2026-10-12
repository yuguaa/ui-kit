import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

/**
 * Vue 组件 playground：脱离 VitePress 的纯组件环境。
 * 组件源码直连（@/ 别名指向 packages/vue/src），用于验证组件样式与交互不受文档框架影响。
 */
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@/": fileURLToPath(new URL("../../packages/vue/src/", import.meta.url)),
    },
  },
  server: {
    fs: { allow: ["../.."] },
    port: 5190,
  },
  build: {
    chunkSizeWarningLimit: Infinity,
  },
});
