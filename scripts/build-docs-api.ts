/**
 * 从移植后的 Nuxt 组件源提取 props / slots / emits 与 JSDoc 注释，生成 API 文档片段。
 * 输出到 apps/docs/components/api/<name>.md，组件页用 @include 引用。
 * 生成内容（视为产物，不手工修改）。
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ROOT = process.cwd();
const KIT_DIR = join(ROOT, "packages/vue/src/components/kit");
const OUT_DIR = join(ROOT, "apps/docs/components/api");

/** JSDoc 单行摘取：取 @defaultValue 与首行描述 */
function jsdocSummary(text: string): { desc: string; defaultValue?: string } {
  const cleaned = text.replace(/\/\*\*?|\*\//g, "").split("\n").map((line) => line.replace(/^\s*\*\s?/, "").trim());
  const defaultValue = cleaned.find((line) => line.startsWith("@defaultValue"))?.replace(/^@defaultValue\s*/, "");
  /* 描述只取 @example 代码块之前的首行说明文字 */
  const beforeExample = cleaned.filter((line) => line.startsWith("@example") ? false : true).slice(0, cleaned.findIndex((line) => line.startsWith("@example")) === -1 ? cleaned.length : cleaned.findIndex((line) => line.startsWith("@example")));
  const descLines = beforeExample.filter((line) => line && !line.startsWith("@"));
  return { desc: (descLines[0] ?? "").slice(0, 60), defaultValue };
}

/** 从接口体提取成员（键 + 可选 + 类型文本 + 前导 JSDoc） */
function extractMembers(body: string): Array<{ key: string; optional: boolean; type: string; doc: string }> {
  const members: Array<{ key: string; optional: boolean; type: string; doc: string }> = [];
  let current = "";
  let braceDepth = 0;
  const flush = () => {
    const text = current.trim();
    if (!text) return;
    /* 剥离注释得到声明部分 */
    const docMatch = /\/\*\*[\s\S]*?\*\//.exec(text);
    const doc = docMatch ? docMatch[0] : "";
    const decl = text.replace(/\/\*\*[\s\S]*?\*\//, "").trim();
    /* 语句代码混入（const/function/import 等）视为非成员，丢弃 */
    if (/\b(const|let|var|function|import|export|return|if|for|while)\b/.test(decl.replace(/^[^:]*:\s*/, "")) && decl.split("\n").length > 1) return;
    /* 类型部分必须单行，多行代码片段丢弃 */
    let depth = 0;
    let colon = -1;
    let inQuote = false;
    let quoteChar = "";
    for (let i = 0; i < decl.length; i++) {
      const ch = decl[i];
      if (inQuote) {
        if (ch === quoteChar && decl[i - 1] !== "\\") inQuote = false;
        continue;
      }
      if (ch === "'" || ch === '"') {
        inQuote = true;
        quoteChar = ch;
        continue;
      }
      if ("(<[{".includes(ch)) depth++;
      else if (")>]}".includes(ch)) depth = Math.max(0, depth - 1);
      else if (ch === ":" && depth === 0) {
        colon = i;
        break;
      }
    }
    if (colon < 0) return;
    const keyPart = decl.slice(0, colon).trim();
    if (!/^['"][^'"]+['"]$|^[A-Za-z_$][\w$]*$/.test(keyPart.replace(/\?$/, ""))) return;
    const typePart = decl.slice(colon + 1).trim().replace(/;$/, "");
    if (typePart.includes("\n")) return;
    const key = keyPart.replace(/\?$/, "").replace(/^['"]|['"]$/g, "").trim();
    if (key) members.push({ key, optional: keyPart.endsWith("?"), type: typePart, doc });
  };
  for (const line of body.split("\n")) {
    const trimmed = line.trim();
    /* 注释块起始处先结算上一个成员，注释归属下一成员 */
    if ((trimmed.startsWith("/**") || trimmed.startsWith("//")) && current.includes(":")) {
      flush();
      current = "";
    }
    if (/^(?:['"][^'"]+['"]|[A-Za-z_$][\w$]*)\??:/.test(trimmed) && current.includes(":") && braceDepth === 0) {
      flush();
      current = "";
    }
    current += `\n${line}`;
    for (const ch of line) {
      if (ch === "{") braceDepth++;
      else if (ch === "}") braceDepth = Math.max(0, braceDepth - 1);
    }
  }
  flush();
  return members;
}

/** 找 interface/type 定义块（含 extends 展开的成员合并） */
function collectInterface(content: string, name: string): Array<{ key: string; optional: boolean; type: string; doc: string }> {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const headRe = new RegExp(`(?:interface|type)\\s+${escaped}\\b`);
  const match = headRe.exec(content);
  if (!match) return [];
  let i = match.index + match[0].length;
  if (content[i] === "<") {
    let depth = 1;
    i++;
    for (; i < content.length && depth > 0; i++) {
      if (content[i] === "<") depth++;
      else if (content[i] === ">") depth--;
    }
  }
  while (i < content.length && content[i] !== "{") i++;
  if (i >= content.length) return [];
  let depth = 1;
  let j = i + 1;
  let inQuote = false;
  let quoteChar = "";
  for (; j < content.length; j++) {
    const ch = content[j];
    if (inQuote) {
      if (ch === quoteChar && content[j - 1] !== "\\") inQuote = false;
      continue;
    }
    if (ch === "'" || ch === '"') {
      inQuote = true;
      quoteChar = ch;
      continue;
    }
    if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) break;
    }
  }
  const open = content.indexOf("{", i);
  const body = content.slice(open + 1, j);
  return extractMembers(body);
}

function renderTable(title: string, members: Array<{ key: string; optional: boolean; type: string; doc: string }>): string {
  if (!members.length) return "";
  const lines = [`## ${title}`, "", "| 名称 | 类型 | 默认值 | 说明 |", "| --- | --- | --- | --- |"];
  for (const member of members) {
    const { desc, defaultValue } = jsdocSummary(member.doc);
    const type = member.type.replace(/\|/g, "\\|").replace(/</g, "&lt;").replace(/>/g, "&gt;").slice(0, 80);
    const key = member.key.includes("|") ? `\`${member.key}\`` : member.key;
    const descClean = desc.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    lines.push(`| ${key}${member.optional ? "?" : ""} | ${type} | ${defaultValue ?? "-"} | ${descClean} |`);
  }
  return lines.join("\n");
}

/** 组件名转 kebab-case（XInputMenu → input-menu） */
function kebabName(name: string): string {
  return name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const files = readdirSync(KIT_DIR).filter((f) => f.endsWith(".vue") && f !== "XButtonGroup.vue");
  let count = 0;
  for (const file of files) {
    const name = file.replace(/^X/, "").replace(/\.vue$/, "");
    const content = readFileSync(join(KIT_DIR, file), "utf8");
    const props = collectInterface(content, `${name}Props`);
    const emits = collectInterface(content, `${name}Emits`);
    const slots = collectInterface(content, `${name}Slots`);
    if (!props.length && !emits.length && !slots.length) continue;
    const sections = [
      renderTable("Props", props),
      renderTable("Emits", emits),
      renderTable("Slots", slots),
    ].filter(Boolean);
    if (!sections.length) continue;
    writeFileSync(join(OUT_DIR, `${kebabName(name)}.md`), sections.join("\n\n") + "\n");
    count++;
  }
  /* React 侧：camelCase 接口，输出到 react/components/api */
  const REACT_KIT_DIR = join(ROOT, "packages/react/src/components/kit");
  const REACT_OUT_DIR = join(ROOT, "apps/docs/react/components/api");
  mkdirSync(REACT_OUT_DIR, { recursive: true });
  for (const file of readdirSync(REACT_KIT_DIR).filter((f) => f.endsWith(".tsx"))) {
    const name = file.replace(/^x-/, "").replace(/\.tsx$/, "");
    const content = readFileSync(join(REACT_KIT_DIR, file), "utf8");
    /* kebab-case 转 PascalCase（button-group → ButtonGroup） */
    const pascal = name.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join("");
    const props = collectInterface(content, `X${pascal}Props`);
    if (!props.length) continue;
    writeFileSync(join(REACT_OUT_DIR, `${name}.md`), renderTable("Props", props) + "\n");
  }
  console.log(`docs api generated: ${count} vue + react`);
}

main();
