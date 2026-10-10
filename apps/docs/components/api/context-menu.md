## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size? | ContextMenu['variants']['size'] | 'md' |  |
| items? | T | - |  |
| checkedIcon? | IconProps['name'] | appConfig.ui.icons.check | The icon displayed when an item is checked. |
| loadingIcon? | IconProps['name'] | appConfig.ui.icons.loading | The icon displayed when an item is loading. |
| externalIcon? | boolean \| IconProps['name'] | appConfig.ui.icons.external | The icon displayed when the item is an external link. |
| content? | Omit&lt;ContextMenuContentProps, 'as' \| 'asChild' \| 'forceMount'&gt; & Partial | - | The content of the menu. |
| portal? | boolean \| string \| HTMLElement | true | Render the menu in a portal. |
| labelKey? | GetItemKeys&lt;T&gt; | 'label' | The key used to get the label from the item. |
| descriptionKey? | GetItemKeys&lt;T&gt; | 'description' | The key used to get the description from the item. |
| disabled? | boolean | - |  |
| class? | any | - |  |
| ui? | ContextMenu['slots'] | - |  |

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
| item? | SlotProps&lt;T&gt; | - |  |
| item-leading? | SlotProps&lt;T&gt; | - |  |
| item-label? | (props: { item: T, active: boolean, index: number }) =&gt; VNode[] | - |  |
| item-description? | (props: { item: T, active: boolean, index: number }) =&gt; VNode[] | - |  |
| item-trailing? | SlotProps&lt;T&gt; | - |  |
| content-top? | (props: { sub: boolean }) =&gt; VNode[] | - |  |
| content-bottom? | (props: { sub: boolean }) =&gt; VNode[] | - |  |
