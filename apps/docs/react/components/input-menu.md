---
title: InputMenu 输入菜单
description: 输入框与下拉菜单组合的组件
---

# InputMenu 输入菜单

输入框与下拉菜单组合的组件，输入关键字过滤菜单项，选中后回填输入框。

<script setup>
import SelectBasic from '@demos/react/select-basic'
import selectBasicRaw from '@demos/react/select-basic.tsx.code.txt?raw'
import InputMenuCreate from '@demos/react/input-menu-create'
import inputMenuCreateRaw from '@demos/react/input-menu-create.tsx.code.txt?raw'
</script>

<DemoBlock title="基础用法" description="选择类组件全景（示例中含输入菜单）" :code="selectBasicRaw">
  <ReactDemo :component="SelectBasic" />
</DemoBlock>

<DemoBlock title="清空与自由输入新建项" description="clearable 清空已选项；createItem 关键字不存在时，回车或点击列表底部「创建」行新建选项" :code="inputMenuCreateRaw">
  <ReactDemo :component="InputMenuCreate" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-input-menu
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | { label, value }[] | - | 菜单项数组 |
| searchable | boolean | true | 是否可搜索 |
| placeholder | string | 搜索并选择… | 占位文字 |
| disabled | boolean | false | 是否禁用 |
| clearable | boolean | false | 有选中项时显示清空按钮 |
| createItem | boolean | false | 关键字不存在时回车创建新选项 |
| onSelect | (item) => void | - | 选中回调 |
| onCreate | (value) => void | - | 创建新选项回调 |

## 动效

- 弹层：淡入 + 缩放进出场（scale 0.95，100ms）
- 输入框：focus ring 过渡
