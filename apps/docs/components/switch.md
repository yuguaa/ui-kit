---
title: Switch 开关
description: 表示两种状态之间的切换，支持滑块内图标、语义色、两档尺寸、加载态与说明文字
---

# Switch 开关

表示两种状态之间的切换，支持滑块内图标、语义色、两档尺寸、加载态与说明文字。

<script setup>
import SwitchBasicDemo from '@demos/vue/switch-basic-demo.vue'
import switchBasicDemoRaw from '@demos/vue/switch-basic-demo.vue.code.txt?raw'
import SwitchLoadingDemo from '@demos/vue/switch-loading-demo.vue'
import switchLoadingDemoRaw from '@demos/vue/switch-loading-demo.vue.code.txt?raw'
import SwitchIconsDemo from '@demos/vue/switch-icons.vue'
import switchIconsRaw from '@demos/vue/switch-icons.vue.code.txt?raw'
import SwitchUiCustomDemo from '@demos/vue/switch-ui-custom.vue'
import switchUiCustomRaw from '@demos/vue/switch-ui-custom.vue.code.txt?raw'
</script>

<DemoBlock title="开关 / 文字 / 尺寸 / 语义色" description="v-model / checkedChildren 插槽 / size / disabled / color" :code="switchBasicDemoRaw">
  <SwitchBasicDemo />
</DemoBlock>

## 加载态、说明文字与必选

loading 阻止交互并显示旋转图标，description 展示 label 下方的辅助说明文字。

<DemoBlock title="加载态与说明" description="loading / loadingIcon / description / required" :code="switchLoadingDemoRaw">
  <SwitchLoadingDemo />
</DemoBlock>

## 滑块内图标与聚焦环

`checkedIcon` / `uncheckedIcon` 在滑块内按状态显示图标；`highlight` 常显聚焦环。

<DemoBlock title="滑块内图标与 highlight" description="checkedIcon / uncheckedIcon / highlight / color" :code="switchIconsRaw">
  <SwitchIconsDemo />
</DemoBlock>

## ui 插槽

`ui` 按主题插槽覆盖类名。

<DemoBlock title="ui 插槽自定义" description="ui 键：root / base / container / thumb / icon / wrapper / label / description" :code="switchUiCustomRaw">
  <SwitchUiCustomDemo />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-switch
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

## 插槽

| 名称 | 说明 |
| --- | --- |
| label | 关联文字插槽，props 含 label |
| description | 辅助说明插槽，props 含 description |
| checkedChildren | 开启状态文字插槽 |
| unCheckedChildren | 关闭状态文字插槽 |

## 事件

| 名称 | 说明 |
| --- | --- |
| update:modelValue | 选中状态变化 |
| change | 状态切换时触发，event.target.value 为当前值 |

## 动效

- 滑块：位移过渡 + 背景色过渡（200ms ease-out）
- loading：图标旋转
