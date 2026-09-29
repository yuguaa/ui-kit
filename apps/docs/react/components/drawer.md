---
title: Drawer 抽屉
description: 从屏幕边缘滑出的面板，承载额外内容或操作
---

# Drawer 抽屉

从屏幕边缘滑出的面板，承载额外内容或操作。

<script setup>
import DrawerBasicDemo from '@demos/react/drawer-basic-demo'
import drawerBasicDemoRaw from '@demos/react/drawer-basic-demo.tsx.code.txt?raw'
</script>

<DemoBlock title="左右两侧" description="side 控制滑出方向" :code="drawerBasicDemoRaw">
  <ReactDemo :component="DrawerBasicDemo" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-drawer
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| open | boolean | false | 是否打开 |
| side | left · right | right | 滑出方向 |
| dismissible | boolean | true | 点击遮罩关闭 |
| title | ReactNode | - | 标题 |
| header / footer | ReactNode | - | 自定义头部 / 底部操作区 |
| onOpenChange | (open) => void | - | 打开状态变化回调 |

## hook

```tsx
const [Drawer, drawerApi] = useXDrawer({ title: "抽屉标题" })
drawerApi.open()   // open / close / toggle / setState
```

## 动效

- 面板：滑入滑出（200ms）
- 遮罩：淡入淡出（200ms）
