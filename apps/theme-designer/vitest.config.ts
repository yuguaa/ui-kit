import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

/* 预览组件只依赖 '@ui-kit/vue' 出口与相对路径，测试配置保持最小 */
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./test/setup.ts'],
    include: ['test/**/*.test.ts'],
  },
})
