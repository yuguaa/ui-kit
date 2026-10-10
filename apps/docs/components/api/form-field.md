## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as? | any | 'div' | The element or component this component should render as. |
| name? | string | - | The name of the FormField. Also used to match form errors. |
| errorPattern? | RegExp | - | A regular expression to match form error names. Useful for c |
| label? | string | - |  |
| description? | string | - |  |
| help? | string | - |  |
| error? | boolean \| string | - |  |
| hint? | string | - |  |
| size? | FormField['variants']['size'] | 'md' |  |
| required? | boolean | - |  |
| eagerValidation? | boolean | - | If true, validation on input will be active immediately inst |
| validateOnInputDelay? | number | `300` | Delay in milliseconds before validating the form on input ev |
| orientation? | FormField['variants']['orientation'] | 'vertical' | The orientation of the form field. |
| class? | any | - |  |
| ui? | FormField['slots'] | - |  |
