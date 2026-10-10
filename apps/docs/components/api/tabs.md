## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as? | any | 'div' | The element or component this component should render as. |
| items? | T[] | - |  |
| color? | Tabs['variants']['color'] | 'primary' |  |
| variant? | Tabs['variants']['variant'] | 'pill' |  |
| size? | Tabs['variants']['size'] | 'md' |  |
| orientation? | Tabs['variants']['orientation'] | 'horizontal' | The orientation of the tabs. |
| content? | boolean | true | The content of the tabs, can be disabled to prevent renderin |
| valueKey? | GetItemKeys&lt;T&gt; | 'value' | The key used to get the value from the item. |
| labelKey? | GetItemKeys&lt;T&gt; | 'label' | The key used to get the label from the item. |
| class? | any | - |  |
| ui? | Tabs['slots'] | - |  |

## Emits

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| update:modelValue | [payload?: any] | - |  |
| update:open | [payload?: any] | - |  |
| change | [payload?: any] | - |  |
| close | [payload?: any] | - |  |
| select | [payload?: any] | - |  |
| highlight | [payload?: any] | - |  |
| entryFocus | [payload?: any] | - |  |
| leave | [payload?: any] | - |  |
| open | [payload?: any] | - |  |
| loading | [payload?: any] | - |  |

## Slots

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| trailing? | SlotProps&lt;T&gt; | - |  |
