import { afterEach, describe, expect, it } from "vitest";
import { enableAutoUnmount, mount } from "@vue/test-utils";
import { ComboboxRoot, ComboboxTrigger, ComboboxContent, ComboboxItem, ComboboxAnchor, ComboboxPortal, ComboboxInput, FocusScope } from "reka-ui";
import { FieldGroupReset } from "@/lib/nuxt/composables/useFieldGroup";

enableAutoUnmount(afterEach);

/* 最小复现：reka Combobox 的 dismissableLayer 是否工作 */
describe("reka Combobox dismissableLayer", () => {
  it("外部点击关闭", async () => {
    const wrapper = mount({
      components: { ComboboxRoot, ComboboxTrigger, ComboboxContent, ComboboxItem, ComboboxAnchor, ComboboxPortal },
      template: `
        <ComboboxRoot>
          <ComboboxAnchor><ComboboxTrigger data-testid="trigger">打开</ComboboxTrigger></ComboboxAnchor>
          <ComboboxPortal>
            <ComboboxContent>
              <ComboboxItem value="a">A</ComboboxItem>
            </ComboboxContent>
          </ComboboxPortal>
        </ComboboxRoot>
      `,
    }, { attachTo: document.body });
    await wrapper.find("[data-testid=trigger]").trigger("click");
    await new Promise((resolve) => setTimeout(resolve, 30));
    expect(document.querySelector("[role=listbox]")).toBeTruthy();
    const outside = document.createElement("div");
    document.body.appendChild(outside);
    outside.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true, button: 0, pointerType: "mouse" }));
    await new Promise((resolve) => setTimeout(resolve, 80));
    expect(document.querySelector("[role=listbox]")).toBeFalsy();
  });

  it("带 FocusScope 与 Input 的外部点击关闭", async () => {
    const wrapper = mount({
      components: { ComboboxRoot, ComboboxTrigger, ComboboxContent, ComboboxItem, ComboboxAnchor, ComboboxPortal, ComboboxInput, FocusScope },
      template: `
        <ComboboxRoot>
          <ComboboxAnchor><ComboboxTrigger data-testid="trigger">打开</ComboboxTrigger></ComboboxAnchor>
          <ComboboxPortal>
            <ComboboxContent>
              <FocusScope trapped>
                <ComboboxInput data-testid="input" />
                <ComboboxItem value="a">A</ComboboxItem>
              </FocusScope>
            </ComboboxContent>
          </ComboboxPortal>
        </ComboboxRoot>
      `,
    }, { attachTo: document.body });
    await wrapper.find("[data-testid=trigger]").trigger("click");
    await new Promise((resolve) => setTimeout(resolve, 30));
    expect(document.querySelector("[role=listbox]")).toBeTruthy();
    const outside = document.createElement("div");
    document.body.appendChild(outside);
    outside.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true, button: 0, pointerType: "mouse" }));
    await new Promise((resolve) => setTimeout(resolve, 80));
    expect(document.querySelector("[role=listbox]")).toBeFalsy();
  });

  it("带 FieldGroupReset 包裹的外部点击关闭", async () => {
    const wrapper = mount({
      components: { ComboboxRoot, ComboboxTrigger, ComboboxContent, ComboboxItem, ComboboxAnchor, ComboboxPortal, FieldGroupReset },
      template: `
        <ComboboxRoot>
          <ComboboxAnchor><ComboboxTrigger data-testid="trigger">打开</ComboboxTrigger></ComboboxAnchor>
          <ComboboxPortal>
            <FieldGroupReset>
              <ComboboxContent>
                <ComboboxItem value="a">A</ComboboxItem>
              </ComboboxContent>
            </FieldGroupReset>
          </ComboboxPortal>
        </ComboboxRoot>
      `,
    }, { attachTo: document.body });
    await wrapper.find("[data-testid=trigger]").trigger("click");
    await new Promise((resolve) => setTimeout(resolve, 30));
    expect(document.querySelector("[role=listbox]")).toBeTruthy();
    const outside = document.createElement("div");
    document.body.appendChild(outside);
    outside.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true, button: 0, pointerType: "mouse" }));
    await new Promise((resolve) => setTimeout(resolve, 80));
    expect(document.querySelector("[role=listbox]")).toBeFalsy();
  });

  it("Esc 关闭", async () => {
    const wrapper = mount({
      components: { ComboboxRoot, ComboboxTrigger, ComboboxContent, ComboboxItem, ComboboxAnchor, ComboboxPortal },
      template: `
        <ComboboxRoot>
          <ComboboxAnchor><ComboboxTrigger data-testid="trigger">打开</ComboboxTrigger></ComboboxAnchor>
          <ComboboxPortal>
            <ComboboxContent>
              <ComboboxItem value="a">A</ComboboxItem>
            </ComboboxContent>
          </ComboboxPortal>
        </ComboboxRoot>
      `,
    }, { attachTo: document.body });
    await wrapper.find("[data-testid=trigger]").trigger("click");
    await new Promise((resolve) => setTimeout(resolve, 30));
    expect(document.querySelector("[role=listbox]")).toBeTruthy();
    const layer = document.querySelector("[data-dismissable-layer]")!;
    layer.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
    await new Promise((resolve) => setTimeout(resolve, 80));
    expect(document.querySelector("[role=listbox]")).toBeFalsy();
  });
});
