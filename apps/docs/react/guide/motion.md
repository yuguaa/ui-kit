# 动效规范

克制式动效：悬浮只做颜色与阴影过渡，位移仅用于弹层出入场与布局变化。

## 设计原则

| 场景 | 动效 | 说明 |
| --- | --- | --- |
| hover 悬浮 | 背景色 / 边框色 / 阴影过渡 | 无位移动画，避免悬浮时视觉跳动 |
| press 按压 | scale 0.98 | 元素形态反馈，符合物理直觉 |
| focus 聚焦 | ring 透明度过渡 | 200ms |
| enter / exit 弹层 | 淡入 + 轻微位移 | 仅出现与消失场景使用位移 |
| layout 布局 | spring 弹性过渡 | 尺寸或位置变化 |

## 动效 token

| token | 参数 | 用途 |
| --- | --- | --- |
| fast | 120ms ease-out | press / hover 即时反馈 |
| base | 200ms ease-in-out | enter / exit / 颜色变化 |
| slow | 300ms spring | layout / 展开收起 |

## 各组件动效

每个组件文档页都包含「动效」小节，说明该组件的具体动效行为。总体概览：

- 弹层类（Modal / Drawer / Slideover / Popover / Tooltip / 菜单类 / Toast）：淡入 + 缩放或滑入
- 展开类（Accordion / Collapsible）：高度动画
- 交互类（Button / Link / 表单控件）：hover 颜色过渡 + press 缩放
- 静态类（Badge / Avatar / Kbd / Separator / Container）：无动效
