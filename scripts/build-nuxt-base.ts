/**
 * 从 nuxt-ui-src 生成 Nuxt 基础设施与 X 前缀组件到 packages/vue/src/lib/nuxt 与 packages/vue/src/components/kit。
 * 生成内容（视为产物，不手工修改）：
 * - lib/nuxt/types、lib/nuxt/utils、lib/nuxt/composables、lib/nuxt/theme（Nuxt 源码去 seam）
 * - lib/nuxt/ui/*.ts（theme 包装：tv({ extend: theme(moduleOptions) })）
 * - lib/nuxt/imports.ts / app-config.ts / module-options.ts（Nuxt seam 替身）
 * - components/kit/X*.vue（Nuxt 组件源码，U 前缀改 X 前缀，组件互引用与 #build 引用改写）
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { compileScript, parse } = require("@vue/compiler-sfc") as typeof import("@vue/compiler-sfc");

const ROOT = process.cwd();
const NUXT_SRC = "/Users/pine-storm/code/nuxt-ui-src/src/runtime";
const NUXT_THEME_SRC = "/Users/pine-storm/code/nuxt-ui-src/src/theme";
const OUT_BASE = join(ROOT, "packages/vue/src/lib/nuxt");
const OUT_KIT = join(ROOT, "packages/vue/src/components/kit");

/** 移植的 Nuxt 组件（我们组件库的同名组件；ButtonGroup 等扩展组件保留自研） */
const COMPONENTS = [
  "Accordion", "Alert", "Avatar", "AvatarGroup", "Badge", "Breadcrumb", "Button", "Card",
  "Carousel", "Checkbox", "Chip", "Collapsible", "ColorPicker", "CommandPalette", "Container",
  "ContextMenu", "Drawer", "DropdownMenu", "FieldGroup", "FileUpload", "Form", "FormField",
  "Icon", "Input", "InputDate", "InputMenu", "InputNumber", "InputRating", "InputTags",
  "InputTime", "Kbd", "Link", "Listbox", "Modal", "NavigationMenu", "Pagination", "PinInput",
  "Popover", "Progress", "RadioGroup", "ScrollArea", "SelectMenu", "Separator", "Skeleton",
  "Slideover", "Slider", "Splitter", "Stepper", "Switch", "Table", "Tabs", "Textarea",
  "Toast", "Toaster", "Tooltip",
  /* Nuxt 内部子组件（随主组件引用移植） */
  "ContextMenuContent", "DropdownMenuContent", "LinkBase",
];

/** 自研替身的组件（Nuxt 原版依赖 Nuxt 专用包，使用自研兼容实现） */
const SKIP_COMPONENTS = new Set(["Icon"]);

/** 跳过的文件（依赖 Nuxt 专用模块） */
const SKIP_UTILS = new Set(["content.ts", "editor.ts"]);
const SKIP_COMPOSABLES = new Set(["useContentSearch.ts", "useEditorMenu.ts"]);
const SKIP_TYPES = new Set(["content.ts", "editor.ts", "prose.ts", "app.config.d.ts"]);

/** Nuxt seam 替换规则 */
const SEAM_REPLACEMENTS: Array<[RegExp, string]> = [
  [/from ['"]#build\/ui\/([^'"]+)['"]/g, (m: string, name: string) => `from '@/lib/nuxt/ui/${name}'`],
  [/from ['"]#build\/ui-image-component['"]/g, `from '@/lib/nuxt/ui-image-component'`],
  [/from ['"]#build\/app\.config['"]/g, `from '@/lib/nuxt/app-config'`],
  [/from ['"]#imports['"]/g, `from '@/lib/nuxt/imports'`],
  [/from ['"]@nuxt\/schema['"]/g, `from '@/lib/nuxt/types/app-config'`],
];

/** 组件互引用改写：U 前缀组件名与文件名换成 X 前缀 */
function rewriteComponentRefs(source: string): string {
  let out = source;
  for (const name of COMPONENTS) {
    const u = `U${name}`;
    const x = `X${name}`;
    // import UXxx from './Xxx.vue'
    out = out.replace(new RegExp(`import\\s+${u}\\s+from\\s+['"]\\.\\/${name}\\.vue['"]`, "g"), `import ${x} from './${x}.vue'`);
    // 其余 import UXxx 标识符引用
    out = out.replace(new RegExp(`\\b${u}\\b`, "g"), x);
    // 类型导入与剩余文件路径引用 './Xxx.vue' -> './XXxx.vue'
    out = out.replace(new RegExp(`from\\s+['"]\\.\\/${name}\\.vue['"]`, "g"), `from './${x}.vue'`);
  }
  return out;
}

function convert(source: string): string {
  let out = source;
  for (const [pattern, replacement] of SEAM_REPLACEMENTS) {
    out = out.replace(pattern, replacement as string);
  }
  out = rewriteComponentRefs(out);
  return out;
}

/** 基础设施文件（composables/utils/types）中组件类型引用改写：../components/Xxx.vue -> ../../../components/kit/XXxx.vue */
function convertInfra(source: string): string {
  let out = convert(source);
  out = out.replace(/from ['"]\.\.\/components\/([A-Za-z]+)\.vue['"]/g, (_m: string, name: string) => `from '../../../components/kit/X${name}.vue'`);
  return out;
}

/** 生成器内 compiler-sfc 探测用的 fs：处理相对路径与 @/ 别名，包名交给 typescript 解析 */
const probeFs = {
  fileExists(file: string) {
    const candidates = [file, `${file}.ts`, `${file}.tsx`, `${file}.vue`, `${file}/index.ts`, `${file}/index.vue`];
    return candidates.some((candidate) => existsSync(candidate));
  },
  readFile(file: string) {
    const candidates = [file, `${file}.ts`, `${file}.tsx`, `${file}.vue`, `${file}/index.ts`, `${file}/index.vue`];
    for (const candidate of candidates) {
      if (existsSync(candidate)) return readFileSync(candidate, "utf8");
    }
    return undefined;
  },
};

/** 探测组件编译；失败时逐条给 extends 子句加 @vue-ignore 重试 */
function compileComponent(content: string, filename: string): { ok: boolean; content: string; message?: string } {
  const tryCompile = (source: string) => {
    const { descriptor } = parse(source, { filename });
    compileScript(descriptor, { id: "probe", fs: probeFs });
  };
  try {
    tryCompile(content);
    return { ok: true, content };
  } catch (error) {
    const message = String((error as Error).message ?? error);
    if (!message.includes("extends")) {
      return { ok: false, content, message: message.slice(0, 120) };
    }
    /* 给所有 interface extends 子句加 @vue-ignore，保留其余类型推导 */
    let patched = content.replace(/extends\s+([^{]+)\{/g, (_m: string, body: string) => {
      const parts = body.split(",").map((part: string) => `/* @vue-ignore */ ${part.trim()}`);
      return `extends ${parts.join(", ")} {`;
    });
    try {
      tryCompile(patched);
      return { ok: true, content: patched };
    } catch (error2) {
      return { ok: false, content, message: String((error2 as Error).message ?? error2).slice(0, 120) };
    }
  }
}

/** 仅组件文件：相对路径指向 lib/nuxt 基础设施（compiler-sfc 解析类型需要相对路径） */
function convertComponent(source: string): string {
  let out = convert(source);
  out = out.replace(/from ['"]\.\.\/composables(\/[^'"]*)?['"]/g, (m: string) => m.startsWith("from '../composables'") ? `from '../../lib/nuxt/composables'` : m);
  out = out.replace(/from ['"]\.\.\/utils(\/[^'"]*)?['"]/g, (m: string) => m.startsWith("from '../utils'") ? `from '../../lib/nuxt/utils'` : m);
  out = out.replace(/from ['"]\.\.\/types(\/[^'"]*)?['"]/g, (m: string) => m.startsWith("from '../types'") ? `from '../../lib/nuxt/types'` : m);
  out = out.replace(/from ['"]\.\.\/composables\//g, `from '../../lib/nuxt/composables/`);
  out = out.replace(/from ['"]\.\.\/utils\//g, `from '../../lib/nuxt/utils/`);
  out = out.replace(/from ['"]\.\.\/types\//g, `from '../../lib/nuxt/types/`);
  /* Nuxt 组件的跨文件复杂类型由探测函数处理（compileComponent），此处不再整体跳过 */
  return out;
}

/** 拷贝一个 Nuxt 源文件到目标目录（应用转换） */
function copyConverted(rel: string, outDir: string, srcRoot: string = NUXT_SRC) {
  const src = join(srcRoot, rel);
  if (!existsSync(src)) {
    throw new Error(`源文件不存在: ${src}`);
  }
  const out = join(outDir, rel);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, convert(readFileSync(src, "utf8")));
}

/** 拷贝基础设施文件（composables/utils/types，含组件类型引用改写） */
function copyConvertedInfra(rel: string, outDir: string) {
  const src = join(NUXT_SRC, rel);
  if (!existsSync(src)) {
    throw new Error(`源文件不存在: ${src}`);
  }
  const out = join(outDir, rel);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, convertInfra(readFileSync(src, "utf8")));
}

function main() {
  rmSync(OUT_BASE, { recursive: true, force: true });
  mkdirSync(OUT_BASE, { recursive: true });

  /* types / utils / composables / theme（跳过目录与黑名单） */
  for (const rel of readdirSync(join(NUXT_SRC, "types")).filter((f) => f.includes("."))) {
    if (SKIP_TYPES.has(rel)) continue;
    copyConvertedInfra(join("types", rel), OUT_BASE);
  }
  for (const rel of readdirSync(join(NUXT_SRC, "utils")).filter((f) => f.includes("."))) {
    if (SKIP_UTILS.has(rel)) continue;
    copyConvertedInfra(join("utils", rel), OUT_BASE);
  }
  for (const rel of readdirSync(join(NUXT_SRC, "composables")).filter((f) => f.includes("."))) {
    if (SKIP_COMPOSABLES.has(rel)) continue;
    copyConvertedInfra(join("composables", rel), OUT_BASE);
  }
  for (const rel of readdirSync(NUXT_THEME_SRC).filter((f) => f.includes("."))) {
    copyConverted(rel, join(OUT_BASE, "theme"), NUXT_THEME_SRC);
  }
  for (const rel of readdirSync(join(NUXT_SRC, "locale")).filter((f) => f.includes("."))) {
    copyConvertedInfra(join("locale", rel), OUT_BASE);
  }

  /* composables / utils / types 的 index.ts 保持 Nuxt 原版（含具体导出），拷贝时剔除被跳过的文件引用 */
  for (const rel of ["composables/index.ts", "utils/index.ts", "types/index.ts"]) {
    const src = join(NUXT_SRC, rel);
    if (existsSync(src)) {
      let content = readFileSync(src, "utf8");
      for (const skipped of [...SKIP_UTILS, ...SKIP_COMPOSABLES, ...SKIP_TYPES]) {
        const base = skipped.endsWith(".d.ts") ? skipped.slice(0, -5) : skipped.slice(0, -3);
        content = content.split("\n").filter((line) => !line.includes("./" + base + "'")).join("\n");
      }
      const out = join(OUT_BASE, rel);
      mkdirSync(dirname(out), { recursive: true });
      writeFileSync(out, convertInfra(content));
    }
  }

  /* 固定 moduleOptions（对应 Nuxt 默认配置） */
  writeFileSync(join(OUT_BASE, "module-options.ts"), `import type { ModuleOptions } from '@/lib/nuxt/types/module-options'

export const moduleOptions: Required<ModuleOptions> = {
  prefix: 'U',
  fonts: false,
  colorMode: true,
  prose: false,
  content: false,
  mdc: false,
  theme: {
    colors: ['primary', 'secondary', 'success', 'info', 'warning', 'error'],
    transitions: true,
    unstyled: false,
    prefix: '',
  },
}
`);

  /* ModuleOptions 类型（去 Nuxt 依赖） */
  writeFileSync(join(OUT_BASE, "types/module-options.ts"), `export type Color = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | (string & {})
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {})

export interface ModuleOptions {
  prefix?: string
  fonts?: boolean
  colorMode?: boolean
  prose?: boolean
  content?: boolean
  mdc?: boolean
  theme?: {
    colors?: Color[]
    transitions?: boolean
    unstyled?: boolean
    prefix?: string
    defaultVariants?: { color?: Color; size?: Size }
  }
}
`);

  /* AppConfig 类型（去 @nuxt/schema 依赖） */
  writeFileSync(join(OUT_BASE, "types/app-config.ts"), `export interface AppConfig { ui?: Record<string, any> }
`);

  /* app.config 替身（ui 默认值对应 Nuxt getDefaultConfig） */
  writeFileSync(join(OUT_BASE, "app-config.ts"), `import type { AppConfig } from '@/lib/nuxt/types/app-config'
import icons from '@/lib/nuxt/theme/icons'

export default {
  ui: {
    colors: {
      primary: 'green',
      secondary: 'blue',
      success: 'green',
      info: 'blue',
      warning: 'yellow',
      error: 'red',
      neutral: 'slate',
    },
    icons,
    prefix: undefined,
    tv: { twMergeConfig: {} },
  },
} as AppConfig & { ui: Record<string, any> }
`);

  /* Nuxt seam 替身 */
  writeFileSync(join(OUT_BASE, "imports.ts"), `import { ref } from 'vue'
import appConfig from '@/lib/nuxt/app-config'

/** useAppConfig 替身：返回固定 app.config */
export function useAppConfig() {
  return appConfig
}

/** useRoute 替身：按 location.pathname 提供最小路由信息 */
export function useRoute() {
  return {
    path: typeof window !== 'undefined' ? window.location.pathname : '/',
    query: {},
    params: {},
    hash: '',
    fullPath: typeof window !== 'undefined' ? window.location.href : '/',
    matched: [],
  }
}

/** useState 替身：内存版共享状态 */
const stateMap = new Map<string, ReturnType<typeof ref>>()
export function useState<T>(key: string, init?: () => T) {
  if (!stateMap.has(key)) {
    stateMap.set(key, ref(init?.()))
  }
  return stateMap.get(key) as ReturnType<typeof ref<T>>
}

/** useCookie 替身：localStorage 持久化 */
export function useCookie<T>(name: string) {
  const stored = typeof window !== 'undefined' ? window.localStorage.getItem(name) : null
  const value = ref<T | null>(stored ? (JSON.parse(stored) as T) : null)
  const watch = (cb: () => void) => {
    cb()
    return () => {}
  }
  return Object.assign(value, { watch })
}

/** useColorMode 替身 */
export function useColorMode() {
  return { value: ref('light'), preference: 'system' }
}

/** noop 替身 */
export function useRuntimeHook() {}
export function useNuxtApp() {
  return { $config: {}, runWithContext: (fn: () => void) => fn() }
}
export function onNuxtReady(cb: () => void) {
  cb()
}
export function useHead() {}
export function clearError() {}
`);

  /* #build/ui-image-component 替身（无 NuxtImg 时导出原生 img） */
  writeFileSync(join(OUT_BASE, "ui-image-component.ts"), `export default "img"
`);

  /* tv 包装入口 ui/<name>.ts */
  const themeNames = readdirSync(NUXT_THEME_SRC)
    .filter((f) => f.endsWith(".ts"))
    .map((f) => f.slice(0, -3));
  mkdirSync(join(OUT_BASE, "ui"), { recursive: true });
  for (const name of themeNames) {
    const themeSrc = readFileSync(join(NUXT_THEME_SRC, `${name}.ts`), "utf8");
    /* 对象型主题直接 extend；函数型主题以固定 moduleOptions 调用 */
    const extendExpr = themeSrc.includes("ModuleOptions") ? "theme(moduleOptions)" : "theme";
    writeFileSync(join(OUT_BASE, "ui", `${name}.ts`), `import theme from '../theme/${name}'
import { moduleOptions } from '../module-options'
import { tv } from '../utils/tv'

export default tv({ extend: ${extendExpr} })
`);
  }

  /* 组件：拷贝并转 X 前缀文件名与引用，编译探测修正类型解析 */
  const compileWarnings: string[] = [];
  for (const name of COMPONENTS) {
    if (SKIP_COMPONENTS.has(name)) continue;
    const src = join(NUXT_SRC, "components", `${name}.vue`);
    if (!existsSync(src)) {
      throw new Error(`Nuxt 组件不存在: ${name}`);
    }
    const converted = convertComponent(readFileSync(src, "utf8"));
    const result = compileComponent(converted, join(OUT_KIT, `X${name}.vue`));
    if (!result.ok) {
      compileWarnings.push(`${name}: ${result.message}`);
    }
    writeFileSync(join(OUT_KIT, `X${name}.vue`), result.content);
  }
  if (compileWarnings.length) {
    console.log(`compile warnings (${compileWarnings.length}):`);
    for (const warning of compileWarnings) console.log(`  - ${warning}`);
  }

  console.log(`nuxt-base generated: ${themeNames.length} themes, ${COMPONENTS.length} components`);
}

main();
