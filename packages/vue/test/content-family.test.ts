import { enableAutoUnmount, mount } from "@vue/test-utils";
import { nextTick } from "vue";
import { afterEach, describe, expect, it } from "vitest";
import XAccordion from "@/components/kit/XAccordion.vue";
import XCarousel from "@/components/kit/XCarousel.vue";
import XScrollArea from "@/components/kit/XScrollArea.vue";
import XSplitter from "@/components/kit/XSplitter.vue";

enableAutoUnmount(afterEach);

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
        items: [{ label: "标题", icon: "star", content: "内容" }],
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

  it("fade 模式只显示当前项", () => {
    const wrapper = mount(XCarousel, { props: { items, fade: true } });
    const slides = wrapper.findAll("[role=group]");
    expect(slides[0]!.classes()).toContain("opacity-100");
    expect(slides[1]!.classes()).toContain("opacity-0");
  });

  it("prev / next 配置应用到按钮，图标可自定义", () => {
    const wrapper = mount(XCarousel, {
      props: {
        items,
        prev: { variant: "soft", color: "success", label: "后退" },
        next: { variant: "soft", color: "success", label: "前进" },
        prevIcon: "star",
        nextIcon: "star",
      },
    });
    const prevButton = wrapper.find("[aria-label='上一张']");
    const nextButton = wrapper.find("[aria-label='下一张']");
    expect(prevButton.classes()).toContain("bg-success/10");
    expect(nextButton.classes()).toContain("bg-success/10");
    expect(prevButton.text()).toContain("后退");
    expect(nextButton.text()).toContain("前进");
  });

  it("ui 插槽类名逐键生效", async () => {
    const wrapper = mount(XCarousel, {
      attachTo: document.body,
      props: {
        items,
        dots: true,
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
    /* embla 的 init 事件异步发出，等待指示点渲染完成 */
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(wrapper.find(".ui-dot").exists()).toBe(true);
  });

  it("wheelGestures 滚轮触发切换", async () => {
    const wrapper = mount(XCarousel, { props: { items, wheelGestures: true } });
    wrapper.find("[role=region]").trigger("wheel", { deltaY: 120 });
    await nextTick();
    expect(wrapper.emitted("next")).toBeTruthy();
  });

  it("autoScroll 与 autoHeight 正常渲染", () => {
    const wrapper = mount(XCarousel, {
      props: { items, autoScroll: { speed: 2 }, autoHeight: true },
    });
    expect(wrapper.find("[role=region]").exists()).toBe(true);
  });

  it("classNames 类名钩子加在视口元素", async () => {
    const wrapper = mount(XCarousel, { props: { items, classNames: true } });
    await nextTick();
    const viewport = wrapper.find("[data-slot=viewport]");
    expect(viewport.classes()).toContain("is-loop");
    expect(viewport.classes()).toContain("is-draggable");
  });

  it("classNames 对象形态自定义类名", async () => {
    const wrapper = mount(XCarousel, { props: { items, classNames: { loop: "my-loop" } } });
    await nextTick();
    const viewport = wrapper.find("[data-slot=viewport]");
    expect(viewport.classes()).toContain("my-loop");
    expect(viewport.classes()).toContain("is-draggable");
  });

  it("select 事件在初始化时触发", async () => {
    const wrapper = mount(XCarousel, { props: { items } });
    await nextTick();
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
      props: { items, height: 200, virtualize: { estimateSize: 20, overscan: 4 } },
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
