import { h } from "vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import XBreadcrumb from "@/components/kit/XBreadcrumb.vue";
import XLink from "@/components/kit/XLink.vue";

describe("XLink", () => {
  it("inactiveClass 仅在非激活态应用", () => {
    const inactive = mount(XLink, { props: { to: "/docs", inactiveClass: "custom-inactive" }, slots: { default: "文档" } });
    expect(inactive.classes()).toContain("custom-inactive");

    const active = mount(XLink, { props: { to: "/docs", active: true, inactiveClass: "custom-inactive" }, slots: { default: "文档" } });
    expect(active.classes()).not.toContain("custom-inactive");
    expect(active.classes()).toContain("text-primary/75");
  });

  it("ui.base 应用到根元素", () => {
    const wrapper = mount(XLink, { props: { to: "/docs", ui: { base: "custom-base" } }, slots: { default: "文档" } });
    expect(wrapper.classes()).toContain("custom-base");
  });

  it("as 渲染为指定元素", () => {
    const wrapper = mount(XLink, { props: { as: "span" }, slots: { default: "占位链接" } });
    expect(wrapper.find("span").exists()).toBe(true);
  });

  it("leading / trailing 插槽渲染图标", () => {
    const wrapper = mount(XLink, {
      props: { to: "/docs" },
      slots: {
        default: "文档",
        leading: h("i", { "data-test": "lead" }),
        trailing: h("i", { "data-test": "trail" }),
      },
    });
    expect(wrapper.find("[data-test='lead']").exists()).toBe(true);
    expect(wrapper.find("[data-test='trail']").exists()).toBe(true);
  });

  it("disabled 时移除 href 并标记 aria-disabled", () => {
    const wrapper = mount(XLink, { props: { to: "/docs", disabled: true }, slots: { default: "禁用" } });
    expect(wrapper.attributes("href")).toBeUndefined();
    expect(wrapper.attributes("aria-disabled")).toBe("true");
    expect(wrapper.classes()).toContain("opacity-75");
  });

  it("透传的 onClick 数组处理器逐个调用", () => {
    const first = vi.fn();
    const second = vi.fn();
    const wrapper = mount(XLink, {
      attrs: { onClick: [first, second] },
      slots: { default: "文档" },
    });
    void wrapper.trigger("click");
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledTimes(1);
  });
});

describe("XBreadcrumb", () => {
  const items = [{ title: "首页", href: "/" }, { title: "组件", href: "/components" }, { title: "面包屑" }];

  it("末项默认激活：aria-current 与 color 文字色", () => {
    const wrapper = mount(XBreadcrumb, { props: { items, color: "primary" } });
    const lastLink = wrapper.findAll("[data-slot='link']").at(-1);
    expect(lastLink?.attributes("aria-current")).toBe("page");
    expect(lastLink?.classes()).toContain("text-primary");
    expect(lastLink?.classes()).toContain("font-semibold");

    /* 中间项为链接且非激活：muted 文字 + hover 过渡 */
    const firstLink = wrapper.findAll("[data-slot='link']").at(0);
    expect(firstLink?.attributes("href")).toBe("/");
    expect(firstLink?.classes()).toContain("text-muted-foreground");
    expect(firstLink?.classes()).toContain("hover:text-foreground");
  });

  it("item.active 强制激活指定项", () => {
    const wrapper = mount(XBreadcrumb, {
      props: { items: [{ title: "首页", href: "/", active: true }, { title: "组件" }] },
    });
    const firstLink = wrapper.findAll("[data-slot='link']").at(0);
    expect(firstLink?.classes()).toContain("font-semibold");
  });

  it("color 控制激活项文字色", () => {
    const wrapper = mount(XBreadcrumb, { props: { items, color: "success" } });
    const lastLink = wrapper.findAll("[data-slot='link']").at(-1);
    expect(lastLink?.classes()).toContain("text-success");
  });

  it("ui 插槽类名应用到对应元素", () => {
    const wrapper = mount(XBreadcrumb, {
      props: {
        items,
        ui: {
          root: "custom-root",
          list: "custom-list",
          item: "custom-item",
          link: "custom-link",
          linkLabel: "custom-linkLabel",
          separator: "custom-separator",
          separatorIcon: "custom-separatorIcon",
        },
      },
    });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("custom-root");
    expect(wrapper.find("[data-slot='list']").classes()).toContain("custom-list");
    expect(wrapper.find("[data-slot='item']").classes()).toContain("custom-item");
    expect(wrapper.find("[data-slot='link']").classes()).toContain("custom-link");
    expect(wrapper.find("[data-slot='linkLabel']").classes()).toContain("custom-linkLabel");
    expect(wrapper.find("[data-slot='separator']").classes()).toContain("custom-separator");
    expect(wrapper.find("[data-slot='separatorIcon']").classes()).toContain("custom-separatorIcon");
  });

  it("as 默认 nav，可渲染为其他元素", () => {
    const wrapper = mount(XBreadcrumb, { props: { items } });
    expect(wrapper.find("nav").exists()).toBe(true);
    expect(wrapper.attributes("aria-label")).toBe("breadcrumb");

    const custom = mount(XBreadcrumb, { props: { items, as: "div" } });
    expect(custom.find("div[aria-label='breadcrumb']").exists()).toBe(true);
  });
});
