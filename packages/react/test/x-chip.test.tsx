import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { XChip } from "@/components/kit/x-chip";

describe("XChip", () => {
  it("text 渲染，content 优先于 children 与 text", () => {
    render(<XChip text="5" />);
    expect(screen.getByText("5")).toBeInTheDocument();

    render(<XChip text="5" content={<span data-testid="custom" />} />);
    expect(screen.getByTestId("custom")).toBeInTheDocument();
  });

  it("默认角标定位，standalone 关闭绝对定位", () => {
    const { container } = render(<XChip text="1" />);
    const chip = container.querySelector("[data-slot='root']");
    expect(chip).toHaveClass("absolute");
    expect(chip).toHaveClass("top-0");
    expect(chip).toHaveClass("right-0");
    expect(chip).toHaveClass("-translate-y-1/2");

    const standalone = render(<XChip text="1" standalone />);
    expect(standalone.container.querySelector("[data-slot='root']")).not.toHaveClass("absolute");
  });

  it("inset 保持位置不加外移", () => {
    const { container } = render(<XChip text="1" inset />);
    const chip = container.querySelector("[data-slot='root']");
    expect(chip).toHaveClass("absolute");
    expect(chip).not.toHaveClass("-translate-y-1/2");
  });

  it("ui 插槽类名与 render", () => {
    const { container } = render(<XChip text="1" ui={{ root: "custom-root", base: "custom-base" }} />);
    const chip = container.querySelector("[data-slot='root']");
    expect(chip).toHaveClass("custom-root");
    expect(container.querySelector("[data-slot='base']")).toHaveClass("custom-base");
    expect(container.querySelector("[data-slot='base']")?.textContent).toBe("1");

    const { container: spanContainer } = render(<XChip text="1" render={<span />} />);
    const span = spanContainer.querySelector("span[data-slot='root']");
    expect(span).not.toBeNull();
    expect(span?.textContent).toBe("1");
  });

  it("show 为 false 时只渲染定位壳", () => {
    const { container } = render(<XChip text="1" show={false} />);
    expect(container.querySelector("[data-slot='root']")).toHaveClass("absolute");
    expect(container.querySelector("[data-slot='base']")).not.toBeInTheDocument();
  });

  it("尺寸体系与 Nuxt 对齐（3xs~3xl 像素级角标）", () => {
    const { container } = render(<XChip size="3xl" text="新" />);
    expect(container.querySelector("[data-slot='base']")?.className).toContain("h-[12px]");
  });
});
