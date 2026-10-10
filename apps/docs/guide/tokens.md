# 设计 token

设计 token 随组件注入消费者项目 CSS（`@theme`），与 Nuxt UI 的默认主题一致，保证双框架渲染像素级相同。

## 色彩 Colors

六种语义色各含 Tailwind 色板 50~950 十一级，默认配色与 Nuxt UI 相同：

| 语义色 | Tailwind 色板 | 500 级 |
| --- | --- | --- |
| primary | green | #22c55e |
| secondary / neutral | gray | #737373 |
| success | green | #22c55e |
| info | blue | #3b82f6 |
| warning | amber | #f59e0b |
| error | red | #ef4444 |

用法与 Nuxt UI 相同：无后缀类取 500 级，透明度修饰表达浅色：

| 类 | 含义 |
| --- | --- |
| `bg-primary` / `text-primary` | 主色（500 级） |
| `bg-primary/10` | 浅色底（Nuxt soft 变体） |
| `bg-primary/15` | hover 加深 |
| `ring-primary/25` · `ring-primary/50` | subtle / outline 描边 |
| `hover:bg-primary/75` | solid hover |
| `bg-primary-50` ~ `bg-primary-950` | 显式色阶 |

shadcn 语义变量（`--background` / `--foreground` / `--muted` / `--border` / `--ring`）用于 neutral 角色与骨架样式，`--ring` 与主色一致。

## 字体 Typography

统一 Inter，阶梯 12 / 14 / 16 / 20 / 24 / 30 / 38（`--font-size-xs` 至 `--font-size-3xl`），`--font-sans` 注入全局字体栈。

## 圆角 Radius

| token | 值 | 对应 |
| --- | --- | --- |
| `--radius-sm` | 4px | kbd、tooltip |
| `--radius-md` | 6px | 按钮、输入框、选择器 |
| `--radius-lg` | 8px | 弹窗、卡片、浮层 |
| `--radius-pill` | 9999px | 徽标、头像 |

## 阴影 Shadow

Tailwind 默认三档（与 Nuxt UI 弹层一致）：

| token | 值 |
| --- | --- |
| `--shadow-sm` | 0 1px 2px 0 rgb(0 0 0 / 0.05) |
| `--shadow-md` | 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) |
| `--shadow-lg` | 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) |

## 间距 Spacing

4 / 8 / 12 / 16 / 24 / 32 / 48 七档（对应 Tailwind 内置尺度）。

## 边框 Border

1px 实线：常规 `#e5e7eb`（--border），输入类描边 `#d9dde2`（--input，对应 Nuxt accented）。

## 动效 Motion

全部使用 CSS keyframes 与 transition，与 Nuxt UI 默认一致（不引入 JS 动效库）：

| 场景 | 动效 | 时长 |
| --- | --- | --- |
| 弹层（Popover / Tooltip / 菜单类） | scale-in / scale-out | 100ms ease-out |
| 弹窗（Modal / CommandPalette） | 遮罩淡入淡出 + 内容缩放 | 200ms ease-out |
| 抽屉 / 侧滑 | 方向滑入滑出 + 遮罩淡入淡出 | 200ms ease-out |
| 控件（Switch / Tabs） | 位移与背景过渡 | 200ms ease-out |
| hover / active | 背景色与文字色过渡 | transition-colors |

动效原则：hover 与 active 只有颜色过渡，无位移与缩放；弹层只缩放与滑动；`prefers-reduced-motion` 下保留淡入淡出、去除位移与缩放。
