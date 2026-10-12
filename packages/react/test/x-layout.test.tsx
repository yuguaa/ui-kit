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
import { XButtonGroup } from "@/components/kit/x-button-group";

describe("XChip", () => {
  it("渲染语义色芯片", () => {
    render(<XChip color="error">失败</XChip>);
    const chip = screen.getByText("失败");
    expect(chip).toHaveClass("bg-error");
    expect(chip).toHaveClass("text-inverted");
    expect(chip).toHaveClass("rounded-full");
  });

  it("尺寸体系与 Nuxt 对齐", () => {
    const { container } = render(<XChip size="md" />);
    expect(container.querySelector("[data-slot='base']")?.className).toContain("h-[8px]");
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

  it("chip 布尔渲染默认圆点", () => {
    const { container } = render(<XAvatar text="U" chip />);
    const dot = container.querySelector(".bg-primary.size-2");
    expect(dot).toBeInTheDocument();
  });

  it("chip 对象渲染文字徽标与位置", () => {
    const { container } = render(<XAvatar text="U" chip={{ text: 5, color: "success", position: "bottom-left" }} />);
    expect(screen.getByText("5")).toBeInTheDocument();
    const chip = container.querySelector("[data-slot='root']");
    expect(chip).toHaveClass("bottom-0");
    expect(chip).toHaveClass("left-0");
    expect(container.querySelector("[data-slot='base']")).toHaveClass("bg-success");
  });

  it("ui 插槽类名应用到 root 与 fallback", () => {
    const { container } = render(<XAvatar text="U" ui={{ root: "custom-root", fallback: "custom-fallback" }} />);
    expect(container.querySelector("[data-slot='avatar']")).toHaveClass("custom-root");
    expect(container.querySelector("[data-slot='fallback']")).toHaveClass("custom-fallback");
  });

  it("ui.image 类名应用到图片元素", () => {
    const { container } = render(<XAvatar src="https://example.com/a.png" ui={{ image: "custom-image" }} />);
    expect(container.querySelector("[data-slot='image']")).toHaveClass("custom-image");
  });

  it("icon 传图标名渲染图标并应用 ui.icon", () => {
    const { container } = render(<XAvatar icon="user" ui={{ icon: "custom-icon" }} />);
    expect(container.querySelector("[data-slot='icon'] svg")).toBeInTheDocument();
    expect(container.querySelector("[data-slot='icon']")).toHaveClass("custom-icon");
  });

  it("render 指定渲染元素", () => {
    render(<XAvatar text="U" render={<a href="/me" />} />);
    expect(screen.getByRole("link")).toHaveAttribute("href", "/me");
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
    expect(screen.getByText("+1")).toBeInTheDocument();
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.queryByText("D")).not.toBeInTheDocument();
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

  it("max 支持字符串且默认全部显示", () => {
    const { container } = render(
      <XAvatarGroup max="2">
        <XAvatar>A</XAvatar>
        <XAvatar>B</XAvatar>
        <XAvatar>C</XAvatar>
      </XAvatarGroup>,
    );
    expect(screen.getByText("+1")).toBeInTheDocument();

    const { container: all } = render(
      <XAvatarGroup>
        <XAvatar>A</XAvatar>
        <XAvatar>B</XAvatar>
        <XAvatar>C</XAvatar>
      </XAvatarGroup>,
    );
    expect(all.querySelectorAll("[data-slot='base']").length).toBe(3);
    expect(container).toBeInTheDocument();
  });

  it("size 透传给未指定 size 的子头像", () => {
    const { container } = render(
      <XAvatarGroup size="xl">
        <XAvatar>A</XAvatar>
        <XAvatar size="xs">B</XAvatar>
      </XAvatarGroup>,
    );
    const avatars = container.querySelectorAll("[data-slot='avatar']");
    /* 倒序渲染：DOM 顺序为 B(xs)、A(xl) */
    expect(avatars[1]).toHaveClass("size-12");
    expect(avatars[0]).toHaveClass("size-5");
  });

  it("ui 插槽类名应用到 root 与 base", () => {
    const { container } = render(
      <XAvatarGroup ui={{ root: "custom-root", base: "custom-base" }}>
        <XAvatar>A</XAvatar>
        <XAvatar>B</XAvatar>
      </XAvatarGroup>,
    );
    expect(container.querySelector("[data-slot='root']")).toHaveClass("custom-root");
    expect(container.querySelectorAll(".custom-base").length).toBe(2);
  });

  it("render 指定渲染元素", () => {
    render(
      <XAvatarGroup render={<ul />}>
        <XAvatar>A</XAvatar>
      </XAvatarGroup>,
    );
    expect(screen.getByRole("list")).toBeInTheDocument();
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

  it("variant 应用背景与分割线样式", () => {
    const { container: solid } = render(<XCard variant="solid">内容</XCard>);
    expect(solid.firstElementChild).toHaveClass("bg-foreground", "divide-y");
    const { container: soft } = render(<XCard variant="soft">内容</XCard>);
    expect(soft.firstElementChild).toHaveClass("bg-muted/50");
    const { container: outline } = render(<XCard variant="outline">内容</XCard>);
    expect(outline.firstElementChild).toHaveClass("ring-1", "ring-border");
  });

  it("ui 插槽类名应用到各分区元素", () => {
    const { container } = render(
      <XCard
        title="标题"
        description="描述"
        actions="操作"
        ui={{
          root: "custom-root",
          header: "custom-header",
          title: "custom-title",
          description: "custom-description",
          body: "custom-body",
          footer: "custom-footer",
        }}
      >
        内容
      </XCard>,
    );
    expect(container.firstElementChild).toHaveClass("custom-root");
    expect(container.querySelector('[data-slot="card-header"]')).toHaveClass("custom-header");
    expect(container.querySelector('[data-slot="card-title"]')).toHaveClass("custom-title");
    expect(container.querySelector('[data-slot="card-description"]')).toHaveClass("custom-description");
    expect(container.querySelector('[data-slot="card-content"]')).toHaveClass("custom-body");
    expect(container.querySelector('[data-slot="card-footer"]')).toHaveClass("custom-footer");
  });

  it("header / footer 覆盖默认头部与底部", () => {
    const { container } = render(
      <XCard title="标题" header={<span data-testid="header-slot" />} footer={<span data-testid="footer-slot" />} />,
    );
    expect(screen.getByTestId("header-slot")).toBeInTheDocument();
    expect(screen.getByTestId("footer-slot")).toBeInTheDocument();
    expect(container).toBeInTheDocument();
    expect(screen.queryByText("标题")).not.toBeInTheDocument();
  });

  it("render 渲染为指定元素", () => {
    const { container } = render(<XCard render={<article />}>内容</XCard>);
    expect(container.querySelector("article")).toBeInTheDocument();
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
  it("默认 lg 宽度并渲染为指定元素", () => {
    const { container } = render(<XContainer render={<section />}>内容</XContainer>);
    const el = container.querySelector("section");
    expect(el).toHaveClass("max-w-320");
    expect(el).toHaveClass("mx-auto");
  });

  it("ui.base 类名应用到根元素", () => {
    const { container } = render(<XContainer ui={{ base: "custom-base" }}>内容</XContainer>);
    expect(container.firstElementChild).toHaveClass("custom-base");
  });
});

describe("XButtonGroup", () => {
  it("默认水平布局并拼接按钮", () => {
    const { container } = render(
      <XButtonGroup>
        <button>1</button>
        <button>2</button>
      </XButtonGroup>,
    );
    const root = container.querySelector("[data-slot='button-group']");
    expect(root).toHaveAttribute("data-orientation", "horizontal");
    expect(root).toHaveClass("flex-row");
  });

  it("orientation=vertical 纵向布局", () => {
    const { container } = render(<XButtonGroup orientation="vertical">内容</XButtonGroup>);
    expect(container.querySelector("[data-slot='button-group']")).toHaveClass("flex-col");
  });

  it("render 渲染为指定元素", () => {
    const { container } = render(<XButtonGroup render={<nav />}>内容</XButtonGroup>);
    expect(container.querySelector("nav")).toBeInTheDocument();
    expect(container.querySelector("nav")).toHaveAttribute("data-slot", "button-group");
  });

  it("ui.root 类名应用到根元素", () => {
    const { container } = render(<XButtonGroup ui={{ root: "custom-root" }}>内容</XButtonGroup>);
    expect(container.querySelector("[data-slot='button-group']")).toHaveClass("custom-root");
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

  it("render 渲染为指定元素", () => {
    const { container } = render(<XKbd render={<span />} value="K" />);
    expect(container.querySelector("span")).toHaveAttribute("data-slot", "kbd");
  });

  it("ui.base 类名应用到根元素", () => {
    render(<XKbd ui={{ base: "custom-base" }} value="K" />);
    expect(screen.getByText("K")).toHaveClass("custom-base");
  });
});

describe("XSeparator", () => {
  it("水平分割线渲染 border 元素", () => {
    const { container } = render(<XSeparator />);
    expect(container.firstElementChild).toHaveAttribute("data-slot", "separator");
    expect(container.querySelector("[data-slot='border']")).toHaveClass("border-t");
    expect(container.firstElementChild).toHaveAttribute("role", "separator");
  });

  it("带标签时渲染标签与两条线", () => {
    const { container } = render(<XSeparator label="分区" />);
    expect(screen.getByText("分区")).toBeInTheDocument();
    expect(container.querySelectorAll("[data-slot='border']").length).toBe(2);
  });

  it("position=start 只保留右侧线条", () => {
    const { container } = render(<XSeparator label="分区" position="start" />);
    expect(container.querySelectorAll("[data-slot='border']").length).toBe(1);
  });

  it("虚线样式使用边框绘制", () => {
    const { container } = render(<XSeparator type="dashed" />);
    expect(container.querySelector("[data-slot='border']")).toHaveClass("border-dashed");
  });

  it("size 控制边框粗细", () => {
    const { container } = render(<XSeparator size="md" />);
    expect(container.querySelector("[data-slot='border']")).toHaveClass("border-t-[3px]");
  });

  it("color 应用语义色边框", () => {
    const { container } = render(<XSeparator color="error" />);
    expect(container.querySelector("[data-slot='border']")).toHaveClass("border-error");
  });

  it("icon 与 avatar 渲染在容器中", () => {
    const { container: icon } = render(<XSeparator icon="star" />);
    expect(icon.querySelector("[data-slot='icon']")).toBeInTheDocument();
    expect(icon.querySelector("svg")).toBeInTheDocument();

    const { container: avatar } = render(<XSeparator avatar={{ text: "A" }} />);
    expect(avatar.querySelector("[data-slot='avatar']")).toBeInTheDocument();
    expect(avatar.querySelector("[data-slot='avatar']")).toHaveClass("size-5");
  });

  it("ui 插槽类名应用到 root / border / container / label", () => {
    const { container } = render(
      <XSeparator label="分区" ui={{ root: "custom-root", border: "custom-border", container: "custom-container", label: "custom-label" }} />,
    );
    expect(container.querySelector("[data-slot='separator']")).toHaveClass("custom-root");
    expect(container.querySelectorAll(".custom-border").length).toBe(2);
    expect(container.querySelector("[data-slot='container']")).toHaveClass("custom-container");
    expect(container.querySelector("[data-slot='label']")).toHaveClass("custom-label");
  });

  it("ui.avatarSize 控制头像尺寸", () => {
    const { container } = render(<XSeparator avatar={{ text: "A" }} ui={{ avatarSize: "lg" }} />);
    expect(container.querySelector("[data-slot='avatar']")).toHaveClass("size-10");
  });

  it("decorative 不渲染无障碍角色", () => {
    const { container } = render(<XSeparator decorative />);
    expect(container.firstElementChild).toHaveAttribute("role", "none");
    expect(container.firstElementChild).not.toHaveAttribute("aria-orientation");
  });

  it("render 指定渲染元素", () => {
    const { container } = render(<XSeparator render={<section />} />);
    expect(container.querySelector("section")).toBeInTheDocument();
    expect(container.querySelector("section")).toHaveAttribute("data-slot", "separator");
  });
});

describe("XSkeleton", () => {
  it("默认显示 rect 骨架", () => {
    const { container } = render(<XSkeleton />);
    expect(container.firstElementChild).toHaveClass("animate-pulse");
  });

  it("骨架元素带无障碍标记", () => {
    const { container } = render(<XSkeleton />);
    const el = container.firstElementChild as HTMLElement;
    expect(el.getAttribute("aria-busy")).toBe("true");
    expect(el.getAttribute("aria-label")).toBe("loading");
    expect(el.getAttribute("aria-live")).toBe("polite");
    expect(el.getAttribute("role")).toBe("alert");
  });

  it("ui.base 类名与 render 渲染为指定元素", () => {
    const { container } = render(<XSkeleton render={<span />} ui={{ base: "custom-base" }} />);
    const el = container.querySelector("span");
    expect(el).toHaveClass("custom-base");
  });

  it("loading=false 渲染子内容", () => {
    render(<XSkeleton loading={false}>已加载</XSkeleton>);
    expect(screen.getByText("已加载")).toBeInTheDocument();
  });
});

describe("XAvatar 文字头像与语义色", () => {
  it("无图片时渲染 text 并应用语义色", () => {
    const { container } = render(<XAvatar text="张三" color="primary" />);
    expect(screen.getByText("张三")).toHaveClass("text-primary");
    expect(container.querySelector("[class*='bg-primary/10']")).toBeInTheDocument();
  });

  it("头像组向未指定颜色的子头像透传语义色", () => {
    const { container } = render(
      <XAvatarGroup color="success">
        <XAvatar text="A" />
        <XAvatar text="B" color="error" />
      </XAvatarGroup>,
    );
    expect(container.querySelector("[class*='bg-success/10']")).toBeInTheDocument();
    expect(container.querySelector("[class*='bg-error/10']")).toBeInTheDocument();
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
  it("separator 插槽自定义分隔符，separatorIcon 替换默认图标", () => {
    const { rerender } = render(
      <XBreadcrumb
        separator={<span data-testid="sep" />}
        items={[
          { title: "首页", href: "/", icon: <span data-testid="home-icon" /> },
          { title: "详情" },
        ]}
      />,
    );
    expect(screen.getByTestId("sep")).toBeInTheDocument();
    expect(screen.getByTestId("home-icon")).toBeInTheDocument();

    rerender(
      <XBreadcrumb
        separatorIcon={<span data-testid="sep-icon" />}
        items={[
          { title: "首页", href: "/" },
          { title: "详情" },
        ]}
      />,
    );
    expect(screen.getByTestId("sep-icon")).toBeInTheDocument();
  });

  it("labelKey 指定自定义标题字段", () => {
    render(<XBreadcrumb labelKey="name" items={[{ name: "工作台", href: "/" }, { name: "订单" }]} />);
    expect(screen.getByText("工作台")).toBeInTheDocument();
    expect(screen.getByText("订单")).toBeInTheDocument();
  });
});
