import { enableAutoUnmount, mount } from "@vue/test-utils";
import { nextTick } from "vue";
import { afterEach, describe, expect, it } from "vitest";
import XAccordion from "@/components/kit/XAccordion.vue";
import XAlert from "@/components/kit/XAlert.vue";
import XBreadcrumb from "@/components/kit/XBreadcrumb.vue";
import XCarousel from "@/components/kit/XCarousel.vue";
import XCollapsible from "@/components/kit/XCollapsible.vue";
import XCommandPalette from "@/components/kit/XCommandPalette.vue";
import XContextMenu from "@/components/kit/XContextMenu.vue";
import XDrawer from "@/components/kit/XDrawer.vue";
import XDropdownMenu from "@/components/kit/XDropdownMenu.vue";
import XLink from "@/components/kit/XLink.vue";
import XListbox from "@/components/kit/XListbox.vue";
import XModal from "@/components/kit/XModal.vue";
import XNavigationMenu from "@/components/kit/XNavigationMenu.vue";
import XPagination from "@/components/kit/XPagination.vue";
import XPopover from "@/components/kit/XPopover.vue";
import XProgress from "@/components/kit/XProgress.vue";
import XScrollArea from "@/components/kit/XScrollArea.vue";
import XSlideover from "@/components/kit/XSlideover.vue";
import XSplitter from "@/components/kit/XSplitter.vue";
import XStepper from "@/components/kit/XStepper.vue";
import XTable from "@/components/kit/XTable.vue";
import XTabs from "@/components/kit/XTabs.vue";
import { useToast } from "@/components/kit/XToast";
import XToaster from "@/components/kit/XToaster.vue";
import XTooltip from "@/components/kit/XTooltip.vue";

/* 每个用例结束后自动卸载组件，清理 reka 浮层组件 teleport 到 body 的内容 */
enableAutoUnmount(afterEach);

/** 浮层类组件内容渲染在 Teleport 中，从 body 读取文本断言 */
function bodyHas(text: string): boolean {
  return document.body.textContent?.includes(text) ?? false;
}

/** 等待浮层内容渲染到 body（reka Presence 状态机异步推进） */
async function waitForBody(text: string): Promise<boolean> {
  for (let i = 0; i < 20; i++) {
    if (bodyHas(text)) return true;
    await nextTick();
  }
  return false;
}

describe("导航 Navigation", () => {
  it("XLink 渲染链接与激活态", () => {
    const wrapper = mount(XLink, { props: { to: "/docs", active: true }, slots: { default: "文档" } });
    expect(wrapper.attributes("href")).toBe("/docs");
    expect(wrapper.attributes("aria-current")).toBe("page");
    expect(wrapper.classes()).toContain("text-primary-7");
  });

  it("XBreadcrumb 渲染层级与分隔符", () => {
    const wrapper = mount(XBreadcrumb, {
      props: { items: [{ title: "首页", href: "/" }, { title: "组件" }, { title: "面包屑" }] },
    });
    expect(wrapper.text()).toContain("首页");
    expect(wrapper.text()).toContain("面包屑");
    expect(wrapper.findAllComponents({ name: "BreadcrumbSeparator" })).toHaveLength(2);
  });

  it("XTabs 切换标签触发 change", async () => {
    const wrapper = mount(XTabs, {
      props: { items: [{ key: "doc", label: "文档" }, { key: "api", label: "API" }] },
      slots: { content: "<p>面板内容</p>" },
    });
    expect(wrapper.text()).toContain("文档");
    await wrapper.findAll("button").find((b) => b.text() === "API")?.trigger("mousedown", { button: 0 });
    expect(wrapper.emitted("change")?.[0]).toEqual(["api"]);
  });

  it("XNavigationMenu 渲染菜单项与选中态", () => {
    const wrapper = mount(XNavigationMenu, {
      props: { items: [{ key: "dashboard", label: "仪表盘" }, { key: "settings", label: "设置" }], selectedKeys: ["dashboard"] },
    });
    expect(wrapper.text()).toContain("仪表盘");
    const selected = wrapper.findAll("button").find((b) => b.text() === "仪表盘");
    expect(selected?.classes()).toContain("bg-primary-1");
  });

  it("XPagination 渲染省略号分页", () => {
    const wrapper = mount(XPagination, { props: { current: 5, total: 100, pageSize: 10 } });
    expect(wrapper.text()).toContain("…");
  });

  it("XPagination 点击页码触发 change", async () => {
    const wrapper = mount(XPagination, { props: { current: 1, total: 50, pageSize: 10 } });
    await wrapper.findAll("button").find((b) => b.text() === "3")?.trigger("click");
    expect(wrapper.emitted("change")?.[0]).toEqual([3, 10]);
  });

  it("XStepper 状态渲染", () => {
    const wrapper = mount(XStepper, {
      props: { current: 1, items: [{ title: "完成" }, { title: "进行中" }, { title: "待处理" }] },
    });
    expect(wrapper.text()).toContain("完成");
    expect(wrapper.text()).toContain("待处理");
  });

  it("XCommandPalette 打开后渲染命令分组", async () => {
    mount(XCommandPalette, {
      props: { open: true, groups: [{ label: "操作", commands: [{ label: "新建文档", shortcut: "⌘ N" }] }] },
    });
    expect(await waitForBody("新建文档")).toBe(true);
    expect(await waitForBody("⌘ N")).toBe(true);
  });
});

describe("浮层 Overlays", () => {
  it("XModal 渲染标题与默认底部按钮", async () => {
    const wrapper = mount(XModal, {
      props: { open: true, title: "对话框标题" },
      slots: { content: "正文" },
    });
    expect(await waitForBody("对话框标题")).toBe(true);
    expect(await waitForBody("正文")).toBe(true);
    const okButton = Array.from(document.querySelectorAll("button")).find((b) => b.textContent?.includes("确"));
    okButton?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("ok")).toHaveLength(1);
  });

  it("XDrawer 渲染标题与内容", async () => {
    mount(XDrawer, {
      props: { open: true, title: "抽屉标题" },
      slots: { content: "抽屉内容" },
    });
    expect(await waitForBody("抽屉标题")).toBe(true);
    expect(await waitForBody("抽屉内容")).toBe(true);
  });

  it("XSlideover 渲染标题与内容", async () => {
    mount(XSlideover, {
      props: { open: true, title: "侧滑面板" },
      slots: { content: "面板内容" },
    });
    expect(await waitForBody("侧滑面板")).toBe(true);
    expect(await waitForBody("面板内容")).toBe(true);
  });

  it("XTooltip 渲染提示内容", async () => {
    mount(XTooltip, {
      props: { title: "这是一段提示文字", open: true },
      slots: { default: "<button>悬浮查看提示</button>" },
    });
    expect(await waitForBody("这是一段提示文字")).toBe(true);
  });

  it("XPopover 渲染标题与内容", async () => {
    mount(XPopover, {
      props: { open: true, title: "气泡标题" },
      slots: { trigger: "<button>打开气泡</button>", content: "气泡说明文字" },
    });
    expect(await waitForBody("气泡标题")).toBe(true);
    expect(await waitForBody("气泡说明文字")).toBe(true);
  });

  it("XContextMenu 渲染菜单项", async () => {
    mount(XContextMenu, {
      props: { open: true, items: [{ key: "edit", label: "编辑" }, { key: "delete", label: "删除" }] },
      slots: { default: "<div>右键区域</div>" },
    });
    expect(await waitForBody("编辑")).toBe(true);
    expect(await waitForBody("删除")).toBe(true);
  });

  it("XDropdownMenu 渲染菜单项并选中", async () => {
    const wrapper = mount(XDropdownMenu, {
      props: { open: true, items: [{ key: "rename", label: "重命名" }] },
    });
    await waitForBody("重命名");
    const item = document.querySelector("[data-slot=dropdown-menu-item]");
    item?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("select")?.[0]).toEqual([{ key: "rename", label: "重命名" }]);
  });

  it("XToaster 渲染容器与 useToast API", () => {
    const wrapper = mount(XToaster);
    expect(wrapper.exists()).toBe(true);
    const api = useToast();
    expect(typeof api.show).toBe("function");
    expect(typeof api.dismiss).toBe("function");
  });
});

describe("内容 Content", () => {
  it("XTable 渲染行列数据", () => {
    const wrapper = mount(XTable, {
      props: {
        columns: [{ key: "name", title: "名称" }, { key: "age", title: "年龄" }],
        dataSource: [{ key: "1", name: "张三", age: 28 }],
      },
    });
    expect(wrapper.text()).toContain("名称");
    expect(wrapper.text()).toContain("张三");
    expect(wrapper.text()).toContain("28");
  });

  it("XTable loading 渲染骨架行", () => {
    const wrapper = mount(XTable, {
      props: { columns: [{ key: "a", title: "A" }], dataSource: [], loading: true },
    });
    expect(wrapper.findAllComponents({ name: "XSkeleton" }).length).toBeGreaterThan(0);
  });

  it("XAlert 语义渲染与关闭", async () => {
    const wrapper = mount(XAlert, {
      props: { type: "success", message: "成功提示", closable: true },
    });
    expect(wrapper.text()).toContain("成功提示");
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted("close")).toHaveLength(1);
  });

  it("XProgress 线形与圆形", () => {
    const line = mount(XProgress, { props: { percent: 30 } });
    expect(line.text()).toContain("30%");
    const circle = mount(XProgress, { props: { percent: 75, type: "circle" } });
    expect(circle.find("svg").exists()).toBe(true);
    expect(circle.text()).toContain("75%");
  });

  it("XAccordion 展开项", async () => {
    const wrapper = mount(XAccordion, {
      props: { items: [{ title: "什么是 Nuxt UI？" }, { title: "如何安装？" }] },
      slots: { content: "组件库说明" },
    });
    await wrapper.findAll("button").find((b) => b.text().includes("什么是"))?.trigger("click");
    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
  });

  it("XCollapsible 点击展开内容", async () => {
    const wrapper = mount(XCollapsible, {
      slots: { content: "折叠的内容区域" },
    });
    await wrapper.find("button").trigger("click");
    expect(wrapper.text()).toContain("折叠的内容区域");
  });

  it("XListbox 点击选中触发 select", async () => {
    const wrapper = mount(XListbox, { props: { items: [{ key: "a", label: "选项 A" }] } });
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted("select")?.[0]).toEqual(["a"]);
  });

  it("XScrollArea 渲染滚动内容", () => {
    const wrapper = mount(XScrollArea, { slots: { default: "<div>滚动内容第 1 行</div>" } });
    expect(wrapper.text()).toContain("滚动内容第 1 行");
  });

  it("XCarousel 渲染全部轮播项", () => {
    const wrapper = mount(XCarousel, {
      props: { items: [{ key: "1" }, { key: "2" }] },
      slots: { item: "<p>Slide</p>" },
    });
    expect(wrapper.text()).toContain("Slide");
  });

  it("XSplitter 渲染两个面板", () => {
    const wrapper = mount(XSplitter, {
      slots: { first: "<div>左面板</div>", second: "<div>右面板</div>" },
    });
    expect(wrapper.text()).toContain("左面板");
    expect(wrapper.text()).toContain("右面板");
    expect(wrapper.find("[role=separator]").attributes("aria-orientation")).toBe("horizontal");
  });
});
