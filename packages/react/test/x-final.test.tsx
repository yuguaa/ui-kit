import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { describe, expect, it, vi } from "vitest";
import { XAccordion } from "@/components/kit/x-accordion";
import { XAlert } from "@/components/kit/x-alert";
import { XBreadcrumb } from "@/components/kit/x-breadcrumb";
import { XButton } from "@/components/kit/x-button";
import { XCarousel } from "@/components/kit/x-carousel";
import { XCollapsible } from "@/components/kit/x-collapsible";
import { XCommandPalette, type XCommandPaletteApi } from "@/components/kit/x-command-palette";
import { XContextMenu } from "@/components/kit/x-context-menu";
import { XDrawer } from "@/components/kit/x-drawer";
import { XDropdownMenu } from "@/components/kit/x-dropdown-menu";
import { XLink } from "@/components/kit/x-link";
import { XListbox } from "@/components/kit/x-listbox";
import { XModal } from "@/components/kit/x-modal";
import { XNavigationMenu } from "@/components/kit/x-navigation-menu";
import { XPagination } from "@/components/kit/x-pagination";
import { XPopover } from "@/components/kit/x-popover";
import { XProgress } from "@/components/kit/x-progress";
import { XScrollArea } from "@/components/kit/x-scroll-area";
import { XSlideover } from "@/components/kit/x-slideover";
import { XSplitter } from "@/components/kit/x-splitter";
import { XStepper } from "@/components/kit/x-stepper";
import { XTable } from "@/components/kit/x-table";
import { XTabs } from "@/components/kit/x-tabs";
import { toast, XToaster } from "@/components/kit/x-toast";
import { XTooltip } from "@/components/kit/x-tooltip";

describe("导航 Navigation", () => {
  it("XLink 渲染链接与激活态", () => {
    render(<XLink to="/docs" active>文档</XLink>);
    const link = screen.getByRole("link", { name: "文档" });
    expect(link).toHaveAttribute("href", "/docs");
    expect(link).toHaveAttribute("aria-current", "page");
    expect(link).toHaveClass("text-primary-7");
  });

  it("XBreadcrumb 渲染层级与分隔符", () => {
    render(
      <XBreadcrumb
        items={[{ title: "首页", href: "/" }, { title: "组件" }, { title: "面包屑" }]}
        separator="/"
      />,
    );
    expect(screen.getByText("首页")).toBeInTheDocument();
    expect(screen.getByText("面包屑")).toBeInTheDocument();
    expect(screen.getAllByText("/")).toHaveLength(2);
  });

  it("XTabs 切换标签触发 onValueChange", async () => {
    const onValueChange = vi.fn();
    render(
      <XTabs
        items={[
          { value: "doc", label: "文档", content: "文档内容" },
          { value: "api", label: "API", content: "API 内容" },
        ]}
        onValueChange={onValueChange}
      />,
    );
    expect(screen.getByText("文档内容")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("tab", { name: "API" }));
    expect(onValueChange).toHaveBeenCalledWith("api");
  });

  it("XTabs unmountOnHide 隐藏面板内容", () => {
    render(
      <XTabs
        unmountOnHide
        defaultValue="a"
        items={[
          { value: "a", label: "A", content: "内容 A" },
          { value: "b", label: "B", content: "内容 B" },
        ]}
      />,
    );
    expect(screen.queryByText("内容 B")).not.toBeInTheDocument();
  });

  it("XNavigationMenu 垂直模式渲染菜单项与选中态", () => {
    render(
      <XNavigationMenu
        items={[{ key: "dashboard", label: "仪表盘" }, { key: "settings", label: "设置" }]}
        selectedKeys={["dashboard"]}
      />,
    );
    expect(screen.getByRole("button", { name: "仪表盘" })).toHaveClass("bg-primary-1");
  });

  it("XPagination 渲染省略号分页", () => {
    const { container } = render(<XPagination page={8} total={100} itemsPerPage={10} showEdges />);
    expect(screen.getByRole("button", { name: "8" })).toHaveAttribute("aria-current", "page");
    expect(container.querySelector("[data-slot='ellipsis']")).toBeInTheDocument();
  });

  it("XPagination 点击页码触发 onPageChange", async () => {
    const onPageChange = vi.fn();
    render(<XPagination page={1} total={50} itemsPerPage={10} onPageChange={onPageChange} />);
    await userEvent.click(screen.getByRole("button", { name: "3" }));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it("XStepper 状态与受控 value", () => {
    render(
      <XStepper
        value={1}
        items={[{ title: "完成" }, { title: "进行中" }, { title: "待处理" }]}
      />,
    );
    expect(screen.getByText("完成")).toBeInTheDocument();
    expect(screen.getByText("进行中").closest("[data-slot='item']")).toHaveAttribute("data-state", "active");
  });

  it("XCommandPalette 打开后渲染命令分组", async () => {
    const ref = React.createRef<XCommandPaletteApi>();
    render(
      <XCommandPalette
        ref={ref}
        groups={[{ label: "操作", commands: [{ label: "新建文档", shortcut: "⌘ N" }] }]}
      />,
    );
    ref.current?.open();
    expect(await screen.findByText("新建文档")).toBeInTheDocument();
    expect(screen.getByText("⌘ N")).toBeInTheDocument();
  });
});

describe("浮层 Overlays", () => {
  it("XModal 渲染标题、正文与关闭按钮", async () => {
    const onOpenChange = vi.fn();
    render(<XModal open title="对话框标题" body="正文" onOpenChange={onOpenChange} />);
    expect(screen.getByText("对话框标题")).toBeInTheDocument();
    expect(screen.getByText("正文")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "关闭" }));
    expect(onOpenChange).toHaveBeenCalledWith(false, expect.anything());
  });

  it("XDrawer 渲染标题与内容", () => {
    render(<XDrawer open title="抽屉标题" body="抽屉内容" />);
    expect(screen.getByText("抽屉标题")).toBeInTheDocument();
    expect(screen.getByText("抽屉内容")).toBeInTheDocument();
  });

  it("XSlideover 渲染标题与内容", () => {
    render(<XSlideover open title="侧滑面板" body="面板内容" />);
    expect(screen.getByText("侧滑面板")).toBeInTheDocument();
    expect(screen.getByText("面板内容")).toBeInTheDocument();
  });

  it("XTooltip 悬浮显示提示", async () => {
    render(
      <XTooltip text="这是一段提示文字" delayDuration={0}>
        <button type="button">悬浮查看提示</button>
      </XTooltip>,
    );
    await userEvent.hover(screen.getByRole("button", { name: "悬浮查看提示" }));
    expect(await screen.findByText("这是一段提示文字", {}, { timeout: 2000 })).toBeInTheDocument();
  });

  it("XPopover 点击打开显示内容", async () => {
    render(
      <XPopover content="气泡说明文字">
        <button type="button">打开气泡</button>
      </XPopover>,
    );
    await userEvent.click(screen.getByRole("button", { name: "打开气泡" }));
    expect(await screen.findByText("气泡说明文字")).toBeInTheDocument();
  });

  it("XContextMenu 右键打开菜单并选中", async () => {
    const onSelect = vi.fn();
    render(
      <XContextMenu
        items={[{ key: "edit", label: "编辑" }, { key: "delete", label: "删除" }]}
        onOpenChange={undefined}
      >
        <div>右键区域</div>
      </XContextMenu>
    );
    await userEvent.pointer({ keys: "[MouseRight]", target: screen.getByText("右键区域") });
    await userEvent.click(await screen.findByText("编辑"));
  });

  it("XDropdownMenu 点击展开并选中", async () => {
    const onSelect = vi.fn();
    render(
      <XDropdownMenu
        items={[{ key: "rename", label: "重命名" }, { key: "delete", label: "删除" }]}
      />,
    );
    await userEvent.click(screen.getByRole("button", { name: "操作" }));
    await userEvent.click(await screen.findByText("重命名"));
  });

  it("XToaster 渲染容器", () => {
    const { container } = render(<XToaster />);
    expect(container).toBeTruthy();
    expect(typeof toast.show).toBe("function");
  });
});

describe("内容 Content", () => {
  it("XTable 渲染行列数据", () => {
    render(
      <XTable
        columns={[{ accessorKey: "name", header: "名称" }, { accessorKey: "age", header: "年龄" }]}
        data={[{ key: "1", name: "张三", age: 28 }]}
      />,
    );
    expect(screen.getByText("名称")).toBeInTheDocument();
    expect(screen.getByText("张三")).toBeInTheDocument();
    expect(screen.getByText("28")).toBeInTheDocument();
  });

  it("XTable loading 渲染骨架行", () => {
    const { container } = render(<XTable columns={[{ accessorKey: "a", header: "A" }]} data={[]} loading />);
    expect(container.querySelectorAll("[data-slot='skeleton']").length).toBeGreaterThan(0);
  });

  it("XTable 点击可排序表头切换顺序", async () => {
    const columns = [
      {
        accessorKey: "name",
        enableSorting: true,
        header: ({ column }: { column: { toggleSorting: () => void } }) => (
          <button type="button" onClick={() => column.toggleSorting()}>名称</button>
        ),
      },
      { accessorKey: "count", header: "数量" },
    ];
    const data = [
      { key: "1", name: "B", count: 2 },
      { key: "2", name: "A", count: 1 },
    ];
    const { container } = render(
      <XTable columns={columns} data={data} sortingOptions={{ enableSorting: true }} />,
    );
    expect(container.querySelector("tbody tr td")?.textContent).toBe("B");

    await userEvent.click(screen.getByRole("button", { name: "名称" }));
    expect(container.querySelector("tbody tr td")?.textContent).toBe("A");

    await userEvent.click(screen.getByRole("button", { name: "名称" }));
    expect(container.querySelector("tbody tr td")?.textContent).toBe("B");
  });

  it("XTable rowSelection 状态反映到行选中标记", () => {
    render(
      <XTable
        columns={[{ accessorKey: "name", header: "名称" }]}
        data={[{ key: "1", name: "张三" }, { key: "2", name: "李四" }]}
        rowSelectionOptions={{ enableRowSelection: true, state: { rowSelection: { 1: true } } }}
      />,
    );
    const rows = document.querySelectorAll("tbody [data-slot='tr']");
    expect(rows[0]).toHaveAttribute("data-selected", "false");
    expect(rows[1]).toHaveAttribute("data-selected", "true");
  });

  it("XTable sticky 时表头固定在滚动区顶部", () => {
    const { container } = render(
      <XTable columns={[{ accessorKey: "name", header: "名称" }]} data={[{ key: "1", name: "张三" }]} sticky />,
    );
    expect(container.querySelector("thead")).toHaveClass("sticky");
  });

  it("XAlert 四种语义渲染", () => {
    const { rerender } = render(<XAlert type="success" message="成功提示" />);
    expect(screen.getByText("成功提示")).toBeInTheDocument();
    rerender(<XAlert type="error" message="错误提示" closable />);
    expect(screen.getByRole("button", { name: "关闭" })).toBeInTheDocument();
  });

  it("XProgress 确定进度与不确定进度", () => {
    const { container, rerender } = render(<XProgress value={30} status />);
    expect(screen.getByText("30%")).toBeInTheDocument();
    rerender(<XProgress />);
    expect(container.querySelector("[data-slot='indicator']")).toBeInTheDocument();
  });

  it("XAccordion 展开项内容", async () => {
    render(
      <XAccordion
        items={[
          { label: "什么是 Nuxt UI？", content: "组件库说明" },
          { label: "如何安装？", content: "安装说明" },
        ]}
      />,
    );
    await userEvent.click(screen.getByRole("button", { name: "什么是 Nuxt UI？" }));
    expect(await screen.findByText("组件库说明")).toBeInTheDocument();
  });

  it("XCollapsible 点击展开内容", async () => {
    render(<XCollapsible trigger="展开详情">折叠的内容区域</XCollapsible>);
    await userEvent.click(screen.getByRole("button", { name: "展开详情" }));
    expect(await screen.findByText("折叠的内容区域")).toBeInTheDocument();
  });

  it("XCollapsible ui 插槽类名与 render 渲染为指定元素", async () => {
    const { container } = render(
      <XCollapsible
        defaultOpen
        render={<section />}
        ui={{ root: "custom-root", content: "custom-content" }}
      >
        折叠的内容区域
      </XCollapsible>,
    );
    expect(container.querySelector("section")).toHaveClass("custom-root");
    expect(container.querySelector('[data-slot="collapsible-content"]')).toHaveClass("custom-content");
  });

  it("XCollapsible trigger 传元素时合并为触发器本身", async () => {
    render(
      <XCollapsible trigger={<XButton variant="soft" color="neutral">自定义触发器</XButton>}>
        折叠的内容区域
      </XCollapsible>,
    );
    const trigger = screen.getByRole("button", { name: "自定义触发器" });
    expect(screen.getAllByRole("button")).toHaveLength(1);
    await userEvent.click(trigger);
    expect(await screen.findByText("折叠的内容区域")).toBeInTheDocument();
  });

  it("XCollapsible unmountOnHide=false 关闭后保留内容节点", async () => {
    const { container } = render(
      <XCollapsible unmountOnHide={false} trigger="展开详情">
        折叠的内容区域
      </XCollapsible>,
    );
    await userEvent.click(screen.getByRole("button", { name: "展开详情" }));
    expect(container.querySelector('[data-slot="collapsible-content"]')).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "展开详情" }));
    expect(container.querySelector('[data-slot="collapsible-content"]')).toBeInTheDocument();
  });

  it("XListbox 点击选中触发 onValueChange", async () => {
    const onValueChange = vi.fn();
    render(<XListbox items={[{ key: "a", label: "选项 A" }]} onValueChange={onValueChange} />);
    await userEvent.click(screen.getByRole("option", { name: "选项 A" }));
    expect(onValueChange).toHaveBeenCalledWith(expect.objectContaining({ key: "a" }));
  });

  it("XScrollArea 渲染滚动内容", () => {
    render(
      <XScrollArea height={100}>
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i}>滚动内容第 {i + 1} 行</div>
        ))}
      </XScrollArea>,
    );
    expect(screen.getByText("滚动内容第 1 行")).toBeInTheDocument();
  });

  it("XCarousel 渲染全部轮播项", () => {
    render(
      <XCarousel
        items={[{ key: "1", content: "Slide 1" }, { key: "2", content: "Slide 2" }]}
      />,
    );
    expect(screen.getByText("Slide 1")).toBeInTheDocument();
    expect(screen.getByText("Slide 2")).toBeInTheDocument();
  });

  it("XSplitter 渲染两个面板", () => {
    render(<XSplitter first={<div>左面板</div>} second={<div>右面板</div>} />);
    expect(screen.getByText("左面板")).toBeInTheDocument();
    expect(screen.getByText("右面板")).toBeInTheDocument();
    expect(screen.getByRole("separator")).toHaveAttribute("aria-orientation", "horizontal");
  });

  it("XSplitter items 数组形态渲染多个面板与拖拽条", () => {
    const { container } = render(
      <XSplitter
        items={[
          { content: <div>面板一</div> },
          { content: <div>面板二</div> },
          { content: <div>面板三</div> },
        ]}
      />,
    );
    expect(screen.getByText("面板一")).toBeInTheDocument();
    expect(screen.getByText("面板三")).toBeInTheDocument();
    expect(container.querySelectorAll("[role=separator]").length).toBe(2);
  });

  it("XSplitter disabled 锁定拖拽条", () => {
    render(<XSplitter disabled first={<div>左面板</div>} second={<div>右面板</div>} />);
    const handle = screen.getByRole("separator");
    expect(handle).toHaveAttribute("data-panel-resize-handle-enabled", "false");
    expect(handle).toHaveAttribute("tabindex", "-1");
  });

  it("XScrollArea orientation=horizontal 横向排列", () => {
    const { container } = render(
      <XScrollArea orientation="horizontal">
        <span>横向内容</span>
      </XScrollArea>,
    );
    expect(container.innerHTML).toContain("flex-row");
  });

  it("XDropdownMenu 菜单项渲染说明与快捷键", async () => {
    render(
      <XDropdownMenu
        open
        items={[{ key: "copy", label: "复制链接", description: "复制到剪贴板", shortcut: "⌘C" }]}
      />,
    );
    expect(await screen.findByText("复制链接")).toBeInTheDocument();
    expect(screen.getByText("复制到剪贴板")).toBeInTheDocument();
    expect(screen.getByText("⌘C")).toBeInTheDocument();
  });

  it("XPopover arrow 渲染箭头", async () => {
    render(
      <XPopover open arrow content="内容">
        <button type="button">打开</button>
      </XPopover>,
    );
    expect(await screen.findByText("内容")).toBeInTheDocument();
    expect(document.querySelector(".fill-background")).not.toBeNull();
  });
});

describe("XAlert 自定义图标与操作区", () => {
  it("icon 优先于默认图标，actions 渲染在描述下方", () => {
    render(
      <XAlert
        type="info"
        message="提示"
        description="说明"
        showIcon
        icon={<span data-testid="custom-icon" />}
        actions={<button type="button">处理</button>}
      />,
    );
    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "处理" })).toBeInTheDocument();
  });
});

describe("XCarousel 箭头、指示点与方向", () => {
  const items = [
    { key: "1", content: "Slide 1" },
    { key: "2", content: "Slide 2" },
  ];

  it("默认渲染箭头，arrows=false 时不渲染", () => {
    const { rerender } = render(<XCarousel items={items} />);
    expect(screen.getByRole("button", { name: "上一张" })).toBeInTheDocument();
    rerender(<XCarousel items={items} arrows={false} />);
    expect(screen.queryByRole("button", { name: "上一张" })).not.toBeInTheDocument();
  });

  it("dots 渲染可点击指示点", async () => {
    render(<XCarousel items={items} dots />);
    /* embla 的 init 事件异步发出，等待指示点渲染完成 */
    expect(await screen.findByRole("tab", { name: "跳转到第 1 张" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "跳转到第 2 张" })).toBeInTheDocument();
  });

  it("orientation=vertical 使内容纵向排列", () => {
    const { container } = render(<XCarousel items={items} orientation="vertical" />);
    expect(container.querySelector(".overflow-hidden > div")).toHaveClass("flex-col");
  });
});
