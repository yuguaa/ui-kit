import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { describe, expect, it, vi } from "vitest";
import { XAccordion } from "@/components/kit/x-accordion";
import { XAlert } from "@/components/kit/x-alert";
import { XBreadcrumb } from "@/components/kit/x-breadcrumb";
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

  it("XTabs 切换标签触发 onChange", async () => {
    const onChange = vi.fn();
    render(
      <XTabs
        items={[
          { key: "doc", label: "文档", content: "文档内容" },
          { key: "api", label: "API", content: "API 内容" },
        ]}
        onChange={onChange}
      />,
    );
    expect(screen.getByText("文档内容")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("tab", { name: "API" }));
    expect(onChange).toHaveBeenCalledWith("api");
  });

  it("XTabs destroyOnHide 隐藏面板内容", () => {
    render(
      <XTabs
        destroyOnHide
        defaultActiveKey="a"
        items={[
          { key: "a", label: "A", content: "内容 A" },
          { key: "b", label: "B", content: "内容 B" },
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
    render(<XPagination current={5} total={100} pageSize={10} />);
    expect(screen.getByRole("button", { name: "5" })).toHaveAttribute("aria-current", "page");
    expect(screen.getAllByText("…").length).toBeGreaterThan(0);
  });

  it("XPagination 点击页码触发 onChange", async () => {
    const onChange = vi.fn();
    render(<XPagination current={1} total={50} pageSize={10} onChange={onChange} />);
    await userEvent.click(screen.getByRole("button", { name: "3" }));
    expect(onChange).toHaveBeenCalledWith(3, 10);
  });

  it("XStepper 状态与受控 current", () => {
    render(
      <XStepper
        current={1}
        items={[{ title: "完成" }, { title: "进行中" }, { title: "待处理" }]}
      />,
    );
    expect(screen.getByText("完成")).toBeInTheDocument();
    expect(screen.getByText("待处理")).toHaveClass("text-muted-foreground");
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
  it("XModal 渲染标题与默认底部按钮", async () => {
    const onOk = vi.fn();
    render(<XModal open title="对话框标题" okText="确 定" cancelText="取 消" onOk={onOk}>正文</XModal>);
    expect(screen.getByText("对话框标题")).toBeInTheDocument();
    expect(screen.getByText("正文")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "确 定" }));
    expect(onOk).toHaveBeenCalledTimes(1);
  });

  it("XDrawer 渲染标题与内容", () => {
    render(<XDrawer open title="抽屉标题">抽屉内容</XDrawer>);
    expect(screen.getByText("抽屉标题")).toBeInTheDocument();
    expect(screen.getByText("抽屉内容")).toBeInTheDocument();
  });

  it("XSlideover 渲染标题与内容", () => {
    render(<XSlideover open title="侧滑面板">面板内容</XSlideover>);
    expect(screen.getAllByText("侧滑面板").length).toBeGreaterThan(0);
    expect(screen.getByText("面板内容")).toBeInTheDocument();
  });

  it("XTooltip 悬浮显示提示", async () => {
    render(
      <XTooltip title="这是一段提示文字">
        <button type="button">悬浮查看提示</button>
      </XTooltip>,
    );
    await userEvent.hover(screen.getByRole("button", { name: "悬浮查看提示" }));
    expect(await screen.findByText("这是一段提示文字")).toBeInTheDocument();
  });

  it("XPopover 点击打开显示内容", async () => {
    render(
      <XPopover trigger="click" title="气泡标题" content="气泡说明文字">
        <button type="button">打开气泡</button>
      </XPopover>,
    );
    await userEvent.click(screen.getByRole("button", { name: "打开气泡" }));
    expect(await screen.findByText("气泡标题")).toBeInTheDocument();
    expect(screen.getByText("气泡说明文字")).toBeInTheDocument();
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
        columns={[{ key: "name", title: "名称" }, { key: "age", title: "年龄" }]}
        dataSource={[{ key: "1", name: "张三", age: 28 }]}
      />,
    );
    expect(screen.getByText("名称")).toBeInTheDocument();
    expect(screen.getByText("张三")).toBeInTheDocument();
    expect(screen.getByText("28")).toBeInTheDocument();
  });

  it("XTable loading 渲染骨架行", () => {
    const { container } = render(<XTable columns={[{ key: "a", title: "A" }]} dataSource={[]} loading />);
    expect(container.querySelectorAll("[data-slot='skeleton']").length).toBeGreaterThan(0);
  });

  it("XAlert 四种语义渲染", () => {
    const { rerender } = render(<XAlert type="success" message="成功提示" />);
    expect(screen.getByText("成功提示")).toBeInTheDocument();
    rerender(<XAlert type="error" message="错误提示" closable />);
    expect(screen.getByRole("button", { name: "关闭" })).toBeInTheDocument();
  });

  it("XProgress 线形与圆形", () => {
    const { container, rerender } = render(<XProgress percent={30} />);
    expect(screen.getByText("30%")).toBeInTheDocument();
    rerender(<XProgress percent={75} type="circle" />);
    expect(container.querySelector("svg")).toBeInTheDocument();
    expect(screen.getByText("75%")).toBeInTheDocument();
  });

  it("XAccordion 展开项内容", async () => {
    render(
      <XAccordion
        items={[
          { title: "什么是 Nuxt UI？", content: "组件库说明" },
          { title: "如何安装？", content: "安装说明" },
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

  it("XListbox 点击选中触发 onSelect", async () => {
    const onSelect = vi.fn();
    render(<XListbox items={[{ key: "a", label: "选项 A" }]} onSelect={onSelect} />);
    await userEvent.click(screen.getByRole("option", { name: "选项 A" }));
    expect(onSelect).toHaveBeenCalledWith("a");
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
});
