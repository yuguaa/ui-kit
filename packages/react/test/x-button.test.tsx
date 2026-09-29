import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { XBadge } from "@/components/kit/x-badge";
import { XButton, XButtonGroup } from "./helpers";

describe("XButton", () => {
  it("默认 solid / md / primary，并应用原子 buttonVariants", () => {
    render(<XButton>确认</XButton>);
    const button = screen.getByRole("button", { name: "确认" });
    expect(button).toHaveClass("bg-primary-6");
    expect(button).toHaveClass("text-white");
    expect(button).toHaveAttribute("data-variant", "default");
  });

  it("soft × success 变体与语义色", () => {
    render(<XButton variant="soft" color="success">保存</XButton>);
    const button = screen.getByRole("button", { name: "保存" });
    expect(button).toHaveClass("bg-success-1");
    expect(button).toHaveClass("text-success-7");
    expect(button).toHaveClass("hover:bg-success-2");
  });

  it("xl 尺寸覆盖原子尺寸", () => {
    render(<XButton size="xl">大按钮</XButton>);
    expect(screen.getByRole("button", { name: "大按钮" })).toHaveClass("h-10");
  });

  it("loading 时禁用并显示旋转图标", () => {
    render(<XButton loading>提交</XButton>);
    const button = screen.getByRole("button", { name: "提交" });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
    expect(button.querySelector("svg")).toHaveClass("animate-spin");
  });

  it("leading / trailing 图标", () => {
    render(
      <XButton leading={<span data-testid="leading" />} trailing={<span data-testid="trailing" />}>
        操作
      </XButton>,
    );
    expect(screen.getByTestId("leading")).toBeInTheDocument();
    expect(screen.getByTestId("trailing")).toBeInTheDocument();
  });

  it("原生事件透传", async () => {
    const onClick = vi.fn();
    render(<XButton onClick={onClick}>点击</XButton>);
    await userEvent.click(screen.getByRole("button", { name: "点击" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe("XButtonGroup", () => {
  it("水平布局时相邻按钮共享边框", () => {
    render(
      <XButtonGroup>
        <XButton>1</XButton>
        <XButton>2</XButton>
      </XButtonGroup>,
    );
    expect(screen.getByRole("group")).toHaveAttribute("data-slot", "button-group");
    expect(screen.getByRole("group")).toHaveAttribute("data-orientation", "horizontal");
  });
});

describe("XBadge", () => {
  it("独立模式显示数字", () => {
    render(<XBadge count={5} />);
    expect(screen.getByText("5")).toHaveClass("bg-primary-1");
    expect(screen.getByText("5")).toHaveClass("text-primary-7");
  });

  it("超出 overflowCount 显示 99+", () => {
    render(<XBadge count={120} />);
    expect(screen.getByText("99+")).toBeInTheDocument();
  });

  it("dot 模式显示圆点", () => {
    const { container } = render(<XBadge dot>消息</XBadge>);
    expect(container.querySelector(".bg-error-6")).toBeInTheDocument();
    expect(screen.getByText("消息")).toBeInTheDocument();
  });

  it("包裹模式将徽标定位在内容右上角", () => {
    render(<XBadge count={3}>消息</XBadge>);
    const wrapper = screen.getByText("消息");
    expect(wrapper).toHaveClass("relative");
    expect(screen.getByText("3")).toBeInTheDocument();
  });
});
