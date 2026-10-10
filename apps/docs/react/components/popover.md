---
title: Popover 气泡
description: 点击或悬停触发的轻量气泡卡片
---

# Popover 气泡

点击或悬停触发的轻量气泡卡片。支持 anchor 锚点定位、dismissible 关闭策略与 portal 渲染。

<script setup>
import PopoverBasicDemo from '@demos/react/popover-basic-demo'
import popoverBasicDemoRaw from '@demos/react/popover-basic-demo.tsx.code.txt?raw'
import PopoverArrowDemo from '@demos/react/popover-arrow-demo'
import popoverArrowDemoRaw from '@demos/react/popover-arrow-demo.tsx.code.txt?raw'
import PopoverAnchor from '@demos/react/popover-anchor'
import popoverAnchorRaw from '@demos/react/popover-anchor.tsx.code.txt?raw'
import PopoverUiCustom from '@demos/react/popover-ui-custom'
import popoverUiCustomRaw from '@demos/react/popover-ui-custom.tsx.code.txt?raw'
</script>

## 基础用法

`mode` 区分点击（click）与悬停（hover）触发；`content` 传函数时接收 `close` 方法，可在内容里直接关闭。

<DemoBlock title="click / hover / 函数内容" description="mode 与 content 函数作用域" :code="popoverBasicDemoRaw">
  <ReactDemo :component="PopoverBasicDemo" />
</DemoBlock>

## 箭头

开启 `arrow` 后浮层显示指向触发元素的箭头。

<DemoBlock title="带箭头浮层" description="arrow" :code="popoverArrowDemoRaw">
  <ReactDemo :component="PopoverArrowDemo" />
</DemoBlock>

## 锚点

`anchor` 指定定位参考元素，浮层相对它而不是触发器定位。

<DemoBlock title="anchor 锚点" description="anchor 作为定位参考" :code="popoverAnchorRaw">
  <ReactDemo :component="PopoverAnchor" />
</DemoBlock>

## 关闭策略与 ui 插槽

`dismissible` 为 false 时点击外部或按 Esc 不会关闭，改为回调 `onClosePrevent`；`ui` 属性按主题插槽键（content / arrow）覆盖类名。

<DemoBlock title="dismissible · ui" description="禁止外部关闭与主题定制" :code="popoverUiCustomRaw">
  <ReactDemo :component="PopoverUiCustom" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-popover
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| mode | click · hover | click | 触发模式 |
| open | boolean | false | 是否打开（受控） |
| defaultOpen | boolean | false | 初始是否打开 |
| modal | boolean | false | 模态：聚焦锁定与遮罩拦截（仅 click 模式） |
| openDelay | number | 0 | 悬停打开延迟（毫秒，仅 hover 模式） |
| closeDelay | number | 0 | 悬停关闭延迟（毫秒，仅 hover 模式） |
| arrow | boolean | false | 是否显示指向触发元素的箭头 |
| portal | boolean | true | 渲染到 body |
| dismissible | boolean | true | 允许点击外部或按 Esc 关闭 |
| className | string | - | 根节点类名（有触发器时绑到触发器） |
| ui | XPopoverUi | - | 主题插槽类名 |
| onOpenChange | (open, details) => void | - | 打开状态变化回调 |
| onClosePrevent | () => void | - | 关闭被阻止（dismissible 为 false 时点击外部或按 Esc） |

## ui 插槽

| 名称 | 说明 |
| --- | --- |
| content | 气泡内容面板 |
| arrow | 指向箭头 |

## 插槽（props）

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| children | ReactNode | 触发元素（default 插槽） |
| content | ReactNode \| ((close) => ReactNode) | 气泡内容，传函数时接收 close 方法 |
| anchor | ReactNode | 定位参考元素（anchor 插槽） |

## hook

```tsx
const [Popover, popoverApi] = useXPopover()
popoverApi.open()   // open / close / toggle
```

## 动效

- 弹层：淡入 + 缩放进出场（100ms）
