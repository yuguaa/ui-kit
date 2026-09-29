---
title: Tabs 标签页
description: 在同一区域内切换不同视图或内容分组
---

# Tabs 标签页

用于在同一区域内切换不同视图或内容分组，支持 line / card 样式与 destroyOnHide。

<script setup>
import NavigationBasic from '@demos/vue/navigation-basic.vue'
import navigationBasicRaw from '@demos/vue/navigation-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="三项标签与内容面板" :code="navigationBasicRaw">
  <NavigationBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-tabs
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | { key, label, disabled? }[] | - | 标签项数组 |
| activeKey | string | - | 当前激活的标签 key |
| defaultActiveKey | string | 首项 | 初始激活的标签 key |
| type | line · card | line | 标签样式 |
| destroyOnHide | boolean | false | 隐藏时是否销毁内容 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| tab | 自定义标签标题内容 |
| content | 标签对应的面板内容（作用域插槽 { item }） |

## 事件

| 名称 | 说明 |
| --- | --- |
| change | 切换激活标签的回调 |
