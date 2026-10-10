## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as? | any | 'div' | The element or component this component should render as. |
| color? | InputDate['variants']['color'] | 'primary' |  |
| variant? | InputDate['variants']['variant'] | 'solid' |  |
| size? | InputDate['variants']['size'] | 'md' |  |
| highlight? | boolean | - | Highlight the ring color like a focus state. |
| fixed? | boolean | - | Keep the mobile text size on all breakpoints. |
| autofocus? | boolean | - |  |
| autofocusDelay? | number | - |  |
| separatorIcon? | IconProps['name'] | appConfig.ui.icons.minus | The icon to use as a range separator. |
| range? | R & boolean | - | Whether or not a range of dates can be selected |
| defaultValue? | InputDateDefaultValue&lt;R&gt; | - |  |
| modelValue? | InputDateModelValue&lt;R&gt; | - |  |
| class? | any | - |  |
| ui? | InputDate['slots'] | - |  |

## Emits

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| update:modelValue | [value: InputDateModelValue&lt;R&gt;] | - |  |
| change | [event: Event] | - |  |
| blur | [event: FocusEvent] | - |  |
| focus | [event: FocusEvent] | - |  |
