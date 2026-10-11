/**
 * token 完整性校验：提取 Nuxt theme 文件中的语义 token 类（bg-、text-、border-、ring- 等），
 * 与 custom.css 的 @theme 映射对比，自动发现缺失的 token 定义。
 * 用法：node scripts/check-theme-tokens.mjs
 */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const THEME_DIR = join(ROOT, "packages/vue/src/lib/nuxt/theme");
const CUSTOM_CSS = join(ROOT, "apps/docs/.vitepress/theme/custom.css");

/* 提取所有 `${prefix}-${token}` 形态的类名引用（前缀限定为语义工具类前缀） */
const classRe = /(?:bg|text|border|ring|outline|divide|from|to|via|fill|stroke|accent|caret)-(?:[a-z][a-z0-9-]*)/g;
const used = new Set();
for (const file of readdirSync(THEME_DIR)) {
  const content = readFileSync(join(THEME_DIR, file), "utf8");
  for (const match of content.matchAll(classRe)) used.add(match[0]);
}

/* 已定义的 token：custom.css 的 @theme 映射与 :root/.dark 变量 */
const css = readFileSync(CUSTOM_CSS, "utf8");
const defined = new Set();
for (const match of css.matchAll(/--(?:color-)?([a-z][a-z0-9-]*):/g)) defined.add(match[1]);
for (const match of css.matchAll(/--color-([a-z][a-z0-9-]*):/g)) defined.add(match[1]);

/* Tailwind 内置色阶 token 白名单 */
const builtins = new Set(["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "slate", "gray", "zinc", "stone", "neutral", "white", "black", "transparent", "current", "inherit", "b", "e", "s", "t", "x", "y", "r", "l", "balance", "base", "bg", "bottom", "center", "collapse", "dashed", "dotted", "end", "hidden", "inset", "left", "lg", "menu", "none", "pretty", "right", "separate", "sm", "solid", "start", "top", "wrap", "xl", "xs"]);
const primarySet = new Set(["primary", "secondary", "success", "info", "warning", "error"]);

const missing = new Set();
for (const cls of used) {
  const token = cls.replace(/^(?:bg|text|border|ring|outline|divide|from|to|via|fill|stroke|accent|caret)-/, "");
  /* 只关注纯单词 token（不含连字符与色阶数字后缀），排除布局/尺寸类噪声 */
  if (!/^[a-z]+$/.test(token)) continue;
  if (builtins.has(token) || primarySet.has(token)) continue;
  if (defined.has(token)) continue;
  missing.add(token);
}

const list = [...missing].sort();
const out = join(ROOT, "scratch/browser/theme-token-report.txt");
writeFileSync(out, list.join("\n"));
console.log(`主题类扫描: ${used.size} 个引用,缺失 token ${list.length} 个 → ${out}`);
if (list.length) console.log(list.join(", "));
