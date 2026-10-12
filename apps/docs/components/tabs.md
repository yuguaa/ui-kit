---
title: Tabs 标签页
description: 在同一区域内切换不同视图或内容分组
---

# Tabs 标签页

items 字段（label / icon / avatar / badge / slot / content / value）驱动，`variant` 支持 pill / link，`orientation` 支持 horizontal / vertical，支持受控 `modelValue` 与非受控 `defaultValue`。

<script setup>
import TabsBasicDemo from '@demos/vue/tabs-basic-demo.vue'
import tabsBasicDemoRaw from '@demos/vue/tabs-basic-demo.vue.code.txt?raw'
import TabsOrientationSize from '@demos/vue/tabs-orientation-size.vue'
import tabsOrientationSizeRaw from '@demos/vue/tabs-orientation-size.vue.code.txt?raw'
import TabsUiCustom from '@demos/vue/tabs-ui-custom.vue'
import tabsUiCustomRaw from '@demos/vue/tabs-ui-custom.vue.code.txt?raw'
</script>

## 变体

`variant="pill"` 使用胶囊指示器，`variant="link"` 使用下划线指示器；内容面板跟随激活标签渲染。

<DemoBlock title="pill 与 link 变体" description="variant / v-model" :code="tabsBasicDemoRaw">
  <TabsBasicDemo />
</DemoBlock>

## 方向与尺寸

`orientation="vertical"` 将标签列放在左侧、内容放在右侧；`size` 提供 xs / sm / md / lg / xl 五档，控制标签的内边距、字号与图标尺寸。

<DemoBlock title="纵向 + 多档尺寸" description="orientation / size" :code="tabsOrientationSizeRaw">
  <TabsOrientationSize />
</DemoBlock>

## 字段映射、插槽与 ui 插槽

`icon` / `avatar` / `badge` 字段渲染前置与后置内容；`slot` 字段把内容面板分发到同名插槽；`ui` 按主题插槽覆盖类名。

<DemoBlock title="字段映射 · 插槽 · ui" description="icon / avatar / badge / slot / ui" :code="tabsUiCustomRaw">
  <TabsUiCustom />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-tabs
```

## API

<!--@include: ./api/tabs.md-->

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

## 插槽

| 名称 | 说明 |
| --- | --- |
| leading | 前置内容（{ item, index, ui }） |
| default | 标签文字（{ item, index }） |
| trailing | 后置内容（{ item, index, ui }） |
| content | 内容面板（{ item, index, ui }），按 item.slot 分发 |
| list-leading / list-trailing | 列表前 / 后内容 |

## 事件

| 名称 | 说明 |
| --- | --- |
| update:modelValue | 激活标签变化回调 |

## 动效

- 指示器：位置切换过渡；触发器 hover / 选中颜色过渡

## 设计规格

### 主题 token

- 背景：pill 列表 `bg-elevated`（#f5f5f5 / 暗色 #262626）；指示器 `bg-{color}`（默认 `bg-primary`，green 500）；neutral → `bg-inverted`
- 文字：未激活触发器 `text-muted`，hover `text-default`；pill 激活态 `text-inverted`；link 激活态 `text-{color}`（neutral → `text-highlighted`）；禁用 `opacity-75`
- 描边：link 变体列表 `border-default`；内容区 `focus-visible:outline-3 outline-{color}/25`（neutral → `outline-inverted/25`）
- 圆角与阴影：触发器 `rounded-md`；pill 列表 `rounded-lg`；pill 指示器 `rounded-md shadow-xs`；link 指示器 `rounded-full`
- 变体：

| 变体 | 枚举 | token 组合 |
| --- | --- | --- |
| color | 六色 + neutral | 指示器背景 + 激活态文字 + 焦点描边颜色 |
| variant | pill / link | pill：`list: bg-elevated rounded-lg` + 指示器 `rounded-md shadow-xs`；link：`list: border-default` + 指示器 `rounded-full` |
| orientation | horizontal / vertical | 指示器水平 `translate-x-(--reka-tabs-indicator-position)` / 垂直 `translate-y-…` |
| size | xs / sm / md / lg / xl | 触发器 `px-* py-* text-* gap-*` + 图标尺寸 |

### 交互

- 键盘：reka-ui Tabs 语义——方向键（水平 Left/Right、垂直 Up/Down）移动焦点，默认 `activationMode: automatic` 焦点即激活（manual 时仅移焦、Enter / Space 激活）；Home / End 跳首尾；禁用触发器不可聚焦
- ARIA：list `role=tablist` + `aria-orientation`；trigger `role=tab` + `aria-selected` + `aria-controls`；content `role=tabpanel` + `aria-labelledby`；指示器为纯视觉元素无角色
- 动效：指示器 `transition-[translate,width]`（水平）/ `translate-y`（垂直）`duration-200 ease-out`，`motion-reduce` 关闭；触发器 `transition-colors`（`theme.transitions` 开启时）；SSR 阶段激活高亮由伪元素回退（`before:bg-{color}`），指示器挂载后自动失效
