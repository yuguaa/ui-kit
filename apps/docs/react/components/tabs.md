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

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| render | ReactElement | div | 渲染为指定元素 |
| items | XTabsItem[] | [] | 标签项数组 |
| value | string · number | - | 当前激活的标签 value（受控） |
| defaultValue | string · number | 0 | 初始激活的标签 value |
| color | primary · secondary · neutral · success · info · warning · error | primary | 组件颜色 |
| variant | pill · link | pill | 预设样式 |
| size | xs · sm · md · lg · xl | md | 标签尺寸 |
| orientation | horizontal · vertical | horizontal | 标签排列方向 |
| content | boolean | true | 是否渲染内容区 |
| valueKey | string | value | 从标签项取 value 的字段，支持点路径 |
| labelKey | string | label | 从标签项取 label 的字段，支持点路径 |
| unmountOnHide | boolean | true | 隐藏面板时是否卸载内容 |
| onValueChange | (value) => void | - | 激活标签变化回调 |
| ui | XTabsUi | - | 主题插槽类名 |
| className | string | - | 根元素类名 |
| leading | (props) => ReactNode | - | 前置内容渲染函数（{ item, index, ui }） |
| trailing | (props) => ReactNode | - | 后置内容渲染函数（{ item, index, ui }） |
| children | (props) => ReactNode | - | 标签文字渲染函数（{ item, index }） |
| contentSlot | (props) => ReactNode | - | 内容面板渲染函数（{ item, index, ui }） |
| listLeading / listTrailing | ReactNode | - | 列表前 / 后内容 |

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
