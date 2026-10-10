import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import XProgress from "@/components/kit/XProgress.vue";
import XSlider from "@/components/kit/XSlider.vue";

/** 等待浮层内容渲染到 body（reka Presence 状态机异步推进） */
async function waitForBody(text: string): Promise<boolean> {
  for (let i = 0; i < 20; i++) {
    if (document.body.textContent?.includes(text)) return true;
    await new Promise((resolve) => setTimeout(resolve, 10));
  }
  return false;
}

describe("XProgress", () => {
  it("默认不确定进度：indicator 带不确定动画类", () => {
    const wrapper = mount(XProgress);
    const indicator = wrapper.find("[data-slot='indicator']");
    expect(indicator.exists()).toBe(true);
    expect(indicator.classes()).toContain("motion-safe:data-[state=indeterminate]:animate-[carousel_2s_linear_infinite]");
  });

  it("max 传数组时渲染 steps，激活步骤显示", () => {
    const wrapper = mount(XProgress, {
      props: { modelValue: 1, max: ["待支付", "处理中", "已完成"] },
    });
    expect(wrapper.find("[data-slot='steps']").exists()).toBe(true);
    const steps = wrapper.findAll("[data-slot='step']");
    expect(steps).toHaveLength(3);
    expect(steps[1]?.classes()).toContain("opacity-100");
    expect(steps[2]?.classes()).toContain("opacity-0");
  });

  it("step 动态插槽自定义步骤文案", () => {
    const wrapper = mount(XProgress, {
      props: { modelValue: 0, max: ["待支付", "处理中"] },
      slots: {
        "step-0": "<i data-test='custom-step'>自定义步骤</i>",
      },
    });
    expect(wrapper.find("[data-test='custom-step']").text()).toBe("自定义步骤");
  });

  it("status 插槽自定义内容", () => {
    const wrapper = mount(XProgress, {
      props: { modelValue: 45 },
      slots: {
        status: "<i data-test='status'>自定义百分比</i>",
      },
    });
    expect(wrapper.find("[data-test='status']").text()).toBe("自定义百分比");
  });

  it("orientation vertical 与 inverted 应用对应类名", () => {
    const wrapper = mount(XProgress, {
      props: { modelValue: 45, status: true, orientation: "vertical", inverted: true },
    });
    expect(wrapper.find("[data-slot='root']").attributes("data-orientation")).toBe("vertical");
    expect(wrapper.find("[data-slot='root']").classes()).toContain("h-full");
    const status = wrapper.find("[data-slot='status']");
    expect(status.classes()).toContain("self-end");
  });

  it("color 与 animation 应用对应类名", () => {
    const wrapper = mount(XProgress, {
      props: { color: "success", animation: "swing" },
    });
    const indicator = wrapper.find("[data-slot='indicator']");
    expect(indicator.classes()).toContain("bg-success");
    expect(indicator.classes()).toContain("motion-safe:data-[state=indeterminate]:animate-[swing_2s_var(--ease-in-out)_infinite]");
  });

  it("ui 插槽类名应用到对应元素", () => {
    const wrapper = mount(XProgress, {
      props: {
        modelValue: 0,
        status: true,
        max: ["a", "b"],
        ui: {
          root: "custom-root",
          base: "custom-base",
          indicator: "custom-indicator",
          status: "custom-status",
          steps: "custom-steps",
          step: "custom-step",
        },
      },
    });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("custom-root");
    expect(wrapper.find("[data-slot='base']").classes()).toContain("custom-base");
    expect(wrapper.find("[data-slot='indicator']").classes()).toContain("custom-indicator");
    expect(wrapper.find("[data-slot='status']").classes()).toContain("custom-status");
    expect(wrapper.find("[data-slot='steps']").classes()).toContain("custom-steps");
    expect(wrapper.find("[data-slot='step']").classes()).toContain("custom-step");
  });

  it("v-model 更新进度值", async () => {
    const wrapper = mount(XProgress, { props: { modelValue: 30 } });
    await wrapper.setProps({ modelValue: 60 });
    const indicator = wrapper.find("[data-slot='indicator']");
    expect(indicator.attributes("style")).toContain("translateX(-40%)");
  });
});

describe("XSlider", () => {
  it("color 与 size 应用对应类名", () => {
    const wrapper = mount(XSlider, { props: { modelValue: 40, color: "success", size: "xl" } });
    expect(wrapper.find("[data-slot='range']").classes()).toContain("bg-success");
    expect(wrapper.find("[data-slot='track']").classes()).toContain("h-[10px]");
    const thumb = wrapper.find("[data-slot='thumb']");
    expect(thumb.classes()).toContain("size-5");
    expect(thumb.classes()).toContain("ring-success");
  });

  it("ui 插槽类名应用到对应元素", () => {
    const wrapper = mount(XSlider, {
      props: {
        modelValue: 40,
        ui: { root: "custom-root", track: "custom-track", range: "custom-range", thumb: "custom-thumb" },
      },
    });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("custom-root");
    expect(wrapper.find("[data-slot='track']").classes()).toContain("custom-track");
    expect(wrapper.find("[data-slot='range']").classes()).toContain("custom-range");
    expect(wrapper.find("[data-slot='thumb']").classes()).toContain("custom-thumb");
  });

  it("双值渲染两个拇指，单值渲染一个", () => {
    const range = mount(XSlider, { props: { modelValue: [20, 80] } });
    expect(range.findAll("[data-slot='thumb']")).toHaveLength(2);

    const single = mount(XSlider, { props: { modelValue: 40 } });
    expect(single.findAll("[data-slot='thumb']")).toHaveLength(1);
  });

  it("键盘调整后提交 change 事件，target.value 为提交值", async () => {
    const wrapper = mount(XSlider, { props: { modelValue: 50 } });
    await wrapper.find("[data-slot='thumb']").trigger("keydown", { key: "ArrowRight" });
    const events = wrapper.emitted("change");
    expect(events).toBeTruthy();
    const event = events?.[0]?.[0] as Event;
    expect((event.target as unknown as { value: number[] }).value).toContain(51);
  });

  it("tooltip 对象透传 XTooltip 属性，受控 open 显示当前值", async () => {
    mount(XSlider, { props: { tooltip: { open: true }, modelValue: 40 } });
    expect(await waitForBody("40")).toBe(true);
  });

  it("disabled 时根元素标记不可用", () => {
    const wrapper = mount(XSlider, { props: { modelValue: 40, disabled: true } });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("cursor-not-allowed");
    expect(wrapper.find("[data-slot='thumb']").attributes("data-disabled")).toBe("");
  });

  it("as 渲染为指定元素", () => {
    const wrapper = mount(XSlider, { props: { modelValue: 40, as: "section" } });
    expect(wrapper.find("section[data-slot='root']").exists()).toBe(true);
  });

  it("透传 onClick 处理器不会被吞掉", () => {
    const onClick = vi.fn();
    const wrapper = mount(XSlider, {
      props: { modelValue: 40 },
      attrs: { onClick },
    });
    void wrapper.find("[data-slot='root']").trigger("click");
    expect(onClick).toHaveBeenCalled();
  });
});
