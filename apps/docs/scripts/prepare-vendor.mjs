/**
 * 准备文档站 vendor 目录：
 * 把 packages/react 与 packages/vue 的 src 分别复制到 apps/docs/vendor/react 与 vendor/vue。
 *
 * 两个框架的组件内部都用 '@/...' 别名，且 import 字符串相同（如 '@/components/ui/button'），
 * 无法靠前缀 alias 区分。文档站通过 alias customResolver 依据「发起导入的文件」
 * 路由到对应框架目录：.vue 与 vendor/vue 下的文件走 vue，.tsx 与 vendor/react 下的走 react。
 *
 * 同时把 demos 下的 .vue/.tsx 源码生成 .code.txt 供 ?raw 展示
 * （vite 的 vue 插件会拦截 .vue 的 ?raw import）。
 */
import { cpSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const docsRoot = fileURLToPath(new URL("..", import.meta.url));
const vendorDir = join(docsRoot, "vendor");

const sources = [
  { src: join(docsRoot, "../../packages/vue/src"), dest: join(vendorDir, "vue") },
  { src: join(docsRoot, "../../packages/react/src"), dest: join(vendorDir, "react") },
];

rmSync(vendorDir, { recursive: true, force: true });
mkdirSync(vendorDir, { recursive: true });

for (const { src, dest } of sources) {
  cpSync(src, dest, { recursive: true, force: true });
}

/*
 * demo 源码生成 .code.txt 供 ?raw 展示：
 * vite 的 vue 插件会拦截 .vue 的 ?raw import，代码展示改用 .txt 载体。
 */
const demosDir = join(docsRoot, "demos");

function collectDemos(dir) {
  const result = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) result.push(...collectDemos(full));
    else if (/\.(vue|tsx)$/.test(entry.name)) result.push(full);
  }
  return result;
}

for (const demo of collectDemos(demosDir)) {
  writeFileSync(`${demo}.code.txt`, readFileSync(demo, "utf8"));
}

console.log(`docs vendor prepared: ${vendorDir}`);
