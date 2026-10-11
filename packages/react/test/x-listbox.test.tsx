import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { XListbox } from "@/components/kit/x-listbox";

const items = [
  { id: "a", name: "苹果", description: "脆甜多汁" },
  { id: "b", name: "香蕉" },
];

describe("XListbox 字段映射与选择", () => {
  it("labelKey / valueKey 控制标签与值字段，点击发出 onValueChange", async () => {
    const onValueChange = vi.fn();
    render(<XListbox items={items} labelKey="name" valueKey="id" onValueChange={onValueChange} />);
    expect(screen.getByText("苹果")).toBeInTheDocument();
    await userEvent.click(screen.getByText("苹果"));
    expect(onValueChange).toHaveBeenCalledWith("a");
  });

  it("descriptionKey 渲染说明文字", () => {
    render(<XListbox items={items} labelKey="name" descriptionKey="description" />);
    expect(document.querySelector("[data-slot='itemDescription']")).toHaveTextContent("脆甜多汁");
  });

  it("受控 value 渲染选中态与选中图标", () => {
    render(<XListbox items={items} labelKey="name" valueKey="id" value="a" />);
    const item = document.querySelector("[data-slot='item']");
    expect(item).toHaveAttribute("aria-selected", "true");
    expect(item?.querySelector("[data-slot='itemTrailingIcon']")).toBeTruthy();
  });

  it("multiple 支持多选", async () => {
    const onValueChange = vi.fn();
    render(<XListbox items={items} labelKey="name" valueKey="id" multiple onValueChange={onValueChange} />);
    await userEvent.click(screen.getByText("苹果"));
    expect(onValueChange).toHaveBeenCalledWith(["a"]);
  });

  it("item.onSelect 回调在选中时执行", async () => {
    const onSelect = vi.fn();
    render(
      <XListbox items={[{ id: "a", name: "苹果", onSelect }]} labelKey="name" valueKey="id" />,
    );
    await userEvent.click(screen.getByText("苹果"));
    expect(onSelect).toHaveBeenCalledTimes(1);
  });
});

describe("XListbox 过滤与尺寸", () => {
  it("filter 渲染搜索框并可过滤", async () => {
    render(<XListbox items={items} labelKey="name" valueKey="id" filter />);
    await userEvent.type(screen.getByPlaceholderText("搜索…"), "香");
    expect(screen.getByText("香蕉")).toBeInTheDocument();
    expect(screen.queryByText("苹果")).not.toBeInTheDocument();
  });

  it("filterFields 指定过滤字段", async () => {
    render(
      <XListbox
        items={[
          { id: "a", name: "苹果", alias: "红富士" },
          { id: "b", name: "香蕉" },
        ]}
        labelKey="name"
        valueKey="id"
        filter
        filterFields={["alias"]}
      />,
    );
    await userEvent.type(screen.getByPlaceholderText("搜索…"), "红富士");
    expect(screen.getByText("苹果")).toBeInTheDocument();
    expect(screen.queryByText("香蕉")).not.toBeInTheDocument();
  });

  it("ignoreFilter 关闭内置过滤", async () => {
    render(<XListbox items={items} labelKey="name" valueKey="id" filter ignoreFilter />);
    await userEvent.type(screen.getByPlaceholderText("搜索…"), "不存在");
    expect(document.querySelectorAll("[data-slot='item']").length).toBe(2);
  });

  it("size 控制项尺寸类名", () => {
    render(<XListbox items={items} labelKey="name" valueKey="id" size="xs" />);
    expect(document.querySelector("[data-slot='item']")).toHaveClass("p-1");
  });
});

describe("XListbox 虚拟滚动", () => {
  const manyItems = Array.from({ length: 500 }, (_, index) => ({ id: String(index), label: `选项 ${index}` }));

  /* jsdom 无法计算布局尺寸，mock 滚动容器高度让虚拟窗口可渲染 */
  beforeEach(() => {
    vi.spyOn(HTMLElement.prototype, "offsetHeight", "get").mockImplementation(function (this: HTMLElement) {
      return this.getAttribute("data-slot") === "content" ? 240 : 0;
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("virtualize 开启时撑起总高度且仅渲染窗口项", async () => {
    render(<XListbox items={manyItems} valueKey="id" virtualize />);
    const virtualizer = document.querySelector("[data-slot='virtualizer']");
    expect(virtualizer).toBeTruthy();

    await waitFor(() => {
      expect(virtualizer).toHaveStyle({ height: "16000px" });
    });

    const rendered = document.querySelectorAll("[data-slot='item']");
    expect(rendered.length).toBeGreaterThan(0);
    expect(rendered.length).toBeLessThan(manyItems.length);
    expect(rendered[0]).toHaveAttribute("aria-setsize", "500");
    expect(rendered[0]).toHaveAttribute("aria-posinset", "1");
    expect(document.querySelectorAll("[data-slot='group']").length).toBe(0);
  });

  it("estimateSize 支持数字与函数", async () => {
    const { rerender } = render(<XListbox items={manyItems} valueKey="id" virtualize={{ estimateSize: 40 }} />);
    const virtualizer = document.querySelector("[data-slot='virtualizer']");
    await waitFor(() => {
      expect(virtualizer).toHaveStyle({ height: "20000px" });
    });

    rerender(<XListbox items={manyItems} valueKey="id" virtualize={{ estimateSize: (index) => (index < 2 ? 40 : 20) }} />);
    await waitFor(() => {
      expect(virtualizer).toHaveStyle({ height: "10040px" });
    });
  });

  it("getItemKey 提供的稳定键用于虚拟项渲染", async () => {
    render(<XListbox items={manyItems} valueKey="id" virtualize={{ getItemKey: (index) => `key-${index}` }} />);
    await waitFor(() => {
      expect(document.querySelectorAll("[data-slot='item']").length).toBeGreaterThan(0);
    });
    const first = document.querySelectorAll("[data-index]")[0];
    expect(first?.getAttribute("data-index")).toBe("0");
  });

  it("虚拟化下点击可见项仍触发选择", async () => {
    const onValueChange = vi.fn();
    render(<XListbox items={manyItems} valueKey="id" virtualize onValueChange={onValueChange} />);
    await userEvent.click(screen.getByText("选项 0"));
    expect(onValueChange).toHaveBeenCalledWith("0");
  });

  it("虚拟化下结构项正常渲染", async () => {
    render(
      <XListbox
        items={[[{ type: "label", label: "分组一" }, ...manyItems.slice(0, 3)]]}
        valueKey="id"
        virtualize
      />,
    );
    expect(document.querySelector("[data-slot='label']")).toHaveTextContent("分组一");
    expect(document.querySelectorAll("[data-slot='item']").length).toBeGreaterThan(0);
  });

  it("未开启 virtualize 时保持分组渲染", () => {
    render(<XListbox items={manyItems.slice(0, 5)} valueKey="id" />);
    expect(document.querySelector("[data-slot='virtualizer']")).toBeFalsy();
    expect(document.querySelectorAll("[data-slot='item']").length).toBe(5);
  });
});

describe("XListbox 图标与加载", () => {
  it("loading 渲染旋转的默认图标", () => {
    render(<XListbox items={items} labelKey="name" valueKey="id" loading />);
    expect(document.querySelector("[data-slot='loadingIcon']")).toHaveClass("animate-spin");
  });

  it("loadingIcon 支持自定义图标", () => {
    render(<XListbox items={items} labelKey="name" valueKey="id" loading loadingIcon="loader-circle" />);
    expect(document.querySelector("svg[data-slot='loadingIcon']")).toBeTruthy();
  });

  it("loadingSlot 替换默认加载内容", () => {
    render(
      <XListbox
        items={items}
        labelKey="name"
        valueKey="id"
        loading
        loadingSlot={<span data-testid="loading-slot" />}
      />,
    );
    expect(screen.getByTestId("loading-slot")).toBeInTheDocument();
  });

  it("item.icon 渲染前置图标", () => {
    render(<XListbox items={[{ id: "a", name: "苹果", icon: "check" }]} labelKey="name" valueKey="id" />);
    expect(document.querySelector("[data-slot='itemLeadingIcon'] svg")).toBeTruthy();
  });
});

describe("XListbox 分组与空态", () => {
  it("二维数组分组渲染 group / label / separator", () => {
    render(
      <XListbox
        items={[
          [{ id: "g1", type: "label", label: "水果" }, { id: "a", label: "苹果" }],
          [{ id: "s1", type: "separator" }, { id: "b", label: "蔬菜" }],
        ]}
      />,
    );
    expect(document.querySelectorAll("[data-slot='group']").length).toBe(2);
    expect(document.querySelector("[data-slot='label']")).toHaveTextContent("水果");
    expect(document.querySelector("[data-slot='separator']")).toBeTruthy();
  });

  it("empty 渲染自定义空态", () => {
    render(<XListbox items={[]} empty={() => <span data-testid="empty-slot" />} />);
    expect(screen.getByTestId("empty-slot")).toBeInTheDocument();
  });
});

describe("XListbox ui 插槽与 render", () => {
  it("ui 插槽类名应用到各元素", () => {
    render(
      <XListbox
        items={[{ id: "a", label: "苹果" }]}
        valueKey="id"
        value="a"
        filter
        ui={{
          root: "custom-root",
          input: "custom-input",
          content: "custom-content",
          group: "custom-group",
          item: "custom-item",
          itemLabel: "custom-item-label",
          itemTrailingIcon: "custom-trailing-icon",
        }}
      />,
    );
    expect(document.querySelector("[data-slot='root']")).toHaveClass("custom-root");
    expect(document.querySelector("[data-slot='input']")).toHaveClass("custom-input");
    expect(document.querySelector("[data-slot='content']")).toHaveClass("custom-content");
    expect(document.querySelector("[data-slot='group']")).toHaveClass("custom-group");
    expect(document.querySelector("[data-slot='item']")).toHaveClass("custom-item");
    expect(document.querySelector("[data-slot='itemLabel']")).toHaveClass("custom-item-label");
    expect(document.querySelector("[data-slot='itemTrailingIcon']")).toHaveClass("custom-trailing-icon");
  });

  it("render 渲染指定根元素", () => {
    render(<XListbox items={items} labelKey="name" valueKey="id" render={<section />} />);
    expect(document.querySelector("[data-slot='root']")?.tagName).toBe("SECTION");
  });
});
