---
title: Tabs 标签页
description: 在同一区域内切换不同视图或内容分组
---

# Tabs 标签页

用于在同一区域内切换不同视图或内容分组，支持 line / card 样式与 destroyOnHide。

<script setup>
import TabsBasicDemo from '@demos/react/tabs-basic-demo'
import tabsBasicDemoRaw from '@demos/react/tabs-basic-demo.tsx.code.txt?raw'
</script>

<DemoBlock title="line 与 card 样式" description="activeKey / onChange / type" :code="tabsBasicDemoRaw">
  <ReactDemo :component="TabsBasicDemo" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-tabs
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | { key, label, content?, disabled? }[] | - | 标签项数组 |
| activeKey | string | - | 当前激活的标签 key |
| defaultActiveKey | string | 首项 | 初始激活的标签 key |
| type | line · card | line | 标签样式 |
| destroyOnHide | boolean | false | 隐藏时是否销毁内容 |
| onChange | (key) => void | - | 切换激活标签的回调 |

## 动效

- 指示器：透明度过渡
- trigger：hover 文字色过渡
- 无位移动画
