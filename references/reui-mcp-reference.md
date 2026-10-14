# ReUI 官方 MCP 参考资料

> 数据来源：https://reui.io/docs/agent-skills 与 https://mcp.reui.io/install（2026-10-15 抓取）
> 官方 MCP Server 与 Agent Skill 免费，此文档供后续自建组件 MCP 时参考。

## 官方 MCP 端点

- MCP 服务器：`https://mcp.reui.io`（streamable HTTP）
- 安装器：`https://mcp.reui.io/install`（已保存到 `references/reui-mcp-install.js`，写入 .mcp.json 的通用配置脚本，支持 Claude / Codex / Cursor 等客户端）
- 配置键名：`mcp_servers.reui`（.mcp.json 格式）

## 官方 MCP 工具清单

| 工具 | 用途 |
| --- | --- |
| search | 搜索组件 |
| get_component | 获取单个组件的 API 与源码 |
| get_examples | 获取组件示例 |
| validate_usage | 校验用法 |
| get_audit_checklist | 获取审查清单 |
| get_agent_skill | 获取 Agent Skill（AGENTS.md 工作流教学） |
| compose_page | 组合页面 |

## 官方 Agent Skill

一次性命令即可让任意编码 Agent 学会 ReUI 工作流：搜索、安装、读取真实 API、按复用适配。
Skill 输出为 AGENTS.md，与 MCP 工具配合使用。

## 对本项目的映射（后续自建 MCP 的数据源）

| 官方能力 | 本项目对应数据 |
| --- | --- |
| search（组件搜索） | `components/components-catalog.json` + registry-reui/_meta 元数据 |
| get_component（组件 API 与源码） | registry-reui/bases/{base}/components/{name}/ 与 /reui/ |
| get_examples（示例） | registry-reui/bases/{base}/components/{cat}/c-*.tsx |
| 基础组件 | registry/bases/{base}/ui/*.tsx |
| blocks 目录 | blocks/blocks-catalog.json（源码需 Pro 许可证） |
| templates 目录 | templates/templates-catalog.json（源码需 Ultimate 许可证） |
