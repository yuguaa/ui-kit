---
title: Switch 开关
description: 表示两种状态之间的切换，支持选中/未选中文字、两档尺寸、加载态与说明文字
---

# Switch 开关

表示两种状态之间的切换，支持选中/未选中文字、两档尺寸、加载态与说明文字。

<script setup>
import SwitchBasicDemo from '@demos/vue/switch-basic-demo.vue'
import switchBasicDemoRaw from '@demos/vue/switch-basic-demo.vue.code.txt?raw'
import SwitchLoadingDemo from '@demos/vue/switch-loading-demo.vue'
import switchLoadingDemoRaw from '@demos/vue/switch-loading-demo.vue.code.txt?raw'
</script>

<DemoBlock title="开关 / 文字 / 尺寸" description="v-model / checkedChildren 插槽 / size / disabled" :code="switchBasicDemoRaw">
  <SwitchBasicDemo />
</DemoBlock>

## 加载态与说明文字

loading 阻止交互并显示旋转图标，description 插槽展示 label 下方的辅助说明文字。

<DemoBlock title="加载态" description="loading 阻止交互，description 插槽展示辅助说明" :code="switchLoadingDemoRaw">
  <SwitchLoadingDemo />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-switch
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| checked | boolean | false | 是否选中（支持 v-model） |
| disabled | boolean | false | 是否禁用 |
| loading | boolean | false | 加载态：阻止交互并显示旋转图标 |
| size | default · small | default | 控件尺寸 |
| label | string | - | 关联文字 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| checkedChildren | 开启状态文字插槽 |
| unCheckedChildren | 关闭状态文字插槽 |
| description | label 下方的辅助说明文字插槽 |

## 动效

- 滑块：位移过渡 + 背景色过渡（200ms ease-out）
- loading：图标旋转
