import { afterEach, describe, expect, it } from "vitest";
import { enableAutoUnmount, mount } from "@vue/test-utils";
import XButton from "@/components/kit/XButton.vue";
import XIcon from "@/components/kit/XIcon.vue";

enableAutoUnmount(afterEach);

describe("图标渲染链路", () => {
  it("XIcon 渲染 i-lucide-chevrons-left", () => {
    const wrapper = mount(XIcon, { props: { name: "i-lucide-chevrons-left" } });
    expect(wrapper.find("svg").exists()).toBe(true);
  });

  it("XButton icon prop 渲染 svg", () => {
    const wrapper = mount(XButton, { props: { icon: "i-lucide-chevron-down" } });
    expect(wrapper.find("svg").exists()).toBe(true);
  });
});
