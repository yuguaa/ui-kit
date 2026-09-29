# 设计 token

六类设计 token，随组件注入消费者项目 CSS（`@theme`）。

## 色彩 Colors

shadcn 语义变量 + 色阶派生。主色 seed `#1677ff`，通过 `@ant-design/colors` 生成 10 级色阶：

| 变量 | 值 |
| --- | --- |
| `--primary` / `--ring` | #1677ff |
| `--background` | #ffffff |
| `--foreground` | #1f1f1f |
| `--secondary` / `--muted` | #f5f5f5 |
| `--muted-foreground` | #8c8c8c |
| `--accent` | #e6f4ff（primary-1） |
| `--accent-foreground` | #1677ff |
| `--destructive` | #ff4d4f |
| `--border` / `--input` | #e5e7eb |

色阶角色：hover 取第 5 级、active 取第 7 级、浅色底取第 1 级。

## 字体 Typography

统一 Inter，阶梯 12 / 14 / 16 / 20 / 24 / 30 / 38（`--font-size-xs` 至 `--font-size-3xl`）。

## 圆角 Radius

| token | 值 |
| --- | --- |
| `--radius-sm` | 6px |
| `--radius-md` | 8px |
| `--radius-lg` | 12px |
| `--radius-pill` | 9999px |

## 阴影 Shadow

| token | blur |
| --- | --- |
| `--shadow-sm` | 2 |
| `--shadow-md` | 12 |
| `--shadow-lg` | 24 |

## 间距 Spacing

4 / 8 / 12 / 16 / 24 / 32 / 48 七档（对应 Tailwind 内置尺度）。

## 边框 Border

1px 实线，常规 `#e5e7eb`，浅色 `#f0f0f0`。

## 动效 Motion

全部使用 CSS keyframes 与 transition（不引入 JS 动效库）：

| 场景 | 动效 | 时长 |
| --- | --- | --- |
| 弹层（Popover / Tooltip / 菜单类） | scale 0.95 + 淡入淡出 | 100ms ease-out |
| 弹窗（Modal / CommandPalette） | 遮罩淡入淡出 + 内容缩放 | 200ms ease-out |
| 抽屉 / 侧滑 | 方向滑入滑出 + 遮罩淡入淡出 | 200ms ease-out |
| 控件（Switch / Tabs） | 位移与背景过渡 | 200ms ease-out |
| hover / active | 背景色与文字色过渡 | transition-colors |

动效原则：hover 与 active 只有颜色过渡，无位移与缩放；弹层只缩放与滑动；`prefers-reduced-motion` 下保留淡入淡出、去除位移与缩放。
