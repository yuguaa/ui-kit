---
title: Input 输入框
description: 支持前后缀图标、前后置标签与 error / warning 校验状态
---

# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

<script setup>
import InputBasicDemo from '@demos/vue/input-basic-demo.vue'
import inputBasicDemoRaw from '@demos/vue/input-basic-demo.vue.code.txt?raw'
import InputStates from '@demos/vue/input-states.vue'
import inputStatesRaw from '@demos/vue/input-states.vue.code.txt?raw'
import InputAddon from '@demos/vue/input-addon.vue'
import inputAddonRaw from '@demos/vue/input-addon.vue.code.txt?raw'
</script>

## 基础用法

<DemoBlock title="尺寸与图标" description="size / prefix / suffix 插槽" :code="inputBasicDemoRaw">
  <InputBasicDemo />
</DemoBlock>

## 校验状态

<DemoBlock title="错误 / 警告 / 禁用" description="status / disabled" :code="inputStatesRaw">
  <InputStates />
</DemoBlock>

## 前后置标签

<DemoBlock title="addon" description="addonBefore / addonAfter 插槽" :code="inputAddonRaw">
  <InputAddon />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-input
npx shadcn-vue@latest add @ui-kit/x-textarea
npx shadcn-vue@latest add @ui-kit/x-checkbox
npx shadcn-vue@latest add @ui-kit/x-radio-group
npx shadcn-vue@latest add @ui-kit/x-switch
```

## API

### XInput

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size | sm · md | md | 控件尺寸 |
| status | error · warning | - | 设置校验状态 |
| placeholder | string | - | 占位提示文字 |
| disabled | boolean | false | 是否禁用 |
| maxLength | number | - | 最大输入长度 |

**插槽**：prefix 前缀图标 · suffix 后缀图标 · addonBefore 前置标签 · addonAfter 后置标签

**方法**：focus() · blur() · select()

### XTextarea

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | string | - | 绑定值 |
| rows | number | 3 | 行数 |
| autosize | boolean | false | 自动调整高度 |
| status | error · warning | - | 校验状态 |

### XCheckbox

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| checked | boolean | false | 是否选中 |
| indeterminate | boolean | false | 半选状态 |
| value | string · number | - | 选项的值 |
| disabled | boolean | false | 是否禁用 |

### XRadioGroup

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| options | { value, label, disabled }[] | - | 选项数据源 |
| variant | radio · button | radio | 展示形式 |
| buttonStyle | outline · solid | outline | 按钮样式 |

### XSwitch

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| checked | boolean | false | 是否选中 |
| disabled | boolean | false | 是否禁用 |
| size | default · small | default | 控件尺寸 |

**插槽**：checkedChildren 开启状态文字 · unCheckedChildren 关闭状态文字

## 动效

- focus：ring 加粗过渡（transition-[box-shadow,color]）
- 无位移动画
