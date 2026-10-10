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

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as | string · Component | div | 渲染为指定元素或组件 |
| items | TabsItem[] | [] | 标签项数组 |
| modelValue | string · number | - | 当前激活的标签 value（受控） |
| defaultValue | string · number | 0 | 初始激活的标签 value |
| color | primary · secondary · neutral · success · info · warning · error | primary | 组件颜色 |
| variant | pill · link | pill | 预设样式 |
| size | xs · sm · md · lg · xl | md | 标签尺寸 |
| orientation | horizontal · vertical | horizontal | 标签排列方向 |
| content | boolean | true | 是否渲染内容区 |
| valueKey | string | value | 从标签项取 value 的字段，支持点路径 |
| labelKey | string | label | 从标签项取 label 的字段，支持点路径 |
| activationMode | automatic · manual | automatic | 激活方式：聚焦即激活 / 仅点击激活 |
| unmountOnHide | boolean | true | 隐藏面板时是否卸载内容 |
| ui | TabsUi | - | 主题插槽类名 |
| class | string | - | 根元素类名 |

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
