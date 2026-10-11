## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| to? | string | - | 链接地址 |
| color? | XLinkColor | - | 颜色 |
| active? | boolean | - | 激活态 |
| activeClass? | string | - | 激活态附加类名 |
| inactiveClass? | string | - | 非激活态附加类名 |
| ariaCurrentValue? | string | - | 激活时输出的 aria-current 值 |
| external? | boolean | - | 强制视为外链，自动补充 noopener noreferrer |
| noRel? | boolean | - | 关闭 rel 自动补充，仅保留显式传入的 rel |
| raw? | boolean | - | 只应用 class / activeClass / inactiveClass，跳过主题样式 |
| disabled? | boolean | - | 是否禁用 |
| render? | React.ReactElement | - | 渲染为指定元素 |
| ui? | XLinkUi | - | 主题插槽类名 |
| leading? | React.ReactNode | - | 前置图标 |
| trailing? | React.ReactNode | - | 后置图标 |
| children? | React.ReactNode | - |  |
