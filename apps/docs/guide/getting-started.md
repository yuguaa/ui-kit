# 快速开始

ui-kit 的组件通过 **shadcn CLI registry** 分发：注册一次，之后 `add` 任意组件都会自动带入依赖的 shadcn 原子组件并安装 npm 依赖。

## 1. 初始化项目

```bash
# Vue 项目
npx shadcn-vue@latest init

# React 项目
npx shadcn@latest init
```

## 2. 注册 ui-kit registry

**Vue 项目**：在 `components.json` 中注册：

```json
{
  "registries": {
    "@ui-kit": "https://git.newcapec.cn/02-newcapec/ai/UIService/helper/ui-kit/-/raw/main/registry/vue/items/{name}.json"
  }
}
```

**React 项目**：

```bash
npx shadcn@latest registry add @ui-kit=https://git.newcapec.cn/02-newcapec/ai/UIService/helper/ui-kit/-/raw/main/registry/react/items/{name}.json
```

## 3. 添加组件

```bash
# Vue
npx shadcn-vue@latest add @ui-kit/x-button

# React
npx shadcn@latest add @ui-kit/x-button
```

添加时 CLI 会自动：

- 拉取组件源码到 `components/kit/`（依赖的原子组件落到 `components/ui/`，工具函数落到 `lib/`）
- 安装组件声明的 npm 依赖
- 把设计 token（语义色色阶、圆角、阴影、字体阶梯）注入项目 CSS 的 `@theme`

## 4. 使用

::: code-group

```vue [Vue]
<script setup lang="ts">
import XButton from '@/components/kit/XButton.vue'
</script>

<template>
  <XButton variant="soft" color="success" size="lg">保存</XButton>
</template>
```

```tsx [React]
import { XButton } from "@/components/kit/x-button";

export default function App() {
  return (
    <XButton variant="soft" color="success" size="lg">
      保存
    </XButton>
  );
}
```

:::

## 本地验证分发链路

registry JSON 提交前可先用本地服务器验证：

```bash
pnpm serve:registry          # 启动 http://localhost:8123
# 把项目 components.json 中的 @ui-kit 地址临时改为
# http://localhost:8123/registry/{vue|react}/items/{name}.json
```
