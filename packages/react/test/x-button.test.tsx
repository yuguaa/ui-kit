import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { XBadge } from "@/components/kit/x-badge";
import { XButton, XButtonGroup } from "./helpers";

describe("XButton", () => {
  it("默认 solid / md / primary，并应用原子 buttonVariants", () => {
    render(<XButton>确认</XButton>);
    const button = screen.getByRole("button", { name: "确认" });
    expect(button).toHaveClass("bg-primary");
    expect(button).toHaveClass("text-background");
    expect(button).toHaveAttribute("data-variant", "default");
  });

  it("soft × success 变体与语义色", () => {
    render(<XButton variant="soft" color="success">保存</XButton>);
    const button = screen.getByRole("button", { name: "保存" });
    expect(button).toHaveClass("bg-success/10");
    expect(button).toHaveClass("text-success");
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

  it("block 撑满宽度、square 使用方形尺寸", () => {
    render(<XButton block>整行</XButton>);
    expect(screen.getByRole("button", { name: "整行" })).toHaveClass("w-full");

    const { container } = render(<XButton square size="lg" aria-label="设置" />);
    expect(container.querySelector("button")).toHaveClass("size-9");
  });

  it("label 与 ui 插槽类名", () => {
    const { container } = render(<XButton label="保存" ui={{ base: "custom-base", label: "custom-label" }} />);
    expect(screen.getByRole("button", { name: "保存" })).toHaveClass("custom-base");
    expect(container.querySelector("span.custom-label")).toBeInTheDocument();
  });

  it("active 配合 activeColor / activeVariant 覆盖颜色与样式", () => {
    render(<XButton active activeColor="success" activeVariant="soft" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-success/10");
    expect(button).toHaveClass("text-success");
  });

  it("render 指定渲染元素", () => {
    render(<XButton render={<a href="/docs" />}>文档</XButton>);
    expect(screen.getByRole("link", { name: "文档" })).toHaveAttribute("href", "/docs");
  });

  it("loadingAuto 点击返回 Promise 时进入加载态", async () => {
    let resolve!: () => void;
    render(
      <XButton
        loadingAuto
        onClick={() =>
          new Promise<void>((done) => {
            resolve = done;
          })
        }
      >
        提交
      </XButton>,
    );
    const button = screen.getByRole("button", { name: "提交" });
    await userEvent.click(button);
    expect(button).toHaveAttribute("aria-busy", "true");

    resolve();
    await waitFor(() => expect(button).not.toHaveAttribute("aria-busy"));
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
    expect(screen.getByText("5")).toHaveClass("bg-primary");
    expect(screen.getByText("5")).toHaveClass("text-background");
  });

  it("超出 overflowCount 显示 99+", () => {
    render(<XBadge count={120} />);
    expect(screen.getByText("99+")).toBeInTheDocument();
  });

  it("dot 模式显示圆点", () => {
    const { container } = render(<XBadge dot>消息</XBadge>);
    expect(container.querySelector(".bg-error")).toBeInTheDocument();
    expect(screen.getByText("消息")).toBeInTheDocument();
  });

  it("包裹模式将徽标定位在内容右上角", () => {
    render(<XBadge count={3}>消息</XBadge>);
    const wrapper = screen.getByText("消息");
    expect(wrapper).toHaveClass("relative");
    expect(screen.getByText("3")).toBeInTheDocument();
  });
});
