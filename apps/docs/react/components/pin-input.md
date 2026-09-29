---
title: PinInput 验证码输入
description: 分段输入验证码或密码
---

# PinInput 验证码输入

分段输入验证码或密码，支持掩码。

<script setup>
import UploadBasic from '@demos/react/upload-basic'
import uploadBasicRaw from '@demos/react/upload-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="六位验证码输入（示例中）" :code="uploadBasicRaw">
  <ReactDemo :component="UploadBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-pin-input
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value / defaultValue | string | '' | 绑定值 |
| length | number | 6 | 位数 |
| mask | boolean | false | 是否掩码 |
| disabled | boolean | false | 是否禁用 |
| onChange / onComplete | (value) => void | - | 值变化 / 输入完成回调 |

## 动效

无动效：光标闪烁为浏览器默认行为。
