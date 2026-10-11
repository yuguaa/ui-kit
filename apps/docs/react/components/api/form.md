## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| values? | Record&lt;string, unknown&gt; | - | 表单数据 |
| defaultValues? | Record&lt;string, unknown&gt; | - | 默认表单数据 |
| rules? | Record&lt;string, XFormRule[]&gt; | - | 校验规则（按字段名） |
| schema? | StandardSchema | - | 标准 schema（zod v4 / valibot v1 等），与 rules 叠加校验 |
| validate? | (values: Record&lt;string, unknown&gt;) =&gt; Promise&lt;Record&lt;string, strin | - | 自定义校验（返回各字段错误信息），与 rules、schema 叠加 |
| validateOn? | XFormValidateOn[] | - | 触发校验的事件列表；提交时始终校验 |
| validateOnInputDelay? | number | - | input 事件校验的防抖延迟（毫秒），默认 300 |
| loadingAuto? | boolean | - | onSubmit 返回 Promise 时自动进入 loading 并禁用表单，默认 true |
| disabled? | boolean | - | 整体禁用 |
| onSubmit? | (values: Record&lt;string, unknown&gt;) =&gt; void | - | 提交回调（校验通过后触发） |
| onError? | (errors: Record&lt;string, string&gt;) =&gt; void | - | 校验失败回调 |
| ui? | XFormUi | - | 主题插槽类名 |
