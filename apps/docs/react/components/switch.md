---
title: Switch 开关
description: 表示两种状态之间的切换
---

# Switch 开关

表示两种状态之间的切换，支持选中/未选中文字与两档尺寸。

<script setup>
import InputBasic from '@demos/react/input-basic'
import inputBasicRaw from '@demos/react/input-basic.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="表单控件全景（示例中含开关）" :code="inputBasicRaw">
  <ReactDemo :component="InputBasic" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-switch
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| checked | boolean | false | 是否选中 |
| disabled | boolean | false | 是否禁用 |
| size | default · small | default | 控件尺寸 |
| label | ReactNode | - | 关联文字 |
| checkedChildren / unCheckedChildren | ReactNode | - | 选中 / 未选中时显示内容 |
