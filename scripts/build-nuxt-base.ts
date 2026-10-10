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

/** 成员定义：键与可选性（类型统一降级为 any，运行时只关心名字与可选） */
interface MemberDef { key: string; optional: boolean }

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
    return { key, optional };
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
        return `  ${key}${member.optional ? "?" : ""}: any;`;
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
      return `  ${key}?: any;`;
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
  try {
    tryCompile(content);
    return { ok: true, content };
  } catch (error) {
    const message = String((error as Error).message ?? error);
    /* 跨文件 extends 无法解析时内联展开，保留自身 props 声明 */
    const rekaDts = resolveRekaDts();
    const localIndex = localTypeIndex();
    const inlined = inlineAllExtends(content, rekaDts, localIndex);
    if (inlined !== content) {
      try {
        tryCompile(inlined);
        return { ok: true, content: inlined };
      } catch { /* 继续降级 */ }
    }
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
  /* Tooltip Provider 缺省替身：无 Provider 时主动 provide 默认上下文（reka TooltipRoot 内部也 inject） */
  if (out.includes("injectTooltipProviderContext()")) {
    out = out.replace(
      "const providerContext = injectTooltipProviderContext()",
      `const providerContext = injectTooltipProviderContext() ?? provideTooltipProviderContext({
  isOpenDelayed: ref(false),
  delayDuration: ref(1000),
  onOpen: () => {},
  onClose: () => {},
  isPointerInTransitRef: ref(false),
  disableHoverableContent: ref(false),
  disableClosingTrigger: ref(false),
  disabled: ref(false),
  ignoreNonKeyboardFocus: ref(true),
  content: ref({}),
})`,
    );
    out = out.replace(/import \{ TooltipRoot, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow, injectTooltipProviderContext \} from 'reka-ui'/, "import { TooltipRoot, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow, injectTooltipProviderContext, provideTooltipProviderContext } from 'reka-ui'");
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

  console.log(`nuxt-base generated: ${themeNames.length} themes, ${COMPONENTS.length} components`);
}

main();
