---
title: InputRating 评分
description: 以星标形式进行评分输入
---

# InputRating 评分

以星标形式进行评分输入，支持半星、自定义图标、五档尺寸、七种语义色与横竖方向。


## 基础用法

`value` 绑定评分值，配合 `onChange` 受控使用，也可用 `defaultValue` 非受控。

<DemoPreview file="demos/react/input-rating-basic.tsx" react title="基础用法" description="value + onChange 受控评分" />

## 语义色与方向

`color` 提供七种语义色，`orientation` 支持横向与纵向排列。

<DemoPreview file="demos/react/input-rating-colors.tsx" react title="语义色与方向" description="color 控制填充星颜色，orientation 控制排列方向" />

## 尺寸与状态

`size` 控制星星大小，共 xs → xl 五档；`readonly` 仅作展示，`disabled` 禁用交互。

<DemoPreview file="demos/react/input-rating-sizes.tsx" react title="五档尺寸与状态" description="size 五档对比，readonly / disabled 状态" />

## 图标、插槽与 ui

`icon` / `emptyIcon` 接受 XIcon 名称或自定义组件；`item` 渲染回调自定义每一项；`ui` 按主题插槽覆盖类名。

<DemoPreview file="demos/react/input-rating-custom.tsx" react title="自定义图标与 ui" description="icon / emptyIcon / item / ui 主题插槽" />

## 安装

```bash
npx shadcn@latest add @ui-kit/x-input-rating
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value / defaultValue | number | 0 | 评分值 |
| max | number | 5 | 最大分值 |
| allowHalf | boolean | false | 允许半星 |
| disabled | boolean | false | 是否禁用 |
| readonly | boolean | false | 只读展示，禁止点击与键盘操作 |
| size | xs · sm · md · lg · xl | md | 星星尺寸 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 组件颜色（填充星与聚焦描边） |
| orientation | horizontal · vertical | horizontal | 排列方向 |
| icon | XInputRatingIcon | - | 高亮星图标（XIcon 名称或组件），缺省使用空星图标 |
| emptyIcon | XInputRatingIcon | - | 空星图标（XIcon 名称或组件），缺省使用 icon |
| render | ReactElement | - | 渲染为指定元素 |
| id | string | - | 根元素 id |
| item | (state) => ReactNode | - | 自定义单项渲染（{ index, filled, half }） |
| onChange | (value) => void | - | 评分变化回调 |
| ui | XInputRatingUi | - | 主题插槽类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 评分根容器 |
| item | 单个评分项（可交互区域） |
| indicator | 高亮层容器（半星时裁剪） |
| icon | 高亮星图标 |
| emptyIcon | 空星图标 |

## 动效

- 星标：hover 放大（scale 110%）与聚焦描边过渡
- 无位移动画

## 设计规格

### 主题 token

| 类别 | 类名 | 对应 Vue 端 token |
| --- | --- | --- |
| 背景 | 无（星形图标承载颜色） | 相同 |
| 文字 | 高亮星 `fill-{color} text-{color}` | `data-[state=active]:text-{color}` |
| 文字 | 空星 `text-muted-foreground` | `text-muted` |
| 描边 | 聚焦：`outline-{color}/25` + `focus-visible:outline-3` | 相同规则 |
| 圆角 | `rounded-xs`（2px） | Vue 端为 `rounded-sm`（4px） |
| 阴影 | 无 | - |

### 变体

| 变体 | token 组合 |
| --- | --- |
| readonly | `cursor-default`，item `tabIndex=-1`，root `aria-readonly` |
| disabled | root `pointer-events-none opacity-60`（Vue 端为 opacity-75） |

可交互时 item `hover:scale-110`；半星以 `clip-path: inset(0 50% 0 0)` 裁剪高亮层实现。

### 交互

| 类别 | 说明 |
| --- | --- |
| 键盘 | 每个星为独立 button，Tab 逐个聚焦，Enter / Space 触发评分；无方向键调整语义 |
| ARIA | root `role=radiogroup` + `aria-label="rating"`；每个星为 button + `aria-label="{N} 星"` |
| 动效 | item `transition`；hover 放大 `scale-110` |

**与 Vue 端差异**：React 端自实现评分交互（button 组），键盘模型与 ARIA 角色（radiogroup）与 Vue 端（reka-ui Rating，role=slider + 方向键）不同。
