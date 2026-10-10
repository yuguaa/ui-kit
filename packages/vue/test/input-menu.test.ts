import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";
import { defineComponent, h } from "vue";
import XInputMenu from "@/components/kit/XInputMenu.vue";

const items = [
  { label: "上海", value: "sh" },
  { label: "北京", value: "bj", description: "首都" },
];

/* 弹出内容渲染到 body，测试间清空，菜单内断言查 document */
beforeEach(() => {
  document.body.innerHTML = "";
});

function bodyItems() {
  return Array.from(document.querySelectorAll("[data-slot='item']"));
}

async function openMenu(wrapper: ReturnType<typeof mount>) {
  await wrapper.find("[data-slot='trailing']").trigger("click");
  await settle(wrapper);
}

async function settle(wrapper: ReturnType<typeof mount>) {
  await new Promise((resolve) => setTimeout(resolve, 0));
  await wrapper.vm.$nextTick();
}

/* reka 选项监听 pointerdown 与 click，按真实交互顺序派发 */
function selectOption(el: Element | undefined) {
  el?.dispatchEvent(new MouseEvent("pointerdown", { bubbles: true }));
  el?.dispatchEvent(new MouseEvent("pointerup", { bubbles: true }));
  el?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
}

describe("XInputMenu 字段映射与选择", () => {
  it("labelKey / valueKey 控制标签与值字段", async () => {
    const wrapper = mount(XInputMenu, {
      props: {
        items: [
          { id: "sh", name: "上海" },
          { id: "bj", name: "北京" },
        ],
        labelKey: "name",
        valueKey: "id",
      },
      attachTo: document.body,
    });
    await openMenu(wrapper);
    const option = bodyItems().find((el) => el.textContent === "上海");
    selectOption(option);
    await settle(wrapper);
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["sh"]);
    wrapper.unmount();
  });

  it("受控 modelValue 在输入框显示标签文本", () => {
    const wrapper = mount(XInputMenu, {
      props: { items, valueKey: "value", modelValue: "sh" },
      attachTo: document.body,
    });
    expect((wrapper.find("input").element as HTMLInputElement).value).toBe("上海");
    wrapper.unmount();
  });

  it("descriptionKey 渲染选项说明文字", async () => {
    const wrapper = mount(XInputMenu, {
      props: { items, valueKey: "value" },
      attachTo: document.body,
    });
    await openMenu(wrapper);
    expect(document.querySelector("[data-slot='itemDescription']")?.textContent).toBe("首都");
    wrapper.unmount();
  });
});

describe("XInputMenu 搜索过滤", () => {
  it("输入即过滤，filterFields 指定字段", async () => {
    const wrapper = mount(XInputMenu, {
      props: {
        items: [
          { label: "上海", value: "sh", alias: "魔都" },
          { label: "北京", value: "bj" },
        ],
        valueKey: "value",
        filterFields: ["alias"],
      },
      attachTo: document.body,
    });
    await openMenu(wrapper);
    await wrapper.find("input").setValue("魔都");
    await settle(wrapper);
    const labels = Array.from(document.querySelectorAll("[data-slot='itemLabel']")).map((el) => el.textContent);
    expect(labels).toEqual(["上海"]);
    wrapper.unmount();
  });

  it("ignoreFilter 关闭内置过滤", async () => {
    const wrapper = mount(XInputMenu, {
      props: { items, valueKey: "value", ignoreFilter: true },
      attachTo: document.body,
    });
    await openMenu(wrapper);
    await wrapper.find("input").setValue("不存在");
    await settle(wrapper);
    expect(bodyItems().length).toBe(2);
    wrapper.unmount();
  });
});

describe("XInputMenu 模式与插槽", () => {
  it("mode=autocomplete 输入文本作为值", async () => {
    const wrapper = mount(XInputMenu, {
      props: { items, valueKey: "value", mode: "autocomplete" },
      attachTo: document.body,
    });
    await openMenu(wrapper);
    await wrapper.find("input").setValue("自定义");
    await settle(wrapper);
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual(["自定义"]);
    wrapper.unmount();
  });

  it("placeholder 渲染到输入框", () => {
    const wrapper = mount(XInputMenu, {
      props: { items, valueKey: "value", placeholder: "请选择城市" },
      attachTo: document.body,
    });
    expect(wrapper.find("input").attributes("placeholder")).toBe("请选择城市");
    wrapper.unmount();
  });

  it("content-top 插槽渲染在菜单顶部", async () => {
    const wrapper = mount(XInputMenu, {
      props: { items, valueKey: "value" },
      slots: {
        "content-top": "<i class='slot-top'>顶部内容</i>",
      },
      attachTo: document.body,
    });
    await openMenu(wrapper);
    expect(document.querySelector("[data-slot='content'] .slot-top")).toBeTruthy();
    wrapper.unmount();
  });
});

describe("XInputMenu 多选与清空", () => {
  it("multiple 选中渲染标签并可删除", async () => {
    const wrapper = mount(XInputMenu, {
      props: { items, valueKey: "value", multiple: true, modelValue: ["sh"] },
      attachTo: document.body,
    });
    const tag = wrapper.find("[data-slot='tagsItem']");
    expect(tag.text()).toContain("上海");
    await tag.find("[data-slot='tagsItemDelete']").trigger("click");
    await settle(wrapper);
    expect(wrapper.emitted("remove-tag")?.[0]).toEqual(["sh"]);
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([[]]);
    wrapper.unmount();
  });

  it("deleteIcon 支持自定义组件", () => {
    const CustomIcon = defineComponent({ render: () => h("i", { class: "custom-delete" }) });
    const wrapper = mount(XInputMenu, {
      props: { items, valueKey: "value", multiple: true, modelValue: ["sh"], deleteIcon: CustomIcon },
      attachTo: document.body,
    });
    expect(wrapper.find("[data-slot='tagsItemDelete'] .custom-delete").exists()).toBe(true);
    wrapper.unmount();
  });

  it("clear 显示清空按钮并触发 clear", async () => {
    const wrapper = mount(XInputMenu, {
      props: { items, valueKey: "value", modelValue: "sh", clear: true },
      attachTo: document.body,
    });
    const clear = wrapper.find("[data-slot='trailingClear']");
    expect(clear.exists()).toBe(true);
    await clear.trigger("click");
    expect(wrapper.emitted("clear")).toBeTruthy();
    wrapper.unmount();
  });

  it("clearIcon 渲染到清空按钮", () => {
    const CustomIcon = defineComponent({ render: () => h("i", { class: "custom-close" }) });
    const wrapper = mount(XInputMenu, {
      props: { items, valueKey: "value", modelValue: "sh", clear: true, clearIcon: CustomIcon },
      attachTo: document.body,
    });
    expect(wrapper.find("[data-slot='trailingClear']").exists()).toBe(true);
    wrapper.unmount();
  });
});

describe("XInputMenu 图标与插槽", () => {
  it("selectedIcon 渲染在选中项尾部", async () => {
    const wrapper = mount(XInputMenu, {
      props: { items, valueKey: "value", modelValue: "sh" },
      attachTo: document.body,
    });
    await openMenu(wrapper);
    expect(document.querySelector("[data-slot='itemTrailingIcon']")).toBeTruthy();
    wrapper.unmount();
  });

  it("leading 插槽替换默认前置内容", () => {
    const wrapper = mount(XInputMenu, {
      props: { items, valueKey: "value" },
      slots: { leading: "<i class='lead' />" },
      attachTo: document.body,
    });
    expect(wrapper.find(".lead").exists()).toBe(true);
    wrapper.unmount();
  });

  it("trailing 插槽替换默认后置内容", () => {
    const wrapper = mount(XInputMenu, {
      props: { items, valueKey: "value" },
      slots: { trailing: "<i class='trail' />" },
      attachTo: document.body,
    });
    expect(wrapper.find(".trail").exists()).toBe(true);
    wrapper.unmount();
  });

  it("item-label 插槽自定义选项文本", async () => {
    const wrapper = mount(XInputMenu, {
      props: { items, valueKey: "value" },
      slots: {
        "item-label": (({ item }: { item: { label: string } }) => h("span", { class: "item-slot" }, `[${item.label}]`)) as never,
      },
      attachTo: document.body,
    });
    await openMenu(wrapper);
    expect(document.querySelector(".item-slot")?.textContent).toBe("[上海]");
    wrapper.unmount();
  });

  it("empty 插槽替换默认空态", async () => {
    const wrapper = mount(XInputMenu, {
      props: { items: [], valueKey: "value" },
      slots: { empty: "<i class='custom-empty' />" },
      attachTo: document.body,
    });
    await openMenu(wrapper);
    expect(document.querySelector(".custom-empty")).toBeTruthy();
    wrapper.unmount();
  });
});

describe("XInputMenu ui 插槽与 as", () => {
  it("ui 插槽类名应用到各元素", () => {
    const wrapper = mount(XInputMenu, {
      props: {
        items,
        valueKey: "value",
        ui: { root: "custom-root", base: "custom-base", leading: "custom-leading" },
      },
      attachTo: document.body,
    });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("custom-root");
    expect(wrapper.find("input").classes()).toContain("custom-base");
    wrapper.unmount();
  });

  it("as 渲染为指定根元素", () => {
    const wrapper = mount(XInputMenu, {
      props: { items, valueKey: "value", as: "div" },
      attachTo: document.body,
    });
    expect(wrapper.find("[data-slot='root']").element.tagName).toBe("DIV");
    wrapper.unmount();
  });
});
