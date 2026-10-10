---
title: Input 输入框
description: 支持 leading / trailing 插槽、变体与颜色、校验状态
---

# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

<script setup>
import InputBasicDemo from '@demos/vue/input-basic-demo.vue'
import inputBasicDemoRaw from '@demos/vue/input-basic-demo.vue.code.txt?raw'
import InputVariants from '@demos/vue/input-variants.vue'
import inputVariantsRaw from '@demos/vue/input-variants.vue.code.txt?raw'
import InputStates from '@demos/vue/input-states.vue'
import inputStatesRaw from '@demos/vue/input-states.vue.code.txt?raw'
import InputAddon from '@demos/vue/input-addon.vue'
import inputAddonRaw from '@demos/vue/input-addon.vue.code.txt?raw'
import InputClearable from '@demos/vue/input-clearable.vue'
import inputClearableRaw from '@demos/vue/input-clearable.vue.code.txt?raw'
import InputUi from '@demos/vue/input-ui.vue'
import inputUiRaw from '@demos/vue/input-ui.vue.code.txt?raw'
</script>

## 基础用法

size 支持 xs / sm / md / lg / xl 五档；leading / trailing 插槽在输入框两侧渲染任意内容。

<DemoBlock title="尺寸与两侧插槽" description="size / leading / trailing" :code="inputBasicDemoRaw">
  <InputBasicDemo />
</DemoBlock>

## 变体与颜色

variant 支持 outline / soft / subtle / ghost / none；color 控制聚焦描边颜色；highlight 始终显示颜色描边，类似聚焦态；fixed=false 时桌面端缩小一档字号。

<DemoBlock title="变体、颜色、高亮" description="variant / color / highlight / fixed" :code="inputVariantsRaw">
  <InputVariants />
</DemoBlock>

## 校验状态

<DemoBlock title="错误 / 警告 / 禁用" description="status / disabled" :code="inputStatesRaw">
  <InputStates />
</DemoBlock>

## 前后置标签

<DemoBlock title="addon" description="addonBefore / addonAfter 插槽" :code="inputAddonRaw">
  <InputAddon />
</DemoBlock>

## 清空按钮

clearable 在输入有值、未禁用、未只读时显示清空按钮；与 trailing 内容同时存在时，清空按钮排在最后并预留右侧内边距。

<DemoBlock title="一键清空" description="clearable 属性与 clear 事件" :code="inputClearableRaw">
  <InputClearable />
</DemoBlock>

## ui 插槽自定义

<DemoBlock title="主题插槽类名" description="ui 的 root / base / leading / trailing 键与左侧头像" :code="inputUiRaw">
  <InputUi />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-input
```

## API

<!--@include: ./api/input.md-->

**事件**：clear 点击清空按钮时触发（update:modelValue 支持 v-model）

**插槽**：leading 前置内容 · trailing 后置内容 · prefix 前置图标 · suffix 后缀图标 · addonBefore 前置标签 · addonAfter 后置标签

**方法**：focus() · blur() · select()

## ui 插槽

| 键 | 说明 |
| --- | --- |
| root | 根元素 |
| base | 输入框 |
| leading | 前置内容容器 |
| leadingIcon | 前置默认图标 |
| leadingAvatar | 前置头像 |
| leadingAvatarSize | 前置头像尺寸 |
| trailing | 后置内容容器 |
| trailingIcon | 后置默认图标 |

## 动效

- focus：outline 加粗过渡（transition-colors）
- 无位移动画
