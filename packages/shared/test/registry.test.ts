import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const repoRoot = join(import.meta.dirname, "../../..");

interface ItemFile {
  path: string;
  target?: string;
  type: string;
  content: string;
}

interface Item {
  name: string;
  type: string;
  dependencies: string[];
  registryDependencies: string[];
  files: ItemFile[];
  cssVars: { theme: Record<string, string> };
}

function loadItem(framework: "react" | "vue", name: string): Item {
  return JSON.parse(readFileSync(join(repoRoot, `registry/${framework}/items/${name}.json`), "utf8"));
}

const kitItems = [
  "x-button",
  "x-button-group",
  "x-badge",
  "x-chip",
  "x-avatar",
  "x-avatar-group",
  "x-card",
  "x-container",
  "x-icon",
  "x-kbd",
  "x-separator",
  "x-skeleton",
  "x-input",
  "x-textarea",
  "x-checkbox",
  "x-radio-group",
  "x-switch",
  "x-select-menu",
  "x-input-menu",
  "x-slider",
  "x-input-number",
  "x-input-tags",
  "x-input-date",
  "x-input-time",
  "x-input-rating",
  "x-color-picker",
  "x-pin-input",
  "x-file-upload",
  "x-form",
  "x-form-field",
  "x-field-group",
  "x-link",
  "x-breadcrumb",
  "x-tabs",
  "x-navigation-menu",
  "x-pagination",
  "x-stepper",
  "x-command-palette",
  "x-modal",
  "x-drawer",
  "x-slideover",
  "x-tooltip",
  "x-popover",
  "x-context-menu",
  "x-dropdown-menu",
  "x-toast",
  "x-accordion",
  "x-alert",
  "x-progress",
  "x-collapsible",
  "x-listbox",
  "x-scroll-area",
  "x-carousel",
  "x-splitter",
  "x-table",
];

describe.each(["react", "vue"] as const)("%s registry", (framework) => {
  it("全部 kit item 文件内容内联且非空", () => {
    for (const name of kitItems) {
      const item = loadItem(framework, name);
      expect(item.files.length).toBeGreaterThan(0);
      for (const file of item.files) {
        expect(file.content.length).toBeGreaterThan(0);
      }
    }
  });

  it("kit item 的依赖全部命名空间化（@ui-kit/*）", () => {
    for (const name of kitItems) {
      const item = loadItem(framework, name);
      for (const dep of item.registryDependencies) {
        expect(dep.startsWith("@ui-kit/")).toBe(true);
      }
    }
  });

  it("cssVars 包含 6 种语义色色阶 × 10 级与圆角/阴影/字体 token", () => {
    const item = loadItem(framework, "x-button");
    const theme = item.cssVars.theme;
    // secondary 使用 shadcn 的 --secondary / --muted 灰色变量，不参与色阶派生
    for (const color of ["primary", "success", "warning", "error", "info", "neutral"]) {
      for (let i = 1; i <= 10; i++) {
        expect(theme[`${color}-${i}`]).toMatch(/^#/);
      }
    }
    expect(theme["radius-sm"]).toBe("6px");
    expect(theme["radius-md"]).toBe("8px");
    expect(theme["radius-lg"]).toBe("12px");
    expect(theme["radius-pill"]).toBe("9999px");
    expect(theme["shadow-md"]).toBe("0 4px 12px 0 rgb(0 0 0 / 0.10)");
    expect(theme["text-3xl"]).toBe("38px");
  });

  it("registry 索引包含全部 item", () => {
    const index = JSON.parse(readFileSync(join(repoRoot, `registry/${framework}/registry.json`), "utf8"));
    const names = index.items.map((item: { name: string }) => item.name);
    const atomNames = [
      ...kitItems,
      "utils",
      "button",
      "badge",
      "avatar",
      "card",
      "skeleton",
      "separator",
      "input",
      "label",
      "textarea",
      "checkbox",
      "radio-group",
      "switch",
      "slider",
      "popover",
      "calendar",
      "input-otp",
      "tabs",
      "breadcrumb",
      "dropdown-menu",
      "context-menu",
      "dialog",
      "drawer",
      "sheet",
      "tooltip",
      "command",
      "sonner",
      "accordion",
      "alert",
      "progress",
      "collapsible",
      "scroll-area",
      "carousel",
      "table",
    ];
    for (const name of framework === "react" ? [...atomNames, "bound-store", "use-mobile", "use-media-query"] : atomNames) {
      expect(names).toContain(name);
    }
  });
});

describe("框架差异化落盘规则", () => {
  it("react item 使用显式 target（不带 src/ 前缀）", () => {
    const item = loadItem("react", "x-button");
    expect(item.files[0]?.target).toBe("components/kit/x-button.tsx");
  });

  it("react hook item 为 registry:hook 类型并落盘到 hooks/", () => {
    const item = loadItem("react", "use-mobile");
    expect(item.type).toBe("registry:hook");
    expect(item.files[0]?.type).toBe("registry:hook");
    expect(item.files[0]?.target).toBe("hooks/use-mobile.ts");
  });

  it("vben 风格 hook 随组件分发", () => {
    const reactModal = loadItem("react", "x-modal");
    expect(reactModal.registryDependencies).toContain("@ui-kit/bound-store");
    const vueModal = loadItem("vue", "x-modal");
    expect(vueModal.files.map((file) => file.path)).toContain("kit/useXModal.ts");
  });

  it("vue item 使用 path + type 驱动落盘，不设置 target", () => {
    const item = loadItem("vue", "x-button");
    expect(item.files[0]?.target).toBeUndefined();
    expect(item.files[0]?.path).toBe("kit/XButton.vue");
    expect(item.files[0]?.type).toBe("registry:component");
  });

  it("x-button 不再依赖 motion item", () => {
    const item = loadItem("react", "x-button");
    expect(item.registryDependencies).not.toContain("@ui-kit/motion");
  });
});

describe("kit-theme.css 生成物", () => {
  it("两份主题 css 一致且包含色阶 token", () => {
    const react = readFileSync(join(repoRoot, "packages/react/src/lib/kit/kit-theme.css"), "utf8");
    const vue = readFileSync(join(repoRoot, "packages/vue/src/lib/kit/kit-theme.css"), "utf8");
    expect(react).toBe(vue);
    expect(react).toContain("--primary-6: #1677ff;");
    expect(react).toContain("--radius-pill: 9999px;");
  });
});
