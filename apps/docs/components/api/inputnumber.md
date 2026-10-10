## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as? | any | 'div' | The element or component this component should render as. |
| placeholder? | string | - | The placeholder text when the input is empty. |
| color? | InputNumber['variants']['color'] | - |  |
| variant? | InputNumber['variants']['variant'] | - |  |
| size? | InputNumber['variants']['size'] | - |  |
| highlight? | boolean | - | Highlight the ring color like a focus state. |
| fixed? | boolean | - | Keep the mobile text size on all breakpoints. |
| orientation? | InputNumber['variants']['orientation'] | 'horizontal' | The orientation of the input number. |
| increment? | boolean \| Omit&lt;ButtonProps, LinkPropsKeys&gt; | - |  |
| incrementIcon? | IconProps['name'] | appConfig.ui.icons.plus | The icon displayed to increment the value. |
| incrementDisabled? | boolean | - | Disable the increment button. |
| decrement? | boolean \| Omit&lt;ButtonProps, LinkPropsKeys&gt; | - |  |
| decrementIcon? | IconProps['name'] | appConfig.ui.icons.minus | The icon displayed to decrement the value. |
| decrementDisabled? | boolean | - | Disable the decrement button. |
| autofocus? | boolean | - |  |
| autofocusDelay? | number | - |  |
| defaultValue? | NonNullable&lt;T&gt; | - |  |
| modelValue? | ApplyModifiers&lt;T, Mod&gt; | - |  |
| modelModifiers? | Mod | - |  |
| class? | any | - |  |
| ui? | InputNumber['slots'] | - |  |

## Emits

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| update:modelValue | [value: ApplyModifiers&lt;T, Mod&gt;] | - |  |
| blur | [event: FocusEvent] | - |  |
| change | [event: Event] | - |  |
