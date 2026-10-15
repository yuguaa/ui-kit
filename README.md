# NeUI

面向 shadcn/ui 生态的组件平台：1241 个组件示例、645 个区块快照、17 个完整模板，全部可在本地运行与预览。

## 内容构成

| 部分 | 数量 | 位置 |
| --- | --- | --- |
| 组件源码（base 版） | 1241 个示例 + 82 个复杂组件 | `registry-neui/bases/base/` |
| 组件源码（radix 版） | 1241 个示例 + 82 个复杂组件 | `registry-neui/bases/radix/` |
| 基础 UI 组件 | base 62 个 / radix 61 个 | `registry/bases/{base,radix}/ui/` |
| 组件元数据 | 176 个 JSON | `registry-neui/_meta/` |
| 区块快照 | 645 个（7 个分组、76 个分类） | `replicated/blocks/` |
| 模板快照 | 17 个模板、123 个页面 | `replicated/templates/` |
| 截图资源 | 组件 176 张、区块 149 张 | `public/screenshots/` |

## 快速开始

```bash
pnpm install     # 安装依赖（会自动生成组件 registry 元数据）
pnpm dev         # 开发服务器 http://localhost:3000
pnpm build       # 生产构建
```

## 本地入口

| 地址 | 内容 |
| --- | --- |
| `/` | 站点首页 |
| `/components` | 组件目录（分类卡片 → 分类页 → 组件示例） |
| `/replicated/blocks` | 区块列表（分类卡片 → 区块卡片 → 单个快照） |
| `/replicated/templates` | 模板列表（模板卡片 → 模板页面 → 单个页面） |
| `/docs` | 组件文档 |

复刻预览页顶部都有导航条，可返回索引并切换到同级页面。

## 目录结构

```
neui/
├── app/                     网站应用（组件目录、文档、复刻预览路由）
├── components/              网站应用组件
│   ├── neui/                复杂组件（数据网格、日历、甘特图等）
│   ├── blocks/              站点营销区块
│   └── replicated/          复刻预览卡片与导航条
├── registry/                基础 registry（组件、图标、8 种设计风格）
├── registry-neui/           NeUI 组件 registry（全部组件示例与实现）
├── replicated/
│   ├── blocks/              645 个区块渲染快照
│   └── templates/           123 个模板页面渲染快照
├── public/
│   ├── screenshots/         组件与区块截图
│   └── template-assets/     各模板的编译样式与字体
├── blocks/                  区块结构化目录（catalog JSON）
├── templates/               模板结构化目录（catalog JSON）
├── scripts/                 构建与资产处理脚本
└── REPLICATION.md           复刻资产说明
```

## 技术方案

- **框架**：Next.js 16（App Router）+ React 19
- **样式**：Tailwind CSS 4，8 种设计风格，亮暗双主题
- **组件基座**：Base UI 与 Radix UI 双版本
- **registry**：shadcn/ui 兼容的组件注册表，172 个 workspace 包
- **快照渲染**：区块快照内联渲染复用站点样式；模板快照经独立文档由 iframe 隔离加载

## 复刻资产

区块与模板快照记录的是渲染结果（完整 DOM + Tailwind 类名 + 内联样式 + SVG），
存放在 `replicated/` 下，可由本地路由直接预览。详见 `REPLICATION.md`。

## 脚本

| 脚本 | 用途 |
| --- | --- |
| `scripts/build-components.mts` | 生成组件 registry 元数据（安装依赖时自动运行） |
| `scripts/convert-raw-to-html.py` | 区块原始提取结果转为快照 HTML |
| `scripts/convert-template-raw.py` | 模板原始提取结果转为快照 HTML |
| `scripts/fetch-template-assets.py` | 抓取模板编译样式与字体 |
| `scripts/verify-block-dependencies.py` | 校验区块依赖组件是否齐备 |
