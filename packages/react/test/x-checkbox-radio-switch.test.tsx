import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Star } from "lucide-react";
import { describe, expect, it, vi } from "vitest";
import { XCheckbox } from "@/components/kit/x-checkbox";
import { XRadioGroup } from "@/components/kit/x-radio-group";
import { XSwitch } from "@/components/kit/x-switch";

describe("XCheckbox 变体 / indicator / ui", () => {
  it("variant card 时根为 label,ui 插槽类名注入全部元素", () => {
    const { container } = render(
      <XCheckbox
        checked
        variant="card"
        label="卡片"
        description="说明"
        ui={{
          root: "custom-root",
          container: "custom-container",
          base: "custom-base",
          indicator: "custom-indicator",
          icon: "custom-icon",
          wrapper: "custom-wrapper",
          label: "custom-label",
          description: "custom-description",
        }}
      />,
    );
    const root = container.querySelector("[data-slot='root']");
    expect(root?.tagName).toBe("LABEL");
    expect(root).toHaveClass("custom-root", "rounded-lg");
    expect(container.querySelector("[data-slot='container']")).toHaveClass("custom-container");
    expect(container.querySelector("[data-slot='base']")).toHaveClass("custom-base");
    expect(container.querySelector("[data-slot='indicator']")).toHaveClass("custom-indicator");
    expect(container.querySelector("[data-slot='icon']")).toHaveClass("custom-icon");
    expect(container.querySelector("[data-slot='wrapper']")).toHaveClass("custom-wrapper");
    expect(container.querySelector("[data-slot='label']")).toHaveClass("custom-label");
    expect(container.querySelector("[data-slot='description']")).toHaveClass("custom-description");
  });

  it("indicator hidden 时控件隐藏,图标显示在 label 上方", () => {
    const { container } = render(<XCheckbox indicator="hidden" icon={Star} label="星标" />);
    expect(container.querySelector("[data-slot='base']")).toHaveClass("sr-only");
    const icon = container.querySelector("[data-slot='wrapper'] > [data-slot='icon']");
    expect(icon).toBeInTheDocument();
    expect(container.querySelector("[data-slot='wrapper']")).toHaveClass("flex-col");
  });

  it("required 在 label 后加星号,highlight 常显聚焦环", () => {
    const { container } = render(
      <XCheckbox required highlight color="success" label="必选项" />,
    );
    expect(container.querySelector("[data-slot='label']")).toHaveClass("after:content-['*']");
    expect(container.querySelector("[data-slot='base']")).toHaveClass("ring-success");
  });

  it("render 指定渲染元素", () => {
    const { container } = render(
      <XCheckbox render={<section aria-label="自定义" />} />,
    );
    expect(container.querySelector("section")).toHaveClass("relative");
  });

  it("受控切换触发 onCheckedChange", async () => {
    const onCheckedChange = vi.fn();
    render(<XCheckbox onCheckedChange={onCheckedChange} />);
    await userEvent.click(screen.getByRole("checkbox"));
    expect(onCheckedChange.mock.calls[0]?.[0]).toBe(true);
  });
});

describe("XRadioGroup orientation / legend / 字段映射 / ui", () => {
  const plans = [
    { id: "basic", name: "基础版", desc: "个人使用" },
    { id: "pro", name: "专业版", desc: "企业级功能" },
  ];

  it("字段映射与 legend,ui 插槽类名注入全部元素", () => {
    const { container } = render(
      <XRadioGroup
        value="pro"
        options={plans}
        legend="订阅方案"
        valueKey="id"
        labelKey="name"
        descriptionKey="desc"
        ui={{
          root: "custom-root",
          fieldset: "custom-fieldset",
          legend: "custom-legend",
          item: "custom-item",
          container: "custom-container",
          base: "custom-base",
          indicator: "custom-indicator",
          wrapper: "custom-wrapper",
          label: "custom-label",
          icon: "custom-icon",
          description: "custom-description",
        }}
      />,
    );
    expect(screen.getByText("订阅方案")).toBeInTheDocument();
    expect(screen.getByText("基础版")).toBeInTheDocument();
    expect(screen.getByText("企业级功能")).toBeInTheDocument();
    expect(container.querySelector("[data-slot='root']")).toHaveClass("custom-root");
    expect(container.querySelector("[data-slot='fieldset']")).toHaveClass("custom-fieldset");
    expect(container.querySelector("[data-slot='legend']")).toHaveClass("custom-legend");
    expect(container.querySelector("[data-slot='item']")).toHaveClass("custom-item");
    expect(container.querySelector("[data-slot='container']")).toHaveClass("custom-container");
    expect(container.querySelector("[data-slot='base']")).toHaveClass("custom-base");
    expect(container.querySelector("[data-slot='indicator']")).toHaveClass("custom-indicator");
    expect(container.querySelector("[data-slot='wrapper']")).toHaveClass("custom-wrapper");
    expect(container.querySelector("[data-slot='label']")).toHaveClass("custom-label");
    expect(container.querySelector("[data-slot='description']")).toHaveClass("custom-description");
  });

  it("orientation horizontal 与 vertical 布局", () => {
    const { container: horizontal } = render(
      <XRadioGroup options={plans} valueKey="id" orientation="horizontal" />,
    );
    expect(horizontal.querySelector("[data-slot='fieldset']")).toHaveClass("flex-row");
    const { container: vertical } = render(<XRadioGroup options={plans} valueKey="id" />);
    expect(vertical.querySelector("[data-slot='fieldset']")).toHaveClass("flex-col");
  });

  it("color 与 size、highlight 生效", () => {
    const { container } = render(
      <XRadioGroup value="basic" options={plans} valueKey="id" color="success" size="sm" highlight />,
    );
    expect(container.querySelector("[data-slot='indicator']")).toHaveClass("bg-success");
    expect(container.querySelector("[data-slot='base']")).toHaveClass("size-3.5");
    expect(container.querySelector("[data-slot='base']")).toHaveClass("ring-success");
  });

  it("indicator hidden 时显示 option.icon 且控件隐藏", () => {
    const { container } = render(
      <XRadioGroup
        value="basic"
        options={[{ value: "basic", label: "基础版", icon: Star }]}
        indicator="hidden"
      />,
    );
    expect(container.querySelector("[data-slot='base']")).toHaveClass("sr-only");
    expect(container.querySelector("[data-slot='icon']")).toBeInTheDocument();
  });

  it("required 在 legend 后加星号,单项 ui 覆盖", () => {
    const { container } = render(
      <XRadioGroup
        value="basic"
        options={[{ value: "basic", label: "基础版", ui: { item: "item-custom", label: "label-custom" } }]}
        legend="标题"
        required
      />,
    );
    expect(container.querySelector("[data-slot='legend']")).toHaveClass("after:content-['*']");
    expect(container.querySelector("[data-slot='item']")).toHaveClass("item-custom");
    expect(container.querySelector("[data-slot='label']")).toHaveClass("label-custom");
  });

  it("自定义 label / description 插槽与 onValueChange", async () => {
    const onValueChange = vi.fn();
    const { container } = render(
      <XRadioGroup
        id="plans"
        options={plans}
        valueKey="id"
        labelKey="name"
        descriptionKey="desc"
        onValueChange={onValueChange}
        label={(option) => <b data-testid="slot-label">{String(option.name)}</b>}
        description={(option) => <i data-testid="slot-desc">{String(option.desc)}</i>}
      />,
    );
    expect(container.querySelectorAll("[data-testid='slot-label']")).toHaveLength(2);
    await userEvent.click(screen.getByRole("radio", { name: /专业版/ }));
    expect(onValueChange.mock.calls[0]?.[0]).toBe("pro");
  });

  it("button 变体注入 ui.item", () => {
    const { container } = render(
      <XRadioGroup options={plans} valueKey="id" variant="button" ui={{ item: "btn-item" }} />,
    );
    expect(container.querySelector("[data-slot='item']")).toHaveClass("btn-item");
  });
});

describe("XSwitch color / 图标 / highlight / ui", () => {
  it("ui 插槽类名注入全部元素,color 生效", () => {
    const { container } = render(
      <XSwitch
        checked
        color="success"
        label="通知"
        description="说明"
        ui={{
          root: "custom-root",
          base: "custom-base",
          container: "custom-container",
          thumb: "custom-thumb",
          icon: "custom-icon",
          wrapper: "custom-wrapper",
          label: "custom-label",
          description: "custom-description",
        }}
      />,
    );
    expect(container.querySelector("[data-slot='root']")).toHaveClass("custom-root");
    expect(container.querySelector("[data-slot='base']")).toHaveClass("custom-base");
    expect(container.querySelector("[data-slot='base']")).toHaveClass("data-checked:bg-success");
    expect(container.querySelector("[data-slot='container']")).toHaveClass("custom-container");
    expect(container.querySelector("[data-slot='thumb']")).toHaveClass("custom-thumb");
    expect(container.querySelector("[data-slot='wrapper']")).toHaveClass("custom-wrapper");
    expect(container.querySelector("[data-slot='label']")).toHaveClass("custom-label");
    expect(container.querySelector("[data-slot='description']")).toHaveClass("custom-description");
  });

  it("checkedIcon / uncheckedIcon 按状态渲染", () => {
    const { container: checkedContainer } = render(
      <XSwitch checked checkedIcon={Star} />,
    );
    expect(checkedContainer.querySelector("[data-slot='icon']")).toHaveClass("group-data-checked:opacity-100");
    const { container: uncheckedContainer } = render(
      <XSwitch uncheckedIcon={Star} />,
    );
    expect(uncheckedContainer.querySelector("[data-slot='icon']")).toHaveClass("group-data-unchecked:opacity-100");
  });

  it("loading 时显示 loadingIcon 并阻止交互", () => {
    const { container } = render(<XSwitch loading />);
    expect(container.querySelector("[data-slot='base']")).toHaveAttribute("aria-disabled", "true");
    expect(container.querySelector("[data-slot='icon']")).toHaveClass("animate-spin");
  });

  it("highlight 常显聚焦环,required 在 label 后加星号", () => {
    const { container } = render(
      <XSwitch highlight color="info" required label="必选项" />,
    );
    expect(container.querySelector("[data-slot='base']")).toHaveClass("ring-info");
    expect(container.querySelector("[data-slot='label']")).toHaveClass("after:content-['*']");
  });

  it("受控切换触发 onCheckedChange", async () => {
    const onCheckedChange = vi.fn();
    render(<XSwitch onCheckedChange={onCheckedChange} />);
    await userEvent.click(screen.getByRole("switch"));
    expect(onCheckedChange.mock.calls[0]?.[0]).toBe(true);
  });
});
