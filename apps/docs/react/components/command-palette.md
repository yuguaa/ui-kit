---
title: CommandPalette 命令面板
description: 全局命令搜索与快捷操作面板
---

# CommandPalette 命令面板

全局命令搜索与快捷操作面板，基于 shadcn command（cmdk）+ dialog，快捷键以 Kbd 形式展示。

<script setup>
import NavigationBasic from '@demos/react/navigation-basic'
import navigationBasicRaw from '@demos/react/navigation-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="点击「打开命令面板」按钮体验" :code="navigationBasicRaw">
  <ReactDemo :component="NavigationBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-command-palette
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| open | boolean | false | 是否打开 |
| groups | { label, commands }[] | - | 命令分组数组 |
| searchable | boolean | true | 是否可搜索 |
| closeOnSelect | boolean | true | 选择后关闭 |
| empty / footer | ReactNode | - | 空状态 / 底部内容 |
| onOpenChange | (open) => void | - | 打开状态变化回调 |

**ref 方法**：open() · close() · toggle()

## hook

```tsx
const [CommandPalette, paletteApi] = useXCommandPalette({ groups: [...] })
paletteApi.open()   // open / close / toggle
```
