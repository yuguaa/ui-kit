---
title: InputTags 标签输入
description: 以标签形式输入多个值
---

# InputTags 标签输入

以标签形式输入多个值，回车添加、点击关闭移除。

<script setup>
import SelectBasic from '@demos/vue/select-basic.vue'
import selectBasicRaw from '@demos/vue/select-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="选择类组件全景（示例中含标签输入）" :code="selectBasicRaw">
  <SelectBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-input-tags
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | string[] | [] | 标签数组（支持 v-model） |
| max | number | - | 最大标签数 |
| placeholder | string | 输入后回车添加… | 占位文字 |
| disabled | boolean | false | 是否禁用 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| tag | 自定义标签（{ tag, index }） |
| leading | 前置内容 |

## 事件

| 名称 | 说明 |
| --- | --- |
| add | 添加标签回调 |
| remove | 删除标签回调 |

## 动效

- 容器：focus ring 过渡
- 删除按钮：hover 反馈由按钮原子承担
