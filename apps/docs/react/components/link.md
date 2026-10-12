---
title: Link 链接
description: 页面内或跨页面的超链接，支持前后图标与激活态
---

# Link 链接

页面内或跨页面的超链接，支持 leading / trailing 图标、active / inactiveClass 状态与 ui.base 类名定制。

## 基础用法

color 提供 primary / secondary / neutral 三档颜色。

<DemoPreview file="demos/react/link-basic.tsx" react title="颜色" description="color 属性控制链接颜色" />

## 图标

<DemoPreview file="demos/react/link-icons.tsx" react title="前置 / 后置图标" description="leading / trailing" />

## 状态

`active` 表示激活态；`inactiveClass` 仅在非激活态应用；`disabled` 移除 href 并阻止交互；`ui.base` 覆盖根元素类名；`render` 可渲染为其他元素。

<DemoPreview file="demos/react/link-states.tsx" react title="激活 · 非激活 · 禁用" description="active / inactiveClass / disabled / ui.base / render" />

## 安装

```bash
npx shadcn@latest add @ui-kit/x-link
```

## API

<!--@include: ./api/link.md-->

**插槽**：leading / trailing 前置与后置图标

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| base | 链接根元素 |

## 动效

- hover：文字颜色过渡
- 无位移动画

## 设计规格

### 主题 token

- 背景：无
- 文字：默认 `color="primary"` → `text-primary`（green 500）hover `text-primary/75`；secondary → `text-foreground` hover `text-muted-foreground`；neutral → `text-muted-foreground` hover `text-foreground`；激活态追加 `text-primary/75 underline underline-offset-4`；禁用 `opacity-75`
- 描边：`focus-visible:ring-3 ring-ring/50`
- 圆角与阴影：`rounded`（0.25rem）+ `rounded-md` 主题项
- 变体：

| 变体 | 枚举 | token 组合 |
| --- | --- | --- |
| color | primary / secondary / neutral | 见文字行 |
| active | true / false | true：`text-primary/75 underline underline-offset-4` + `aria-current`；false：无附加类 |
| disabled | true | `cursor-not-allowed opacity-75`，移除 `href`、`role="link"`、`aria-disabled`、`tabIndex=-1` |
| raw | true | 跳过主题样式，仅应用 class / activeClass / inactiveClass |

### 交互

- 键盘：渲染 `<a>`，原生 Tab 聚焦；禁用时移除 `href` 并输出 `role="link"` + `aria-disabled` + `tabIndex=-1`，点击阻止默认
- ARIA：激活态 `aria-current="page"`；外链或新窗口默认补 `rel="noopener noreferrer"`（`noRel` 可关闭）
- 动效：主题样式内含 `transition-colors`；无位移动画

**双端差异**：

- Vue 端主题为 active（`text-primary`）/ inactive（`text-muted`）两态，焦点 `outline-primary/25 outline-3`；React 端为 `color` 枚举 + 下划线激活态，焦点 `ring-ring/50 ring-3`
- Vue 端基于 NuxtLink（路由导航、prefetch）；React 端为普通 `<a>`，无 prefetch
- Vue 端无 `color` prop；React 端 `color` 默认 `primary`
