import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import XAvatar from "@/components/kit/XAvatar.vue";
import XAvatarGroup from "@/components/kit/XAvatarGroup.vue";
import XBadge from "@/components/kit/XBadge.vue";
import XButton from "@/components/kit/XButton.vue";
import XButtonGroup from "@/components/kit/XButtonGroup.vue";
import XCard from "@/components/kit/XCard.vue";
import XChip from "@/components/kit/XChip.vue";
import XContainer from "@/components/kit/XContainer.vue";
import XIcon from "@/components/kit/XIcon.vue";
import XKbd from "@/components/kit/XKbd.vue";
import XSeparator from "@/components/kit/XSeparator.vue";
import XSkeleton from "@/components/kit/XSkeleton.vue";

describe("XButton", () => {
  it("默认 solid / md / primary，应用原子 buttonVariants", () => {
    const wrapper = mount(XButton, { slots: { default: "确认" } });
    expect(wrapper.classes()).toContain("bg-primary-6");
    expect(wrapper.classes()).toContain("text-white");
    expect(wrapper.attributes("data-variant")).toBe("default");
    expect(wrapper.text()).toBe("确认");
  });

  it("soft × success 变体与语义色", () => {
    const wrapper = mount(XButton, { props: { variant: "soft", color: "success" }, slots: { default: "保存" } });
    expect(wrapper.classes()).toContain("bg-success-1");
    expect(wrapper.classes()).toContain("text-success-7");
  });

  it("xl 尺寸覆盖原子尺寸", () => {
    const wrapper = mount(XButton, { props: { size: "xl" }, slots: { default: "大按钮" } });
    expect(wrapper.classes()).toContain("h-10");
  });

  it("loading 时禁用并显示旋转图标", () => {
    const wrapper = mount(XButton, { props: { loading: true }, slots: { default: "提交" } });
    expect(wrapper.attributes("disabled")).toBeDefined();
    expect(wrapper.find("svg").classes()).toContain("animate-spin");
  });

  it("leading / trailing 插槽", () => {
    const wrapper = mount(XButton, {
      slots: { default: "操作", leading: "<i data-test='lead' />", trailing: "<i data-test='trail' />" },
    });
    expect(wrapper.find("[data-test='lead']").exists()).toBe(true);
    expect(wrapper.find("[data-test='trail']").exists()).toBe(true);
  });

  it("原生事件透传", async () => {
    const wrapper = mount(XButton, { slots: { default: "点击" } });
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });
});

describe("XButtonGroup", () => {
  it("水平布局默认方向", () => {
    const wrapper = mount(XButtonGroup, { slots: { default: "<button>1</button><button>2</button>" } });
    expect(wrapper.attributes("data-slot")).toBe("button-group");
    expect(wrapper.attributes("data-orientation")).toBe("horizontal");
    expect(wrapper.classes()).toContain("flex-row");
  });

  it("垂直布局", () => {
    const wrapper = mount(XButtonGroup, { props: { orientation: "vertical" } });
    expect(wrapper.classes()).toContain("flex-col");
  });
});

describe("XBadge", () => {
  it("独立模式显示数字与颜色", () => {
    const wrapper = mount(XBadge, { props: { count: 5 } });
    expect(wrapper.text()).toBe("5");
    expect(wrapper.classes()).toContain("bg-primary-1");
  });

  it("超出 overflowCount 显示 99+", () => {
    const wrapper = mount(XBadge, { props: { count: 120 } });
    expect(wrapper.text()).toBe("99+");
  });

  it("dot 模式显示圆点", () => {
    const wrapper = mount(XBadge, { props: { dot: true }, slots: { default: "消息" } });
    expect(wrapper.find(".bg-error-6").exists()).toBe(true);
    expect(wrapper.text()).toContain("消息");
  });

  it("包裹模式渲染角标", () => {
    const wrapper = mount(XBadge, { props: { count: 3 }, slots: { default: "消息" } });
    expect(wrapper.find(".relative").exists()).toBe(true);
    expect(wrapper.text()).toContain("3");
  });
});

describe("XChip", () => {
  it("渲染语义色芯片", () => {
    const wrapper = mount(XChip, { props: { color: "error" }, slots: { default: "失败" } });
    expect(wrapper.classes()).toContain("bg-error-1");
    expect(wrapper.classes()).toContain("text-error-7");
  });

  it("closable 点击关闭按钮触发 close 事件", async () => {
    const wrapper = mount(XChip, { props: { closable: true }, slots: { default: "可关闭" } });
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted("close")).toHaveLength(1);
  });
});

describe("XAvatar", () => {
  it("默认圆形 md，fallback 渲染插槽", () => {
    const wrapper = mount(XAvatar, { slots: { default: "U" } });
    expect(wrapper.find("[data-slot='avatar']").classes()).toContain("rounded-full");
    expect(wrapper.find("[data-slot='avatar']").classes()).toContain("size-8");
    expect(wrapper.text()).toBe("U");
  });

  it("方形 + xl", () => {
    const wrapper = mount(XAvatar, { props: { shape: "square", size: "xl" }, slots: { default: "A" } });
    expect(wrapper.find("[data-slot='avatar']").classes()).toContain("rounded-md");
    expect(wrapper.find("[data-slot='avatar']").classes()).toContain("size-12");
  });
});

describe("XAvatarGroup", () => {
  it("超出 max 折叠为 +N", () => {
    const wrapper = mount(XAvatarGroup, {
      props: { max: 3 },
      slots: { default: "<i /><i /><i /><i />" },
    });
    expect(wrapper.text()).toContain("+2");
  });

  it("未超出 max 时无溢出标记", () => {
    const wrapper = mount(XAvatarGroup, {
      props: { max: 4 },
      slots: { default: "<i /><i />" },
    });
    expect(wrapper.text()).not.toMatch(/^\+/);
  });
});

describe("XCard", () => {
  it("渲染标题与内容插槽", () => {
    const wrapper = mount(XCard, {
      props: { title: "卡片标题" },
      slots: { default: "内容" },
    });
    expect(wrapper.text()).toContain("卡片标题");
    expect(wrapper.text()).toContain("内容");
    expect(wrapper.find("[data-slot='card-content']").exists()).toBe(true);
  });

  it("hoverable 点击触发 click 事件", async () => {
    const wrapper = mount(XCard, { props: { hoverable: true }, slots: { default: "内容" } });
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toHaveLength(1);
  });
});

describe("XContainer", () => {
  it("默认 lg 宽度与 as 渲染", () => {
    const wrapper = mount(XContainer, { props: { as: "section" }, slots: { default: "内容" } });
    expect(wrapper.element.tagName).toBe("SECTION");
    expect(wrapper.classes()).toContain("max-w-320");
  });
});

describe("XIcon", () => {
  it("按名称渲染图标", () => {
    const wrapper = mount(XIcon, { props: { name: "star", size: "lg" } });
    expect(wrapper.find("svg").exists()).toBe(true);
    expect(wrapper.classes()).toContain("size-6");
  });
});

describe("XKbd", () => {
  it("渲染 value 与插槽", () => {
    const wrapper = mount(XKbd, { props: { value: "⌘" } });
    expect(wrapper.text()).toBe("⌘");
  });
});

describe("XSeparator", () => {
  it("水平分割线", () => {
    const wrapper = mount(XSeparator);
    expect(wrapper.attributes("data-slot")).toBe("separator");
    expect(wrapper.classes()).toContain("h-px");
  });
});

describe("XSkeleton", () => {
  it("默认显示 rect 骨架", () => {
    const wrapper = mount(XSkeleton);
    expect(wrapper.find("[data-slot='skeleton']").exists()).toBe(true);
  });

  it("loading=false 渲染插槽内容", () => {
    const wrapper = mount(XSkeleton, { props: { loading: false }, slots: { default: "已加载" } });
    expect(wrapper.text()).toBe("已加载");
    expect(wrapper.find("[data-slot='skeleton']").exists()).toBe(false);
  });
});
