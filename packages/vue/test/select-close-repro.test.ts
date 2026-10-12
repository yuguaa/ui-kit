import { afterEach, describe, expect, it } from "vitest";
import { enableAutoUnmount, mount } from "@vue/test-utils";
import XSelectMenu from "@/components/kit/XSelectMenu.vue";

enableAutoUnmount(afterEach);

/* 复现：SelectMenu 打开后 Esc / 外部点击无法关闭 */
describe("XSelectMenu 关闭交互", () => {
  const items = [
    { value: "apple", label: "苹果" },
    { value: "banana", label: "香蕉" },
  ];

  it("打开后 Esc 关闭面板", async () => {
    const wrapper = mount(XSelectMenu, {
      props: { items, valueKey: "value" },
      attachTo: document.body,
    });
    const trigger = wrapper.find("[data-slot=base]");
    await trigger.trigger("click");
    expect(wrapper.find("[data-state=open]").exists()).toBe(true);
    await trigger.trigger("keydown", { key: "Escape" });
    await new Promise((resolve) => setTimeout(resolve, 50));
    expect(wrapper.find("[data-state=open]").exists()).toBe(false);
  });

  it("打开后点击外部关闭面板", async () => {
    const wrapper = mount(XSelectMenu, {
      props: { items, valueKey: "value" },
      attachTo: document.body,
    });
    const trigger = wrapper.find("[data-slot=base]");
    await trigger.trigger("click");
    expect(wrapper.find("[data-state=open]").exists()).toBe(true);
    /* 在 body 下挂一个独立的外部元素，模拟真实的外部点击目标 */
    const outside = document.createElement("div");
    outside.id = "outside-area";
    document.body.appendChild(outside);
    outside.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true, button: 0, pointerType: "mouse" }));
    await new Promise((resolve) => setTimeout(resolve, 50));
    expect(wrapper.find("[data-state=open]").exists()).toBe(false);
  });
});
