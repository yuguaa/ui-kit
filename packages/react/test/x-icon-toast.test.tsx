import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { XIcon } from "@/components/kit/x-icon";
import { XToast, toast } from "@/components/kit/x-toast";

describe("XIcon 模式与定制", () => {
  it("mode=css 输出 Iconify CSS 类名", () => {
    const { container } = render(<XIcon name="check" mode="css" />);
    const el = container.firstElementChild;
    expect(el?.tagName).toBe("SPAN");
    expect(el).toHaveClass("i-lucide-check");
  });

  it("customize 在 svg 渲染后修改图标元素", () => {
    const { container } = render(
      <XIcon name="check" customize={(svg) => svg.setAttribute("stroke-width", "3.5")} />,
    );
    expect(container.querySelector("svg")).toHaveAttribute("stroke-width", "3.5");
  });

  it("ui.root 类名应用到图标元素", () => {
    const { container } = render(<XIcon name="star" ui={{ root: "custom-root" }} />);
    expect(container.querySelector("svg")).toHaveClass("custom-root");
  });
});

describe("XToast", () => {
  it("渲染 root / wrapper / title / description / icon / actions / close 结构", () => {
    const { container } = render(
      <XToast
        title="操作成功"
        description="数据已保存。"
        icon="circle-check"
        actions={[{ label: "撤销" }]}
      />,
    );
    expect(container.querySelector("[data-slot='root']")).toBeInTheDocument();
    expect(container.querySelector("[data-slot='wrapper']")).toBeInTheDocument();
    expect(container.querySelector("[data-slot='title']")).toHaveTextContent("操作成功");
    expect(container.querySelector("[data-slot='description']")).toHaveTextContent("数据已保存。");
    expect(container.querySelector("[data-slot='icon']")?.tagName.toLowerCase()).toBe("svg");
    expect(container.querySelector("[data-slot='actions']")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "关闭" })).toBeInTheDocument();
  });

  it("ui 插槽类名应用到各区域", () => {
    const { container } = render(
      <XToast
        title="标题"
        description="说明"
        icon="check"
        ui={{
          root: "custom-root",
          wrapper: "custom-wrapper",
          title: "custom-title",
          description: "custom-description",
          icon: "custom-icon",
          actions: "custom-actions",
          close: "custom-close",
        }}
      />,
    );
    expect(container.querySelector("[data-slot='root']")).toHaveClass("custom-root");
    expect(container.querySelector("[data-slot='wrapper']")).toHaveClass("custom-wrapper");
    expect(container.querySelector("[data-slot='title']")).toHaveClass("custom-title");
    expect(container.querySelector("[data-slot='description']")).toHaveClass("custom-description");
    expect(container.querySelector("[data-slot='icon']")).toHaveClass("custom-icon");
    expect(container.querySelector("[data-slot='actions']")).toHaveClass("custom-actions");
    expect(screen.getByRole("button", { name: "关闭" })).toHaveClass("custom-close");
  });

  it("avatar 与 ui.avatarSize 渲染头像并覆盖尺寸", () => {
    const { container } = render(
      <XToast
        title="头像"
        avatar={{ src: "https://example.com/a.png", alt: "U", size: "md" }}
        ui={{ avatar: "custom-avatar", avatarSize: "lg" }}
      />,
    );
    const avatar = container.querySelector("[data-slot='avatar']");
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveClass("custom-avatar");
    expect(avatar).toHaveClass("size-10");
  });

  it("orientation=horizontal 时 actions 与 close 在外侧容器", () => {
    const { container } = render(
      <XToast title="横向" orientation="horizontal" actions={[{ label: "确定" }]} />,
    );
    const outer = container.querySelectorAll("[data-slot='actions']");
    expect(outer.length).toBe(1);
    expect(container.querySelector("[data-slot='wrapper']")?.querySelector("[data-slot='actions']")).toBeNull();
  });

  it("title / description / actions / close 支持节点自定义渲染", () => {
    const { container } = render(
      <XToast
        close={false}
        title={<em>自定义标题</em>}
        description={<em>自定义说明</em>}
        actions={<button>自定义操作</button>}
      />,
    );
    expect(container.querySelector("[data-slot='title'] em")).toHaveTextContent("自定义标题");
    expect(container.querySelector("[data-slot='description'] em")).toHaveTextContent("自定义说明");
    expect(container.querySelector("[data-slot='actions'] button")).toHaveTextContent("自定义操作");
  });

  it("progress 渲染进度条，progress=false 不渲染", () => {
    const withProgress = render(<XToast title="进度" duration={5000} />);
    expect(withProgress.container.querySelector(".absolute.inset-x-0")).toBeInTheDocument();

    const withoutProgress = render(<XToast title="无进度" progress={false} />);
    expect(withoutProgress.container.querySelector(".absolute.inset-x-0")).toBeNull();
  });

  it("ui.progress 与 progress.ui 应用到进度条", () => {
    const { container } = render(
      <XToast
        title="进度"
        duration={5000}
        ui={{ progress: "custom-progress" }}
        progress={{ color: "success", ui: { base: "custom-base" } }}
      />,
    );
    const progress = container.querySelector(".absolute.inset-x-0");
    expect(progress).toHaveClass("custom-progress");
    expect(progress?.querySelector("[data-slot='base']")).toHaveClass("custom-base");
  });

  it("close=false 不渲染关闭按钮，close 对象透传给按钮", () => {
    const closed = render(<XToast title="无关闭" close={false} />);
    expect(screen.queryByRole("button", { name: "关闭" })).toBeNull();

    const custom = render(<XToast title="自定义" close={{ size: "lg" }} />);
    expect(screen.getByRole("button", { name: "关闭" })).toHaveClass("h-9");
  });

  it("点击关闭按钮触发 onCloseToast", async () => {
    const onCloseToast = vi.fn();
    render(<XToast title="可关闭" onCloseToast={onCloseToast} />);
    await userEvent.click(screen.getByRole("button", { name: "关闭" }));
    expect(onCloseToast).toHaveBeenCalledTimes(1);
  });

  it("toast.show 返回 id，dismiss 可调用", () => {
    const id = toast.show({ title: "通知" });
    expect(typeof id).toBe("number");
    expect(() => toast.dismiss(id)).not.toThrow();
  });
});
