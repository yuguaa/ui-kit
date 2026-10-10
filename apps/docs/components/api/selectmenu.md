## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| id? | string | - |  |
| placeholder? | string | - | The placeholder text when the select is empty. |
| searchInput? | boolean \| Omit&lt;InputProps, 'modelValue' \| 'defaultValue'&gt; | - |  |
| color? | SelectMenu['variants']['color'] | 'primary' |  |
| variant? | SelectMenu['variants']['variant'] | 'outline' |  |
| size? | SelectMenu['variants']['size'] | 'md' |  |
| required? | boolean | - |  |
| trailingIcon? | IconProps['name'] | appConfig.ui.icons.chevronDown | The icon displayed to open the menu. |
| selectedIcon? | IconProps['name'] | appConfig.ui.icons.check | The icon displayed when an item is selected. |
| clear? | (C & boolean) \| (C & Partial&lt;Omit&lt;ButtonProps, LinkPropsKeys&gt;&gt;) | false | Display a clear button to reset the model value. |
| clearIcon? | IconProps['name'] | appConfig.ui.icons.close | The icon displayed in the clear button. |
| content? | Omit&lt;ComboboxContentProps, 'as' \| 'asChild' \| 'forceMount'&gt; & Partial&lt | - |  |
| arrow? | boolean \| Omit&lt;ComboboxArrowProps, 'as' \| 'asChild'&gt; | - |  |
| portal? | boolean \| string \| HTMLElement | true | Render the menu in a portal. |
| virtualize? | boolean \| { | - |  |
| overscan? | number | 12 | Number of items rendered outside the visible area |
| valueKey? | VK | undefined | When `items` is an array of objects, select the field to use |
| labelKey? | GetItemKeys&lt;T&gt; | 'label' | When `items` is an array of objects, select the field to use |
| descriptionKey? | GetItemKeys&lt;T&gt; | 'description' | When `items` is an array of objects, select the field to use |
| items? | T | - |  |
| defaultValue? | ApplyModifiers&lt;GetModelValue&lt;T, VK, M, ExcludeItem&gt;, Mod&gt; \| IsClear | - | The value of the SelectMenu when initially rendered. Use whe |
| modelValue? | ApplyModifiers&lt;GetModelValue&lt;T, VK, M, ExcludeItem&gt;, Mod&gt; \| IsClear | - | The controlled value of the SelectMenu. Can be binded-with w |
| modelModifiers? | Mod | - |  |
| multiple? | M & boolean | - | Whether multiple options can be selected or not. |
| highlight? | boolean | - | Highlight the ring color like a focus state. |
| fixed? | boolean | - | Keep the mobile text size on all breakpoints. |
| createItem? | boolean \| 'always' \| { position?: 'top' \| 'bottom', when?: 'empty' \| 'always | false | Determines if custom user input that does not exist in optio |
| filterFields? | string[] | [labelKey] | Fields to filter items by. |
| ignoreFilter? | boolean | false | When `true`, disable the default filters, useful for custom  |
| autofocus? | boolean | - |  |
| autofocusDelay? | number | - |  |
| class? | any | - |  |
| ui? | SelectMenu['slots'] | - |  |

## Emits

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| change | [event: Event] | - |  |
| blur | [event: FocusEvent] | - |  |
| focus | [event: FocusEvent] | - |  |
| create | [item: string] | - |  |
| clear | [] | - |  |
| update:modelValue | [value: ApplyModifiers&lt;GetModelValue&lt;A, VK, M, ExcludeItem&gt;, Mod&gt; \| | - |  |

## Slots

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| item? | SlotProps&lt;T&gt; | - |  |
| item-trailing? | SlotProps&lt;T&gt; | - |  |
| content-top? | (props?: {}) =&gt; VNode[] | - |  |
