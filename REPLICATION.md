# ReUI 复刻项目说明（REPLICATION.md）

> 本项目从上游仓库 [github.com/keenthemes/reui](https://github.com/keenthemes/reui)（v2.8.0，MIT License）完整克隆。
> 复刻时间：2026-10-15

## 一句话结论

**ReUI 的全部开源组件源码（base + radix 双版本，含全部示例）已完整复制到本项目并可运行。**
**reui.io 网站上全部 645 个 blocks 已通过渲染快照方式复刻到本地（`replicated/blocks/`），可通过本地路由预览。**
**全部 17 个 templates 已从各自的官方在线预览站点复刻到本地（`replicated/templates/`，共 123 个页面），可通过本地路由预览。**
blocks 与 templates 的原始源码由 ReUI 付费 registry 分发（Pro / Ultimate 许可证），不在开源仓库中。

## Blocks 复刻说明

- 全部 645 个 blocks 的渲染快照（HTML + Tailwind 类名 + 内联样式）位于 `replicated/blocks/{分类}/{slug}.html`
- 复刻方式：浏览器加载 reui.io 官方预览页（`/preview/base/{slug}?embed=1`），提取 `block-preview-canvas` 容器的完整渲染 DOM；交互型 block（dialog/sheet 等）会先触发打开动作再提取
- 本地预览路由：`/replicated/blocks/{分类}/{slug}`（例如 `/replicated/blocks/solutions/billing/solution-billing-6`）
- 快照保留了完整的 Tailwind 类名、CSS 变量、动画 keyframes 与 SVG，使用本地同款设计 token 渲染，视觉与上游一致
- 快照中的交互行为（状态切换、拖拽）为静态还原，不包含运行时逻辑
- 提取脚本：`scripts/fetch-block-index.sh`、`scripts/convert-raw-to-html.py`（原始提取结果在 `.replicated-raw/`，中间产物已 gitignore）

## Templates 复刻说明

- 全部 17 个模板共 123 个页面快照位于 `replicated/templates/{模板}/{页面}.html`（22 MB）
- 复刻方式：每个模板都有独立在线预览站点（`{slug}.reui.io`），浏览器逐页导航后提取完整渲染 DOM
  - Laravel Inertia 模板（cohort-hr、filebox-drive、manifest-commerce）提供演示登录，凭据预填，登录后提取
  - Vite SPA 模板（miro-clinic、pulse-helpdesk、roster-hr、surge-commerce）通过导航按钮遍历路由
- 每个模板的编译样式与字体已下载到 `public/template-assets/{模板}/app.css` 与 `media/`（共 17 套，约 3.7 MB）
- 本地预览路由：`/replicated/templates/{模板}/{页面}`，例如 `/replicated/templates/flowly-app/dashboard`
- 渲染方式：快照经 `/api/replicated-template/{模板}/{页面}` 包装为独立 HTML 文档，由预览页面用 iframe 加载，
  与宿主 React 应用完全隔离（快照来自其它框架的整页 DOM，直接内联会与宿主 hydration 冲突）
- 提取脚本：`scripts/convert-template-raw.py`、`scripts/fetch-template-assets.py`、`scripts/fetch-all-template-assets.sh`

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

## 组件资产清单

### 基础 UI 组件（shadcn 风格 base 版本，无 radix 依赖）

| 位置 | 内容 | 数量 |
| --- | --- | --- |
| registry/bases/base/ui/ | 基础 UI 组件源码 | 62 个文件 |
| registry/bases/base/hooks/ | 基础 hooks | 2 个 |
| registry/bases/base/lib/ | 基础工具函数 | 2 个 |

### 基础 UI 组件（radix 版本）

| 位置 | 内容 | 数量 |
| --- | --- | --- |
| registry/bases/radix/ui/ | 基于 Radix 的组件源码 | 61 个文件 |

### ReUI 组件示例与复杂组件实现（registry-reui）

| 位置 | 内容 | 数量 |
| --- | --- | --- |
| registry-reui/bases/base/components/ | base 版全部组件示例（c-*.tsx） | 86 个目录 / 1241 个文件 |
| registry-reui/bases/base/reui/ | base 版复杂组件实现 | 82 个文件 |
| registry-reui/bases/base/hooks/ | base 版 hooks | 5 个 |
| registry-reui/bases/radix/components/ | radix 版全部组件示例 | 1241 个文件 |
| registry-reui/bases/radix/reui/ | radix 版复杂组件实现 | 82 个文件 |
| registry-reui/bases/radix/hooks/ | radix 版 hooks | 5 个 |
| registry-reui/_meta/ | 组件注册元数据（registry JSON） | 176 个 JSON |

合计：registry-reui 目录含 **2646 个 .tsx 源码文件** 与 12 个 .ts 文件。

### 网站应用代码（reui.io 网站本身）

| 位置 | 内容 | 数量 |
| --- | --- | --- |
| app/ | Next.js 网站页面（组件文档站） | 完整保留 |
| components/ui/ | 网站用的基础 UI 组件 | 27 个 + svgs 目录 |
| components/custom/ | 网站自定义组件 | 5 个 |
| components/blocks/ | 网站营销块 | 8 个 |
| hooks/ | 网站 hooks | 11 个 |
| lib/ | 网站工具库 | 42 个文件 |
| registry/icons/ | 图标集定义 | 12 个 |
| registry/styles/ | 8 种设计风格定义 | 8 个 |

## Blocks（付费资产清单）

- 完整清单：`blocks/BLOCKS-MANIFEST.md`（76 个分类，共 **645 个 blocks**）
- 结构化目录：`blocks/blocks-catalog.json`（slug、名称、分类、URL，供后续 MCP 使用）
- 渲染快照复刻：`replicated/blocks/` 下 645 个 HTML 快照，本地路由可预览
- 上游源码获取方式：`npx shadcn@latest add @reui/{block-name}`，需要 ReUI Pro 许可证（$249 起）

### 已核查的获取渠道（2026-10-15）

| 渠道 | 结果 |
| --- | --- |
| GitHub 开源仓库当前版本（v2.8.0） | 无 blocks 源码，仅 `public/screenshots/blocks/` 截图 |
| GitHub 开源仓库完整历史（全部 229 个 commit，已 unshallow） | 从未包含 blocks/templates 源码 |
| keenthemes 组织全部公共仓库（reui / ktui / metronic-tailwind-html-integration） | 无独立 blocks 仓库 |
| reui.io 公开 registry（/r/styles/{style}/{name}.json） | 401，需要 license key（Authorization: Bearer） |
| reui.io 网站页面（SSR HTML + RSC payload） | 免费用户只能看到占位示例代码，真实源码不嵌入页面 |

### Block 依赖组件覆盖验证（2026-10-15）

抽查 8 个 block（覆盖 application/solutions/ecommerce/data-grid/marketing/ai-agents 六个组），
从各 block 页面的 `registryDependencies` 提取依赖清单，与本地组件资产逐项比对：
全部依赖组件（data-grid、frame、filters、gantt、code-block、stepper、use-copy-to-clipboard 等）
均存在于本地 `registry-reui/` 中。验证脚本：`scripts/verify-block-dependencies.py`。
即：一旦获得 blocks 源码，其全部依赖已在本项目内就绪。

## Templates（复刻清单）

- 完整清单：`templates/TEMPLATES-MANIFEST.md`（**17 个模板**，Dashboard 5 / Landing 2 / SaaS 8 / E-commerce 2）
- 结构化目录：`templates/templates-catalog.json`（slug、名称、metaTitle、分类、accessTier）
- 渲染快照复刻：`replicated/templates/` 下 123 个页面快照，本地路由可预览
- 上游源码分发：`accessTier` 均为 `ultimate`，需登录 reui.io 账号后从模板详情页下载

## 运行方式

```bash
pnpm install
pnpm dev        # 开发服务器
pnpm build      # 生产构建（251 个页面）
pnpm typecheck  # 类型检查（上游仓库自带少量类型错误，与上游一致）
```

## 目录结构总览

```
reui-clone/
├── app/                 # 网站应用页面
├── components/          # 网站应用组件（ui/custom/blocks/reui）
├── registry/            # 基础 registry（base + radix 组件、图标、风格）
├── registry-reui/       # reui 组件 registry（全部组件示例与实现）
├── replicated/          # 渲染快照复刻
│   ├── blocks/          # 645 个 block 快照
│   └── templates/       # 123 个模板页面快照
├── public/
│   └── template-assets/ # 各模板的编译样式与字体
├── blocks/              # blocks 完整清单
├── templates/           # templates 完整清单
├── hooks/               # 网站 hooks
├── lib/                 # 网站工具库
├── content/             # 文档内容（MDX）
├── packages/            # monorepo 包（registry）
└── scripts/             # 构建与复刻脚本
```

## 复刻资产索引

本地访问 `http://localhost:3000/replicated` 可浏览全部复刻资产（645 个 blocks + 123 个模板页面）。

## 后续 MCP 服务器开发提示

本项目的 registry-reui/ 目录就是组件 MCP 的完整数据源：
- 组件元数据：registry-reui/_meta/components/bases/{base}/*.json（含名称、分类、依赖关系）
- 组件源码：registry-reui/bases/{base}/components/ 与 registry-reui/bases/{base}/reui/
- 名称索引：registry-reui/_meta/components/bases/{base}/name-index.json
- 结构化组件目录：`components/components-catalog.json`（base 1303 项 / radix 1302 项，含类型、分类、依赖、文件数）

blocks/templates 的结构化目录（blocks-catalog.json / templates-catalog.json）已就绪，
其源码分发数据需要 Pro/Ultimate 许可证后从 registry 获取。

官方 MCP 参考（端点、工具清单、安装器脚本）已保存到 `references/`，见 `references/reui-mcp-reference.md`。
