/**
 * 动效规范：参考 Nuxt UI v4，全部使用 CSS keyframes / transition，不引入 JS 动效库。
 * - 弹层出入场：scale-in / fade-in（100ms popover 类，200ms modal / slideover）
 * - hover / active：仅颜色过渡（transition-colors），无位移、无缩放
 * - 展开收起：高度动画（accordion / collapsible）
 * - prefers-reduced-motion：保留淡入淡出，去除位移与缩放
 */

/** CSS 动效时长（毫秒） */
export const motionDurations = {
  /** popover / tooltip / dropdown 类弹层 */
  overlay: 100,
  /** modal / slideover / drawer */
  dialog: 200,
  /** switch / tabs 指示器 */
  control: 200,
} as const;

/** 弹层出入场动画：opacity + scale 0.95 → 1，无位移动画 */
export const overlayMotions = {
  enter: "animate-[scale-in_100ms_ease-out]",
  exit: "animate-[scale-out_100ms_ease-out]",
} as const;

/** 模态类（modal）动画：遮罩淡入淡出，内容缩放 */
export const dialogMotions = {
  overlayEnter: "animate-[fade-in_200ms_ease-out]",
  overlayExit: "animate-[fade-out_200ms_ease-out]",
  contentEnter: "animate-[scale-in_200ms_ease-out]",
  contentExit: "animate-[scale-out_200ms_ease-out]",
} as const;

/** 交互动效：属性变化与说明（Nuxt UI 模式——hover 只有颜色过渡） */
export const interactionMotions = {
  hover: { props: "background / text 颜色过渡", description: "悬浮时颜色过渡，无位移与缩放" },
  active: { props: "background 加深", description: "按下时背景色加深（bg 变体），无缩放" },
  focus: { props: "ring / outline 过渡", description: "聚焦环与轮廓过渡，200ms" },
  enter: { props: "opacity 0 → 1 · scale 0.95 → 1", description: "弹层进入淡入缩放，100ms / 200ms" },
  exit: { props: "opacity 1 → 0 · scale 1 → 0.95", description: "弹层退出淡出缩放" },
  slide: { props: "translate 滑入滑出", description: "抽屉与侧滑面板按方向滑动，200ms" },
  collapse: { props: "height 过渡", description: "手风琴与折叠展开收起高度动画" },
} as const;

/**
 * registry 分发的运行时版本：纯常量，零依赖。
 * 供组件引用动效 class 与时长，保证双框架动效语义一致。
 */
export const kitMotion = {
  durations: motionDurations,
  overlay: overlayMotions,
  dialog: dialogMotions,
} as const;
