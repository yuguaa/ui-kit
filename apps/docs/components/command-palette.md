---
title: CommandPalette 命令面板
description: 全局命令搜索与快捷操作面板
---

# CommandPalette 命令面板

全局命令搜索与快捷操作面板，基于 shadcn-vue command + dialog，快捷键以 Kbd 形式展示。

<script setup>
import NavigationBasic from '@demos/vue/navigation-basic.vue'
import navigationBasicRaw from '@demos/vue/navigation-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="点击「打开命令面板」按钮体验" :code="navigationBasicRaw">
  <NavigationBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-command-palette
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| open | boolean | false | 是否打开（支持 v-model:open） |
| groups | { label, commands }[] | - | 命令分组数组 |
| searchable | boolean | true | 是否可搜索 |
| closeOnSelect | boolean | true | 选择后关闭 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| empty | 空状态内容 |
| footer | 底部内容 |

## 事件

| 名称 | 说明 |
| --- | --- |
| select | 命令执行回调 |

## hook

```ts
const [CommandPalette, paletteApi] = useXCommandPalette({ groups: [...] })
paletteApi.open()   // open / close / toggle
```
