import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { XProgress } from "@/components/kit/x-progress";
import { XSlider } from "@/components/kit/x-slider";

describe("XProgress", () => {
  it("默认不确定进度：indicator 带不确定动画类", () => {
    render(<XProgress />);
    const indicator = document.querySelector("[data-slot='indicator']");
    expect(indicator).toBeInTheDocument();
    expect(indicator).toHaveClass("motion-safe:data-[indeterminate]:animate-[carousel_2s_linear_infinite]");
  });

  it("max 传数组时渲染 steps，激活步骤显示", () => {
    render(<XProgress value={1} max={["待支付", "处理中", "已完成"]} />);
    const steps = document.querySelectorAll("[data-slot='step']");
    expect(steps).toHaveLength(3);
    expect(steps[1]).toHaveClass("opacity-100");
    expect(steps[2]).toHaveClass("opacity-0");
  });

  it("status 开关显示百分比，statusContent 自定义并接收 percent", () => {
    const { rerender } = render(<XProgress value={45} status />);
    expect(screen.getByText("45%")).toBeInTheDocument();

    rerender(<XProgress value={45} statusContent={({ percent }) => <i>进度 {percent}</i>} />);
    expect(screen.getByText("进度 45")).toBeInTheDocument();
  });

  it("orientation vertical 与 inverted 应用对应类名", () => {
    render(<XProgress value={45} status orientation="vertical" inverted />);
    const root = document.querySelector("[data-slot='root']");
    expect(root).toHaveAttribute("data-orientation", "vertical");
    expect(root).toHaveClass("h-full");
    expect(document.querySelector("[data-slot='status']")).toHaveClass("self-end");
  });

  it("color 与 animation 应用对应类名", () => {
    render(<XProgress color="success" animation="swing" />);
    const indicator = document.querySelector("[data-slot='indicator']");
    expect(indicator).toHaveClass("bg-success-6");
    expect(indicator).toHaveClass("motion-safe:data-[indeterminate]:animate-[swing_2s_var(--ease-in-out)_infinite]");
  });

  it("ui 插槽类名应用到对应元素", () => {
    render(
      <XProgress
        value={0}
        status
        max={["a", "b"]}
        ui={{
          root: "custom-root",
          base: "custom-base",
          indicator: "custom-indicator",
          status: "custom-status",
          steps: "custom-steps",
          step: "custom-step",
        }}
      />,
    );
    expect(document.querySelector("[data-slot='root']")).toHaveClass("custom-root");
    expect(document.querySelector("[data-slot='base']")).toHaveClass("custom-base");
    expect(document.querySelector("[data-slot='indicator']")).toHaveClass("custom-indicator");
    expect(document.querySelector("[data-slot='status']")).toHaveClass("custom-status");
    expect(document.querySelector("[data-slot='steps']")).toHaveClass("custom-steps");
    expect(document.querySelector("[data-slot='step']")).toHaveClass("custom-step");
  });

  it("render 渲染为指定元素", () => {
    render(<XProgress value={30} render={<section />} />);
    expect(document.querySelector("section[data-slot='root']")).toBeInTheDocument();
  });
});

describe("XSlider", () => {
  it("color 与 size 应用对应类名", () => {
    render(<XSlider value={40} color="success" size="xl" />);
    expect(document.querySelector("[data-slot='range']")).toHaveClass("bg-success-6");
    expect(document.querySelector("[data-slot='track']")).toHaveClass("h-[10px]");
    const thumb = document.querySelector("[data-slot='thumb']");
    expect(thumb).toHaveClass("size-5");
    expect(thumb).toHaveClass("ring-success-6");
  });

  it("ui 插槽类名应用到对应元素", () => {
    render(
      <XSlider
        value={40}
        ui={{ root: "custom-root", track: "custom-track", range: "custom-range", thumb: "custom-thumb" }}
      />,
    );
    expect(document.querySelector("[data-slot='root']")).toHaveClass("custom-root");
    expect(document.querySelector("[data-slot='track']")).toHaveClass("custom-track");
    expect(document.querySelector("[data-slot='range']")).toHaveClass("custom-range");
    expect(document.querySelector("[data-slot='thumb']")).toHaveClass("custom-thumb");
  });

  it("双值渲染两个拇指，单值渲染一个", () => {
    const { unmount } = render(<XSlider value={[20, 80]} />);
    expect(document.querySelectorAll("[data-slot='thumb']")).toHaveLength(2);
    unmount();

    render(<XSlider value={40} />);
    expect(document.querySelectorAll("[data-slot='thumb']")).toHaveLength(1);
  });

  it("键盘调整后提交 onChange，target.value 为提交值", () => {
    const onChange = vi.fn();
    render(<XSlider defaultValue={50} onChange={onChange} />);
    const thumb = screen.getByRole("slider");
    thumb.focus();
    fireEvent.keyDown(thumb, { key: "ArrowRight" });
    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[0]?.[0]?.target?.value).toBe(51);
  });

  it("onValueChange 在值变化时触发", () => {
    const onValueChange = vi.fn();
    render(<XSlider defaultValue={50} onValueChange={onValueChange} />);
    const thumb = screen.getByRole("slider");
    thumb.focus();
    fireEvent.keyDown(thumb, { key: "ArrowRight" });
    expect(onValueChange).toHaveBeenCalled();
  });

  it("tooltip 对象透传 XTooltip 属性，受控 open 显示当前值", async () => {
    render(<XSlider tooltip={{ open: true }} value={40} />);
    expect(await screen.findByText("40")).toBeInTheDocument();
  });

  it("disabled 时根元素标记不可用", () => {
    render(<XSlider value={40} disabled />);
    expect(document.querySelector("[data-slot='root']")).toHaveClass("cursor-not-allowed");
    expect(document.querySelector("[data-slot='thumb']")).toHaveAttribute("data-disabled");
  });

  it("render 渲染为指定元素", () => {
    render(<XSlider value={40} render={<section />} />);
    expect(document.querySelector("section[data-slot='root']")).toBeInTheDocument();
  });
});
