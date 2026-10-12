# 设计 token

设计 token 体系完整复刻 Nuxt UI（`src/runtime/index.css` + `templates.ts` 的映射），随组件注入消费者项目 CSS，保证双框架渲染像素级相同。

<script setup>
import TokenPalette from '@demos/vue/token-palette.vue'
import tokenPaletteRaw from '@demos/vue/token-palette.vue.code.txt?raw'
</script>

## 色彩 Colors

<DemoBlock title="语义色色板" description="六种语义色 50~950 十一级，无后缀取 500 级；/10 soft、/15 hover、/25 subtle 描边、/75 solid hover" :code="tokenPaletteRaw">
  <TokenPalette />
</DemoBlock>

### 语义色

六种语义色各含 Tailwind 色板 50~950 十一级，默认配色与 Nuxt UI 相同：

| 语义色 | Tailwind 色板 | 500 级 | 400 级（dark 强调） |
| --- | --- | --- | --- |
| primary | green | #22c55e | #4ade80 |
| secondary | gray | #737373 | #a3a3a3 |
| success | green | #22c55e | #4ade80 |
| info | blue | #3b82f6 | #60a5fa |
| warning | amber | #f59e0b | #fbbf24 |
| error | red | #ef4444 | #f87171 |

用法与 Nuxt UI 相同：无后缀类取 500 级，透明度修饰表达浅色：

| 类 | 含义 |
| --- | --- |
| `bg-primary` / `text-primary` | 主色（500 级） |
| `bg-primary/10` | 浅色底（soft 变体） |
| `bg-primary/15` | hover 加深 |
| `ring-primary/25` · `ring-primary/50` | subtle / outline 描边 |
| `hover:bg-primary/75` | solid hover |
| `bg-primary-50` ~ `bg-primary-950` | 显式色阶 |

### 中性色 token（Nuxt UI index.css 的移植对应）

Nuxt UI 用**前缀分离**的 token 体系：同一个 `default` 在 `bg-` 与 `text-` 前缀下映射不同变量。本库完整复刻：

| 类前缀 | 亮色值 | 暗色值 | 对应 Nuxt 变量 |
| --- | --- | --- | --- |
| `text-dimmed` | #a3a3a3 | #a3a3a3 | --ui-text-dimmed |
| `text-muted` | #737373 | #a3a3a3 | --ui-text-muted |
| `text-toned` | #525252 | #d4d4d4 | --ui-text-toned |
| `text-default` | #404040 | #e5e5e5 | --ui-text |
| `text-highlighted` | #171717 | #ffffff | --ui-text-highlighted |
| `text-inverted` | #ffffff | #171717 | --ui-text-inverted |
| `bg-default` | #ffffff | #171717 | --ui-bg |
| `bg-muted` | #fafafa | #262626 | --ui-bg-muted |
| `bg-elevated` | #f5f5f5 | #262626 | --ui-bg-elevated |
| `bg-accented` | #e5e5e5 | #404040 | --ui-bg-accented |
| `bg-inverted` | #171717 | #ffffff | --ui-bg-inverted |
| `border-default` | #e5e5e5 | #262626 | --ui-border |
| `border-muted` | #e5e5e5 | #404040 | --ui-border-muted |
| `border-accented` | #d4d4d4 | #404040 | --ui-border-accented |
| `border-inverted` | #171717 | #ffffff | --ui-border-inverted |

`ring-`、`ring-offset-`、`divide-`、`outline-` 前缀的 `default / muted / accented / inverted` 与 border 同值；`stroke-` / `fill-` 的 `bg / default / inverted` 分别取 bg-default / border-default / border-inverted。

## 圆角 Radius

| token | 值 | 对应 |
| --- | --- | --- |
| `--radius-xs` | 2px | 极小元素 |
| `--radius-sm` | 4px | kbd、tooltip |
| `--radius-md` | 6px | 按钮、输入框、选择器 |
| `--radius-lg` | 8px | 弹窗、卡片 |
| `--radius-xl` | 12px | 大面板 |
| `--radius-2xl` | 16px | 抽屉级 |
| `--radius-3xl` | 24px | 全宽面板 |

基值 `--ui-radius: 0.25rem`，各阶为其倍数（0.5× / 1× / 1.5× / 2× / 3× / 4× / 6×）。

## 尺寸与布局

| token | 值 | 说明 |
| --- | --- | --- |
| `--ui-header-height` | 4rem | 页面头部高度基准 |
| `--ui-container` | 80rem | 内容最大宽度 |

## 动效 Motion

| 动画 | 用途 |
| --- | --- |
| `accordion-up` / `accordion-down` | 手风琴展开收起（高度过渡） |
| `collapsible-up` / `collapsible-down` | 折叠面板展开收起 |
| `scale-in` / `scale-out` | 浮层（dropdown / select / popover）打开关闭 |
| `fade-in` / `fade-out` | 遮罩与浮层淡入淡出 |
| `toast-in` / `toast-out` | 通知进入退出 |
| `spin` | 加载图标旋转 |

过渡与动效遵循 Nuxt UI：仅在 `theme.transitions` 开启时输出（默认开启）。

## 字体 Typography

统一 Inter，阶梯 12 / 14 / 16 / 20 / 24 / 30 / 38（`--font-size-xs` 至 `--font-size-3xl`），`--font-sans` 注入全局字体栈。输入类控件在 md 及以上尺寸保持 16px（防移动端缩放）。

## 阴影 Shadow

阴影沿用 Tailwind 默认阶梯（`shadow-sm` / `shadow` / `shadow-lg` 等），弹窗与浮层使用 `shadow-lg`，与 Nuxt UI 一致。
