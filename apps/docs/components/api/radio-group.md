## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as? | any | 'div' | The element or component this component should render as. |
| legend? | string | - |  |
| valueKey? | VK | 'value' | When `items` is an array of objects, select the field to use |
| labelKey? | GetItemKeys&lt;T&gt; | 'label' | When `items` is an array of objects, select the field to use |
| descriptionKey? | GetItemKeys&lt;T&gt; | 'description' | When `items` is an array of objects, select the field to use |
| items? | T | - |  |
| modelValue? | GetModelValue&lt;T, VK, false&gt; | - | The controlled value of the RadioGroup. Can be bind as `v-mo |
| defaultValue? | GetModelValue&lt;T, VK, false&gt; | - | The value of the RadioGroup when initially rendered. Use whe |
| size? | RadioGroup['variants']['size'] | 'md' |  |
| variant? | RadioGroup['variants']['variant'] | 'list' |  |
| color? | RadioGroup['variants']['color'] | 'primary' |  |
| highlight? | boolean | - | Highlight the ring color like a focus state. |
| orientation? | RadioGroup['variants']['orientation'] | 'vertical' | The orientation the radio buttons are laid out. |
| indicator? | RadioGroup['variants']['indicator'] | 'start' | Position of the indicator. |
| class? | any | - |  |
| ui? | RadioGroup['slots'] | - |  |

## Emits

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| change | [event: Event] | - |  |

## Slots

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| label? | SlotProps&lt;T[number]&gt; | - |  |
| description? | SlotProps&lt;T[number]&gt; | - |  |
