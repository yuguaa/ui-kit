import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { describe, expect, it, vi } from "vitest";
import { XPagination } from "@/components/kit/x-pagination";
import { XStepper, type XStepperApi } from "@/components/kit/x-stepper";
import { XTable } from "@/components/kit/x-table";
import { XTabs } from "@/components/kit/x-tabs";

describe("XTabs 新能力", () => {
  const items = [
    { value: "a", label: "标签一", content: "内容一" },
    { value: "b", label: "标签二", content: "内容二" },
  ];

  it("ui 插槽类名应用到对应元素", () => {
    render(
      <XTabs
        items={items}
        ui={{
          root: "custom-root",
          list: "custom-list",
          trigger: "custom-trigger",
          label: "custom-label",
          content: "custom-content",
        }}
      />,
    );
    expect(document.querySelector("[data-slot='root']")).toHaveClass("custom-root");
    expect(document.querySelector("[data-slot='list']")).toHaveClass("custom-list");
    expect(document.querySelector("[data-slot='trigger']")).toHaveClass("custom-trigger");
    expect(document.querySelector("[data-slot='label']")).toHaveClass("custom-label");
    expect(document.querySelector("[data-slot='content']")).toHaveClass("custom-content");
  });

  it("variant link 应用下划线指示器样式", () => {
    render(<XTabs items={items} variant="link" value="a" />);
    expect(document.querySelector("[data-slot='list']")).toHaveClass("border-b");
    expect(document.querySelector("[data-slot='list']")).toHaveClass("-mb-px");
  });

  it("color success 激活文字与聚焦环使用语义色", () => {
    render(<XTabs items={items} color="success" value="a" />);
    expect(document.querySelector("[data-slot='trigger']")).toHaveClass("outline-success-6/25");
    expect(document.querySelector("[data-slot='trigger']")).toHaveClass("data-active:text-white");
  });

  it("icon / avatar / badge 字段渲染", () => {
    render(
      <XTabs
        items={[
          { value: "a", label: "图标", icon: "check" },
          { value: "b", label: "头像", avatar: { text: "张" } },
          { value: "c", label: "徽标", badge: 3 },
        ]}
        value="a"
      />,
    );
    expect(document.querySelector("[data-slot='leadingIcon']")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='leadingAvatar']")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("valueKey / labelKey 字段映射", () => {
    render(
      <XTabs
        items={[{ id: "x", name: "命名标签", content: "映射内容" }]}
        valueKey="id"
        labelKey="name"
        value="x"
      />,
    );
    expect(screen.getByText("命名标签")).toBeInTheDocument();
    expect(screen.getByText("映射内容")).toBeInTheDocument();
  });

  it("content=false 不渲染内容面板", () => {
    render(<XTabs items={items} content={false} />);
    expect(document.querySelector("[data-slot='content']")).not.toBeInTheDocument();
  });

  it("contentSlot 渲染函数接收 ui 参数", () => {
    render(
      <XTabs
        items={[{ value: "a", label: "一", content: "默认内容" }]}
        value="a"
        contentSlot={({ item, ui }) => (
          <p data-testid="panel" className={ui?.content}>
            面板: {item.content} / {ui?.leadingAvatarSize ?? "none"}
          </p>
        )}
      />,
    );
    expect(screen.getByTestId("panel").textContent).toContain("面板: 默认内容");
  });
});

describe("XPagination 新能力", () => {
  it("ui 插槽类名应用到对应元素", () => {
    render(
      <XPagination
        page={5}
        total={200}
        itemsPerPage={10}
        ui={{ root: "custom-root", list: "custom-list", item: "custom-item", label: "custom-label" }}
      />,
    );
    expect(document.querySelector("[data-slot='root']")).toHaveClass("custom-root");
    expect(document.querySelector("[data-slot='list']")).toHaveClass("custom-list");
    const pageButton = screen.getByRole("button", { name: "4" });
    expect(pageButton).toHaveClass("custom-item");
    expect(pageButton.querySelector("span")).toHaveClass("custom-label");
  });

  it("激活页码应用 activeColor / activeVariant 并标记 aria-current", () => {
    render(<XPagination page={2} total={30} itemsPerPage={10} />);
    const active = screen.getByRole("button", { name: "2" });
    expect(active).toHaveClass("bg-primary-6");
    expect(active).toHaveAttribute("aria-current", "page");
  });

  it("showControls=false 隐藏首末与前后按钮", () => {
    render(<XPagination page={2} total={30} itemsPerPage={10} showControls={false} />);
    expect(document.querySelector("[data-slot='first']")).not.toBeInTheDocument();
    expect(document.querySelector("[data-slot='last']")).not.toBeInTheDocument();
    expect(document.querySelector("[data-slot='prev']")).not.toBeInTheDocument();
    expect(document.querySelector("[data-slot='next']")).not.toBeInTheDocument();
  });

  it("firstIcon 等图标属性优先于默认图标", () => {
    render(<XPagination page={2} total={30} itemsPerPage={10} firstIcon="plus" prevIcon="plus" />);
    expect(screen.getByRole("button", { name: "首页" }).querySelector("svg")).toBeInTheDocument();
  });

  it("页码按钮 label 应用默认最小宽度类", () => {
    render(<XPagination page={1} total={30} itemsPerPage={10} />);
    const label = screen.getByRole("button", { name: "2" }).querySelector("span");
    expect(label).toHaveClass("min-w-5");
    expect(label).toHaveClass("text-center");
  });

  it("showEdges 渲染省略号且 ui.ellipsis 类名生效", () => {
    render(<XPagination page={8} total={100} itemsPerPage={10} showEdges ui={{ ellipsis: "custom-ellipsis" }} />);
    const ellipsis = document.querySelector("[data-slot='ellipsis']");
    expect(ellipsis).toBeInTheDocument();
    expect(ellipsis?.querySelector("[data-slot='button']")).toHaveClass("custom-ellipsis");
    expect(ellipsis?.querySelector("[data-slot='button']")).toHaveClass("pointer-events-none");
  });

  it("item 渲染函数自定义页码", () => {
    render(
      <XPagination
        page={1}
        total={30}
        itemsPerPage={10}
        itemSlot={({ item }) => <span data-testid="page">第{item.type === "page" ? item.value : "…"}页</span>}
      />,
    );
    expect(screen.getAllByTestId("page").length).toBeGreaterThan(0);
  });

  it("color / variant / size 传递到按钮", () => {
    render(<XPagination page={1} total={30} itemsPerPage={10} color="success" variant="soft" size="lg" />);
    expect(screen.getByRole("button", { name: "2" })).toHaveClass("bg-success-1");
  });
});

describe("XStepper 新能力", () => {
  const items = [
    { value: "basic", title: "基础信息", description: "填写基础资料", content: "基础信息表单" },
    { value: "confirm", title: "确认提交", description: "核对并提交", content: "确认提交面板" },
  ];

  it("value 字段值驱动当前步骤与内容面板", () => {
    render(<XStepper items={items} value="basic" />);
    expect(screen.getByText("基础信息")).toBeInTheDocument();
    expect(screen.getByText("基础信息表单")).toBeInTheDocument();
  });

  it("ref next / prev 切换步骤并触发事件", () => {
    const onNext = vi.fn();
    const onPrev = vi.fn();
    const ref = React.createRef<XStepperApi>();
    render(<XStepper ref={ref} items={items} onNext={onNext} onPrev={onPrev} />);
    act(() => ref.current?.next());
    expect(onNext).toHaveBeenCalledWith(items[1]);
    act(() => ref.current?.prev());
    expect(onPrev).toHaveBeenCalledWith(items[0]);
  });

  it("size 控制触发器尺寸", () => {
    render(<XStepper items={items} size="xl" />);
    expect(document.querySelector("[data-slot='trigger']")).toHaveClass("size-14");
  });

  it("linear 模式只允许回到已完成步骤或前进一步", async () => {
    const steps = [
      { value: "step1", title: "第一步", content: "第一步面板" },
      { value: "step2", title: "第二步", content: "第二步面板" },
      { value: "step3", title: "第三步", content: "第三步面板" },
    ];

    function Demo({ linear }: { linear?: boolean }) {
      const [current, setCurrent] = React.useState<string | number>("step1");
      return <XStepper items={steps} value={current} onValueChange={setCurrent} linear={linear} />;
    }

    const { unmount } = render(<Demo />);
    const triggers = () => Array.from(document.querySelectorAll<HTMLButtonElement>("[data-slot='trigger']"));

    await userEvent.click(triggers()[2]!);
    expect(screen.getByText("第一步面板")).toBeInTheDocument();

    await userEvent.click(triggers()[1]!);
    expect(screen.getByText("第二步面板")).toBeInTheDocument();

    await userEvent.click(triggers()[2]!);
    expect(screen.getByText("第三步面板")).toBeInTheDocument();
    unmount();

    render(<Demo linear={false} />);
    await userEvent.click(triggers()[2]!);
    expect(screen.getByText("第三步面板")).toBeInTheDocument();
  });

  it("color success 激活触发器使用语义色", () => {
    render(<XStepper items={items} color="success" value="basic" />);
    expect(document.querySelector("[data-slot='trigger']")).toHaveClass("group-data-[state=active]:bg-success-6");
  });

  it("disabled 状态反映到 data-disabled", () => {
    render(<XStepper items={items} disabled />);
    expect(document.querySelector("[data-slot='item']")).toHaveAttribute("data-disabled");
  });

  it("indicator / title / description / content 渲染函数自定义", () => {
    render(
      <XStepper
        items={items}
        value="basic"
        indicator={({ item, ui }) => <span className={ui?.indicator}>★{item.value}</span>}
        title={(item) => <em>标题: {item.title}</em>}
        description={(item) => <small>描述: {item.description}</small>}
        content={(item) => <p>面板: {item.content}</p>}
      />,
    );
    expect(screen.getByText("★basic")).toBeInTheDocument();
    expect(screen.getByText("标题: 基础信息")).toBeInTheDocument();
    expect(screen.getByText("描述: 填写基础资料")).toBeInTheDocument();
    expect(screen.getByText("面板: 基础信息表单")).toBeInTheDocument();
  });

  it("ui 插槽类名应用到对应元素", () => {
    render(
      <XStepper
        items={items}
        ui={{ root: "custom-root", header: "custom-header", item: "custom-item", trigger: "custom-trigger" }}
      />,
    );
    expect(document.querySelector("[data-slot='root']")).toHaveClass("custom-root");
    expect(document.querySelector("[data-slot='header']")).toHaveClass("custom-header");
    expect(document.querySelector("[data-slot='item']")).toHaveClass("custom-item");
    expect(document.querySelector("[data-slot='trigger']")).toHaveClass("custom-trigger");
  });
});

describe("XTable 新能力", () => {
  const columns = [{ accessorKey: "name", header: "名称" }];

  it("caption 与 empty 渲染", () => {
    render(<XTable columns={columns} data={[]} caption="示例表格" empty="没有数据" />);
    expect(document.querySelector("caption")).toHaveTextContent("示例表格");
    expect(document.querySelector("[data-slot='empty']")).toHaveTextContent("没有数据");
  });

  it("emptySlot 优先于 empty 文字", () => {
    render(<XTable columns={columns} data={[]} empty="默认空提示" emptySlot={<p>自定义空提示</p>} />);
    expect(document.querySelector("[data-slot='empty']")).toHaveTextContent("自定义空提示");
  });

  it("loadingSlot 在空数据加载态渲染且 ui.loading 类名生效", () => {
    render(
      <XTable
        columns={columns}
        data={[]}
        loading
        loadingSlot={<p>加载中</p>}
        ui={{ loading: "custom-loading" }}
      />,
    );
    expect(document.querySelector("[data-slot='loading']")).toHaveClass("custom-loading");
    expect(screen.getByText("加载中")).toBeInTheDocument();
  });

  it("columnFiltersOptions 受控列筛选", () => {
    render(
      <XTable
        columns={columns}
        data={[{ key: "1", name: "张三" }, { key: "2", name: "李四" }]}
        columnFiltersOptions={{ enableColumnFilters: true, state: { columnFilters: [{ id: "name", value: "张" }] } }}
      />,
    );
    const cells = Array.from(document.querySelectorAll("tbody td")).map((cell) => cell.textContent);
    expect(cells).toEqual(["张三"]);
  });

  it("columnPinningOptions 固定列获得定位样式", () => {
    render(
      <XTable
        columns={[{ accessorKey: "name", header: "名称" }, { accessorKey: "age", header: "年龄" }]}
        data={[{ key: "1", name: "张三", age: 28 }]}
        columnPinningOptions={{ enableColumnPinning: true, state: { columnPinning: { left: ["name"] } } }}
      />,
    );
    const firstTh = document.querySelector("thead th");
    expect(firstTh).toHaveAttribute("data-pinned", "left");
    expect(firstTh).toHaveStyle({ left: "0px" });
    expect(firstTh).toHaveClass("sticky");
  });

  it("sticky header 变体固定表头，footer 变体固定表尾", () => {
    const footerColumns = [{ accessorKey: "name", header: "名称", footer: "合计" }];
    const { unmount } = render(
      <XTable columns={columns} data={[{ key: "1", name: "张三" }]} sticky="header" />,
    );
    expect(document.querySelector("thead")).toHaveClass("sticky");
    expect(document.querySelector("tfoot")).not.toBeInTheDocument();
    unmount();

    render(<XTable columns={footerColumns} data={[{ key: "1", name: "张三" }]} sticky="footer" />);
    expect(document.querySelector("thead")).not.toHaveClass("sticky");
    expect(document.querySelector("tfoot")).toHaveClass("sticky");
  });

  it("onSelect 点击行触发且选中态反映到 data-selected", async () => {
    const onSelect = vi.fn();
    render(
      <XTable
        columns={columns}
        data={[{ key: "1", name: "张三" }]}
        rowSelectionOptions={{ enableRowSelection: true, state: { rowSelection: { 0: true } } }}
        onSelect={onSelect}
      />,
    );
    expect(document.querySelector("tbody tr")).toHaveAttribute("data-selected", "true");
    await userEvent.click(document.querySelector("tbody tr")!);
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it("ui 插槽类名应用到对应元素", () => {
    render(
      <XTable
        columns={columns}
        data={[{ key: "1", name: "张三" }]}
        ui={{
          root: "custom-root",
          base: "custom-base",
          thead: "custom-thead",
          tbody: "custom-tbody",
          tr: "custom-tr",
          th: "custom-th",
          td: "custom-td",
          separator: "custom-separator",
        }}
      />,
    );
    expect(document.querySelector("[data-slot='root']")).toHaveClass("custom-root");
    expect(document.querySelector("[data-slot='base']")).toHaveClass("custom-base");
    expect(document.querySelector("[data-slot='thead']")).toHaveClass("custom-thead");
    expect(document.querySelector("[data-slot='tbody']")).toHaveClass("custom-tbody");
    expect(document.querySelector("thead [data-slot='tr']")).toHaveClass("custom-tr");
    expect(document.querySelector("[data-slot='th']")).toHaveClass("custom-th");
    expect(document.querySelector("tbody [data-slot='td']")).toHaveClass("custom-td");
    expect(document.querySelector("[data-slot='separator']")).toHaveClass("custom-separator");
  });

  it("render 渲染为指定元素", () => {
    render(<XTable columns={columns} data={[{ key: "1", name: "张三" }]} render={<section data-testid="root-el" />} />);
    expect(screen.getByTestId("root-el")).toBeInTheDocument();
  });
});
