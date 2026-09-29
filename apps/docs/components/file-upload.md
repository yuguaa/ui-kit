---
title: FileUpload 文件上传
description: 上传文件，支持拖拽与多文件
---

# FileUpload 文件上传

上传文件，支持点击与拖拽、多文件与体积限制。

<script setup>
import UploadBasic from '@demos/vue/upload-basic.vue'
import uploadBasicRaw from '@demos/vue/upload-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="拖拽上传区域（示例中）" :code="uploadBasicRaw">
  <UploadBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-file-upload
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| accept | string | - | 接受的文件类型（如 image/*, .pdf） |
| multiple | boolean | false | 是否多选 |
| maxSize | number | - | 最大体积（MB） |
| disabled | boolean | false | 是否禁用 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 上传区域内容 |
| file | 文件项（{ file, index }） |

## 事件

| 名称 | 说明 |
| --- | --- |
| upload | 上传回调（files） |

**方法**（ref 调用）：clear()
