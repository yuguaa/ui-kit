## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as? | any | 'div' | The element or component this component should render as. |
| id? | string | - | A unique id for the group, also used to derive the ids of it |
| orientation? | Splitter['variants']['orientation'] | 'horizontal' | The orientation of the splitter. |
| items? | T[] | - |  |
| disabled? | boolean | false | Whether the resize handles are disabled, locking the current |
| class? | any | - |  |
| ui? | Splitter['slots'] | - |  |

## Emits

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| layout | SplitterGroupEmits['layout'] | - |  |
| collapse | [index: number] | - |  |
| expand | [index: number] | - |  |
| resize | [index: number, size: number, prevSize?: number] | - |  |
| dragging | [index: number, dragging: boolean] | - |  |

## Slots

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| resize-handle? | (props: { index: number, ui: Splitter['ui'] }) =&gt; VNode[] | - |  |
