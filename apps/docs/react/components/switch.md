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

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| checked | boolean | false | 是否选中（受控） |
| defaultChecked | boolean | false | 初始选中状态（非受控） |
| onCheckedChange | (checked: boolean) => void | - | 选中状态变化回调 |
| disabled | boolean | false | 是否禁用 |
| name | string | - | 表单字段名 |
| id | string | - | 控件 id，label 通过 htmlFor 关联 |
| required | boolean | false | 必选项，label 后显示 * |
| color | primary · secondary · neutral · success · info · warning · error | primary | 选中时滑块轨道的语义色 |
| size | default · small | default | 控件尺寸 |
| highlight | boolean | false | 常显高亮聚焦环 |
| loading | boolean | false | 加载态：阻止交互并显示旋转图标 |
| loadingIcon | ElementType | 旋转图标 | 加载图标 |
| checkedIcon | ElementType | - | 选中时滑块内图标 |
| uncheckedIcon | ElementType | - | 未选中时滑块内图标 |
| label | ReactNode | - | 关联文字 |
| description | ReactNode | - | 关联文字下方的辅助说明 |
| checkedChildren / unCheckedChildren | ReactNode | - | 选中 / 未选中时显示内容 |
| render | ReactElement | - | 渲染为指定元素 |
| ui | XSwitchUi | - | 主题插槽类名 |
| className | string | - | 根元素类名 |

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
