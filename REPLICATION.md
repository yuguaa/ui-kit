# 复刻资产说明（REPLICATION.md）

本项目包含 NeUI 的完整组件资产，以及从官方在线站点复刻到本地的区块与模板渲染快照。

## 资产构成

| 部分 | 数量 | 位置 |
| --- | --- | --- |
| 组件源码（base 版） | 1241 个示例 + 82 个复杂组件 + 5 个 hooks | `registry-neui/bases/base/` |
| 组件源码（radix 版） | 1241 个示例 + 82 个复杂组件 + 5 个 hooks | `registry-neui/bases/radix/` |
| 基础 UI 组件 | base 62 个 / radix 61 个 | `registry/bases/{base,radix}/ui/` |
| 组件元数据 | 176 个 JSON | `registry-neui/_meta/` |
| 区块快照 | 645 个（7 个分组、76 个分类） | `replicated/blocks/` |
| 模板页面快照 | 123 个（17 个模板） | `replicated/templates/` |
| 模板样式与字体 | 17 套 | `public/template-assets/` |
| 截图资源 | 组件 176 张 / 区块 149 张 | `public/screenshots/` |

## 区块快照

- 位置：`replicated/blocks/{分组}/{分类}/{名称}.html`，共 645 个
- 生成方式：加载官方预览页，提取预览容器的完整渲染 DOM；交互型区块（对话框、抽屉等）会先触发打开动作再提取
- 快照内容：完整 DOM 结构、Tailwind 类名、CSS 变量、动画 keyframes、SVG 图表
- 本地路由：`/replicated/blocks/{分组}/{分类}/{名称}`，列表页 `/replicated/blocks`
- 局限：状态切换、拖拽等交互为静态还原，不含运行时逻辑

### 分组分布

| 分组 | 区块数 |
| --- | --- |
| application | 303 |
| ecommerce | 87 |
| solutions | 76 |
| marketing | 67 |
| chart | 51 |
| data-grid | 43 |
| ai-agents | 18 |

## 模板页面快照

- 位置：`replicated/templates/{模板}/{页面}.html`，共 123 个页面
- 生成方式：各模板有独立在线预览站点，逐页导航后提取完整渲染 DOM；带登录的模板使用其演示账号登录后提取
- 渲染方式：快照经 `/api/replicated-template/{模板}/{页面}` 包装为独立 HTML 文档，由预览页面用 iframe 加载，
  与宿主 React 应用完全隔离
- 样式资产：每个模板的编译样式与字体下载到 `public/template-assets/{模板}/`
- 本地路由：`/replicated/templates/{模板}/{页面}`，列表页 `/replicated/templates`

### 各模板页面数

| 模板 | 页面数 | 技术方案 |
| --- | --- | --- |
| atlas-admin | 9 | Next.js |
| flowly-app | 6 | Next.js |
| flux-agentops | 11 | Next.js |
| lucent-devops | 5 | TanStack Start |
| tempo-tasks | 6 | TanStack Start |
| limelight-landing | 1 | Next.js |
| overture-waitlist | 1 | Next.js |
| cohort-hr | 4 | Laravel Inertia |
| echo-chat | 3 | Next.js |
| filebox-drive | 8 | Laravel Inertia |
| filespace-drive | 8 | Next.js |
| miro-clinic | 7 | Vite SPA |
| pulse-helpdesk | 7 | Vite SPA |
| roster-hr | 4 | Vite SPA |
| verve-crm | 9 | Next.js |
| manifest-commerce | 13 | Laravel Inertia |
| surge-commerce | 21 | Vite SPA |

## 组件资产

### registry 结构

```
registry-neui/
├── bases/
│   ├── base/
│   │   ├── components/{分类}/c-*.tsx     1241 个示例，86 个分类
│   │   ├── neui/*.tsx                    82 个复杂组件实现
│   │   └── hooks/                        5 个
│   └── radix/
│       ├── components/{分类}/c-*.tsx     1241 个示例
│       ├── neui/*.tsx                    82 个复杂组件实现
│       └── hooks/                        5 个
└── _meta/                                176 个注册元数据 JSON
```

复杂组件覆盖数据网格、日历、甘特图、看板、过滤器、级联选择、代码块、可排序列表、
时间线、步骤条、树形结构等。

### 与区块快照的关系

区块快照由组件组合而成。已抽查 8 个区块（覆盖 6 个分组）的依赖清单，
其全部依赖组件（数据网格、框架、过滤器、甘特图、代码块、步骤条、复制到剪贴板 hook 等）
均存在于本地 `registry-neui/` 中，校验脚本为 `scripts/verify-block-dependencies.py`。

## 脚本

| 脚本 | 用途 |
| --- | --- |
| `scripts/build-components.mts` | 生成组件 registry 元数据（安装依赖时自动运行） |
| `scripts/build-blocks-catalog.py` | 生成区块结构化目录 |
| `scripts/build-templates-catalog.py` | 生成模板结构化目录 |
| `scripts/build-components-catalog.py` | 生成组件结构化目录 |
| `scripts/convert-raw-to-html.py` | 区块原始提取结果转为快照 HTML |
| `scripts/convert-template-raw.py` | 模板原始提取结果转为快照 HTML |
| `scripts/fetch-template-assets.py` | 抓取单个模板的编译样式与字体 |
| `scripts/fetch-all-template-assets.sh` | 批量抓取全部模板样式 |
| `scripts/fetch-block-index.sh` | 抓取区块索引 |
| `scripts/fetch-block-catalog.sh` | 抓取区块目录数据 |
| `scripts/verify-block-dependencies.py` | 校验区块依赖组件是否齐备 |

## 目录结构

```
neui/
├── app/                     网站应用（组件目录、文档、复刻预览路由）
├── components/              网站应用组件
├── registry/                基础 registry（组件、图标、8 种设计风格）
├── registry-neui/           NeUI 组件 registry
├── replicated/              渲染快照（区块 645 个、模板页面 123 个）
├── public/screenshots/      组件与区块截图
├── public/template-assets/  各模板的编译样式与字体
├── blocks/                  区块结构化目录
├── templates/               模板结构化目录
└── scripts/                 构建与资产处理脚本
```
