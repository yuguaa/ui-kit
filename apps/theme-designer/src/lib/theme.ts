import { colorPalettes, palettesToCssVars, tailwindPalettes } from '@ui-kit/shared/colors'

/** 语义色展示顺序（primary 在前） */
export const semanticColorNames = ['primary', 'success', 'warning', 'error', 'info', 'neutral'] as const

/** 预设主色（Tailwind 色名，与 Nuxt UI 主题色选择一致） */
export const presetColorNames = ['green', 'blue', 'indigo', 'violet', 'purple', 'pink', 'red', 'orange', 'amber', 'teal', 'cyan'] as const

/** 由主色名生成全部语义色 50~950 色阶（primary 替换为所选 Tailwind 色板） */
export function buildPalettes(primaryName: string): Record<string, string[]> {
  return {
    ...colorPalettes,
    primary: tailwindPalettes[primaryName] ?? colorPalettes.primary,
  }
}

/** 色阶转 CSS 变量对象（--primary-50 ... --neutral-950 与 --color-* 别名） */
export function buildThemeVars(primaryName: string): Record<string, string> {
  return palettesToCssVars(buildPalettes(primaryName))
}

/** 色阶角色说明（Nuxt UI 用法） */
export const roleLabels: Record<number, string> = {
  50: '浅色底',
  400: 'hover',
  500: '主色',
  600: '深色',
}

/** 按语义色分组格式化 CSS 变量文本，供复制 */
export function formatVarsText(vars: Record<string, string>): string {
  return semanticColorNames
    .map((name) => {
      const lines = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
        (shade) => `  --${name}-${shade}: ${vars[`${name}-${shade}`]};`,
      )
      return `/* ${name} */\n${lines.join('\n')}`
    })
    .join('\n\n')
}
