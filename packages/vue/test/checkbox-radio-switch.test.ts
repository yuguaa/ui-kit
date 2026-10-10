import { Star } from "@lucide/vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import XCheckbox from "@/components/kit/XCheckbox.vue";
import XRadioGroup from "@/components/kit/XRadioGroup.vue";
import XSwitch from "@/components/kit/XSwitch.vue";

describe("XCheckbox 变体 / indicator / ui", () => {
  it("variant card 时根为 label,ui 插槽类名注入全部元素", () => {
    const wrapper = mount(XCheckbox, {
      props: {
        modelValue: true,
        variant: "card",
        label: "卡片",
        description: "说明",
        ui: {
          root: "custom-root",
          container: "custom-container",
          base: "custom-base",
          indicator: "custom-indicator",
          icon: "custom-icon",
          wrapper: "custom-wrapper",
          label: "custom-label",
          description: "custom-description",
        },
      },
    });
    const root = wrapper.find("[data-slot='root']");
    expect(root.element.tagName).toBe("LABEL");
    expect(root.classes()).toContain("custom-root");
    expect(root.classes()).toContain("rounded-lg");
    expect(wrapper.find("[data-slot='container']").classes()).toContain("custom-container");
    expect(wrapper.find("[data-slot='base']").classes()).toContain("custom-base");
    expect(wrapper.find("[data-slot='indicator']").classes()).toContain("custom-indicator");
    expect(wrapper.find("[data-slot='icon']").classes()).toContain("custom-icon");
    expect(wrapper.find("[data-slot='wrapper']").classes()).toContain("custom-wrapper");
    expect(wrapper.find("[data-slot='label']").classes()).toContain("custom-label");
    expect(wrapper.find("[data-slot='description']").classes()).toContain("custom-description");
  });

  it("indicator hidden 时控件隐藏,图标显示在 label 上方", () => {
    const wrapper = mount(XCheckbox, {
      props: { indicator: "hidden", icon: Star, label: "星标" },
    });
    expect(wrapper.find("[data-slot='base']").classes()).toContain("sr-only");
    const icon = wrapper.find("[data-slot='wrapper'] > [data-slot='icon']");
    expect(icon.exists()).toBe(true);
    expect(wrapper.find("[data-slot='wrapper']").classes()).toContain("flex-col");
  });

  it("required 在 label 后加星号,highlight 常显聚焦环", () => {
    const wrapper = mount(XCheckbox, {
      props: { required: true, highlight: true, color: "success", label: "必选项" },
    });
    expect(wrapper.find("[data-slot='label']").classes()).toContain("after:content-['*']");
    expect(wrapper.find("[data-slot='base']").classes()).toContain("ring-success");
  });

  it("as 渲染为指定元素", () => {
    const wrapper = mount(XCheckbox, { props: { as: "span" } });
    expect(wrapper.find("[data-slot='root']").element.tagName).toBe("SPAN");
  });

  it("选中切换触发 change 事件并携带值", async () => {
    const wrapper = mount(XCheckbox);
    await wrapper.find("[data-slot='base']").trigger("click");
    const event = wrapper.emitted("change")?.[0]?.[0] as Event & { target: { value: boolean } };
    expect(event.target.value).toBe(true);
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([true]);
  });
});

describe("XRadioGroup orientation / legend / 字段映射 / ui", () => {
  const plans = [
    { id: "basic", name: "基础版", desc: "个人使用" },
    { id: "pro", name: "专业版", desc: "企业级功能" },
  ];

  it("字段映射与 legend,ui 插槽类名注入全部元素", () => {
    const wrapper = mount(XRadioGroup, {
      props: {
        modelValue: "pro",
        options: plans,
        legend: "订阅方案",
        valueKey: "id",
        labelKey: "name",
        descriptionKey: "desc",
        ui: {
          root: "custom-root",
          fieldset: "custom-fieldset",
          legend: "custom-legend",
          item: "custom-item",
          container: "custom-container",
          base: "custom-base",
          indicator: "custom-indicator",
          wrapper: "custom-wrapper",
          label: "custom-label",
          icon: "custom-icon",
          description: "custom-description",
        },
      },
    });
    expect(wrapper.text()).toContain("订阅方案");
    expect(wrapper.text()).toContain("基础版");
    expect(wrapper.text()).toContain("企业级功能");
    expect(wrapper.find("[data-slot='root']").classes()).toContain("custom-root");
    expect(wrapper.find("[data-slot='fieldset']").classes()).toContain("custom-fieldset");
    expect(wrapper.find("[data-slot='legend']").classes()).toContain("custom-legend");
    expect(wrapper.find("[data-slot='item']").classes()).toContain("custom-item");
    expect(wrapper.find("[data-slot='container']").classes()).toContain("custom-container");
    expect(wrapper.find("[data-slot='base']").classes()).toContain("custom-base");
    expect(wrapper.find("[data-slot='indicator']").classes()).toContain("custom-indicator");
    expect(wrapper.find("[data-slot='wrapper']").classes()).toContain("custom-wrapper");
    expect(wrapper.find("[data-slot='label']").classes()).toContain("custom-label");
    expect(wrapper.find("[data-slot='description']").classes()).toContain("custom-description");
  });

  it("orientation horizontal 与 vertical 布局", () => {
    const horizontal = mount(XRadioGroup, { props: { options: plans, orientation: "horizontal" } });
    expect(horizontal.find("[data-slot='fieldset']").classes()).toContain("flex-row");
    const vertical = mount(XRadioGroup, { props: { options: plans } });
    expect(vertical.find("[data-slot='fieldset']").classes()).toContain("flex-col");
  });

  it("color 与 size、highlight 生效", () => {
    const wrapper = mount(XRadioGroup, {
      props: { modelValue: "basic", options: plans, valueKey: "id", color: "success", size: "sm", highlight: true },
    });
    expect(wrapper.find("[data-slot='indicator']").classes()).toContain("bg-success");
    expect(wrapper.find("[data-slot='base']").classes()).toContain("size-3.5");
    expect(wrapper.find("[data-slot='base']").classes()).toContain("ring-success");
  });

  it("indicator hidden 时显示 option.icon 且控件隐藏", () => {
    const wrapper = mount(XRadioGroup, {
      props: {
        modelValue: "basic",
        options: [{ value: "basic", label: "基础版", icon: Star }],
        indicator: "hidden",
      },
    });
    expect(wrapper.find("[data-slot='base']").classes()).toContain("sr-only");
    expect(wrapper.find("[data-slot='icon']").exists()).toBe(true);
  });

  it("required 在 legend 后加星号,单项 ui 覆盖", () => {
    const wrapper = mount(XRadioGroup, {
      props: {
        modelValue: "basic",
        options: [{ value: "basic", label: "基础版", ui: { item: "item-custom", label: "label-custom" } }],
        legend: "标题",
        required: true,
      },
    });
    expect(wrapper.find("[data-slot='legend']").classes()).toContain("after:content-['*']");
    expect(wrapper.find("[data-slot='item']").classes()).toContain("item-custom");
    expect(wrapper.find("[data-slot='label']").classes()).toContain("label-custom");
  });

  it("点击单项触发 update:modelValue 与 change", async () => {
    const wrapper = mount(XRadioGroup, { props: { options: plans, valueKey: "id" } });
    await wrapper.findAll("[data-slot='base']")[1]!.trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["pro"]);
    const event = wrapper.emitted("change")?.[0]?.[0] as Event & { target: { value: string } };
    expect(event.target.value).toBe("pro");
  });

  it("button 变体注入 ui.item,as 渲染为指定元素", () => {
    const wrapper = mount(XRadioGroup, {
      props: { options: plans, valueKey: "id", variant: "button", as: "section", ui: { item: "btn-item" } },
    });
    expect(wrapper.find("[data-slot='root']").element.tagName).toBe("SECTION");
    expect(wrapper.find("[data-slot='item']").classes()).toContain("btn-item");
  });
});

describe("XSwitch color / 图标 / highlight / ui", () => {
  it("ui 插槽类名注入全部元素,color 生效", () => {
    const wrapper = mount(XSwitch, {
      props: {
        modelValue: true,
        color: "success",
        label: "通知",
        description: "说明",
        ui: {
          root: "custom-root",
          base: "custom-base",
          container: "custom-container",
          thumb: "custom-thumb",
          icon: "custom-icon",
          wrapper: "custom-wrapper",
          label: "custom-label",
          description: "custom-description",
        },
      },
    });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("custom-root");
    expect(wrapper.find("[data-slot='base']").classes()).toContain("custom-base");
    expect(wrapper.find("[data-slot='base']").classes()).toContain("data-[state=checked]:bg-success");
    expect(wrapper.find("[data-slot='container']").classes()).toContain("custom-container");
    expect(wrapper.find("[data-slot='thumb']").classes()).toContain("custom-thumb");
    expect(wrapper.find("[data-slot='wrapper']").classes()).toContain("custom-wrapper");
    expect(wrapper.find("[data-slot='label']").classes()).toContain("custom-label");
    expect(wrapper.find("[data-slot='description']").classes()).toContain("custom-description");
  });

  it("checkedIcon / uncheckedIcon 按状态渲染", async () => {
    const wrapper = mount(XSwitch, {
      props: { modelValue: true, checkedIcon: Star },
    });
    expect(wrapper.find("[data-slot='icon']").exists()).toBe(true);
    expect(wrapper.find("[data-slot='icon']").classes()).toContain("group-data-[state=checked]:opacity-100");
    await wrapper.setProps({ modelValue: false, checkedIcon: undefined, uncheckedIcon: Star });
    expect(wrapper.find("[data-slot='icon']").classes()).toContain("group-data-[state=unchecked]:opacity-100");
  });

  it("loading 时显示 loadingIcon 并阻止交互", () => {
    const wrapper = mount(XSwitch, { props: { loading: true } });
    expect(wrapper.find("[data-slot='base']").attributes("disabled")).toBeDefined();
    expect(wrapper.find("[data-slot='icon']").classes()).toContain("animate-spin");
  });

  it("highlight 常显聚焦环,required 在 label 后加星号", () => {
    const wrapper = mount(XSwitch, {
      props: { highlight: true, color: "info", required: true, label: "必选项" },
    });
    expect(wrapper.find("[data-slot='base']").classes()).toContain("ring-info");
    expect(wrapper.find("[data-slot='label']").classes()).toContain("after:content-['*']");
  });

  it("as 渲染为指定元素,切换触发 change", async () => {
    const wrapper = mount(XSwitch, { props: { as: "section" } });
    expect(wrapper.find("[data-slot='root']").element.tagName).toBe("SECTION");
    await wrapper.find("[data-slot='base']").trigger("click");
    const event = wrapper.emitted("change")?.[0]?.[0] as Event & { target: { value: boolean } };
    expect(event.target.value).toBe(true);
  });
});
