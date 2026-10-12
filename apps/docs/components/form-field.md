---
title: FormField 表单字段
description: 带标签、说明与错误信息的表单字段
---

# FormField 表单字段

带标签、辅助说明与错误信息的表单字段，错误信息优先取 error prop，其次按 name / errorPattern 匹配表单校验结果。结构对齐 Nuxt UI：root > wrapper（标签行 + 说明）> container（控件 + 错误 / 帮助）。

<script setup>
import FormFieldOrientation from '@demos/vue/form-field-orientation.vue'
import formFieldOrientationRaw from '@demos/vue/form-field-orientation.vue.code.txt?raw'
import FormFieldSize from '@demos/vue/form-field-size.vue'
import formFieldSizeRaw from '@demos/vue/form-field-size.vue.code.txt?raw'
import FormFieldSlots from '@demos/vue/form-field-slots.vue'
import formFieldSlotsRaw from '@demos/vue/form-field-slots.vue.code.txt?raw'
import FormFieldHint from '@demos/vue/form-field-hint.vue'
import formFieldHintRaw from '@demos/vue/form-field-hint.vue.code.txt?raw'
import FormFieldUiCustom from '@demos/vue/form-field-ui-custom.vue'
import formFieldUiCustomRaw from '@demos/vue/form-field-ui-custom.vue.code.txt?raw'
</script>

## 排列方向

`orientation` 控制标签与控件的布局：vertical 标签在上，horizontal 标签与控件同一行。

<DemoBlock title="vertical 与 horizontal" description="orientation 属性控制排列方向" :code="formFieldOrientationRaw">
  <FormFieldOrientation />
</DemoBlock>

## 尺寸

`size` 控制根节点字号（xs → xl）。

<DemoBlock title="五档尺寸" description="size 属性控制字段字号" :code="formFieldSizeRaw">
  <FormFieldSize />
</DemoBlock>

## 插槽

label / description / error / help / hint 五个插槽均可自定义内容；hint 渲染在标签右侧，description 渲染在标签下方，error 与 help 渲染在控件下方（有错误时显示 error，否则显示 help）。

<DemoBlock title="五个插槽" description="label / description / error / help / hint 自定义内容" :code="formFieldSlotsRaw">
  <FormFieldSlots />
</DemoBlock>

## 标签提示

`hint` 用于说明填写要求，可通过 `hint` 插槽自定义内容。

<DemoBlock title="标签提示" description="hint 属性与 hint 插槽" :code="formFieldHintRaw">
  <FormFieldHint />
</DemoBlock>

## ui 插槽

`ui` 按主题插槽（root / wrapper / labelWrapper / label / container / description / error / hint / help）覆盖类名。

<DemoBlock title="ui 插槽" description="九个主题插槽键的类名自定义" :code="formFieldUiCustomRaw">
  <FormFieldUiCustom />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-form-field
npx shadcn-vue@latest add @ui-kit/x-field-group
```

## API

### XFormField

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as | string · Component | div | 渲染为指定元素或组件 |
| name | string | - | 字段名（关联表单校验结果） |
| errorPattern | RegExp | - | 正则匹配表单错误名，用于数组字段（如 tags.0） |
| label | string | - | 标签文字 |
| description | string | - | 辅助说明 |
| help | string | - | 无错误时显示的帮助文案 |
| error | boolean · string | - | 错误信息：true 强制错误态，false 关闭错误显示 |
| hint | string | - | 标签右侧的提示文案（说明填写要求） |
| size | xs · sm · md · lg · xl | md | 尺寸（控制根节点字号） |
| required | boolean | false | 是否必填 |
| eagerValidation | boolean | false | 输入时立即校验，不等待 blur（供字段内控件读取） |
| validateOnInputDelay | number | 300 | 输入校验的防抖延迟毫秒数（供字段内控件读取） |
| orientation | vertical · horizontal | vertical | 排列方向 |
| id | string | - | 控件 id（label 关联用） |
| ui | FormFieldUi | - | 主题插槽类名 |
| class | string | - | 根元素类名 |

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

## 插槽

| 名称 | props | 说明 |
| --- | --- | --- |
| default | error | 字段控件 |
| label | label | 自定义标签 |
| hint | hint | 自定义标签右侧提示 |
| description | description | 自定义辅助说明 |
| error | error | 自定义错误信息 |
| help | help | 自定义帮助文案 |

## 动效

无动效：表单容器组件。

## 设计规格

### 主题 token

- 背景：无
- 文字：label `text-default`（#404040 / 暗色 #e5e5e5）；description、hint、help `text-muted`（#737373 / 暗色 #a3a3a3）；error `text-error`（red 500，#ef4444）；必填星号 `after:text-error`
- 描边：无
- 圆角与阴影：无
- 变体：

| 变体 | 枚举 | token 组合 |
| --- | --- | --- |
| size | xs / sm / md / lg / xl | 根字号 `text-xs` / `text-xs` / `text-sm` / `text-sm` / `text-base` |
| required | true | label 后追加星号：`after:content-['*'] after:ms-0.5 after:text-error` |
| orientation | vertical / horizontal | vertical：`container: mt-1`；horizontal：`root: flex justify-between place-items-baseline gap-2` |

### 交互

- 键盘：无组件级键盘逻辑；`Label` 以 `for` 关联控件 id，点击标签聚焦控件
- ARIA：`Label` 输出 `for`；hint / description / error 分别输出 `id="${ariaId}-hint"`、`"${ariaId}-description"`、`"${ariaId}-error"`，由控件侧 `useFormField` 的 `ariaAttrs` 输出 `aria-describedby` 关联；错误区无 `role=alert`
- 动效：无
