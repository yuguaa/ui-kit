import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
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
