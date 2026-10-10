import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import XCarousel from "@/components/kit/XCarousel.vue";

/* 临时复现:文档站 carousel 页面的 mounted 钩子报错 */
describe("XCarousel 复现", () => {
  it("fade + autoHeight + classNames 组合", () => {
    const slides = [
      { key: "1", text: "第一张", height: "h-24" },
      { key: "2", text: "第二张", height: "h-32" },
      { key: "3", text: "第三张", height: "h-24" },
    ];
    const wrapper = mount(XCarousel, {
      props: {
        items: slides,
        fade: true,
        autoHeight: true,
        classNames: { inView: "opacity-60", snapped: "opacity-100 ring-2 ring-primary-5" },
      },
      slots: {
        default: `<template #default="{ item }">
          <div :class="['flex items-center justify-center rounded-lg', item.height]">{{ item.text }}</div>
        </template>`,
      },
      attachTo: document.body,
    });
    expect(wrapper.exists()).toBe(true);
    wrapper.unmount();
  });

  it("autoScroll + wheelGestures 组合", () => {
    const slides = [
      { key: "1", text: "第一张", height: "h-24" },
      { key: "2", text: "第二张", height: "h-32" },
    ];
    const wrapper = mount(XCarousel, {
      props: { items: slides, autoScroll: { speed: 1 }, arrows: false, wheelGestures: true },
      attachTo: document.body,
    });
    expect(wrapper.exists()).toBe(true);
    wrapper.unmount();
  });
});
