## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as? | any | 'div' | The element or component this component should render as. |
| items | T[] | - |  |
| size? | any | 'md' |  |
| color? | any | 'primary' |  |
| orientation? | any | 'horizontal' | The orientation of the stepper. |
| valueKey? | GetItemKeys&lt;T&gt; | 'value' | The key used to get the value from the item. |
| defaultValue? | string \| number | - | The value of the step that should be active when initially r |
| disabled? | boolean | - |  |
| class? | any | - |  |
| ui? | Stepper['slots'] | - |  |
| linear? | any | - | 类型修补：reka 透传 prop（仅类型层） |

## Emits

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| next | [value: T] | - |  |
| prev | [value: T] | - |  |

## Slots

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| wrapper? | SlotProps&lt;T&gt; | - |  |
| title? | SlotProps&lt;T&gt; | - |  |
| description? | SlotProps&lt;T&gt; | - |  |
| content? | SlotProps&lt;T&gt; | - |  |
