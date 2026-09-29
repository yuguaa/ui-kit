---
title: Checkbox 多选框
description: 在一组可选项中进行多项选择
---

# Checkbox 多选框

在一组可选项中进行多项选择，支持半选状态。

<script setup>
import CheckboxBasicDemo from '@demos/react/checkbox-basic-demo'
import checkboxBasicDemoRaw from '@demos/react/checkbox-basic-demo.tsx.code.txt?raw'
</script>

<DemoBlock title="选中 / 半选 / 禁用" description="checked / indeterminate / disabled" :code="checkboxBasicDemoRaw">
  <ReactDemo :component="CheckboxBasicDemo" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-checkbox
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| checked | boolean | false | 是否选中 |
| disabled | boolean | false | 是否禁用 |
| indeterminate | boolean | false | 半选状态 |
| value | string · number | - | 选项的值 |
| label | ReactNode | - | 选项文字 |

## 动效

- 勾选：状态颜色过渡
- focus：聚焦环过渡
- 无位移动画
