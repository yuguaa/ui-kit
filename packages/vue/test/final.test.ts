import { enableAutoUnmount, mount } from "@vue/test-utils";
import { h, nextTick } from "vue";
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
import XSkeleton from "@/components/kit/XSkeleton.vue";
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
    const link = wrapper.find("a");
    expect(link.attributes("href")).toBe("/docs");
    expect(link.classes()).toContain("text-primary");
  });

  it("XBreadcrumb 渲染层级与分隔符", () => {
    const wrapper = mount(XBreadcrumb, {
      props: { items: [{ label: "首页", href: "/" }, { label: "组件" }, { label: "面包屑" }] },
    });
    expect(wrapper.text()).toContain("首页");
    expect(wrapper.text()).toContain("面包屑");
    expect(wrapper.findAll("[data-slot='separator']")).toHaveLength(2);
  });

  it("XTabs 切换标签触发 update:modelValue", async () => {
    const wrapper = mount(XTabs, {
      props: { items: [{ value: "doc", label: "文档", content: "文档内容" }, { value: "api", label: "API", content: "API 内容" }], modelValue: "doc" },
    });
    expect(wrapper.text()).toContain("文档内容");
    await wrapper.findAll("button").find((b) => b.text() === "API")?.trigger("mousedown.left");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["api"]);
  });

  it("XNavigationMenu 渲染菜单项与选中态", () => {
    const wrapper = mount(XNavigationMenu, {
      props: { items: [{ label: "仪表盘", active: true }, { label: "设置" }] },
    });
    expect(wrapper.text()).toContain("仪表盘");
    const selected = wrapper.findAll("button").find((b) => b.text() === "仪表盘");
    expect(selected?.classes()).toContain("text-primary");
  });

  it("XPagination 渲染省略号分页", () => {
    const wrapper = mount(XPagination, { props: { page: 8, total: 100, itemsPerPage: 10, showEdges: true } });
    expect(wrapper.find("[data-type='ellipsis']").exists()).toBe(true);
  });

  it("XPagination 渲染页码按钮与选中态", () => {
    const wrapper = mount(XPagination, { props: { page: 1, total: 50, itemsPerPage: 10 } });
    const pageButtons = wrapper.findAll("button[data-type='page']");
    expect(pageButtons.length).toBeGreaterThanOrEqual(5);
    expect(wrapper.find("button[data-selected='true']").text()).toBe("1");
  });

  it("XStepper 状态渲染", () => {
    const wrapper = mount(XStepper, {
      props: { modelValue: 1, items: [{ title: "完成" }, { title: "进行中" }, { title: "待处理" }] },
    });
    expect(wrapper.text()).toContain("完成");
    expect(wrapper.text()).toContain("待处理");
  });

  it("XCommandPalette 渲染命令分组", () => {
    const wrapper = mount(XCommandPalette, {
      props: {
        groups: [{ id: "ops", label: "操作", items: [{ label: "新建文档", kbds: ["⌘ N"] }] }],
      },
    });
    expect(wrapper.text()).toContain("操作");
    expect(wrapper.text()).toContain("新建文档");
    expect(wrapper.text()).toContain("⌘ N");
  });
});

describe("浮层 Overlays", () => {
  it("XModal 渲染标题与正文与关闭按钮", async () => {
    mount(XModal, {
      props: { open: true, title: "对话框标题" },
      slots: { body: "正文" },
    });
    expect(await waitForBody("对话框标题")).toBe(true);
    expect(await waitForBody("正文")).toBe(true);
    expect(document.querySelector("button[data-slot='close']")).not.toBeNull();
  });

  it("XDrawer 渲染标题与内容", async () => {
    mount(XDrawer, {
      props: { open: true, title: "抽屉标题" },
      slots: { body: "抽屉内容" },
    });
    expect(await waitForBody("抽屉标题")).toBe(true);
    expect(await waitForBody("抽屉内容")).toBe(true);
  });

  it("XSlideover 渲染标题与内容", async () => {
    mount(XSlideover, {
      props: { open: true, title: "侧滑面板" },
      slots: { body: "面板内容" },
    });
    expect(await waitForBody("侧滑面板")).toBe(true);
    expect(await waitForBody("面板内容")).toBe(true);
  });

  it("XTooltip 聚焦触发器渲染提示内容", async () => {
    const wrapper = mount(XTooltip, {
      props: { text: "这是一段提示文字" },
      slots: { default: "<button>悬浮查看提示</button>" },
    });
    await wrapper.find("button").trigger("focus");
    expect(await waitForBody("这是一段提示文字")).toBe(true);
  });

  it("XPopover 渲染内容", async () => {
    mount(XPopover, {
      props: { open: true },
      slots: { default: "<button>打开气泡</button>", content: "气泡说明文字" },
    });
    expect(await waitForBody("气泡说明文字")).toBe(true);
  });

  it("XPopover arrow 渲染箭头", async () => {
    mount(XPopover, {
      props: { open: true, arrow: true },
      slots: { default: "<button>打开</button>", content: "内容" },
    });
    expect(await waitForBody("内容")).toBe(true);
    expect(document.body.querySelector("svg[data-slot='arrow']")).not.toBeNull();
  });

  it("XDropdownMenu 菜单项渲染说明与快捷键", async () => {
    mount(XDropdownMenu, {
      props: {
        open: true,
        items: [{ key: "copy", label: "复制链接", description: "复制到剪贴板", kbds: ["⌘C"] }],
      },
    });
    expect(await waitForBody("复制链接")).toBe(true);
    expect(await waitForBody("复制到剪贴板")).toBe(true);
    expect(await waitForBody("⌘C")).toBe(true);
  });

  it("XScrollArea orientation=horizontal 横向排列", () => {
    const wrapper = mount(XScrollArea, {
      props: { orientation: "horizontal" },
      slots: { default: "<span>横向内容</span>" },
    });
    expect(wrapper.html()).toContain("flex-row");
  });

  it("XSplitter collapsible 渲染折叠面板与调整手柄", () => {
    const wrapper = mount(XSplitter, {
      props: {
        items: [
          { id: "left", collapsible: true, defaultSize: 50 },
          { id: "right", defaultSize: 50 },
        ],
      },
      slots: { "panel-0": "<div>左面板</div>", "panel-1": "<div>右面板</div>" },
    });
    const handles = wrapper.findAll("[role=separator]");
    expect(handles.length).toBeGreaterThan(0);
    expect(handles[0]!.attributes("data-orientation")).toBe("horizontal");
    expect(handles[0]!.attributes("data-panel-resize-handle-enabled")).toBe("true");
    expect(wrapper.find("[data-panel-collapsible='true']").exists()).toBe(true);
  });

  it("XContextMenu 右键触发渲染菜单项", async () => {
    const wrapper = mount(XContextMenu, {
      props: { items: [{ key: "edit", label: "编辑" }, { key: "delete", label: "删除" }] },
      slots: { default: "<div id='area'>右键区域</div>" },
    });
    await wrapper.find("#area").trigger("contextmenu");
    expect(await waitForBody("编辑")).toBe(true);
    expect(await waitForBody("删除")).toBe(true);
  });

  it("XDropdownMenu 点击菜单项关闭菜单", async () => {
    const wrapper = mount(XDropdownMenu, {
      props: { open: true, items: [{ key: "rename", label: "重命名" }] },
    });
    await waitForBody("重命名");
    const item = document.querySelector("[data-slot='item']");
    item?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("update:open")).toContainEqual([false]);
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
        columns: [{ accessorKey: "name", header: "名称" }, { accessorKey: "age", header: "年龄" }],
        data: [{ key: "1", name: "张三", age: 28 }],
      },
    });
    expect(wrapper.text()).toContain("名称");
    expect(wrapper.text()).toContain("张三");
    expect(wrapper.text()).toContain("28");
  });

  it("XTable loading 渲染骨架行", () => {
    const wrapper = mount(XTable, {
      props: { columns: [{ accessorKey: "a", header: "A" }], data: [], loading: true },
      slots: { loading: () => h(XSkeleton) },
    });
    expect(wrapper.findAllComponents(XSkeleton).length).toBeGreaterThan(0);
  });

  it("XTable 受控 sorting 切换行顺序", async () => {
    const wrapper = mount(XTable, {
      props: {
        columns: [
          { accessorKey: "name", header: "名称", enableSorting: true },
          { accessorKey: "count", header: "数量" },
        ],
        data: [
          { key: "1", name: "B", count: 2 },
          { key: "2", name: "A", count: 1 },
        ],
        sorting: [{ id: "name", desc: false }],
      },
    });
    const firstCell = () => wrapper.find("tbody tr td").text();
    expect(firstCell()).toBe("A");

    await wrapper.setProps({ sorting: [{ id: "name", desc: true }] });
    expect(firstCell()).toBe("B");
  });

  it("XTable rowSelection 状态反映到行选中标记", () => {
    const wrapper = mount(XTable, {
      props: {
        columns: [{ accessorKey: "name", header: "名称" }],
        data: [{ key: "1", name: "张三" }, { key: "2", name: "李四" }],
        rowSelectionOptions: { enableRowSelection: true },
        rowSelection: { 1: true },
      },
    });
    const rows = wrapper.findAll("tbody [data-slot='tr']");
    expect(rows[0]?.attributes("data-selected")).toBe("false");
    expect(rows[1]?.attributes("data-selected")).toBe("true");
  });

  it("XTable sticky 时表头固定在滚动区顶部", () => {
    const wrapper = mount(XTable, {
      props: {
        columns: [{ accessorKey: "name", header: "名称" }],
        data: [{ key: "1", name: "张三" }],
        sticky: true,
      },
    });
    expect(wrapper.find("thead").classes()).toContain("sticky");
  });

  it("XAlert 语义渲染与关闭", async () => {
    const wrapper = mount(XAlert, {
      props: { color: "success", title: "成功提示", close: true },
    });
    expect(wrapper.text()).toContain("成功提示");
    await wrapper.find("button[data-slot='close']").trigger("click");
    expect(wrapper.emitted("update:open")).toEqual([[false]]);
  });

  it("XProgress 确定进度与不确定进度", () => {
    const line = mount(XProgress, { props: { modelValue: 50, status: true } });
    expect(line.find("[data-slot='status']").exists()).toBe(true);
    const indeterminate = mount(XProgress);
    expect(indeterminate.find("[data-slot='indicator']").exists()).toBe(true);
  });

  it("XAccordion 展开项", async () => {
    const wrapper = mount(XAccordion, {
      props: { items: [{ label: "什么是 Nuxt UI？" }, { label: "如何安装？" }] },
      slots: { content: "组件库说明" },
    });
    await wrapper.findAll("button").find((b) => b.text().includes("什么是"))?.trigger("click");
    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
  });

  it("XCollapsible 点击触发器展开内容", async () => {
    const wrapper = mount(XCollapsible, {
      slots: { default: "<button>toggle</button>", content: "折叠的内容区域" },
    });
    await wrapper.find("button").trigger("click");
    expect(wrapper.text()).toContain("折叠的内容区域");
  });

  it("XListbox 点击选中触发 update:modelValue", async () => {
    const wrapper = mount(XListbox, { props: { items: [{ key: "a", label: "选项 A" }], valueKey: "key" } });
    await wrapper.find("[data-slot='item']").trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["a"]);
  });

  it("XScrollArea 渲染滚动内容", () => {
    const wrapper = mount(XScrollArea, { slots: { default: "<div>滚动内容第 1 行</div>" } });
    expect(wrapper.text()).toContain("滚动内容第 1 行");
  });

  it("XCarousel 渲染全部轮播项", () => {
    const wrapper = mount(XCarousel, {
      props: { items: [{ key: "1" }, { key: "2" }] },
      slots: { default: "<p>Slide</p>" },
    });
    expect(wrapper.findAll("[data-slot='item']").length).toBe(2);
    expect(wrapper.text()).toContain("Slide");
  });

  it("XSplitter 渲染两个面板", () => {
    const wrapper = mount(XSplitter, {
      props: { items: [{ id: "a" }, { id: "b" }] },
      slots: { "panel-0": "<div>左面板</div>", "panel-1": "<div>右面板</div>" },
    });
    expect(wrapper.text()).toContain("左面板");
    expect(wrapper.text()).toContain("右面板");
    expect(wrapper.find("[role=separator]").attributes("data-orientation")).toBe("horizontal");
  });
});

describe("XAlert 自定义图标与操作区", () => {
  it("leading 插槽优先于默认图标，actions 插槽渲染操作区", () => {
    const wrapper = mount(XAlert, {
      props: { color: "info", title: "提示", description: "说明", icon: "bell" },
      slots: { leading: "<i data-test='custom-icon' />", actions: "<button>处理</button>" },
    });
    expect(wrapper.find("[data-test='custom-icon']").exists()).toBe(true);
    expect(wrapper.find("button").text()).toBe("处理");
  });
});

describe("XCarousel 箭头、指示点与方向", () => {
  const items = [
    { key: "1", content: "Slide 1" },
    { key: "2", content: "Slide 2" },
  ];

  it("arrows=true 渲染前后箭头，arrows=false 时不渲染", () => {
    expect(mount(XCarousel, { props: { items, arrows: true } }).find("[data-slot='prev']").exists()).toBe(true);
    expect(mount(XCarousel, { props: { items, arrows: true } }).find("[data-slot='next']").exists()).toBe(true);
    const noArrows = mount(XCarousel, { props: { items, arrows: false } });
    expect(noArrows.find("[data-slot='prev']").exists()).toBe(false);
    expect(noArrows.find("[data-slot='next']").exists()).toBe(false);
  });

  it("dots 渲染可点击指示点", async () => {
    const wrapper = mount(XCarousel, { attachTo: document.body, props: { items, dots: true } });
    /* embla 的 init 事件异步发出，等待指示点渲染完成 */
    await new Promise((resolve) => setTimeout(resolve, 50));
    expect(wrapper.find("[aria-label='Go to slide 1']").exists()).toBe(true);
    expect(wrapper.findAll("[data-slot='dot']").length).toBeGreaterThan(0);
  });

  it("orientation=vertical 使内容纵向排列", () => {
    const wrapper = mount(XCarousel, { props: { items, orientation: "vertical" } });
    expect(wrapper.html()).toContain("flex-col");
  });
});
