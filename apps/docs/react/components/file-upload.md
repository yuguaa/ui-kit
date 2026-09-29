---
title: FileUpload 文件上传
description: 上传文件，支持拖拽与多文件
---

# FileUpload 文件上传

上传文件，支持点击与拖拽、多文件与体积限制。

<script setup>
import UploadBasic from '@demos/react/upload-basic'
import uploadBasicRaw from '@demos/react/upload-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="拖拽上传区域（示例中）" :code="uploadBasicRaw">
  <ReactDemo :component="UploadBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-file-upload
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| accept | string | - | 接受的文件类型 |
| multiple | boolean | false | 是否多选 |
| maxSize | number | - | 最大体积（MB） |
| disabled | boolean | false | 是否禁用 |
| upload | (files) => void | - | 上传回调 |
| file | (file, index) => ReactNode | - | 文件项自定义渲染 |

## 动效

- 拖拽区：hover 边框高亮 + 背景过渡
