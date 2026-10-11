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
import { basename } from "node:path";
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

/** 自研替身的组件（Nuxt 原版依赖 Nuxt 专用包，使用自研兼容实现）；RadioGroup 为手工降级维护 */
const SKIP_COMPONENTS = new Set(["Icon", "RadioGroup"]);

/** 强制运行时声明降级的组件（生成器探针与文档构建环境的类型解析存在差异，兜底保证编译一致） */
const FORCE_RUNTIME = new Set<string>();

/** 跳过的文件（依赖 Nuxt 专用模块） */
const SKIP_UTILS = new Set(["content.ts", "editor.ts"]);
const SKIP_COMPOSABLES = new Set(["useContentSearch.ts", "useEditorMenu.ts"]);
const SKIP_TYPES = new Set(["content.ts", "editor.ts", "prose.ts", "app.config.d.ts"]);

/** Nuxt seam 替换规则 */
const SEAM_REPLACEMENTS: Array<[RegExp, string]> = [
  [/from ['"]#build\/ui\/([^'"]+)['"]/g, (m: string, name: string) => `from '@/lib/nuxt/ui/${name}'`],
  [/from ['"]#build\/ui['"]/g, `from '@/lib/nuxt/ui'`],
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
  /* 组件 re-export（含子目录组件）：在 COMPONENTS 清单内的改成 kit 路径，未移植的改为宽松类型别名 */
  out = out.replace(/^export \* from ['"]\.\.\/components\/(?:[\w-]+\/)*([A-Za-z]+)\.vue['"]$/gm, (_m: string, name: string) => {
    if (COMPONENTS.includes(name)) {
      return `export * from '../../../components/kit/X${name}.vue'`;
    }
    return `export type ${name}Props = Record<string, any>\nexport type ${name}Slots = Record<string, any>\nexport type ${name}Emits = Record<string, any>`;
  });
  /* 被跳过类型文件的 re-export（如 ./content）改为空的宽松导出 */
  out = out.replace(/^export \* from ['"]\.\/(?:content|editor|prose)['"]$/gm, "");
  /* 其余组件路径引用：清单内的指向 kit，清单外保持（极少出现） */
  out = out.replace(/from ['"]\.\.\/components\/(?:[\w-]+\/)*([A-Za-z]+)\.vue['"]/g, (_m: string, name: string) =>
    COMPONENTS.includes(name) ? `from '../../../components/kit/X${name}.vue'` : _m);
  return out;
}

/** 成员定义：键与可选性（类型统一降级为 any，运行时只关心名字与可选） */
interface MemberDef { key: string; optional: boolean; doc?: string }

/** Omit<HTMLAttributes, ...> 的近似展开：常用 HTML 属性清单 */
const HTML_ATTRIBUTE_KEYS = [
  "class", "style", "id", "title", "role", "name", "type", "value", "placeholder",
  "disabled", "required", "readonly", "autocomplete", "autofocus", "tabindex", "form",
  "minlength", "maxlength", "pattern", "step", "min", "max", "multiple", "checked",
  "size", "rows", "cols", "wrap", "accept", "capture", "download", "href", "target",
  "rel", "loading", "accesskey", "contenteditable", "draggable", "hidden", "lang", "slot",
  "autocapitalize", "autocorrect", "spellcheck", "enterkeyhint", "inputmode",
  "aria-label", "aria-describedby", "aria-hidden", "aria-expanded", "aria-current",
  "aria-checked", "aria-controls", "aria-disabled", "aria-invalid", "aria-live",
  "aria-selected", "data-testid",
];

/** 从 `{ ... }` 块文本中提取成员（键与可选性，跳过嵌套类型文本） */
function parseMembersFromBody(body: string): MemberDef[] {
  const members: MemberDef[] = [];
  const parseOne = (text: string): MemberDef | undefined => {
    /* JSDoc 保留供文档提取 */
    const docMatch = /\/\*\*?[\s\S]*?\*\//.exec(text);
    const doc = docMatch ? docMatch[0] : undefined;
    const cleaned = text
      .trim()
      .replace(/^\/\*\*?[\s\S]*?\*\//, "")
      .replace(/^\/\/[^\n]*\n?/, "")
      .trim();
    if (!cleaned) return undefined;
    let depth = 0;
    let colon = -1;
    let inQuote = false;
    let quoteChar = "";
    for (let i = 0; i < cleaned.length; i++) {
      const ch = cleaned[i];
      if (inQuote) {
        if (ch === quoteChar && cleaned[i - 1] !== "\\") inQuote = false;
        continue;
      }
      if (ch === "'" || ch === '"') {
        inQuote = true;
        quoteChar = ch;
        continue;
      }
      if (ch === "(" || ch === "<" || ch === "[") depth++;
      else if (ch === ")" || ch === ">" || ch === "]") depth = Math.max(0, depth - 1);
      else if (ch === ":" && depth === 0) {
        colon = i;
        break;
      }
    }
    if (colon < 0) return undefined;
    const keyPart = cleaned.slice(0, colon).trim();
    const optional = keyPart.endsWith("?");
    const key = keyPart.replace(/\?$/, "").replace(/^['"]|['"]$/g, "").trim();
    if (!key) return undefined;
    return { key, optional, doc };
  };

  /* 接口成员以换行分隔（无分号）：逐成员扫描，顶层新键起始行切分上一个成员；嵌套花括号内的行不切分 */
  let current = "";
  let braceDepth = 0;
  for (const line of body.split("\n")) {
    const trimmed = line.trim();
    if (/^(?:['"][^'"]+['"]|[A-Za-z_$][\w$]*)\??:/.test(trimmed) && current.includes(":") && braceDepth === 0) {
      const member = parseOne(current);
      if (member) members.push(member);
      current = "";
    }
    current += `\n${line}`;
    /* 统计花括号净深度（忽略引号内内容由粗略计数近似，成员类型中的对象字面量均成对） */
    for (const ch of line) {
      if (ch === "{") braceDepth++;
      else if (ch === "}") braceDepth = Math.max(0, braceDepth - 1);
    }
  }
  const last = parseOne(current);
  if (last) members.push(last);
  return members;
}

/** 顶层分隔符拆分（逗号或分号），跳过引号与嵌套括号 */
function splitTopLevel(text: string, separator: string): string[] {
  const result: string[] = [];
  let depth = 0;
  let start = 0;
  let inQuote = false;
  let quoteChar = "";
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuote) {
      if (ch === quoteChar && text[i - 1] !== "\\") inQuote = false;
      continue;
    }
    if (ch === "'" || ch === '"') {
      inQuote = true;
      quoteChar = ch;
      continue;
    }
    if (ch === "(" || ch === "<" || ch === "[" || ch === "{") depth++;
    else if (ch === ")" || ch === ">" || ch === "]" || ch === "}") depth = Math.max(0, depth - 1);
    else if (ch === separator && depth === 0) {
      result.push(text.slice(start, i));
      start = i + 1;
    }
  }
  result.push(text.slice(start));
  return result;
}

/** 在文本中查找 `interface|type Name` 的定义块（到配对的 } 结束） */
function findDefinitionBlock(source: string, name: string): string | undefined {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const headRe = new RegExp(`(?:interface|type)\\s+${escaped}\\b`);
  const match = headRe.exec(source);
  if (!match) return undefined;
  let i = match.index + match[0].length;
  /* 跳过泛型参数（配对 < >，支持嵌套） */
  if (source[i] === "<") {
    let depth = 1;
    i++;
    for (; i < source.length && depth > 0; i++) {
      if (source[i] === "<") depth++;
      else if (source[i] === ">") depth--;
    }
  }
  /* 找定义体开括号：type 别名有 = 或 extends 之后 */
  while (i < source.length && source[i] !== "{") {
    i++;
  }
  if (i >= source.length) return undefined;
  let depth = 1;
  let j = i + 1;
  let inQuote = false;
  let quoteChar = "";
  for (; j < source.length; j++) {
    const ch = source[j];
    if (inQuote) {
      if (ch === quoteChar && source[j - 1] !== "\\") inQuote = false;
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
      if (depth === 0) return source.slice(match.index, j + 1);
    }
  }
  return undefined;
}

/** 类型成员解析上下文：组件文件 → 本地库 → reka-ui d.ts → HTML 属性清单 */
function createMemberResolver(componentSource: string, rekaDts: string, localIndex: Map<string, string>) {
  const cache = new Map<string, MemberDef[]>();

  const resolveName = (raw: string, depth: number): MemberDef[] => {
    /* 剥泛型参数：取第一个顶层 < 之前的名字 */
    let cut = raw.length;
    let depthCount = 0;
    for (let i = 0; i < raw.length; i++) {
      const ch = raw[i];
      if (ch === "<") depthCount++;
      else if (ch === ">") depthCount--;
      else if ((ch === "," || ch === "&") && depthCount === 0) {
        cut = i;
        break;
      }
    }
    const name = raw.slice(0, cut).trim();
    if (!name) return [];
    if (cache.has(raw)) return cache.get(raw)!;
    const result: MemberDef[] = [];

    /* Pick<X, keys> / Omit<X, keys> 拆解 */
    const pickMatch = /^(Pick|Omit)<([\s\S]*),\s*([\s\S]*)>$/.exec(raw);
    if (pickMatch && depth < 6) {
      const base = resolveName(pickMatch[2].trim(), depth + 1);
      const keys = [...pickMatch[3].matchAll(/['"]([\w:-]+)['"]/g)].map((m) => m[1]);
      const isPick = pickMatch[1] === "Pick";
      for (const member of base) {
        const keep = isPick ? keys.includes(member.key) : !keys.includes(member.key);
        if (keep) result.push(member);
      }
    } else if (name.includes("HTMLAttributes") || name.includes("InputHTMLAttributes") || name === "Attributes") {
      for (const key of HTML_ATTRIBUTE_KEYS) result.push({ key, optional: true });
    } else {
      /* 本地库定义（含组件自身与 lib/nuxt） */
      let block = findDefinitionBlock(componentSource, name) ?? (localIndex.has(name) ? findDefinitionBlock(localIndex.get(name)!, name) : undefined);
      /* reka-ui d.ts */
      if (!block) block = findDefinitionBlock(rekaDts, name);
      if (block) {
        const eq = block.indexOf("=");
        const openBrace = block.indexOf("{");
        const equalsToAlias = eq >= 0 && (openBrace < 0 || eq < openBrace);
        const afterEq = eq >= 0 ? block.slice(eq + 1).trim() : "";
        if (equalsToAlias && !afterEq.startsWith("{")) {
          /* type 别名无字面量体：解析 = 后表达式（如 Omit<X, keys>） */
          const expr = afterEq.replace(/;?\s*$/, "").trim();
          if (expr) {
            const resolved = resolveName(expr, depth + 1);
            cache.set(raw, resolved);
            return resolved;
          }
        }
        const open = block.indexOf("{");
        const close = block.lastIndexOf("}");
        if (open >= 0 && close > open) {
          const body = block.slice(open + 1, close);
          result.push(...parseMembersFromBody(body));
          /* 本地 interface 的 extends 再展开一层 */
          const extendsMatch = /extends\s+([\s\S]*?)\{/.exec(block.slice(0, open));
          if (extendsMatch && depth < 5) {
            for (const ext of splitTopLevel(extendsMatch[1], ",")) {
              const extName = ext.trim();
              if (extName) result.push(...resolveName(extName, depth + 1));
            }
          }
        }
      }
    }
    cache.set(raw, result);
    return result;
  };

  return resolveName;
}

/** 把 Props / Emits interface 的 extends 内联为成员声明（类型 any，保名字与可选性） */
function inlineAllExtends(content: string, rekaDts: string, localIndex: Map<string, string>): string {
  const resolveName = createMemberResolver(content, rekaDts, localIndex);
  const toLines = (memberList: MemberDef[]) => {
    const seen = new Set<string>();
    return memberList
      .filter((member) => {
        if (seen.has(member.key)) return false;
        seen.add(member.key);
        return true;
      })
      .map((member) => {
        /* 键含连字符或冒号（事件名）时加引号 */
        const key = /^[A-Za-z_$][\w$]*$/.test(member.key) ? member.key : `'${member.key}'`;
        /* 保留成员 JSDoc（@defaultValue 与说明）供 API 文档提取 */
        const doc = member.doc ? `  ${member.doc.trim().split("\n").map((line) => line.trim()).join("\n  ")}\n` : "";
        return `${doc}  ${key}${member.optional ? "?" : ""}: any;`;
      })
      .join("\n");
  };
  let out = content.replace(/(export\s+interface\s+\w+(?:<[^>]*>)?\s*)extends\s+([\s\S]*?)\s*\{/g, (_match, prefix: string, extendsText: string) => {
    const members: MemberDef[] = [];
    for (const ext of splitTopLevel(extendsText, ",")) {
      const extName = ext.trim().replace(/\/\*[\s\S]*?\*\//g, "").trim();
      if (!extName) continue;
      members.push(...resolveName(extName, 0));
    }
    return `${prefix}{\n${toLines(members)}`;
  });
  /* type 别名形态的 Emits：`= Pick<A, keys> & {` 或 `= A & {` 展开为内联成员（排除联合类型中的 &） */
  out = out.replace(/(export\s+type\s+\w+(?:<[^>]*>)?\s*=\s*)(?:Pick<[\s\S]*?>|[A-Za-z_$][\w$]*)(?:<[^>]*>)?\s*&\s*\{/g, (_match, prefix: string) => {
    const eq = _match.indexOf("=");
    const amp = _match.lastIndexOf(" & {");
    const exprName = _match.slice(eq + 1, amp).trim();
    const members = resolveName(exprName, 0);
    return `${prefix}{\n${toLines(members)}`;
  });
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

/** 收集 Props/Emits 成员名单（沿用 extends 解析器） */
function collectInterfaceMembers(content: string, typeName: string, rekaDts: string, localIndex: Map<string, string>): MemberDef[] {
  const resolveName = createMemberResolver(content, rekaDts, localIndex);
  const block = findDefinitionBlock(content, typeName);
  if (!block) {
    console.log(`[collect-debug] ${typeName}: 未找到定义块`);
    return [];
  }
  const open = block.indexOf("{");
  const close = block.lastIndexOf("}");
  const members: MemberDef[] = [];
  if (open >= 0 && close > open) {
    const parsed = parseMembersFromBody(block.slice(open + 1, close));
    if (parsed.length < 2) {
      console.log(`[collect-debug] ${typeName}: body 解析 ${parsed.length} 个, body 前 120: ${JSON.stringify(block.slice(open + 1, open + 121))}`);
    }
    members.push(...parsed);
  }
  /* interface extends 与 type 别名的外部表达式 */
  const head = block.slice(0, open);
  const extendsMatch = /extends\s+([\s\S]*?)\s*\{/.exec(head);
  if (extendsMatch) {
    for (const ext of splitTopLevel(extendsMatch[1], ",")) {
      const extName = ext.trim().replace(/\/\*[\s\S]*?\*\//g, "").trim();
      if (extName) members.push(...resolveName(extName, 0));
    }
  } else {
    /* `= Pick<A, keys> & {` 形态 */
    const eq = head.indexOf("=");
    if (eq >= 0) {
      for (const expr of splitTopLevel(head.slice(eq + 1), "&")) {
        const exprName = expr.trim();
        if (exprName && !exprName.startsWith("{")) members.push(...resolveName(exprName, 0));
      }
    }
  }
  const seen = new Set<string>();
  return members.filter((member) => {
    if (seen.has(member.key)) return false;
    seen.add(member.key);
    return true;
  });
}

/** 空 emits 接口补齐事件名（优先 reka RootEmits，失败时用通用事件集兜底） */
function patchEmptyEmits(content: string, rekaDts: string, localIndex: Map<string, string>): string {
  return content.replace(/export\s+interface\s+(\w+Emits)(?:<[^>]*>)?\s*(?:extends\s+[^{]+\s*)?\{\s*\}/g, (_m: string, typeName: string) => {
    const rootName = typeName.replace(/Emits$/, "RootEmits");
    let members = collectInterfaceMembers(rekaDts, rootName, rekaDts, localIndex);
    if (members.length === 0) {
      members = ["update:modelValue", "update:open", "change", "close", "select", "highlight", "entryFocus", "leave", "open", "loading"].map((key) => ({ key, optional: true }));
    }
    const lines = members.map((member) => {
      const key = member.key.includes("-") || member.key.includes(":") ? `'${member.key}'` : member.key;
      return `  ${key}: [payload?: any];`;
    });
    return `export interface ${typeName} {\n${lines.join("\n")}\n}`;
  });
}

/** 失败组件的类型字面量降级：defineProps/defineEmits/defineSlots 用内联 any 成员类型，编译必过且保留事件声明 */
function typeLiteralFallback(content: string, rekaDts: string, localIndex: Map<string, string>): string {
  let out = content;
  out = out.replace(/defineProps<(\w+)(?:<[^>]*>)?>/g, (_m: string, typeName: string) => {
    const members = collectInterfaceMembers(content, typeName, rekaDts, localIndex);
    if (members.length < 2) {
      console.log(`[fallback-debug] ${typeName} 成员过少: ${members.map((member) => member.key).join(",")}`);
    }
    const lines = members.map((member) => {
      const key = /^[A-Za-z_$][\w$]*$/.test(member.key) ? member.key : `'${member.key}'`;
      const doc = (member as { doc?: string }).doc ? `  ${(member as { doc?: string }).doc!.trim()}\n` : "";
      return `${doc}  ${key}?: any;`;
    });
    return `defineProps<{\n${lines.join("\n")}\n}>`;
  });
  out = out.replace(/defineEmits<(\w+)(?:<[^>]*>)?>/g, (_m: string, typeName: string) => {
    let members = collectInterfaceMembers(content, typeName, rekaDts, localIndex);
    /* 空 emits 接口（Nuxt 原样）补齐 reka RootEmits 事件名，避免未声明事件警告 */
    if (members.length === 0) {
      const rootName = typeName.replace(/Emits$/, "RootEmits");
      members = collectInterfaceMembers(rekaDts, rootName, rekaDts, localIndex);
    }
    if (members.length === 0) {
      members = ["update:modelValue", "update:open", "change", "close", "select", "highlight", "entryFocus", "leave", "open"].map((key) => ({ key, optional: true }));
    }
    const lines = members.map((member) => {
      const key = member.key.includes("-") || member.key.includes(":") ? `'${member.key}'` : member.key;
      return `  ${key}: [payload?: any];`;
    });
    return `defineEmits<{\n${lines.join("\n")}\n}>`;
  });
  out = out.replace(/defineSlots<(\w+)(?:<[^>]*>)?>/g, () => "defineSlots<Record<string, any>>");
  return out;
}

/** 失败组件的运行时声明降级：defineProps/defineEmits 用对象/数组声明，类型注解保留 */
function runtimeDeclFallback(content: string, rekaDts: string, localIndex: Map<string, string>): string {
  let out = content;
  /* withDefaults(defineProps<X>(), {defaults}) 形态：正则匹配，函数默认值的 Table 用特判配对扫描 */
  if (content.includes("watchOptions")) {
    /* Table 特判：defaults 含箭头函数（含嵌套花括号） */
    const start = out.indexOf("withDefaults(defineProps<");
    if (start >= 0) {
      const typeNameMatch = /defineProps<(\w+)/.exec(out.slice(start));
      const typeName = typeNameMatch ? typeNameMatch[1] : "TableProps";
      const commaAt = out.indexOf("(),", start);
      const open = out.indexOf("{", commaAt);
      let depth = 1;
      let i = open + 1;
      let inQuote = false;
      let quoteChar = "";
      for (; i < out.length && depth > 0; i++) {
        const ch = out[i];
        if (inQuote) {
          if (ch === quoteChar && out[i - 1] !== "\\") inQuote = false;
          continue;
        }
        if (ch === "'" || ch === '"') {
          inQuote = true;
          quoteChar = ch;
          continue;
        }
        if (ch === "{") depth++;
        else if (ch === "}") depth--;
      }
      const close = i - 1;
      const callEnd = out.indexOf(")", close);
      const defaultsBody = out.slice(open + 1, close);
      const members = collectInterfaceMembers(content, typeName, rekaDts, localIndex);
      const defaults = new Map<string, string>();
      for (const segment of splitTopLevel(defaultsBody, ",")) {
        const colon = segment.indexOf(":");
        if (colon < 0) continue;
        const key = segment.slice(0, colon).trim().replace(/^['"]|['"]$/g, "");
        const expr = segment.slice(colon + 1).trim();
        if (key) defaults.set(key, expr);
      }
      const lines = members.map((member) => {
        const keyText = /^[A-Za-z_$][\w$]*$/.test(member.key) ? member.key : `'${member.key}'`;
        const defaultExpr = defaults.get(member.key);
        return defaultExpr != null
          ? `  ${keyText}: { default: ${defaultExpr} },`
          : `  ${keyText}: null,`;
      });
      const varNameMatch = /const\s+(\w+)\s*=\s*withDefaults\(defineProps</.exec(out.slice(0, start + 1));
      const varName = varNameMatch ? varNameMatch[1] : "_props";
      out = out.slice(0, start) + `const ${varName}: ${typeName} = defineProps({\n${lines.join("\n")}\n})` + out.slice(callEnd + 1);
    }
  }
  out = out.replace(/const\s+(\w+)\s*=\s*withDefaults\(defineProps<\w+(?:<[^>]*>)?>\(\),\s*\{([\s\S]*?)\}\s*\)/g, (_m: string, varName: string, defaultsBody: string) => {
    const typeNameMatch = /defineProps<(\w+)/.exec(_m);
    const typeName = typeNameMatch ? typeNameMatch[1] : "";
    const members = collectInterfaceMembers(content, typeName, rekaDts, localIndex);
    /* defaults 各项并入成员对象（{ default: 原表达式 }） */
    const defaults = new Map<string, string>();
    for (const segment of splitTopLevel(defaultsBody, ",")) {
      const colon = segment.indexOf(":");
      if (colon < 0) continue;
      const key = segment.slice(0, colon).trim().replace(/^['"]|['"]$/g, "");
      const expr = segment.slice(colon + 1).trim();
      if (key) defaults.set(key, expr);
    }
    const lines = members.map((member) => {
      const keyText = /^[A-Za-z_$][\w$]*$/.test(member.key) ? member.key : `'${member.key}'`;
      const defaultExpr = defaults.get(member.key);
      return defaultExpr != null
        ? `  ${keyText}: { default: ${defaultExpr} },`
        : `  ${keyText}: null,`;
    });
    return `const ${varName}: ${typeName} = defineProps({\n${lines.join("\n")}\n})`;
  });
  out = out.replace(/const\s+(\w+)\s*=\s*defineProps<(\w+)(?:<[^>]*>)?>\(\)/g, (_m: string, varName: string, typeName: string) => {
    const members = collectInterfaceMembers(content, typeName, rekaDts, localIndex);
    const lines = members.map((member) => {
      const key = /^[A-Za-z_$][\w$]*$/.test(member.key) ? member.key : `'${member.key}'`;
      return `  ${key}: null,`;
    });
    return `const ${varName}: ${typeName} = defineProps({\n${lines.join("\n")}\n})`;
  });
  /* defineEmits<X>() → 事件名数组 */
  out = out.replace(/const\s+(\w+)\s*=\s*defineEmits<(\w+)(?:<[^>]*>)?>\(\)/g, (_m: string, varName: string, typeName: string) => {
    const members = collectInterfaceMembers(content, typeName, rekaDts, localIndex);
    const names = members.map((member) => {
      const key = /^[A-Za-z_$][\w$]*$/.test(member.key) ? member.key : `'${member.key}'`;
      return `  ${key},`;
    });
    return `const ${varName}: ${typeName} = defineEmits([\n${names.join("\n")}\n])`;
  });
  return out;
}

/** 探测组件编译；失败时依次：extends 内联展开 → 运行时声明降级 */
function compileComponent(content: string, filename: string): { ok: boolean; content: string; message?: string } {
  const tryCompile = (source: string) => {
    const { descriptor } = parse(source, { filename });
    compileScript(descriptor, { id: "probe", fs: probeFs, isProd: true });
  };
  const rekaDts = resolveRekaDts();
  const localIndex = localTypeIndex();
  /* vue-tsc 严格检查需要 extends 成员完整：优先内联展开（失败再回退原始形态） */
  const inlined = inlineAllExtends(content, rekaDts, localIndex);
  if (inlined !== content) {
    try {
      tryCompile(inlined);
      return { ok: true, content: inlined };
    } catch { /* 内联失败继续走原始形态 */ }
  }
  try {
    tryCompile(content);
    return { ok: true, content };
  } catch (error) {
    const message = String((error as Error).message ?? error);
    /* 类型字面量降级：内联 any 成员类型，保留 withDefaults 与事件声明 */
    const fallback = typeLiteralFallback(content, rekaDts, localIndex);
    if (fallback !== content) {
      try {
        tryCompile(fallback);
        return { ok: true, content: fallback };
      } catch (error2) {
        writeFileSync(join(ROOT, "scratch", `fallback-${basename(filename).replace(/\.vue$/, "")}.vue`), fallback);
        return { ok: false, content, message: `${message.slice(0, 60)} | fallback: ${String((error2 as Error).message ?? error2).slice(0, 60)}` };
      }
    }
    return { ok: false, content, message: message.slice(0, 140) };
  }
}

/** reka-ui 类型声明聚合（dist 下全部 d.ts 拼接，类型定义分散在各子目录） */
function resolveRekaDts(): string {
  const distDir = join(ROOT, "packages/vue/node_modules/reka-ui/dist");
  if (!existsSync(distDir)) return "";
  const chunks: string[] = [];
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      if (full.endsWith(".d.ts")) {
        chunks.push(readFileSync(full, "utf8"));
      } else if (existsSync(full)) {
        try {
          const stat = readFileSync(full, "utf8");
          if (stat === "" ) walk(full);
        } catch {
          walk(full);
        }
      }
    }
  };
  try {
    walk(distDir);
  } catch {
    /* 忽略读取失败 */
  }
  return chunks.join("\n");
}

/** 本地类型索引：lib/nuxt 下全部 .ts 文本按文件名收集 */
function localTypeIndex(): Map<string, string> {
  const index = new Map<string, string>();
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      if (existsSync(full) && !full.includes("node_modules")) {
        const stat = readFileSync(full, "utf8");
        if (entry.endsWith(".ts")) index.set(full, stat);
        else if (stat && entry.indexOf(".") === -1) {
          try { walk(full); } catch { /* 目录读取失败跳过 */ }
        }
      }
    }
  };
  try { walk(join(OUT_BASE, "composables")); } catch { /* 忽略 */ }
  try { walk(join(OUT_BASE, "types")); } catch { /* 忽略 */ }
  return index;
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
  /* 全局组件替身：模板中的 <NuxtLink 需要显式导入 */
  if (out.includes("<NuxtLink")) {
    const setupOpen = out.indexOf("<script setup");
    const afterTag = out.indexOf(">", setupOpen) + 1;
    out = out.slice(0, afterTag) + `\nimport NuxtLink from '../../lib/nuxt/NuxtLink.vue'` + out.slice(afterTag);
  }
  /* Tooltip Provider 替身：模板外层包 TooltipProvider，inject 兜底为空上下文 */
  if (out.includes("injectTooltipProviderContext()")) {
    out = out.replace(
      "const providerContext = injectTooltipProviderContext()",
      `const providerContext = (injectTooltipProviderContext(null) ?? { content: ref({}) }) as { content: { value: Record<string, any> } }`,
    );
    out = out.replace(/import \{ TooltipRoot, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow, injectTooltipProviderContext \} from 'reka-ui'/, "import { TooltipRoot, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow, TooltipProvider, injectTooltipProviderContext } from 'reka-ui'");
    out = out.replace(/<template>\s*\n\s*<TooltipRoot/, "<template>\n  <TooltipProvider>\n    <TooltipRoot");
    out = out.replace(/<\/TooltipRoot>\s*\n<\/template>/, "</TooltipRoot>\n  </TooltipProvider>\n</template>");
    if (!/import\s*\{[^}]*\bref\b/.test(out)) {
      const setupOpen = out.indexOf("<script setup");
      const afterTag = out.indexOf(">", setupOpen) + 1;
      out = out.slice(0, afterTag) + `\nimport { ref } from 'vue'` + out.slice(afterTag);
    }
  }
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
  /* types/index.ts 后处理：theme.ts 引用的未移植组件 Props 类型补宽松别名（tv.ts 后处理已提前执行） */
  /* tv.ts 后处理：无 Nuxt 主题类型环境时放宽组件配置映射，避免 slots/variants 键约束为 never */
  {
    const tvPath = join(OUT_BASE, "types/tv.ts");
    let tvContent = readFileSync(tvPath, "utf8");
    tvContent = tvContent.replace(/type ComponentVariants<T extends \{[\s\S]*?\}> = \{[\s\S]*?\}/, "type ComponentVariants<T> = Record<string, string>");
    tvContent = tvContent.replace(/type ComponentSlots<T extends \{[\s\S]*?\}> = Id<\{[\s\S]*?\}>/, "type ComponentSlots<T> = Record<string, SlotClass>");
    tvContent = tvContent.replace(/type ComponentUI<T extends \{[\s\S]*?\}> = Id<\{[\s\S]*?\}>/, "type ComponentUI<T> = Record<string, (props?: Record<string, any>) => string>");
    writeFileSync(tvPath, tvContent);
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

  /* types/index.ts 后处理：theme.ts 引用的未移植组件 Props 类型补宽松别名 */
  {
    const themeTs = readFileSync(join(OUT_BASE, "types/theme.ts"), "utf8");
    const refs = new Set([...themeTs.matchAll(/ComponentTypes\.(\w+)Props\b/g)].map((m) => m[1]));
    const indexPath = join(OUT_BASE, "types/index.ts");
    const existing = readFileSync(indexPath, "utf8");
    let aliasBlock = "\n/* 未移植组件的主题类型别名（生成器自动补齐） */\n";
    for (const name of refs) {
      if (COMPONENTS.includes(name)) continue;
      /* convertInfra 已为未移植组件生成别名时跳过，避免重复标识符 */
      if (existing.includes(`export type ${name}Props = Record<string, any>`)) continue;
      aliasBlock += `export type ${name}Props = Record<string, any>\n`;
    }
    writeFileSync(indexPath, existing + aliasBlock);
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

  /* AppConfig 类型（去 @nuxt/schema 依赖；ui 与 icons 必选以消除 strict 下的 possibly undefined） */
  writeFileSync(join(OUT_BASE, "types/app-config.ts"), `export interface AppConfig { ui: Record<string, any> & { icons: Record<string, string> } }` + "\n");

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

  /* NuxtLink 替身（Nuxt 框架内置组件，自研兼容实现） */
  writeFileSync(join(OUT_BASE, "NuxtLink.vue"), `<script setup lang="ts">
/**
 * NuxtLink 替身：支持 custom 插槽模式与普通 a 渲染。
 * slot props 提供 href / navigate / route / isActive / isExactActive / prefetch / shouldPrefetch。
 */
import { computed } from 'vue'

const props = defineProps({
  to: { type: [String, Object], default: undefined },
  href: { type: [String, Object], default: undefined },
  custom: { type: Boolean, default: false },
  target: { type: String, default: undefined },
  rel: { type: String, default: undefined },
  download: { type: [Boolean, String], default: undefined },
  type: { type: String, default: undefined },
})

const resolvedHref = computed<string | undefined>(() => {
  const path = props.to ?? props.href
  if (path == null) return undefined
  if (typeof path === 'string') return path
  return (path as { path?: string }).path ?? (path as { name?: string }).name
})

const route = { path: '/', query: {}, params: {}, hash: '', fullPath: '/', matched: [] }

function navigate(event: MouseEvent) {
  if (props.target === '_blank' || event.metaKey || event.ctrlKey) return
  if (resolvedHref.value) {
    event.preventDefault()
    window.location.assign(resolvedHref.value)
  }
}
</script>

<template>
  <slot
    v-if="custom"
    :href="resolvedHref"
    :navigate="navigate"
    :route="route"
    :isActive="false"
    :isExactActive="false"
    :prefetch="() => {}"
    :shouldPrefetch="false"
    v-bind="$attrs"
  />
  <a
    v-else
    :href="resolvedHref"
    :target="target"
    :rel="rel"
    :download="download"
    :type="type"
    v-bind="$attrs"
    @click="navigate"
  >
    <slot />
  </a>
</template>
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
    const rekaDtsForPatch = resolveRekaDts();
    const patched = patchEmptyEmits(converted, rekaDtsForPatch, localTypeIndex());
    const result = FORCE_RUNTIME.has(name)
      ? (() => {
          const fallback = typeLiteralFallback(patched, rekaDtsForPatch, localTypeIndex());
          try {
            const { descriptor } = parse(fallback, { filename: join(OUT_KIT, `X${name}.vue`) });
            compileScript(descriptor, { id: "probe", fs: probeFs, isProd: true });
            return { ok: true, content: fallback };
          } catch (error) {
            return { ok: false, content: patched, message: `forced-fallback: ${String((error as Error).message ?? error).slice(0, 80)}` };
          }
        })()
      : compileComponent(patched, join(OUT_KIT, `X${name}.vue`));
    if (!result.ok) {
      compileWarnings.push(`${name}: ${result.message}`);
    }
    writeFileSync(join(OUT_KIT, `X${name}.vue`), result.content);
  }
  if (compileWarnings.length) {
    console.log(`compile warnings (${compileWarnings.length}):`);
    for (const warning of compileWarnings) console.log(`  - ${warning}`);
  }

  applyMenuTypePatches();
  applyOverlayDisplayTypePatches();
  applyMenuDateTypePatches();
  applyTableLinkNavTypePatches();
  applyKitTypePatches();

  console.log(`nuxt-base generated: ${themeNames.length} themes, ${COMPONENTS.length} components`);
}

/** 菜单类组件类型补丁（菜单项内容组件分组）
 * - XDropdownMenu / XContextMenu / XCommandPalette：tv() 的 size 入参（string | undefined）与主题联合类型不匹配，断言为 any（仅类型层，不改运行时）
 * - XCommandPalette：fuse.js 未随包安装，FuseResult 用本地宽松类型替代
 * - XDropdownMenuItems / XContextMenuItems：从主组件导入的菜单类型在主组件产物中不存在，改为本地类型定义
 */
function applyMenuTypePatches() {
  const patch = (file: string, replacements: Array<[string, string]>) => {
    const path = join(OUT_KIT, file);
    if (!existsSync(path)) return;
    let content = readFileSync(path, "utf8");
    for (const [from, to] of replacements) {
      if (!content.includes(from)) continue;
      content = content.replace(from, to);
    }
    writeFileSync(path, content);
  };

  const menuItemDataType = `/** 菜单项数据模型（本地类型定义，宽松承载任意 item 字段） */
interface MenuItemData {
  type?: string
  label?: string
  description?: string
  icon?: string | Component
  avatar?: Record<string, any>
  color?: MenuColor
  checked?: boolean
  loading?: boolean
  target?: string
  kbds?: any[]
  shortcut?: string
  children?: MenuItemData[]
  onSelect?: (item: MenuItemData) => void
  onUpdateChecked?: (checked: boolean) => void
  [key: string]: any
}

type MenuSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type MenuColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
type MenuIcon = string | Component`;

  patch("XDropdownMenu.vue", [[
    "  size: props.size\n}))",
    "  size: props.size as any\n}))",
  ]]);
  patch("XContextMenu.vue", [[
    "  size: props.size\n}))",
    "  size: props.size as any\n}))",
  ]]);
  patch("XCommandPalette.vue", [
    [
      "import type { FuseResult } from 'fuse.js'",
      "/** fuse.js 未随包安装，本地宽松类型替代（仅类型层） */\ntype FuseResult<T> = { matches?: readonly any[] }",
    ],
    [
      "  size: props.size,\n  virtualize: !!props.virtualize",
      "  size: props.size as any,\n  virtualize: !!props.virtualize",
    ],
  ]);
  patch("XDropdownMenuItems.vue", [
    [
      "import { computed, reactive, ref, useSlots } from 'vue'",
      "import { computed, reactive, ref, useSlots, type Component } from 'vue'",
    ],
    [
      "import type { DropdownMenuItemData, DropdownMenuUi, MenuColor, MenuIcon, MenuSize } from './XDropdownMenu.vue'",
      menuItemDataType + "\ntype DropdownMenuUi = Record<string, any>\n\ninterface DropdownMenuItemData extends MenuItemData {}",
    ],
  ]);
  patch("XContextMenuItems.vue", [
    [
      "import { computed, reactive, useSlots } from 'vue'",
      "import { computed, reactive, useSlots, type Component } from 'vue'",
    ],
    [
      "import type { ContextMenuItemData, ContextMenuUi } from './XContextMenu.vue'\nimport type { MenuColor, MenuIcon, MenuSize } from './XDropdownMenu.vue'",
      menuItemDataType + "\ntype ContextMenuUi = Record<string, any>\n\ninterface ContextMenuItemData extends MenuItemData {}",
    ],
  ]);
}

/** 浮层与展示类组件类型补丁
 * 手法说明（均为类型层修复，不改运行时行为）：
 * - reka/vaul Root 透传成员：生成器 inlineAllExtends 未能从 reka d.ts 展开的成员
 *   （open/defaultOpen/dismissible 等）以 `: any` 补进 Props 接口，
 *   reactivePick 与模板访问恢复合法
 * - tv() 实参（color/variant/size/orientation/position 等）：接口成员类型来自
 *   ComponentConfig 推导的宽泛 string，与 theme variants 联合类型不匹配，
 *   实参对象整体断言 as any
 * - XAvatar：HTMLAttributes 展开成员与接口自身声明重复，删除重复声明；
 *   color 成员类型改宽松
 * - useToast：useState 替身返回 Ref<T | undefined>，断言为 Ref<Toast[]>
 */
function applyOverlayDisplayTypePatches() {
  const patch = (file: string, replacements: Array<[string, string]>) => {
    const path = join(OUT_KIT, file);
    if (!existsSync(path)) return;
    let content = readFileSync(path, "utf8");
    for (const [from, to] of replacements) {
      if (!content.includes(from)) continue;
      content = content.replace(from, to);
    }
    writeFileSync(path, content);
  };

  /* reka RootProps 透传成员补齐（reactivePick 与模板访问需要） */
  const forwardMember = (name: string, keys: string[]) =>
    `/** ${name} Root 透传成员（类型补齐，运行时经 useForwardProps 转发） */\n${keys.map((key) => `  ${key}?: any`).join("\n")}`;

  patch("XModal.vue", [[
    "  dismissible?: boolean\n  class?: any\n  ui?: Modal['slots']\n}",
    `  dismissible?: boolean\n  class?: any\n  ui?: Modal['slots']\n${forwardMember("reka Dialog", ["open", "defaultOpen", "modal", "unmountOnHide"])}\n}`,
  ]]);
  patch("XPopover.vue", [[
    "  dismissible?: boolean\n  class?: any\n  ui?: Popover['slots']\n}",
    `  dismissible?: boolean\n  class?: any\n  ui?: Popover['slots']\n${forwardMember("reka Popover/HoverCard", ["open", "defaultOpen", "openDelay", "closeDelay", "enableTouch", "modal"])}\n}`,
  ]]);
  patch("XTooltip.vue", [[
    "  reference?: TooltipTriggerProps['reference']\n  class?: any\n  ui?: Tooltip['slots']\n}",
    `  reference?: TooltipTriggerProps['reference']\n  class?: any\n  ui?: Tooltip['slots']\n${forwardMember("reka Tooltip", ["open", "defaultOpen", "delayDuration", "disableHoverableContent", "disableClosingTrigger", "ignoreNonKeyboardFocus", "disabled"])}\n}`,
  ]]);
  patch("XDrawer.vue", [[
    "  closeIcon?: IconProps['name']\n  class?: any\n  ui?: Drawer['slots']\n}",
    `  closeIcon?: IconProps['name']\n  class?: any\n  ui?: Drawer['slots']\n${forwardMember("vaul Drawer", ["activeSnapPoint", "closeThreshold", "shouldScaleBackground", "setBackgroundColorOnScale", "scrollLockTimeout", "fixed", "dismissible", "modal", "open", "defaultOpen", "direction", "noBodyStyles", "handleOnly", "preventScrollRestoration", "snapPoints"])}\n}`,
  ]]);
  patch("XSlideover.vue", [
    [
      "  dismissible?: boolean\n  class?: any\n  ui?: Slideover['slots']\n}",
      `  dismissible?: boolean\n  class?: any\n  ui?: Slideover['slots']\n${forwardMember("reka Dialog", ["open", "defaultOpen", "modal", "unmountOnHide"])}\n}`,
    ],
    [
      "const ui = computed(() => tv({ extend: theme, ...(appConfig.ui?.slideover || {}) })({\n  transition: props.transition,\n  side: props.side,\n  inset: props.inset\n}))",
      "const ui = computed(() => tv({ extend: theme, ...(appConfig.ui?.slideover || {}) })({\n  transition: props.transition,\n  side: props.side,\n  inset: props.inset\n} as any))",
    ],
  ]);
  patch("XToaster.vue", [
    [
      "  max?: number\n  class?: any\n  ui?: Toaster['slots']\n}",
      `  max?: number\n  class?: any\n  ui?: Toaster['slots']\n${forwardMember("reka ToastProvider", ["duration", "label", "swipeThreshold", "disableSwipe"])}\n}`,
    ],
    [
      "const ui = computed(() => tv({ extend: theme, ...(appConfig.ui?.toaster || {}) })({\n  position: props.position,\n  swipeDirection: swipeDirection.value\n}))",
      "const ui = computed(() => tv({ extend: theme, ...(appConfig.ui?.toaster || {}) })({\n  position: props.position,\n  swipeDirection: swipeDirection.value\n} as any))",
    ],
  ]);
  patch("XToast.vue", [
    [
      "  progress?: boolean | Pick<ProgressProps, 'color' | 'ui'>\n  class?: any\n  ui?: Toast['slots']\n}",
      `  progress?: boolean | Pick<ProgressProps, 'color' | 'ui'>\n  class?: any\n  ui?: Toast['slots']\n${forwardMember("reka Toast", ["defaultOpen", "open", "type"])}\n}`,
    ],
    [
      "const ui = computed(() => tv({ extend: theme, ...(appConfig.ui?.toast || {}) })({\n  color: props.color,\n  orientation: props.orientation,\n  title: !!props.title || !!slots.title\n}))",
      "const ui = computed(() => tv({ extend: theme, ...(appConfig.ui?.toast || {}) })({\n  color: props.color,\n  orientation: props.orientation,\n  title: !!props.title || !!slots.title\n} as any))",
    ],
  ]);
  patch("XBadge.vue", [
    [
      "  /** Render the badge with equal padding on all sides. */\n  square?: boolean\n  class?: any\n  ui?: Badge['slots']\n}",
      "  /** Render the badge with equal padding on all sides. */\n  square?: boolean\n  /** Display an avatar on the left side. */\n  avatar?: AvatarProps\n  class?: any\n  ui?: Badge['slots']\n}",
    ],
    [
      "const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props)",
      "const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props as any)",
    ],
    [
      "const ui = computed(() => tv({ extend: theme, ...(appConfig.ui?.badge || {}) })({\n  color: props.color,\n  variant: props.variant,\n  size: fieldGroupSize.value ?? props.size,\n  square: props.square || (!slots.default && !props.label),\n  fieldGroup: orientation.value\n}))",
      "const ui = computed(() => tv({ extend: theme, ...(appConfig.ui?.badge || {}) })({\n  color: props.color,\n  variant: props.variant,\n  size: fieldGroupSize.value ?? props.size,\n  square: props.square || (!slots.default && !props.label),\n  fieldGroup: orientation.value\n} as any))",
    ],
  ]);
  patch("XAvatar.vue", [
    /* HTMLAttributes 展开的 size 与接口自身声明重复，删展开副本 */
    ["  multiple?: any;\n  checked?: any;\n  size?: any;\n  rows?: any;", "  multiple?: any;\n  checked?: any;\n  rows?: any;"],
    /* class/style 与展开成员重复，删接口末尾声明 */
    ["  chip?: boolean | ChipProps\n  class?: any\n  style?: any\n  ui?: Avatar['slots']\n}", "  chip?: boolean | ChipProps\n  ui?: Avatar['slots']\n}"],
    ["  color?: Avatar['variants']['color']", "  color?: any"],
    /* useAvatarGroup 期望 size/color 宽松对象，断言绕过 DefineProps 结构差异 */
    ["const { size, color } = useAvatarGroup(_props)", "const { size, color } = useAvatarGroup(_props as any)"],
  ]);
  patch("XSeparator.vue", [
    [
      "  position?: Separator['variants']['position']\n  class?: any\n  ui?: Separator['slots']\n}",
      `  position?: Separator['variants']['position']\n  class?: any\n  ui?: Separator['slots']\n${forwardMember("reka Separator", ["decorative"])}\n}`,
    ],
    [
      "<Separator data-slot=\"root\" v-bind=\"{ ...rootProps, ...$attrs }\"",
      "<Separator data-slot=\"root\" v-bind=\"({ ...rootProps, ...$attrs } as any)\"",
    ],
  ]);
  patch("XCarousel.vue", [
    [
      "  wheelGestures?: boolean | WheelGesturesPluginOptions\n  class?: any\n  ui?: Carousel['slots']\n}",
      `  wheelGestures?: boolean | WheelGesturesPluginOptions\n  class?: any\n  ui?: Carousel['slots']\n${forwardMember("embla Carousel", ["active", "align", "breakpoints", "containScroll", "dragFree", "dragThreshold", "duration", "inViewThreshold", "loop", "skipSnaps", "slidesToScroll", "startIndex", "watchDrag", "watchResize", "watchSlides", "watchFocus"])}\n}`,
    ],
    [
      "const ui = computed(() => tv({ extend: theme, ...(appConfig.ui?.carousel || {}) })({\n  orientation: props.orientation\n}))",
      "const ui = computed(() => tv({ extend: theme, ...(appConfig.ui?.carousel || {}) })({\n  orientation: props.orientation\n} as any))",
    ],
  ]);
  patch("XCollapsible.vue", [[
    "  as?: any\n  class?: any\n  ui?: Collapsible['slots']\n}",
    `  as?: any\n  class?: any\n  ui?: Collapsible['slots']\n${forwardMember("reka Collapsible", ["defaultOpen", "open", "disabled", "unmountOnHide"])}\n}`,
  ]]);
  patch("XAccordion.vue", [
    [
      "  labelKey?: GetItemKeys<T>\n  class?: any\n  ui?: Accordion['slots']\n}",
      `  labelKey?: GetItemKeys<T>\n  class?: any\n  ui?: Accordion['slots']\n${forwardMember("reka Accordion", ["collapsible", "defaultValue", "disabled", "modelValue", "unmountOnHide", "type"])}\n}`,
    ],
    /* 动态插槽的 ui prop 类型改宽松，slot :ui 绑定不再与 tv 返回类型互查 */
    [
      "} & DynamicSlots<T, 'body', { index: number, open: boolean, ui: Accordion['ui'] }>",
      "} & DynamicSlots<T, 'body', { index: number, open: boolean, ui: any }>",
    ],
  ]);
  patch("XProgress.vue", [
    [
      "  animation?: Progress['variants']['animation']\n  class?: any\n  ui?: Progress['slots']\n}",
      `  animation?: Progress['variants']['animation']\n  class?: any\n  ui?: Progress['slots']\n${forwardMember("reka Progress", ["getValueLabel", "getValueText", "modelValue"])}\n}`,
    ],
    [
      "const ui = computed(() => tv({ extend: theme, ...(appConfig.ui?.progress || {}) })({\n  animation: props.animation,\n  size: props.size,\n  color: props.color as Progress['variants']['color'],\n  orientation: props.orientation,\n  inverted: props.inverted\n}))",
      "const ui = computed(() => tv({ extend: theme, ...(appConfig.ui?.progress || {}) })({\n  animation: props.animation,\n  size: props.size,\n  color: props.color as Progress['variants']['color'],\n  orientation: props.orientation,\n  inverted: props.inverted\n} as any))",
    ],
  ]);

  patch("XAlert.vue", [[
    "  title: !!props.title || !!slots.title\n}))",
    "  title: !!props.title || !!slots.title\n} as any))",
  ]]);
  patch("XCard.vue", [[
    "  variant: props.variant\n}))",
    "  variant: props.variant\n} as any))",
  ]]);
  patch("XChip.vue", [[
    "  standalone: props.standalone\n}))",
    "  standalone: props.standalone\n} as any))",
  ]]);
  patch("XAvatarGroup.vue", [[
    "const ui = computed(() => tv({ extend: theme, ...(appConfig.ui?.avatarGroup || {}) })({\n  size: props.size,\n  color: props.color\n}))",
    "const ui = computed(() => tv({ extend: theme, ...(appConfig.ui?.avatarGroup || {}) })({\n  size: props.size,\n  color: props.color\n} as any))",
  ]]);
  patch("XAvatar.vue", [
    ["  color: color.value ?? props.color\n}))", "  color: color.value ?? props.color\n} as any))"],
  ]);
  patch("XKbd.vue", [[
    "<Primitive :as=\"props.as\" :class=\"ui({ class: [props.ui?.base, props.class], color: props.color, variant: props.variant, size: props.size })\">",
    "<Primitive :as=\"props.as\" :class=\"ui({ class: [props.ui?.base, props.class], color: props.color, variant: props.variant, size: props.size } as any)\">",
  ]]);
  patch("XSeparator.vue", [
    ["  type: props.type\n}))", "  type: props.type\n} as any))"],
  ]);

  /* useToast：useState 替身返回 Ref<T | undefined>，模板解包后 toasts 判 undefined；断言为 Ref<Toast[]> */
  const useToastPath = join(OUT_BASE, "composables", "useToast.ts");
  if (existsSync(useToastPath)) {
    const useToastContent = readFileSync(useToastPath, "utf8");
    const from = "  const toasts = useState<Toast[]>('toasts', () => [])";
    const to = "  const toasts = useState<Toast[]>('toasts', () => []) as Ref<Toast[]>";
    if (useToastContent.includes(from) && !useToastContent.includes(to)) {
      writeFileSync(useToastPath, useToastContent.replace(from, to));
    }
  }
}

/** 菜单与日期类组件类型补丁（菜单与日期分组）
 * - XContextMenu / XDropdownMenu：tv() 入参 size 与返回类型推断不匹配主题联合类型，入参对象与返回值整体断言（仅类型层，不改运行时）
 * - XListbox / XNavigationMenu / XInputMenu / XSelectMenu：tv() 返回类型因 app.config 展开推断失败，模板中 ui.slot() 调用不可用；整体断言
 * - XInputDate / XInputTime：产物 Props 接口缺失原始源码的 disabled / loading / avatar 等字段，补索引签名宽松承载；useComponentIcons 入参断言
 * - XNavigationMenu：根节点 v-bind 对象含 $attrs 与 data-slot，与 reka-ui 根 props 类型不兼容，整体断言
 */
function applyMenuDateTypePatches() {
  const patch = (file: string, replacements: Array<[string, string]>) => {
    const path = join(OUT_KIT, file);
    if (!existsSync(path)) return;
    let content = readFileSync(path, "utf8");
    for (const [from, to] of replacements) {
      if (!content.includes(from)) {
        console.log(`  - menu-date patch miss: ${file}: ${JSON.stringify(from.slice(0, 60))}`);
        continue;
      }
      content = content.replace(from, to);
    }
    writeFileSync(path, content);
  };

  /* 菜单浮层：applyMenuTypePatches 已将 size 入参断言为 any，这里把入参对象与 tv() 返回值整体断言 */
  patch("XContextMenu.vue", [[
    "  size: props.size as any\n}))",
    "  size: props.size\n} as any) as unknown as Record<string, any>)",
  ]]);
  patch("XDropdownMenu.vue", [[
    "  size: props.size as any\n}))",
    "  size: props.size\n} as any) as unknown as Record<string, any>)",
  ]]);

  /* 列表与导航：tv() 入参对象与返回值整体断言 */
  patch("XListbox.vue", [[
    "  virtualize: !!props.virtualize\n}))",
    "  virtualize: !!props.virtualize\n} as any) as unknown as Record<string, any>)",
  ]]);
  patch("XNavigationMenu.vue", [
    [
      "  highlightColor: props.highlightColor || props.color\n}))",
      "  highlightColor: props.highlightColor || props.color\n} as any) as unknown as Record<string, any>)",
    ],
    [
      "    v-bind=\"{\n      ...rootProps,\n      ...(props.orientation === 'horizontal' ? {\n        modelValue: props.modelValue as string,\n        defaultValue: props.defaultValue as string\n      } : {}),\n      ...$attrs\n    }\"",
      "    v-bind=\"({\n      ...rootProps,\n      ...(props.orientation === 'horizontal' ? {\n        modelValue: props.modelValue as string,\n        defaultValue: props.defaultValue as string\n      } : {}),\n      ...$attrs\n    } as any)\"",
    ],
  ]);

  /* 日期输入：Props 接口补索引签名 + useComponentIcons 入参断言 + tv() 整体断言 */
  patch("XInputDate.vue", [
    [
      "  ui?: InputDate['slots']\n}",
      "  ui?: InputDate['slots']\n  /** 类型修补：生成产物缺少原始源码的部分 prop，索引签名宽松承载（仅类型层） */\n  [key: string]: any\n}",
    ],
    ["useComponentIcons(props)", "useComponentIcons(props as any)"],
    [
      "  fieldGroup: orientation.value\n}))",
      "  fieldGroup: orientation.value\n} as any) as unknown as Record<string, any>)",
    ],
  ]);
  patch("XInputTime.vue", [
    [
      "  ui?: InputTime['slots']\n}",
      "  ui?: InputTime['slots']\n  /** 类型修补：生成产物缺少原始源码的部分 prop，索引签名宽松承载（仅类型层） */\n  [key: string]: any\n}",
    ],
    ["useComponentIcons(props)", "useComponentIcons(props as any)"],
    [
      "  fieldGroup: orientation.value\n}))",
      "  fieldGroup: orientation.value\n} as any) as unknown as Record<string, any>)",
    ],
  ]);

  /* 选择菜单：tv() 入参对象与返回值整体断言 */
  patch("XInputMenu.vue", [[
    "  virtualize: !!props.virtualize\n}))",
    "  virtualize: !!props.virtualize\n} as any) as unknown as Record<string, any>)",
  ]]);
  patch("XSelectMenu.vue", [[
    "  multiple: props.multiple\n}))",
    "  multiple: props.multiple\n} as any) as unknown as Record<string, any>)",
  ]]);
}

/** 表格链接导航类组件类型补丁（表格链接导航分组）
 * - XBreadcrumb / XTabs：插槽 props 的 ui 入参（tv 返回值含 slots/variants 等非函数成员）与 ComponentUI 记录类型不匹配，断言为 any（仅类型层）
 * - XBreadcrumb / XTabs / XStepper / XTable：variants 成员经 ComponentVariants 放宽为 string，与 tv 入参联合类型不匹配，接口成员改为 any
 * - XTabs / XStepper / XPagination：reka 透传 props（modelValue / defaultValue / unmountOnHide / activationMode / linear / defaultPage 等）在产物 Props 接口缺失，补齐为 any 成员
 * - XPagination：to 成员引用 ButtonProps['to']，但 ButtonProps 无 to 成员，改为 any
 * - XTable：@tanstack/table-core 未随包安装，模块增强无法解析，移除增强块，模板 meta 扩展字段经 as any 断言；重复的 class / loading 成员去重；_features 内部透传键补齐
 * - XLink：vue-router 未随包安装，用本地宽松类型替身；重复的 class / disabled 成员去重；activeClass / ariaCurrentValue 缺失成员补齐；useNuxtApp 断言 any 以承载 $localePath / $i18n
 * - NuxtLink 替身：显式声明 default 插槽 props（宽松可选），消费方 v-slot 解构才能拿到 href / navigate / route / isActive / isExactActive
 */
function applyTableLinkNavTypePatches() {
  const patch = (file: string, replacements: Array<[string, string]>) => {
    const path = join(OUT_KIT, file);
    if (!existsSync(path)) return;
    let content = readFileSync(path, "utf8");
    for (const [from, to] of replacements) {
      if (!content.includes(from)) {
        console.log(`  - table-link-nav patch miss: ${file}: ${JSON.stringify(from.slice(0, 60))}`);
        continue;
      }
      content = content.split(from).join(to);
    }
    writeFileSync(path, content);
  };

  /* XBreadcrumb：tv 入参 color 断言 + 插槽 props ui 断言 */
  patch("XBreadcrumb.vue", [
    [
      "const ui = computed(() => tv({ extend: theme, ...(appConfig.ui?.breadcrumb || {}) })({\n  color: props.color\n}))",
      "const ui = computed(() => tv({ extend: theme, ...(appConfig.ui?.breadcrumb || {}) })({\n  color: props.color as any\n}))",
    ],
    [":ui=\"ui\"", ":ui=\"(ui as any)\""],
  ]);

  /* XTabs：variants 成员放宽 + reka 透传 props 补齐 + 插槽 props ui 断言 */
  patch("XTabs.vue", [
    ["  color?: Tabs['variants']['color']", "  color?: any"],
    ["  variant?: Tabs['variants']['variant']", "  variant?: any"],
    ["  size?: Tabs['variants']['size']", "  size?: any"],
    ["  orientation?: Tabs['variants']['orientation']", "  orientation?: any"],
    [
      "  ui?: Tabs['slots']\n}",
      "  ui?: Tabs['slots']\n  /** 类型修补：reka 透传 props（仅类型层，运行时经 useForwardProps 传递） */\n  modelValue?: any\n  defaultValue?: any\n  unmountOnHide?: any\n  activationMode?: any\n}",
    ],
    [":ui=\"ui\"", ":ui=\"(ui as any)\""],
  ]);

  /* XStepper：variants 成员放宽 + reka 透传 prop 补齐 */
  patch("XStepper.vue", [
    ["  size?: Stepper['variants']['size']", "  size?: any"],
    ["  color?: Stepper['variants']['color']", "  color?: any"],
    ["  orientation?: Stepper['variants']['orientation']", "  orientation?: any"],
    [
      "  ui?: Stepper['slots']\n}",
      "  ui?: Stepper['slots']\n  /** 类型修补：reka 透传 prop（仅类型层） */\n  linear?: any\n}",
    ],
  ]);

  /* XPagination：to 成员放宽 + reka 透传 props 补齐 */
  patch("XPagination.vue", [
    ["  to?: (page: number) => ButtonProps['to']", "  to?: any"],
    [
      "  ui?: Pagination['slots']\n}",
      "  ui?: Pagination['slots']\n  /** 类型修补：reka 透传 props（仅类型层，运行时经 useForwardProps 传递） */\n  defaultPage?: any\n  disabled?: any\n  itemsPerPage?: any\n  page?: any\n  showEdges?: any\n  siblingCount?: any\n  total?: any\n}",
    ],
  ]);

  /* XTable：模块增强移除 + 模板 meta 扩展字段断言 + 成员去重与补齐 + variants 成员放宽 */
  patch("XTable.vue", [
    [
      `declare module '@tanstack/table-core' {

  interface ColumnMeta<TData extends RowData, TValue> {
    class?: {
      th?: string | ((cell: Header<TData, TValue>) => string)
      td?: string | ((cell: Cell<TData, TValue>) => string)
    }
    style?: {
      th?: string | Record<string, string> | ((cell: Header<TData, TValue>) => string | Record<string, string>)
      td?: string | Record<string, string> | ((cell: Cell<TData, TValue>) => string | Record<string, string>)
    }
    colspan?: {
      td?: string | ((cell: Cell<TData, TValue>) => string)
    }
    rowspan?: {
      td?: string | ((cell: Cell<TData, TValue>) => string)
    }

  }

  interface TableMeta<TData> {
    class?: {
      tr?: string | ((row: Row<TData>) => string)
    }
    style?: {
      tr?: string | Record<string, string> | ((row: Row<TData>) => string | Record<string, string>)
    }
  }

}

`,
      "",
    ],
    ["export interface TableProps<T extends TableData = TableData> {\n  class?: any;", "export interface TableProps<T extends TableData = TableData> {\n  /** 类型修补：tanstack 内部透传键（仅类型层） */\n  _features?: any;\n  class?: any;"],
    ["  rel?: any;\n  loading?: any;\n  accesskey?: any;", "  rel?: any;\n  accesskey?: any;"],
    ["  loadingColor?: Table['variants']['loadingColor']", "  loadingColor?: any"],
    ["  loadingAnimation?: Table['variants']['loadingAnimation']", "  loadingAnimation?: any"],
    ["  class?: any\n  ui?: Table['slots']\n}", "  ui?: Table['slots']\n}"],
    ["cell.column.columnDef.meta?.", "(cell.column.columnDef.meta as any)?."],
    ["header.column.columnDef.meta?.", "(header.column.columnDef.meta as any)?."],
    ["tableApi.options.meta?.", "(tableApi.options.meta as any)?."],
  ]);

  /* XLink：vue-router 替身 + 成员去重与补齐 + useNuxtApp 断言 */
  patch("XLink.vue", [
    [
      "import type { RouterLinkProps, RouteLocationRaw } from 'vue-router'",
      "import type { RouterLinkProps, RouteLocationRaw } from '../../lib/nuxt/types/vue-router'",
    ],
    ["  locale?: boolean | string\n  class?: any\n}", "  locale?: boolean | string\n}"],
    [
      "  type?: ButtonHTMLAttributes['type']\n  disabled?: boolean\n  /** Force the link to be active independent of the current route. */",
      "  type?: ButtonHTMLAttributes['type']\n  /** Force the link to be active independent of the current route. */",
    ],
    [
      "  inactiveClass?: string\n  custom?: boolean",
      "  inactiveClass?: string\n  /** 类型修补：activeClass 与 ariaCurrentValue 为 NuxtLink 透传 props（仅类型层） */\n  activeClass?: any\n  ariaCurrentValue?: any\n  custom?: boolean",
    ],
    ["const nuxtApp = useNuxtApp()", "const nuxtApp = useNuxtApp() as any"],
  ]);

  /* vue-router 本地宽松类型替身（XLink 仅用 RouterLinkProps 与 RouteLocationRaw 做类型标注） */
  writeFileSync(
    join(OUT_BASE, "types", "vue-router.ts"),
    `export type RouteLocationRaw = string | Record<string, any>

export interface RouterLinkProps {
  [key: string]: any
}
`,
  );

  /* NuxtLink 替身：显式声明 default 插槽 props，消费方 v-slot 解构可解析（不含 as/type/disabled，避免槽位透传污染 DOM） */
  const nuxtLinkPath = join(OUT_BASE, "NuxtLink.vue");
  if (existsSync(nuxtLinkPath)) {
    let nuxtLink = readFileSync(nuxtLinkPath, "utf8");
    const propsTail = "  type: { type: String, default: undefined },\n})";
    if (nuxtLink.includes(propsTail) && !nuxtLink.includes("defineSlots")) {
      nuxtLink = nuxtLink.replace(
        propsTail,
        `  type: { type: String, default: undefined },
})

/* 插槽 props 显式声明（宽松可选），供消费方 v-slot 解构与类型断言 */
defineSlots<{
  default(props: {
    href?: string | undefined
    navigate?: (event: MouseEvent) => void
    route?: Record<string, unknown>
    isActive?: boolean
    isExactActive?: boolean
    isExternal?: boolean
    target?: string | undefined
    rel?: string | null
    prefetch?: () => void
    shouldPrefetch?: boolean
  }): any
}>()`,
      );
      writeFileSync(nuxtLinkPath, nuxtLink);
    }
  }
}

main();

/** 剩余组件类型补丁（agent 4 分组：其余全部组件）
 * 目前仅 XTable 残留：上游 table-link-nav 补丁的全局替换把
 * `tableApi.options.meta?.` 改成 `tableApi.(options.meta as any)?.` 等破损表达式，
 * 恢复为合法断言形态（仅类型层，不改运行时）。
 */
function applyKitTypePatches() {
  const patch = (file: string, replacements: Array<[string, string]>) => {
    const path = join(OUT_KIT, file);
    if (!existsSync(path)) return;
    let content = readFileSync(path, "utf8");
    for (const [from, to] of replacements) {
      if (!content.includes(from)) continue;
      content = content.split(from).join(to);
    }
    writeFileSync(path, content);
  };

  patch("XTable.vue", [
    ["tableApi.(options.meta as any)", "(tableApi.options.meta as any)"],
    ["cell.column.(columnDef.meta as any)", "(cell.column.columnDef.meta as any)"],
    ["header.column.(columnDef.meta as any)", "(header.column.columnDef.meta as any)"],
  ]);
}
