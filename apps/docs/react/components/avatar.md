---
title: Avatar 头像
description: 头像用于展示用户形象，支持圆形/方形、五档尺寸、图片、图标、文字与 chip 徽标
---

# Avatar 头像

头像用于展示用户形象，支持圆形/方形、五档尺寸、图片、图标、文字与 chip 徽标，图片加载失败时自动展示 fallback 内容。

<script setup>
import AvatarSizes from '@demos/react/avatar-sizes'
import avatarSizesRaw from '@demos/react/avatar-sizes.tsx.code.txt?raw'
import AvatarIconText from '@demos/react/avatar-icon-text'
import avatarIconTextRaw from '@demos/react/avatar-icon-text.tsx.code.txt?raw'
import AvatarColors from '@demos/react/avatar-colors'
import avatarColorsRaw from '@demos/react/avatar-colors.tsx.code.txt?raw'
import AvatarChip from '@demos/react/avatar-chip'
import avatarChipRaw from '@demos/react/avatar-chip.tsx.code.txt?raw'
import AvatarUi from '@demos/react/avatar-ui'
import avatarUiRaw from '@demos/react/avatar-ui.tsx.code.txt?raw'
</script>

## 尺寸与形状

<DemoBlock title="五档尺寸与形状" description="size 控制尺寸，shape 切换圆形 / 方形" :code="avatarSizesRaw">
  <ReactDemo :component="AvatarSizes" />
</DemoBlock>

## 图片、文字与图标

有 src 时展示图片，加载失败自动展示 fallback；无图片时可通过 text 显示文字，也可使用 icon 属性（图标名或图标元素）显示图标，两者都缺省时由 alt 生成首字母（最多两个）。

<DemoBlock title="图片 · 文字 · 图标 · 首字母" description="src 图片、text 文字、icon 属性图标、alt 首字母回退" :code="avatarIconTextRaw">
  <ReactDemo :component="AvatarIconText" />
</DemoBlock>

## 语义色

color 属性为文字/图标头像提供七种语义色背景（1 阶背景、7 阶文字色），默认 neutral。

<DemoBlock title="七种语义色" description="color 属性控制文字/图标头像的背景与文字色" :code="avatarColorsRaw">
  <ReactDemo :component="AvatarColors" />
</DemoBlock>

## chip 徽标

chip 接受布尔或配置对象。布尔渲染默认主色圆点；对象可指定 text、color、size 与 position（top-right / bottom-right / top-left / bottom-left）。

<DemoBlock title="chip 徽标" description="布尔圆点与配置对象徽标" :code="avatarChipRaw">
  <ReactDemo :component="AvatarChip" />
</DemoBlock>

## ui 插槽自定义

ui 按主题插槽（root / image / fallback / icon）覆盖类名。

<DemoBlock title="ui 插槽类名" description="root / image / fallback 插槽类名" :code="avatarUiRaw">
  <ReactDemo :component="AvatarUi" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-avatar
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| shape | circle · square | circle | 头像形状 |
| size | xs · sm · md · lg · xl | md | 头像尺寸，头像组透传时自身优先 |
| src | string | - | 图片地址 |
| alt | string | - | 图片替代文本，同时用于生成首字母回退 |
| text | string | - | 无图片时显示的文字（如姓名首字） |
| icon | XIconName · ReactNode | - | 图标名或图标元素 |
| color | primary · secondary · neutral · success · info · warning · error | neutral | 文字/图标头像的语义色，头像组透传时自身优先 |
| chip | boolean · XAvatarChip | - | 头像上的徽标 |
| onError | (event) => void | - | 图片加载失败回调 |
| render | ReactElement | span | 渲染为指定元素 |
| ui | XAvatarUi | - | 主题插槽类名 |
| className | string | - | 根元素类名 |
| style | any | - | 根元素样式 |

### XAvatarChip

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string · number | - | 徽标文字，缺省渲染纯色圆点 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 徽标颜色 |
| size | xs · sm · md · lg · xl | xs | 徽标尺寸 |
| position | top-right · bottom-right · top-left · bottom-left | top-right | 徽标位置 |
| className | string | - | 徽标类名 |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 头像根元素 |
| image | 图片元素 |
| fallback | 文字/图标回退容器 |
| icon | 图标容器 |

## 动效

无动效：静态展示组件。
