---
title: Progress 进度条
description: 展示操作的当前进度，支持线形与圆形
---

# Progress 进度条

展示操作的当前进度，支持线形与圆形两种类型。

<script setup>
import ProgressLine from '@demos/vue/progress-line.vue'
import progressLineRaw from '@demos/vue/progress-line.vue.code.txt?raw'
import ProgressCircle from '@demos/vue/progress-circle.vue'
import progressCircleRaw from '@demos/vue/progress-circle.vue.code.txt?raw'
</script>

## 线形进度

status 控制语义色，active 状态带指示器脉冲。

<DemoBlock title="线形与状态" description="percent / status" :code="progressLineRaw">
  <ProgressLine />
</DemoBlock>

## 圆形进度

<DemoBlock title="圆形与隐藏数值" description="type=circle / size / showInfo" :code="progressCircleRaw">
  <ProgressCircle />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-progress
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| percent | number | 0 | 完成百分比 |
| type | line · circle | line | 进度类型 |
| status | normal · success · exception · active | normal | 进度状态 |
| strokeColor | string | 主色 | 进度条颜色 |
| showInfo | boolean | true | 是否显示数值 |
| size | number | 96 | 圆形直径（px） |

## 动效

- 值变化：描边过渡（200ms）
- active：指示器脉冲动画
