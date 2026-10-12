---
title: Alert 警告提示
description: 展示需要关注的信息，提供七种语义色与四种变体
---

# Alert 警告提示

用于页面中展示需要关注的信息，提供七种语义色、四种变体，可附带图标、头像、操作区与受控关闭按钮。

<script setup>
import AlertBasic from '@demos/vue/alert-basic.vue'
import alertBasicRaw from '@demos/vue/alert-basic.vue.code.txt?raw'
import AlertVariants from '@demos/vue/alert-variants.vue'
import alertVariantsRaw from '@demos/vue/alert-variants.vue.code.txt?raw'
import AlertTypes from '@demos/vue/alert-types.vue'
import alertTypesRaw from '@demos/vue/alert-types.vue.code.txt?raw'
import AlertClosable from '@demos/vue/alert-closable.vue'
import alertClosableRaw from '@demos/vue/alert-closable.vue.code.txt?raw'
import AlertIconActions from '@demos/vue/alert-icon-actions.vue'
import alertIconActionsRaw from '@demos/vue/alert-icon-actions.vue.code.txt?raw'
import AlertOrientation from '@demos/vue/alert-orientation.vue'
import alertOrientationRaw from '@demos/vue/alert-orientation.vue.code.txt?raw'
import AlertUiCustom from '@demos/vue/alert-ui-custom.vue'
import alertUiCustomRaw from '@demos/vue/alert-ui-custom.vue.code.txt?raw'
</script>

## 基础用法

icon 指定图标名，avatar 传入头像配置；close 配合 v-model:open 提供受控关闭。

<DemoBlock title="图标、头像与受控关闭" description="icon / avatar / close + v-model:open" :code="alertBasicRaw">
  <AlertBasic />
</DemoBlock>

## 变体

<DemoBlock title="四种变体" description="variant 控制提示强度" :code="alertVariantsRaw">
  <AlertVariants />
</DemoBlock>

## 语义色

color 提供七种语义色；kit 既有属性 type 仍可作为 color 的回退。

<DemoBlock title="七种语义色" description="color" :code="alertTypesRaw">
  <AlertTypes />
</DemoBlock>

## 受控关闭

close 为布尔时使用默认关闭按钮；传对象时整体透传给关闭按钮（可配置 variant / color / size / label 等）；close 插槽替换默认按钮，closeIcon 更换图标。

<DemoBlock title="close 与 closeIcon" description="close / closeIcon / v-model:open" :code="alertClosableRaw">
  <AlertClosable />
</DemoBlock>

## 图标、头像与操作区

<DemoBlock title="icon / avatar / actions" description="leading 插槽、actions 插槽与 actions 数组" :code="alertIconActionsRaw">
  <AlertIconActions />
</DemoBlock>

## 排列方向

<DemoBlock title="vertical / horizontal" description="orientation 控制内容与操作区的排列方向" :code="alertOrientationRaw">
  <AlertOrientation />
</DemoBlock>

## ui 插槽与渲染

<DemoBlock title="ui 插槽自定义与 as" description="ui 键覆盖主题插槽类名，as 更换渲染元素" :code="alertUiCustomRaw">
  <AlertUiCustom />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-alert
```

## API

<!--@include: ./api/alert.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根元素 |
| wrapper | 标题、描述与纵向操作区的容器 |
| title | 标题元素 |
| description | 描述元素 |
| icon | 图标元素 |
| avatar | 头像元素 |
| avatarSize | 头像尺寸（xs · sm · md · lg · xl） |
| actions | 操作区容器（vertical / horizontal 两处） |
| close | 关闭按钮 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| leading | 前置内容，优先于 icon / avatar / showIcon 的默认图标；插槽参数 ui 为主题插槽对象 |
| icon | 自定义图标，优先于 icon 属性与默认类型图标 |
| title | 自定义标题内容 |
| message | 自定义标题内容 |
| description | 自定义说明内容 |
| actions | 操作区，vertical 时位于标题与描述下方，horizontal 时位于内容右侧；无 actions 插槽时使用 actions 属性的按钮列表 |
| close | 自定义关闭按钮；插槽参数 ui 为主题插槽对象 |

## 事件

| 名称 | 说明 |
| --- | --- |
| update:open | 关闭按钮点击后置为 false（v-model:open） |
| close | 点击关闭按钮时的回调 |

## 动效

无动效：静态提示组件。关闭按钮的 hover 颜色过渡由 XButton 承担。

## 设计规格

### 主题 token

**背景与文字**

| 变体 | 背景 | 文字 | 值 |
| --- | --- | --- | --- |
| solid（color=primary 等） | bg-`<color>` | text-inverted | 语义色 500 级底（如 primary #22c55e）+ 反色字 |
| outline | 无背景 | text-`<color>` | 语义色文字 |
| soft | bg-`<color>`/10 | text-`<color>` | 语义色 10% 浅底 |
| subtle | bg-`<color>`/10 | text-`<color>` | 语义色 10% 浅底 |
| neutral solid | bg-inverted | text-inverted | #171717 底（亮）+ 反色字 |
| neutral outline | bg-default | text-highlighted | #ffffff（亮）/ #171717（暗）底 |
| neutral soft | bg-elevated/50 | text-highlighted | #f5f5f5（亮）/ #262626（暗）50% 底 |
| neutral subtle | bg-elevated/50 | text-highlighted | 同上 |

**描边**

| 变体 | 类 | 值 |
| --- | --- | --- |
| outline / subtle（color=`<color>`） | ring ring-inset ring-`<color>`/25 | 语义色 25% 内描边 |
| neutral outline | ring ring-inset ring-default | #e5e5e5（亮）/ #262626（暗） |
| neutral subtle | ring ring-inset ring-accented | #d4d4d4（亮）/ #404040（暗） |

**圆角与阴影**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| root | rounded-lg | --radius-lg 8px |
| root | 无 shadow | 提示组件无阴影 token |

**变体**

| 变体 | token 组合 |
| --- | --- | --- |
| variant=solid | bg-`<color>` text-inverted |
| variant=outline | text-`<color>` + ring ring-inset ring-`<color>`/25 |
| variant=soft | bg-`<color>`/10 text-`<color>` |
| variant=subtle | bg-`<color>`/10 text-`<color>` + ring ring-inset ring-`<color>`/25 |
| orientation=horizontal | root items-center，actions 与关闭按钮同行 |
| orientation=vertical | root items-start，actions 在描述下方（mt-2.5） |
| title=true | description mt-1 |

默认 color primary、variant solid。icon 尺寸 size-5，avatar 尺寸 2xl，actions flex flex-wrap gap-1.5，close p-0。

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | 无内建键盘行为；操作按钮与关闭按钮的 Enter / Space 与焦点样式由 XButton 承担 |
| ARIA | Vue 端根节点无角色标注（普通 div + data-orientation）；关闭按钮 aria-label 来自 t('alert.close') |
| 动效 | 无（静态组件） |
