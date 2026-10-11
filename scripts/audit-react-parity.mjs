/**
 * React 与 Vue 组件 API 对齐审计：对比双方生成 API 表的 props 名称集合。
 * 输出每组件：Vue 有 React 缺、React 有 Vue 缺、双方共有（kebab/camel 归一后比较）。
 */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const VUE_DIR = join(ROOT, "apps/docs/components/api");
const REACT_DIR = join(ROOT, "apps/docs/react/components/api");

function parsePropsTable(file) {
  const content = readFileSync(file, "utf8");
  const tableMatch = /## Props\s*\n\n\|[^\n]*\|\n\|[^\n]*\|\n([\s\S]*?)(?=\n\n##|\n$)/.exec(content);
  if (!tableMatch) return [];
  const rows = tableMatch[1].split("\n").filter(Boolean);
  const props = [];
  for (const row of rows) {
    const cells = row.split("|").map((c) => c.trim());
    if (cells.length < 2 || !cells[1]) continue;
    const name = cells[1].replace(/[?`]/g, "").trim();
    if (!name || name === "名称") continue;
    props.push(name);
  }
  return props;
}

function normalize(name) {
  return name.replace(/-([a-z])/g, (_m, ch) => ch.toUpperCase());
}

const vueFiles = new Map(readdirSync(VUE_DIR).map((f) => [f.replace(/\.md$/, ""), join(VUE_DIR, f)]));
const reactFiles = new Map(readdirSync(REACT_DIR).map((f) => [f.replace(/\.md$/, ""), join(REACT_DIR, f)]));

const report = [];
let missingTotal = 0;
for (const [name, vueFile] of vueFiles) {
  if (!reactFiles.has(name)) {
    report.push({ component: name, reactFile: "缺失", vueOnly: [], reactOnly: [], shared: [] });
    continue;
  }
  const vueProps = new Set(parsePropsTable(vueFile).map(normalize));
  const reactProps = new Set(parsePropsTable(reactFiles.get(name)).map(normalize));
  /* 过滤纯 HTML 透传与类型别名噪声 */
  const noise = new Set(["class", "style", "id", "title", "role", "name", "type", "value", "placeholder", "disabled", "required", "readonly", "autocomplete", "autofocus", "tabindex", "form", "minlength", "maxlength", "pattern", "step", "min", "max", "multiple", "checked", "size", "rows", "cols", "wrap", "accept", "capture", "download", "href", "target", "rel", "loading", "accesskey", "contenteditable", "draggable", "hidden", "lang", "slot", "autocapitalize", "autocorrect", "spellcheck", "enterkeyhint", "inputmode", "key", "ui"]);
  /* 框架语义等价项：Vue 的 v-model / 修饰符 / as / kebab 事件 与 React 的受控 props / render / camelCase 回调对应 */
  const isFrameworkNoise = (p) =>
    noise.has(p)
    || /^aria[A-Z]/.test(p)
    || /^data[A-Z]/.test(p)
    || p === "modelValue"
    || p === "defaultValue"
    || p === "modelModifiers"
    || p === "as"
    || p === "onContextmenu"
    || p === "onKeydown"
    || p === "onKeyup"
    || p === "onBlur"
    || p === "onFocus"
    || p === "onInput"
    || p === "onChange"
    || p === "onClick"
    || p === "onSelect";
  const vueOnly = [...vueProps].filter((p) => !reactProps.has(p) && !isFrameworkNoise(p)).sort();
  const reactOnly = [...reactProps].filter((p) => !vueProps.has(p) && !isFrameworkNoise(p)).sort();
  if (vueOnly.length || reactOnly.length) {
    report.push({ component: name, vueOnly, reactOnly });
    missingTotal += vueOnly.length;
  }
}

report.sort((a, b) => (b.vueOnly?.length ?? 0) - (a.vueOnly?.length ?? 0));
const lines = ["# React / Vue 组件 API 对齐审计", "", `- Vue 有 React 缺的 props 总数: ${missingTotal}`, ""];
for (const item of report) {
  if (item.reactFile) {
    lines.push(`## ${item.component} — React 侧 API 文件缺失`, "");
    continue;
  }
  lines.push(`## ${item.component}`, "");
  if (item.vueOnly.length) lines.push(`- Vue 有、React 缺: ${item.vueOnly.join(", ")}`);
  if (item.reactOnly.length) lines.push(`- React 有、Vue 缺: ${item.reactOnly.join(", ")}`);
  lines.push("");
}
const out = join(ROOT, "scratch/audit/react-parity.md");
writeFileSync(out, lines.join("\n"));
console.log(`parity report: ${report.length} 个组件有差异，Vue 有 React 缺共 ${missingTotal} 个 props → ${out}`);
