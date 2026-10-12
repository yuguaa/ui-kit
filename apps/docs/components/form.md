---
title: Form 表单
description: 收集、校验并提交表单数据，支持 rules 规则与 schema 校验
---

# Form 表单

收集、校验并提交表单数据。`rules` 支持 required / pattern / min / max / 自定义 validator；`schema` 接受 zod v4 / valibot v1 等标准 schema 对象，与 rules 叠加校验。

## schema 校验

`schema` 接受实现 Standard Schema 协议的对象（zod v4 / valibot v1 等），校验错误按 issue 路径映射到字段名。

<DemoPreview file="demos/vue/form-schema.vue" title="schema 校验" description="标准 schema 对象接入，错误显示在对应字段" />

## submit 与 error 事件

校验通过触发 `submit` 事件（载荷为表单数据），失败触发 `error` 事件（载荷为错误记录）。

<DemoPreview file="demos/vue/form-events.vue" title="submit / error 事件" description="提交回调与校验失败回调" />

## ui 插槽

`ui.root` 自定义表单根元素类名。

<DemoPreview file="demos/vue/form-ui-custom.vue" title="ui 插槽" description="ui.root 覆盖根元素类名" />

## 安装

```bash
npx shadcn-vue@latest add @ui-kit/x-form
npx shadcn-vue@latest add @ui-kit/x-form-field
npx shadcn-vue@latest add @ui-kit/x-field-group
```

## useXForm hook

```ts
const [Form, formApi] = useXForm({
  defaultValues: { email: '' },
  rules: { email: [{ required: true, message: '邮箱不能为空' }] },
})

formApi.setValue('email', 'you@example.com')
formApi.validate()   // 校验，返回错误记录
formApi.reset()      // 重置
formApi.submit()     // 提交
```

| 名称 | 说明 |
| --- | --- |
| values / errors | 表单数据 / 校验错误 |
| setValue / setValues | 更新字段 / 批量更新 |
| validate / reset / submit | 校验 / 重置 / 提交 |

## API

### XForm

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | object | - | 表单数据 |
| defaultValues | object | - | 默认表单数据 |
| rules | Record\<string, FormRule[]> | - | 校验规则（按字段名）。FormRule：required / pattern / min / max / validator / message |
| schema | StandardSchema | - | 标准 schema（zod v4 / valibot v1 等），与 rules 叠加校验 |
| disabled | boolean | false | 整体禁用 |
| ui | FormUi | - | 主题插槽类名 |
| class | string | - | 根元素类名 |

**事件**：

| 名称 | 载荷 | 说明 |
| --- | --- | --- |
| submit | values | 校验通过后触发 |
| error | errors | 校验失败触发 |

**暴露方法**：validate（校验，返回错误记录；带 schema 时返回 Promise）· reset（重置）· submit（提交）

**插槽**：

| 名称 | 说明 |
| --- | --- |
| default | 表单内容（XFormField 与提交按钮等） |

### XFormField

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as | string · Component | div | 渲染为指定元素或组件 |
| name | string | - | 字段名（关联表单校验结果） |
| errorPattern | RegExp | - | 正则匹配表单错误名，用于数组字段（如 tags.0） |
| label | string | - | 标签文字 |
| description | string | - | 辅助说明 |
| help | string | - | 无错误时显示的帮助文案 |
| error | boolean · string | - | 错误信息：true 强制错误态，false 关闭错误显示 |
| hint | string | - | 标签右侧的提示文案（说明填写要求） |
| size | xs · sm · md · lg · xl | md | 尺寸（控制根节点字号） |
| required | boolean | false | 是否必填 |
| eagerValidation | boolean | false | 输入时立即校验，不等待 blur（供字段内控件读取） |
| validateOnInputDelay | number | 300 | 输入校验的防抖延迟毫秒数（供字段内控件读取） |
| orientation | vertical · horizontal | vertical | 排列方向 |
| id | string | - | 控件 id（label 关联用） |
| ui | FormFieldUi | - | 主题插槽类名 |
| class | string | - | 根元素类名 |

**插槽**：default（字段控件，props: error）· label · description · error · help · hint

### XFieldGroup

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as | string · Component | div | 渲染为指定元素或组件 |
| size | xs · sm · md · lg · xl | md | 尺寸（控制字段间距） |
| orientation | horizontal · vertical | horizontal | 排列方向 |
| inline | boolean | true | 旧属性：true 等价 horizontal，false 等价 vertical |
| ui | FieldGroupUi | - | 主题插槽类名 |
| class | string | - | 根元素类名 |

## ui 插槽

### XForm

| 名称 | 说明 |
| --- | --- |
| root | 表单根元素 |

### XFormField

| 名称 | 说明 |
| --- | --- |
| root | 字段根元素 |
| wrapper | 标签与说明容器 |
| labelWrapper | 标签行（标签与 hint） |
| label | 标签 |
| container | 控件容器 |
| description | 辅助说明 |
| error | 错误信息 |
| hint | 标签右侧提示 |
| help | 帮助文案 |

### XFieldGroup

| 名称 | 说明 |
| --- | --- |
| root | 字段组根元素 |

## 动效

无动效：表单容器组件。

## 设计规格

### 主题 token

| 类别 | 说明 |
| --- | --- |
| 背景 | 无 |
| 文字 | 无 |
| 描边 | 无 |
| 圆角与阴影 | 无 |
| 变体 | 无 |

主题仅输出 `base: ''`，表单保持零样式，视觉由内部字段与布局决定。

### 交互

- 键盘：无组件级键盘逻辑，保留原生 `<form>` 行为（表单内按 Enter 提交）；`api.submit()` 先调用 `reportValidity()`，原生校验不通过时不进入提交流程
- ARIA：无角色与状态属性；顶层渲染 `<form>`，嵌套表单（`nested`）渲染 `<div>`
- 动效：无
