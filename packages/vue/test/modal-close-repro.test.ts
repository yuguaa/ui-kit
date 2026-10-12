import { afterEach, describe, expect, it } from "vitest";
import { enableAutoUnmount, mount } from "@vue/test-utils";
import { ref } from "vue";
import XModal from "@/components/kit/XModal.vue";
import XButton from "@/components/kit/XButton.vue";

enableAutoUnmount(afterEach);

describe("XModal 关闭交互", () => {
  it("点击遮罩关闭", async () => {
    const open = ref(true);
    const wrapper = mount(XModal, {
      props: { open: open.value, "onUpdate:open": (v: boolean) => (open.value = v), title: "标题" },
      attachTo: document.body,
    });
    await new Promise((resolve) => setTimeout(resolve, 50));
    expect(document.querySelector("[role=dialog]")).toBeTruthy();
    const overlay = document.querySelector("[data-slot=overlay]")!;
    overlay.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true, button: 0, pointerType: "mouse" }));
    await new Promise((resolve) => setTimeout(resolve, 300));
    console.log("overlay pointerdown dispatched, open =", open.value);
    expect(open.value).toBe(false);
  });

  it("Esc 关闭", async () => {
    /* 调试：检查 document 上 keydown/pointerdown 监听注册情况 */
    let pdCount = 0;
    let kdCount = 0;
    const origAdd = document.addEventListener.bind(document);
    (document as any).addEventListener = function (type: string, fn: any, opt?: any) {
      if (type === "pointerdown") pdCount++;
      if (type === "keydown") kdCount++;
      return origAdd(type, fn, opt);
    };
    const open = ref(true);
    const wrapper = mount(XModal, {
      props: { open: open.value, "onUpdate:open": (v: boolean) => (open.value = v), title: "标题" },
      attachTo: document.body,
    });
    await new Promise((resolve) => setTimeout(resolve, 50));
    expect(document.querySelector("[role=dialog]")).toBeTruthy();
    const layer = document.querySelector("[data-dismissable-layer]")!;
    layer.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
    await new Promise((resolve) => setTimeout(resolve, 300));
    console.log("pd listeners:", pdCount, "kd listeners:", kdCount);
    expect(open.value).toBe(false);
  });
});
