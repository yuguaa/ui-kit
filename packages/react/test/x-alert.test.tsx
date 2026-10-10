import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { XAlert } from "@/components/kit/x-alert";

describe("XAlert", () => {
  it("color 与 variant 语义色类", () => {
    const { container } = render(<XAlert color="success" variant="soft" title="完成" />);
    const root = container.querySelector("[data-slot='root']");
    expect(root).toHaveClass("bg-success-1");
    expect(root).toHaveClass("text-success-7");
  });

  it("title 与 message 并存时 title 优先", () => {
    render(<XAlert title="新标题" message="旧标题" />);
    expect(screen.getByText("新标题")).toBeInTheDocument();
    expect(screen.queryByText("旧标题")).not.toBeInTheDocument();
  });

  it("orientation horizontal 应用到根元素", () => {
    const { container } = render(<XAlert orientation="horizontal" title="提示" />);
    const root = container.querySelector("[data-slot='root']");
    expect(root).toHaveAttribute("data-orientation", "horizontal");
    expect(root).toHaveClass("items-center");
  });

  it("close 点击触发 onClose 与 onOpenChange(false)，组件隐藏", async () => {
    const onClose = vi.fn();
    const onOpenChange = vi.fn();
    render(<XAlert close title="提示" onClose={onClose} onOpenChange={onOpenChange} />);
    await userEvent.click(screen.getByRole("button", { name: "关闭" }));
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(onOpenChange).toHaveBeenCalledWith(false);
    expect(screen.queryByText("提示")).not.toBeInTheDocument();
  });

  it("ui 插槽类名应用到对应元素", () => {
    const { container } = render(
      <XAlert
        title="T"
        description="D"
        icon="bell"
        ui={{
          root: "custom-root",
          wrapper: "custom-wrapper",
          title: "custom-title",
          description: "custom-description",
          icon: "custom-icon",
        }}
      />,
    );
    expect(container.querySelector("[data-slot='root']")).toHaveClass("custom-root");
    expect(container.querySelector("[data-slot='wrapper']")).toHaveClass("custom-wrapper");
    expect(container.querySelector("[data-slot='title']")).toHaveClass("custom-title");
    expect(container.querySelector("[data-slot='description']")).toHaveClass("custom-description");
    expect(container.querySelector("[data-slot='icon']")).toHaveClass("custom-icon");
  });

  it("ui 插槽类名覆盖 avatar / avatarSize / actions / close", () => {
    const { container } = render(
      <XAlert
        title="T"
        avatar={{ text: "U", size: "sm" }}
        close
        actions={<button type="button">处理</button>}
        ui={{
          avatar: "custom-avatar",
          avatarSize: "xl",
          actions: "custom-actions",
          close: "custom-close",
        }}
      />,
    );
    const avatar = container.querySelector("[data-slot='avatar']");
    expect(avatar).toHaveClass("custom-avatar");
    expect(avatar).toHaveClass("size-12");
    expect(container.querySelector("[data-slot='actions']")).toHaveClass("custom-actions");
    expect(container.querySelector("[data-slot='button']")).toHaveClass("custom-close");
  });

  it("icon 字符串渲染图标，ReactNode 直接渲染", () => {
    const { container } = render(<XAlert icon="bell" title="T" />);
    expect(container.querySelector("svg[data-slot='icon']")).toBeInTheDocument();
    render(<XAlert icon={<i data-testid="custom-icon" />} title="T" />);
    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
  });

  it("avatar 渲染头像，render 渲染为指定元素", () => {
    render(<XAlert avatar={{ text: "U" }} title="T" render={<section />} />);
    expect(screen.getByText("U")).toBeInTheDocument();
    expect(screen.getByRole("alert").tagName).toBe("SECTION");
  });

  it("horizontal 时 actions 位于标题右侧", () => {
    const { container } = render(
      <XAlert orientation="horizontal" title="T" actions={<button type="button">处理</button>} />,
    );
    expect(container.querySelector("[data-slot='root']")?.children).toHaveLength(2);
  });

  it("actions 数组渲染为按钮列表", () => {
    render(
      <XAlert
        title="T"
        actions={[
          { label: "重试", color: "success" },
          { label: "忽略", variant: "ghost" },
        ]}
      />,
    );
    expect(screen.getByRole("button", { name: "重试" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "忽略" })).toBeInTheDocument();
  });

  it("close 对象整体透传给关闭按钮", async () => {
    const onClose = vi.fn();
    render(<XAlert title="T" close={{ variant: "soft", color: "info", label: "关闭提示" }} onClose={onClose} />);
    const button = screen.getByRole("button", { name: "关闭" });
    expect(button).toHaveTextContent("关闭提示");
    expect(button).toHaveClass("text-info-7");
    await userEvent.click(button);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("closeSlot 替换默认关闭按钮", () => {
    render(<XAlert title="T" close closeSlot={<button type="button">自定义关闭</button>} />);
    expect(screen.getByRole("button", { name: "自定义关闭" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "关闭" })).not.toBeInTheDocument();
  });
});
