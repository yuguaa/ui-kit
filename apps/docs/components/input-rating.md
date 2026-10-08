---
title: InputRating 评分
description: 以星标形式进行评分输入
---

# InputRating 评分

以星标形式进行评分输入，支持半星与自定义图标。

<script setup>
import SelectBasic from '@demos/vue/select-basic.vue'
import selectBasicRaw from '@demos/vue/select-basic.vue.code.txt?raw'
import InputRatingReadonly from '@demos/vue/input-rating-readonly.vue'
import inputRatingReadonlyRaw from '@demos/vue/input-rating-readonly.vue.code.txt?raw'
import InputRatingSizes from '@demos/vue/input-rating-sizes.vue'
import inputRatingSizesRaw from '@demos/vue/input-rating-sizes.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="选择类组件全景（示例中含半星评分）" :code="selectBasicRaw">
  <SelectBasic />
</DemoBlock>

## 只读展示

`readonly` 仅作展示：禁止点击与键盘操作，保留 `aria-readonly`，且不应用禁用的变暗样式。

<DemoBlock title="只读评分" description="readonly + allowHalf" :code="inputRatingReadonlyRaw">
  <InputRatingReadonly />
</DemoBlock>

## 三档尺寸

`size` 控制星星大小，共 sm / md / lg 三档。

<DemoBlock title="尺寸" description="size 三档对比" :code="inputRatingSizesRaw">
  <InputRatingSizes />
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
| size | sm · md · lg | md | 星星尺寸 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| item | 自定义图标（{ index, filled, half }） |

## 事件

| 名称 | 说明 |
| --- | --- |
| change | 评分变化回调 |

## 动效

- 星标：hover 颜色过渡
- 无位移动画
