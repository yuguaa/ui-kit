---
title: Link 链接
description: 页面内或跨页面的超链接，支持前后图标与激活态
---

# Link 链接

页面内或跨页面的超链接，支持 leading / trailing 图标插槽、active / inactiveClass 状态与 ui.base 类名定制。

<script setup>
import LinkBasic from '@demos/vue/link-basic.vue'
import linkBasicRaw from '@demos/vue/link-basic.vue.code.txt?raw'
import LinkIcons from '@demos/vue/link-icons.vue'
import linkIconsRaw from '@demos/vue/link-icons.vue.code.txt?raw'
import LinkStates from '@demos/vue/link-states.vue'
import linkStatesRaw from '@demos/vue/link-states.vue.code.txt?raw'
</script>

## 基础用法

color 提供 primary / secondary / neutral 三档颜色。

<DemoBlock title="颜色" description="color 属性控制链接颜色" :code="linkBasicRaw">
  <LinkBasic />
</DemoBlock>

## 图标插槽

<DemoBlock title="前置 / 后置图标" description="leading / trailing 插槽" :code="linkIconsRaw">
  <LinkIcons />
</DemoBlock>

## 状态

`active` 表示激活态；`inactiveClass` 仅在非激活态应用；`disabled` 移除 href 并阻止交互；`ui.base` 覆盖根元素类名；`as` 可渲染为其他元素。

<DemoBlock title="激活 · 非激活 · 禁用" description="active / inactiveClass / disabled / ui.base / as" :code="linkStatesRaw">
  <LinkStates />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-link
```

## API

<!--@include: ./api/link.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| base | 链接根元素 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| leading | 前置图标 |
| default | 链接内容 |
| trailing | 后置图标 |

## 动效

- hover：文字颜色过渡
- 无位移动画
