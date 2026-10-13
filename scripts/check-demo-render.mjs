/**
 * demo 渲染完整性巡检：生产预览站点逐页核对。
 * 检查项：
 * 1. 页面声明的 DemoBlock 数量与实际渲染的 .demo-block 数量是否一致（多渲染/漏渲染）
 * 2. 每个 demo 的 body 内是否有实际内容（非空）
 * 3. 页面 console 是否有 error（demo 崩溃时组件不渲染且报错）
 * 用法：AB=<agent-browser路径> node scripts/check-demo-render.mjs [baseUrl]
 */
import { execSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const AB = process.env.AB;
if (!AB) {
  console.error("缺少 AB 环境变量：请设置 agent-browser 可执行文件路径（AB=/path/to/agent-browser）");
  process.exit(1);
}
if (!existsSync(AB)) {
  console.error(`AB 指向的路径不存在或不可执行: ${AB}`);
  process.exit(1);
}
const BASE = process.argv[2] || "http://localhost:5182";
const ROOT = process.cwd();

function declaredDemos(mdFile) {
  const content = readFileSync(mdFile, "utf8");
  /* DemoBlock（旧用法）与 DemoPreview（vben 式插件）都计入声明数 */
  return ((content.match(/<DemoBlock\b/g) || []).length) + ((content.match(/<DemoPreview\b/g) || []).length);
}

function measure(url) {
  try {
    execSync(`"${AB}" close --all >/dev/null 2>&1`, { shell: "/bin/bash" });
    execSync(`"${AB}" console --clear >/dev/null 2>&1`, { shell: "/bin/bash" });
    execSync(`"${AB}" open "${url}" >/dev/null 2>&1`, { shell: "/bin/bash" });
    execSync("sleep 5", { shell: "/bin/bash" });
    const demosRaw = execSync(`"${AB}" eval 'JSON.stringify(document.querySelectorAll(".demo-block").length)'`, { shell: "/bin/bash", encoding: "utf8" });
    const demos = Number(/\d+/.exec(demosRaw)?.[0] ?? -1);
    const emptyRaw = execSync(`"${AB}" eval 'JSON.stringify(Array.from(document.querySelectorAll(".demo-block")).filter(function(d){ var b = d.querySelector(".demo-block__body"); if (!b) return true; return b.children.length === 0 && !b.querySelector("*"); }).length)'`, { shell: "/bin/bash", encoding: "utf8" });
    const empty = Number(/\d+/.exec(emptyRaw)?.[0] ?? -1);
    const errorsRaw = execSync(`"${AB}" console 2>&1`, { shell: "/bin/bash", encoding: "utf8" });
    const errors = (errorsRaw.match(/\[error\]/g) || []).length;
    return { demos, empty, errors };
  } catch (error) {
    return { demos: -1, empty: -1, errors: -1, note: String(error).slice(0, 80) };
  }
}

const report = [];
const suites = [
  { dir: "apps/docs/components", prefix: "/components/" },
  { dir: "apps/docs/react/components", prefix: "/react/components/" },
];

for (const suite of suites) {
  for (const file of readdirSync(join(ROOT, suite.dir)).filter((f) => f.endsWith(".md"))) {
    const name = file.replace(/\.md$/, "");
    const declared = declaredDemos(join(ROOT, suite.dir, file));
    if (declared === 0) continue;
    const result = measure(`${BASE}${suite.prefix}${name}`);
    const status = result.demos === declared && result.empty === 0 && result.errors === 0 ? "OK" : "FAIL";
    report.push({ page: `${suite.prefix}${name}`, declared, ...result, status });
    console.log(`${status} ${suite.prefix}${name}: 声明 ${declared} / 渲染 ${result.demos} / 空 ${result.empty} / 错误 ${result.errors}`);
  }
}

const fails = report.filter((r) => r.status === "FAIL");
const outPath = join(ROOT, "scratch/browser/demo-render-report.json");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JSON.stringify({ total: report.length, fails, all: report }, null, 2));
console.log(`\n总计 ${report.length} 页,失败 ${fails.length} 页`);
/* 失败时非零退出码，可作为 CI 门禁 */
if (fails.length > 0) process.exitCode = 1;
