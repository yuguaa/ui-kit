import { mount } from "@vue/test-utils";
import { defineComponent, h } from "vue";
import { describe, expect, it } from "vitest";
import XListbox from "@/components/kit/XListbox.vue";

const items = [
  { id: "a", name: "苹果", description: "脆甜多汁" },
  { id: "b", name: "香蕉" },
];

describe("XListbox 字段映射与选择", () => {
  it("labelKey / valueKey 控制标签与值字段，点击发出 update:modelValue", async () => {
    const wrapper = mount(XListbox, {
      props: { items, labelKey: "name", valueKey: "id" },
    });
    expect(wrapper.text()).toContain("苹果");
    await wrapper.find("[data-slot='item']").trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["a"]);
  });

  it("descriptionKey 渲染说明文字", () => {
    const wrapper = mount(XListbox, {
      props: { items, labelKey: "name", descriptionKey: "description" },
    });
    expect(wrapper.find("[data-slot='itemDescription']").text()).toBe("脆甜多汁");
  });

  it("受控 modelValue 渲染选中态与选中图标", () => {
    const wrapper = mount(XListbox, {
      props: { items, labelKey: "name", valueKey: "id", modelValue: "a" },
    });
    const item = wrapper.find("[data-slot='item']");
    expect(item.attributes("aria-selected")).toBe("true");
    expect(item.find("[data-slot='itemTrailingIcon']").exists()).toBe(true);
  });

  it("multiple 支持多选", async () => {
    const wrapper = mount(XListbox, {
      props: { items, labelKey: "name", valueKey: "id", multiple: true },
    });
    await wrapper.findAll("[data-slot='item']")[0]!.trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([["a"]]);
  });

  it("item.onSelect 回调在选中时执行", async () => {
    let selected = "";
    const wrapper = mount(XListbox, {
      props: {
        items: [{ id: "a", name: "苹果", onSelect: () => (selected = "a") }],
        labelKey: "name",
        valueKey: "id",
      },
    });
    await wrapper.find("[data-slot='item']").trigger("click");
    expect(selected).toBe("a");
  });
});

describe("XListbox 过滤与尺寸", () => {
  it("filter 渲染搜索框并可过滤", async () => {
    const wrapper = mount(XListbox, {
      props: { items, labelKey: "name", valueKey: "id", filter: true },
    });
    await wrapper.find("[data-slot='input']").setValue("香");
    const labels = wrapper.findAll("[data-slot='itemLabel']").map((el) => el.text());
    expect(labels).toEqual(["香蕉"]);
  });

  it("filterFields 指定过滤字段", async () => {
    const wrapper = mount(XListbox, {
      props: {
        items: [
          { id: "a", name: "苹果", alias: "红富士" },
          { id: "b", name: "香蕉" },
        ],
        labelKey: "name",
        valueKey: "id",
        filter: true,
        filterFields: ["alias"],
      },
    });
    await wrapper.find("[data-slot='input']").setValue("红富士");
    const labels = wrapper.findAll("[data-slot='itemLabel']").map((el) => el.text());
    expect(labels).toEqual(["苹果"]);
  });

  it("ignoreFilter 关闭内置过滤", async () => {
    const wrapper = mount(XListbox, {
      props: { items, labelKey: "name", valueKey: "id", filter: true, ignoreFilter: true },
    });
    await wrapper.find("[data-slot='input']").setValue("不存在");
    expect(wrapper.findAll("[data-slot='item']").length).toBe(2);
  });

  it("size 控制项尺寸类名", () => {
    const wrapper = mount(XListbox, {
      props: { items, labelKey: "name", valueKey: "id", size: "xs" },
    });
    expect(wrapper.find("[data-slot='item']").classes()).toContain("p-1");
  });
});

describe("XListbox 图标与加载", () => {
  it("loadingIcon 渲染旋转的默认图标", () => {
    const wrapper = mount(XListbox, {
      props: { items, labelKey: "name", valueKey: "id", loading: true },
    });
    expect(wrapper.find("[data-slot='loadingIcon']").classes()).toContain("animate-spin");
  });

  it("loadingIcon 支持自定义组件", () => {
    const CustomIcon = defineComponent({ render: () => h("i", { class: "custom-loading" }) });
    const wrapper = mount(XListbox, {
      props: { items, labelKey: "name", valueKey: "id", loading: true, loadingIcon: CustomIcon },
    });
    expect(wrapper.find("[data-slot='loading'] .custom-loading").exists()).toBe(true);
  });

  it("loading 插槽替换默认加载内容", () => {
    const wrapper = mount(XListbox, {
      props: { items, labelKey: "name", valueKey: "id", loading: true },
      slots: { loading: "<i class='custom-loading' />" },
    });
    expect(wrapper.find(".custom-loading").exists()).toBe(true);
  });

  it("item.icon 渲染前置图标", () => {
    const wrapper = mount(XListbox, {
      props: { items: [{ id: "a", name: "苹果", icon: "check" }], labelKey: "name", valueKey: "id" },
    });
    expect(wrapper.find("svg[data-slot='itemLeadingIcon']").exists()).toBe(true);
  });
});

describe("XListbox 分组与空态", () => {
  it("二维数组分组渲染 group / label / separator", () => {
    const wrapper = mount(XListbox, {
      props: {
        items: [
          [{ id: "g1", type: "label", label: "水果" }, { id: "a", label: "苹果" }],
          [{ id: "s1", type: "separator" }, { id: "b", label: "蔬菜" }],
        ],
      },
    });
    expect(wrapper.findAll("[data-slot='group']").length).toBe(2);
    expect(wrapper.find("[data-slot='label']").text()).toBe("水果");
    expect(wrapper.find("[data-slot='separator']").exists()).toBe(true);
  });

  it("empty 插槽替换默认空态", () => {
    const wrapper = mount(XListbox, {
      props: { items: [] },
      slots: { empty: "<i class='custom-empty' />" },
    });
    expect(wrapper.find(".custom-empty").exists()).toBe(true);
  });
});

describe("XListbox ui 插槽与 as", () => {
  it("ui 插槽类名应用到各元素", () => {
    const wrapper = mount(XListbox, {
      props: {
        items: [{ id: "a", label: "苹果" }],
        valueKey: "id",
        modelValue: "a",
        filter: true,
        ui: {
          root: "custom-root",
          input: "custom-input",
          content: "custom-content",
          group: "custom-group",
          item: "custom-item",
          itemLabel: "custom-item-label",
          itemTrailingIcon: "custom-trailing-icon",
        },
      },
    });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("custom-root");
    expect(wrapper.find("[data-slot='input']").classes()).toContain("custom-input");
    expect(wrapper.find("[data-slot='content']").classes()).toContain("custom-content");
    expect(wrapper.find("[data-slot='group']").classes()).toContain("custom-group");
    expect(wrapper.find("[data-slot='item']").classes()).toContain("custom-item");
    expect(wrapper.find("[data-slot='itemLabel']").classes()).toContain("custom-item-label");
    expect(wrapper.find("[data-slot='itemTrailingIcon']").classes()).toContain("custom-trailing-icon");
  });

  it("as 渲染为指定根元素", () => {
    const wrapper = mount(XListbox, {
      props: { items: [{ id: "a", label: "苹果" }], valueKey: "id", as: "section" },
    });
    expect(wrapper.find("[data-slot='root']").element.tagName).toBe("SECTION");
  });
});
