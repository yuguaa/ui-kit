---
title: Form 表单
description: 收集、校验并提交表单数据，支持 rules 规则与 schema 校验
---

# Form 表单

收集、校验并提交表单数据。`rules` 支持 required / pattern / min / max / 自定义 validator；`schema` 接受 zod v4 / valibot v1 等标准 schema 对象，与 rules 叠加校验。

<script setup>
import FormSchema from '@demos/react/form-schema'
import formSchemaRaw from '@demos/react/form-schema.tsx.code.txt?raw'
import FormEvents from '@demos/react/form-events'
import formEventsRaw from '@demos/react/form-events.tsx.code.txt?raw'
import FormUiCustom from '@demos/react/form-ui-custom'
import formUiCustomRaw from '@demos/react/form-ui-custom.tsx.code.txt?raw'
</script>

## schema 校验

`schema` 接受实现 Standard Schema 协议的对象（zod v4 / valibot v1 等），校验错误按 issue 路径映射到字段名。

<DemoBlock title="schema 校验" description="标准 schema 对象接入，错误显示在对应字段" :code="formSchemaRaw">
  <ReactDemo :component="FormSchema" />
</DemoBlock>

## onSubmit 与 onError

校验通过触发 `onSubmit`（载荷为表单数据），失败触发 `onError`（载荷为错误记录）。

<DemoBlock title="onSubmit / onError" description="提交回调与校验失败回调" :code="formEventsRaw">
  <ReactDemo :component="FormEvents" />
</DemoBlock>

## ui 插槽

`ui.root` 自定义表单根元素类名。

<DemoBlock title="ui 插槽" description="ui.root 覆盖根元素类名" :code="formUiCustomRaw">
  <ReactDemo :component="FormUiCustom" />
</DemoBlock>

## 安装

```bash
npx shadcn@latest add @ui-kit/x-form
npx shadcn@latest add @ui-kit/x-form-field
npx shadcn@latest add @ui-kit/x-field-group
```

## useXForm hook

```tsx
const [Form, formApi] = useXForm({
  defaultValues: { email: "" },
  rules: { email: [{ required: true, message: "邮箱不能为空" }] },
});

formApi.setValue("email", "you@example.com");
formApi.validate();   // 校验，返回错误记录
formApi.reset();      // 重置
formApi.submit();     // 提交
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
| values | object | - | 表单数据（受控） |
| defaultValues | object | - | 默认表单数据 |
| rules | Record\<string, XFormRule[]> | - | 校验规则（按字段名）。XFormRule：required / pattern / min / max / validator / message |
| schema | StandardSchema | - | 标准 schema（zod v4 / valibot v1 等），与 rules 叠加校验 |
| disabled | boolean | false | 整体禁用 |
| onSubmit | (values) => void | - | 校验通过后触发 |
| onError | (errors) => void | - | 校验失败触发 |
| ui | XFormUi | - | 主题插槽类名 |

### XFormField

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| render | ReactElement | - | 渲染为指定元素 |
| name | string | - | 字段名（关联表单校验结果） |
| errorPattern | RegExp | - | 正则匹配表单错误名，用于数组字段（如 tags.0） |
| label | ReactNode | - | 标签内容 |
| description | ReactNode | - | 辅助说明 |
| help | ReactNode | - | 无错误时显示的帮助文案 |
| error | boolean · ReactNode | - | 错误信息：true 强制错误态，false 关闭错误显示 |
| hint | ReactNode | - | 标签右侧的提示文案（说明填写要求） |
| size | xs · sm · md · lg · xl | md | 尺寸（控制根节点字号） |
| required | boolean | false | 是否必填 |
| eagerValidation | boolean | false | 输入时立即校验，不等待 blur（供字段内控件读取） |
| validateOnInputDelay | number | 300 | 输入校验的防抖延迟毫秒数（供字段内控件读取） |
| orientation | vertical · horizontal | vertical | 排列方向 |
| id | string | - | 控件 id（label 关联用） |
| ui | XFormFieldUi | - | 主题插槽类名 |

### XFieldGroup

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| render | ReactElement | - | 渲染为指定元素 |
| size | xs · sm · md · lg · xl | md | 尺寸（控制字段间距） |
| orientation | horizontal · vertical | horizontal | 排列方向 |
| inline | boolean | true | 旧属性：true 等价 horizontal，false 等价 vertical |
| ui | XFieldGroupUi | - | 主题插槽类名 |

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

根元素固定输出 `flex flex-col gap-4`（Vue 端主题 `base` 为空），视觉由内部字段与布局决定。

### 交互

- 键盘：无组件级键盘逻辑；提交经 `onSubmit` 阻止默认行为（`noValidate` 关闭原生校验，校验由 rules / schema / validate 完成）
- ARIA：无角色；`loading` 或 `disabled` 时以 `<fieldset disabled class="contents">` 包裹内容禁用全部控件
- 动效：无

**双端差异**：

- Vue 端根元素无布局类；React 端固定 `flex flex-col gap-4`
- Vue 端保留原生表单校验（`api.submit()` 先 `reportValidity()`）；React 端 `noValidate` 完全自管
- Vue 端支持嵌套表单（`nested`）与 schema 转换（`transform`）；React 端无此能力
