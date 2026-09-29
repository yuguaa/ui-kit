# hook 用法

有状态与行为的组件提供 vben 风格的 `useXxx` hook：**hook 先行，调用即得 `[Component, api]`**。组件挂载后通过 api 控制实例，与 props 受控用法共存。

## 基本形态

::: code-group

```vue [Vue]
<script setup lang="ts">
import { useXModal } from '@/components/kit/useXModal'

const [Modal, modalApi] = useXModal({ title: '对话框标题' })
</script>

<template>
  <XButton variant="soft" @click="modalApi.open()">打开</XButton>
  <Modal>正文内容</Modal>
</template>
```

```tsx [React]
import { useXModal } from "@/components/kit/x-modal";

const [Modal, modalApi] = useXModal({ title: "对话框标题" });

modalApi.open();
modalApi.setState({ title: "新标题" });
```

:::

## api 一览

| hook | api |
| --- | --- |
| useXModal / useXDrawer / useXSlideover | open · close · toggle · setState |
| useXTooltip | show · hide · toggle · setState |
| useXPopover | open · close · toggle · setState |
| useXCommandPalette / useXDropdownMenu / useXContextMenu | open · close · toggle |
| useXForm | values · errors · setValue · setValues · validate · reset · submit |
| useXTable | loading · page · setLoading · reload · setPage |
| useXStepper | current · next · prev · reset · go |
| useXCarousel | next · prev |
| useXAccordion | value · open(index) · close(index) · toggle(index) |
| useXCollapsible | open · toggle · setOpen |
| useXScrollArea | scrollTo |
| useXSplitter | size · resize |

## React 实现基础

React 端 hook 基于 `lib/kit/bound-store.ts`（useSyncExternalStore 订阅容器），api 操作不依赖宿主重渲染，事件回调里直接调用即可生效。该文件作为 `registry:lib` 独立分发，添加组件时自动带入。

## 底层 hooks

组件级响应式逻辑需要的底层 hook 以 `registry:hook` 独立分发，落盘到 `hooks/` 目录：

- `useIsMobile`：移动端视口判定（< 768px）
- `useMediaQuery`：订阅 CSS 媒体查询结果
