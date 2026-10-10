## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| as? | any | 'div' | The element or component this component should render as. |
| prev? | Omit&lt;ButtonProps, LinkPropsKeys&gt; | - |  |
| prevIcon? | IconProps['name'] | appConfig.ui.icons.arrowLeft | The icon displayed in the prev button. |
| next? | Omit&lt;ButtonProps, LinkPropsKeys&gt; | - |  |
| nextIcon? | IconProps['name'] | appConfig.ui.icons.arrowRight | The icon displayed in the next button. |
| arrows? | boolean | false | Display prev and next buttons to scroll the carousel. |
| dots? | boolean | false | Display dots to scroll to a specific slide. |
| orientation? | Carousel['variants']['orientation'] | 'horizontal' | The orientation of the carousel. |
| items? | T[] | - |  |
| autoplay? | boolean \| AutoplayOptionsType | - |  |
| autoScroll? | boolean \| AutoScrollOptionsType | - |  |
| autoHeight? | boolean \| AutoHeightOptionsType | - |  |
| classNames? | boolean \| ClassNamesOptionsType | - |  |
| fade? | boolean \| FadeOptionsType | - |  |
| wheelGestures? | boolean \| WheelGesturesPluginOptions | - |  |
| class? | any | - |  |
| ui? | Carousel['slots'] | - |  |

## Emits

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| select | [selectedIndex: number] | - | Emitted when the selected slide changes |
