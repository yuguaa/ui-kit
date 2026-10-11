import { h, nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { ToastProvider, ToastViewport } from "reka-ui";
import XAvatar from "@/components/kit/XAvatar.vue";
import XAvatarGroup from "@/components/kit/XAvatarGroup.vue";
import XAlert from "@/components/kit/XAlert.vue";
import XBadge from "@/components/kit/XBadge.vue";
import XBreadcrumb from "@/components/kit/XBreadcrumb.vue";
import XButton from "@/components/kit/XButton.vue";
import XButtonGroup from "@/components/kit/XButtonGroup.vue";
import XCard from "@/components/kit/XCard.vue";
import XChip from "@/components/kit/XChip.vue";
import XCollapsible from "@/components/kit/XCollapsible.vue";
import XContainer from "@/components/kit/XContainer.vue";
import XIcon from "@/components/kit/XIcon.vue";
import XKbd from "@/components/kit/XKbd.vue";
import XSeparator from "@/components/kit/XSeparator.vue";
import XSkeleton from "@/components/kit/XSkeleton.vue";
import XTabs from "@/components/kit/XTabs.vue";
import XToast from "@/components/kit/XToast.vue";
import { useToast } from "@/components/kit/XToast";

describe("XButton", () => {
  it("默认 solid / md / primary，应用原子 buttonVariants", () => {
    const wrapper = mount(XButton, { slots: { default: "确认" } });
    expect(wrapper.classes()).toContain("bg-primary");
    expect(wrapper.classes()).toContain("text-inverted");
    expect(wrapper.attributes("data-slot")).toBe("base");
    expect(wrapper.text()).toBe("确认");
  });

  it("soft × success 变体与语义色", () => {
    const wrapper = mount(XButton, { props: { variant: "soft", color: "success" }, slots: { default: "保存" } });
    expect(wrapper.classes()).toContain("bg-success/10");
    expect(wrapper.classes()).toContain("text-success");
  });

  it("xl 尺寸应用更大内边距与文字", () => {
    const wrapper = mount(XButton, { props: { size: "xl" }, slots: { default: "大按钮" } });
    expect(wrapper.classes()).toContain("px-3");
    expect(wrapper.classes()).toContain("py-2");
    expect(wrapper.classes()).toContain("text-base");
  });

  it("leading / trailing 插槽", () => {
    const wrapper = mount(XButton, {
      slots: { default: "操作", leading: "<i data-test='lead' />", trailing: "<i data-test='trail' />" },
    });
    expect(wrapper.find("[data-test='lead']").exists()).toBe(true);
    expect(wrapper.find("[data-test='trail']").exists()).toBe(true);
  });

  it("block 撑满宽度、square 使用方形等边距", () => {
    const block = mount(XButton, { props: { block: true }, slots: { default: "整行" } });
    expect(block.classes()).toContain("w-full");

    const square = mount(XButton, { props: { square: true, size: "lg" } });
    expect(square.classes()).toContain("p-2");
  });

  it("label 与 ui 插槽类名", () => {
    const wrapper = mount(XButton, {
      props: { label: "保存", ui: { base: "custom-base", label: "custom-label" } },
    });
    expect(wrapper.text()).toContain("保存");
    expect(wrapper.classes()).toContain("custom-base");
    expect(wrapper.find("span.custom-label").exists()).toBe(true);
  });

  it("active 配合 activeColor / activeVariant 覆盖颜色与样式", () => {
    const wrapper = mount(XButton, {
      props: { active: true, activeColor: "success", activeVariant: "soft" },
    });
    expect(wrapper.classes()).toContain("bg-success/10");
    expect(wrapper.classes()).toContain("text-success");
  });

  it("as 渲染为指定元素", () => {
    const wrapper = mount(XButton, {
      props: { as: "a" },
      attrs: { href: "/docs" },
      slots: { default: "文档" },
    });
    const root = wrapper.find("[data-slot='base']");
    expect(root.element.tagName).toBe("A");
    expect(root.attributes("href")).toBe("/docs");
    expect(root.classes()).toContain("bg-primary");
  });

  it("loadingAuto 点击返回 Promise 时禁用并显示旋转图标", async () => {
    let resolve!: () => void
    const wrapper = mount(XButton, {
      props: { loadingAuto: true },
      attrs: {
        onClick: () =>
          new Promise<void>((done) => {
            resolve = done
          }),
      },
      slots: { default: "提交" },
    });
    await wrapper.trigger("click");
    expect(wrapper.attributes("disabled")).toBeDefined();
    expect(wrapper.find("svg.animate-spin").exists()).toBe(true);

    resolve()
    await new Promise((done) => setTimeout(done, 0))
    await wrapper.vm.$nextTick()
    expect(wrapper.attributes("disabled")).toBeUndefined();
    expect(wrapper.find("svg.animate-spin").exists()).toBe(false);
  });

  it("原生事件透传", async () => {
    const onClick = vi.fn();
    const wrapper = mount(XButton, { attrs: { onClick }, slots: { default: "点击" } });
    await wrapper.trigger("click");
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe("XButtonGroup", () => {
  it("水平布局默认方向", () => {
    const wrapper = mount(XButtonGroup, { slots: { default: "<button>1</button><button>2</button>" } });
    expect(wrapper.attributes("data-slot")).toBe("button-group");
    expect(wrapper.attributes("data-orientation")).toBe("horizontal");
    expect(wrapper.classes()).toContain("flex-row");
  });

  it("垂直布局", () => {
    const wrapper = mount(XButtonGroup, { props: { orientation: "vertical" } });
    expect(wrapper.classes()).toContain("flex-col");
  });

  it("as 渲染为指定元素", () => {
    const wrapper = mount(XButtonGroup, { props: { as: "nav" } });
    expect(wrapper.element.tagName).toBe("NAV");
  });

  it("ui.root 类名应用到根元素", () => {
    const wrapper = mount(XButtonGroup, { props: { ui: { root: "custom-root" } } });
    expect(wrapper.classes()).toContain("custom-root");
  });
});

describe("XAlert", () => {
  it("color 与 variant 语义色类", () => {
    const wrapper = mount(XAlert, { props: { color: "success", variant: "soft", title: "完成" } });
    expect(wrapper.classes()).toContain("bg-success/10");
    expect(wrapper.classes()).toContain("text-success");
  });

  it("title 与 message 并存时 title 优先", () => {
    const wrapper = mount(XAlert, { props: { title: "新标题", message: "旧标题" } });
    expect(wrapper.text()).toContain("新标题");
    expect(wrapper.text()).not.toContain("旧标题");
    /* message 未声明为 prop，作为属性透传到根元素 */
    expect(wrapper.attributes("message")).toBe("旧标题");
  });

  it("orientation horizontal 应用到根元素", () => {
    const wrapper = mount(XAlert, { props: { orientation: "horizontal", title: "提示" } });
    expect(wrapper.attributes("data-orientation")).toBe("horizontal");
    expect(wrapper.classes()).toContain("items-center");
  });

  it("close 点击触发 update:open(false)，由父级控制显隐", async () => {
    const wrapper = mount(XAlert, { props: { close: true, title: "提示" } });
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted("update:open")).toEqual([[false]]);
    /* 组件不自行隐藏，仍渲染根元素 */
    expect(wrapper.find("[data-slot='root']").exists()).toBe(true);
  });

  it("actions 数组渲染为按钮列表", () => {
    const wrapper = mount(XAlert, {
      props: {
        title: "T",
        actions: [
          { label: "重试", color: "success" },
          { label: "忽略", variant: "ghost" },
        ],
      },
    });
    const texts = wrapper.findAll("button").map((node) => node.text());
    expect(texts).toContain("重试");
    expect(texts).toContain("忽略");
  });

  it("close 对象整体透传给关闭按钮", () => {
    const wrapper = mount(XAlert, {
      props: { title: "T", close: { variant: "soft", color: "info", label: "关闭提示" } },
    });
    const button = wrapper.find("button");
    expect(button.text()).toContain("关闭提示");
    expect(button.classes()).toContain("text-info");
  });

  it("leading 与 close 插槽接收 ui 参数", () => {
    const wrapper = mount(XAlert, {
      props: { title: "T", close: true, ui: { root: "custom-root" } },
      slots: {
        /* ui 是主题槽位函数集，调用 root()/close() 得到基础类 */
        leading: (slotProps: { ui?: { root?: () => string } }) => {
          expect(typeof slotProps.ui?.root).toBe("function");
          return h("i", { "data-test": "leading", class: slotProps.ui?.root?.() });
        },
        close: (slotProps: { ui?: { close?: () => string } }) => {
          expect(typeof slotProps.ui?.close).toBe("function");
          return h("button", { "data-test": "close", class: slotProps.ui?.close?.() });
        },
      },
    });
    expect(wrapper.find("[data-test='leading']").classes()).toContain("bg-primary");
    expect(wrapper.find("[data-test='close']").classes()).toContain("p-0");
  });

  it("ui 插槽类名应用到对应元素", () => {
    const wrapper = mount(XAlert, {
      props: {
        title: "T",
        description: "D",
        icon: "bell",
        ui: {
          root: "custom-root",
          wrapper: "custom-wrapper",
          title: "custom-title",
          description: "custom-description",
          icon: "custom-icon",
        },
      },
    });
    expect(wrapper.classes()).toContain("custom-root");
    expect(wrapper.find("[data-slot='wrapper']").classes()).toContain("custom-wrapper");
    expect(wrapper.find("[data-slot='title']").classes()).toContain("custom-title");
    expect(wrapper.find("[data-slot='description']").classes()).toContain("custom-description");
    expect(wrapper.find("[data-slot='icon']").classes()).toContain("custom-icon");
  });

  it("ui 插槽类名覆盖 avatar / avatarSize / actions / close", () => {
    const wrapper = mount(XAlert, {
      props: {
        title: "T",
        avatar: { text: "U" },
        close: true,
        ui: {
          avatar: "custom-avatar",
          avatarSize: "xl",
          actions: "custom-actions",
          close: "custom-close",
        },
      },
      slots: { actions: "<button>处理</button>" },
    });
    const avatar = wrapper.find("[data-slot='avatar']");
    expect(avatar.classes()).toContain("custom-avatar");
    expect(avatar.classes()).toContain("size-10");
    /* vertical 下 wrapper 内与外层各有一个 actions 容器 */
    expect(wrapper.findAll("[data-slot='actions'].custom-actions").length).toBe(2);
    expect(wrapper.find("button[data-slot='close']").classes()).toContain("custom-close");
  });

  it("avatar 渲染头像，as 渲染为指定元素", () => {
    const wrapper = mount(XAlert, { props: { avatar: { text: "U" }, title: "T", as: "section" } });
    expect(wrapper.element.tagName).toBe("SECTION");
    expect(wrapper.find("[data-slot='avatar']").text()).toContain("U");
  });
});

describe("XBadge", () => {
  it("label 渲染文本与语义色", () => {
    const wrapper = mount(XBadge, { props: { label: 5 } });
    expect(wrapper.text()).toBe("5");
    expect(wrapper.classes()).toContain("bg-primary");
    expect(wrapper.classes()).toContain("text-inverted");
  });

  it("label 原样渲染不截断", () => {
    const wrapper = mount(XBadge, { props: { label: 120 } });
    expect(wrapper.text()).toBe("120");
  });

  it("label 与 ui 插槽类名", () => {
    const wrapper = mount(XBadge, {
      props: { label: "在线", ui: { base: "custom-base", label: "custom-label" } },
    });
    expect(wrapper.text()).toBe("在线");
    expect(wrapper.classes()).toContain("custom-base");
    expect(wrapper.find("span.custom-label").exists()).toBe(true);
  });

  it("leadingIcon / trailingIcon 作为属性透传到根元素", () => {
    const wrapper = mount(XBadge, { props: { label: 3, leadingIcon: "bell", trailingIcon: "check" } });
    expect(wrapper.attributes("leadingicon")).toBe("bell");
    expect(wrapper.attributes("trailingicon")).toBe("check");
    expect(wrapper.find("svg").exists()).toBe(false);
  });

  it("avatar 作为属性渲染头像（Nuxt 原版行为）", () => {
    const wrapper = mount(XBadge, { props: { label: 1, avatar: { text: "U" } } });
    expect(wrapper.find("[data-slot='leadingAvatar']").exists()).toBe(true);
  });

  it("空徽标自动等边距", () => {
    const wrapper = mount(XBadge);
    expect(wrapper.classes()).toContain("p-1");
  });

  it("as 渲染为指定元素", () => {
    const wrapper = mount(XBadge, { props: { as: "a", label: 1 }, attrs: { href: "/docs" } });
    expect(wrapper.element.tagName).toBe("A");
    expect(wrapper.attributes("href")).toBe("/docs");
  });
});

describe("XChip", () => {
  it("渲染语义色芯片", () => {
    const wrapper = mount(XChip, { props: { color: "error" }, slots: { default: "失败" } });
    const base = wrapper.find("[data-slot='base']");
    expect(base.classes()).toContain("bg-error");
    expect(base.classes()).toContain("ring");
  });

  it("show=false 时只渲染定位壳", () => {
    const wrapper = mount(XChip, { props: { text: "1", show: false } });
    expect(wrapper.find("[data-slot='root']").exists()).toBe(true);
    expect(wrapper.find("[data-slot='base']").exists()).toBe(false);
  });

  it("text 与 content 插槽优先级", () => {
    const wrapper = mount(XChip, { props: { text: "5" } });
    expect(wrapper.text()).toBe("5");
    const withContent = mount(XChip, { props: { text: "5" }, slots: { content: "自定义" } });
    expect(withContent.text()).toBe("自定义");
  });

  it("默认角标定位，standalone 关闭绝对定位", () => {
    const wrapper = mount(XChip, { props: { text: "1" } });
    const base = wrapper.find("[data-slot='base']");
    expect(base.classes()).toContain("absolute");
    expect(base.classes()).toContain("top-0");
    expect(base.classes()).toContain("right-0");

    const standalone = mount(XChip, { props: { text: "1", standalone: true } });
    expect(standalone.find("[data-slot='base']").classes()).not.toContain("absolute");
  });

  it("inset 保持位置不加外移", () => {
    const wrapper = mount(XChip, { props: { text: "1", inset: true } });
    expect(wrapper.find("[data-slot='base']").classes()).not.toContain("-translate-y-1/2");
    expect(wrapper.find("[data-slot='base']").classes()).toContain("absolute");
  });

  it("ui 插槽类名与 as", () => {
    const wrapper = mount(XChip, {
      props: { text: "1", as: "span", ui: { root: "custom-root", base: "custom-base" } },
    });
    expect(wrapper.element.tagName).toBe("SPAN");
    expect(wrapper.classes()).toContain("custom-root");
    expect(wrapper.find("[data-slot='base']").classes()).toContain("custom-base");
    expect(wrapper.find("[data-slot='base']").text()).toBe("1");
  });
});

describe("XAvatar", () => {
  it("默认圆形 md，fallback 渲染插槽", () => {
    const wrapper = mount(XAvatar, { slots: { default: "U" } });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("rounded-full");
    expect(wrapper.find("[data-slot='root']").classes()).toContain("size-8");
    expect(wrapper.text()).toBe("U");
  });

  it("xl 尺寸", () => {
    const wrapper = mount(XAvatar, { props: { size: "xl" }, slots: { default: "A" } });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("size-10");
  });

  it("chip 布尔渲染默认圆点", () => {
    const wrapper = mount(XAvatar, { props: { text: "U", chip: true } });
    expect(wrapper.find("[data-slot='base']").exists()).toBe(true);
    expect(wrapper.find("[data-slot='base']").classes()).toContain("bg-primary");
  });

  it("chip 对象渲染文字徽标与位置", () => {
    const wrapper = mount(XAvatar, {
      props: { text: "U", chip: { text: 5, color: "success", position: "bottom-left" } },
    });
    expect(wrapper.text()).toContain("5");
    const base = wrapper.find("[data-slot='base']");
    expect(base.classes()).toContain("bottom-0");
    expect(base.classes()).toContain("left-0");
    expect(base.classes()).toContain("bg-success");
  });

  it("ui 插槽类名应用到 root 与 fallback", () => {
    const wrapper = mount(XAvatar, {
      props: { text: "U", ui: { root: "custom-root", fallback: "custom-fallback" } },
    });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("custom-root");
    expect(wrapper.find("[data-slot='fallback']").classes()).toContain("custom-fallback");
  });

  it("ui.image 类名应用到图片元素", () => {
    const wrapper = mount(XAvatar, {
      props: { src: "https://example.com/a.png", ui: { image: "custom-image" } },
    });
    expect(wrapper.find("[data-slot='image']").classes()).toContain("custom-image");
  });

  it("icon 属性渲染图标并应用 ui.icon", () => {
    const wrapper = mount(XAvatar, { props: { icon: "user", ui: { icon: "custom-icon" } } });
    expect(wrapper.find("[data-slot='icon']").element.tagName.toLowerCase()).toBe("svg");
    expect(wrapper.find("[data-slot='icon']").classes()).toContain("custom-icon");
  });

  it("as 渲染为指定元素（Nuxt 原版行为）", () => {
    const wrapper = mount(XAvatar, { props: { as: "a", text: "U" }, attrs: { href: "/me" } });
    expect(wrapper.element.tagName).toBe("A");
    expect(wrapper.find("[data-slot='fallback']").exists()).toBe(true);
  });
});

describe("XAvatarGroup", () => {
  it("超出 max 折叠为 +N", () => {
    const wrapper = mount(XAvatarGroup, {
      props: { max: 3 },
      slots: { default: "<i /><i /><i /><i />" },
    });
    expect(wrapper.text()).toContain("+1");
    expect(wrapper.findAll("i").length).toBe(3);
  });

  it("未超出 max 时无溢出标记", () => {
    const wrapper = mount(XAvatarGroup, {
      props: { max: 4 },
      slots: { default: "<i /><i />" },
    });
    expect(wrapper.text()).not.toMatch(/^\+/);
  });

  it("max 支持字符串", () => {
    const wrapper = mount(XAvatarGroup, {
      props: { max: "2" },
      slots: { default: "<i /><i /><i />" },
    });
    expect(wrapper.text()).toContain("+1");
  });

  it("size 透传给未指定 size 的子头像", () => {
    const wrapper = mount(XAvatarGroup, {
      props: { size: "xl" },
      slots: { default: () => [h(XAvatar, { text: "A" }), h(XAvatar, { text: "B", size: "xs" })] },
    });
    const avatars = wrapper.findAll("[data-slot='base']");
    /* 倒序渲染：DOM 顺序为 B(xs)、A(xl) */
    expect(avatars[0]?.classes()).toContain("size-6");
    expect(avatars[1]?.classes()).toContain("size-10");
  });

  it("ui 插槽类名应用到 root 与 base", () => {
    const wrapper = mount(XAvatarGroup, {
      props: { ui: { root: "custom-root", base: "custom-base" } },
      slots: { default: "<i /><i />" },
    });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("custom-root");
    expect(wrapper.findAll(".custom-base").length).toBe(2);
  });

  it("as 渲染为指定元素", () => {
    const wrapper = mount(XAvatarGroup, {
      props: { as: "ul" },
      slots: { default: "<i />" },
    });
    expect(wrapper.element.tagName).toBe("UL");
  });
});

describe("XCard", () => {
  it("渲染标题与内容插槽", () => {
    const wrapper = mount(XCard, {
      props: { title: "卡片标题" },
      slots: { default: "内容" },
    });
    expect(wrapper.text()).toContain("卡片标题");
    expect(wrapper.text()).toContain("内容");
    expect(wrapper.find("[data-slot='body']").exists()).toBe(true);
  });

  it("点击调用透传的 click 处理器", async () => {
    const onClick = vi.fn();
    const wrapper = mount(XCard, {
      attrs: { onClick },
      slots: { default: "内容" },
    });
    await wrapper.trigger("click");
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("variant 应用背景与分割线样式", () => {
    const solid = mount(XCard, { props: { variant: "solid" } });
    expect(solid.classes()).toContain("bg-inverted");
    expect(solid.classes()).toContain("text-inverted");

    const soft = mount(XCard, { props: { variant: "soft" } });
    expect(soft.classes()).toContain("bg-elevated/50");

    const outline = mount(XCard, { props: { variant: "outline" } });
    expect(outline.classes()).toContain("ring");
    expect(outline.classes()).toContain("ring-default");
  });

  it("ui 插槽类名应用到各分区元素", () => {
    const wrapper = mount(XCard, {
      props: {
        title: "标题",
        description: "描述",
        ui: {
          root: "custom-root",
          header: "custom-header",
          title: "custom-title",
          description: "custom-description",
          body: "custom-body",
          footer: "custom-footer",
        },
      },
      slots: { default: "内容", footer: "操作" },
    });
    expect(wrapper.classes()).toContain("custom-root");
    expect(wrapper.find("[data-slot='header']").classes()).toContain("custom-header");
    expect(wrapper.find("[data-slot='title']").classes()).toContain("custom-title");
    expect(wrapper.find("[data-slot='description']").classes()).toContain("custom-description");
    expect(wrapper.find("[data-slot='body']").classes()).toContain("custom-body");
    expect(wrapper.find("[data-slot='footer']").classes()).toContain("custom-footer");
  });

  it("header / footer 插槽覆盖默认头部与底部", () => {
    const wrapper = mount(XCard, {
      props: { title: "标题" },
      slots: {
        header: "<i data-test='header-slot' />",
        footer: "<i data-test='footer-slot' />",
      },
    });
    expect(wrapper.find("[data-test='header-slot']").exists()).toBe(true);
    expect(wrapper.find("[data-test='footer-slot']").exists()).toBe(true);
    expect(wrapper.text()).not.toContain("标题");
  });

  it("as 渲染为指定元素", () => {
    const wrapper = mount(XCard, { props: { as: "article" }, slots: { default: "内容" } });
    expect(wrapper.element.tagName).toBe("ARTICLE");
  });
});

describe("XCollapsible", () => {
  it("点击默认触发器展开 content 插槽内容", async () => {
    const wrapper = mount(XCollapsible, {
      slots: { default: "<button>toggle</button>", content: "折叠的内容区域" },
    });
    await wrapper.find("button").trigger("click");
    expect(wrapper.text()).toContain("折叠的内容区域");
  });

  it("ui 插槽类名应用到根与内容元素", () => {
    const wrapper = mount(XCollapsible, {
      props: { defaultOpen: true, ui: { root: "custom-root", content: "custom-content" } },
      slots: { content: "内容" },
    });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("custom-root");
    expect(wrapper.find("[data-slot='content']").classes()).toContain("custom-content");
  });

  it("unmountOnHide 为 false 时关闭仍保留内容节点", async () => {
    const wrapper = mount(XCollapsible, {
      props: { unmountOnHide: false },
      slots: { default: "<button>toggle</button>", content: "内容" },
    });
    await wrapper.find("button").trigger("click");
    await wrapper.find("button").trigger("click");
    expect(wrapper.find("[data-slot='content']").exists()).toBe(true);
  });

  it("as 渲染为指定元素", () => {
    const wrapper = mount(XCollapsible, { props: { as: "section" } });
    expect(wrapper.find("section").exists()).toBe(true);
  });
});

describe("XContainer", () => {
  it("默认宽度与 as 渲染", () => {
    const wrapper = mount(XContainer, { props: { as: "section" }, slots: { default: "内容" } });
    expect(wrapper.element.tagName).toBe("SECTION");
    expect(wrapper.classes()).toContain("max-w-(--ui-container)");
  });

  it("ui.base 类名应用到根元素", () => {
    const wrapper = mount(XContainer, {
      props: { ui: { base: "custom-base" } },
      slots: { default: "内容" },
    });
    expect(wrapper.classes()).toContain("custom-base");
  });
});

describe("XIcon", () => {
  it("按名称渲染 lucide 图标", () => {
    const wrapper = mount(XIcon, { props: { name: "star" } });
    expect(wrapper.find("svg").exists()).toBe(true);
  });

  it("mode=css 同样渲染 svg 图标", () => {
    const wrapper = mount(XIcon, { props: { name: "check", mode: "css" } });
    expect(wrapper.element.tagName).toBe("svg");
    expect(wrapper.find("svg").exists()).toBe(true);
  });

  it("customize 不影响默认渲染", () => {
    const wrapper = mount(XIcon, {
      props: {
        name: "check",
        customize: (svg: SVGSVGElement) => svg.setAttribute("stroke-width", "3.5"),
      },
    });
    expect(wrapper.find("svg").attributes("stroke-width")).toBe("2");
  });

  it("class 属性透传到图标元素", () => {
    const wrapper = mount(XIcon, { props: { name: "star" }, attrs: { class: "custom-root" } });
    expect(wrapper.find("svg").classes()).toContain("custom-root");
  });
});

describe("XKbd", () => {
  it("渲染 value 与插槽", () => {
    const wrapper = mount(XKbd, { props: { value: "⌘" } });
    expect(wrapper.text()).toBe("⌘");
  });

  it("as 渲染为指定元素", () => {
    const wrapper = mount(XKbd, { props: { as: "span" } });
    expect(wrapper.element.tagName).toBe("SPAN");
  });

  it("ui.base 类名应用到根元素", () => {
    const wrapper = mount(XKbd, { props: { ui: { base: "custom-base" } } });
    expect(wrapper.classes()).toContain("custom-base");
  });
});

describe("XSeparator", () => {
  it("水平分割线渲染 border 元素", () => {
    const wrapper = mount(XSeparator);
    expect(wrapper.find("[data-slot='root']").attributes("data-slot")).toBe("root");
    expect(wrapper.find("[data-slot='border']").classes()).toContain("border-t");
  });

  it("带标签时渲染标签与两条线", () => {
    const wrapper = mount(XSeparator, { props: { label: "分区" } });
    expect(wrapper.text()).toContain("分区");
    expect(wrapper.findAll("[data-slot='border']").length).toBe(2);
  });

  it("position=start 只保留右侧线条", () => {
    const wrapper = mount(XSeparator, { props: { label: "分区", position: "start" } });
    expect(wrapper.findAll("[data-slot='border']").length).toBe(1);
  });

  it("虚线样式使用边框绘制", () => {
    const wrapper = mount(XSeparator, { props: { type: "dashed" } });
    expect(wrapper.find("[data-slot='border']").classes()).toContain("border-dashed");
  });

  it("size 控制边框粗细", () => {
    const wrapper = mount(XSeparator, { props: { size: "md" } });
    expect(wrapper.find("[data-slot='border']").classes()).toContain("border-t-[3px]");
  });

  it("color 应用语义色边框", () => {
    const wrapper = mount(XSeparator, { props: { color: "error" } });
    expect(wrapper.find("[data-slot='border']").classes()).toContain("border-error");
  });

  it("icon 与 avatar 渲染在容器中", () => {
    const icon = mount(XSeparator, { props: { icon: "star" } });
    expect(icon.find("[data-slot='icon']").exists()).toBe(true);
    expect(icon.find("svg").exists()).toBe(true);

    const avatar = mount(XSeparator, { props: { avatar: { text: "A" } } });
    expect(avatar.find("[data-slot='avatar']").exists()).toBe(true);
    expect(avatar.find("[data-slot='avatar']").classes()).toContain("size-5");
  });

  it("ui 插槽类名应用到 root / border / container / label", () => {
    const wrapper = mount(XSeparator, {
      props: {
        label: "分区",
        ui: { root: "custom-root", border: "custom-border", container: "custom-container", label: "custom-label" },
      },
    });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("custom-root");
    expect(wrapper.findAll(".custom-border").length).toBe(2);
    expect(wrapper.find("[data-slot='container']").classes()).toContain("custom-container");
    expect(wrapper.find("[data-slot='label']").classes()).toContain("custom-label");
  });

  it("ui.avatarSize 控制头像尺寸", () => {
    const wrapper = mount(XSeparator, { props: { avatar: { text: "A" }, ui: { avatarSize: "lg" } } });
    expect(wrapper.find("[data-slot='avatar']").classes()).toContain("size-9");
  });

  it("decorative 不渲染无障碍角色", () => {
    const wrapper = mount(XSeparator, { props: { decorative: true } });
    expect(wrapper.find("[data-slot='root']").attributes("role")).toBe("none");
    expect(wrapper.find("[data-slot='root']").attributes("aria-orientation")).toBeUndefined();
  });

  it("as 渲染为指定元素", () => {
    const wrapper = mount(XSeparator, { props: { as: "hr" } });
    expect(wrapper.find("hr").exists()).toBe(true);
  });
});

describe("XSkeleton", () => {
  it("默认显示骨架元素", () => {
    const wrapper = mount(XSkeleton);
    expect(wrapper.element.tagName).toBe("DIV");
    expect(wrapper.classes()).toContain("animate-pulse");
    expect(wrapper.classes()).toContain("bg-elevated");
  });
  it("插槽内容直接渲染", () => {
    const wrapper = mount(XSkeleton, { slots: { default: "已加载" } });
    expect(wrapper.text()).toBe("已加载");
    expect(wrapper.classes()).toContain("animate-pulse");
  });
  it("骨架元素带无障碍标记", () => {
    const wrapper = mount(XSkeleton);
    expect(wrapper.attributes("aria-busy")).toBe("true");
    expect(wrapper.attributes("aria-label")).toBe("loading");
    expect(wrapper.attributes("aria-live")).toBe("polite");
    expect(wrapper.attributes("role")).toBe("alert");
  });
  it("ui.base 类名与 as 渲染", () => {
    const wrapper = mount(XSkeleton, {
      props: { as: "span", ui: { base: "custom-base" } },
    });
    expect(wrapper.element.tagName).toBe("SPAN");
    expect(wrapper.classes()).toContain("custom-base");
  });
});

describe("XAvatar 文字头像与语义色", () => {
  it("无图片时渲染 text 并应用语义色", () => {
    const wrapper = mount(XAvatar, { props: { text: "张三", color: "primary" } });
    expect(wrapper.text()).toContain("张三");
    expect(wrapper.find("[class*='bg-primary/10']").exists()).toBe(true);
  });

  it("头像组向未指定颜色的子头像透传语义色", () => {
    const wrapper = mount(XAvatarGroup, {
      props: { color: "success" },
      slots: { default: () => [h(XAvatar, { text: "A" }), h(XAvatar, { text: "B", color: "error" })] },
    });
    expect(wrapper.find("[class*='bg-success/10']").exists()).toBe(true);
    expect(wrapper.find("[class*='bg-error/10']").exists()).toBe(true);
  });
});

describe("XBadge square 与前后内容", () => {
  it("square 模式使用等边距", () => {
    const wrapper = mount(XBadge, { props: { square: true, size: "sm", label: 1 } });
    expect(wrapper.classes()).toContain("p-1");
  });

  it("渲染 leading 与 trailing 插槽", () => {
    const wrapper = mount(XBadge, {
      props: { label: 3 },
      slots: { leading: "<i data-test='lead' />", trailing: "<i data-test='trail' />" },
    });
    expect(wrapper.find("[data-test='lead']").exists()).toBe(true);
    expect(wrapper.find("[data-test='trail']").exists()).toBe(true);
  });
});

describe("XBreadcrumb 分隔符插槽与项图标", () => {
  it("separator 插槽优先于默认图标，项图标渲染在标题前", () => {
    const wrapper = mount(XBreadcrumb, {
      props: {
        items: [{ title: "首页", href: "/", icon: h("i", { "data-test": "home-icon" }) }, { title: "详情" }],
      },
      slots: { separator: () => h("i", { "data-test": "sep" }) },
    });
    expect(wrapper.find("[data-test='sep']").exists()).toBe(true);
    expect(wrapper.find("[data-test='home-icon']").exists()).toBe(true);
  });

  it("separatorIcon 属性替换默认分隔符图标", () => {
    const wrapper = mount(XBreadcrumb, {
      props: {
        separatorIcon: "chevron-down",
        items: [{ title: "首页", href: "/" }, { title: "详情" }],
      },
    });
    expect(wrapper.find("[data-slot='separatorIcon']").exists()).toBe(true);
  });

  it("labelKey 指定自定义标题字段", () => {
    const wrapper = mount(XBreadcrumb, {
      props: { labelKey: "name", items: [{ name: "工作台", href: "/" }, { name: "订单" }] },
    });
    expect(wrapper.text()).toContain("工作台");
    expect(wrapper.text()).toContain("订单");
  });
});

describe("XTabs 方向与尺寸", () => {
  const items = [
    { value: "a", label: "概览" },
    { value: "b", label: "明细" },
  ];

  it("vertical 时根容器纵向标记", () => {
    const wrapper = mount(XTabs, { props: { items, orientation: "vertical" } });
    expect(wrapper.find("[data-orientation='vertical']").exists()).toBe(true);
  });

  it("size 控制标签尺寸", () => {
    const wrapper = mount(XTabs, { props: { items, size: "lg" } });
    expect(wrapper.html()).toContain("px-3 py-2");
  });
});

describe("XToast", () => {
  /** XToast 依赖 reka-ui ToastProvider，open 通过属性透传给 ToastRoot */
  const mountToast = async (props: Record<string, any> = {}, slots: Record<string, any> = {}) => {
    const wrapper = mount(ToastProvider, {
      slots: {
        default: () => [h(XToast, { open: true, ...props }), h(ToastViewport)],
      },
    });
    /* 手动挂载插槽组件需要等待渲染完成 */
    await nextTick();
    await nextTick();
    if (Object.keys(slots).length) {
      wrapper.setProps({});
      await nextTick();
    }
    return wrapper;
  };

  it("渲染 root / wrapper / title / description / icon / actions / close 结构", async () => {
    const wrapper = await mountToast({
      title: "操作成功",
      description: "数据已保存。",
      icon: "circle-check",
      actions: [{ label: "撤销" }],
    });
    expect(wrapper.find("[data-slot='root']").exists()).toBe(true);
    expect(wrapper.find("[data-slot='wrapper']").exists()).toBe(true);
    expect(wrapper.find("[data-slot='title']").text()).toBe("操作成功");
    expect(wrapper.find("[data-slot='description']").text()).toBe("数据已保存。");
    expect(wrapper.find("[data-slot='icon']").exists()).toBe(true);
    expect(wrapper.find("[data-slot='icon']").element.tagName.toLowerCase()).toBe("svg");
    expect(wrapper.find("[data-slot='actions']").exists()).toBe(true);
    expect(wrapper.find("button[data-slot='close']").exists()).toBe(true);
  });

  it("ui 插槽类名应用到 root / wrapper / title / description / icon / actions / close", async () => {
    const wrapper = await mountToast({
      title: "标题",
      description: "说明",
      icon: "check",
      ui: {
        root: "custom-root",
        wrapper: "custom-wrapper",
        title: "custom-title",
        description: "custom-description",
        icon: "custom-icon",
        actions: "custom-actions",
        close: "custom-close",
      },
    });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("custom-root");
    expect(wrapper.find("[data-slot='wrapper']").classes()).toContain("custom-wrapper");
    expect(wrapper.find("[data-slot='title']").classes()).toContain("custom-title");
    expect(wrapper.find("[data-slot='description']").classes()).toContain("custom-description");
    expect(wrapper.find("[data-slot='icon']").classes()).toContain("custom-icon");
    expect(wrapper.find("[data-slot='actions']").classes()).toContain("custom-actions");
    expect(wrapper.find("button[data-slot='close']").classes()).toContain("custom-close");
  });

  it("avatar 与 ui.avatarSize 渲染头像并覆盖尺寸", async () => {
    const wrapper = await mountToast({
      title: "头像",
      avatar: { src: "https://example.com/a.png", alt: "U" },
      ui: { avatar: "custom-avatar", avatarSize: "lg" },
    });
    const avatar = wrapper.find("[data-slot='avatar']");
    expect(avatar.exists()).toBe(true);
    expect(avatar.classes()).toContain("custom-avatar");
    expect(avatar.classes()).toContain("size-9");
  });

  it("orientation=horizontal 时 actions 与 close 在外侧容器", async () => {
    const wrapper = await mountToast({
      title: "横向",
      orientation: "horizontal",
      actions: [{ label: "确定" }],
    });
    const outer = wrapper.findAll("[data-slot='actions']");
    expect(outer.length).toBe(1);
    expect(outer.at(0)?.text()).toContain("确定");
    expect(wrapper.find("[data-slot='wrapper']").findAll("[data-slot='actions']").length).toBe(0);
  });

  it("插槽 title / description / actions / close 自定义渲染", async () => {
    const wrapper = mount(ToastProvider, {
      slots: {
        default: () => [
          h(
            XToast,
            { open: true, duration: 0 },
            {
              title: () => h("em", "自定义标题"),
              description: () => h("em", "自定义说明"),
              actions: () => h("button", "自定义操作"),
              close: () => h("button", { "aria-label": "自定义关闭" }, "×"),
            },
          ),
          h(ToastViewport),
        ],
      },
    });
    await nextTick();
    await nextTick();
    expect(wrapper.find("[data-slot='title'] em").text()).toBe("自定义标题");
    expect(wrapper.find("[data-slot='description'] em").text()).toBe("自定义说明");
    expect(wrapper.find("[data-slot='actions'] button").text()).toBe("自定义操作");
    expect(wrapper.find("button[aria-label='自定义关闭']").exists()).toBe(true);
  });

  it("progress 渲染进度条，progress=false 不渲染", async () => {
    const withProgress = await mountToast({ title: "进度", duration: 5000 });
    expect(withProgress.find("[data-slot='progress']").classes()).toContain("absolute");
    expect(withProgress.find("[data-slot='progress']").classes()).toContain("inset-x-0");

    const withoutProgress = await mountToast({ title: "无进度", progress: false });
    expect(withoutProgress.find("[data-slot='progress']").exists()).toBe(false);
  });

  it("ui.progress 与 progress.ui 应用到进度条", async () => {
    const wrapper = await mountToast({
      title: "进度",
      duration: 5000,
      ui: { progress: "custom-progress" },
      progress: { color: "success", ui: { base: "custom-base" } },
    });
    const progress = wrapper.find("[data-slot='progress']");
    expect(progress.exists()).toBe(true);
    expect(progress.classes()).toContain("custom-progress");
    expect(progress.find("[data-slot='base']").classes()).toContain("custom-base");
  });

  it("close=false 不渲染关闭按钮，close 对象透传给按钮", async () => {
    const closed = await mountToast({ title: "无关闭", close: false });
    expect(closed.find("button[data-slot='close']").exists()).toBe(false);

    const custom = await mountToast({ title: "自定义", close: { size: "lg" } });
    const closeButton = custom.find("button[data-slot='close']");
    expect(closeButton.exists()).toBe(true);
    expect(closeButton.classes()).toContain("text-sm");
    expect(closeButton.classes()).toContain("gap-2");
  });

  it("useToast().show 返回 id，dismiss 可调用", () => {
    const toastApi = useToast();
    const id = toastApi.show({ title: "通知" });
    expect(typeof id).toBe("number");
    expect(() => toastApi.dismiss(id)).not.toThrow();
  });
});
