# ReUI 复刻项目说明（REPLICATION.md）

> 本项目从上游仓库 [github.com/keenthemes/reui](https://github.com/keenthemes/reui)（v2.8.0，MIT License）完整克隆。
> 复刻时间：2026-10-15

## 一句话结论

**ReUI 的全部开源组件源码（base + radix 双版本，含全部示例）已完整复制到本项目并可运行。**
reui.io 网站上的 **blocks（645 个）与 templates（17 个）** 由 ReUI 的付费 registry 分发，
源码不在开源仓库中（Pro/Ultimate 许可证），本项目已收录其完整清单与获取方式说明。

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
- 获取方式：`npx shadcn@latest add @reui/{block-name}`，需要 ReUI Pro 许可证（$249 起）
- 全部 blocks 的源码位于 ReUI 付费 registry（`https://reui.io/r/styles/{style}/{name}.json`，未授权返回 401）

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

## Templates（付费资产清单）

- 完整清单：`templates/TEMPLATES-MANIFEST.md`（**17 个模板**，Dashboard 5 / Landing 2 / SaaS 8 / E-commerce 2）
- 结构化目录：`templates/templates-catalog.json`（slug、名称、metaTitle、分类、accessTier）
- 获取方式：模板数据 `accessTier` 均为 `ultimate`，需登录 reui.io 账号后从模板详情页下载

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
├── blocks/              # blocks 完整清单（付费资产）
├── templates/           # templates 完整清单（付费资产）
├── hooks/               # 网站 hooks
├── lib/                 # 网站工具库
├── content/             # 文档内容（MDX）
├── packages/            # monorepo 包（registry）
└── scripts/             # 构建脚本
```

## 后续 MCP 服务器开发提示

本项目的 registry-reui/ 目录就是组件 MCP 的完整数据源：
- 组件元数据：registry-reui/_meta/components/bases/{base}/*.json（含名称、分类、依赖关系）
- 组件源码：registry-reui/bases/{base}/components/ 与 registry-reui/bases/{base}/reui/
- 名称索引：registry-reui/_meta/components/bases/{base}/name-index.json
- 结构化组件目录：`components/components-catalog.json`（base 1303 项 / radix 1302 项，含类型、分类、依赖、文件数）

blocks/templates 的结构化目录（blocks-catalog.json / templates-catalog.json）已就绪，
其源码分发数据需要 Pro/Ultimate 许可证后从 registry 获取。

官方 MCP 参考（端点、工具清单、安装器脚本）已保存到 `references/`，见 `references/reui-mcp-reference.md`。
