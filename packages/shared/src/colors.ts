/**
 * 色彩派生：以单一主色 seed 为种子，通过 Ant Design 色彩算法（@ant-design/colors）
 * 生成 10 级色阶。规则与原型一致：
 * - primary-6 等于 seed 本身
 * - hover 取 primary-5，active 取 primary-7，浅色底取 primary-1
 */
import { generate } from "@ant-design/colors";

/** 语义色种子：主色可替换，其余为 antd 预设语义色 */
export const colorSeeds = {
  primary: "#1677ff",
  success: "#52c41a",
  warning: "#faad14",
  error: "#ff4d4f",
  info: "#1677ff",
  neutral: "#1f1f1f",
} as const;

export type ColorName = keyof typeof colorSeeds;

/** 色阶角色：hover / active / 浅色底 在 10 级色阶中的固定位置 */
export const paletteRoles = {
  lightBackground: 1,
  hover: 5,
  seed: 6,
  active: 7,
} as const;

/** 色阶方向：default 索引 0 最亮，dark 索引 0 最暗（反转色阶） */
export type PaletteTheme = 'default' | 'dark';

/** 由 seed 生成 10 级色阶，theme 决定色阶方向 */
export function generatePalette(seed: string, theme: PaletteTheme = 'default'): string[] {
  return generate(seed, { theme });
}

/** 生成全部语义色的 10 级色阶，theme 决定色阶方向 */
export function generateAllPalettes(primarySeed: string = colorSeeds.primary, theme: PaletteTheme = 'default'): Record<ColorName, string[]> {
  const seeds: Record<ColorName, string> = { ...colorSeeds, primary: primarySeed, info: primarySeed };
  return Object.fromEntries(
    Object.entries(seeds).map(([name, seed]) => [name, generatePalette(seed, theme)]),
  ) as Record<ColorName, string[]>;
}

/** 色阶转 CSS 变量：--primary-1 ... --primary-10 */
export function palettesToCssVars(palettes: Record<ColorName, string[]>): Record<string, string> {
  const vars: Record<string, string> = {};
  for (const [name, scale] of Object.entries(palettes)) {
    scale.forEach((hex, i) => {
      vars[`--${name}-${i + 1}`] = hex;
    });
  }
  return vars;
}
