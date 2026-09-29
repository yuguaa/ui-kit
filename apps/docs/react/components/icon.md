---
title: Icon 图标
description: 名称驱动的矢量图标，内置常用图标集合与五档尺寸
---

# Icon 图标

名称驱动的矢量图标（lucide），内置常用图标集合与五档尺寸。

<script setup>
import BasicMisc from '@demos/react/basic-misc'
import basicMiscRaw from '@demos/react/basic-misc.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="Icon / Kbd / Separator / Skeleton" :code="basicMiscRaw">
  <ReactDemo :component="BasicMisc" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-icon
npx shadcn@latest add @ui-kit/x-kbd
npx shadcn@latest add @ui-kit/x-separator
npx shadcn@latest add @ui-kit/x-skeleton
```

## API

### XIcon

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| name | dashboard · settings · user · search · bell · star · chevron-down · chevron-right · plus · x · check · info · circle-alert · circle-check · menu · trash · copy · external-link · loader-circle | - | 图标名 |
| size | xs · sm · md · lg · xl | md | 尺寸 |
| color | string | - | 颜色 |

### XKbd

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | string | - | 按键内容 |
| size | xs · sm · md · lg · xl | md | 尺寸 |

### XSeparator

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| orientation | horizontal · vertical | horizontal | 方向 |
| color | string | - | 颜色 |

### XSkeleton

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| loading | boolean | true | 是否显示骨架 |
| variant | text · circle · rect | rect | 形状 |
| width / height | number · string | - | 宽高 |
