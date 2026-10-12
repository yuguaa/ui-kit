---
title: Collapsible 折叠
description: 点击触发内容展开或收起
---

# Collapsible 折叠

点击触发内容展开或收起。trigger 为触发器内容（默认「展开详情」按钮），children 为折叠内容。关闭时默认卸载内容（unmountOnHide）。

## 基础用法

<DemoPreview file="demos/react/collapsible-basic.tsx" react title="基础用法" description="trigger / children，defaultOpen / disabled" />

## ui 插槽与 render

ui.root 覆盖根容器类名，ui.content 覆盖内容区类名；render 指定渲染元素；unmountOnHide 控制关闭后是否卸载内容。

<DemoPreview file="demos/react/collapsible-ui.tsx" react title="ui · render · unmountOnHide" description="ui：root / content" />

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

## 设计规格

React 端基于 Base UI Collapsible（components/ui/collapsible），主题插槽类名与 Vue 端键名一致，token 采用 shadcn 变量。

### 主题 token

**背景 / 文字 / 描边 / 圆角与阴影**

| 插槽 | 类 | 与 Vue 端对应 |
| --- | --- | --- |
| root | flex flex-col gap-1（无颜色 token） | 与 Vue 端一致（无背景 / 描边 token） |
| content | text-sm text-muted-foreground | Vue 端无文字 token，差异注明 |

**变体**

| 变体 | token 组合 |
| --- | --- |
| disabled | trigger 禁用，不可切换 |
| unmountOnHide=true（默认） | 关闭后卸载内容，与 Vue 端一致 |
| trigger 缺省 | 默认渲染「展开详情」按钮 + ChevronDown 图标（hover:underline）；Vue 端无默认触发器，需传入 default 插槽，差异注明 |

### 交互

| 维度 | 行为 |
| --- | --- |
| 键盘 | Base UI Collapsible 语义，与 Vue 端 reka Collapsible 一致：trigger（按钮）Enter / Space 切换展开状态 |
| ARIA | 与 Vue 端一致：trigger 为 role=button + aria-expanded；内容关闭时隐藏 |
| 动效 | content 无高度过渡动画类（Base UI 直接显示 / 隐藏，Vue 端为 collapsible-down / collapsible-up 200ms，差异注明）；默认 trigger 的 ChevronDown 展开时 rotate-180 + transition-transform |
