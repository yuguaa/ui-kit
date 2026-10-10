# 变体语义

所有二次封装组件共享同一套变体语义，与 Nuxt UI 的变体写法一致，两份框架实现保持一致（定义在 `packages/shared/src/variants.ts`）。

## 三轴变体

| 维度 | 取值 | 默认 |
| --- | --- | --- |
| variant（样式） | solid · outline · soft · ghost · subtle · link | solid |
| size（尺寸） | xs · sm · md · lg · xl | md |
| color（语义色） | primary · secondary · neutral · success · info · warning · error | primary |

## 变体写法

与 Nuxt UI 主题完全一致（`bg-primary` 等价 500 级主色）：

| 变体 | class |
| --- | --- |
| solid | `bg-primary text-background hover:bg-primary/75` |
| outline | `ring-primary/50 text-primary hover:bg-primary/10` |
| soft | `bg-primary/10 text-primary hover:bg-primary/15` |
| subtle | `bg-primary/10 text-primary ring-primary/25 hover:bg-primary/15` |
| ghost | `text-primary hover:bg-primary/10` |
| link | `text-primary hover:text-primary/75` |

`secondary` 与 `neutral` 使用 shadcn 灰色变量（`--secondary` / `--muted` / `--foreground`），对应 Nuxt 的 default / elevated / inverted 角色。

## 色阶角色

语义色直接使用 Tailwind 色板：

- 500 为主色（无后缀类）
- 50 为最浅底、400 为 hover 级、600 为深色
- 透明度修饰 /10 /15 /25 /50 /75 对应 Nuxt UI 的浅底、hover、描边、solid hover

## 组件级变体示例

::: code-group

```vue [Vue]
<XButton variant="soft" color="success">保存</XButton>
<XButton variant="outline" color="warning">警告</XButton>
<XBadge color="error" :count="120">订单</XBadge>
<XChip color="info" closable>Info</XChip>
```

```tsx [React]
<XButton variant="soft" color="success">保存</XButton>
<XButton variant="outline" color="warning">警告</XButton>
<XBadge color="error" count={120}>订单</XBadge>
<XChip color="info" closable>Info</XChip>
```

:::

## 校验状态

输入类组件支持 `status` 校验状态（error / warning），表单组件通过 `rules` 声明校验规则。
