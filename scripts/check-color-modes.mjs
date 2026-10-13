/**
 * 深浅色模式巡检：打开关键浮层组件页，验证亮色 / 暗色两态下浮层面板的背景与文字颜色。
 * 校验规则（Nuxt UI 语义）：
 * - 亮色：面板 bg 为白色（bg-default），文字为中性深色
 * - 暗色：面板 bg 为深色（bg-default dark），文字为浅色
 * 用法：AB=<agent-browser路径> node scripts/check-color-modes.mjs [baseUrl]
 */
import { execSync } from "node:child_process";

const AB = process.env.AB;
if (!AB) {
  console.error("缺少 AB 环境变量：请设置 agent-browser 可执行文件路径（AB=/path/to/agent-browser）");
  process.exit(1);
}
const BASE = process.argv[2] || "http://localhost:5182";

/* 检测页：dropdown 面板是深浅色最典型的验证对象 */
const CHECKS = [
  { page: "/components/dropdown-menu", triggerText: "打开菜单", panel: "[role=menu]" },
];

function run(url, mode) {
  try {
    execSync(`"${AB}" close --all >/dev/null 2>&1`, { shell: "/bin/bash" });
    execSync(`"${AB}" open "${url}" >/dev/null 2>&1`, { shell: "/bin/bash" });
    execSync("sleep 5", { shell: "/bin/bash" });
    /* open 偶发未导航时重试一次 */
    const urlCheck = execSync(`"${AB}" get url`, { shell: "/bin/bash", encoding: "utf8" }).trim();
    if (urlCheck.includes("about:blank")) {
      execSync(`"${AB}" open "${url}" >/dev/null 2>&1`, { shell: "/bin/bash" });
      execSync("sleep 5", { shell: "/bin/bash" });
    }
    if (mode === "dark") {
      execSync(`"${AB}" eval 'document.documentElement.classList.add("dark"); "ok"'`, { shell: "/bin/bash" });
      execSync("sleep 1", { shell: "/bin/bash" });
    }
    const click = execSync(`"${AB}" eval 'JSON.stringify((function(){var b=document.querySelector(".demo-block button"); if(b) b.click(); return {ok:!!b};})())'`, { shell: "/bin/bash", encoding: "utf8" });
    execSync("sleep 2", { shell: "/bin/bash" });
    const panel = execSync(`"${AB}" eval 'JSON.stringify((function(){var e=document.querySelector("[role=menu]"); if(!e) return null; var cs=getComputedStyle(e); return {bg:cs.backgroundColor, color:cs.color};})())'`, { shell: "/bin/bash", encoding: "utf8" });
    const bgMatch = /bg.{0,6}(rgb\([\d, ]+\))/.exec(panel);
    return { clicked: /"ok":true/.test(click), bg: bgMatch ? bgMatch[1] : null };
  } catch (error) {
    return { error: String(error).slice(0, 120) };
  }
}

for (const check of CHECKS) {
  const light = run(`${BASE}${check.page}`, "light");
  const dark = run(`${BASE}${check.page}`, "dark");
  const lightBg = light.bg ?? "";
  const darkBg = dark.bg ?? "";
  const lightOk = lightBg.startsWith("rgb(255, 255, 255)");
  const darkOk = darkBg !== "" && !darkBg.startsWith("rgb(255, 255, 255)");
  const ok = lightOk && darkOk;
  console.log(`${check.page}: 亮色=${lightBg} ${lightOk ? "OK" : "FAIL"} | 暗色=${darkBg} ${darkOk ? "OK" : "FAIL"}`);
  if (!ok) process.exitCode = 1;
}
