---
title: FileUpload 文件上传
description: 点击或拖拽上传文件，支持多文件与图片预览
---

# FileUpload 文件上传

点击或拖拽上传文件。支持 area / button 两种形态、list / grid 两种文件布局、图片预览、删除与丰富的插槽体系。

<script setup>
import FileUploadBasic from '@demos/vue/file-upload-basic.vue'
import fileUploadBasicRaw from '@demos/vue/file-upload-basic.vue.code.txt?raw'
import FileUploadLayouts from '@demos/vue/file-upload-layouts.vue'
import fileUploadLayoutsRaw from '@demos/vue/file-upload-layouts.vue.code.txt?raw'
import FileUploadButton from '@demos/vue/file-upload-button.vue'
import fileUploadButtonRaw from '@demos/vue/file-upload-button.vue.code.txt?raw'
import FileUploadSlots from '@demos/vue/file-upload-slots.vue'
import fileUploadSlotsRaw from '@demos/vue/file-upload-slots.vue.code.txt?raw'
import FileUploadUiCustom from '@demos/vue/file-upload-ui-custom.vue'
import fileUploadUiCustomRaw from '@demos/vue/file-upload-ui-custom.vue.code.txt?raw'
</script>

## 基础用法

`v-model` 绑定原生 File（单选）或 File[]（多选），`label` 与 `description` 描述上传区域。

<DemoBlock title="基础用法" description="拖拽或点击上传，选择后展示文件信息" :code="fileUploadBasicRaw">
  <FileUploadBasic />
</DemoBlock>

## 文件布局

`multiple` 开启多选，`layout` 控制 list / grid 两种文件列表布局。

<DemoBlock title="list 与 grid 布局" description="multiple 时文件列表在拖拽区内展示" :code="fileUploadLayoutsRaw">
  <FileUploadLayouts />
</DemoBlock>

## button 形态

`variant="button"` 将上传区域渲染为按钮（仅单选可用），默认插槽提供按钮内容。

<DemoBlock title="button 形态" description="按钮式上传入口" :code="fileUploadButtonRaw">
  <FileUploadButton />
</DemoBlock>

## 插槽

`actions` 自定义操作区，`file` 自定义文件项；`default`、`leading`、`label`、`description`、`files`、`files-top`、`files-bottom`、`file-leading`、`file-name`、`file-size`、`file-trailing` 均可覆盖。

<DemoBlock title="actions 与 file 插槽" description="插槽参数包含 files / open / removeFile / file / index" :code="fileUploadSlotsRaw">
  <FileUploadSlots />
</DemoBlock>

## ui 插槽

<DemoBlock title="ui 插槽与 highlight" description="base / wrapper / label 类名覆盖，highlight 常驻描边" :code="fileUploadUiCustomRaw">
  <FileUploadUiCustom />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-file-upload
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | File · File[] · null | - | 绑定文件（v-model） |
| variant | area · button | area | 预设样式，button 仅在 multiple 为 false 时可用 |
| layout | list · grid | grid | 文件展示布局，仅在 variant 为 area 时生效 |
| position | inside · outside | outside | 文件列表位置，仅在 variant 为 area 且 layout 为 list 时生效 |
| color | primary · secondary · neutral · success · info · warning · error | primary | 组件颜色（聚焦描边与高亮） |
| size | xs · sm · md · lg · xl | md | 控件尺寸 |
| highlight | boolean | false | 始终显示颜色描边，类似聚焦态 |
| label | string | - | 上传区域文案 |
| description | string | - | 上传区域描述 |
| icon | string · false | - | 上传区域图标（XIcon 名称），false 隐藏 |
| accept | string | * | 接受的文件类型（逗号分隔的 MIME 类型或扩展名） |
| multiple | boolean | false | 多选（开启后强制 area 形态） |
| reset | boolean | false | 打开文件对话框前重置 input |
| dropzone | boolean | true | 允许拖拽文件到上传区域 |
| interactive | boolean | true | 点击上传区域打开文件对话框 |
| required | boolean | false | 必填 |
| disabled | boolean | false | 禁用 |
| fileIcon | string | - | 文件缩略图图标（XIcon 名称） |
| fileImage | boolean | true | 渲染图片预览，false 时仅显示 fileIcon |
| fileDelete | boolean · FileUploadFileDelete | true | 删除按钮：布尔或按钮配置 |
| fileDeleteIcon | string | - | 删除按钮图标（XIcon 名称） |
| preview | boolean | true | 上传后展示文件列表 |
| id | string | - | 表单字段 id |
| name | string | - | 表单提交字段名 |
| as | string · Component | div | 渲染为指定元素或组件 |
| ui | FileUploadUi | - | 主题插槽类名 |

> 组件同时支持所有原生 `<input>` 属性，未声明的属性透传到隐藏的文件输入框。

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根元素 |
| base | 上传区域（拖拽区/按钮） |
| wrapper | 上传区域内容容器 |
| icon | button 形态的图标 |
| avatar | area 形态的图标容器 |
| label | 上传区域文案 |
| description | 上传区域描述 |
| actions | 操作区容器 |
| files | 文件列表容器 |
| file | 单个文件项 |
| fileLeadingAvatar | 文件缩略图 |
| fileWrapper | 文件名与体积容器 |
| fileName | 文件名 |
| fileSize | 文件体积 |
| fileTrailingButton | 删除按钮 |

## 插槽

| 名称 | 参数 | 说明 |
| --- | --- | --- |
| default | { open, removeFile, ui } | 整个组件内容 |
| leading | { ui } | 上传区域前置内容 |
| label | - | 上传区域文案 |
| description | - | 上传区域描述 |
| actions | { files, open, removeFile } | 操作区 |
| files | { files, removeFile } | 文件列表 |
| files-top | { files, open, removeFile } | 文件列表顶部 |
| files-bottom | { files, open, removeFile } | 文件列表底部 |
| file | { file, index, removeFile } | 文件项 |
| file-leading | { file, index, ui, removeFile } | 文件前置内容 |
| file-name | { file, index } | 文件名 |
| file-size | { file, index } | 文件体积 |
| file-trailing | { file, index, ui, removeFile } | 文件尾部内容 |

## 事件

| 名称 | 说明 |
| --- | --- |
| change | 文件列表变化（Event，target.value 为当前文件） |
| update:modelValue | 模型变化（v-model） |

**方法**（ref 调用）：open() 打开文件对话框；暴露 inputRef / dropzoneRef。

## 动效

- 拖拽区：hover 背景过渡（transition-[background]），拖入时虚线边框高亮
- 文件列表：无进出场动效，删除即时生效

## 设计规格

### 主题 token

- 背景：base `bg-default`（#ffffff / 暗色 #171717）；可交互 hover `bg-elevated/25`；拖入中 `data-[dragging=true]:bg-elevated/25`；禁用 `opacity-75`
- 文字：label `text-default font-medium`；description / fileSize `text-muted`；fileName `text-default`
- 描边：base `border border-default`；`dropzone` 时 `border-dashed`；`highlight` 时 `border-{color}`；焦点 `focus-visible:outline-3 outline-{color}/25 focus-visible:border-{color}`；文件项 `border border-default`；grid 删除按钮 `border-2 border-bg`
- 圆角与阴影：base 与文件项 `rounded-lg`（8px）；grid 文件头像 `rounded-lg`；grid 删除按钮 `rounded-full`
- 变体：

| 变体 | 枚举 | token 组合 |
| --- | --- | --- |
| color | 六色 + neutral | 焦点描边与高亮描边颜色 |
| variant | area / button | area：`wrapper: px-4 py-3` + `base: p-4`；button：无文字区，紧凑内边距 |
| size | xs / sm / md / lg / xl | 根字号、图标尺寸、文件项内边距 |
| layout | list / grid | list：文件行 `border-default rounded-md`；grid：缩略图 `aspect-square` |
| position | inside / outside | 文件列表相对上传区的位置 |
| dropzone / interactive / highlight / multiple / disabled | true | 见背景与描边 |

### 交互

- 键盘：area 形态拖放区为 `div role="button" tabindex="0"`（`interactive` 且未禁用），Enter / Space 打开文件对话框（`keydown.space.prevent` 防页面滚动）；`variant="button"` 时为原生 `<button>`；删除文件后焦点回到拖放区
- ARIA：area 拖放区 `role="button"` + `aria-disabled`；文件选择器为 `VisuallyHidden` 隐藏 `<input type="file">`；删除按钮 `aria-label="移除 {文件名}"`；禁用时拖放被忽略
- 动效：拖放区 hover 背景 `transition-[background] ease-out`；拖入态即时切换无过渡；文件列表无进出场动效
