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
    expect(indicator).toHaveClass("bg-success");
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

  it("size 默认 md：指示条 h-2、status 文字 text-sm", () => {
    render(<XProgress value={30} status />);
    expect(document.querySelector("[data-slot='base']")).toHaveClass("h-2");
    expect(document.querySelector("[data-slot='status']")).toHaveClass("text-sm");
  });

  it("size 控制指示条粗细与 status/steps 文字尺寸", () => {
    render(<XProgress value={30} status size="2xl" max={["a", "b"]} />);
    expect(document.querySelector("[data-slot='base']")).toHaveClass("h-5");
    expect(document.querySelector("[data-slot='status']")).toHaveClass("text-base");
    expect(document.querySelector("[data-slot='steps']")).toHaveClass("text-base");
  });

  it("color 传任意 CSS 颜色值时应用内联样式", () => {
    render(<XProgress value={30} color="#ff6600" max={["a", "b"]} />);
    const indicator = document.querySelector("[data-slot='indicator']") as HTMLElement;
    expect(indicator.style.backgroundColor).toBe("rgb(255, 102, 0)");
    expect(indicator.className).not.toContain("bg-primary");
    expect((document.querySelector("[data-slot='steps']") as HTMLElement).style.color).toBe("rgb(255, 102, 0)");
  });

  it("stepContent 自定义步骤内容，函数式接收 step 与 index", () => {
    render(
      <XProgress value={1} max={["待支付", "处理中"]} stepContent={({ step, index }) => <i>{`${index}-${step}`}</i>} />,
    );
    expect(screen.getByText("0-待支付")).toBeInTheDocument();
    expect(screen.getByText("1-处理中")).toBeInTheDocument();
  });

  it("getValueLabel 与 getValueText 生成无障碍属性", () => {
    render(
      <XProgress
        value={30}
        getValueLabel={(value, max) => `已完成 ${value}/${max}`}
        getValueText={(value, max) => `进度值 ${value}，最大 ${max}`}
      />,
    );
    const base = document.querySelector("[data-slot='base']") as HTMLElement;
    expect(base).toHaveAttribute("aria-label", "已完成 30/100");
    expect(base).toHaveAttribute("aria-valuetext", "进度值 30，最大 100");
  });
});

describe("XSlider", () => {
  it("color 与 size 应用对应类名", () => {
    render(<XSlider value={40} color="success" size="xl" />);
    expect(document.querySelector("[data-slot='range']")).toHaveClass("bg-success");
    expect(document.querySelector("[data-slot='track']")).toHaveClass("h-[10px]");
    const thumb = document.querySelector("[data-slot='thumb']");
    expect(thumb).toHaveClass("size-5");
    expect(thumb).toHaveClass("ring-success");
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

  it("minStepsBetweenThumbs 约束双拇指最小间隔", () => {
    const onChange = vi.fn();
    render(<XSlider value={[10, 12]} minStepsBetweenThumbs={5} onChange={onChange} />);
    const secondThumb = screen.getAllByRole("slider")[1]!;
    secondThumb.focus();
    /* ArrowLeft 将第二个拇指减为 11，间隔 1 小于 5 步，值应保持不变 */
    fireEvent.keyDown(secondThumb, { key: "ArrowLeft" });
    expect(onChange).not.toHaveBeenCalled();
  });

  it("minStepsBetweenThumbs 满足间隔时正常提交值", () => {
    const onChange = vi.fn();
    render(<XSlider value={[10, 20]} minStepsBetweenThumbs={5} onChange={onChange} />);
    const secondThumb = screen.getAllByRole("slider")[1]!;
    secondThumb.focus();
    /* 20 → 19，间隔 9 大于 5 步，应提交新值 */
    fireEvent.keyDown(secondThumb, { key: "ArrowLeft" });
    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[0]?.[0]?.target?.value).toEqual([10, 19]);
  });
});
