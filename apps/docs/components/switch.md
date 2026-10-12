---
title: Switch 开关
description: 表示两种状态之间的切换，支持滑块内图标、语义色、两档尺寸、加载态与说明文字
---

# Switch 开关

表示两种状态之间的切换，支持滑块内图标、语义色、两档尺寸、加载态与说明文字。


<DemoPreview file="demos/vue/switch-basic-demo.vue" title="开关 / 文字 / 尺寸 / 语义色" description="v-model / checkedChildren 插槽 / size / disabled / color" />

## 加载态、说明文字与必选

loading 阻止交互并显示旋转图标，description 展示 label 下方的辅助说明文字。

<DemoPreview file="demos/vue/switch-loading-demo.vue" title="加载态与说明" description="loading / loadingIcon / description / required" />

## 滑块内图标与聚焦环

`checkedIcon` / `uncheckedIcon` 在滑块内按状态显示图标；`highlight` 常显聚焦环。

<DemoPreview file="demos/vue/switch-icons.vue" title="滑块内图标与 highlight" description="checkedIcon / uncheckedIcon / highlight / color" />

## ui 插槽

`ui` 按主题插槽覆盖类名。

<DemoPreview file="demos/vue/switch-ui-custom.vue" title="ui 插槽自定义" description="ui 键：root / base / container / thumb / icon / wrapper / label / description" />

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-switch
```

## API

<!--@include: ./api/switch.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根容器 |
| base | 开关控件 |
| container | 控件包裹层 |
| thumb | 滑块 |
| icon | 滑块内图标 |
| wrapper | label 与 description 容器 |
| label | 关联文字 |
| description | 辅助说明 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| label | 关联文字插槽，props 含 label |
| description | 辅助说明插槽，props 含 description |
| checkedChildren | 开启状态文字插槽 |
| unCheckedChildren | 关闭状态文字插槽 |

## 事件

| 名称 | 说明 |
| --- | --- |
| update:modelValue | 选中状态变化 |
| change | 状态切换时触发，event.target.value 为当前值 |

## 动效

- 滑块：位移过渡 + 背景色过渡（200ms ease-out）
- loading：图标旋转

## 设计规格

### 主题 token

| 类别 | 类名 | 值（亮色 / 暗色） |
| --- | --- | --- |
| 背景 | 轨道未选中 `data-[state=unchecked]:bg-accented` | #e5e5e5 / #404040 |
| 背景 | 轨道选中 `data-[state=checked]:bg-{color}` | primary 为 #22c55e；neutral 为 `bg-inverted` #171717 / #ffffff |
| 背景 | 滑块 `thumb: bg-default` | #ffffff / #171717 |
| 文字 | `label: text-default` | #404040 / #e5e5e5 |
| 文字 | `description: text-muted` | #737373 / #a3a3a3 |
| 文字 | 图标：选中 `text-{color}`，未选中 `text-dimmed` | primary #22c55e / #a3a3a3 |
| 描边 | 轨道 `border-2 border-transparent`，聚焦 `outline-{color}/25` + `focus-visible:outline-3` | primary 25% 透明度 |
| 圆角 | 轨道与滑块 `rounded-full` | 圆形 |
| 阴影 | 滑块 `shadow-lg` | Tailwind 默认 lg 阶梯 |

### 变体

| 变体 | token 组合 |
| --- | --- |
| checked | 轨道 `bg-{color}`，滑块位移（`translate-x` 按尺寸 3 ~ 5），选中图标 `opacity-100` |
| unchecked | 轨道 `bg-accented`，滑块 `translate-x-0`，未选中图标 `opacity-100` |
| loading | 图标 `animate-spin` |

`highlight: true` 时轨道叠加 `ring ring-{color}`（neutral 为 `ring-inverted`）。

### 交互

| 类别 | 说明 |
| --- | --- |
| 键盘 | reka-ui SwitchRoot 语义：Tab 聚焦，Space / Enter 切换 |
| ARIA | `role=switch` + `aria-checked`；disabled 映射 `aria-disabled`；loading 时组件将控件置为 disabled |
| 动效 | 轨道 `transition-[background]` 200ms ease-out；滑块 `transition-transform` 200ms ease-out（`motion-reduce:transition-none`）；图标 `transition-[color,opacity]` 200ms |

disabled 时 root `opacity-75`；尺寸 xs / sm / md / lg / xl 五档。
