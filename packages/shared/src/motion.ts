/**
 * 动效规范：三档动效 token，与原型「Framer Motion 动效规范」一致。
 * - fast：120ms ease-out，用于 press / hover 即时反馈
 * - base：200ms ease-in-out，用于 enter / exit / 颜色变化
 * - slow：300ms spring，用于 layout / 卡片展开
 */
export const motionTokens = {
  fast: { duration: 0.12, ease: "easeOut" },
  base: { duration: 0.2, ease: "easeInOut" },
  slow: { duration: 0.3, type: "spring" },
} as const;

export type MotionTokenName = keyof typeof motionTokens;

/** 交互动效：属性变化与说明，与原型「交互动效」表格一致 */
export const interactionMotions = {
  hover: { props: "scale 1.02 · y -2 · shadow ↑", description: "悬停轻微上浮并加深阴影" },
  press: { props: "scale 0.98", description: "按下轻微缩小，120ms" },
  focus: { props: "ring opacity 0 → 1", description: "聚焦环扩散，200ms" },
  enter: { props: "opacity 0 → 1 · y 8 → 0", description: "进入淡入上移，200ms" },
  exit: { props: "opacity 1 → 0 · y 0 → -8", description: "退出淡出上移，120ms" },
  layout: { props: "spring 位置过渡", description: "尺寸或位置变化时弹性过渡" },
} as const;

/**
 * registry 分发的运行时版本：纯常量，零依赖。
 * 各框架封装组件统一 import 这份常量，保证动效语义一致。
 */
export const kitMotion = {
  tokens: {
    fast: { duration: 0.12, ease: "easeOut" },
    base: { duration: 0.2, ease: "easeInOut" },
    slow: { duration: 0.3, type: "spring" },
  },
} as const;
