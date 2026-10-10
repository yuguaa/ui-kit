import { enableAutoUnmount, mount } from "@vue/test-utils";
import { nextTick } from "vue";
import { afterEach, describe, expect, it } from "vitest";
import XModal from "@/components/kit/XModal.vue";
import XDrawer from "@/components/kit/XDrawer.vue";
import XSlideover from "@/components/kit/XSlideover.vue";
import XPopover from "@/components/kit/XPopover.vue";
import XTooltip from "@/components/kit/XTooltip.vue";

enableAutoUnmount(afterEach);

/** 浮层内容默认渲染在 body 下，断言统一查 document */
function bodyQuery(selector: string): Element | null {
  return document.body.querySelector(selector);
}

/** 等待浮层内容渲染到 body（reka Presence 状态机异步推进） */
async function waitForSelector(selector: string): Promise<boolean> {
  for (let i = 0; i < 20; i++) {
    if (bodyQuery(selector)) return true
    await nextTick()
  }
  return false
}

describe("XModal", () => {
  it("ui 插槽类名覆盖全部主题键", async () => {
    mount(XModal, {
      props: {
        open: true,
        title: "标题",
        description: "说明",
        ui: {
          overlay: "custom-overlay",
          content: "custom-content",
          header: "custom-header",
          wrapper: "custom-wrapper",
          body: "custom-body",
          footer: "custom-footer",
          title: "custom-title",
          description: "custom-description",
          close: "custom-close",
        },
      },
      slots: { body: "正文", footer: "底部" },
    });
    expect(await waitForSelector("[data-slot='overlay'].custom-overlay")).toBe(true);
    expect(await waitForSelector("[data-slot='content'].custom-content")).toBe(true);
    expect(bodyQuery("[data-slot='header'].custom-header")).not.toBeNull();
    expect(bodyQuery("[data-slot='wrapper'].custom-wrapper")).not.toBeNull();
    expect(bodyQuery("[data-slot='body'].custom-body")).not.toBeNull();
    expect(bodyQuery("[data-slot='footer'].custom-footer")).not.toBeNull();
    expect(bodyQuery("[data-slot='title'].custom-title")).not.toBeNull();
    expect(bodyQuery("[data-slot='description'].custom-description")).not.toBeNull();
    expect(bodyQuery("[data-slot='close'].custom-close")).not.toBeNull();
  });

  it("fullscreen 内容占满全屏", async () => {
    mount(XModal, { props: { open: true, fullscreen: true, title: "全屏" } });
    expect(await waitForSelector("[data-slot='content']")).toBe(true);
    expect(bodyQuery("[data-slot='content']")?.className).toContain("inset-0");
    expect(bodyQuery("[data-slot='content']")?.className).not.toContain("max-w-lg");
  });

  it("scrollable 遮罩可滚动且内容相对定位", async () => {
    mount(XModal, { props: { open: true, scrollable: true, title: "滚动" } });
    expect(await waitForSelector("[data-slot='overlay']")).toBe(true);
    expect(bodyQuery("[data-slot='overlay']")?.className).toContain("overflow-y-auto");
    expect(bodyQuery("[data-slot='content']")?.className).toContain("relative");
  });

  it("dismissible 为 false 时按 Esc 发射 close:prevent", async () => {
    const wrapper = mount(XModal, { props: { open: true, dismissible: false, title: "锁定" } });
    expect(await waitForSelector("[data-slot='content']")).toBe(true);
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true, cancelable: true }));
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("close:prevent")?.length).toBeGreaterThan(0);
  });

  it("header / body / footer 插槽渲染", async () => {
    mount(XModal, {
      props: { open: true, title: "标题" },
      slots: { header: "自定义头", body: "正文", footer: "底部" },
    });
    expect(await waitForSelector("[data-slot='content']")).toBe(true);
    expect(document.body.textContent).toContain("自定义头");
    expect(document.body.textContent).toContain("正文");
    expect(document.body.textContent).toContain("底部");
  });

  it("actions 插槽渲染在默认头部", async () => {
    mount(XModal, {
      props: { open: true, title: "标题" },
      slots: { actions: "操作区" },
    });
    expect(await waitForSelector("[data-slot='content']")).toBe(true);
    expect(document.body.textContent).toContain("操作区");
  });

  it("portal 为 false 时内容渲染在组件树内", async () => {
    const wrapper = mount(XModal, {
      props: { open: true, portal: false, title: "就地" },
      attachTo: document.body,
    });
    expect(await waitForSelector("[data-slot='content']")).toBe(true);
    expect(wrapper.element.querySelector("[data-slot='content']")).not.toBeNull();
  });

  it("close 插槽替换默认关闭按钮", async () => {
    mount(XModal, {
      props: { open: true, title: "标题" },
      slots: { close: "<button data-test='custom-close'>自定义关闭</button>" },
    });
    expect(await waitForSelector("[data-test='custom-close']")).toBe(true);
    expect(bodyQuery("[data-slot='close']")).toBeNull();
  });

  it("defaultOpen 未受控时直接打开", async () => {
    mount(XModal, { props: { defaultOpen: true, title: "默认打开" } });
    expect(await waitForSelector("[data-slot='content']")).toBe(true);
  });
});

describe("XDrawer", () => {
  it("ui 插槽类名覆盖全部主题键", async () => {
    mount(XDrawer, {
      props: {
        open: true,
        close: true,
        title: "标题",
        description: "说明",
        ui: {
          overlay: "custom-overlay",
          content: "custom-content",
          handle: "custom-handle",
          container: "custom-container",
          header: "custom-header",
          wrapper: "custom-wrapper",
          title: "custom-title",
          description: "custom-description",
          actions: "custom-actions",
          body: "custom-body",
          footer: "custom-footer",
          close: "custom-close",
        },
      },
      slots: { actions: "操作", body: "正文", footer: "底部" },
    });
    expect(await waitForSelector("[data-slot='content']")).toBe(true);
    expect(bodyQuery("[data-slot='overlay'].custom-overlay")).not.toBeNull();
    expect(bodyQuery("[data-slot='content'].custom-content")).not.toBeNull();
    expect(bodyQuery("[data-slot='handle'].custom-handle")).not.toBeNull();
    expect(bodyQuery("[data-slot='container'].custom-container")).not.toBeNull();
    expect(bodyQuery("[data-slot='header'].custom-header")).not.toBeNull();
    expect(bodyQuery("[data-slot='wrapper'].custom-wrapper")).not.toBeNull();
    expect(bodyQuery("[data-slot='title'].custom-title")).not.toBeNull();
    expect(bodyQuery("[data-slot='description'].custom-description")).not.toBeNull();
    expect(bodyQuery("[data-slot='actions'].custom-actions")).not.toBeNull();
    expect(bodyQuery("[data-slot='body'].custom-body")).not.toBeNull();
    expect(bodyQuery("[data-slot='footer'].custom-footer")).not.toBeNull();
    expect(bodyQuery("[data-slot='close'].custom-close")).not.toBeNull();
  });

  it("direction 控制滑出方向，inset 内嵌", async () => {
    mount(XDrawer, { props: { open: true, direction: "right", inset: true, title: "右抽屉" } });
    expect(await waitForSelector("[data-slot='content']")).toBe(true);
    const content = bodyQuery("[data-slot='content']");
    expect(content?.className).toContain("data-[swipe-direction=right]:right-4");
    expect(content?.className).toContain("rounded-lg");
  });

  it("handle 渲染拖拽把手，close 渲染关闭按钮", async () => {
    mount(XDrawer, { props: { open: true, title: "带把手", close: true } });
    expect(await waitForSelector("[data-slot='content']")).toBe(true);
    expect(bodyQuery("[data-slot='handle']")).not.toBeNull();
    expect(bodyQuery("[data-slot='close']")).not.toBeNull();
  });

  it("close 插槽替换默认关闭按钮", async () => {
    mount(XDrawer, {
      props: { open: true, title: "标题" },
      slots: { close: "<button data-test='custom-close'>自定义关闭</button>" },
    });
    expect(await waitForSelector("[data-test='custom-close']")).toBe(true);
    expect(bodyQuery("[data-slot='close']")).toBeNull();
  });

  it("dismissible 为 false 时点击外部不关闭", async () => {
    const wrapper = mount(XDrawer, {
      props: { open: true, dismissible: false, title: "锁定" },
      attachTo: document.body,
    });
    expect(await waitForSelector("[data-slot='content']")).toBe(true);
    /* reka 的外部点击监听在 setTimeout(0) 之后注册，先等待宏任务 */
    await new Promise((resolve) => setTimeout(resolve, 0));
    document.body.dispatchEvent(new MouseEvent("pointerdown", { bubbles: true }));
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("update:open")).toBeUndefined();
    expect(wrapper.emitted("close:prevent")?.length).toBeGreaterThan(0);
  });

  it("defaultOpen 未受控时直接打开", async () => {
    mount(XDrawer, { props: { defaultOpen: true, title: "默认打开" } });
    expect(await waitForSelector("[data-slot='content']")).toBe(true);
  });
});

describe("XSlideover", () => {
  it("ui 插槽类名覆盖全部主题键", async () => {
    mount(XSlideover, {
      props: {
        open: true,
        title: "标题",
        description: "说明",
        ui: {
          overlay: "custom-overlay",
          content: "custom-content",
          header: "custom-header",
          wrapper: "custom-wrapper",
          body: "custom-body",
          footer: "custom-footer",
          title: "custom-title",
          description: "custom-description",
          close: "custom-close",
        },
      },
      slots: { body: "正文", footer: "底部" },
    });
    expect(await waitForSelector("[data-slot='content']")).toBe(true);
    expect(bodyQuery("[data-slot='overlay'].custom-overlay")).not.toBeNull();
    expect(bodyQuery("[data-slot='content'].custom-content")).not.toBeNull();
    expect(bodyQuery("[data-slot='header'].custom-header")).not.toBeNull();
    expect(bodyQuery("[data-slot='wrapper'].custom-wrapper")).not.toBeNull();
    expect(bodyQuery("[data-slot='body'].custom-body")).not.toBeNull();
    expect(bodyQuery("[data-slot='footer'].custom-footer")).not.toBeNull();
    expect(bodyQuery("[data-slot='title'].custom-title")).not.toBeNull();
    expect(bodyQuery("[data-slot='description'].custom-description")).not.toBeNull();
    expect(bodyQuery("[data-slot='close'].custom-close")).not.toBeNull();
  });

  it("side 控制滑入方向", async () => {
    mount(XSlideover, { props: { open: true, side: "left", title: "左滑" } });
    expect(await waitForSelector("[data-slot='content']")).toBe(true);
    expect(bodyQuery("[data-slot='content']")?.getAttribute("data-side")).toBe("left");
    expect(bodyQuery("[data-slot='content']")?.className).toContain("left-0");
  });

  it("inset 内嵌保留边距", async () => {
    mount(XSlideover, { props: { open: true, inset: true, title: "内嵌" } });
    expect(await waitForSelector("[data-slot='content']")).toBe(true);
    expect(bodyQuery("[data-slot='content']")?.className).toContain("right-4");
    expect(bodyQuery("[data-slot='content']")?.className).toContain("rounded-lg");
  });

  it("close 插槽替换默认关闭按钮", async () => {
    mount(XSlideover, {
      props: { open: true, title: "标题" },
      slots: { close: "<button data-test='custom-close'>自定义关闭</button>" },
    });
    expect(await waitForSelector("[data-test='custom-close']")).toBe(true);
    expect(bodyQuery("[data-slot='close']")).toBeNull();
  });
});

describe("XPopover", () => {
  it("ui 插槽类名与箭头", async () => {
    mount(XPopover, {
      props: { open: true, arrow: true, ui: { content: "custom-content", arrow: "custom-arrow" } },
      slots: { default: "<button>触发器</button>", content: "气泡内容" },
    });
    expect(await waitForSelector("[data-slot='content']")).toBe(true);
    expect(bodyQuery("[data-slot='content'].custom-content")).not.toBeNull();
    expect(bodyQuery("[data-slot='arrow'].custom-arrow")).not.toBeNull();
  });

  it("anchor 插槽渲染锚点元素", async () => {
    mount(XPopover, {
      props: { open: true },
      slots: { default: "<button>触发器</button>", anchor: "<span data-test='anchor'>锚点</span>", content: "内容" },
      attachTo: document.body,
    });
    expect(await waitForSelector("[data-slot='content']")).toBe(true);
    expect(document.querySelector("[data-test='anchor']")).not.toBeNull();
  });

  it("dismissible 为 false 时按 Esc 发射 close:prevent", async () => {
    const wrapper = mount(XPopover, {
      props: { open: true, dismissible: false },
      slots: { default: "<button>触发器</button>", content: "内容" },
    });
    expect(await waitForSelector("[data-slot='content']")).toBe(true);
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true, cancelable: true }));
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("close:prevent")?.length).toBeGreaterThan(0);
  });

  it("mode 为 hover 时使用悬停触发", async () => {
    mount(XPopover, {
      props: { mode: "hover", openDelay: 0 },
      slots: { default: "<button>悬停</button>", content: "悬停内容" },
      attachTo: document.body,
    });
    const trigger = document.querySelector("button");
    trigger?.dispatchEvent(new MouseEvent("pointerenter", { bubbles: true }));
    /* 悬停打开延迟走 setTimeout，先等待宏任务 */
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(await waitForSelector("[data-slot='content']")).toBe(true);
    expect(document.body.textContent).toContain("悬停内容");
  });

  it("未受控时点击触发器打开", async () => {
    mount(XPopover, {
      slots: { default: "<button>触发器</button>", content: "点击内容" },
      attachTo: document.body,
    });
    document.querySelector("button")?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(await waitForSelector("[data-slot='content']")).toBe(true);
    expect(document.body.textContent).toContain("点击内容");
  });
});

describe("XTooltip", () => {
  it("ui 插槽类名与 kbds 快捷键", async () => {
    mount(XTooltip, {
      props: {
        open: true,
        text: "保存",
        kbds: ["⌘", "S"],
        ui: { content: "custom-content", text: "custom-text", kbds: "custom-kbds", kbdsSize: "md" },
      },
      slots: { default: "<button>保存按钮</button>" },
    });
    expect(await waitForSelector("[data-slot='content']")).toBe(true);
    expect(bodyQuery("[data-slot='content'].custom-content")).not.toBeNull();
    expect(bodyQuery("[data-slot='text'].custom-text")).not.toBeNull();
    expect(bodyQuery("[data-slot='kbds'].custom-kbds")).not.toBeNull();
    expect(bodyQuery("[data-slot='kbds'] kbd")).not.toBeNull();
    expect(bodyQuery("[data-slot='kbds'] kbd")?.className).toContain("h-6");
  });

  it("content 插槽替换默认内容", async () => {
    mount(XTooltip, {
      props: { open: true },
      slots: { default: "<button>按钮</button>", content: "<b>自定义内容</b>" },
    });
    expect(await waitForSelector("[data-slot='content']")).toBe(true);
    expect(document.body.querySelector("b")?.textContent).toBe("自定义内容");
  });

  it("portal 为 false 时内容渲染在组件树内", async () => {
    const wrapper = mount(XTooltip, {
      props: { open: true, portal: false, text: "就地" },
      slots: { default: "<button>按钮</button>" },
      attachTo: document.body,
    });
    expect(await waitForSelector("[data-slot='content']")).toBe(true);
    expect(wrapper.element.querySelector("[data-slot='content']")).not.toBeNull();
  });
});
