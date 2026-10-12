---
title: Checkbox 多选框
description: 在一组可选项中进行多项选择
---

# Checkbox 多选框

在一组可选项中进行多项选择，支持半选状态、说明文字、语义色与三档尺寸。

<script setup>
import CheckboxBasicDemo from '@demos/react/checkbox-basic-demo'
import checkboxBasicDemoRaw from '@demos/react/checkbox-basic-demo.tsx.code.txt?raw'
import CheckboxDescriptionDemo from '@demos/react/checkbox-description'
import checkboxDescriptionRaw from '@demos/react/checkbox-description.tsx.code.txt?raw'
import CheckboxColorDemo from '@demos/react/checkbox-color'
import checkboxColorRaw from '@demos/react/checkbox-color.tsx.code.txt?raw'
import CheckboxSizeDemo from '@demos/react/checkbox-size'
import checkboxSizeRaw from '@demos/react/checkbox-size.tsx.code.txt?raw'
import CheckboxVariantDemo from '@demos/react/checkbox-variant'
import checkboxVariantRaw from '@demos/react/checkbox-variant.tsx.code.txt?raw'
import CheckboxIconDemo from '@demos/react/checkbox-icon'
import checkboxIconRaw from '@demos/react/checkbox-icon.tsx.code.txt?raw'
import CheckboxUiCustomDemo from '@demos/react/checkbox-ui-custom'
import checkboxUiCustomRaw from '@demos/react/checkbox-ui-custom.tsx.code.txt?raw'
</script>

<DemoBlock title="选中 / 半选 / 禁用 / 必选" description="checked / indeterminate / disabled / required" :code="checkboxBasicDemoRaw">
  <ReactDemo :component="CheckboxBasicDemo" />
</DemoBlock>

## 说明文字

description 在选项文字下方展示辅助说明。

<DemoBlock title="label 下方辅助说明" description="description 属性" :code="checkboxDescriptionRaw">
  <ReactDemo :component="CheckboxDescriptionDemo" />
</DemoBlock>

## 语义色

color 属性控制选中与半选状态下指示块的颜色。

<DemoBlock title="七种语义色" description="color 属性，选中与半选状态" :code="checkboxColorRaw">
  <ReactDemo :component="CheckboxColorDemo" />
</DemoBlock>

## 尺寸

<DemoBlock title="三档尺寸" description="sm / md / lg，图标同步缩放" :code="checkboxSizeRaw">
  <ReactDemo :component="CheckboxSizeDemo" />
</DemoBlock>

## 变体与指示块位置

`variant="card"` 时整个卡片可点击；`indicator` 控制指示块位置，`hidden` 时指示块隐藏、图标显示在 label 上方。

<DemoBlock title="variant 与 indicator" description="list / card × start / end / hidden" :code="checkboxVariantRaw">
  <ReactDemo :component="CheckboxVariantDemo" />
</DemoBlock>

## 自定义图标与聚焦环

`icon` / `indeterminateIcon` 自定义选中与半选图标；`highlight` 常显聚焦环。

<DemoBlock title="icon 与 highlight" description="icon / indeterminateIcon / highlight" :code="checkboxIconRaw">
  <ReactDemo :component="CheckboxIconDemo" />
</DemoBlock>

## ui 插槽

`ui` 按主题插槽覆盖类名。

<DemoBlock title="ui 插槽自定义" description="ui 键：root / container / base / indicator / icon / wrapper / label / description" :code="checkboxUiCustomRaw">
  <ReactDemo :component="CheckboxUiCustomDemo" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-checkbox
```

## API

<!--@include: ./api/checkbox.md-->
| indeterminateIcon | ElementType | minus 图标 | 半选时显示的图标 |
| onCheckedChange | (checked: boolean) => void | - | 选中状态变化回调 |
| render | ReactElement | - | 渲染为指定元素 |
| ui | XCheckboxUi | - | 主题插槽类名 |
| className | string | - | 根元素类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根容器 |
| container | 控件包裹层 |
| base | 复选框控件 |
| indicator | 勾选指示块 |
| icon | 选中 / 半选图标 |
| wrapper | label 与 description 容器 |
| label | 选项文字 |
| description | 辅助说明 |

## 动效

- 勾选：状态颜色过渡
- focus：聚焦环过渡
- 无位移动画

## 设计规格

### 主题 token

| 类别 | 类名 | 对应 Vue 端 token |
| --- | --- | --- |
| 背景 | 指示块 `bg-{color}`（选中 / 半选填充） | `indicator: bg-{color}` |
| 背景 | neutral：`bg-foreground` | `bg-inverted` |
| 背景 | card 选中：`bg-{color}/10` | 相同（主色 10% 浅色底） |
| 文字 | `label: text-foreground`；`description: text-muted-foreground` | `text-default` / `text-muted` |
| 文字 | 指示块内图标 `text-background` | `text-inverted` |
| 描边 | 未选中 `ring-1 ring-inset ring-input`；聚焦 `focus-visible:ring-3` + `focus-visible:ring-ring/50` | Vue 端为 `ring-accented` + 色板 outline |
| 描边 | card：`border border-border`，选中 `border-{color}/50` | `border-default` + `border-{color}/50` |
| 圆角 | base `rounded-sm`（4px）· card `rounded-lg`（8px） | 相同 |
| 阴影 | 无 | - |

### 变体

| 变体 | token 组合 |
| --- | --- |
| list（默认） | 控件与文字并排，无容器描边 |
| card | `border border-border rounded-lg` + hover `bg-muted/50`，选中 `border-{color}/50` + `bg-{color}/10` |

`highlight: true` 时 base 为 `ring-2 ring-{color}`。尺寸仅 sm / md / lg 三档（Vue 端为 xs ~ xl 五档）。

### 交互

| 类别 | 说明 |
| --- | --- |
| 键盘 | base-ui Checkbox 语义：Tab 聚焦，Space 切换 |
| ARIA | `role=checkbox` + `aria-checked`（含 mixed 半选）；disabled 映射 `aria-disabled` |
| 动效 | card 变体 `transition-colors`；无位移动画 |

**与 Vue 端差异**：基于 base-ui Checkbox；card 变体根元素为 label（整卡可点击）；无 loading 图标。
