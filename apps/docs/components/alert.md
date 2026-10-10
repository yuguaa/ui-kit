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
