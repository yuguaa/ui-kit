## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as? | any | 'div' | The element or component this component should render as. |
| orientation? | ScrollArea['variants']['orientation'] | 'vertical' | The scroll direction. |
| items? | T[] | - | Array of items to render. |
| virtualize? | boolean \| ScrollAreaVirtualizeOptions | - |  |
| shadow? | boolean \| { size?: number } | false | Display fade shadows on the scrollable edges to indicate mor |
| class? | any | - |  |
| ui? | ScrollArea['slots'] | - |  |

## Emits

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| scroll | [isScrolling: boolean] | - | Emitted when scroll state changes |
