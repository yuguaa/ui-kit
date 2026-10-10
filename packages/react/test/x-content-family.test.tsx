import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { XAccordion } from "@/components/kit/x-accordion";
import { XCarousel } from "@/components/kit/x-carousel";
import { XScrollArea } from "@/components/kit/x-scroll-area";
import { XSplitter } from "@/components/kit/x-splitter";

describe("XAccordion 字段映射、图标与插槽", () => {
  it("labelKey / valueKey 字段映射，body 插槽渲染", async () => {
    render(
      <XAccordion
        items={[
          { name: "标题 A", id: "item-a", content: "内容 A" },
          { name: "标题 B", id: "item-b", content: "内容 B" },
        ]}
        labelKey="name"
        valueKey="id"
      />,
    );
    await userEvent.click(screen.getByRole("button", { name: "标题 A" }));
    expect(await screen.findByText("内容 A")).toBeInTheDocument();
  });

  it("leading / trailing / body 插槽（函数形式）拿到 item / index / open", async () => {
    render(
      <XAccordion
        items={[{ label: "标题", content: "正文" }]}
        leading={({ index }) => <i data-testid="leading">{index}</i>}
        trailing={({ open }) => <i data-testid="trailing">{String(open)}</i>}
        body={({ item, open }) => <span data-testid="body">{`${item.label}-${String(open)}`}</span>}
      />,
    );
    expect(screen.getByTestId("leading")).toBeInTheDocument();
    expect(screen.getByTestId("trailing")).toHaveTextContent("false");
    await userEvent.click(screen.getByRole("button", { name: /标题/ }));
    expect(await screen.findByTestId("body")).toHaveTextContent("标题-true");
  });

  it("ui 插槽类名逐键生效", () => {
    const { container } = render(
      <XAccordion
        items={[{ label: "标题", icon: "star", content: "内容" }]}
        defaultValue={["0"]}
        ui={{
          root: "ui-root",
          item: "ui-item",
          header: "ui-header",
          trigger: "ui-trigger",
          content: "ui-content",
          body: "ui-body",
          leadingIcon: "ui-leading-icon",
          trailingIcon: "ui-trailing-icon",
          label: "ui-label",
        }}
      />,
    );
    expect(container.querySelector(".ui-root")).toBeInTheDocument();
    expect(container.querySelector(".ui-item")).toBeInTheDocument();
    expect(container.querySelector(".ui-header")).toBeInTheDocument();
    expect(container.querySelector(".ui-trigger")).toBeInTheDocument();
    expect(container.querySelector(".ui-content")).toBeInTheDocument();
    expect(container.querySelector(".ui-body")).toBeInTheDocument();
    expect(container.querySelector(".ui-leading-icon")).toBeInTheDocument();
    expect(container.querySelector(".ui-trailing-icon")).toBeInTheDocument();
    expect(container.querySelector(".ui-label")).toBeInTheDocument();
  });

  it("multiple 模式可同时展开多项", () => {
    render(
      <XAccordion
        items={[
          { label: "标题 A", content: "内容 A" },
          { label: "标题 B", content: "内容 B" },
        ]}
        multiple
        defaultValue={["0", "1"]}
      />,
    );
    expect(screen.getByText("内容 A")).toBeInTheDocument();
    expect(screen.getByText("内容 B")).toBeInTheDocument();
  });

  it("collapsible=false 时不可收起已展开项", async () => {
    render(<XAccordion items={[{ label: "标题", content: "正文" }]} collapsible={false} />);
    await userEvent.click(screen.getByRole("button", { name: /标题/ }));
    await userEvent.click(screen.getByRole("button", { name: /标题/ }));
    expect(screen.getByText("正文")).toBeInTheDocument();
  });

  it("disabled 项应用禁用样式", () => {
    render(<XAccordion items={[{ label: "标题", disabled: true }]} />);
    const trigger = screen.getByRole("button", { name: /标题/ });
    expect(trigger).toHaveAttribute("aria-disabled", "true");
    expect(trigger).toHaveClass("cursor-not-allowed");
  });
});

describe("XCarousel 插件能力与 ui 插槽", () => {
  const items = [
    { key: "1", content: "Slide 1" },
    { key: "2", content: "Slide 2" },
  ];

  it("fade 模式只显示当前项", () => {
    const { container } = render(<XCarousel items={items} fade />);
    const slides = container.querySelectorAll("[aria-roledescription='slide']");
    expect(slides[0]).toHaveClass("opacity-100");
    expect(slides[1]).toHaveClass("opacity-0");
  });

  it("prev / next 配置应用到按钮，图标可自定义", () => {
    render(
      <XCarousel
        items={items}
        prev={{ variant: "soft", color: "success", label: "后退" }}
        next={{ variant: "soft", color: "success", label: "前进" }}
        prevIcon="star"
        nextIcon="star"
      />,
    );
    const prevButton = screen.getByRole("button", { name: "上一张" });
    const nextButton = screen.getByRole("button", { name: "下一张" });
    expect(prevButton).toHaveClass("bg-success/10");
    expect(nextButton).toHaveClass("bg-success/10");
    expect(prevButton).toHaveTextContent("后退");
    expect(nextButton).toHaveTextContent("前进");
  });

  it("ui 插槽类名逐键生效", () => {
    const { container } = render(
      <XCarousel
        items={items}
        dots
        ui={{
          root: "ui-root",
          viewport: "ui-viewport",
          container: "ui-container",
          item: "ui-item",
          controls: "ui-controls",
          arrows: "ui-arrows",
          prev: "ui-prev",
          next: "ui-next",
          dots: "ui-dots",
          dot: "ui-dot",
        }}
      />,
    );
    expect(container.querySelector(".ui-root")).toBeInTheDocument();
    expect(container.querySelector(".ui-viewport")).toBeInTheDocument();
    expect(container.querySelector(".ui-container")).toBeInTheDocument();
    expect(container.querySelector(".ui-item")).toBeInTheDocument();
    expect(container.querySelector(".ui-controls")).toBeInTheDocument();
    expect(container.querySelector(".ui-arrows")).toBeInTheDocument();
    expect(container.querySelector(".ui-prev")).toBeInTheDocument();
    expect(container.querySelector(".ui-next")).toBeInTheDocument();
    expect(container.querySelector(".ui-dots")).toBeInTheDocument();
    expect(container.querySelector(".ui-dot")).toBeInTheDocument();
  });

  it("autoScroll 与 autoHeight 正常渲染", () => {
    const { container } = render(<XCarousel items={items} autoScroll={{ speed: 2 }} autoHeight />);
    expect(container.querySelector("[role=region]")).toBeInTheDocument();
  });

  it("classNames 类名钩子加在视口元素", () => {
    const { container } = render(<XCarousel items={items} classNames />);
    const viewport = container.querySelector("[data-slot=viewport]");
    expect(viewport).toHaveClass("is-loop");
    expect(viewport).toHaveClass("is-draggable");
  });

  it("classNames 对象形态自定义类名", () => {
    const { container } = render(<XCarousel items={items} classNames={{ loop: "my-loop" }} />);
    const viewport = container.querySelector("[data-slot=viewport]");
    expect(viewport).toHaveClass("my-loop");
    expect(viewport).toHaveClass("is-draggable");
  });

  it("onSelect 在初始化时触发", () => {
    const onSelect = vi.fn();
    render(<XCarousel items={items} onSelect={onSelect} />);
    expect(onSelect).toHaveBeenCalledWith(0);
  });
});

describe("XScrollArea items、虚拟滚动与阴影", () => {
  it("items 数组渲染并应用 ui 插槽类名", () => {
    const { container } = render(
      <XScrollArea
        items={[
          { id: "a", text: "第一行" },
          { id: "b", text: "第二行" },
        ]}
        ui={{ root: "ui-root", viewport: "ui-viewport", item: "ui-item" }}
      >
        {({ item }) => <span>{item.text}</span>}
      </XScrollArea>,
    );
    expect(screen.getByText("第一行")).toBeInTheDocument();
    expect(container.querySelector(".ui-root")).toBeInTheDocument();
    expect(container.querySelector(".ui-viewport")).toBeInTheDocument();
    expect(container.querySelectorAll(".ui-item").length).toBe(2);
  });

  it("virtualize 按需渲染可视窗口", () => {
    const items = Array.from({ length: 100 }, (_, i) => ({ id: i, text: `第 ${i} 行` }));
    const { container } = render(
      <XScrollArea items={items} height={200} virtualize={{ estimateSize: 20, overscan: 4 }}>
        {({ item }) => <span>{item.text}</span>}
      </XScrollArea>,
    );
    const rendered = container.querySelectorAll("[data-index]");
    expect(rendered.length).toBeGreaterThan(0);
    expect(rendered.length).toBeLessThan(100);
    expect(screen.getByText("第 0 行")).toBeInTheDocument();
  });

  it("shadow 开启不破坏渲染", () => {
    render(
      <XScrollArea shadow={{ size: 12 }} height={100} items={[{ id: 1, text: "内容" }]}>
        {({ item }) => <span>{item.text}</span>}
      </XScrollArea>,
    );
    expect(screen.getByText("内容")).toBeInTheDocument();
  });
});

describe("XSplitter items 形态、disabled 与 ui 插槽", () => {
  it("items 数组渲染多个面板与拖拽条", () => {
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

  it("ui 插槽类名逐键生效", () => {
    const { container } = render(
      <XSplitter
        items={[{ content: <div>面板一</div> }, { content: <div>面板二</div> }]}
        ui={{ root: "ui-root", panel: "ui-panel", handle: "ui-handle" }}
      />,
    );
    expect(container.querySelector(".ui-root")).toBeInTheDocument();
    expect(container.querySelectorAll(".ui-panel").length).toBe(2);
    expect(container.querySelector(".ui-handle")).toBeInTheDocument();
  });

  it("disabled 锁定拖拽条", () => {
    render(
      <XSplitter
        disabled
        items={[{ content: <div>面板一</div> }, { content: <div>面板二</div> }]}
      />,
    );
    expect(screen.getByRole("separator")).toHaveAttribute("data-panel-resize-handle-enabled", "false");
    expect(screen.getByRole("separator")).toHaveAttribute("tabindex", "-1");
  });

  it("键盘方向键触发 onResize", () => {
    const onResize = vi.fn();
    render(
      <XSplitter
        items={[{ content: <div>面板一</div> }, { content: <div>面板二</div> }]}
        onResize={onResize}
      />,
    );
    fireEvent.keyDown(screen.getByRole("separator"), { key: "ArrowRight" });
    expect(onResize).toHaveBeenCalledWith(0, expect.any(Number));
  });
});
