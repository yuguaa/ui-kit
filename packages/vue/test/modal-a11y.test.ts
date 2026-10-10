import { mount } from "@vue/test-utils";
import { h } from "vue";
import { describe, expect, it, vi } from "vitest";
import XModal from "@/components/kit/XModal.vue";
import XSlideover from "@/components/kit/XSlideover.vue";

/* 临时复现:文档站 modal 页面的 DialogTitle 警告 */
describe("XModal 警告复现", () => {
  it("关闭状态下挂载带标题的对话框", () => {
    const warn = vi.fn();
    const original = console.warn;
    console.warn = (message: unknown, ...rest: unknown[]) => {
      if (String(message).includes("DialogTitle")) warn(String(message));
      original(message, ...rest);
    };
    const wrapper = mount(XModal, {
      props: { open: false, title: "标题", description: "说明" },
      slots: { body: "正文" },
      attachTo: document.body,
    });
    expect(wrapper.exists()).toBe(true);
    console.warn = original;
    expect(warn).not.toHaveBeenCalled();
    wrapper.unmount();
  });

  it("XSlideover 关闭状态挂载", () => {
    const warn = vi.fn();
    const original = console.warn;
    console.warn = (message: unknown, ...rest: unknown[]) => {
      if (String(message).includes("DialogTitle")) warn(String(message));
      original(message, ...rest);
    };
    const wrapper = mount(XSlideover, {
      props: { open: false, title: "侧滑" },
      slots: { content: "内容" },
      attachTo: document.body,
    });
    expect(wrapper.exists()).toBe(true);
    console.warn = original;
    expect(warn).not.toHaveBeenCalled();
    wrapper.unmount();
  });

  it("打开状态挂载(open=true,content 插槽)", () => {
    const warn = vi.fn();
    const original = console.warn;
    console.warn = (message: unknown, ...rest: unknown[]) => {
      if (String(message).includes("DialogTitle")) warn(String(message));
      original(message, ...rest);
    };
    const wrapper = mount(XModal, {
      props: { open: true, title: "标题", description: "说明" },
      slots: { content: "自定义内容" },
      attachTo: document.body,
    });
    expect(wrapper.exists()).toBe(true);
    console.warn = original;
    expect(warn).not.toHaveBeenCalled();
    wrapper.unmount();
  });

  it("自定义 header 插槽时仍提供隐藏标题", async () => {
    const warn = vi.fn();
    const original = console.warn;
    console.warn = (message: unknown, ...rest: unknown[]) => {
      if (String(message).includes("DialogTitle")) warn(String(message));
      original(message, ...rest);
    };
    const wrapper = mount(XModal, {
      props: { open: true, title: "标题", description: "说明" },
      slots: {
        header: () => h("span", { "data-test": "custom-header" }, "自定义头部"),
        body: "正文",
      },
      attachTo: document.body,
    });
    await wrapper.vm.$nextTick();
    expect(document.body.querySelector("[data-test='custom-header']")).not.toBeNull();
    console.warn = original;
    expect(warn).not.toHaveBeenCalled();
    wrapper.unmount();
  });
});
