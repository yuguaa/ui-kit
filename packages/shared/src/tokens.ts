/**
 * 设计 token 常量：字体阶梯、圆角、阴影、间距、边框。
 * 数值与原型「设计规范 Design Tokens」完全一致。
 */

/** 字体阶梯：12px → 38px，统一 Inter */
export const fontSizeScale = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
  "2xl": 30,
  "3xl": 38,
} as const;

export const fontFamily = "Inter";

/** 圆角规范：与 Nuxt UI 一致（rounded-sm / md / lg 对应 4 / 6 / 8px），另有胶囊圆角 */
export const radiusScale = {
  sm: "4px",
  md: "6px",
  lg: "8px",
  pill: "9999px",
} as const;

/** 阴影层级：Tailwind 默认 sm / md / lg 三档，与 Nuxt UI 弹窗一致 */
export const shadowScale = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
} as const;

/** 间距尺度：4px → 48px 共七档 */
export const spacingScale = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 24,
  6: 32,
  7: 48,
} as const;

/** 边框规范：1px 实线，常规与浅色两档 */
export const borderTokens = {
  color: "#e5e7eb",
  light: "#f0f0f0",
  width: 1,
} as const;

/** 将 token 常量展开为 CSS 变量（--font-size-xs 等），供 registry cssVars 注入 */
export function tokensToCssVars(): Record<string, string> {
  const vars: Record<string, string> = {};
  for (const [key, value] of Object.entries(fontSizeScale)) {
    vars[`--font-size-${key}`] = `${value}px`;
  }
  for (const [key, value] of Object.entries(radiusScale)) {
    vars[`--radius-${key}`] = value;
  }
  for (const [key, value] of Object.entries(shadowScale)) {
    vars[`--shadow-${key}`] = value;
  }
  return vars;
}
