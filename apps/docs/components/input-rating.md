---
title: InputRating 评分
description: 以星标形式进行评分输入
---

# InputRating 评分

以星标形式进行评分输入，支持半星、自定义图标、五档尺寸、七种语义色与横竖方向。

<script setup>
import InputRatingBasic from '@demos/vue/input-rating-basic.vue'
import inputRatingBasicRaw from '@demos/vue/input-rating-basic.vue.code.txt?raw'
import InputRatingColors from '@demos/vue/input-rating-colors.vue'
import inputRatingColorsRaw from '@demos/vue/input-rating-colors.vue.code.txt?raw'
import InputRatingSizes from '@demos/vue/input-rating-sizes.vue'
import inputRatingSizesRaw from '@demos/vue/input-rating-sizes.vue.code.txt?raw'
import InputRatingCustom from '@demos/vue/input-rating-custom.vue'
import inputRatingCustomRaw from '@demos/vue/input-rating-custom.vue.code.txt?raw'
</script>

## 基础用法

`modelValue` 绑定评分值，支持 `v-model`。

<DemoBlock title="基础用法" description="v-model 绑定评分值" :code="inputRatingBasicRaw">
  <InputRatingBasic />
</DemoBlock>

## 语义色与方向

`color` 提供七种语义色，`orientation` 支持横向与纵向排列。

<DemoBlock title="语义色与方向" description="color 控制填充星颜色，orientation 控制排列方向" :code="inputRatingColorsRaw">
  <InputRatingColors />
</DemoBlock>

## 尺寸与状态

`size` 控制星星大小，共 xs → xl 五档；`readonly` 仅作展示，`disabled` 禁用交互。

<DemoBlock title="五档尺寸与状态" description="size 五档对比，readonly / disabled 状态" :code="inputRatingSizesRaw">
  <InputRatingSizes />
</DemoBlock>

## 图标、插槽与 ui

`icon` / `emptyIcon` 接受 XIcon 名称或自定义组件；`item` 插槽自定义每一项；`ui` 按主题插槽覆盖类名。

<DemoBlock title="自定义图标与 ui" description="icon / emptyIcon / item 插槽 / ui 主题插槽" :code="inputRatingCustomRaw">
  <InputRatingCustom />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-input-rating
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | number | 0 | 评分值（支持 v-model） |
| max | number | 5 | 最大分值 |
| allowHalf | boolean | false | 允许半星 |
| disabled | boolean | false | 是否禁用 |
| readonly | boolean | false | 只读展示，禁止点击与键盘操作 |
| size | xs · sm · md · lg · xl | md | 星星尺寸 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 组件颜色（填充星与聚焦描边） |
| orientation | horizontal · vertical | horizontal | 排列方向 |
| icon | InputRatingIcon | - | 高亮星图标（XIcon 名称或组件），缺省使用空星图标 |
| emptyIcon | InputRatingIcon | - | 空星图标（XIcon 名称或组件），缺省使用 icon |
| as | string · Component | span | 渲染为指定元素或组件 |
| id | string | - | 根元素 id |
| ui | InputRatingUi | - | 主题插槽类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 评分根容器 |
| item | 单个评分项（可交互区域） |
| indicator | 高亮层容器（半星时裁剪） |
| icon | 高亮星图标 |
| emptyIcon | 空星图标 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| item | 自定义单项内容（{ index, filled, half }） |

## 事件

| 名称 | 说明 |
| --- | --- |
| update:modelValue | 评分值变化 |
| change | 评分变化回调，载荷为 change 事件（target.value 为评分值） |

## 动效

- 星标：hover 放大（scale 110%）与聚焦描边过渡
- 无位移动画
