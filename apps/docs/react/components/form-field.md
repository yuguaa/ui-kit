---
title: FormField 表单字段
description: 带标签、说明与错误信息的表单字段
---

# FormField 表单字段

带标签、辅助说明与错误信息的表单字段，错误信息优先取 error prop，其次按 name / errorPattern 匹配表单校验结果。结构对齐 Nuxt UI：root > wrapper（标签行 + 说明）> container（控件 + 错误 / 帮助）。

<script setup>
import FormFieldOrientation from '@demos/react/form-field-orientation'
import formFieldOrientationRaw from '@demos/react/form-field-orientation.tsx.code.txt?raw'
import FormFieldSize from '@demos/react/form-field-size'
import formFieldSizeRaw from '@demos/react/form-field-size.tsx.code.txt?raw'
import FormFieldSlots from '@demos/react/form-field-slots'
import formFieldSlotsRaw from '@demos/react/form-field-slots.tsx.code.txt?raw'
import FormFieldHint from '@demos/react/form-field-hint'
import formFieldHintRaw from '@demos/react/form-field-hint.tsx.code.txt?raw'
import FormFieldUiCustom from '@demos/react/form-field-ui-custom'
import formFieldUiCustomRaw from '@demos/react/form-field-ui-custom.tsx.code.txt?raw'
</script>

## 排列方向

`orientation` 控制标签与控件的布局：vertical 标签在上，horizontal 标签与控件同一行。

<DemoBlock title="vertical 与 horizontal" description="orientation 属性控制排列方向" :code="formFieldOrientationRaw">
  <ReactDemo :component="FormFieldOrientation" />
</DemoBlock>

## 尺寸

`size` 控制根节点字号（xs → xl）。

<DemoBlock title="五档尺寸" description="size 属性控制字段字号" :code="formFieldSizeRaw">
  <ReactDemo :component="FormFieldSize" />
</DemoBlock>

## 插槽

label / description / error / help / hint 五个插槽对应同名 props（ReactNode）；hint 渲染在标签右侧，description 渲染在标签下方，error 与 help 渲染在控件下方（有错误时显示 error，否则显示 help）。

<DemoBlock title="五个插槽" description="label / description / error / help / hint 自定义内容" :code="formFieldSlotsRaw">
  <ReactDemo :component="FormFieldSlots" />
</DemoBlock>

## 标签提示

`hint` 用于说明填写要求。

<DemoBlock title="标签提示" description="hint 属性" :code="formFieldHintRaw">
  <ReactDemo :component="FormFieldHint" />
</DemoBlock>

## ui 插槽

`ui` 按主题插槽（root / wrapper / labelWrapper / label / container / description / error / hint / help）覆盖类名。

<DemoBlock title="ui 插槽" description="九个主题插槽键的类名自定义" :code="formFieldUiCustomRaw">
  <ReactDemo :component="FormFieldUiCustom" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-form-field
npx shadcn@latest add @ui-kit/x-field-group
```

## API

### XFormField

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| render | ReactElement | - | 渲染为指定元素 |
| name | string | - | 字段名（关联表单校验结果） |
| errorPattern | RegExp | - | 正则匹配表单错误名，用于数组字段（如 tags.0） |
| label | ReactNode | - | 标签内容 |
| description | ReactNode | - | 辅助说明 |
| help | ReactNode | - | 无错误时显示的帮助文案 |
| error | boolean · ReactNode | - | 错误信息：true 强制错误态，false 关闭错误显示 |
| hint | ReactNode | - | 标签右侧的提示文案（说明填写要求） |
| size | xs · sm · md · lg · xl | md | 尺寸（控制根节点字号） |
| required | boolean | false | 是否必填 |
| eagerValidation | boolean | false | 输入时立即校验，不等待 blur（供字段内控件读取） |
| validateOnInputDelay | number | 300 | 输入校验的防抖延迟毫秒数（供字段内控件读取） |
| orientation | vertical · horizontal | vertical | 排列方向 |
| id | string | - | 控件 id（label 关联用） |
| ui | XFormFieldUi | - | 主题插槽类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 字段根元素 |
| wrapper | 标签与说明容器 |
| labelWrapper | 标签行（标签与 hint） |
| label | 标签 |
| container | 控件容器 |
| description | 辅助说明 |
| error | 错误信息 |
| hint | 标签右侧提示 |
| help | 帮助文案 |

## 动效

无动效：表单容器组件。

## 设计规格

### 主题 token

- 背景：无
- 文字：label `text-foreground`；description、hint、help `text-muted-foreground`；error `text-error`；必填星号 `text-error`
- 描边：无
- 圆角与阴影：无
- 变体：

| 变体 | 枚举 | token 组合 |
| --- | --- | --- |
| size | xs / sm / md / lg / xl | 根字号 `text-xs` / `text-xs` / `text-sm` / `text-sm` / `text-base` |
| required | true | 星号 `<span class="ml-0.5 text-error">*</span>` |
| orientation | vertical / horizontal | vertical：`container: mt-1`；horizontal：`flex justify-between place-items-baseline gap-2` |

### 交互

- 键盘：无组件级键盘逻辑；`Label` 以 `htmlFor` 关联控件 id，点击标签聚焦控件
- ARIA：错误区输出 `role="alert"`；hint / description / error / help 以 `${ariaId}-hint`、`-description`、`-error`、`-help` 输出 id，供控件 `aria-describedby` 关联
- 动效：无

**双端差异**：

- Vue 端 label 用 `text-default`、辅助文案用 `text-muted`；React 端对应 `text-foreground` / `text-muted-foreground`（shadcn 变量，同语义）
- Vue 端错误区无 `role="alert"`；React 端输出 `role="alert"`
- Vue 端必填星号由主题 `after:content-['*']` 伪元素实现；React 端为显式 `<span>` 节点
