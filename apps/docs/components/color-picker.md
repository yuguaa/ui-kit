---
title: ColorPicker 颜色选择
description: 从预设色板或色盘中选择颜色
---

# ColorPicker 颜色选择

从预设色板或原生取色器中选择颜色。

<script setup>
import UploadBasic from '@demos/vue/upload-basic.vue'
import uploadBasicRaw from '@demos/vue/upload-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="颜色选择、验证码输入与文件上传" :code="uploadBasicRaw">
  <UploadBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-color-picker
npx shadcn-vue@latest add @ui-kit/x-pin-input
npx shadcn-vue@latest add @ui-kit/x-file-upload
```

## API

### XColorPicker

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | string | #1677ff | 绑定颜色 |
| presets | string[] | 九色预设 | 预设色板 |
| disabled | boolean | false | 是否禁用 |

**事件**：change 颜色变化回调

### XPinInput

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | string | '' | 绑定值 |
| length | number | 6 | 位数 |
| mask | boolean | false | 是否掩码 |
| disabled | boolean | false | 是否禁用 |

**事件**：complete 输入完成回调

### XFileUpload

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| accept | string | - | 接受的文件类型（如 image/*, .pdf） |
| multiple | boolean | false | 是否多选 |
| maxSize | number | - | 最大体积（MB） |
| disabled | boolean | false | 是否禁用 |

**插槽**：default 上传区域内容 · file 文件项

**事件**：upload 上传回调
