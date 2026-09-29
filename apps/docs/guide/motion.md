# 动效规范

动效体系全部使用 CSS keyframes 与 transition，不引入 JS 动效库。

## 设计原则

- hover / active 仅做颜色过渡（transition-colors），无位移、无缩放
- 弹层出入场使用缩放 + 淡入淡出（scale 0.95 ↔ 1），无位移动画
- 抽屉与侧滑面板按方向滑动进出场
- `prefers-reduced-motion` 下保留淡入淡出，去除位移与缩放

## 时长与场景

| 场景 | 动效 | 时长 |
| --- | --- | --- |
| Popover / Tooltip / 菜单类弹层 | scale 0.95 + 淡入淡出 | 100ms ease-out |
| Modal / CommandPalette | 遮罩淡入淡出 + 内容缩放 | 200ms ease-out |
| Drawer / Slideover | 方向滑入滑出 + 遮罩淡入淡出 | 200ms ease-out |
| Switch / Tabs 指示器 | 位移与背景过渡 | 200ms ease-out |
| hover / active | 背景色与文字色过渡 | transition-colors |

## 各组件动效

每个组件文档页都包含「动效」小节，说明该组件的具体动效行为。总体概览：

- 弹层类（Modal / Drawer / Slideover / Popover / Tooltip / 菜单类 / Toast）：缩放或滑动 + 淡入淡出
- 展开类（Accordion / Collapsible）：高度动画
- 交互类（Button / Link / 表单控件）：hover 颜色过渡，active 背景加深
- 静态类（Badge / Avatar / Kbd / Separator / Container）：无动效
