## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as? | any | 'div' | The element or component this component should render as. |
| color? | PinInput['variants']['color'] | 'primary' |  |
| variant? | PinInput['variants']['variant'] | 'outline' |  |
| size? | PinInput['variants']['size'] | 'md' |  |
| length? | number \| string | 5 | The number of input fields. |
| autofocus? | boolean | - |  |
| autofocusDelay? | number | - |  |
| highlight? | boolean | - |  |
| fixed? | boolean | - | Keep the mobile text size on all breakpoints. |
| separator? | number \| number[] | - | Group inputs by inserting a separator between them. |
| class? | any | - |  |
| ui? | PinInput['slots'] | - |  |

## Emits

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| change | [event: Event] | - |  |
| blur | [event: Event] | - |  |
| focus | [event: Event] | - |  |
