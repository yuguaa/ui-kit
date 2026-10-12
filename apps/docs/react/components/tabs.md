---
title: Tabs 标签页
description: 在同一区域内切换不同视图或内容分组
---

# Tabs 标签页

items 字段（label / icon / avatar / badge / slot / content / value）驱动，`variant` 支持 pill / link，`orientation` 支持 horizontal / vertical，支持受控 `value` 与非受控 `defaultValue`。

<script setup>
import TabsBasicDemo from '@demos/react/tabs-basic-demo'
import tabsBasicDemoRaw from '@demos/react/tabs-basic-demo.tsx.code.txt?raw'
import TabsOrientationSize from '@demos/react/tabs-orientation-size'
import tabsOrientationSizeRaw from '@demos/react/tabs-orientation-size.tsx.code.txt?raw'
import TabsUiCustom from '@demos/react/tabs-ui-custom'
import tabsUiCustomRaw from '@demos/react/tabs-ui-custom.tsx.code.txt?raw'
</script>

## 变体

`variant="pill"` 使用胶囊指示器，`variant="link"` 使用下划线指示器；内容面板跟随激活标签渲染。

<DemoBlock title="pill 与 link 变体" description="variant / value / onValueChange" :code="tabsBasicDemoRaw">
  <ReactDemo :component="TabsBasicDemo" />
</DemoBlock>

## 方向与尺寸

`orientation="vertical"` 将标签列放在左侧、内容放在右侧；`size` 提供 xs / sm / md / lg / xl 五档，控制标签的内边距、字号与图标尺寸。

<DemoBlock title="纵向 + 多档尺寸" description="orientation / size" :code="tabsOrientationSizeRaw">
  <ReactDemo :component="TabsOrientationSize" />
</DemoBlock>

## 字段映射、渲染函数与 ui 插槽

`icon` / `avatar` / `badge` 字段渲染前置与后置内容；`slot` 字段把内容面板分发到 `contentSlot` 渲染函数；`ui` 按主题插槽覆盖类名。

<DemoBlock title="字段映射 · 渲染函数 · ui" description="icon / avatar / badge / slot / ui" :code="tabsUiCustomRaw">
  <ReactDemo :component="TabsUiCustom" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-tabs
```

## API

<!--@include: ./api/tabs.md-->

**回调与插槽**：onValueChange 激活标签变化 · leading / trailing 前后置内容渲染函数 · children 标签文字渲染函数 · contentSlot 内容面板渲染函数 · listLeading / listTrailing 列表前 / 后内容

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根元素 |
| list | 标签列表 |
| indicator | 激活指示器 |
| trigger | 标签触发器 |
| leadingIcon | 前置图标 |
| leadingAvatar | 前置头像 |
| leadingAvatarSize | 前置头像尺寸（尺寸值） |
| label | 标签文字 |
| trailingBadge | 后置徽标 |
| trailingBadgeSize | 后置徽标尺寸（尺寸值） |
| content | 内容面板 |

## 动效

- 指示器：位置切换过渡；触发器 hover / 选中颜色过渡

## 设计规格

### 主题 token

- 背景：pill 列表 `bg-muted`；指示器 `bg-{color}`（默认 `bg-primary`，green 500；neutral → `bg-foreground`）
- 文字：未激活触发器 `text-muted-foreground`，hover `text-foreground`；pill 激活态 `text-background`；link 激活态 `text-{color}`；禁用 `opacity-75`
- 描边：link 变体列表 `border-border`；内容区 `focus-visible:outline-3 outline-{color}/25`（neutral → `outline-foreground/25`）
- 圆角与阴影：触发器 `rounded-md`；pill 列表 `rounded-lg`；pill 指示器 `rounded-md shadow-xs`；link 指示器 `rounded-full`
- 变体：

| 变体 | 枚举 | token 组合 |
| --- | --- | --- |
| color | 六色 + neutral | 指示器背景 + 激活态文字 + 焦点描边颜色 |
| variant | pill / link | pill：`list: bg-muted rounded-lg` + 指示器 `rounded-md shadow-xs`；link：`list: border-border` + 指示器 `rounded-full` |
| orientation | horizontal / vertical | 指示器 `left-[var(--active-tab-left)] w-[var(--active-tab-width)]` / `top-[var(--active-tab-top)] h-[var(--active-tab-height)]` |
| size | xs / sm / md / lg / xl | 触发器 `px-* py-* text-* gap-*` + 图标尺寸 |

### 交互

- 键盘：Base UI Tabs 语义——方向键（水平 Left/Right、垂直 Up/Down）移动焦点并激活（默认 immediate 激活）；Home / End 跳首尾；禁用触发器不可聚焦
- ARIA：Base UI 输出 `role=tablist`（含 `aria-orientation`）、`role=tab`（`aria-selected` / `aria-controls`）、`role=tabpanel`（`aria-labelledby`）
- 动效：指示器 `transition-[left,top,width,height] duration-200 ease-out`，`motion-reduce` 关闭；触发器 `transition-colors`；`keepMounted={!unmountOnHide}` 控制内容卸载

**双端差异**：

- Vue 端基于 reka-ui（指示器 `translate` 过渡 + `--reka-tabs-indicator-*` 变量定位）；React 端基于 Base UI（`left/top/width/height` 过渡 + `--active-tab-*` 变量）
- Vue 端有 SSR 伪元素激活高亮回退；React 端无（无 SSR 测量问题）
- 语义色映射：Vue `bg-elevated` / `text-inverted` / `text-highlighted` ↔ React `bg-muted` / `text-background` / `text-foreground`
