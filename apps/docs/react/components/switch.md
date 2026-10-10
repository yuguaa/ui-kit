---
title: Switch 开关
description: 表示两种状态之间的切换，支持滑块内图标、语义色、两档尺寸、加载态与说明文字
---

# Switch 开关

表示两种状态之间的切换，支持滑块内图标、语义色、两档尺寸、加载态与说明文字。

<script setup>
import SwitchBasicDemo from '@demos/react/switch-basic-demo'
import switchBasicDemoRaw from '@demos/react/switch-basic-demo.tsx.code.txt?raw'
import SwitchLoadingDemo from '@demos/react/switch-loading-demo'
import switchLoadingDemoRaw from '@demos/react/switch-loading-demo.tsx.code.txt?raw'
import SwitchIconsDemo from '@demos/react/switch-icons'
import switchIconsRaw from '@demos/react/switch-icons.tsx.code.txt?raw'
import SwitchUiCustomDemo from '@demos/react/switch-ui-custom'
import switchUiCustomRaw from '@demos/react/switch-ui-custom.tsx.code.txt?raw'
</script>

<DemoBlock title="开关 / 文字 / 尺寸 / 语义色" description="checked / checkedChildren / size / disabled / color" :code="switchBasicDemoRaw">
  <ReactDemo :component="SwitchBasicDemo" />
</DemoBlock>

## 加载态、说明文字与必选

loading 阻止交互并显示旋转图标，description 展示 label 下方的辅助说明文字。

<DemoBlock title="加载态与说明" description="loading / loadingIcon / description / required" :code="switchLoadingDemoRaw">
  <ReactDemo :component="SwitchLoadingDemo" />
</DemoBlock>

## 滑块内图标与聚焦环

`checkedIcon` / `uncheckedIcon` 在滑块内按状态显示图标；`highlight` 常显聚焦环。

<DemoBlock title="滑块内图标与 highlight" description="checkedIcon / uncheckedIcon / highlight / color" :code="switchIconsRaw">
  <ReactDemo :component="SwitchIconsDemo" />
</DemoBlock>

## ui 插槽

`ui` 按主题插槽覆盖类名。

<DemoBlock title="ui 插槽自定义" description="ui 键：root / base / container / thumb / icon / wrapper / label / description" :code="switchUiCustomRaw">
  <ReactDemo :component="SwitchUiCustomDemo" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-switch
```

## API

<!--@include: ./api/switch.md-->

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| root | 根容器 |
| base | 开关控件 |
| container | 控件包裹层 |
| thumb | 滑块 |
| icon | 滑块内图标 |
| wrapper | label 与 description 容器 |
| label | 关联文字 |
| description | 辅助说明 |

## 动效

- 滑块：位移过渡 + 背景色过渡（200ms ease-out）
- loading：图标旋转
