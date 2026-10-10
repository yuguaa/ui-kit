## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| id? | string \| number | - |  |
| schema? | S | - | Schema to validate the form state. Supports Standard Schema  |
| state? | N extends false ? Partial&lt;InferInput&lt;S&gt;&gt; : never | - | An object representing the current state of the form. |
| validate? | (state: Partial&lt;InferInput&lt;S&gt;&gt;) =&gt; Promise&lt;FormError[]&gt; \|  | - | Custom validation function to validate the form state. |
| validateOn? | FormInputEvents[] | `['blur', 'change', 'input']` | The list of input events that trigger the form validation. |
| disabled? | boolean | - | Disable all inputs inside the form. |
| name? | string | - | The `name` attribute of the form element. |
| validateOnInputDelay? | number | `300` | Delay in milliseconds before validating the form on input ev |
| transform? | T | `true` | If true, applies schema transformations on submit. |
| nested? | N & boolean | `false` | If true, this form will attach to its parent Form and valida |
| loadingAuto? | boolean | `true` | When `true`, all form elements will be disabled on `@submit` |
| class? | any | - |  |
| ui? | { base?: any } | - |  |

## Emits

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| submit | [event: FormSubmitEvent&lt;FormData&lt;S, T&gt;&gt;] | - |  |
| error | [event: FormErrorEvent] | - |  |
