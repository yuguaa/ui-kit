import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";
import { defineComponent, h } from "vue";
import XSelectMenu from "@/components/kit/XSelectMenu.vue";

const items = [
  { label: "苹果", value: "apple" },
  { label: "香蕉", value: "banana", description: "热带水果" },
];

/* 弹出内容渲染到 body，测试间清空，菜单内断言查 document */
beforeEach(() => {
  document.body.innerHTML = "";
});

function bodyItems() {
  return Array.from(document.querySelectorAll("[data-slot='item']"));
}

async function openMenu(wrapper: ReturnType<typeof mount>) {
  await wrapper.find("button").trigger("click");
  await new Promise((resolve) => setTimeout(resolve, 0));
  await wrapper.vm.$nextTick();
}

async function settle(wrapper: ReturnType<typeof mount>) {
  await new Promise((resolve) => setTimeout(resolve, 0));
  await wrapper.vm.$nextTick();
}

describe("XSelectMenu 字段映射与选择", () => {
  it("labelKey / valueKey 控制标签与值字段", async () => {
    const wrapper = mount(XSelectMenu, {
      props: {
        items: [
          { id: "a", name: "苹果" },
          { id: "b", name: "香蕉" },
        ],
        labelKey: "name",
        valueKey: "id",
        modelValue: "a",
      },
      attachTo: document.body,
    });
    expect(wrapper.find("button").text()).toContain("苹果");
    await openMenu(wrapper);
    const option = bodyItems().find((el) => el.textContent === "香蕉");
    option?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await settle(wrapper);
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["b"]);
    wrapper.unmount();
  });

  it("descriptionKey 渲染选项说明文字", async () => {
    const wrapper = mount(XSelectMenu, {
      props: { items, valueKey: "value" },
      attachTo: document.body,
    });
    await openMenu(wrapper);
    expect(document.querySelector("[data-slot='itemDescription']")?.textContent).toBe("热带水果");
    wrapper.unmount();
  });

  it("defaultValue 作为非受控初始值", () => {
    const wrapper = mount(XSelectMenu, {
      props: { items, valueKey: "value", defaultValue: "apple" },
      attachTo: document.body,
    });
    expect(wrapper.find("button").text()).toContain("苹果");
    wrapper.unmount();
  });

  it("无选中值时显示占位文字", () => {
    const wrapper = mount(XSelectMenu, {
      props: { items, valueKey: "value", placeholder: "请选择水果" },
      attachTo: document.body,
    });
    expect(wrapper.find("[data-slot='placeholder']").text()).toBe("请选择水果");
    wrapper.unmount();
  });
});

describe("XSelectMenu 搜索与模式", () => {
  it("searchInput 默认渲染菜单内搜索框并按 filterFields 过滤", async () => {
    const wrapper = mount(XSelectMenu, {
      props: {
        items: [
          { label: "苹果", value: "apple", alias: "红富士" },
          { label: "香蕉", value: "banana" },
        ],
        valueKey: "value",
        filterFields: ["alias"],
      },
      attachTo: document.body,
    });
    await openMenu(wrapper);
    const input = document.querySelector("[data-slot='input']") as HTMLInputElement;
    expect(input).toBeTruthy();
    input.value = "红富士";
    input.dispatchEvent(new Event("input", { bubbles: true }));
    await settle(wrapper);
    const labels = Array.from(document.querySelectorAll("[data-slot='itemLabel']")).map((el) => el.textContent);
    expect(labels).toContain("苹果");
    expect(labels).not.toContain("香蕉");
    wrapper.unmount();
  });

  it("searchInput=false 不渲染搜索框", async () => {
    const wrapper = mount(XSelectMenu, {
      props: { items, valueKey: "value", searchInput: false },
      attachTo: document.body,
    });
    await openMenu(wrapper);
    expect(document.querySelector("[data-slot='input']")).toBeNull();
    wrapper.unmount();
  });

  it("mode=listbox 不渲染搜索框", async () => {
    const wrapper = mount(XSelectMenu, {
      props: { items, valueKey: "value", mode: "listbox" },
      attachTo: document.body,
    });
    await openMenu(wrapper);
    expect(document.querySelector("[data-slot='input']")).toBeNull();
    wrapper.unmount();
  });

  it("label 与 separator 类型项渲染分组结构", async () => {
    const wrapper = mount(XSelectMenu, {
      props: {
        items: [
          { type: "label", label: "水果" },
          { label: "苹果", value: "apple" },
          { type: "separator" },
          { label: "香蕉", value: "banana" },
        ],
        valueKey: "value",
      },
      attachTo: document.body,
    });
    await openMenu(wrapper);
    expect(document.querySelector("[data-slot='label']")?.textContent).toBe("水果");
    expect(document.querySelector("[data-slot='separator']")).toBeTruthy();
    wrapper.unmount();
  });

  it("multiple 多选返回数组并显示逗号拼接文本", async () => {
    const wrapper = mount(XSelectMenu, {
      props: { items, valueKey: "value", multiple: true, modelValue: ["apple", "banana"] },
      attachTo: document.body,
    });
    expect(wrapper.find("button").text()).toContain("苹果, 香蕉");
    await openMenu(wrapper);
    const option = bodyItems().find((el) => el.textContent === "苹果");
    option?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await settle(wrapper);
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([["banana"]]);
    wrapper.unmount();
  });
});

describe("XSelectMenu 图标与清空", () => {
  it("clear 显示清空按钮并触发 clear 与 update:modelValue", async () => {
    const wrapper = mount(XSelectMenu, {
      props: { items, valueKey: "value", modelValue: "apple", clear: true },
      attachTo: document.body,
    });
    const clear = wrapper.find("[data-slot='trailingClear']");
    expect(clear.exists()).toBe(true);
    /* 清空按钮不能嵌套在触发按钮内部 */
    expect(wrapper.find("[data-slot='base']").find("[data-slot='trailingClear']").exists()).toBe(false);
    await clear.trigger("click");
    expect(wrapper.emitted("clear")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([undefined]);
    wrapper.unmount();
  });

  it("clearIcon 支持自定义组件", () => {
    const CustomIcon = defineComponent({ render: () => h("i", { class: "custom-close" }) });
    const wrapper = mount(XSelectMenu, {
      props: { items, valueKey: "value", modelValue: "apple", clear: true, clearIcon: CustomIcon },
      attachTo: document.body,
    });
    expect(wrapper.find("[data-slot='trailingClear'] .custom-close").exists()).toBe(true);
    wrapper.unmount();
  });

  it("selectedIcon 渲染在选中项尾部", async () => {
    const wrapper = mount(XSelectMenu, {
      props: { items, valueKey: "value", modelValue: "apple" },
      attachTo: document.body,
    });
    await openMenu(wrapper);
    expect(document.querySelector("[data-slot='itemTrailingIcon']")).toBeTruthy();
    wrapper.unmount();
  });

  it("trailingIcon 渲染展开图标并随打开状态旋转", async () => {
    const wrapper = mount(XSelectMenu, {
      props: { items, valueKey: "value" },
      attachTo: document.body,
    });
    expect(wrapper.find("[data-slot='trailingIcon']").exists()).toBe(true);
    await openMenu(wrapper);
    expect(wrapper.find("[data-slot='trailingIcon']").classes()).toContain("rotate-180");
    wrapper.unmount();
  });
});

describe("XSelectMenu 创建项与插槽", () => {
  it("createItem 在无匹配时渲染创建项并触发 create", async () => {
    const wrapper = mount(XSelectMenu, {
      props: { items, valueKey: "value", createItem: true },
      attachTo: document.body,
    });
    await openMenu(wrapper);
    const input = document.querySelector("[data-slot='input']") as HTMLInputElement;
    input.value = "梨";
    input.dispatchEvent(new Event("input", { bubbles: true }));
    await settle(wrapper);
    const createItem = bodyItems().find((el) => el.textContent?.includes("梨"));
    expect(createItem).toBeTruthy();
    createItem?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await settle(wrapper);
    expect(wrapper.emitted("create")?.[0]).toEqual(["梨"]);
    wrapper.unmount();
  });

  it("create-item-label 插槽自定义创建项文案", async () => {
    const wrapper = mount(XSelectMenu, {
      props: { items, valueKey: "value", createItem: true },
      slots: {
        "create-item-label": ({ item }: { item: string }) => h("span", { class: "create-label" }, `新建 ${item}`),
      },
      attachTo: document.body,
    });
    await openMenu(wrapper);
    const input = document.querySelector("[data-slot='input']") as HTMLInputElement;
    input.value = "梨";
    input.dispatchEvent(new Event("input", { bubbles: true }));
    await settle(wrapper);
    expect(document.querySelector(".create-label")?.textContent).toBe("新建 梨");
    wrapper.unmount();
  });

  it("empty 插槽替换默认空态", async () => {
    const wrapper = mount(XSelectMenu, {
      props: { items: [] },
      slots: { empty: "<i class='custom-empty' />" },
      attachTo: document.body,
    });
    await openMenu(wrapper);
    expect(document.querySelector(".custom-empty")).toBeTruthy();
    wrapper.unmount();
  });

  it("leading / trailing / default / content-top 插槽渲染自定义内容", async () => {
    const wrapper = mount(XSelectMenu, {
      props: { items, valueKey: "value" },
      slots: {
        leading: "<i class='lead' />",
        trailing: "<i class='trail' />",
        default: "<span class='value-slot'>自定义</span>",
        "content-top": "<i class='top' />",
      },
      attachTo: document.body,
    });
    expect(wrapper.find(".lead").exists()).toBe(true);
    expect(wrapper.find(".value-slot").exists()).toBe(true);
    await openMenu(wrapper);
    expect(document.querySelector(".top")).toBeTruthy();
    wrapper.unmount();
  });

  it("item-label / item-trailing 插槽自定义选项内容", async () => {
    const wrapper = mount(XSelectMenu, {
      props: { items, valueKey: "value" },
      slots: {
        "item-label": (({ item }: { item: { label: string } }) => h("span", { class: "item-slot" }, `[${item.label}]`)) as never,
        "item-trailing": (() => h("span", { class: "item-trail" }, "T")) as never,
      },
      attachTo: document.body,
    });
    await openMenu(wrapper);
    expect(document.querySelector(".item-slot")?.textContent).toBe("[苹果]");
    expect(document.querySelector(".item-trail")?.textContent).toBe("T");
    wrapper.unmount();
  });
});

describe("XSelectMenu ui 插槽与 as", () => {
  it("ui 插槽类名应用到各元素", async () => {
    const wrapper = mount(XSelectMenu, {
      props: {
        items,
        valueKey: "value",
        modelValue: "apple",
        clear: true,
        ui: {
          base: "custom-base",
          content: "custom-content",
          focusScope: "custom-focus",
          input: "custom-input",
          viewport: "custom-viewport",
          group: "custom-group",
          item: "custom-item",
          itemLabel: "custom-item-label",
          itemTrailingIcon: "custom-trailing-icon",
          trailingClear: "custom-trailing-clear",
        },
      },
      attachTo: document.body,
    });
    expect(wrapper.find("button").classes()).toContain("custom-base");
    expect(wrapper.find("[data-slot='trailingClear']").classes()).toContain("custom-trailing-clear");
    await openMenu(wrapper);
    expect(document.querySelector("[data-slot='content']")?.classList.contains("custom-content")).toBe(true);
    expect(document.querySelector("[data-slot='focusScope']")?.classList.contains("custom-focus")).toBe(true);
    expect(document.querySelector("[data-slot='input']")?.classList.contains("custom-input")).toBe(true);
    expect(document.querySelector("[data-slot='viewport']")?.classList.contains("custom-viewport")).toBe(true);
    expect(document.querySelector("[data-slot='group']")?.classList.contains("custom-group")).toBe(true);
    const item = document.querySelector("[data-slot='item']");
    expect(item?.classList.contains("custom-item")).toBe(true);
    expect(item?.querySelector("[data-slot='itemLabel']")?.classList.contains("custom-item-label")).toBe(true);
    expect(item?.querySelector("[data-slot='itemTrailingIcon']")?.classList.contains("custom-trailing-icon")).toBe(true);
    wrapper.unmount();
  });

  it("as 渲染触发按钮为指定元素", () => {
    const wrapper = mount(XSelectMenu, {
      props: { items, valueKey: "value", as: "a" },
      attachTo: document.body,
    });
    expect(wrapper.find("[data-slot='base']").element.tagName).toBe("A");
    wrapper.unmount();
  });
});
