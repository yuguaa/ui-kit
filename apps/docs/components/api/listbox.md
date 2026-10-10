## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| id? | string | - |  |
| as? | any | 'div' | The element or component this component should render as. |
| color? | Listbox['variants']['color'] | 'primary' |  |
| size? | Listbox['variants']['size'] | 'md' |  |
| items? | T | - | The items to display in the list. |
| modelValue? | ApplyModifiers&lt;GetModelValue&lt;T, VK, M&gt;, Mod&gt; | - | The controlled value of the Listbox. Can be bound with `v-mo |
| modelModifiers? | Mod | - |  |
| defaultValue? | ApplyModifiers&lt;GetModelValue&lt;T, VK, M&gt;, Mod&gt; | - | The default value when not controlled. |
| multiple? | M & boolean | false | Whether multiple items can be selected. |
| valueKey? | VK | undefined | When `items` is an array of objects, select the field to use |
| labelKey? | GetItemKeys&lt;T&gt; | 'label' | The key used to get the label from the item. |
| descriptionKey? | GetItemKeys&lt;T&gt; | 'description' | The key used to get the description from the item. |
| loading? | boolean | - | Whether the list is in a loading state. |
| loadingIcon? | IconProps['name'] | appConfig.ui.icons.loading | The icon displayed when loading. |
| filter? | boolean \| Omit&lt;InputProps, 'modelValue' \| 'defaultValue'&gt; | - |  |
| filterFields? | string[] | [labelKey] | The fields to filter by. |
| ignoreFilter? | boolean | false | When `true`, disable the default filters, useful for custom  |
| selectedIcon? | IconProps['name'] | appConfig.ui.icons.check | The icon displayed when an item is selected. |
| virtualize? | boolean \| { | false | Enable virtualization for large lists. |
| overscan? | number | 12 | Number of items rendered outside the visible area |
| highlight? | boolean | - | Highlight the ring color like a focus state. |
| autofocus? | boolean | - |  |
| autofocusDelay? | number | - |  |
| class? | any | - |  |
| ui? | Listbox['slots'] | - |  |

## Emits

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| change | [event: Event] | - |  |
| update:modelValue | [value: ApplyModifiers&lt;GetModelValue&lt;T, VK, M&gt;, Mod&gt;] | - |  |

## Slots

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| item? | SlotProps&lt;NestedItem&lt;T&gt;&gt; | - |  |
| item-trailing? | SlotProps&lt;NestedItem&lt;T&gt;&gt; | - |  |
