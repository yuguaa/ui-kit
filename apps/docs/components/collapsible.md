---
title: Collapsible 折叠
description: 点击触发内容展开或收起
---

# Collapsible 折叠

点击触发内容展开或收起。trigger 插槽为触发器（默认「展开详情」按钮），content 插槽为折叠内容。关闭时默认卸载内容（unmountOnHide）。

<script setup>
import CollapsibleBasic from '@demos/vue/collapsible-basic.vue'
import collapsibleBasicRaw from '@demos/vue/collapsible-basic.vue.code.txt?raw'
import CollapsibleUi from '@demos/vue/collapsible-ui.vue'
import collapsibleUiRaw from '@demos/vue/collapsible-ui.vue.code.txt?raw'
</script>

## 基础用法

<DemoBlock title="基础用法" description="trigger / content 插槽，defaultOpen / disabled" :code="collapsibleBasicRaw">
  <CollapsibleBasic />
</DemoBlock>

## ui 插槽与 as

ui.root 覆盖根容器类名，ui.content 覆盖内容区类名；as 指定渲染标签；unmountOnHide 控制关闭后是否卸载内容。

<DemoBlock title="ui · as · unmountOnHide" description="ui：root / content" :code="collapsibleUiRaw">
  <CollapsibleUi />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-collapsible
```

## API

<!--@include: ./api/collapsible.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 折叠根元素 |
| content | 折叠内容区 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| trigger | 触发器（默认「展开详情」按钮） |
| content | 折叠内容 |

**方法**（ref 调用）：toggle()

## hook

```ts
const [Collapsible, collapsibleApi] = useXCollapsible()
collapsibleApi.toggle()   // open 可读，toggle / setOpen
```

## 动效

- 展开 / 收起：内容区高度过渡
- 箭头：旋转过渡

## 设计规格

### 主题 token

**背景**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| root · content | 无背景 token（透明） | — |

**文字**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| root · content | 无文字 token（继承上下文） | — |

**描边**

| 插槽 | token | 值（亮 / 暗） |
| --- | --- | --- |
| root · content | 无描边 token | — |

**圆角与阴影**

| 插槽 | 类 | 值 |
| --- | --- | --- |
| root · content | 无圆角与阴影 token | — |

**变体**

| 变体 | token 组合 |
| --- | --- |
| disabled | trigger 禁用，不可切换 |
| unmountOnHide=true（默认） | 关闭后卸载内容 |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | reka Collapsible 语义：trigger（按钮）Enter / Space 切换展开状态 |
| ARIA | trigger 为 role=button + aria-expanded；content 在关闭时隐藏；无默认触发器，default 插槽作为 trigger 渲染 |
| 动效 | content 展开收起 collapsible-down / collapsible-up 200ms；关闭态 overflow-hidden |
