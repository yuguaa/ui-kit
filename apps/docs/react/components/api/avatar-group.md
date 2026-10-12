## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| max? | number \| string | - | 最多显示数量，超出部分折叠为 +N |
| size? | XAvatarSize | - | 头像尺寸，透传给未指定 size 的子头像 |
| color? | XAvatarColor | - | 透传给子头像的语义色（子头像自身指定 color 时不覆盖） |
| plus? | React.ReactNode | - | 自定义溢出标记 |
| render? | React.ReactElement | - | 渲染为指定元素 |
| ui? | XAvatarGroupUi | - | 主题插槽类名 |
