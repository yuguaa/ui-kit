/**
 * 动效 token（registry 分发的运行时版本）：纯常量，零依赖。
 * 与「Framer Motion 动效规范」一致：
 * - fast：120ms ease-out，press / hover 即时反馈
 * - base：200ms ease-in-out，enter / exit / 颜色变化
 * - slow：300ms spring，layout / 卡片展开
 */
export const kitMotion = {
  tokens: {
    fast: { duration: 0.12, ease: "easeOut" },
    base: { duration: 0.2, ease: "easeInOut" },
    slow: { duration: 0.3, type: "spring" },
  },
} as const

export type KitMotionToken = keyof typeof kitMotion.tokens
