# NeUI

面向 shadcn/ui 生态的组件平台：1241 个组件示例、645 个区块、17 个完整模板，全部可在本地运行与预览。

## 内容构成

| 部分 | 数量 | 位置 |
| --- | --- | --- |
| 组件示例（base 版） | 1241 个（86 个分类） | `registry-neui/bases/base/components/` |
| 组件示例（radix 版） | 1241 个（86 个分类） | `registry-neui/bases/radix/components/` |
| 复杂组件实现 | base / radix 各 82 个 | `registry-neui/bases/{base,radix}/neui/` |
| 基础 UI 组件 | base 62 个 / radix 61 个 | `registry/bases/{base,radix}/ui/` |
| 组件元数据 | 176 个 JSON | `registry-neui/_meta/` |
| 区块快照 | 645 个（7 个分组、76 个分类） | `replicated/blocks/` |
| 区块源码 | 645 个（从快照还原的组件代码） | `replicated-source/blocks/` |
| 模板快照 | 17 个模板、123 个页面 | `replicated/templates/` |
| 模板源码 | 123 个（从快照还原的组件代码） | `replicated-source/templates/` |
| 截图资源 | 组件 176 张、区块 149 张 | `public/screenshots/` |

## 快速开始

```bash
pnpm install     # 安装依赖（自动生成组件 registry 元数据）
pnpm dev         # 开发服务器 http://localhost:3000
pnpm build       # 生产构建
```

## 本地入口

| 地址 | 内容 |
| --- | --- |
| `/` | 站点首页 |
| `/components` | 组件目录（分类卡片 → 分类页 → 组件示例） |
| `/replicated/blocks` | 区块列表（分类卡片 → 带侧栏的区块卡片列表） |
| `/replicated/templates` | 模板列表（模板卡片 → 带侧栏的页面卡片列表） |
| `/docs` | 组件文档 |

区块与模板的卡片上都带操作：

- **复制安装命令**：`pnpm dlx shadcn@latest add @neui/{名称}`
- **查看代码**：展示从快照还原的组件源码

## 目录结构

```
neui/
├── app/                     网站应用（组件目录、文档、资源库预览路由）
├── components/              网站应用组件
│   ├── neui/                复杂组件（数据网格、日历、甘特图等）
│   ├── blocks/              站点营销区块
│   └── replicated/          资源库卡片、侧栏与源码面板
├── registry/                基础 registry（组件、图标、8 种设计风格）
├── registry-neui/           NeUI 组件 registry（全部组件示例与实现）
├── replicated/
│   ├── blocks/              645 个区块渲染快照
│   └── templates/           123 个模板页面渲染快照
├── replicated-source/       从快照还原的组件源码（768 个 tsx）
├── public/
│   ├── screenshots/         组件与区块截图
│   └── template-assets/     各模板的编译样式与字体
├── blocks/                  区块结构化目录（catalog JSON）
├── templates/               模板结构化目录（catalog JSON）
├── scripts/                 构建与资产处理脚本
└── REPLICATION.md           复刻资产与还原说明
```

## 技术方案

- **框架**：Next.js 16（App Router）+ React 19
- **样式**：Tailwind CSS 4，8 种设计风格，亮暗双主题
- **组件基座**：Base UI 与 Radix UI 双版本
- **registry**：shadcn/ui 兼容的组件注册表，172 个 workspace 包
- **快照渲染**：区块快照内联渲染复用站点样式；模板快照经独立文档由 iframe 隔离加载

## 源码还原

`replicated-source/` 下是从渲染快照还原出的组件源码：

- `data-slot` 映射回本地组件，剥离组件默认类名，剩余覆盖作为 `className`
- 从 cva 定义反推 `variant` / `size` 等 props
- 补齐快照中不可见的交互容器（Tooltip、DropdownMenu、DataGridProvider 等）
- 768 个文件全部通过语法检查

依赖运行时数据的复杂组件（data-grid、carousel 等）需要补充数据源后才能运行。
详见 `REPLICATION.md`。

## 脚本

| 脚本 | 用途 |
| --- | --- |
| `scripts/build-components.mts` | 生成组件 registry 元数据（安装依赖时自动运行） |
| `scripts/build-component-index.py` | 提取组件 slot / 默认类名 / 变体索引 |
| `scripts/snapshot-html-to-jsx.py` | HTML 快照转 JSX（属性改写与样式对象） |
| `scripts/snapshot-to-component.py` | 快照还原为组件源码（批量） |
| `scripts/convert-raw-to-html.py` | 区块原始提取结果转为快照 HTML |
| `scripts/convert-template-raw.py` | 模板原始提取结果转为快照 HTML |
| `scripts/fetch-template-assets.py` | 抓取模板编译样式与字体 |
| `scripts/verify-block-dependencies.py` | 校验区块依赖组件是否齐备 |

## 仓库

- https://git.newcapec.cn/02-newcapec/ai/UIService/helper/ui-kit.git
- https://github.com/yuguaa/ui-kit.git
