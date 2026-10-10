/**
 * 语义色板：Nuxt UI 风格。
 * 每色 50~950 十一级（Tailwind 色板），500 为主色，50 浅底、600/700 深色。
 * 组件使用 50 / 500 / 600 等字面量类名，透明度修饰（/10 /15 /25 /50 /75）与 Nuxt UI 一致。
 * 默认配色与 Nuxt UI 相同：primary=green、success=green、info=blue、warning=amber、error=red、neutral=gray。
 */

/** Tailwind 色板步进 */
export const shadeSteps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
export type Shade = (typeof shadeSteps)[number];

/** 语义色名 */
export type ColorName = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral';

/** Tailwind green 色板（Nuxt UI 默认主色） */
const green: string[] = ['#f0fdf4', '#dcfce7', '#bbf7d0', '#86efac', '#4ade80', '#22c55e', '#16a34a', '#15803d', '#166534', '#14532d', '#052e16'];
/** Tailwind blue 色板 */
const blue: string[] = ['#eff6ff', '#dbeafe', '#bfdbfe', '#93c5fd', '#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', '#1e3a8a', '#172554'];
/** Tailwind amber 色板 */
const amber: string[] = ['#fffbeb', '#fef3c7', '#fde68a', '#fcd34d', '#fbbf24', '#f59e0b', '#d97706', '#b45309', '#92400e', '#78350f', '#451a03'];
/** Tailwind red 色板 */
const red: string[] = ['#fef2f2', '#fee2e2', '#fecaca', '#fca5a5', '#f87171', '#ef4444', '#dc2626', '#b91c1c', '#991b1b', '#7f1d1d', '#450a0a'];
/** Tailwind v4 neutral 色板（Nuxt UI 4 的中性灰） */
const neutral: string[] = ['#fafafa', '#f5f5f5', '#e5e5e5', '#d4d4d4', '#a3a3a3', '#737373', '#525252', '#404040', '#262626', '#171717', '#0a0a0a'];

/** 其余 Tailwind 色板（主题设计器主色可选） */
export const tailwindPalettes: Record<string, string[]> = {
  green,
  blue,
  amber,
  red,
  gray: neutral,
  slate: ['#f8fafc', '#f1f5f9', '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b', '#475569', '#334155', '#1e293b', '#0f172a', '#020617'],
  indigo: ['#eef2ff', '#e0e7ff', '#c7d2fe', '#a5b4fc', '#818cf8', '#6366f1', '#4f46e5', '#4338ca', '#3730a3', '#312e81', '#1e1b4b'],
  violet: ['#f5f3ff', '#ede9fe', '#ddd6fe', '#c4b5fd', '#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6', '#4c1d95', '#2e1065'],
  purple: ['#faf5ff', '#f3e8ff', '#e9d5ff', '#d8b4fe', '#c084fc', '#a855f7', '#9333ea', '#7e22ce', '#6b21a8', '#581c87', '#3b0764'],
  pink: ['#fdf2f8', '#fce7f3', '#fbcfe8', '#f9a8d4', '#f472b6', '#ec4899', '#db2777', '#be185d', '#9d174d', '#831843', '#500724'],
  orange: ['#fff7ed', '#ffedd5', '#fed7aa', '#fdba74', '#fb923c', '#f97316', '#ea580c', '#c2410c', '#9a3412', '#7c2d12', '#431407'],
  teal: ['#f0fdfa', '#ccfbf1', '#99f6e4', '#5eead4', '#2dd4bf', '#14b8a6', '#0d9488', '#0f766e', '#115e59', '#134e4a', '#042f2e'],
  cyan: ['#ecfeff', '#cffafe', '#a5f3fc', '#67e8f9', '#22d3ee', '#06b6d4', '#0891b2', '#0e7490', '#155e75', '#164e63', '#083344'],
  sky: ['#f0f9ff', '#e0f2fe', '#bae6fd', '#7dd3fc', '#38bdf8', '#0ea5e9', '#0284c7', '#0369a1', '#075985', '#0c4a6e', '#082f49'],
  emerald: ['#ecfdf5', '#d1fae5', '#a7f3d0', '#6ee7b7', '#34d399', '#10b981', '#059669', '#047857', '#065f46', '#064e3b', '#022c22'],
  lime: ['#f7fee7', '#ecfccb', '#d9f99d', '#bef264', '#a3e635', '#84cc16', '#65a30d', '#4d7c0f', '#3f6212', '#365314', '#1a2e05'],
  yellow: ['#fefce8', '#fef9c3', '#fef08a', '#fde047', '#facc15', '#eab308', '#ca8a04', '#a16207', '#854d0e', '#713f12', '#422006'],
  rose: ['#fff1f2', '#ffe4e6', '#fecdd3', '#fda4af', '#fb7185', '#f43f5e', '#e11d48', '#be123c', '#9f1239', '#881337', '#4c0519'],
  fuchsia: ['#fdf4ff', '#fae8ff', '#f5d0fe', '#f0abfc', '#e879f9', '#d946ef', '#c026d3', '#a21caf', '#86198f', '#701a75', '#4a044e'],
};

/** 各语义色色板（50 起，与 shadeSteps 一一对应） */
export const colorPalettes: Record<ColorName, string[]> = {
  primary: green,
  secondary: neutral,
  success: green,
  info: blue,
  warning: amber,
  error: red,
  neutral,
};

/** 色阶角色（Nuxt UI 用法）：浅色底 / hover 描边 / 主色 / 深色文字 */
export const paletteRoles = {
  lightBackground: 50,
  hover: 400,
  seed: 500,
  active: 600,
} as const;

export const colorSeeds = {
  primary: '#22c55e',
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
  neutral: '#737373',
} as const;

/** 取某色某级色值 */
export function getShade(name: ColorName, shade: Shade): string {
  return colorPalettes[name][shadeSteps.indexOf(shade)] ?? colorPalettes[name][0]!;
}

/** 生成全部语义色 50~950 色阶（theme 参数保留兼容，色板为固定 Tailwind 色板） */
export function generateAllPalettes(_seed?: string, _theme?: 'default' | 'dark'): Record<ColorName, string[]> {
  return { ...colorPalettes };
}

/** 由 seed 生成单色 10 级色阶（兼容旧接口，返回 50~950 的前 10 级） */
export function generatePalette(_seed: string, _theme?: 'default' | 'dark'): string[] {
  return colorPalettes.primary.slice(0, 10);
}

/** 中性色板：与 colorPalettes.neutral 一致（兼容旧接口） */
export const neutralPalette = neutral;

/** 色阶转 CSS 变量：键不带 -- 前缀（primary-50 / color-primary-50 等），由调用方决定是否加前缀 */
export function palettesToCssVars(palettes: Record<string, string[]>): Record<string, string> {
  const vars: Record<string, string> = {};
  for (const [name, scale] of Object.entries(palettes)) {
    shadeSteps.forEach((shade, i) => {
      const value = scale[i] ?? scale[0]!;
      vars[`${name}-${shade}`] = value;
      vars[`color-${name}-${shade}`] = `var(--${name}-${shade})`;
    });
    // 无后缀别名：bg-primary 等价 bg-primary-500（Nuxt UI 写法）
    vars[`color-${name}`] = `var(--${name}-500)`;
  }
  return vars;
}
