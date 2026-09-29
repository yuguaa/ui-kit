---
title: Modal 对话框
description: 模态对话框，用于承载需要用户确认的信息或操作
---

# Modal 对话框

模态对话框，用于承载需要用户确认的信息或操作。底部操作区默认提供取消与确定按钮，可通过 footer 插槽自定义。

<script setup>
import ModalBasicDemo from '@demos/vue/modal-basic-demo.vue'
import modalBasicDemoRaw from '@demos/vue/modal-basic-demo.vue.code.txt?raw'
import ModalHook from '@demos/vue/modal-hook.vue'
import modalHookRaw from '@demos/vue/modal-hook.vue.code.txt?raw'
</script>

## 基础用法

<DemoBlock title="受控打开与确认回调" description="v-model:open / ok / cancel 事件" :code="modalBasicDemoRaw">
  <ModalBasicDemo />
</DemoBlock>

## hook 用法

<DemoBlock title="hook 先行" description="useXModal 返回 [Modal, modalApi]，api 控制打开关闭与 setState" :code="modalHookRaw">
  <ModalHook />
</DemoBlock>

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-modal
```

## API

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| open | boolean | false | 是否显示对话框（支持 v-model:open） |
| title | string | - | 标题 |
| description | string | - | 辅助说明 |
| width | number | 520 | 对话框宽度 |
| maskClosable | boolean | true | 点击遮罩是否关闭 |
| centered | boolean | false | 是否垂直居中显示 |
| okText / cancelText | string | 确 定 / 取 消 | 按钮文字 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| title | 自定义标题 |
| content | 正文内容 |
| footer | 底部操作区，默认含取消与确定按钮 |

## 事件

| 名称 | 说明 |
| --- | --- |
| ok | 点击确定按钮的回调 |
| cancel | 点击取消按钮的回调 |

## hook

```ts
const [Modal, modalApi] = useXModal({ title: '对话框标题', onOk: () => {} })
modalApi.open()      // open / close / toggle
modalApi.setState({ title: '新标题' })
```

## 动效

- 遮罩：淡入淡出（200ms）
- 面板：缩放进出场（scale 0.95，200ms）
