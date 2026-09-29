# 变体语义

所有二次封装组件共享同一套变体语义，两份框架实现保持一致（定义在 `packages/shared/src/variants.ts`）。

## 三轴变体

| 维度 | 取值 | 默认 |
| --- | --- | --- |
| variant（样式） | solid · outline · soft · ghost · subtle · link | solid |
| size（尺寸） | xs · sm · md · lg · xl | md |
| color（语义色） | primary · secondary · neutral · success · info · warning · error | primary |

## 语义色色阶

7 种语义色各派生 10 级色阶（`primary-1` 至 `primary-10`），主色由 seed `#1677ff` 通过 Ant Design 色彩算法生成：

- `primary-6` 为 seed 本身
- hover 取第 5 级（如 `primary-5` #4096ff）
- active 取第 7 级（如 `primary-7` #0958d9）
- 浅色底取第 1 级（如 `primary-1` #e6f4ff）

`secondary` 使用 shadcn 的灰色变量（`--secondary` / `--muted`），不参与色阶派生。

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
