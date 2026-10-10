---
title: Collapsible 折叠
description: 点击触发内容展开或收起
---

# Collapsible 折叠

点击触发内容展开或收起。trigger 为触发器内容（默认「展开详情」按钮），children 为折叠内容。关闭时默认卸载内容（unmountOnHide）。

<script setup>
import CollapsibleBasic from '@demos/react/collapsible-basic'
import collapsibleBasicRaw from '@demos/react/collapsible-basic.tsx.code.txt?raw'
import CollapsibleUi from '@demos/react/collapsible-ui'
import collapsibleUiRaw from '@demos/react/collapsible-ui.tsx.code.txt?raw'
</script>

## 基础用法

<DemoBlock title="基础用法" description="trigger / children，defaultOpen / disabled" :code="collapsibleBasicRaw">
  <ReactDemo :component="CollapsibleBasic" />
</DemoBlock>

## ui 插槽与 render

ui.root 覆盖根容器类名，ui.content 覆盖内容区类名；render 指定渲染元素；unmountOnHide 控制关闭后是否卸载内容。

<DemoBlock title="ui · render · unmountOnHide" description="ui：root / content" :code="collapsibleUiRaw">
  <ReactDemo :component="CollapsibleUi" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-collapsible
```

## API

<!--@include: ./api/collapsible.md-->

**插槽**：trigger 触发器内容 · children 展开内容

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 折叠根元素 |
| content | 折叠内容区 |

**ref 方法**：toggle()

## hook

```tsx
const [Collapsible, collapsibleApi] = useXCollapsible()
collapsibleApi.toggle()   // open 可读，toggle / setOpen
```

## 动效

- 展开 / 收起：内容区高度过渡
- 箭头：旋转过渡
