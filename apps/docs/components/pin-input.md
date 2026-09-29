---
title: PinInput 验证码输入
description: 分段输入验证码或密码
---

# PinInput 验证码输入

分段输入验证码或密码，支持掩码。

<script setup>
import UploadBasic from '@demos/vue/upload-basic.vue'
import uploadBasicRaw from '@demos/vue/upload-basic.vue.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="六位验证码输入（示例中）" :code="uploadBasicRaw">
  <UploadBasic />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-pin-input
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | string | '' | 绑定值（支持 v-model） |
| length | number | 6 | 位数 |
| mask | boolean | false | 是否掩码 |
| disabled | boolean | false | 是否禁用 |

## 事件

| 名称 | 说明 |
| --- | --- |
| complete | 输入完成回调 |
