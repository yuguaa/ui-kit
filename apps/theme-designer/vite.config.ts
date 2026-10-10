import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import { realpathSync, statSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'

/**
 * 工作区源码别名:三个工作区(应用自身与两个组件包)都用 '@/...' 引用各自文件,
 * vite 的 alias 无法按 importer 区分,因此在 resolveId 阶段按 importer 位置分派。
 * 包名导入(@ui-kit/*)同样直连源码:本仓库的分发走 shadcn registry,不再构建包产物。
 */
function workspaceSourceAlias(): Plugin {
  const packageRoots = [
    { marker: '/packages/vue/', root: fileURLToPath(new URL('../../packages/vue/src', import.meta.url)) },
    { marker: '/packages/react/', root: fileURLToPath(new URL('../../packages/react/src', import.meta.url)) },
    { marker: '/apps/theme-designer/', root: fileURLToPath(new URL('./src', import.meta.url)) },
  ]
  /* 包名导入的源码子路径直连 */
  const sourcePackages = [
    { specifier: '@ui-kit/vue/', root: fileURLToPath(new URL('../../packages/vue', import.meta.url)) },
    { specifier: '@ui-kit/react/', root: fileURLToPath(new URL('../../packages/react', import.meta.url)) },
    { specifier: '@ui-kit/shared/', root: fileURLToPath(new URL('../../packages/shared/src', import.meta.url)) },
  ]
  const extensions = ['', '.ts', '.vue', '.tsx', '/index.ts', '/index.vue', '/index.tsx']

  const resolveFile = (base: string, rel: string) => {
    for (const ext of extensions) {
      const candidate = resolve(base, `${rel}${ext}`)
      try {
        if (statSync(candidate).isFile()) return candidate
      } catch {
        /* 候选路径不存在,继续尝试下一个扩展名 */
      }
    }
    return null
  }

  const realImporter = (importer: string) => {
    try {
      return realpathSync(importer.split('?')[0] ?? importer)
    } catch {
      return importer
    }
  }

  return {
    name: 'ui-kit-workspace-source-alias',
    enforce: 'pre',
    resolveId(source, importer) {
      if (!importer) return null

      for (const { specifier, root } of sourcePackages) {
        if (!source.startsWith(specifier)) continue
        return resolveFile(root, source.slice(specifier.length))
      }

      if (!source.startsWith('@/')) return null
      const real = realImporter(importer)
      for (const { marker, root } of packageRoots) {
        if (!real.includes(marker)) continue
        return resolveFile(root, source.slice(2))
      }
      return null
    },
  }
}

export default defineConfig({
  plugins: [vue(), react(), tailwindcss(), workspaceSourceAlias()],
})
