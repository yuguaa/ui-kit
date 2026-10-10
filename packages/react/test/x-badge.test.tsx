import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { XBadge } from "@/components/kit/x-badge";

describe("XBadge", () => {
  it("默认 solid 变体与 primary 颜色", () => {
    render(<XBadge label="新" />);
    const badge = screen.getByText("新").closest("[data-slot='badge']");
    expect(badge).toHaveClass("bg-primary");
    expect(badge).toHaveClass("text-background");
  });

  it("label 与 ui 插槽类名", () => {
    const { container } = render(<XBadge label="在线" ui={{ base: "custom-base", label: "custom-label" }} />);
    expect(screen.getByText("在线")).toBeInTheDocument();
    expect(container.querySelector("span.custom-label")).toBeInTheDocument();
    expect(screen.getByText("在线").closest("[data-slot='badge']")).toHaveClass("custom-base");
  });

  it("leadingIcon / trailingIcon 渲染图标，icon 默认在左侧", () => {
    const { container } = render(<XBadge count={3} leadingIcon="bell" trailingIcon="check" />);
    expect(container.querySelectorAll("svg")).toHaveLength(2);

    const withIcon = render(<XBadge count={1} icon="bell" />);
    expect(withIcon.container.querySelectorAll("svg")).toHaveLength(1);
  });

  it("avatar 渲染头像", () => {
    render(<XBadge count={1} avatar={{ text: "U" }} />);
    expect(screen.getByText("U")).toBeInTheDocument();
  });

  it("ui 插槽类名覆盖图标与头像键", () => {
    const { container } = render(
      <XBadge
        label="T"
        leadingIcon="bell"
        trailingIcon="check"
        ui={{ leadingIcon: "custom-leading", trailingIcon: "custom-trailing" }}
      />,
    );
    expect(container.querySelector(".custom-leading")).toBeInTheDocument();
    expect(container.querySelector(".custom-trailing")).toBeInTheDocument();

    const { container: avatarContainer } = render(
      <XBadge
        label="T"
        avatar={{ text: "U", size: "sm" }}
        ui={{ leadingAvatar: "custom-avatar", leadingAvatarSize: "xl" }}
      />,
    );
    const avatar = avatarContainer.querySelector("[data-slot='avatar']");
    expect(avatar).toHaveClass("custom-avatar");
    expect(avatar).toHaveClass("size-12");
  });

  it("空徽标自动等边距", () => {
    render(<XBadge />);
    expect(document.querySelector("[data-slot='badge']")).toHaveClass("px-0");
  });

  it("render 渲染为指定元素", () => {
    render(<XBadge label="新" render={<a href="/docs" />} />);
    expect(screen.getByRole("link", { name: "新" })).toHaveAttribute("href", "/docs");
  });
});
