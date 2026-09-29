/**
 * VitePress 文档站配置：arco 式 Vue/React 版本切换 + lobe-ui 风格。
 * locales 机制实现全站视角切换（root = Vue，/react/ = React），
 * alias @ 指向 vendor 目录（prepare-vendor 脚本合并两个包源码生成），
 * Vue demo 原生渲染，React demo 通过页面内容器 createRoot 挂载。
 */
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitepress";

const componentItems = [
  { text: "Button 按钮", link: "components/button" },
  { text: "ButtonGroup 按钮组", link: "components/button-group" },
  { text: "Badge 徽标", link: "components/badge" },
  { text: "Chip 芯片", link: "components/chip" },
  { text: "Avatar 头像", link: "components/avatar" },
  { text: "AvatarGroup 头像组", link: "components/avatar-group" },
  { text: "Card 卡片", link: "components/card" },
  { text: "Container 容器", link: "components/container" },
  { text: "Icon 图标", link: "components/icon" },
  { text: "Kbd 键盘按键", link: "components/kbd" },
  { text: "Separator 分割线", link: "components/separator" },
  { text: "Skeleton 骨架屏", link: "components/skeleton" },
  { text: "Input 输入框", link: "components/input" },
  { text: "Textarea 多行文本", link: "components/textarea" },
  { text: "Checkbox 多选框", link: "components/checkbox" },
  { text: "RadioGroup 单选框组", link: "components/radio-group" },
  { text: "Switch 开关", link: "components/switch" },
  { text: "SelectMenu 选择菜单", link: "components/select-menu" },
  { text: "InputMenu 输入菜单", link: "components/input-menu" },
  { text: "Slider 滑块", link: "components/slider" },
  { text: "InputNumber 数字输入", link: "components/input-number" },
  { text: "InputTags 标签输入", link: "components/input-tags" },
  { text: "InputDate 日期选择", link: "components/input-date" },
  { text: "InputTime 时间选择", link: "components/input-time" },
  { text: "InputRating 评分", link: "components/input-rating" },
  { text: "ColorPicker 颜色选择", link: "components/color-picker" },
  { text: "PinInput 验证码输入", link: "components/pin-input" },
  { text: "FileUpload 文件上传", link: "components/file-upload" },
  { text: "Form 表单", link: "components/form" },
  { text: "FormField 表单字段", link: "components/form-field" },
  { text: "FieldGroup 字段组", link: "components/field-group" },
  { text: "Link 链接", link: "components/link" },
  { text: "Breadcrumb 面包屑", link: "components/breadcrumb" },
  { text: "Tabs 标签页", link: "components/tabs" },
  { text: "NavigationMenu 导航菜单", link: "components/navigation-menu" },
  { text: "Pagination 分页", link: "components/pagination" },
  { text: "Stepper 步骤条", link: "components/stepper" },
  { text: "CommandPalette 命令面板", link: "components/command-palette" },
  { text: "Modal 对话框", link: "components/modal" },
  { text: "Drawer 抽屉", link: "components/drawer" },
  { text: "Slideover 侧滑", link: "components/slideover" },
  { text: "Tooltip 文字提示", link: "components/tooltip" },
  { text: "Popover 气泡", link: "components/popover" },
  { text: "ContextMenu 右键菜单", link: "components/context-menu" },
  { text: "DropdownMenu 下拉菜单", link: "components/dropdown-menu" },
  { text: "Toast 消息通知", link: "components/toast" },
  { text: "Table 表格", link: "components/table" },
  { text: "Alert 警告提示", link: "components/alert" },
  { text: "Progress 进度条", link: "components/progress" },
  { text: "Accordion 手风琴", link: "components/accordion" },
  { text: "Collapsible 折叠", link: "components/collapsible" },
  { text: "Listbox 列表", link: "components/listbox" },
  { text: "ScrollArea 滚动区域", link: "components/scroll-area" },
  { text: "Carousel 轮播", link: "components/carousel" },
  { text: "Splitter 分割面板", link: "components/splitter" },
];

const guideItems = [
  { text: "快速开始", link: "guide/getting-started" },
  { text: "变体语义", link: "guide/variants" },
  { text: "hook 用法", link: "guide/hooks" },
  { text: "设计 token", link: "guide/tokens" },
  { text: "动效规范", link: "guide/motion" },
];

function localeSidebar(locale: "vue" | "react") {
  const prefix = locale === "vue" ? "/" : "/react/";
  const componentItemsLocal = componentItems.map((item) => ({
    ...item,
    link: `${prefix}${item.link}`,
  }));
  const guideItemsLocal = guideItems.map((item) => ({
    ...item,
    link: `${prefix}${item.link}`,
  }));
  return {
    [prefix]: [
      { text: "指南", items: guideItemsLocal },
      { text: "布局 Layout", items: componentItemsLocal.slice(0, 12) },
      { text: "表单 Forms", items: componentItemsLocal.slice(12, 31) },
      { text: "导航 Navigation", items: componentItemsLocal.slice(31, 38) },
      { text: "浮层 Overlays", items: componentItemsLocal.slice(38, 46) },
      { text: "内容 Content", items: componentItemsLocal.slice(46) },
    ],
  };
}

export default defineConfig({
  title: "ui-kit",
  description: "基于 shadcn 原子组件二次封装的 Vue 3 / React 设计系统",
  lang: "zh-CN",
  cleanUrls: true,
  ignoreDeadLinks: true,
  locales: {
    root: {
      label: "Vue",
      lang: "zh-CN",
      title: "ui-kit Vue",
      description: "基于 shadcn-vue 原子组件二次封装的设计系统",
      themeConfig: {
        nav: [
          { text: "指南", link: "/guide/getting-started" },
          { text: "组件", link: "/components/button" },
          { text: "设计 token", link: "/guide/tokens" },
        ],
        sidebar: localeSidebar("vue"),
      },
    },
    react: {
      label: "React",
      lang: "zh-CN",
      title: "ui-kit React",
      description: "基于 shadcn（Base UI）原子组件二次封装的设计系统",
      themeConfig: {
        nav: [
          { text: "指南", link: "/react/guide/getting-started" },
          { text: "组件", link: "/react/components/button" },
          { text: "设计 token", link: "/react/guide/tokens" },
        ],
        sidebar: localeSidebar("react"),
      },
    },
  },
  vite: {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: [
        {
          find: "@demos",
          replacement: fileURLToPath(new URL("../demos", import.meta.url)),
        },
        {
          find: "@",
          replacement: "@",
          customResolver(source, importer) {
            const rel = source.replace(/^@\//, "");
            const importerPath = importer ?? "";
            const isVue = importerPath.endsWith(".vue") || importerPath.includes("vendor/vue");
            const isReact = importerPath.endsWith(".tsx") || importerPath.includes("vendor/react");
            const frameworkDir = isReact && !isVue ? "react" : "vue";
            const base = fileURLToPath(new URL(`../vendor/${frameworkDir}`, import.meta.url));
            /* 补全扩展名与目录解析：vue 组件 import 无扩展名目录（如 '@/components/ui/button'），
             * react 组件 import 无扩展名文件（如 '@/components/ui/button.tsx' 形态的 button） */
            const hasExtension = /\.[a-zA-Z0-9]+$/.test(rel);
            const candidates = [
              ...(hasExtension ? [`${base}/${rel}`] : []),
              `${base}/${rel}.tsx`,
              `${base}/${rel}.ts`,
              `${base}/${rel}.vue`,
              `${base}/${rel}/index.ts`,
              `${base}/${rel}/index.tsx`,
              `${base}/${rel}/index.vue`,
            ];
            for (const candidate of candidates) {
              if (existsSync(candidate)) return candidate;
            }
            return `${base}/${rel}.tsx`;
          },
        },
      ],
    },
  },
  themeConfig: {
    logo: { light: "/logo.svg", dark: "/logo.svg", alt: "ui-kit" },
    search: {
      provider: "local",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/yuguaa/ui-kit" }],
    outline: { level: [2, 3], label: "本页目录" },
    docFooter: { prev: "上一篇", next: "下一篇" },
    darkModeSwitchLabel: "深色模式",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "回到顶部",
    lastUpdated: { text: "最后更新" },
  },
  markdown: {
    theme: { light: "github-light", dark: "github-dark" },
  },
});
