---
title: FileUpload 文件上传
description: 上传文件，支持拖拽与多文件
---

# FileUpload 文件上传

上传文件，支持点击与拖拽、多文件与体积限制。

<script setup>
import UploadBasic from '@demos/react/upload-basic'
import uploadBasicRaw from '@demos/react/upload-basic.tsx.code.txt?raw'
import UploadControlled from '@demos/react/upload-controlled'
import uploadControlledRaw from '@demos/react/upload-controlled.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="拖拽上传区域（示例中）" :code="uploadBasicRaw">
  <ReactDemo :component="UploadBasic" />
</DemoBlock>

## 受控与状态

`files` 传入后组件以受控模式运行，列表变化通过 `onFilesChange` 通知。
每个文件可带 `status`（uploading / done / error）与 `progress`（0-100）：uploading 展示进度条与百分比，error 展示错误色。

<DemoBlock title="受控列表与上传状态" description="files 受控列表，演示上传进度与错误状态" :code="uploadControlledRaw">
  <ReactDemo :component="UploadControlled" />
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
| files | XFileUploadFile[] | - | 受控文件列表，未传入时组件内部维护 |
| onFilesChange | (files) => void | - | 文件列表变化回调 |
| onRemove | (file, index) => void | - | 移除文件回调 |

### XFileUploadFile

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| name | string | 文件名 |
| size | number | 文件体积（字节） |
| status | 'uploading' \| 'done' \| 'error' | 上传状态 |
| progress | number | 上传进度（0-100），status 为 uploading 时展示 |

## 动效

- 拖拽区：hover 边框高亮 + 背景过渡
- 上传中：进度条平滑推进，完成态切换
