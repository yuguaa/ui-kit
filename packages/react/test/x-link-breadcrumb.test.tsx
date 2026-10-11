import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { XBreadcrumb } from "@/components/kit/x-breadcrumb";
import { XLink } from "@/components/kit/x-link";

describe("XLink", () => {
  it("inactiveClass 仅在非激活态应用", () => {
    const { rerender } = render(<XLink to="/docs" inactiveClass="custom-inactive">文档</XLink>);
    expect(screen.getByRole("link")).toHaveClass("custom-inactive");

    rerender(<XLink to="/docs" active inactiveClass="custom-inactive">文档</XLink>);
    expect(screen.getByRole("link")).not.toHaveClass("custom-inactive");
    expect(screen.getByRole("link")).toHaveClass("text-primary/75");
  });

  it("ui.base 应用到根元素", () => {
    render(<XLink to="/docs" ui={{ base: "custom-base" }}>文档</XLink>);
    expect(screen.getByRole("link")).toHaveClass("custom-base");
  });

  it("render 渲染为指定元素", () => {
    render(<XLink render={<button type="button" />}>操作</XLink>);
    expect(screen.getByRole("button", { name: "操作" })).toBeInTheDocument();
  });

  it("leading / trailing 渲染图标", () => {
    render(
      <XLink to="/docs" leading={<i data-testid="lead" />} trailing={<i data-testid="trail" />}>
        文档
      </XLink>,
    );
    expect(screen.getByTestId("lead")).toBeInTheDocument();
    expect(screen.getByTestId("trail")).toBeInTheDocument();
  });

  it("disabled 时移除 href 并标记 aria-disabled", () => {
    render(<XLink to="/docs" disabled>禁用</XLink>);
    const link = screen.getByText("禁用");
    expect(link).not.toHaveAttribute("href");
    expect(link).toHaveAttribute("aria-disabled", "true");
    expect(link).toHaveClass("opacity-75");
  });

  it("无 to 或 disabled 时点击阻止默认行为，仍透传 onClick", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<XLink onClick={onClick}>占位链接</XLink>);
    await user.click(screen.getByText("占位链接"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("external 或新窗口时自动补充 rel，noRel 关闭", () => {
    const { rerender } = render(<XLink to="https://example.com" external>外链</XLink>);
    expect(screen.getByRole("link")).toHaveAttribute("rel", "noopener noreferrer");

    rerender(<XLink to="/docs" target="_blank">新窗口</XLink>);
    expect(screen.getByRole("link")).toHaveAttribute("rel", "noopener noreferrer");

    rerender(
      <XLink to="https://example.com" external noRel>
        关闭默认 rel
      </XLink>,
    );
    expect(screen.getByRole("link")).not.toHaveAttribute("rel");

    rerender(<XLink to="/docs">内部链接</XLink>);
    expect(screen.getByRole("link")).not.toHaveAttribute("rel");
  });

  it("显式 rel 优先于自动补充", () => {
    render(
      <XLink to="https://example.com" external rel="nofollow">
        自定义 rel
      </XLink>,
    );
    expect(screen.getByRole("link")).toHaveAttribute("rel", "nofollow");
  });

  it("activeClass 仅在激活态应用，ariaCurrentValue 自定义 aria-current 值", () => {
    const { rerender } = render(
      <XLink to="/docs" activeClass="custom-active" ariaCurrentValue="location">
        文档
      </XLink>,
    );
    const link = screen.getByRole("link");
    expect(link).not.toHaveClass("custom-active");
    expect(link).not.toHaveAttribute("aria-current");

    rerender(
      <XLink to="/docs" active activeClass="custom-active" ariaCurrentValue="location">
        文档
      </XLink>,
    );
    expect(screen.getByRole("link")).toHaveClass("custom-active");
    expect(screen.getByRole("link")).toHaveAttribute("aria-current", "location");
  });

  it("raw 时跳过主题样式，仅应用 class 与激活类名", () => {
    const { rerender } = render(
      <XLink to="/docs" raw className="only-class">
        裸链接
      </XLink>,
    );
    const link = screen.getByRole("link");
    expect(link).toHaveClass("only-class");
    expect(link).not.toHaveClass("text-primary");
    expect(link).not.toHaveClass("inline-flex");

    rerender(
      <XLink to="/docs" raw active activeClass="custom-active">
        裸链接
      </XLink>,
    );
    expect(screen.getByRole("link")).toHaveClass("custom-active");
    expect(screen.getByRole("link")).not.toHaveClass("text-primary/75");
  });

  it("disabled 时补充 tabindex -1 与 role=link", () => {
    render(<XLink to="/docs" disabled>禁用</XLink>);
    const link = screen.getByText("禁用");
    expect(link).toHaveAttribute("tabindex", "-1");
    expect(link).toHaveAttribute("role", "link");
  });
});

describe("XBreadcrumb", () => {
  const items = [{ title: "首页", href: "/" }, { title: "组件", href: "/components" }, { title: "面包屑" }];

  it("末项默认激活：aria-current 与 color 文字色", () => {
    render(<XBreadcrumb items={items} color="primary" />);
    const links = document.querySelectorAll("[data-slot='link']");
    const lastLink = links[links.length - 1] as HTMLElement;
    expect(lastLink).toHaveAttribute("aria-current", "page");
    expect(lastLink).toHaveClass("text-primary");
    expect(lastLink).toHaveClass("font-semibold");

    const firstLink = links[0] as HTMLElement;
    expect(firstLink).toHaveAttribute("href", "/");
    expect(firstLink).toHaveClass("text-muted-foreground");
    expect(firstLink).toHaveClass("hover:text-foreground");
  });

  it("item.active 强制激活指定项", () => {
    render(<XBreadcrumb items={[{ title: "首页", href: "/", active: true }, { title: "组件" }]} />);
    const firstLink = document.querySelector("[data-slot='link']") as HTMLElement;
    expect(firstLink).toHaveClass("font-semibold");
  });

  it("color 控制激活项文字色", () => {
    render(<XBreadcrumb items={items} color="success" />);
    const links = document.querySelectorAll("[data-slot='link']");
    expect(links[links.length - 1]).toHaveClass("text-success");
  });

  it("ui 插槽类名应用到对应元素", () => {
    render(
      <XBreadcrumb
        items={items}
        ui={{
          root: "custom-root",
          list: "custom-list",
          item: "custom-item",
          link: "custom-link",
          linkLabel: "custom-linkLabel",
          separator: "custom-separator",
          separatorIcon: "custom-separatorIcon",
        }}
      />,
    );
    expect(document.querySelector("[data-slot='root']")).toHaveClass("custom-root");
    expect(document.querySelector("[data-slot='list']")).toHaveClass("custom-list");
    expect(document.querySelector("[data-slot='item']")).toHaveClass("custom-item");
    expect(document.querySelector("[data-slot='link']")).toHaveClass("custom-link");
    expect(document.querySelector("[data-slot='linkLabel']")).toHaveClass("custom-linkLabel");
    expect(document.querySelector("[data-slot='separator']")).toHaveClass("custom-separator");
    expect(document.querySelector("[data-slot='separatorIcon']")).toHaveClass("custom-separatorIcon");
  });

  it("render 默认 nav，可渲染为其他元素", () => {
    const { rerender } = render(<XBreadcrumb items={items} />);
    expect(screen.getByRole("navigation", { name: "breadcrumb" })).toBeInTheDocument();

    rerender(<XBreadcrumb items={items} render={<div />} />);
    expect(document.querySelector("div[data-slot='root']")).toBeInTheDocument();
  });

  it("item.avatar 渲染前置头像并应用 ui 插槽类名", () => {
    render(
      <XBreadcrumb
        items={[{ title: "首页", href: "/", avatar: { text: "P", className: "custom-avatar" } }]}
        ui={{ linkLeadingAvatar: "custom-linkAvatar", linkLeadingAvatarSize: "md" }}
      />,
    );
    expect(document.querySelector("[data-slot='linkLeadingAvatar']")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='linkLeadingAvatar']")).toHaveClass("custom-avatar");
    expect(document.querySelector("[data-slot='linkLeadingAvatar']")).toHaveClass("custom-linkAvatar");
  });

  it("item.icon 优先于 item.avatar 渲染", () => {
    render(<XBreadcrumb items={[{ title: "首页", href: "/", icon: <i data-testid="item-icon" />, avatar: { text: "P" } }]} />);
    expect(screen.getByTestId("item-icon")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='linkLeadingAvatar']")).not.toBeInTheDocument();
  });

  it("item.to 作为 href 别名渲染链接", () => {
    render(<XBreadcrumb items={[{ title: "首页", to: "/home" }]} />);
    expect(screen.getByRole("link")).toHaveAttribute("href", "/home");
  });

  it("item.disabled 渲染 span 并标记 aria-disabled", () => {
    render(<XBreadcrumb items={[{ title: "首页", href: "/", disabled: true }]} />);
    const link = document.querySelector("[data-slot='link']") as HTMLElement;
    expect(link.tagName).toBe("SPAN");
    expect(link).toHaveAttribute("aria-disabled", "true");
    expect(link).toHaveClass("opacity-75");
    expect(link).toHaveClass("cursor-not-allowed");
  });
});
