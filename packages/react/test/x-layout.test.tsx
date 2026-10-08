import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { XAvatar } from "@/components/kit/x-avatar";
import { XAvatarGroup } from "@/components/kit/x-avatar-group";
import { XBadge } from "@/components/kit/x-badge";
import { XBreadcrumb } from "@/components/kit/x-breadcrumb";
import { XCard } from "@/components/kit/x-card";
import { XChip } from "@/components/kit/x-chip";
import { XContainer } from "@/components/kit/x-container";
import { XIcon } from "@/components/kit/x-icon";
import { XKbd } from "@/components/kit/x-kbd";
import { XSeparator } from "@/components/kit/x-separator";
import { XSkeleton } from "@/components/kit/x-skeleton";
import { XButton } from "@/components/kit/x-button";

describe("XChip", () => {
  it("渲染语义色芯片", () => {
    render(<XChip color="error">失败</XChip>);
    const chip = screen.getByText("失败");
    expect(chip).toHaveClass("bg-error-1");
    expect(chip).toHaveClass("text-error-7");
    expect(chip).toHaveClass("rounded-full");
  });

  it("closable 渲染关闭按钮并触发 onClose", async () => {
    const onClose = vi.fn();
    render(<XChip closable onClose={onClose}>可关闭</XChip>);
    await userEvent.click(screen.getByRole("button", { name: "close" }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

describe("XAvatar", () => {
  it("默认圆形 md 尺寸，fallback 渲染子内容", () => {
    render(<XAvatar>U</XAvatar>);
    expect(screen.getByText("U")).toBeInTheDocument();
    const avatar = screen.getByText("U").closest("[data-slot='avatar']");
    expect(avatar).toHaveClass("rounded-full");
    expect(avatar).toHaveClass("size-8");
  });

  it("方形 + xl 尺寸", () => {
    render(<XAvatar shape="square" size="xl">A</XAvatar>);
    const avatar = screen.getByText("A").closest("[data-slot='avatar']");
    expect(avatar).toHaveClass("rounded-md");
    expect(avatar).toHaveClass("size-12");
  });

  it("src 模式渲染图片组件", () => {
    const { container } = render(<XAvatar src="https://example.com/a.png" aria-label="头像" />);
    expect(container.querySelector('[data-slot="avatar"]')).toBeInTheDocument();
  });
});

describe("XAvatarGroup", () => {
  it("超出 max 时折叠为 +N", () => {
    render(
      <XAvatarGroup max={3}>
        <XAvatar>A</XAvatar>
        <XAvatar>B</XAvatar>
        <XAvatar>C</XAvatar>
        <XAvatar>D</XAvatar>
      </XAvatarGroup>,
    );
    expect(screen.getByText("+2")).toBeInTheDocument();
  });

  it("未超出 max 时全部显示", () => {
    render(
      <XAvatarGroup max={4}>
        <XAvatar>A</XAvatar>
        <XAvatar>B</XAvatar>
      </XAvatarGroup>,
    );
    expect(screen.queryByText(/^\+/)).not.toBeInTheDocument();
  });
});

describe("XCard", () => {
  it("渲染标题、描述与内容", () => {
    render(<XCard title="卡片标题" description="描述文字">内容</XCard>);
    expect(screen.getByText("卡片标题")).toBeInTheDocument();
    expect(screen.getByText("描述文字")).toBeInTheDocument();
    expect(screen.getByText("内容")).toBeInTheDocument();
  });

  it("bordered=false 无 ring 边框，bordered=true 有 ring", () => {
    const { container } = render(<XCard bordered={false}>内容</XCard>);
    expect(container.firstElementChild).not.toHaveClass("ring-border");
    const { container: bordered } = render(<XCard>内容</XCard>);
    expect(bordered.firstElementChild).toHaveClass("ring-1", "ring-border");
  });

  it("hoverable 点击触发 onClick", async () => {
    const onClick = vi.fn();
    const { container } = render(<XCard hoverable onClick={onClick}>内容</XCard>);
    const card = container.querySelector('[data-slot="card"]');
    expect(card).toBeTruthy();
    await userEvent.click(card as HTMLElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe("XContainer", () => {
  it("默认 lg 宽度并渲染为 section 标签", () => {
    const { container } = render(<XContainer as="section">内容</XContainer>);
    const el = container.querySelector("section");
    expect(el).toHaveClass("max-w-320");
    expect(el).toHaveClass("mx-auto");
  });
});

describe("XIcon", () => {
  it("按名称渲染图标与尺寸", () => {
    const { container } = render(<XIcon name="star" size="lg" />);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
    expect(svg).toHaveClass("size-6");
  });
});

describe("XKbd", () => {
  it("渲染按键内容", () => {
    render(<XKbd value="⌘" />);
    expect(screen.getByText("⌘")).toBeInTheDocument();
  });
});

describe("XSeparator", () => {
  it("水平分割线", () => {
    const { container } = render(<XSeparator />);
    expect(container.firstElementChild).toHaveAttribute("data-slot", "separator");
    expect(container.firstElementChild).toHaveClass("h-px");
  });

  it("带标签时渲染标签与两条线", () => {
    const { container } = render(<XSeparator label="分区" />);
    expect(screen.getByText("分区")).toBeInTheDocument();
    expect(container.querySelectorAll("span.flex-1").length).toBe(2);
  });

  it("position=start 只保留右侧线条", () => {
    const { container } = render(<XSeparator label="分区" position="start" />);
    expect(container.querySelectorAll("span.flex-1").length).toBe(1);
  });

  it("虚线样式使用边框绘制", () => {
    const { container } = render(<XSeparator type="dashed" />);
    expect(container.firstElementChild).toHaveClass("border-dashed");
  });
});

describe("XSkeleton", () => {
  it("默认显示 rect 骨架", () => {
    const { container } = render(<XSkeleton />);
    expect(container.firstElementChild).toHaveClass("animate-pulse");
  });

  it("loading=false 渲染子内容", () => {
    render(<XSkeleton loading={false}>已加载</XSkeleton>);
    expect(screen.getByText("已加载")).toBeInTheDocument();
  });
});

describe("XAvatar 文字头像与语义色", () => {
  it("无图片时渲染 text 并应用语义色", () => {
    const { container } = render(<XAvatar text="张三" color="primary" />);
    expect(screen.getByText("张三")).toHaveClass("text-primary-7");
    expect(container.querySelector(".bg-primary-1")).toBeInTheDocument();
  });

  it("头像组向未指定颜色的子头像透传语义色", () => {
    const { container } = render(
      <XAvatarGroup color="success">
        <XAvatar text="A" />
        <XAvatar text="B" color="error" />
      </XAvatarGroup>,
    );
    expect(container.querySelector(".bg-success-1")).toBeInTheDocument();
    expect(container.querySelector(".bg-error-1")).toBeInTheDocument();
  });
});

describe("XBadge square 与前后内容", () => {
  it("square 模式宽度等于高度", () => {
    render(<XBadge square size="sm" count={1} />);
    const badge = screen.getByText("1");
    expect(badge).toHaveClass("w-5");
    expect(badge).toHaveClass("px-0");
  });

  it("渲染 leading 与 trailing 内容", () => {
    render(
      <XBadge leading={<span data-testid="lead" />} trailing={<span data-testid="trail" />}>
        标签
      </XBadge>,
    );
    expect(screen.getByTestId("lead")).toBeInTheDocument();
    expect(screen.getByTestId("trail")).toBeInTheDocument();
  });
});

describe("XBreadcrumb 图标分隔符与项图标", () => {
  it("separatorIcon 优先于 separator 文本，项图标渲染在标题前", () => {
    const { container } = render(
      <XBreadcrumb
        separator="/"
        separatorIcon={<span data-testid="sep" />}
        items={[
          { title: "首页", href: "/", icon: <span data-testid="home-icon" /> },
          { title: "详情" },
        ]}
      />,
    );
    expect(screen.getByTestId("sep")).toBeInTheDocument();
    expect(screen.queryByText("/")).not.toBeInTheDocument();
    expect(screen.getByTestId("home-icon")).toBeInTheDocument();
    expect(container).toBeInTheDocument();
  });

  it("labelKey 指定自定义标题字段", () => {
    render(<XBreadcrumb labelKey="name" items={[{ name: "工作台", href: "/" }, { name: "订单" }]} />);
    expect(screen.getByText("工作台")).toBeInTheDocument();
    expect(screen.getByText("订单")).toBeInTheDocument();
  });
});
