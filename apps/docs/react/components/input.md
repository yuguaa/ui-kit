---
title: Input 输入框
description: 支持 leading / trailing 插槽、变体与颜色、校验状态
---

# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

<script setup>
import InputBasicDemo from "@demos/react/input-basic-demo"
import inputBasicDemoRaw from '@demos/react/input-basic-demo.tsx.code.txt?raw'
import InputVariants from "@demos/react/input-variants"
import inputVariantsRaw from '@demos/react/input-variants.tsx.code.txt?raw'
import InputStates from "@demos/react/input-states"
import inputStatesRaw from '@demos/react/input-states.tsx.code.txt?raw'
import InputAddon from "@demos/react/input-addon"
import inputAddonRaw from '@demos/react/input-addon.tsx.code.txt?raw'
import InputClearable from "@demos/react/input-clearable"
import inputClearableRaw from '@demos/react/input-clearable.tsx.code.txt?raw'
import InputUi from "@demos/react/input-ui"
import inputUiRaw from '@demos/react/input-ui.tsx.code.txt?raw'
</script>

## 基础用法

size 支持 xs / sm / md / lg / xl 五档；leading / trailing 在输入框两侧渲染任意内容。

<DemoBlock title="尺寸与两侧内容" description="size / leading / trailing" :code="inputBasicDemoRaw">
  <ReactDemo :component="InputBasicDemo" />
</DemoBlock>

## 变体与颜色

variant 支持 outline / soft / subtle / ghost / none；color 控制聚焦描边颜色；highlight 始终显示颜色描边，类似聚焦态；fixed=false 时桌面端缩小一档字号。

<DemoBlock title="变体、颜色、高亮" description="variant / color / highlight / fixed" :code="inputVariantsRaw">
  <ReactDemo :component="InputVariants" />
</DemoBlock>

## 校验状态

<DemoBlock title="错误 / 警告 / 禁用" description="status / disabled" :code="inputStatesRaw">
  <ReactDemo :component="InputStates" />
</DemoBlock>

## 前后置标签

<DemoBlock title="addon" description="addonBefore / addonAfter" :code="inputAddonRaw">
  <ReactDemo :component="InputAddon" />
</DemoBlock>

## 清空按钮

clearable 在输入有值、未禁用、未只读时显示清空按钮；与 trailing 内容同时存在时，清空按钮排在最后并预留右侧内边距。

<DemoBlock title="一键清空" description="clearable 属性与 onClear 回调" :code="inputClearableRaw">
  <ReactDemo :component="InputClearable" />
</DemoBlock>

## ui 插槽自定义

<DemoBlock title="主题插槽类名" description="ui 的 root / base / leading / trailing 键与左侧头像" :code="inputUiRaw">
  <ReactDemo :component="InputUi" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-input
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size | xs · sm · md · lg · xl | md | 控件尺寸 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 组件颜色（聚焦描边与高亮） |
| variant | outline · soft · subtle · ghost · none | outline | 预设样式 |
| highlight | boolean | false | 始终显示颜色描边，类似聚焦态 |
| fixed | boolean | true | 保持移动端字号在所有断点一致 |
| status | error · warning | - | 设置校验状态 |
| placeholder | string | - | 占位提示文字 |
| disabled | boolean | false | 是否禁用 |
| maxLength | number | - | 最大输入长度 |
| clearable | boolean | false | 有值且未禁用、未只读时显示清空按钮 |
| avatar | XAvatarProps | - | 左侧头像配置 |
| leading / trailing | ReactNode | - | 前置 / 后置内容 |
| prefix / suffix | ReactNode | - | 前置 / 后置图标 |
| addonBefore / addonAfter | ReactNode | - | 前置 / 后置标签 |
| render | ReactElement | - | 渲染为指定元素 |
| ui | XInputUi | - | 主题插槽类名 |
| onClear | () => void | - | 点击清空按钮时回调 |

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
