## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| label? | string | - |  |
| color? | Button['variants']['color'] | 'primary' |  |
| activeColor? | Button['variants']['color'] | - |  |
| variant? | Button['variants']['variant'] | 'solid' |  |
| activeVariant? | Button['variants']['variant'] | - |  |
| size? | Button['variants']['size'] | 'md' |  |
| square? | boolean | - | Render the button with equal padding on all sides. |
| block? | boolean | - | Render the button full width. |
| loadingAuto? | boolean | - | Set loading state automatically based on the `@click` promis |
| onClick? | ((event: MouseEvent) =&gt; void) \| Array&lt;((event: MouseEvent) =&gt; void)&gt | - |  |
| class? | any | - |  |
| ui? | Button['slots'] | - |  |
