## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as? | any | 'div' | The element or component this component should render as. |
| items? | T[] | - |  |
| trailingIcon? | IconProps['name'] | appConfig.ui.icons.chevronDown | The icon displayed on the right side of the trigger. |
| valueKey? | GetItemKeys&lt;T&gt; | 'value' | The key used to get the value from the item. |
| labelKey? | GetItemKeys&lt;T&gt; | 'label' | The key used to get the label from the item. |
| class? | any | - |  |
| ui? | Accordion['slots'] | - |  |

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
| leading? | SlotProps&lt;T&gt; | - |  |
| trailing? | SlotProps&lt;T&gt; | - |  |
| content? | SlotProps&lt;T&gt; | - |  |
| body? | SlotProps&lt;T&gt; | - |  |
