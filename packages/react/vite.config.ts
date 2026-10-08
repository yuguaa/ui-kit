import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // 声明文件由 vue-tsc/tsc 先行写入 dist，vite 构建不清空输出目录
    emptyOutDir: false,
    lib: {
      entry: resolve(dirname(fileURLToPath(import.meta.url)), 'src/components/kit/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      // 运行时依赖全部外部化，由消费方提供
      external: Object.keys(pkg.dependencies),
    },
  },
})
