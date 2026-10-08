---
title: Switch 开关
description: 表示两种状态之间的切换，支持选中/未选中文字、两档尺寸、加载态与说明文字
---

# Switch 开关

表示两种状态之间的切换，支持选中/未选中文字、两档尺寸、加载态与说明文字。

<script setup>
import SwitchBasicDemo from '@demos/react/switch-basic-demo'
import switchBasicDemoRaw from '@demos/react/switch-basic-demo.tsx.code.txt?raw'
import SwitchLoadingDemo from '@demos/react/switch-loading-demo'
import switchLoadingDemoRaw from '@demos/react/switch-loading-demo.tsx.code.txt?raw'
</script>

<DemoBlock title="开关 / 文字 / 尺寸" description="checked / checkedChildren / size / disabled" :code="switchBasicDemoRaw">
  <ReactDemo :component="SwitchBasicDemo" />
</DemoBlock>

## 加载态与说明文字

loading 阻止交互并显示旋转图标，description 展示 label 下方的辅助说明文字。

<DemoBlock title="加载态" description="loading 阻止交互，description 展示辅助说明" :code="switchLoadingDemoRaw">
  <ReactDemo :component="SwitchLoadingDemo" />
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
| loading | boolean | false | 加载态：阻止交互并显示旋转图标 |
| size | default · small | default | 控件尺寸 |
| label | ReactNode | - | 关联文字 |
| description | ReactNode | - | label 下方的辅助说明文字 |
| checkedChildren / unCheckedChildren | ReactNode | - | 选中 / 未选中时显示内容 |

## 动效

- 滑块：位移过渡 + 背景色过渡（200ms ease-out）
- loading：图标旋转
