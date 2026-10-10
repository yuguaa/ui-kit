import { enableAutoUnmount, mount } from "@vue/test-utils";
import { afterEach, describe, expect, it } from "vitest";
import XAccordion from "@/components/kit/XAccordion.vue";
import XCarousel from "@/components/kit/XCarousel.vue";
import XScrollArea from "@/components/kit/XScrollArea.vue";
import XSplitter from "@/components/kit/XSplitter.vue";

enableAutoUnmount(afterEach);

/** 轮询等待条件满足,供插件动态加载后的异步渲染使用 */
async function until(predicate: () => boolean, timeout = 2000): Promise<void> {
  const start = Date.now();
  while (!predicate()) {
    if (Date.now() - start > timeout) throw new Error("等待超时");
    await new Promise((resolve) => setTimeout(resolve, 10));
  }
}

describe("XAccordion 字段映射、图标与插槽", () => {
  it("labelKey / valueKey 字段映射，content 插槽渲染", async () => {
    const wrapper = mount(XAccordion, {
      props: {
        items: [{ name: "标题 A", id: "item-a" }, { name: "标题 B", id: "item-b" }],
        labelKey: "name",
        valueKey: "id",
      },
      slots: { content: "组件库说明" },
    });
    await wrapper.findAll("button").find((b) => b.text().includes("标题 A"))?.trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["item-a"]);
    expect(wrapper.text()).toContain("组件库说明");
  });

  it("leading / trailing / body 插槽渲染", () => {
    const wrapper = mount(XAccordion, {
      props: { items: [{ label: "标题" }], modelValue: "0" },
      slots: {
        leading: "<i data-test='leading' />",
        trailing: "<i data-test='trailing' />",
        body: "<span data-test='body'>正文</span>",
      },
    });
    expect(wrapper.find("[data-test='leading']").exists()).toBe(true);
    expect(wrapper.find("[data-test='trailing']").exists()).toBe(true);
    expect(wrapper.find("[data-test='body']").text()).toBe("正文");
  });

  it("ui 插槽类名逐键生效", () => {
    const wrapper = mount(XAccordion, {
      props: {
        /* trailingIcon 用 lucide 可解析的图标名,验证插槽类名注入 */
        items: [{ label: "标题", icon: "star", trailingIcon: "star", content: "内容" }],
        modelValue: "0",
        ui: {
          root: "ui-root",
          item: "ui-item",
          header: "ui-header",
          trigger: "ui-trigger",
          content: "ui-content",
          body: "ui-body",
          leadingIcon: "ui-leading-icon",
          trailingIcon: "ui-trailing-icon",
          label: "ui-label",
        },
      },
    });
    expect(wrapper.find(".ui-root").exists()).toBe(true);
    expect(wrapper.find(".ui-item").exists()).toBe(true);
    expect(wrapper.find(".ui-header").exists()).toBe(true);
    expect(wrapper.find(".ui-trigger").exists()).toBe(true);
    expect(wrapper.find(".ui-content").exists()).toBe(true);
    expect(wrapper.find(".ui-body").exists()).toBe(true);
    expect(wrapper.find(".ui-leading-icon").exists()).toBe(true);
    expect(wrapper.find(".ui-trailing-icon").exists()).toBe(true);
    expect(wrapper.find(".ui-label").exists()).toBe(true);
  });

  it("multiple 模式可同时展开多项", () => {
    const wrapper = mount(XAccordion, {
      props: {
        items: [{ label: "标题 A", content: "内容 A" }, { label: "标题 B", content: "内容 B" }],
        multiple: true,
        defaultValue: ["0", "1"],
      },
    });
    expect(wrapper.text()).toContain("内容 A");
    expect(wrapper.text()).toContain("内容 B");
  });

  it("collapsible=false 时不可收起已展开项", async () => {
    const wrapper = mount(XAccordion, {
      props: { items: [{ label: "标题", content: "正文" }], collapsible: false },
    });
    await wrapper.find("button").trigger("click");
    await wrapper.find("button").trigger("click");
    expect(wrapper.text()).toContain("正文");
  });

  it("disabled 项应用禁用样式", () => {
    const wrapper = mount(XAccordion, {
      props: { items: [{ label: "标题", disabled: true }] },
    });
    const trigger = wrapper.find("button");
    expect(trigger.attributes("disabled")).toBeDefined();
    expect(trigger.classes()).toContain("cursor-not-allowed");
  });
});

describe("XCarousel 插件能力与 ui 插槽", () => {
  const items = [{ key: "1" }, { key: "2" }];

  it("fade 模式只显示当前项", async () => {
    const wrapper = mount(XCarousel, { props: { items, fade: true } });
    /* fade 插件动态加载后写入 slide 行内样式,等待其生效 */
    await until(() => {
      const style = wrapper.findAll("[role=group]")[1]?.attributes("style") ?? "";
      return style.includes("opacity");
    });
    const slides = wrapper.findAll("[role=group]");
    expect(slides[0]!.attributes("style")).toContain("opacity: 1");
    expect(slides[1]!.attributes("style")).toContain("opacity: 0");
  });

  it("prev / next 配置应用到按钮,图标属性透传", () => {
    const wrapper = mount(XCarousel, {
      props: {
        items,
        arrows: true,
        prev: { variant: "soft", color: "success", label: "后退" },
        next: { variant: "soft", color: "success", label: "前进" },
        prevIcon: "star",
        nextIcon: "star",
      },
    });
    const prevButton = wrapper.find("[data-slot='prev']");
    const nextButton = wrapper.find("[data-slot='next']");
    expect(prevButton.classes()).toContain("bg-success/10");
    expect(nextButton.classes()).toContain("bg-success/10");
    expect(prevButton.text()).toContain("后退");
    expect(nextButton.text()).toContain("前进");
    /* XButton 不声明 icon prop,prevIcon / nextIcon 透传为按钮上的属性 */
    expect(prevButton.attributes("icon")).toBe("star");
    expect(nextButton.attributes("icon")).toBe("star");
  });

  it("ui 插槽类名逐键生效", async () => {
    const wrapper = mount(XCarousel, {
      attachTo: document.body,
      props: {
        items,
        dots: true,
        arrows: true,
        ui: {
          root: "ui-root",
          viewport: "ui-viewport",
          container: "ui-container",
          item: "ui-item",
          controls: "ui-controls",
          arrows: "ui-arrows",
          prev: "ui-prev",
          next: "ui-next",
          dots: "ui-dots",
          dot: "ui-dot",
        },
      },
    });
    expect(wrapper.find(".ui-root").exists()).toBe(true);
    expect(wrapper.find(".ui-viewport").exists()).toBe(true);
    expect(wrapper.find(".ui-container").exists()).toBe(true);
    expect(wrapper.find(".ui-item").exists()).toBe(true);
    expect(wrapper.find(".ui-controls").exists()).toBe(true);
    expect(wrapper.find(".ui-arrows").exists()).toBe(true);
    expect(wrapper.find(".ui-prev").exists()).toBe(true);
    expect(wrapper.find(".ui-next").exists()).toBe(true);
    expect(wrapper.find(".ui-dots").exists()).toBe(true);
    /* embla 的 init 事件异步发出,等待指示点渲染完成 */
    await until(() => wrapper.find(".ui-dot").exists());
    expect(wrapper.find(".ui-dot").exists()).toBe(true);
  });

  it("wheelGestures 插件挂载,滚轮事件触发 select", async () => {
    const wrapper = mount(XCarousel, { props: { items, wheelGestures: true } });
    const emblaApi = (wrapper.vm as any).emblaApi;
    /* wheelGestures 插件动态加载,等待挂载完成 */
    await until(() => !!emblaApi?.plugins()?.wheelGestures);
    await wrapper.find("[role=region]").trigger("wheel", { deltaY: 120 });
    expect(wrapper.emitted("select")).toBeTruthy();
  });

  it("autoScroll 与 autoHeight 正常渲染", () => {
    const wrapper = mount(XCarousel, {
      props: { items, autoScroll: { speed: 2 }, autoHeight: true },
    });
    expect(wrapper.find("[role=region]").exists()).toBe(true);
  });

  it("classNames 类名钩子加在视口元素", async () => {
    const wrapper = mount(XCarousel, { props: { items, classNames: true } });
    const viewport = wrapper.find("[data-slot=viewport]");
    /* classNames 插件动态加载,等待类名写入 */
    await until(() => viewport.classes().includes("is-draggable"));
    expect(viewport.classes()).toContain("is-draggable");
  });

  it("classNames 对象形态自定义类名", async () => {
    const wrapper = mount(XCarousel, { props: { items, classNames: { draggable: "my-draggable" } } });
    const viewport = wrapper.find("[data-slot=viewport]");
    await until(() => viewport.classes().includes("my-draggable"));
    expect(viewport.classes()).toContain("my-draggable");
  });

  it("select 事件在初始化时触发", async () => {
    const wrapper = mount(XCarousel, { props: { items } });
    await until(() => (wrapper.emitted("select")?.length ?? 0) > 0);
    expect(wrapper.emitted("select")?.[0]).toEqual([0]);
  });
});

describe("XScrollArea items、虚拟滚动与阴影", () => {
  it("items 数组渲染并应用 ui 插槽类名", () => {
    const wrapper = mount(XScrollArea, {
      props: {
        items: [{ id: "a", text: "第一行" }, { id: "b", text: "第二行" }],
        ui: { root: "ui-root", viewport: "ui-viewport", item: "ui-item" },
      },
      slots: { default: "<span>{{ item.text }}</span>" },
    });
    expect(wrapper.text()).toContain("第一行");
    expect(wrapper.find(".ui-root").exists()).toBe(true);
    expect(wrapper.find(".ui-viewport").exists()).toBe(true);
    expect(wrapper.findAll(".ui-item").length).toBe(2);
  });

  it("virtualize 按需渲染可视窗口", () => {
    const items = Array.from({ length: 100 }, (_, i) => ({ id: i, text: `第 ${i} 行` }));
    const wrapper = mount(XScrollArea, {
      props: {
        items,
        height: 200,
        /* jsdom 无布局,通过 initialRect 与外部滚动元素提供视口尺寸 */
        virtualize: {
          estimateSize: 20,
          overscan: 4,
          initialRect: { width: 200, height: 200 },
          getScrollElement: () => null,
        },
      },
      slots: { default: "<span>{{ item.text }}</span>" },
    });
    const rendered = wrapper.findAll("[data-index]");
    expect(rendered.length).toBeGreaterThan(0);
    expect(rendered.length).toBeLessThan(100);
    expect(wrapper.text()).toContain("第 0 行");
  });

  it("shadow 开启不破坏渲染", () => {
    const wrapper = mount(XScrollArea, {
      props: { shadow: { size: 12 }, height: 100, items: [{ id: 1, text: "内容" }] },
      slots: { default: "<span>{{ item.text }}</span>" },
    });
    expect(wrapper.text()).toContain("内容");
  });
});

describe("XSplitter items 形态、disabled 与 ui 插槽", () => {
  it("items 数组渲染多个面板与拖拽条", () => {
    const wrapper = mount(XSplitter, {
      props: { items: [{ id: "a" }, { id: "b" }, { id: "c" }] },
      slots: {
        "panel-0": "<div>面板一</div>",
        "panel-1": "<div>面板二</div>",
        "panel-2": "<div>面板三</div>",
      },
    });
    expect(wrapper.text()).toContain("面板一");
    expect(wrapper.text()).toContain("面板三");
    expect(wrapper.findAll("[role=separator]").length).toBe(2);
  });

  it("ui 插槽类名逐键生效", () => {
    const wrapper = mount(XSplitter, {
      props: { items: [{ id: "a" }, { id: "b" }], ui: { root: "ui-root", panel: "ui-panel", handle: "ui-handle" } },
      slots: { "panel-0": "<div>面板一</div>", "panel-1": "<div>面板二</div>" },
    });
    expect(wrapper.find(".ui-root").exists()).toBe(true);
    expect(wrapper.findAll(".ui-panel").length).toBe(2);
    expect(wrapper.find(".ui-handle").exists()).toBe(true);
  });

  it("disabled 锁定拖拽条", () => {
    const wrapper = mount(XSplitter, {
      props: { items: [{ id: "a" }, { id: "b" }], disabled: true },
      slots: { "panel-0": "<div>面板一</div>", "panel-1": "<div>面板二</div>" },
    });
    expect(wrapper.find("[role=separator]").attributes("data-panel-resize-handle-enabled")).toBe("false");
  });
});
