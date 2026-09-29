/**
 * 生成 registry 分发的 item JSON（内联文件内容）与 source 包的 kit-theme.css。
 *
 * 产物结构：
 * - registry/react/registry.json + registry/react/items/*.json   （React 消费端）
 * - registry/vue/registry.json + registry/vue/items/*.json       （Vue 消费端）
 * - packages/{react,vue}/src/lib/kit/kit-theme.css               （source 包开发用主题）
 *
 * 分发约定（两个 CLI 的文件落盘规则不同，生成时分别处理）：
 * - shadcn（React）：files 使用显式 target（相对项目根，不带 src/ 前缀）
 * - shadcn-vue（Vue）：files 使用 path + type 驱动（ui→src/components/ui、
 *   lib→src/lib、component→src/components），不设置 target
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { generateAllPalettes, palettesToCssVars } from "../packages/shared/src/colors";
import { fontSizeScale, radiusScale, shadowScale } from "../packages/shared/src/tokens";

const root = fileURLToPath(new URL("..", import.meta.url));

/* ============================ 基础工具 ============================ */

function readSrc(rel: string): string {
  return readFileSync(join(root, rel), "utf8");
}

function writeJson(rel: string, data: unknown): void {
  const file = join(root, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
}

function writeText(rel: string, content: string): void {
  const file = join(root, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
}

/* ============================ 设计 token ============================ */

/** 语义色 10 级色阶 → theme cssVars：裸变量 + --color-* 工具类映射 */
function colorCssVars(): Record<string, string> {
  const vars: Record<string, string> = {};
  for (const [name, value] of Object.entries(palettesToCssVars(generateAllPalettes()))) {
    const key = name.replace(/^--color-/, "").replace(/^--/, "");
    vars[key] = value;
    vars[`color-${key}`] = `var(--${key})`;
  }
  return vars;
}

/** 圆角 / 阴影 / 字体 token → theme cssVars */
function tokenCssVars(): Record<string, string> {
  const vars: Record<string, string> = {};
  for (const [key, value] of Object.entries(radiusScale)) {
    vars[`radius-${key}`] = value;
  }
  for (const [key, value] of Object.entries(shadowScale)) {
    vars[`shadow-${key}`] = value;
  }
  for (const [key, value] of Object.entries(fontSizeScale)) {
    vars[`font-size-${key}`] = `${value}px`;
  }
  // 字体阶梯覆盖：text-lg/xl/2xl/3xl 与原型一致（xs/sm/base 与 Tailwind 默认相同）
  vars["text-lg"] = "20px";
  vars["text-xl"] = "24px";
  vars["text-2xl"] = "30px";
  vars["text-3xl"] = "38px";
  return vars;
}

/** 完整 theme cssVars：颜色 + 圆角 + 阴影 + 字体 */
const themeCssVars = { ...colorCssVars(), ...tokenCssVars() };

/**
 * source 包使用的 kit-theme.css：静态 @theme 块，注册全部工具类
 * （bg-primary-5 / rounded-sm / shadow-md / text-lg 等）
 */
function buildKitThemeCss(): string {
  const lines: string[] = [
    "/*",
    " * kit 设计 token，由 scripts/build-registry.ts 从 @ui-kit/shared 生成。",
    " * 色彩由主色 seed #1677ff 通过 Ant Design 色彩算法派生，勿手动修改。",
    " */",
    "@theme {",
  ];
  for (const [key, value] of Object.entries(themeCssVars)) {
    lines.push(`  --${key}: ${value};`);
  }
  lines.push("}", "");
  return lines.join("\n");
}

/* ============================ item 生成 ============================ */

interface FileEntry {
  /** 仓库内源文件路径 */
  source: string;
  /** 消费者项目内落盘位置 */
  target?: string;
  /** 展示用 path（React 带 src/ 前缀；Vue 不带，供落盘解析） */
  path?: string;
  type?: string;
}

interface ItemSpec {
  name: string;
  title: string;
  description: string;
  type?: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files: FileEntry[];
}

/** 生成 item JSON（React：显式 target；Vue：path + type 驱动） */
function buildItem(spec: ItemSpec, framework: "react" | "vue") {
  const files = spec.files.map(({ source, target, path, type }) => {
    const base = {
      type: type ?? "registry:ui",
      content: readSrc(source),
    };
    if (framework === "react") {
      return {
        ...base,
        path: source.replace(/^packages\/[^/]+\//, "src/"),
        target: target ?? source.replace(/^packages\/[^/]+\/src\//, ""),
      };
    }
    return {
      ...base,
      path: path ?? source.replace(/^packages\/[^/]+\/src\//, ""),
    };
  });
  return {
    name: spec.name,
    type: spec.type ?? "registry:ui",
    title: spec.title,
    description: spec.description,
    dependencies: spec.dependencies ?? [],
    registryDependencies: spec.registryDependencies ?? [],
    files,
    cssVars: { theme: themeCssVars },
  };
}

/* ============================ React 清单 ============================ */

const reactAtoms: ItemSpec[] = [
  {
    name: "utils",
    title: "工具函数",
    description: "cn 工具函数，二次封装组件的公共依赖。",
    dependencies: ["cn"],
    files: [{ source: "packages/react/src/lib/utils.ts", target: "lib/utils.ts", type: "registry:lib" }],
  },
  {
    name: "use-mobile",
    title: "移动端判定 hook",
    description: "是否为移动端视口（< 768px），响应式变体组件依赖。",
    type: "registry:hook" as const,
    files: [{ source: "packages/react/src/hooks/use-mobile.ts", target: "hooks/use-mobile.ts", type: "registry:hook" }],
  },
  {
    name: "use-media-query",
    title: "媒体查询 hook",
    description: "订阅 CSS 媒体查询结果，用于组件级响应式逻辑。",
    type: "registry:hook" as const,
    files: [{ source: "packages/react/src/hooks/use-media-query.ts", target: "hooks/use-media-query.ts", type: "registry:hook" }],
  },
  {
    name: "button",
    title: "按钮原子组件",
    description: "shadcn/ui 基础原子组件 button。",
    dependencies: ["@base-ui/react", "class-variance-authority", "cn"],
    files: [{ source: "packages/react/src/components/ui/button.tsx", target: "components/ui/button.tsx" }],
  },
  {
    name: "badge",
    title: "徽标原子组件",
    description: "shadcn/ui 基础原子组件 badge。",
    dependencies: ["@base-ui/react", "class-variance-authority", "cn"],
    files: [{ source: "packages/react/src/components/ui/badge.tsx", target: "components/ui/badge.tsx" }],
  },
  {
    name: "avatar",
    title: "头像原子组件",
    description: "shadcn/ui 基础原子组件 avatar。",
    dependencies: ["@base-ui/react", "cn"],
    files: [{ source: "packages/react/src/components/ui/avatar.tsx", target: "components/ui/avatar.tsx" }],
  },
  {
    name: "card",
    title: "卡片原子组件",
    description: "shadcn/ui 基础原子组件 card。",
    dependencies: ["cn"],
    files: [{ source: "packages/react/src/components/ui/card.tsx", target: "components/ui/card.tsx" }],
  },
  {
    name: "skeleton",
    title: "骨架屏原子组件",
    description: "shadcn/ui 基础原子组件 skeleton。",
    dependencies: ["cn"],
    files: [{ source: "packages/react/src/components/ui/skeleton.tsx", target: "components/ui/skeleton.tsx" }],
  },
  {
    name: "separator",
    title: "分割线原子组件",
    description: "shadcn/ui 基础原子组件 separator。",
    dependencies: ["@base-ui/react", "cn"],
    files: [{ source: "packages/react/src/components/ui/separator.tsx", target: "components/ui/separator.tsx" }],
  },
  {
    name: "input",
    title: "输入框原子组件",
    description: "shadcn/ui 基础原子组件 input。",
    dependencies: ["cn"],
    files: [{ source: "packages/react/src/components/ui/input.tsx", target: "components/ui/input.tsx" }],
  },
  {
    name: "label",
    title: "标签原子组件",
    description: "shadcn/ui 基础原子组件 label。",
    dependencies: ["@base-ui/react", "cn"],
    files: [{ source: "packages/react/src/components/ui/label.tsx", target: "components/ui/label.tsx" }],
  },
  {
    name: "textarea",
    title: "多行文本原子组件",
    description: "shadcn/ui 基础原子组件 textarea。",
    dependencies: ["cn"],
    files: [{ source: "packages/react/src/components/ui/textarea.tsx", target: "components/ui/textarea.tsx" }],
  },
  {
    name: "checkbox",
    title: "多选框原子组件",
    description: "shadcn/ui 基础原子组件 checkbox。",
    dependencies: ["@base-ui/react", "cn"],
    files: [{ source: "packages/react/src/components/ui/checkbox.tsx", target: "components/ui/checkbox.tsx" }],
  },
  {
    name: "radio-group",
    title: "单选框组原子组件",
    description: "shadcn/ui 基础原子组件 radio-group。",
    dependencies: ["@base-ui/react", "cn"],
    files: [{ source: "packages/react/src/components/ui/radio-group.tsx", target: "components/ui/radio-group.tsx" }],
  },
  {
    name: "switch",
    title: "开关原子组件",
    description: "shadcn/ui 基础原子组件 switch。",
    dependencies: ["@base-ui/react", "cn"],
    files: [{ source: "packages/react/src/components/ui/switch.tsx", target: "components/ui/switch.tsx" }],
  },
  {
    name: "slider",
    title: "滑块原子组件",
    description: "shadcn/ui 基础原子组件 slider。",
    dependencies: ["@base-ui/react", "cn"],
    files: [{ source: "packages/react/src/components/ui/slider.tsx", target: "components/ui/slider.tsx" }],
  },
  {
    name: "popover",
    title: "气泡原子组件",
    description: "shadcn/ui 基础原子组件 popover。",
    dependencies: ["@base-ui/react", "cn"],
    files: [{ source: "packages/react/src/components/ui/popover.tsx", target: "components/ui/popover.tsx" }],
  },
  {
    name: "calendar",
    title: "日历原子组件",
    description: "shadcn/ui 基础原子组件 calendar。",
    dependencies: ["react-day-picker", "date-fns", "cn", "lucide-react"],
    registryDependencies: ["@ui-kit/button"],
    files: [{ source: "packages/react/src/components/ui/calendar.tsx", target: "components/ui/calendar.tsx" }],
  },
  {
    name: "input-otp",
    title: "验证码输入原子组件",
    description: "shadcn/ui 基础原子组件 input-otp。",
    dependencies: ["input-otp", "cn", "lucide-react"],
    files: [{ source: "packages/react/src/components/ui/input-otp.tsx", target: "components/ui/input-otp.tsx" }],
  },
  {
    name: "tabs",
    title: "标签页原子组件",
    description: "shadcn/ui 基础原子组件 tabs。",
    dependencies: ["@base-ui/react", "class-variance-authority", "cn"],
    files: [{ source: "packages/react/src/components/ui/tabs.tsx", target: "components/ui/tabs.tsx" }],
  },
  {
    name: "breadcrumb",
    title: "面包屑原子组件",
    description: "shadcn/ui 基础原子组件 breadcrumb。",
    dependencies: ["@base-ui/react", "cn", "lucide-react"],
    files: [{ source: "packages/react/src/components/ui/breadcrumb.tsx", target: "components/ui/breadcrumb.tsx" }],
  },
  {
    name: "dropdown-menu",
    title: "下拉菜单原子组件",
    description: "shadcn/ui 基础原子组件 dropdown-menu。",
    dependencies: ["@base-ui/react", "cn", "lucide-react"],
    files: [{ source: "packages/react/src/components/ui/dropdown-menu.tsx", target: "components/ui/dropdown-menu.tsx" }],
  },
  {
    name: "context-menu",
    title: "右键菜单原子组件",
    description: "shadcn/ui 基础原子组件 context-menu。",
    dependencies: ["@base-ui/react", "cn", "lucide-react"],
    files: [{ source: "packages/react/src/components/ui/context-menu.tsx", target: "components/ui/context-menu.tsx" }],
  },
  {
    name: "dialog",
    title: "对话框原子组件",
    description: "shadcn/ui 基础原子组件 dialog。",
    dependencies: ["@base-ui/react", "cn", "lucide-react"],
    files: [{ source: "packages/react/src/components/ui/dialog.tsx", target: "components/ui/dialog.tsx" }],
  },
  {
    name: "drawer",
    title: "抽屉原子组件",
    description: "shadcn/ui 基础原子组件 drawer。",
    dependencies: ["@base-ui/react", "cn"],
    files: [{ source: "packages/react/src/components/ui/drawer.tsx", target: "components/ui/drawer.tsx" }],
  },
  {
    name: "sheet",
    title: "侧滑原子组件",
    description: "shadcn/ui 基础原子组件 sheet。",
    dependencies: ["@base-ui/react", "cn", "lucide-react"],
    files: [{ source: "packages/react/src/components/ui/sheet.tsx", target: "components/ui/sheet.tsx" }],
  },
  {
    name: "tooltip",
    title: "提示气泡原子组件",
    description: "shadcn/ui 基础原子组件 tooltip。",
    dependencies: ["@base-ui/react", "cn"],
    files: [{ source: "packages/react/src/components/ui/tooltip.tsx", target: "components/ui/tooltip.tsx" }],
  },
  {
    name: "command",
    title: "命令面板原子组件",
    description: "shadcn/ui 基础原子组件 command（cmdk）。",
    dependencies: ["cmdk", "cn", "lucide-react"],
    registryDependencies: ["@ui-kit/dialog", "@ui-kit/input-group"],
    files: [{ source: "packages/react/src/components/ui/command.tsx", target: "components/ui/command.tsx" }],
  },
  {
    name: "input-group",
    title: "输入组原子组件",
    description: "shadcn/ui 基础原子组件 input-group（command 依赖）。",
    dependencies: ["cn", "lucide-react"],
    files: [{ source: "packages/react/src/components/ui/input-group.tsx", target: "components/ui/input-group.tsx" }],
  },
  {
    name: "sonner",
    title: "通知原子组件",
    description: "shadcn/ui 基础原子组件 sonner。",
    dependencies: ["sonner", "next-themes", "lucide-react"],
    files: [{ source: "packages/react/src/components/ui/sonner.tsx", target: "components/ui/sonner.tsx" }],
  },
  {
    name: "accordion",
    title: "手风琴原子组件",
    description: "shadcn/ui 基础原子组件 accordion。",
    dependencies: ["@base-ui/react", "cn", "lucide-react"],
    files: [{ source: "packages/react/src/components/ui/accordion.tsx", target: "components/ui/accordion.tsx" }],
  },
  {
    name: "alert",
    title: "警告提示原子组件",
    description: "shadcn/ui 基础原子组件 alert。",
    dependencies: ["class-variance-authority", "cn", "lucide-react"],
    files: [{ source: "packages/react/src/components/ui/alert.tsx", target: "components/ui/alert.tsx" }],
  },
  {
    name: "progress",
    title: "进度条原子组件",
    description: "shadcn/ui 基础原子组件 progress。",
    dependencies: ["@base-ui/react", "cn"],
    files: [{ source: "packages/react/src/components/ui/progress.tsx", target: "components/ui/progress.tsx" }],
  },
  {
    name: "collapsible",
    title: "折叠原子组件",
    description: "shadcn/ui 基础原子组件 collapsible。",
    dependencies: ["@base-ui/react", "cn"],
    files: [{ source: "packages/react/src/components/ui/collapsible.tsx", target: "components/ui/collapsible.tsx" }],
  },
  {
    name: "scroll-area",
    title: "滚动区域原子组件",
    description: "shadcn/ui 基础原子组件 scroll-area。",
    dependencies: ["@base-ui/react", "cn"],
    files: [{ source: "packages/react/src/components/ui/scroll-area.tsx", target: "components/ui/scroll-area.tsx" }],
  },
  {
    name: "carousel",
    title: "轮播原子组件",
    description: "shadcn/ui 基础原子组件 carousel（embla）。",
    dependencies: ["embla-carousel-react", "cn", "lucide-react"],
    registryDependencies: ["@ui-kit/button"],
    files: [{ source: "packages/react/src/components/ui/carousel.tsx", target: "components/ui/carousel.tsx" }],
  },
  {
    name: "table",
    title: "表格原子组件",
    description: "shadcn/ui 基础原子组件 table。",
    dependencies: ["cn"],
    files: [{ source: "packages/react/src/components/ui/table.tsx", target: "components/ui/table.tsx" }],
  },
];

const reactKit: ItemSpec[] = [
  {
    name: "x-button",
    title: "二次封装按钮",
    description: "内置 solid/outline/soft/ghost/subtle/link 六种变体 × 七种语义色，hover/active 仅颜色过渡。",
    dependencies: ["lucide-react"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/button"],
    files: [{ source: "packages/react/src/components/kit/x-button.tsx", target: "components/kit/x-button.tsx" }],
  },
  {
    name: "x-button-group",
    title: "按钮组",
    description: "将多个按钮水平或垂直拼接为一个整体。",
    registryDependencies: ["@ui-kit/utils"],
    files: [{ source: "packages/react/src/components/kit/x-button-group.tsx", target: "components/kit/x-button-group.tsx" }],
  },
  {
    name: "x-badge",
    title: "徽标",
    description: "展示数量或状态提示，支持数字、溢出与圆点模式。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/badge"],
    files: [{ source: "packages/react/src/components/kit/x-badge.tsx", target: "components/kit/x-badge.tsx" }],
  },
  {
    name: "x-chip",
    title: "芯片",
    description: "标记属性，支持多种语义色与可选关闭按钮。",
    dependencies: ["lucide-react"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/button"],
    files: [{ source: "packages/react/src/components/kit/x-chip.tsx", target: "components/kit/x-chip.tsx" }],
  },
  {
    name: "x-avatar",
    title: "头像",
    description: "展示用户形象，支持圆形/方形、五档尺寸、图片与图标。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/avatar"],
    files: [{ source: "packages/react/src/components/kit/x-avatar.tsx", target: "components/kit/x-avatar.tsx" }],
  },
  {
    name: "x-avatar-group",
    title: "头像组",
    description: "将多个头像重叠排列展示，超出 max 折叠为 +N。",
    registryDependencies: ["@ui-kit/utils"],
    files: [{ source: "packages/react/src/components/kit/x-avatar-group.tsx", target: "components/kit/x-avatar-group.tsx" }],
  },
  {
    name: "x-card",
    title: "卡片",
    description: "通用容器，承载标题、操作区、封面与底部操作，支持 hoverable 阴影与边框反馈。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/card"],
    files: [{ source: "packages/react/src/components/kit/x-card.tsx", target: "components/kit/x-card.tsx" }],
  },
  {
    name: "x-container",
    title: "容器",
    description: "约束内容宽度的居中布局容器。",
    registryDependencies: ["@ui-kit/utils"],
    files: [{ source: "packages/react/src/components/kit/x-container.tsx", target: "components/kit/x-container.tsx" }],
  },
  {
    name: "x-icon",
    title: "图标",
    description: "名称驱动的矢量图标，内置常用图标集合与五档尺寸。",
    dependencies: ["lucide-react"],
    registryDependencies: ["@ui-kit/utils"],
    files: [{ source: "packages/react/src/components/kit/x-icon.tsx", target: "components/kit/x-icon.tsx" }],
  },
  {
    name: "x-kbd",
    title: "键盘按键",
    description: "展示快捷键或按键组合。",
    registryDependencies: ["@ui-kit/utils"],
    files: [{ source: "packages/react/src/components/kit/x-kbd.tsx", target: "components/kit/x-kbd.tsx" }],
  },
  {
    name: "x-separator",
    title: "分割线",
    description: "在内容之间插入水平或垂直分隔。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/separator"],
    files: [{ source: "packages/react/src/components/kit/x-separator.tsx", target: "components/kit/x-separator.tsx" }],
  },
  {
    name: "x-skeleton",
    title: "骨架屏",
    description: "内容加载时的占位骨架。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/skeleton"],
    files: [{ source: "packages/react/src/components/kit/x-skeleton.tsx", target: "components/kit/x-skeleton.tsx" }],
  },
  {
    name: "x-input",
    title: "输入框",
    description: "支持前后缀图标、前后置标签与 error / warning 校验状态。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/input"],
    files: [{ source: "packages/react/src/components/kit/x-input.tsx", target: "components/kit/x-input.tsx" }],
  },
  {
    name: "x-textarea",
    title: "多行文本",
    description: "支持行数、自动调整高度与校验状态。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/textarea"],
    files: [{ source: "packages/react/src/components/kit/x-textarea.tsx", target: "components/kit/x-textarea.tsx" }],
  },
  {
    name: "x-checkbox",
    title: "多选框",
    description: "支持半选状态与选项文字插槽。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/checkbox", "@ui-kit/label"],
    files: [{ source: "packages/react/src/components/kit/x-checkbox.tsx", target: "components/kit/x-checkbox.tsx" }],
  },
  {
    name: "x-radio-group",
    title: "单选框组",
    description: "支持普通单选框与按钮样式（outline / solid）。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/radio-group", "@ui-kit/label"],
    files: [{ source: "packages/react/src/components/kit/x-radio-group.tsx", target: "components/kit/x-radio-group.tsx" }],
  },
  {
    name: "x-switch",
    title: "开关",
    description: "支持选中/未选中文字与两档尺寸。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/switch", "@ui-kit/label"],
    files: [{ source: "packages/react/src/components/kit/x-switch.tsx", target: "components/kit/x-switch.tsx" }],
  },
  {
    name: "x-select-menu",
    title: "选择菜单",
    description: "带搜索的增强选择器，支持多选与空状态插槽。",
    dependencies: ["lucide-react"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/popover", "@ui-kit/input"],
    files: [{ source: "packages/react/src/components/kit/x-select-menu.tsx", target: "components/kit/x-select-menu.tsx" }],
  },
  {
    name: "x-input-menu",
    title: "输入菜单",
    description: "输入框与下拉菜单组合，支持搜索过滤。",
    dependencies: ["lucide-react"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/popover", "@ui-kit/input"],
    files: [{ source: "packages/react/src/components/kit/x-input-menu.tsx", target: "components/kit/x-input-menu.tsx" }],
  },
  {
    name: "x-slider",
    title: "滑块",
    description: "通过拖动滑块在区间内取值。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/slider"],
    files: [{ source: "packages/react/src/components/kit/x-slider.tsx", target: "components/kit/x-slider.tsx" }],
  },
  {
    name: "x-input-number",
    title: "数字输入",
    description: "带步进按钮的数字输入框。",
    dependencies: ["lucide-react"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/input"],
    files: [{ source: "packages/react/src/components/kit/x-input-number.tsx", target: "components/kit/x-input-number.tsx" }],
  },
  {
    name: "x-input-tags",
    title: "标签输入",
    description: "以标签形式输入多个值，回车添加。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/input", "@ui-kit/x-chip"],
    files: [{ source: "packages/react/src/components/kit/x-input-tags.tsx", target: "components/kit/x-input-tags.tsx" }],
  },
  {
    name: "x-input-date",
    title: "日期选择",
    description: "输入框 + popover 日历，支持最小/最大日期。",
    dependencies: ["date-fns", "lucide-react"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/popover", "@ui-kit/input", "@ui-kit/calendar"],
    files: [{ source: "packages/react/src/components/kit/x-input-date.tsx", target: "components/kit/x-input-date.tsx" }],
  },
  {
    name: "x-input-time",
    title: "时间选择",
    description: "输入框 + popover 时间列表，支持 12/24 小时制。",
    dependencies: ["lucide-react"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/popover", "@ui-kit/input"],
    files: [{ source: "packages/react/src/components/kit/x-input-time.tsx", target: "components/kit/x-input-time.tsx" }],
  },
  {
    name: "x-input-rating",
    title: "评分",
    description: "以星标形式进行评分输入，支持半星。",
    dependencies: ["lucide-react"],
    registryDependencies: ["@ui-kit/utils"],
    files: [{ source: "packages/react/src/components/kit/x-input-rating.tsx", target: "components/kit/x-input-rating.tsx" }],
  },
  {
    name: "x-color-picker",
    title: "颜色选择",
    description: "从预设色板或色盘中选择颜色。",
    dependencies: ["lucide-react"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/popover"],
    files: [{ source: "packages/react/src/components/kit/x-color-picker.tsx", target: "components/kit/x-color-picker.tsx" }],
  },
  {
    name: "x-pin-input",
    title: "验证码输入",
    description: "分段输入验证码或密码，支持掩码。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/input-otp"],
    files: [{ source: "packages/react/src/components/kit/x-pin-input.tsx", target: "components/kit/x-pin-input.tsx" }],
  },
  {
    name: "x-file-upload",
    title: "文件上传",
    description: "上传文件，支持拖拽与多文件。",
    dependencies: ["lucide-react"],
    registryDependencies: ["@ui-kit/utils"],
    files: [{ source: "packages/react/src/components/kit/x-file-upload.tsx", target: "components/kit/x-file-upload.tsx" }],
  },
  {
    name: "x-form",
    title: "表单",
    description: "收集、校验并提交表单数据。",
    registryDependencies: ["@ui-kit/utils"],
    files: [{ source: "packages/react/src/components/kit/x-form.tsx", target: "components/kit/x-form.tsx" }],
  },
  {
    name: "x-form-field",
    title: "表单字段",
    description: "带标签、说明与错误信息的表单字段。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/label", "@ui-kit/x-form"],
    files: [{ source: "packages/react/src/components/kit/x-form-field.tsx", target: "components/kit/x-form-field.tsx" }],
  },
  {
    name: "x-field-group",
    title: "字段组",
    description: "将多个字段组合为一行或一组。",
    registryDependencies: ["@ui-kit/utils"],
    files: [{ source: "packages/react/src/components/kit/x-field-group.tsx", target: "components/kit/x-field-group.tsx" }],
  },
  {
    name: "x-link",
    title: "链接",
    description: "页面内或跨页面的超链接，支持前后图标与激活态。",
    registryDependencies: ["@ui-kit/utils"],
    files: [{ source: "packages/react/src/components/kit/x-link.tsx", target: "components/kit/x-link.tsx" }],
  },
  {
    name: "x-breadcrumb",
    title: "面包屑",
    description: "显示当前页面在层级结构中的位置。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/breadcrumb", "@ui-kit/x-link"],
    files: [{ source: "packages/react/src/components/kit/x-breadcrumb.tsx", target: "components/kit/x-breadcrumb.tsx" }],
  },
  {
    name: "x-tabs",
    title: "标签页",
    description: "在同一区域内切换不同视图或内容分组，支持 line / card 样式。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/tabs"],
    files: [{ source: "packages/react/src/components/kit/x-tabs.tsx", target: "components/kit/x-tabs.tsx" }],
  },
  {
    name: "x-navigation-menu",
    title: "导航菜单",
    description: "支持垂直、水平与内嵌模式，子菜单使用 DropdownMenu 展开。",
    dependencies: ["lucide-react"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/dropdown-menu"],
    files: [{ source: "packages/react/src/components/kit/x-navigation-menu.tsx", target: "components/kit/x-navigation-menu.tsx" }],
  },
  {
    name: "x-pagination",
    title: "分页",
    description: "对长列表数据进行分页浏览，支持省略号与每页条数切换。",
    dependencies: ["lucide-react"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/button", "@ui-kit/x-select-menu"],
    files: [{ source: "packages/react/src/components/kit/x-pagination.tsx", target: "components/kit/x-pagination.tsx" }],
  },
  {
    name: "x-stepper",
    title: "步骤条",
    description: "引导用户按步骤完成流程，支持受控与非受控用法。",
    dependencies: ["lucide-react"],
    registryDependencies: ["@ui-kit/utils"],
    files: [{ source: "packages/react/src/components/kit/x-stepper.tsx", target: "components/kit/x-stepper.tsx" }],
  },
  {
    name: "x-command-palette",
    title: "命令面板",
    description: "全局命令搜索与快捷操作面板。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/command", "@ui-kit/x-kbd"],
    files: [{ source: "packages/react/src/components/kit/x-command-palette.tsx", target: "components/kit/x-command-palette.tsx" }],
  },
  {
    name: "x-modal",
    title: "对话框",
    description: "模态对话框，默认提供取消与确定按钮。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/dialog", "@ui-kit/x-button"],
    files: [{ source: "packages/react/src/components/kit/x-modal.tsx", target: "components/kit/x-modal.tsx" }],
  },
  {
    name: "x-drawer",
    title: "抽屉",
    description: "从屏幕边缘滑出的面板。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/drawer", "@ui-kit/x-button"],
    files: [{ source: "packages/react/src/components/kit/x-drawer.tsx", target: "components/kit/x-drawer.tsx" }],
  },
  {
    name: "x-slideover",
    title: "侧滑",
    description: "从侧边滑入的浮层，常用于移动端导航。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/sheet", "@ui-kit/x-button"],
    files: [{ source: "packages/react/src/components/kit/x-slideover.tsx", target: "components/kit/x-slideover.tsx" }],
  },
  {
    name: "x-tooltip",
    title: "文字提示",
    description: "简单的文字提示气泡。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/tooltip"],
    files: [{ source: "packages/react/src/components/kit/x-tooltip.tsx", target: "components/kit/x-tooltip.tsx" }],
  },
  {
    name: "x-popover",
    title: "气泡",
    description: "点击或悬停触发的轻量气泡卡片。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/popover"],
    files: [{ source: "packages/react/src/components/kit/x-popover.tsx", target: "components/kit/x-popover.tsx" }],
  },
  {
    name: "x-context-menu",
    title: "右键菜单",
    description: "在指定区域右键唤出的上下文菜单。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/context-menu"],
    files: [{ source: "packages/react/src/components/kit/x-context-menu.tsx", target: "components/kit/x-context-menu.tsx" }],
  },
  {
    name: "x-dropdown-menu",
    title: "下拉菜单",
    description: "点击按钮展开的操作菜单。",
    dependencies: ["lucide-react"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/dropdown-menu", "@ui-kit/x-button"],
    files: [{ source: "packages/react/src/components/kit/x-dropdown-menu.tsx", target: "components/kit/x-dropdown-menu.tsx" }],
  },
  {
    name: "x-toast",
    title: "消息通知",
    description: "操作后的轻量级全局消息通知。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/sonner"],
    files: [{ source: "packages/react/src/components/kit/x-toast.tsx", target: "components/kit/x-toast.tsx" }],
  },
  {
    name: "x-accordion",
    title: "手风琴",
    description: "可展开与折叠的内容分组。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/accordion"],
    files: [{ source: "packages/react/src/components/kit/x-accordion.tsx", target: "components/kit/x-accordion.tsx" }],
  },
  {
    name: "x-alert",
    title: "警告提示",
    description: "展示需要关注的信息，提供四种语义。",
    dependencies: ["lucide-react"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/alert", "@ui-kit/x-button"],
    files: [{ source: "packages/react/src/components/kit/x-alert.tsx", target: "components/kit/x-alert.tsx" }],
  },
  {
    name: "x-progress",
    title: "进度条",
    description: "展示操作的当前进度，支持线形与圆形。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/progress"],
    files: [{ source: "packages/react/src/components/kit/x-progress.tsx", target: "components/kit/x-progress.tsx" }],
  },
  {
    name: "x-collapsible",
    title: "折叠",
    description: "点击触发内容展开或收起。",
    dependencies: ["lucide-react"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/collapsible"],
    files: [{ source: "packages/react/src/components/kit/x-collapsible.tsx", target: "components/kit/x-collapsible.tsx" }],
  },
  {
    name: "x-listbox",
    title: "列表",
    description: "可选中项的列表选择组件。",
    dependencies: ["lucide-react"],
    registryDependencies: ["@ui-kit/utils"],
    files: [{ source: "packages/react/src/components/kit/x-listbox.tsx", target: "components/kit/x-listbox.tsx" }],
  },
  {
    name: "x-scroll-area",
    title: "滚动区域",
    description: "内容溢出时可滚动的区域。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/scroll-area"],
    files: [{ source: "packages/react/src/components/kit/x-scroll-area.tsx", target: "components/kit/x-scroll-area.tsx" }],
  },
  {
    name: "x-carousel",
    title: "轮播",
    description: "多张内容横向轮播展示，支持自动播放与循环。",
    dependencies: ["embla-carousel-autoplay", "lucide-react"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/carousel", "@ui-kit/x-button"],
    files: [{ source: "packages/react/src/components/kit/x-carousel.tsx", target: "components/kit/x-carousel.tsx" }],
  },
  {
    name: "x-splitter",
    title: "分割面板",
    description: "可拖拽调整大小的分栏面板。",
    registryDependencies: ["@ui-kit/utils"],
    files: [{ source: "packages/react/src/components/kit/x-splitter.tsx", target: "components/kit/x-splitter.tsx" }],
  },
  {
    name: "x-table",
    title: "表格",
    description: "展示行列数据，支持加载与分页。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/table", "@ui-kit/x-pagination", "@ui-kit/x-skeleton"],
    files: [{ source: "packages/react/src/components/kit/x-table.tsx", target: "components/kit/x-table.tsx" }],
  },
];

/* ============================ Vue 清单 ============================ */

function vueAtomFiles(dir: string, fileNames: string[]): FileEntry[] {
  return fileNames.map((name) => ({
    source: `packages/vue/src/components/ui/${dir}/${name}`,
    path: `ui/${dir}/${name}`,
  }));
}

const vueAtoms: ItemSpec[] = [
  {
    name: "utils",
    title: "工具函数",
    description: "cn 工具函数，二次封装组件的公共依赖。",
    dependencies: ["clsx", "tailwind-merge"],
    files: [{ source: "packages/vue/src/lib/utils.ts", path: "lib/utils.ts", type: "registry:lib" }],
  },
  {
    name: "button",
    title: "按钮原子组件",
    description: "shadcn-vue 基础原子组件 button。",
    dependencies: ["reka-ui", "class-variance-authority", "clsx", "tailwind-merge", "@vueuse/core"],
    files: vueAtomFiles("button", ["Button.vue", "index.ts"]),
  },
  {
    name: "badge",
    title: "徽标原子组件",
    description: "shadcn-vue 基础原子组件 badge。",
    dependencies: ["reka-ui", "class-variance-authority", "clsx", "tailwind-merge", "@vueuse/core"],
    files: vueAtomFiles("badge", ["Badge.vue", "index.ts"]),
  },
  {
    name: "avatar",
    title: "头像原子组件",
    description: "shadcn-vue 基础原子组件 avatar。",
    dependencies: ["reka-ui", "class-variance-authority", "clsx", "tailwind-merge", "@vueuse/core"],
    files: vueAtomFiles("avatar", ["Avatar.vue", "AvatarBadge.vue", "AvatarFallback.vue", "AvatarGroup.vue", "AvatarGroupCount.vue", "AvatarImage.vue", "index.ts"]),
  },
  {
    name: "card",
    title: "卡片原子组件",
    description: "shadcn-vue 基础原子组件 card。",
    dependencies: ["class-variance-authority", "clsx", "tailwind-merge"],
    files: vueAtomFiles("card", ["Card.vue", "CardAction.vue", "CardContent.vue", "CardDescription.vue", "CardFooter.vue", "CardHeader.vue", "CardTitle.vue", "index.ts"]),
  },
  {
    name: "skeleton",
    title: "骨架屏原子组件",
    description: "shadcn-vue 基础原子组件 skeleton。",
    dependencies: ["clsx", "tailwind-merge"],
    files: vueAtomFiles("skeleton", ["Skeleton.vue", "index.ts"]),
  },
  {
    name: "separator",
    title: "分割线原子组件",
    description: "shadcn-vue 基础原子组件 separator。",
    dependencies: ["reka-ui", "clsx", "tailwind-merge"],
    files: vueAtomFiles("separator", ["Separator.vue", "index.ts"]),
  },
  {
    name: "input",
    title: "输入框原子组件",
    description: "shadcn-vue 基础原子组件 input。",
    dependencies: ["@vueuse/core", "clsx", "tailwind-merge"],
    files: vueAtomFiles("input", ["Input.vue", "index.ts"]),
  },
  {
    name: "label",
    title: "标签原子组件",
    description: "shadcn-vue 基础原子组件 label。",
    dependencies: ["reka-ui", "@vueuse/core", "clsx", "tailwind-merge"],
    files: vueAtomFiles("label", ["Label.vue", "index.ts"]),
  },
  {
    name: "textarea",
    title: "多行文本原子组件",
    description: "shadcn-vue 基础原子组件 textarea。",
    dependencies: ["@vueuse/core", "clsx", "tailwind-merge"],
    files: vueAtomFiles("textarea", ["Textarea.vue", "index.ts"]),
  },
  {
    name: "checkbox",
    title: "多选框原子组件",
    description: "shadcn-vue 基础原子组件 checkbox。",
    dependencies: ["reka-ui", "@vueuse/core", "@lucide/vue", "clsx", "tailwind-merge"],
    files: vueAtomFiles("checkbox", ["Checkbox.vue", "index.ts"]),
  },
  {
    name: "radio-group",
    title: "单选框组原子组件",
    description: "shadcn-vue 基础原子组件 radio-group。",
    dependencies: ["reka-ui", "@vueuse/core", "@lucide/vue", "clsx", "tailwind-merge"],
    files: vueAtomFiles("radio-group", ["RadioGroup.vue", "RadioGroupItem.vue", "index.ts"]),
  },
  {
    name: "switch",
    title: "开关原子组件",
    description: "shadcn-vue 基础原子组件 switch。",
    dependencies: ["reka-ui", "@vueuse/core", "clsx", "tailwind-merge"],
    files: vueAtomFiles("switch", ["Switch.vue", "index.ts"]),
  },
  {
    name: "slider",
    title: "滑块原子组件",
    description: "shadcn-vue 基础原子组件 slider。",
    dependencies: ["reka-ui", "@vueuse/core", "clsx", "tailwind-merge"],
    files: vueAtomFiles("slider", ["Slider.vue", "index.ts"]),
  },
  {
    name: "popover",
    title: "气泡原子组件",
    description: "shadcn-vue 基础原子组件 popover。",
    dependencies: ["reka-ui", "@vueuse/core", "clsx", "tailwind-merge"],
    files: vueAtomFiles("popover", ["Popover.vue", "PopoverAnchor.vue", "PopoverContent.vue", "PopoverDescription.vue", "PopoverHeader.vue", "PopoverTitle.vue", "PopoverTrigger.vue", "index.ts"]),
  },
  {
    name: "native-select",
    title: "原生下拉原子组件",
    description: "shadcn-vue 基础原子组件 native-select（calendar 依赖）。",
    dependencies: ["reka-ui", "@vueuse/core", "@lucide/vue", "clsx", "tailwind-merge"],
    files: vueAtomFiles("native-select", ["NativeSelect.vue", "NativeSelectOptGroup.vue", "NativeSelectOption.vue", "index.ts"]),
  },
  {
    name: "calendar",
    title: "日历原子组件",
    description: "shadcn-vue 基础原子组件 calendar。",
    dependencies: ["reka-ui", "@vueuse/core", "@internationalized/date", "@lucide/vue", "clsx", "tailwind-merge"],
    registryDependencies: ["@ui-kit/button", "@ui-kit/native-select"],
    files: vueAtomFiles("calendar", ["Calendar.vue", "CalendarCell.vue", "CalendarCellTrigger.vue", "CalendarGrid.vue", "CalendarGridBody.vue", "CalendarGridHead.vue", "CalendarGridRow.vue", "CalendarHeadCell.vue", "CalendarHeader.vue", "CalendarHeading.vue", "CalendarNextButton.vue", "CalendarPrevButton.vue", "index.ts"]),
  },
  {
    name: "input-otp",
    title: "验证码输入原子组件",
    description: "shadcn-vue 基础原子组件 input-otp。",
    dependencies: ["vue-input-otp", "reka-ui", "@vueuse/core", "@lucide/vue", "clsx", "tailwind-merge"],
    files: vueAtomFiles("input-otp", ["InputOTP.vue", "InputOTPGroup.vue", "InputOTPSeparator.vue", "InputOTPSlot.vue", "index.ts"]),
  },
  {
    name: "tabs",
    title: "标签页原子组件",
    description: "shadcn-vue 基础原子组件 tabs。",
    dependencies: ["reka-ui", "@vueuse/core", "class-variance-authority", "clsx", "tailwind-merge"],
    files: vueAtomFiles("tabs", ["Tabs.vue", "TabsContent.vue", "TabsList.vue", "TabsTrigger.vue", "index.ts"]),
  },
  {
    name: "breadcrumb",
    title: "面包屑原子组件",
    description: "shadcn-vue 基础原子组件 breadcrumb。",
    dependencies: ["reka-ui", "@lucide/vue", "clsx", "tailwind-merge"],
    files: vueAtomFiles("breadcrumb", ["Breadcrumb.vue", "BreadcrumbEllipsis.vue", "BreadcrumbItem.vue", "BreadcrumbLink.vue", "BreadcrumbList.vue", "BreadcrumbPage.vue", "BreadcrumbSeparator.vue", "index.ts"]),
  },
  {
    name: "dropdown-menu",
    title: "下拉菜单原子组件",
    description: "shadcn-vue 基础原子组件 dropdown-menu。",
    dependencies: ["reka-ui", "@vueuse/core", "@lucide/vue", "clsx", "tailwind-merge"],
    files: vueAtomFiles("dropdown-menu", ["DropdownMenu.vue", "DropdownMenuCheckboxItem.vue", "DropdownMenuContent.vue", "DropdownMenuGroup.vue", "DropdownMenuItem.vue", "DropdownMenuLabel.vue", "DropdownMenuRadioGroup.vue", "DropdownMenuRadioItem.vue", "DropdownMenuSeparator.vue", "DropdownMenuShortcut.vue", "DropdownMenuSub.vue", "DropdownMenuSubContent.vue", "DropdownMenuSubTrigger.vue", "DropdownMenuTrigger.vue", "index.ts"]),
  },
  {
    name: "context-menu",
    title: "右键菜单原子组件",
    description: "shadcn-vue 基础原子组件 context-menu。",
    dependencies: ["reka-ui", "@vueuse/core", "@lucide/vue", "clsx", "tailwind-merge"],
    files: vueAtomFiles("context-menu", ["ContextMenu.vue", "ContextMenuCheckboxItem.vue", "ContextMenuContent.vue", "ContextMenuGroup.vue", "ContextMenuItem.vue", "ContextMenuLabel.vue", "ContextMenuPortal.vue", "ContextMenuRadioGroup.vue", "ContextMenuRadioItem.vue", "ContextMenuSeparator.vue", "ContextMenuShortcut.vue", "ContextMenuSub.vue", "ContextMenuSubContent.vue", "ContextMenuSubTrigger.vue", "ContextMenuTrigger.vue", "index.ts"]),
  },
  {
    name: "dialog",
    title: "对话框原子组件",
    description: "shadcn-vue 基础原子组件 dialog。",
    dependencies: ["reka-ui", "@vueuse/core", "@lucide/vue", "clsx", "tailwind-merge"],
    files: vueAtomFiles("dialog", ["Dialog.vue", "DialogClose.vue", "DialogContent.vue", "DialogDescription.vue", "DialogFooter.vue", "DialogHeader.vue", "DialogOverlay.vue", "DialogScrollContent.vue", "DialogTitle.vue", "DialogTrigger.vue", "index.ts"]),
  },
  {
    name: "drawer",
    title: "抽屉原子组件",
    description: "shadcn-vue 基础原子组件 drawer。",
    dependencies: ["reka-ui", "clsx", "tailwind-merge"],
    files: vueAtomFiles("drawer", ["Drawer.vue", "DrawerClose.vue", "DrawerContent.vue", "DrawerDescription.vue", "DrawerFooter.vue", "DrawerHeader.vue", "DrawerOverlay.vue", "DrawerTitle.vue", "DrawerTrigger.vue", "index.ts"]),
  },
  {
    name: "sheet",
    title: "侧滑原子组件",
    description: "shadcn-vue 基础原子组件 sheet。",
    dependencies: ["reka-ui", "@vueuse/core", "@lucide/vue", "clsx", "tailwind-merge"],
    files: vueAtomFiles("sheet", ["Sheet.vue", "SheetClose.vue", "SheetContent.vue", "SheetDescription.vue", "SheetFooter.vue", "SheetHeader.vue", "SheetOverlay.vue", "SheetTitle.vue", "SheetTrigger.vue", "index.ts"]),
  },
  {
    name: "tooltip",
    title: "提示气泡原子组件",
    description: "shadcn-vue 基础原子组件 tooltip。",
    dependencies: ["reka-ui", "@vueuse/core", "clsx", "tailwind-merge"],
    files: vueAtomFiles("tooltip", ["Tooltip.vue", "TooltipContent.vue", "TooltipProvider.vue", "TooltipTrigger.vue", "index.ts"]),
  },
  {
    name: "command",
    title: "命令面板原子组件",
    description: "shadcn-vue 基础原子组件 command。",
    dependencies: ["reka-ui", "@vueuse/core", "@lucide/vue", "clsx", "tailwind-merge"],
    registryDependencies: ["@ui-kit/dialog", "@ui-kit/input-group"],
    files: vueAtomFiles("command", ["Command.vue", "CommandDialog.vue", "CommandEmpty.vue", "CommandGroup.vue", "CommandInput.vue", "CommandItem.vue", "CommandList.vue", "CommandSeparator.vue", "CommandShortcut.vue", "index.ts"]),
  },
  {
    name: "input-group",
    title: "输入组原子组件",
    description: "shadcn-vue 基础原子组件 input-group（command 依赖）。",
    dependencies: ["@lucide/vue", "clsx", "tailwind-merge"],
    files: vueAtomFiles("input-group", ["InputGroup.vue", "InputGroupAddon.vue", "InputGroupButton.vue", "InputGroupInput.vue", "InputGroupText.vue", "InputGroupTextarea.vue", "index.ts"]),
  },
  {
    name: "sonner",
    title: "通知原子组件",
    description: "shadcn-vue 基础原子组件 sonner。",
    dependencies: ["vue-sonner", "@vueuse/core", "clsx", "tailwind-merge"],
    files: vueAtomFiles("sonner", ["Sonner.vue", "index.ts"]),
  },
  {
    name: "accordion",
    title: "手风琴原子组件",
    description: "shadcn-vue 基础原子组件 accordion。",
    dependencies: ["reka-ui", "@lucide/vue", "clsx", "tailwind-merge"],
    files: vueAtomFiles("accordion", ["Accordion.vue", "AccordionContent.vue", "AccordionItem.vue", "AccordionTrigger.vue", "index.ts"]),
  },
  {
    name: "alert",
    title: "警告提示原子组件",
    description: "shadcn-vue 基础原子组件 alert。",
    dependencies: ["class-variance-authority", "clsx", "tailwind-merge"],
    files: vueAtomFiles("alert", ["Alert.vue", "AlertAction.vue", "AlertDescription.vue", "AlertTitle.vue", "index.ts"]),
  },
  {
    name: "progress",
    title: "进度条原子组件",
    description: "shadcn-vue 基础原子组件 progress。",
    dependencies: ["reka-ui", "@vueuse/core", "clsx", "tailwind-merge"],
    files: vueAtomFiles("progress", ["Progress.vue", "index.ts"]),
  },
  {
    name: "collapsible",
    title: "折叠原子组件",
    description: "shadcn-vue 基础原子组件 collapsible。",
    dependencies: ["reka-ui", "clsx", "tailwind-merge"],
    files: vueAtomFiles("collapsible", ["Collapsible.vue", "CollapsibleContent.vue", "CollapsibleTrigger.vue", "index.ts"]),
  },
  {
    name: "scroll-area",
    title: "滚动区域原子组件",
    description: "shadcn-vue 基础原子组件 scroll-area。",
    dependencies: ["reka-ui", "clsx", "tailwind-merge"],
    files: vueAtomFiles("scroll-area", ["ScrollArea.vue", "ScrollBar.vue", "index.ts"]),
  },
  {
    name: "carousel",
    title: "轮播原子组件",
    description: "shadcn-vue 基础原子组件 carousel（embla）。",
    dependencies: ["embla-carousel-vue", "@lucide/vue", "@vueuse/core", "clsx", "tailwind-merge"],
    registryDependencies: ["@ui-kit/button"],
    files: vueAtomFiles("carousel", ["Carousel.vue", "CarouselContent.vue", "CarouselItem.vue", "CarouselNext.vue", "CarouselPrevious.vue", "index.ts", "interface.ts", "useCarousel.ts"]),
  },
  {
    name: "table",
    title: "表格原子组件",
    description: "shadcn-vue 基础原子组件 table。",
    dependencies: ["clsx", "tailwind-merge"],
    files: vueAtomFiles("table", ["Table.vue", "TableBody.vue", "TableCaption.vue", "TableCell.vue", "TableEmpty.vue", "TableFooter.vue", "TableHead.vue", "TableHeader.vue", "TableRow.vue", "index.ts"]),
  },
];

const vueKit: ItemSpec[] = [
  {
    name: "x-button",
    title: "二次封装按钮",
    description: "内置 solid/outline/soft/ghost/subtle/link 六种变体 × 七种语义色，hover/active 仅颜色过渡。",
    dependencies: ["@lucide/vue"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/button"],
    files: [{ source: "packages/vue/src/components/kit/XButton.vue", path: "kit/XButton.vue", type: "registry:component" }],
  },
  {
    name: "x-button-group",
    title: "按钮组",
    description: "将多个按钮水平或垂直拼接为一个整体。",
    registryDependencies: ["@ui-kit/utils"],
    files: [{ source: "packages/vue/src/components/kit/XButtonGroup.vue", path: "kit/XButtonGroup.vue", type: "registry:component" }],
  },
  {
    name: "x-badge",
    title: "徽标",
    description: "展示数量或状态提示，支持数字、溢出与圆点模式。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/badge"],
    files: [{ source: "packages/vue/src/components/kit/XBadge.vue", path: "kit/XBadge.vue", type: "registry:component" }],
  },
  {
    name: "x-chip",
    title: "芯片",
    description: "标记属性，支持多种语义色与可选关闭按钮。",
    dependencies: ["@lucide/vue"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/button"],
    files: [{ source: "packages/vue/src/components/kit/XChip.vue", path: "kit/XChip.vue", type: "registry:component" }],
  },
  {
    name: "x-avatar",
    title: "头像",
    description: "展示用户形象，支持圆形/方形、五档尺寸、图片与图标。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/avatar"],
    files: [{ source: "packages/vue/src/components/kit/XAvatar.vue", path: "kit/XAvatar.vue", type: "registry:component" }],
  },
  {
    name: "x-avatar-group",
    title: "头像组",
    description: "将多个头像重叠排列展示，超出 max 折叠为 +N。",
    registryDependencies: ["@ui-kit/utils"],
    files: [{ source: "packages/vue/src/components/kit/XAvatarGroup.vue", path: "kit/XAvatarGroup.vue", type: "registry:component" }],
  },
  {
    name: "x-card",
    title: "卡片",
    description: "通用容器，承载标题、操作区、封面与底部操作，支持 hoverable 阴影与边框反馈。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/card"],
    files: [{ source: "packages/vue/src/components/kit/XCard.vue", path: "kit/XCard.vue", type: "registry:component" }],
  },
  {
    name: "x-container",
    title: "容器",
    description: "约束内容宽度的居中布局容器。",
    registryDependencies: ["@ui-kit/utils"],
    files: [{ source: "packages/vue/src/components/kit/XContainer.vue", path: "kit/XContainer.vue", type: "registry:component" }],
  },
  {
    name: "x-icon",
    title: "图标",
    description: "名称驱动的矢量图标，内置常用图标集合与五档尺寸。",
    dependencies: ["@lucide/vue"],
    registryDependencies: ["@ui-kit/utils"],
    files: [{ source: "packages/vue/src/components/kit/XIcon.vue", path: "kit/XIcon.vue", type: "registry:component" }],
  },
  {
    name: "x-kbd",
    title: "键盘按键",
    description: "展示快捷键或按键组合。",
    registryDependencies: ["@ui-kit/utils"],
    files: [{ source: "packages/vue/src/components/kit/XKbd.vue", path: "kit/XKbd.vue", type: "registry:component" }],
  },
  {
    name: "x-separator",
    title: "分割线",
    description: "在内容之间插入水平或垂直分隔。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/separator"],
    files: [{ source: "packages/vue/src/components/kit/XSeparator.vue", path: "kit/XSeparator.vue", type: "registry:component" }],
  },
  {
    name: "x-skeleton",
    title: "骨架屏",
    description: "内容加载时的占位骨架。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/skeleton"],
    files: [{ source: "packages/vue/src/components/kit/XSkeleton.vue", path: "kit/XSkeleton.vue", type: "registry:component" }],
  },
  {
    name: "x-input",
    title: "输入框",
    description: "支持前后缀图标、前后置标签与 error / warning 校验状态。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/input"],
    files: [{ source: "packages/vue/src/components/kit/XInput.vue", path: "kit/XInput.vue", type: "registry:component" }],
  },
  {
    name: "x-textarea",
    title: "多行文本",
    description: "支持行数、自动调整高度与校验状态。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/textarea"],
    files: [{ source: "packages/vue/src/components/kit/XTextarea.vue", path: "kit/XTextarea.vue", type: "registry:component" }],
  },
  {
    name: "x-checkbox",
    title: "多选框",
    description: "支持半选状态与选项文字插槽。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/checkbox", "@ui-kit/label"],
    files: [{ source: "packages/vue/src/components/kit/XCheckbox.vue", path: "kit/XCheckbox.vue", type: "registry:component" }],
  },
  {
    name: "x-radio-group",
    title: "单选框组",
    description: "支持普通单选框与按钮样式（outline / solid）。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/radio-group", "@ui-kit/label"],
    files: [{ source: "packages/vue/src/components/kit/XRadioGroup.vue", path: "kit/XRadioGroup.vue", type: "registry:component" }],
  },
  {
    name: "x-switch",
    title: "开关",
    description: "支持选中/未选中文字与两档尺寸。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/switch", "@ui-kit/label"],
    files: [{ source: "packages/vue/src/components/kit/XSwitch.vue", path: "kit/XSwitch.vue", type: "registry:component" }],
  },
  {
    name: "x-select-menu",
    title: "选择菜单",
    description: "带搜索的增强选择器，支持多选与空状态插槽。",
    dependencies: ["@lucide/vue"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/popover", "@ui-kit/input"],
    files: [{ source: "packages/vue/src/components/kit/XSelectMenu.vue", path: "kit/XSelectMenu.vue", type: "registry:component" }],
  },
  {
    name: "x-input-menu",
    title: "输入菜单",
    description: "输入框与下拉菜单组合，支持搜索过滤。",
    dependencies: ["@lucide/vue"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/popover", "@ui-kit/input"],
    files: [{ source: "packages/vue/src/components/kit/XInputMenu.vue", path: "kit/XInputMenu.vue", type: "registry:component" }],
  },
  {
    name: "x-slider",
    title: "滑块",
    description: "通过拖动滑块在区间内取值。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/slider"],
    files: [{ source: "packages/vue/src/components/kit/XSlider.vue", path: "kit/XSlider.vue", type: "registry:component" }],
  },
  {
    name: "x-input-number",
    title: "数字输入",
    description: "带步进按钮的数字输入框。",
    dependencies: ["@lucide/vue"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/input"],
    files: [{ source: "packages/vue/src/components/kit/XInputNumber.vue", path: "kit/XInputNumber.vue", type: "registry:component" }],
  },
  {
    name: "x-input-tags",
    title: "标签输入",
    description: "以标签形式输入多个值，回车添加。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/input", "@ui-kit/x-chip"],
    files: [{ source: "packages/vue/src/components/kit/XInputTags.vue", path: "kit/XInputTags.vue", type: "registry:component" }],
  },
  {
    name: "x-input-date",
    title: "日期选择",
    description: "输入框 + popover 日历，支持最小/最大日期。",
    dependencies: ["@internationalized/date", "@lucide/vue"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/popover", "@ui-kit/input", "@ui-kit/calendar"],
    files: [{ source: "packages/vue/src/components/kit/XInputDate.vue", path: "kit/XInputDate.vue", type: "registry:component" }],
  },
  {
    name: "x-input-time",
    title: "时间选择",
    description: "输入框 + popover 时间列表，支持 12/24 小时制。",
    dependencies: ["@lucide/vue"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/popover", "@ui-kit/input"],
    files: [{ source: "packages/vue/src/components/kit/XInputTime.vue", path: "kit/XInputTime.vue", type: "registry:component" }],
  },
  {
    name: "x-input-rating",
    title: "评分",
    description: "以星标形式进行评分输入，支持半星。",
    dependencies: ["@lucide/vue"],
    registryDependencies: ["@ui-kit/utils"],
    files: [{ source: "packages/vue/src/components/kit/XInputRating.vue", path: "kit/XInputRating.vue", type: "registry:component" }],
  },
  {
    name: "x-color-picker",
    title: "颜色选择",
    description: "从预设色板或色盘中选择颜色。",
    dependencies: ["@lucide/vue"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/popover"],
    files: [{ source: "packages/vue/src/components/kit/XColorPicker.vue", path: "kit/XColorPicker.vue", type: "registry:component" }],
  },
  {
    name: "x-pin-input",
    title: "验证码输入",
    description: "分段输入验证码或密码，支持掩码。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/input-otp"],
    files: [{ source: "packages/vue/src/components/kit/XPinInput.vue", path: "kit/XPinInput.vue", type: "registry:component" }],
  },
  {
    name: "x-file-upload",
    title: "文件上传",
    description: "上传文件，支持拖拽与多文件。",
    dependencies: ["@lucide/vue"],
    registryDependencies: ["@ui-kit/utils"],
    files: [{ source: "packages/vue/src/components/kit/XFileUpload.vue", path: "kit/XFileUpload.vue", type: "registry:component" }],
  },
  {
    name: "x-form",
    title: "表单",
    description: "收集、校验并提交表单数据。",
    registryDependencies: ["@ui-kit/utils"],
    files: [
      { source: "packages/vue/src/components/kit/XForm.vue", path: "kit/XForm.vue", type: "registry:component" },
      { source: "packages/vue/src/components/kit/XFormContext.ts", path: "kit/XFormContext.ts", type: "registry:component" },
    ],
  },
  {
    name: "x-form-field",
    title: "表单字段",
    description: "带标签、说明与错误信息的表单字段。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/label", "@ui-kit/x-form"],
    files: [
      { source: "packages/vue/src/components/kit/XFormField.vue", path: "kit/XFormField.vue", type: "registry:component" },
      { source: "packages/vue/src/components/kit/XFormContext.ts", path: "kit/XFormContext.ts", type: "registry:component" },
    ],
  },
  {
    name: "x-field-group",
    title: "字段组",
    description: "将多个字段组合为一行或一组。",
    registryDependencies: ["@ui-kit/utils"],
    files: [{ source: "packages/vue/src/components/kit/XFieldGroup.vue", path: "kit/XFieldGroup.vue", type: "registry:component" }],
  },
  {
    name: "x-link",
    title: "链接",
    description: "页面内或跨页面的超链接，支持前后图标与激活态。",
    registryDependencies: ["@ui-kit/utils"],
    files: [{ source: "packages/vue/src/components/kit/XLink.vue", path: "kit/XLink.vue", type: "registry:component" }],
  },
  {
    name: "x-breadcrumb",
    title: "面包屑",
    description: "显示当前页面在层级结构中的位置。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/breadcrumb", "@ui-kit/x-link"],
    files: [{ source: "packages/vue/src/components/kit/XBreadcrumb.vue", path: "kit/XBreadcrumb.vue", type: "registry:component" }],
  },
  {
    name: "x-tabs",
    title: "标签页",
    description: "在同一区域内切换不同视图或内容分组，支持 line / card 样式。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/tabs"],
    files: [{ source: "packages/vue/src/components/kit/XTabs.vue", path: "kit/XTabs.vue", type: "registry:component" }],
  },
  {
    name: "x-navigation-menu",
    title: "导航菜单",
    description: "支持垂直、水平与内嵌模式，子菜单使用 DropdownMenu 展开。",
    dependencies: ["@lucide/vue"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/dropdown-menu"],
    files: [{ source: "packages/vue/src/components/kit/XNavigationMenu.vue", path: "kit/XNavigationMenu.vue", type: "registry:component" }],
  },
  {
    name: "x-pagination",
    title: "分页",
    description: "对长列表数据进行分页浏览，支持省略号与每页条数切换。",
    dependencies: ["@lucide/vue"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/button", "@ui-kit/x-select-menu"],
    files: [{ source: "packages/vue/src/components/kit/XPagination.vue", path: "kit/XPagination.vue", type: "registry:component" }],
  },
  {
    name: "x-stepper",
    title: "步骤条",
    description: "引导用户按步骤完成流程，支持受控与非受控用法。",
    dependencies: ["@lucide/vue"],
    registryDependencies: ["@ui-kit/utils"],
    files: [{ source: "packages/vue/src/components/kit/XStepper.vue", path: "kit/XStepper.vue", type: "registry:component" }],
  },
  {
    name: "x-command-palette",
    title: "命令面板",
    description: "全局命令搜索与快捷操作面板。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/command", "@ui-kit/x-kbd"],
    files: [{ source: "packages/vue/src/components/kit/XCommandPalette.vue", path: "kit/XCommandPalette.vue", type: "registry:component" }],
  },
  {
    name: "x-modal",
    title: "对话框",
    description: "模态对话框，默认提供取消与确定按钮。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/dialog", "@ui-kit/x-button"],
    files: [{ source: "packages/vue/src/components/kit/XModal.vue", path: "kit/XModal.vue", type: "registry:component" }],
  },
  {
    name: "x-drawer",
    title: "抽屉",
    description: "从屏幕边缘滑出的面板。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/drawer", "@ui-kit/x-button"],
    files: [{ source: "packages/vue/src/components/kit/XDrawer.vue", path: "kit/XDrawer.vue", type: "registry:component" }],
  },
  {
    name: "x-slideover",
    title: "侧滑",
    description: "从侧边滑入的浮层，常用于移动端导航。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/sheet", "@ui-kit/x-button"],
    files: [{ source: "packages/vue/src/components/kit/XSlideover.vue", path: "kit/XSlideover.vue", type: "registry:component" }],
  },
  {
    name: "x-tooltip",
    title: "文字提示",
    description: "简单的文字提示气泡。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/tooltip"],
    files: [{ source: "packages/vue/src/components/kit/XTooltip.vue", path: "kit/XTooltip.vue", type: "registry:component" }],
  },
  {
    name: "x-popover",
    title: "气泡",
    description: "点击或悬停触发的轻量气泡卡片。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/popover"],
    files: [{ source: "packages/vue/src/components/kit/XPopover.vue", path: "kit/XPopover.vue", type: "registry:component" }],
  },
  {
    name: "x-context-menu",
    title: "右键菜单",
    description: "在指定区域右键唤出的上下文菜单。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/context-menu"],
    files: [{ source: "packages/vue/src/components/kit/XContextMenu.vue", path: "kit/XContextMenu.vue", type: "registry:component" }],
  },
  {
    name: "x-dropdown-menu",
    title: "下拉菜单",
    description: "点击按钮展开的操作菜单。",
    dependencies: ["@lucide/vue"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/dropdown-menu", "@ui-kit/x-button"],
    files: [{ source: "packages/vue/src/components/kit/XDropdownMenu.vue", path: "kit/XDropdownMenu.vue", type: "registry:component" }],
  },
  {
    name: "x-toast",
    title: "消息通知",
    description: "操作后的轻量级全局消息通知（useToast + XToaster）。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/sonner"],
    files: [
      { source: "packages/vue/src/components/kit/XToast.ts", path: "kit/XToast.ts", type: "registry:component" },
      { source: "packages/vue/src/components/kit/XToaster.vue", path: "kit/XToaster.vue", type: "registry:component" },
    ],
  },
  {
    name: "x-accordion",
    title: "手风琴",
    description: "可展开与折叠的内容分组。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/accordion"],
    files: [{ source: "packages/vue/src/components/kit/XAccordion.vue", path: "kit/XAccordion.vue", type: "registry:component" }],
  },
  {
    name: "x-alert",
    title: "警告提示",
    description: "展示需要关注的信息，提供四种语义。",
    dependencies: ["@lucide/vue"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/alert", "@ui-kit/x-button"],
    files: [{ source: "packages/vue/src/components/kit/XAlert.vue", path: "kit/XAlert.vue", type: "registry:component" }],
  },
  {
    name: "x-progress",
    title: "进度条",
    description: "展示操作的当前进度，支持线形与圆形。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/progress"],
    files: [{ source: "packages/vue/src/components/kit/XProgress.vue", path: "kit/XProgress.vue", type: "registry:component" }],
  },
  {
    name: "x-collapsible",
    title: "折叠",
    description: "点击触发内容展开或收起。",
    dependencies: ["@lucide/vue"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/collapsible"],
    files: [{ source: "packages/vue/src/components/kit/XCollapsible.vue", path: "kit/XCollapsible.vue", type: "registry:component" }],
  },
  {
    name: "x-listbox",
    title: "列表",
    description: "可选中项的列表选择组件。",
    dependencies: ["@lucide/vue"],
    registryDependencies: ["@ui-kit/utils"],
    files: [{ source: "packages/vue/src/components/kit/XListbox.vue", path: "kit/XListbox.vue", type: "registry:component" }],
  },
  {
    name: "x-scroll-area",
    title: "滚动区域",
    description: "内容溢出时可滚动的区域。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/scroll-area"],
    files: [{ source: "packages/vue/src/components/kit/XScrollArea.vue", path: "kit/XScrollArea.vue", type: "registry:component" }],
  },
  {
    name: "x-carousel",
    title: "轮播",
    description: "多张内容横向轮播展示，支持自动播放与循环。",
    dependencies: ["embla-carousel-autoplay", "@lucide/vue"],
    registryDependencies: ["@ui-kit/utils", "@ui-kit/carousel", "@ui-kit/x-button"],
    files: [{ source: "packages/vue/src/components/kit/XCarousel.vue", path: "kit/XCarousel.vue", type: "registry:component" }],
  },
  {
    name: "x-splitter",
    title: "分割面板",
    description: "可拖拽调整大小的分栏面板。",
    registryDependencies: ["@ui-kit/utils"],
    files: [{ source: "packages/vue/src/components/kit/XSplitter.vue", path: "kit/XSplitter.vue", type: "registry:component" }],
  },
  {
    name: "x-table",
    title: "表格",
    description: "展示行列数据，支持加载与分页。",
    registryDependencies: ["@ui-kit/utils", "@ui-kit/table", "@ui-kit/x-pagination", "@ui-kit/x-skeleton"],
    files: [{ source: "packages/vue/src/components/kit/XTable.vue", path: "kit/XTable.vue", type: "registry:component" }],
  },
];

/* ============================ vben 风格 hook 分发 ============================ */

/** 提供 useXxx hook 的 kit 组件（hook 文件随组件 item 一起分发） */
const hookComponentNames = [
  "x-modal",
  "x-drawer",
  "x-slideover",
  "x-tooltip",
  "x-popover",
  "x-command-palette",
  "x-dropdown-menu",
  "x-context-menu",
  "x-form",
  "x-table",
  "x-stepper",
  "x-carousel",
  "x-accordion",
  "x-collapsible",
  "x-scroll-area",
  "x-splitter",
]

/** x-modal → XModal */
function toPascalName(name: string): string {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")
}

// React：hook 定义在组件文件内，只需保证 bound-store 基础库随组件分发
const boundStoreSpec: ItemSpec = {
  name: "bound-store",
  title: "hook 绑定状态容器",
  description: "vben 风格 useXxx hook 的内部实现基础（useSyncExternalStore 订阅容器）。",
  files: [{ source: "packages/react/src/lib/kit/bound-store.ts", target: "lib/kit/bound-store.ts", type: "registry:lib" }],
}

for (const spec of reactKit) {
  if (hookComponentNames.includes(spec.name)) {
    spec.registryDependencies = [...(spec.registryDependencies ?? []), "@ui-kit/bound-store"]
  }
}

// Vue：hook 定义在独立 useXxx.ts 文件，随组件 item 一起分发
for (const spec of vueKit) {
  if (hookComponentNames.includes(spec.name)) {
    const pascal = toPascalName(spec.name)
    spec.files.push({
      source: `packages/vue/src/components/kit/use${pascal}.ts`,
      path: `kit/use${pascal}.ts`,
      type: "registry:component",
    })
  }
}

reactAtoms.push(boundStoreSpec)

/* ============================ 输出 ============================ */

function writeRegistry(framework: "react" | "vue", specs: ItemSpec[]) {
  for (const spec of specs) {
    writeJson(`registry/${framework}/items/${spec.name}.json`, buildItem(spec, framework));
  }
  writeJson(`registry/${framework}/registry.json`, {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: framework === "react" ? "ui-kit-react" : "ui-kit-vue",
    homepage: "https://git.newcapec.cn/02-newcapec/ai/UIService/helper/ui-kit",
    items: specs.map((spec) => ({
      name: spec.name,
      type: spec.type ?? "registry:ui",
      title: spec.title,
      description: spec.description,
      registryDependencies: spec.registryDependencies ?? [],
    })),
  });
}

// source 包主题 css（两包内容一致）
const kitThemeCss = buildKitThemeCss();
writeText("packages/react/src/lib/kit/kit-theme.css", kitThemeCss);
writeText("packages/vue/src/lib/kit/kit-theme.css", kitThemeCss);

writeRegistry("react", [...reactAtoms, ...reactKit]);
writeRegistry("vue", [...vueAtoms, ...vueKit]);

console.log(
  `registry generated: react ${reactAtoms.length + reactKit.length} items, vue ${vueAtoms.length + vueKit.length} items`,
);
