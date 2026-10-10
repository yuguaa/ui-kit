## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as? | any | 'div' | The element or component this component should render as. |
| color? | InputTime['variants']['color'] | 'primary' |  |
| variant? | InputTime['variants']['variant'] | 'outline' |  |
| size? | InputTime['variants']['size'] | 'md' |  |
| highlight? | boolean | - | Highlight the ring color like a focus state. |
| fixed? | boolean | - | Keep the mobile text size on all breakpoints. |
| autofocus? | boolean | - |  |
| autofocusDelay? | number | - |  |
| separatorIcon? | IconProps['name'] | appConfig.ui.icons.minus | The icon to use as a range separator. |
| range? | R & boolean | false | Enable time range selection. |
| defaultValue? | InputTimeDefaultValue&lt;R&gt; | - | The value of the input when initially rendered. Use when you |
| modelValue? | InputTimeModelValue&lt;R&gt; | - | The controlled value of the input. Can be bind as `v-model`. |
| class? | any | - |  |
| ui? | InputTime['slots'] | - |  |

## Emits

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| update:modelValue | [value: InputTimeModelValue&lt;R&gt;] | - |  |
| change | [event: Event] | - |  |
| blur | [event: FocusEvent] | - |  |
| focus | [event: FocusEvent] | - |  |
