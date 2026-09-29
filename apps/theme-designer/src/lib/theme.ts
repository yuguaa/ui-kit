import { generateAllPalettes, paletteRoles, palettesToCssVars, type ColorName } from '@ui-kit/shared/colors'

/** 语义色展示顺序（primary 在前） */
export const semanticColorNames: ColorName[] = ['primary', 'success', 'warning', 'error', 'info', 'neutral']

/** 预设主色 seed */
export const presetSeeds = ['#1677ff', '#13c2c2', '#52c41a', '#722ed1', '#fa8c16', '#eb2f96']

/** hex 颜色格式校验 */
export const hexColorPattern = /^#[0-9a-fA-F]{6}$/

/** 由主色 seed 生成全部语义色 10 级色阶 */
export function buildPalettes(seed: string): Record<ColorName, string[]> {
  return generateAllPalettes(seed)
}

/** 色阶转 CSS 变量对象（--primary-1 ... --neutral-10） */
export function buildThemeVars(seed: string): Record<string, string> {
  return palettesToCssVars(buildPalettes(seed))
}

/** 色阶角色的固定用途说明 */
export const roleLabels: Record<number, string> = {
  [paletteRoles.lightBackground]: '浅色底',
  [paletteRoles.hover]: 'hover',
  [paletteRoles.seed]: 'seed',
  [paletteRoles.active]: 'active',
}

/** 按语义色分组格式化 CSS 变量文本，供复制 */
export function formatVarsText(vars: Record<string, string>): string {
  return semanticColorNames
    .map((name) => {
      const lines = Array.from(
        { length: 10 },
        (_, i) => `  --${name}-${i + 1}: ${vars[`--${name}-${i + 1}`]};`,
      )
      return `/* ${name} */\n${lines.join('\n')}`
    })
    .join('\n\n')
}
