import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { XAvatar } from "@/components/kit/x-avatar";
import { XAvatarGroup } from "@/components/kit/x-avatar-group";
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

  it("bordered=false 移除边框", () => {
    const { container } = render(<XCard bordered={false}>内容</XCard>);
    expect(container.firstElementChild).toHaveClass("border");
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
