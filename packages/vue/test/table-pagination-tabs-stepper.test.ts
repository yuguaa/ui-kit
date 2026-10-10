import { enableAutoUnmount, mount } from "@vue/test-utils";
import { h, nextTick } from "vue";
import { afterEach, describe, expect, it, vi } from "vitest";
import XAvatar from "@/components/kit/XAvatar.vue";
import XIcon from "@/components/kit/XIcon.vue";
import XPagination from "@/components/kit/XPagination.vue";
import XStepper from "@/components/kit/XStepper.vue";
import type { StepperUi } from "@/components/kit/XStepper.vue";
import XSkeleton from "@/components/kit/XSkeleton.vue";
import XTable from "@/components/kit/XTable.vue";
import XTabs from "@/components/kit/XTabs.vue";
import type { TabsItem, TabsUi } from "@/components/kit/XTabs.vue";

enableAutoUnmount(afterEach);

describe("XTabs 新能力", () => {
  const items = [
    { value: "a", label: "标签一", content: "内容一" },
    { value: "b", label: "标签二", content: "内容二" },
  ];

  it("ui 插槽类名应用到对应元素", () => {
    const wrapper = mount(XTabs, {
      props: {
        items,
        ui: {
          root: "custom-root",
          list: "custom-list",
          trigger: "custom-trigger",
          label: "custom-label",
          content: "custom-content",
        },
      },
    });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("custom-root");
    expect(wrapper.find("[data-slot='list']").classes()).toContain("custom-list");
    expect(wrapper.find("[data-slot='trigger']").classes()).toContain("custom-trigger");
    expect(wrapper.find("[data-slot='label']").classes()).toContain("custom-label");
    expect(wrapper.find("[data-slot='content']").classes()).toContain("custom-content");
  });

  it("variant link 应用下划线指示器样式", () => {
    const wrapper = mount(XTabs, { props: { items, variant: "link", modelValue: "a" } });
    expect(wrapper.find("[data-slot='list']").classes()).toContain("border-b");
    expect(wrapper.find("[data-slot='list']").classes()).toContain("-mb-px");
  });

  it("color success 激活文字与聚焦环使用语义色", () => {
    const wrapper = mount(XTabs, { props: { items, color: "success", modelValue: "a" } });
    expect(wrapper.find("[data-slot='trigger']").classes()).toContain("outline-success-6/25");
    expect(wrapper.find("[data-slot='trigger']").classes()).toContain("data-[state=active]:text-white");
  });

  it("icon / avatar / badge 字段渲染", () => {
    const wrapper = mount(XTabs, {
      props: {
        items: [
          { value: "a", label: "图标", icon: "check" },
          { value: "b", label: "头像", avatar: { text: "张" } },
          { value: "c", label: "徽标", badge: 3 },
        ],
        modelValue: "a",
      },
    });
    expect(wrapper.find("[data-slot='leadingIcon']").exists()).toBe(true);
    expect(wrapper.findAllComponents(XAvatar).length).toBeGreaterThan(0);
    expect(wrapper.text()).toContain("3");
  });

  it("valueKey / labelKey 字段映射", () => {
    const wrapper = mount(XTabs, {
      props: {
        items: [{ id: "x", name: "命名标签", content: "映射内容" }],
        valueKey: "id",
        labelKey: "name",
        modelValue: "x",
      },
    });
    expect(wrapper.text()).toContain("命名标签");
    expect(wrapper.text()).toContain("映射内容");
  });

  it("content=false 不渲染内容面板", () => {
    const wrapper = mount(XTabs, { props: { items, content: false } });
    expect(wrapper.find("[data-slot='content']").exists()).toBe(false);
  });

  it("content 插槽按 item.slot 分发", () => {
    const wrapper = mount(XTabs, {
      props: {
        items: [
          { value: "a", label: "一", slot: "detail" },
          { value: "b", label: "二", slot: "detail" },
        ],
        modelValue: "a",
      },
      slots: {
        detail: ({ item }: { item: TabsItem; index: number; ui: TabsUi }) => h("p", `详情: ${item.label}`),
      },
    });
    expect(wrapper.text()).toContain("详情: 一");
  });

  it("leading 插槽的 ui 参数携带尺寸键(leadingAvatarSize / trailingBadgeSize)", () => {
    const wrapper = mount(XTabs, {
      props: { items, size: "xl" },
      slots: {
        leading: ({ ui }: { ui: TabsUi }) => h("span", { "data-test": "lead" }, [
          String(ui.leadingAvatarSize),
          "/",
          String(ui.trailingBadgeSize),
        ]),
      },
    });
    expect(wrapper.find("[data-test='lead']").text()).toContain("md/sm");
  });
});

describe("XPagination 新能力", () => {
  it("ui 插槽类名应用到对应元素", () => {
    const wrapper = mount(XPagination, {
      props: {
        page: 5,
        total: 200,
        itemsPerPage: 10,
        ui: { root: "custom-root", list: "custom-list", item: "custom-item", label: "custom-label" },
      },
    });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("custom-root");
    expect(wrapper.find("[data-slot='list']").classes()).toContain("custom-list");
    const pageButton = wrapper.findAll("button").find((button) => button.text() === "4");
    expect(pageButton?.classes()).toContain("custom-item");
    expect(pageButton?.find("span").classes()).toContain("custom-label");
  });

  it("激活页码应用 activeColor / activeVariant", () => {
    const wrapper = mount(XPagination, { props: { page: 2, total: 30, itemsPerPage: 10 } });
    const active = wrapper.findAll("button").find((button) => button.text() === "2");
    expect(active?.classes()).toContain("bg-primary-6");
    const inactive = wrapper.findAll("button").find((button) => button.text() === "3");
    expect(inactive?.classes()).toContain("text-neutral-6");
  });

  it("showControls=false 隐藏首页与末页按钮", () => {
    const wrapper = mount(XPagination, { props: { page: 2, total: 30, itemsPerPage: 10, showControls: false } });
    expect(wrapper.find("[data-slot='first']").exists()).toBe(false);
    expect(wrapper.find("[data-slot='last']").exists()).toBe(false);
    expect(wrapper.find("[data-slot='prev']").exists()).toBe(false);
    expect(wrapper.find("[data-slot='next']").exists()).toBe(false);
  });

  it("firstIcon 等图标属性优先于默认图标", () => {
    const wrapper = mount(XPagination, {
      props: { page: 2, total: 30, itemsPerPage: 10, firstIcon: "plus", prevIcon: "plus" },
    });
    expect(wrapper.findAllComponents(XIcon).length).toBeGreaterThan(0);
  });

  it("页码按钮 label 应用默认最小宽度类", () => {
    const wrapper = mount(XPagination, { props: { page: 1, total: 30, itemsPerPage: 10 } });
    const pageButton = wrapper.findAll("button").find((button) => button.text() === "2");
    expect(pageButton?.find("span").classes()).toContain("min-w-5");
    expect(pageButton?.find("span").classes()).toContain("text-center");
  });

  it("showEdges 渲染省略号且 ui.ellipsis 类名生效", () => {
    const wrapper = mount(XPagination, {
      props: { page: 8, total: 100, itemsPerPage: 10, showEdges: true, ui: { ellipsis: "custom-ellipsis" } },
    });
    const ellipsis = wrapper.find("[data-type='ellipsis']");
    expect(ellipsis.exists()).toBe(true);
    expect(ellipsis.classes()).toContain("custom-ellipsis");
    expect(ellipsis.classes()).toContain("pointer-events-none");
  });

  it("to 回调用于渲染链接控件", () => {
    const to = vi.fn();
    mount(XPagination, {
      props: { page: 1, total: 30, itemsPerPage: 10, to },
    });
    expect(to).toHaveBeenCalledWith(1);
  });

  it("item 插槽自定义页码渲染", () => {
    const wrapper = mount(XPagination, {
      props: { page: 1, total: 30, itemsPerPage: 10 },
      slots: {
        item: `<template #item="{ item, page }">第{{ item.value }}页</template>`,
      },
    });
    expect(wrapper.text()).toContain("第2页");
  });

  it("color / variant / size 传递到按钮", () => {
    const wrapper = mount(XPagination, {
      props: { page: 1, total: 30, itemsPerPage: 10, color: "success", variant: "soft", size: "lg" },
    });
    const pageButton = wrapper.findAll("button").find((button) => button.text() === "2");
    expect(pageButton?.classes()).toContain("bg-success-1");
    expect(pageButton?.classes()).toContain("size-9");
  });
});

describe("XStepper 新能力", () => {
  const items = [
    { value: "basic", title: "基础信息", description: "填写基础资料", content: "基础信息表单" },
    { value: "confirm", title: "确认提交", description: "核对并提交", content: "确认提交面板" },
  ];

  it("valueKey 字段值驱动当前步骤与内容面板", () => {
    const wrapper = mount(XStepper, { props: { items, modelValue: "basic" } });
    expect(wrapper.find("[data-slot='title']").text()).toContain("基础信息");
    expect(wrapper.find("[data-slot='content']").text()).toContain("基础信息表单");
  });

  it("next / prev 切换步骤并触发事件", async () => {
    const wrapper = mount(XStepper, { props: { items } });
    const stepper = wrapper.vm as unknown as { next: () => void; prev: () => void };
    stepper.next();
    await nextTick();
    expect(wrapper.emitted("next")?.[0]).toEqual([items[1]]);
    expect(wrapper.find("[data-slot='content']").text()).toContain("确认提交面板");

    stepper.prev();
    await nextTick();
    expect(wrapper.emitted("prev")?.[0]).toEqual([items[0]]);
  });

  it("size 控制触发器尺寸", () => {
    const wrapper = mount(XStepper, { props: { items, size: "xl" } });
    expect(wrapper.find("[data-slot='trigger']").classes()).toContain("size-14");
  });

  it("linear 模式只允许回到已完成步骤或前进一步", async () => {
    const steps = [
      { value: "step1", title: "第一步", content: "第一步面板" },
      { value: "step2", title: "第二步", content: "第二步面板" },
      { value: "step3", title: "第三步", content: "第三步面板" },
    ];
    const wrapper = mount(XStepper, { props: { items: steps, modelValue: "step1" } });
    const triggers = wrapper.findAll("[data-slot='trigger']");

    await triggers[2]!.trigger("mousedown");
    expect(wrapper.find("[data-slot='content']").text()).toContain("第一步面板");

    await triggers[1]!.trigger("mousedown");
    expect(wrapper.find("[data-slot='content']").text()).toContain("第二步面板");

    await triggers[2]!.trigger("mousedown");
    expect(wrapper.find("[data-slot='content']").text()).toContain("第三步面板");

    await wrapper.setProps({ linear: false });
    await triggers[0]!.trigger("mousedown");
    expect(wrapper.find("[data-slot='content']").text()).toContain("第一步面板");

    /* 关闭按顺序模式后允许向后跳步 */
    const loose = mount(XStepper, { props: { items: steps, modelValue: "step1", linear: false } });
    await loose.findAll("[data-slot='trigger']")[2]!.trigger("mousedown");
    expect(loose.find("[data-slot='content']").text()).toContain("第三步面板");
  });

  it("color success 激活触发器使用语义色", () => {
    const wrapper = mount(XStepper, { props: { items, color: "success", modelValue: "basic" } });
    expect(wrapper.find("[data-slot='trigger']").classes()).toContain("group-data-[state=active]:bg-success-6");
  });

  it("indicator / title / description / content 插槽自定义", () => {
    const wrapper = mount(XStepper, {
      props: { items, modelValue: "basic" },
      slots: {
        indicator: `<template #indicator="{ item }">★</template>`,
        title: `<template #title="{ item }">标题: {{ item.title }}</template>`,
        description: `<template #description="{ item }">描述: {{ item.description }}</template>`,
        content: `<template #content="{ item }">面板: {{ item.content }}</template>`,
      },
    });
    expect(wrapper.text()).toContain("★");
    expect(wrapper.text()).toContain("标题: 基础信息");
    expect(wrapper.text()).toContain("描述: 填写基础资料");
    expect(wrapper.text()).toContain("面板: 基础信息表单");
  });

  it("indicator 插槽的 ui 参数携带主题类名", () => {
    const wrapper = mount(XStepper, {
      props: { items, modelValue: "basic", ui: { indicator: "custom-indicator" } },
      slots: {
        indicator: ({ ui }: { ui?: StepperUi }) => h("span", ui?.indicator ?? ""),
      },
    });
    expect(wrapper.find("[data-slot='indicator']").classes()).toContain("custom-indicator");
  });

  it("ui 插槽类名应用到对应元素", () => {
    const wrapper = mount(XStepper, {
      props: {
        items,
        ui: { root: "custom-root", header: "custom-header", item: "custom-item", trigger: "custom-trigger" },
      },
    });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("custom-root");
    expect(wrapper.find("[data-slot='header']").classes()).toContain("custom-header");
    expect(wrapper.find("[data-slot='item']").classes()).toContain("custom-item");
    expect(wrapper.find("[data-slot='trigger']").classes()).toContain("custom-trigger");
  });
});

describe("XTable 新能力", () => {
  const columns = [{ accessorKey: "name", header: "名称" }];

  it("caption 与 empty 渲染", () => {
    const wrapper = mount(XTable, {
      props: { columns, data: [], caption: "示例表格", empty: "没有数据" },
    });
    expect(wrapper.find("caption").text()).toContain("示例表格");
    expect(wrapper.find("[data-slot='empty']").text()).toContain("没有数据");
  });

  it("empty 插槽优先于 empty 文字", () => {
    const wrapper = mount(XTable, {
      props: { columns, data: [], empty: "默认空提示" },
      slots: { empty: "<p>自定义空提示</p>" },
    });
    expect(wrapper.find("[data-slot='empty']").text()).toContain("自定义空提示");
  });

  it("columnFiltersOptions 受控列筛选", () => {
    const wrapper = mount(XTable, {
      props: {
        columns,
        data: [{ key: "1", name: "张三" }, { key: "2", name: "李四" }],
        columnFiltersOptions: { enableColumnFilters: true },
        columnFilters: [{ id: "name", value: "张" }],
      },
    });
    const cells = wrapper.findAll("tbody td").map((cell) => cell.text());
    expect(cells).toEqual(["张三"]);
  });

  it("columnPinningOptions 固定列获得定位样式", () => {
    const pinColumns = [
      { accessorKey: "name", header: "名称" },
      { accessorKey: "age", header: "年龄" },
    ];
    const wrapper = mount(XTable, {
      props: {
        columns: pinColumns,
        data: [{ key: "1", name: "张三", age: 28 }],
        columnPinningOptions: { enableColumnPinning: true },
        columnPinning: { left: ["name"] },
      },
    });
    const firstTh = wrapper.find("thead th");
    expect(firstTh.attributes("data-pinned")).toBe("left");
    expect(firstTh.attributes("style")).toContain("left: 0px");
    expect(firstTh.classes()).toContain("sticky");
  });

  it("sticky header 变体固定表头,footer 变体固定表尾", () => {
    const footerColumns = [{ accessorKey: "name", header: "名称", footer: "合计" }];
    const headerOnly = mount(XTable, { props: { columns, data: [{ key: "1", name: "张三" }], sticky: "header" } });
    expect(headerOnly.find("thead").classes()).toContain("sticky");
    expect(headerOnly.find("tfoot").exists()).toBe(false);

    const footerOnly = mount(XTable, {
      props: { columns: footerColumns, data: [{ key: "1", name: "张三" }], sticky: "footer" },
    });
    expect(footerOnly.find("thead").classes()).not.toContain("sticky");
    expect(footerOnly.find("tfoot").classes()).toContain("sticky");
    expect(footerOnly.text()).toContain("合计");
  });

  it("onSelect 点击行触发且选中态反映到 data-selected", async () => {
    const onSelect = vi.fn();
    const wrapper = mount(XTable, {
      props: {
        columns,
        data: [{ key: "1", name: "张三" }],
        rowSelectionOptions: { enableRowSelection: true },
        rowSelection: { 0: true },
        onSelect,
      },
    });
    expect(wrapper.find("tbody tr").attributes("data-selected")).toBe("true");
    await wrapper.find("tbody tr").trigger("click");
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it("ui 插槽类名应用到对应元素", () => {
    const wrapper = mount(XTable, {
      props: {
        columns,
        data: [{ key: "1", name: "张三" }],
        ui: {
          root: "custom-root",
          base: "custom-base",
          thead: "custom-thead",
          tbody: "custom-tbody",
          tr: "custom-tr",
          th: "custom-th",
          td: "custom-td",
          separator: "custom-separator",
        },
      },
    });
    expect(wrapper.find("[data-slot='root']").classes()).toContain("custom-root");
    expect(wrapper.find("[data-slot='base']").classes()).toContain("custom-base");
    expect(wrapper.find("[data-slot='thead']").classes()).toContain("custom-thead");
    expect(wrapper.find("[data-slot='tbody']").classes()).toContain("custom-tbody");
    expect(wrapper.find("thead [data-slot='tr']").classes()).toContain("custom-tr");
    expect(wrapper.find("[data-slot='th']").classes()).toContain("custom-th");
    expect(wrapper.find("tbody [data-slot='td']").classes()).toContain("custom-td");
    expect(wrapper.find("[data-slot='separator']").classes()).toContain("custom-separator");
  });

  it("as 渲染为指定元素", () => {
    const wrapper = mount(XTable, {
      props: { columns, data: [{ key: "1", name: "张三" }], as: "section" },
    });
    expect(wrapper.find("section[data-slot='root']").exists()).toBe(true);
  });

  it("watchOptions 关闭深度监听后浅比较数据变化", async () => {
    const wrapper = mount(XTable, {
      props: { columns, data: [{ key: "1", name: "张三" }], watchOptions: { deep: false } },
    });
    await wrapper.setProps({ data: [{ key: "1", name: "李四" }] });
    expect(wrapper.text()).toContain("李四");
  });

  it("loading 状态渲染骨架且 ui.loading 类名生效", () => {
    const wrapper = mount(XTable, {
      props: { columns, data: [], loading: true, ui: { loading: "custom-loading" } },
    });
    expect(wrapper.find("[data-slot='loading']").classes()).toContain("custom-loading");
    expect(wrapper.findAllComponents(XSkeleton).length).toBe(3);
  });

  it("loading 插槽优先于默认骨架", () => {
    const wrapper = mount(XTable, {
      props: { columns, data: [], loading: true },
      slots: { loading: "<p>加载中</p>" },
    });
    expect(wrapper.find("[data-slot='loading']").text()).toContain("加载中");
    expect(wrapper.findAllComponents(XSkeleton).length).toBe(0);
  });
});
