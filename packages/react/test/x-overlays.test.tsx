import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { XModal } from "@/components/kit/x-modal";
import { XDrawer } from "@/components/kit/x-drawer";
import { XSlideover } from "@/components/kit/x-slideover";
import { XPopover } from "@/components/kit/x-popover";
import { XTooltip } from "@/components/kit/x-tooltip";

describe("XModal", () => {
  it("ui 插槽类名覆盖全部主题键", () => {
    render(
      <XModal
        open
        title="标题"
        description="说明"
        body="正文"
        footer="底部"
        ui={{
          overlay: "custom-overlay",
          content: "custom-content",
          header: "custom-header",
          wrapper: "custom-wrapper",
          body: "custom-body",
          footer: "custom-footer",
          title: "custom-title",
          description: "custom-description",
          close: "custom-close",
        }}
      />,
    );
    expect(document.querySelector("[data-slot='overlay'].custom-overlay")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='content'].custom-content")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='header'].custom-header")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='wrapper'].custom-wrapper")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='body'].custom-body")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='footer'].custom-footer")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='title'].custom-title")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='description'].custom-description")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='close'].custom-close")).toBeInTheDocument();
  });

  it("fullscreen 内容占满全屏", () => {
    render(<XModal open fullscreen title="全屏" />);
    const content = document.querySelector("[data-slot='content']");
    expect(content).toHaveClass("inset-0");
    expect(content).not.toHaveClass("max-w-lg");
  });

  it("scrollable 遮罩可滚动且内容相对定位", () => {
    render(<XModal open scrollable title="滚动" />);
    expect(document.querySelector("[data-slot='overlay']")).toHaveClass("overflow-y-auto");
    expect(document.querySelector("[data-slot='content']")).toHaveClass("relative");
  });

  it("dismissible 为 false 时点击外部发射 onClosePrevent", async () => {
    const onClosePrevent = vi.fn();
    render(<XModal open dismissible={false} title="锁定" onClosePrevent={onClosePrevent} />);
    await waitFor(() => expect(document.querySelector("[data-slot='content']")).toBeInTheDocument());
    fireEvent.click(document.querySelector("[data-slot='overlay']") as Element);
    expect(onClosePrevent).toHaveBeenCalledTimes(1);
    expect(screen.getByText("锁定")).toBeInTheDocument();
  });

  it("header / body / footer 插槽渲染", () => {
    render(<XModal open title="标题" header="自定义头" body="正文" footer="底部" />);
    expect(screen.getAllByText("自定义头").length).toBeGreaterThan(0);
    expect(screen.getAllByText("正文").length).toBeGreaterThan(0);
    expect(screen.getAllByText("底部").length).toBeGreaterThan(0);
  });

  it("actions 插槽渲染在默认头部", () => {
    render(<XModal open title="标题" actions="操作区" />);
    expect(screen.getAllByText("操作区").length).toBeGreaterThan(0);
  });

  it("close 传元素时作为 close 插槽渲染", () => {
    render(
      <XModal open title="标题" close={<button type="button" data-testid="custom-close">自定义关闭</button>} />,
    );
    expect(screen.getByTestId("custom-close")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='close']")).not.toBeInTheDocument();
  });

  it("content 插槽替换默认结构并隐藏标题", () => {
    render(<XModal open title="被隐藏" content={<span data-testid="raw">原始内容</span>} />);
    expect(screen.getByTestId("raw")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='header']")).not.toBeInTheDocument();
    expect(document.querySelector(".sr-only")?.textContent).toContain("被隐藏");
  });
});

describe("XDrawer", () => {
  it("ui 插槽类名覆盖全部主题键", () => {
    render(
      <XDrawer
        open
        title="标题"
        description="说明"
        actions="操作"
        body="正文"
        footer="底部"
        ui={{
          overlay: "custom-overlay",
          content: "custom-content",
          handle: "custom-handle",
          container: "custom-container",
          header: "custom-header",
          wrapper: "custom-wrapper",
          title: "custom-title",
          description: "custom-description",
          actions: "custom-actions",
          body: "custom-body",
          footer: "custom-footer",
          close: "custom-close",
        }}
      />,
    );
    expect(document.querySelector("[data-slot='overlay'].custom-overlay")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='content'].custom-content")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='handle'].custom-handle")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='container'].custom-container")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='header'].custom-header")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='wrapper'].custom-wrapper")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='title'].custom-title")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='description'].custom-description")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='actions'].custom-actions")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='body'].custom-body")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='footer'].custom-footer")).toBeInTheDocument();
  });

  it("direction 控制滑出方向，inset 内嵌", () => {
    render(<XDrawer open direction="right" inset title="右抽屉" />);
    const content = document.querySelector("[data-slot='content']");
    expect(content).toHaveClass("data-[swipe-direction=right]:right-4");
    expect(content).toHaveClass("rounded-lg");
  });

  it("handle 渲染拖拽把手，close 渲染关闭按钮", () => {
    render(<XDrawer open title="带把手" close />);
    expect(document.querySelector("[data-slot='handle']")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='close']")).toBeInTheDocument();
  });

  it("close 传元素时作为 close 插槽渲染", () => {
    render(
      <XDrawer open title="标题" close={<button type="button" data-testid="custom-close">自定义关闭</button>} />,
    );
    expect(screen.getByTestId("custom-close")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='close']")).not.toBeInTheDocument();
  });

  it("dismissible 为 false 时点击外部不关闭并发射 onClosePrevent", async () => {
    const onClosePrevent = vi.fn();
    render(<XDrawer open dismissible={false} title="锁定" onClosePrevent={onClosePrevent} />);
    await waitFor(() => expect(document.querySelector("[data-slot='content']")).toBeInTheDocument());
    fireEvent.click(document.querySelector("[data-slot='overlay']") as Element);
    expect(onClosePrevent).toHaveBeenCalledTimes(1);
    expect(screen.getByText("锁定")).toBeInTheDocument();
  });
});

describe("XSlideover", () => {
  it("ui 插槽类名覆盖全部主题键", () => {
    render(
      <XSlideover
        open
        title="标题"
        description="说明"
        body="正文"
        footer="底部"
        ui={{
          overlay: "custom-overlay",
          content: "custom-content",
          header: "custom-header",
          wrapper: "custom-wrapper",
          body: "custom-body",
          footer: "custom-footer",
          title: "custom-title",
          description: "custom-description",
          close: "custom-close",
        }}
      />,
    );
    expect(document.querySelector("[data-slot='overlay'].custom-overlay")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='content'].custom-content")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='header'].custom-header")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='wrapper'].custom-wrapper")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='body'].custom-body")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='footer'].custom-footer")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='title'].custom-title")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='description'].custom-description")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='close'].custom-close")).toBeInTheDocument();
  });

  it("side 控制滑入方向", () => {
    render(<XSlideover open side="left" title="左滑" />);
    const content = document.querySelector("[data-slot='content']");
    expect(content).toHaveAttribute("data-side", "left");
    expect(content).toHaveClass("left-0");
  });

  it("inset 内嵌保留边距", () => {
    render(<XSlideover open inset title="内嵌" />);
    const content = document.querySelector("[data-slot='content']");
    expect(content).toHaveClass("right-4");
    expect(content).toHaveClass("rounded-lg");
  });

  it("close 传元素时作为 close 插槽渲染", () => {
    render(
      <XSlideover open title="标题" close={<button type="button" data-testid="custom-close">自定义关闭</button>} />,
    );
    expect(screen.getByTestId("custom-close")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='close']")).not.toBeInTheDocument();
  });
});

describe("XPopover", () => {
  it("ui 插槽类名与箭头", () => {
    render(
      <XPopover open arrow content="气泡内容" ui={{ content: "custom-content", arrow: "custom-arrow" }}>
        <button type="button">触发器</button>
      </XPopover>,
    );
    expect(document.querySelector("[data-slot='content'].custom-content")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='arrow'].custom-arrow")).toBeInTheDocument();
  });

  it("anchor 插槽渲染锚点元素", () => {
    render(
      <XPopover open content="内容" anchor={<span data-testid="anchor">锚点</span>}>
        <button type="button">触发器</button>
      </XPopover>,
    );
    expect(screen.getByTestId("anchor")).toBeInTheDocument();
  });

  it("dismissible 为 false 时按 Esc 发射 onClosePrevent", async () => {
    const onClosePrevent = vi.fn();
    render(
      <XPopover open dismissible={false} content="内容" onClosePrevent={onClosePrevent}>
        <button type="button">触发器</button>
      </XPopover>,
    );
    screen.getByRole("button", { name: "触发器" }).focus();
    await userEvent.keyboard("{Escape}");
    expect(onClosePrevent).toHaveBeenCalledTimes(1);
    expect(screen.getByText("内容")).toBeInTheDocument();
  });

  it("content 传函数时接收 close 关闭方法", async () => {
    render(
      <XPopover
        defaultOpen
        content={(close) => (
          <button type="button" onClick={close}>
            点我关闭
          </button>
        )}
      >
        <button type="button">触发器</button>
      </XPopover>,
    );
    await userEvent.click(screen.getByRole("button", { name: "点我关闭" }));
    expect(screen.queryByRole("button", { name: "点我关闭" })).not.toBeInTheDocument();
  });
});

describe("XTooltip", () => {
  it("ui 插槽类名与 kbds 快捷键", () => {
    render(
      <XTooltip
        open
        text="保存"
        kbds={["⌘", "S"]}
        ui={{ content: "custom-content", text: "custom-text", kbds: "custom-kbds", kbdsSize: "md" }}
      >
        <button type="button">保存按钮</button>
      </XTooltip>,
    );
    expect(document.querySelector("[data-slot='content'].custom-content")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='text'].custom-text")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='kbds'].custom-kbds")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='kbds'] [data-slot='kbd']")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='kbds'] [data-slot='kbd']")).toHaveClass("h-6");
  });

  it("content 插槽替换默认内容", () => {
    render(
      <XTooltip open content={<b>自定义内容</b>}>
        <button type="button">按钮</button>
      </XTooltip>,
    );
    expect(document.querySelector("b")).toHaveTextContent("自定义内容");
  });

  it("无内容时禁用提示", async () => {
    render(
      <XTooltip>
        <button type="button">按钮</button>
      </XTooltip>,
    );
    await userEvent.hover(screen.getByRole("button", { name: "按钮" }));
    expect(document.querySelector("[data-slot='content']")).not.toBeInTheDocument();
  });
});
