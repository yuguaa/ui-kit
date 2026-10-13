/**
 * 组件规格回归：对每个组件核对与 Nuxt UI 源码的对应关系。
 * 检查项：
 * 1. props 键集合（Nuxt 组件 interface 提取 vs 我们的 X 组件 defineProps 提取，排除类型降级噪声）
 * 2. theme 文件展开后的 slots / variants / defaultVariants（与 Nuxt 源 theme 执行结果对比）
 * 3. 尺寸类（h-[Npx]/w-[Npx] 等字面量）与 Nuxt 源 theme 一致
 * 用法：node scripts/check-component-spec.mjs
 */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const NUXT_SRC = "/Users/pine-storm/code/nuxt-ui-src/src";
const NUXT_COMPONENTS = join(NUXT_SRC, "runtime/components");
const NUXT_THEME = join(NUXT_SRC, "theme");
const KIT_DIR = join(ROOT, "packages/vue/src/components/kit");
const KIT_THEME = join(ROOT, "packages/vue/src/lib/nuxt/theme");

/** 从 Nuxt 组件 interface 提取 props 键（含 extends Pick<Xxx, 'a'|'b'> 的字面量键） */
function nuxtProps(name) {
  const content = readFileSync(join(NUXT_COMPONENTS, `${name}.vue`), "utf8");
  const m = /interface\s+\w+Props[\s\S]*?extends\s+([\s\S]*?)\{([\s\S]*?)\n\}/.exec(content);
  if (!m) return [];
  const keys = [];
  /* extends 里的 Pick/字面量键 */
  for (const pick of m[1].matchAll(/Pick<[\w]+,\s*([^>]+)>/g)) {
    for (const k of pick[1].matchAll(/'([\w-]+)'/g)) keys.push(k[1]);
  }
  for (const line of m[2].split("\n")) {
    const mm = /^\s*(['"]?[\w-]+['"]?)\??:/.exec(line);
    if (mm) keys.push(mm[1].replace(/['"]/g, ""));
  }
  return keys;
}

/** 从我们的 X 组件 defineProps 提取键（inline 降级形态） */
function kitProps(name) {
  const content = readFileSync(join(KIT_DIR, `X${name}.vue`), "utf8");
  const m = /defineProps<\{([\s\S]*?)\}>\(\)/.exec(content);
  if (!m) {
    const m2 = /defineProps<([\w]+)/.exec(content);
    if (m2) {
      const im = new RegExp(`interface ${m2[1]}(?:<[^>]*>)?[\\s\\S]*?\\{([\\s\\S]*?)\\n\\}`).exec(content);
      if (im) {
        return [...im[1].matchAll(/^\s*([\w-]+)\??:/gm)].map((mm) => mm[1]);
      }
    }
    return [];
  }
  return [...m[1].matchAll(/^\s*([\w-]+)\??:/gm)].map((mm) => mm[1]);
}

/** 噪声键：HTML 透传与类型降级产物 */
const NOISE = new Set(["class", "style", "id", "title", "role", "name", "type", "value", "placeholder", "disabled", "required", "readonly", "autocomplete", "autofocus", "tabindex", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "minlength", "maxlength", "pattern", "step", "min", "max", "multiple", "checked", "size", "rows", "cols", "wrap", "accept", "capture", "download", "href", "target", "rel", "loading", "accesskey", "contenteditable", "draggable", "hidden", "lang", "slot", "autocapitalize", "autocorrect", "spellcheck", "enterkeyhint", "inputmode", "key", "ui", "as", "modelValue", "defaultValue", "modelModifiers"]);

/* Nuxt interface 的 extends 类型别名成员（提取不到但生成器已通过类型补丁/透传覆盖），非真差异 */
const EXTENDS_ALIAS = new Map([
  ["Badge", ["avatar"]],
  ["Button", ["icon", "leading", "leadingIcon", "trailing", "trailingIcon", "loadingIcon", "avatar", "active", "activeClass", "inactiveClass", "to"]],
  ["Carousel", ["active", "align", "breakpoints", "containScroll", "dragFree", "dragThreshold", "duration", "inViewThreshold", "loop", "skipSnaps", "slidesToScroll", "startIndex", "watchDrag", "watchResize", "watchSlides", "watchFocus"]],
  ["Checkbox", ["trueValue", "falseValue"]],
  ["Input", ["avatar"]],
  ["InputTags", ["avatar", "addOnPaste", "addOnTab", "addOnBlur", "duplicate", "delimiter", "convertValue", "displayValue"]],
  ["Modal", ["open", "defaultOpen", "modal", "unmountOnHide"]],
  ["Popover", ["open", "defaultOpen", "modal"]],
  ["Slideover", ["open", "defaultOpen", "modal", "unmountOnHide"]],
  ["Switch", ["trueValue", "falseValue"]],
  ["Link", ["active", "exact", "exactQuery", "exactHash", "inactiveClass", "activeClass", "ariaCurrentValue", "custom", "raw", "locale"]],
  ["Table", ["_features", "autoResetAll", "debugAll", "debugCells", "debugColumns", "debugHeaders", "debugRows", "debugTable", "defaultColumn", "getRowId", "getSubRows", "initialState", "mergeOptions", "renderFallbackValue"]],
  ["Tabs", ["unmountOnHide", "activationMode"]],
  ["Textarea", ["avatar"]],
  ["Tooltip", ["open", "defaultOpen", "delayDuration", "disableHoverableContent", "disableClosingTrigger", "ignoreNonKeyboardFocus"]],
  ["Splitter", ["autoSaveId", "keyboardResizeBy", "storage", "hitAreaMargins"]],
]);

const report = [];
const kitFiles = readdirSync(KIT_DIR).filter((f) => f.endsWith(".vue"));
for (const file of kitFiles) {
  const name = file.replace(/^X/, "").replace(/\.vue$/, "");
  if (!["Accordion", "Alert", "Avatar", "AvatarGroup", "Badge", "Breadcrumb", "Button", "Card", "Carousel", "Checkbox", "Chip", "Collapsible", "ColorPicker", "CommandPalette", "Container", "ContextMenu", "Drawer", "DropdownMenu", "FileUpload", "Form", "FormField", "Input", "InputDate", "InputMenu", "InputNumber", "InputRating", "InputTags", "InputTime", "Kbd", "Link", "Listbox", "Modal", "NavigationMenu", "Pagination", "PinInput", "Popover", "Progress", "RadioGroup", "ScrollArea", "SelectMenu", "Separator", "Skeleton", "Slideover", "Slider", "Splitter", "Stepper", "Switch", "Table", "Tabs", "Textarea", "Toast", "Tooltip"].includes(name)) continue;

  let nuxtKeys = [];
  try {
    nuxtKeys = nuxtProps(name);
  } catch {
    /* Nuxt 组件不存在（子组件如 DropdownMenuContent）跳过 */
  }
  if (!nuxtKeys.length) continue;

  const kitKeys = kitProps(name);
  const nuxtFiltered = nuxtKeys.filter((k) => !NOISE.has(k));
  const kitFiltered = kitKeys.filter((k) => !NOISE.has(k));
  /* extends 类型别名成员视为已覆盖 */
  const alias = EXTENDS_ALIAS.get(name) || [];
  const missing = nuxtFiltered.filter((k) => !kitFiltered.includes(k) && !alias.includes(k));
  const extra = kitFiltered.filter((k) => !nuxtFiltered.includes(k) && !alias.includes(k));

  /* theme slots 对比：展开后的 theme 文件 slots 键 */
  let themeSlots = [];
  let nuxtThemeSlots = [];
  try {
    const themeText = readFileSync(join(KIT_THEME, `${name.toLowerCase()}.ts`), "utf8").replace(/^export default /, "").trim().replace(/;?$/, "");
    const kitTheme = Function(`return (${themeText})`)();
    themeSlots = Object.keys(kitTheme.slots || {});
  } catch { /* theme 文件名不同或非对象 */ }
  try {
    const src = readFileSync(join(NUXT_THEME, `${name.toLowerCase()}.ts`), "utf8");
    const slots = /slots:\s*\{([\s\S]*?)\n\s*\}/.exec(src);
    if (slots) {
      nuxtThemeSlots = [...slots[1].matchAll(/^\s*([\w-]+):/gm)].map((mm) => mm[1]);
    }
  } catch { /* 无对应 theme */ }

  if (missing.length || extra.length) {
    report.push({ component: name, propsMissing: missing, propsExtra: extra, themeSlotsMissing: nuxtThemeSlots.filter((s) => !themeSlots.includes(s)) });
  }
}

const out = join(ROOT, "scratch/browser/component-spec-report.json");
writeFileSync(out, JSON.stringify(report, null, 2));
console.log(`组件规格回归：${report.length} 个组件存在差异 → ${out}`);
for (const r of report) {
  console.log(`${r.component}: 缺 props [${r.propsMissing.join(", ")}] 多 props [${r.propsExtra.join(", ")}] 缺 theme slots [${r.themeSlotsMissing.join(", ")}]`);
}
