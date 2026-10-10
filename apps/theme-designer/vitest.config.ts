import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

/* 复用应用的 vite 配置(工作区源码别名路由),仅覆盖测试选项 */
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      setupFiles: ['./test/setup.ts'],
      include: ['test/**/*.test.ts'],
    },
  }),
)
