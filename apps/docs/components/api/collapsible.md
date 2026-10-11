## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as? | any | 'div' | The element or component this component should render as. |
| class? | any | - |  |
| ui? | Collapsible['slots'] | - |  |
| defaultOpen? | any | - | reka Collapsible Root 透传成员（类型补齐，运行时经 useForwardProps 转发） |
| open? | any | - |  |
| disabled? | any | - |  |
| unmountOnHide? | any | - |  |

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
