# theme-designer 主题设计器

以单一主色 seed 派生全部语义色色阶（`@ant-design/colors`），实时预览组件效果并导出 CSS 变量。

## 功能

- 主色输入：hex 文本 + 取色器 + 预设色板，非法输入保持上次有效值
- 色阶展示：六组语义色 × 10 级色阶，标注浅色底 / hover / seed / active 角色，点击色块复制色值
- 组件预览：按钮、徽标、卡片、表单控件、进度条、警告提示，亮色 / 暗色切换
- CSS 变量导出：按语义色分组输出 `--primary-1 ... --neutral-10`，一键复制

## 开发

```bash
pnpm install
pnpm --filter theme-designer dev
```

## 构建

```bash
pnpm --filter theme-designer build
```
