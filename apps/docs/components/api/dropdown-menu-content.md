## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items? | T | - |  |
| portal? | boolean \| string \| HTMLElement | - |  |
| sub? | boolean | - |  |
| labelKey | GetItemKeys&lt;T&gt; | - |  |
| descriptionKey | GetItemKeys&lt;T&gt; | - |  |
| checkedIcon? | IconProps['name'] | - |  |
| loadingIcon? | IconProps['name'] | - |  |
| externalIcon? | boolean \| IconProps['name'] | - |  |
| size? | DropdownMenu['variants']['size'] | - |  |
| filter? | boolean \| Omit&lt;InputProps, 'modelValue' \| 'defaultValue'&gt; | - |  |
| filterFields? | string[] | - |  |
| ignoreFilter? | boolean | - |  |
| searchTerm? | string | - |  |
| class? | any | - |  |
| ui | DropdownMenu['ui'] | - |  |
| uiOverride? | DropdownMenu['slots'] | - |  |

## Emits

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| update:searchTerm | [value: string] | - |  |
