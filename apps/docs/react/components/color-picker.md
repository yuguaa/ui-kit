---
title: ColorPicker 颜色选择
description: 从预设色板或色盘中选择颜色
---

# ColorPicker 颜色选择

从预设色板或原生取色器中选择颜色。

<script setup>
import UploadBasic from '@demos/react/upload-basic'
import uploadBasicRaw from '@demos/react/upload-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="颜色选择、验证码输入与文件上传" :code="uploadBasicRaw">
  <ReactDemo :component="UploadBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-color-picker
npx shadcn@latest add @ui-kit/x-pin-input
npx shadcn@latest add @ui-kit/x-file-upload
```

## API

### XColorPicker

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value / defaultValue | string | #1677ff | 绑定颜色 |
| presets | string[] | 九色预设 | 预设色板 |
| onChange | (color) => void | - | 颜色变化回调 |

### XPinInput

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value / defaultValue | string | '' | 绑定值 |
| length | number | 6 | 位数 |
| mask | boolean | false | 是否掩码 |
| onChange / onComplete | (value) => void | - | 值变化 / 输入完成回调 |

### XFileUpload

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| accept | string | - | 接受的文件类型 |
| multiple | boolean | false | 是否多选 |
| maxSize | number | - | 最大体积（MB） |
| upload | (files) => void | - | 上传回调 |
| file | (file, index) => ReactNode | - | 文件项自定义渲染 |

## 动效

- 弹层：淡入 + 缩放进出场（scale 0.95，100ms）
- 色块：hover 边框色过渡
