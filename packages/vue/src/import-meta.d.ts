/** Nuxt 构建注入的 import.meta 变量声明（浏览器移植环境，仅类型层） */
interface ImportMeta {
  readonly client: boolean
  readonly dev: boolean
  readonly server: boolean
}
