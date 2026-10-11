import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { XSelectMenu, type XSelectMenuItem } from "@/components/kit/x-select-menu";

const items = [
  { label: "苹果", value: "apple" },
  { label: "香蕉", value: "banana", description: "热带水果" },
];

/* 触发器是 combobox 角色的按钮 */
function trigger() {
  return screen.getByRole("combobox");
}

describe("XSelectMenu 字段映射与选择", () => {
  it("labelKey / valueKey 控制标签与值字段", async () => {
    const onValueChange = vi.fn();
    render(
      <XSelectMenu
        items={[
          { id: "a", name: "苹果" },
          { id: "b", name: "香蕉" },
        ]}
        labelKey="name"
        valueKey="id"
        value="a"
        onValueChange={onValueChange}
      />,
    );
    expect(trigger()).toHaveTextContent("苹果");
    await userEvent.click(trigger());
    await userEvent.click(await screen.findByText("香蕉"));
    expect(onValueChange).toHaveBeenCalledWith("b");
  });

  it("descriptionKey 渲染选项说明文字", async () => {
    render(<XSelectMenu items={items} valueKey="value" />);
    await userEvent.click(trigger());
    expect(await screen.findByText("热带水果")).toBeInTheDocument();
  });

  it("defaultValue 作为非受控初始值", () => {
    render(<XSelectMenu items={items} valueKey="value" defaultValue="apple" />);
    expect(trigger()).toHaveTextContent("苹果");
  });

  it("无选中值时显示占位文字", () => {
    render(<XSelectMenu items={items} valueKey="value" placeholder="请选择水果" />);
    expect(screen.getByText("请选择水果")).toBeInTheDocument();
  });
});

describe("XSelectMenu 搜索与模式", () => {
  it("searchInput 渲染菜单内搜索框并按 filterFields 过滤", async () => {
    render(
      <XSelectMenu
        items={[
          { label: "苹果", value: "apple", alias: "红富士" },
          { label: "香蕉", value: "banana" },
        ]}
        valueKey="value"
        filterFields={["alias"]}
      />,
    );
    await userEvent.click(trigger());
    const input = await screen.findByPlaceholderText("输入关键字搜索");
    await userEvent.type(input, "红富士");
    expect(screen.getByText("苹果")).toBeInTheDocument();
    expect(screen.queryByText("香蕉")).not.toBeInTheDocument();
  });

  it("searchInput=false 不渲染搜索框", async () => {
    render(<XSelectMenu items={items} valueKey="value" searchInput={false} />);
    await userEvent.click(trigger());
    expect(screen.queryByPlaceholderText("输入关键字搜索")).not.toBeInTheDocument();
  });

  it("mode=listbox 不渲染搜索框", async () => {
    render(<XSelectMenu items={items} valueKey="value" mode="listbox" />);
    await userEvent.click(trigger());
    expect(screen.queryByPlaceholderText("输入关键字搜索")).not.toBeInTheDocument();
  });

  it("label 与 separator 类型项渲染分组结构", async () => {
    const grouped: XSelectMenuItem[] = [
      { type: "label", label: "水果" },
      { label: "苹果", value: "apple" },
      { type: "separator" },
      { label: "香蕉", value: "banana" },
    ];
    render(<XSelectMenu items={grouped} valueKey="value" />);
    await userEvent.click(trigger());
    expect(await screen.findByText("水果")).toHaveAttribute("data-slot", "label");
    expect(document.querySelector("[data-slot='separator']")).toBeInTheDocument();
  });

  it("multiple 多选返回数组并显示逗号拼接文本", async () => {
    const onValueChange = vi.fn();
    render(
      <XSelectMenu items={items} valueKey="value" multiple value={["apple", "banana"]} onValueChange={onValueChange} />,
    );
    expect(trigger()).toHaveTextContent("苹果, 香蕉");
    await userEvent.click(trigger());
    await userEvent.click(await screen.findByText("苹果"));
    expect(onValueChange).toHaveBeenCalledWith(["banana"]);
  });
});

describe("XSelectMenu 图标与清空", () => {
  it("clear 显示清空按钮并触发 onClear 与 onValueChange", async () => {
    const onClear = vi.fn();
    const onValueChange = vi.fn();
    render(
      <XSelectMenu items={items} valueKey="value" value="apple" clear onClear={onClear} onValueChange={onValueChange} />,
    );
    await userEvent.click(screen.getByRole("button", { name: "清空" }));
    expect(onClear).toHaveBeenCalledTimes(1);
    expect(onValueChange).toHaveBeenCalledWith(undefined);
  });

  it("clearIcon 支持自定义图标", () => {
    render(<XSelectMenu items={items} valueKey="value" value="apple" clear clearIcon="trash" />);
    expect(document.querySelector("[data-slot='trailingClear'] svg")).toBeTruthy();
  });

  it("selectedIcon 渲染在选中项尾部", async () => {
    render(<XSelectMenu items={items} valueKey="value" value="apple" />);
    await userEvent.click(trigger());
    await screen.findAllByRole("option");
    expect(document.querySelector("[data-slot='itemTrailingIcon']")).toBeInTheDocument();
  });

  it("trailingIcon 渲染展开图标", () => {
    render(<XSelectMenu items={items} valueKey="value" />);
    expect(document.querySelector("[data-slot='trailingIcon']")).toBeInTheDocument();
  });
});

describe("XSelectMenu 创建项与插槽", () => {
  it("createItem 在无匹配时渲染创建项并触发 onCreate", async () => {
    const onCreate = vi.fn();
    render(<XSelectMenu items={items} valueKey="value" createItem onCreate={onCreate} />);
    await userEvent.click(trigger());
    await userEvent.type(await screen.findByPlaceholderText("输入关键字搜索"), "梨");
    await userEvent.click(await screen.findByText(/创建/));
    expect(onCreate).toHaveBeenCalledWith("梨");
  });

  it("createItemLabel 自定义创建项文案", async () => {
    render(
      <XSelectMenu
        items={items}
        valueKey="value"
        createItem
        createItemLabel={({ item }) => <span data-testid="create-label">新建 {item}</span>}
      />,
    );
    await userEvent.click(trigger());
    await userEvent.type(await screen.findByPlaceholderText("输入关键字搜索"), "梨");
    expect(await screen.findByTestId("create-label")).toHaveTextContent("新建 梨");
  });

  it("empty 渲染空数据内容", async () => {
    render(<XSelectMenu items={[]} empty={() => <span data-testid="empty-slot">没有结果</span>} />);
    await userEvent.click(trigger());
    expect(await screen.findByTestId("empty-slot")).toBeInTheDocument();
  });

  it("leading / trailing / children / contentTop 渲染自定义内容", async () => {
    render(
      <XSelectMenu
        items={items}
        valueKey="value"
        leading={<span data-testid="lead" />}
        trailing={<span data-testid="trail" />}
        contentTop={<span data-testid="top" />}
      >
        <span data-testid="value-slot">自定义</span>
      </XSelectMenu>,
    );
    expect(screen.getByTestId("lead")).toBeInTheDocument();
    expect(screen.getByTestId("value-slot")).toBeInTheDocument();
    await userEvent.click(trigger());
    expect(await screen.findByTestId("top")).toBeInTheDocument();
  });

  it("itemLabel / itemTrailing 自定义选项内容", async () => {
    render(
      <XSelectMenu
        items={items}
        valueKey="value"
        itemLabel={({ item }) => <span data-testid="item-slot">[{item.label}]</span>}
        itemTrailing={() => <span data-testid="item-trail">T</span>}
      />,
    );
    await userEvent.click(trigger());
    const labels = await screen.findAllByTestId("item-slot");
    expect(labels[0]).toHaveTextContent("[苹果]");
    expect(screen.getAllByTestId("item-trail").length).toBe(2);
  });
});

describe("XSelectMenu ui 插槽与 render", () => {
  it("ui 插槽类名应用到各元素", async () => {
    render(
      <XSelectMenu
        items={items}
        valueKey="value"
        value="apple"
        clear
        ui={{
          base: "custom-base",
          content: "custom-content",
          focusScope: "custom-focus",
          input: "custom-input",
          viewport: "custom-viewport",
          group: "custom-group",
          item: "custom-item",
          itemLabel: "custom-item-label",
          itemTrailingIcon: "custom-trailing-icon",
          trailingClear: "custom-trailing-clear",
        }}
      />,
    );
    expect(trigger()).toHaveClass("custom-base");
    expect(document.querySelector("[data-slot='trailingClear']")).toHaveClass("custom-trailing-clear");
    await userEvent.click(trigger());
    await screen.findAllByRole("option");
    expect(document.querySelector("[data-slot='content']")).toHaveClass("custom-content");
    expect(document.querySelector("[data-slot='focusScope']")).toHaveClass("custom-focus");
    expect(document.querySelector("[data-slot='input']")).toHaveClass("custom-input");
    expect(document.querySelector("[data-slot='viewport']")).toHaveClass("custom-viewport");
    expect(document.querySelector("[data-slot='group']")).toHaveClass("custom-group");
    expect(document.querySelector("[data-slot='item']")).toHaveClass("custom-item");
    expect(document.querySelector("[data-slot='itemLabel']")).toHaveClass("custom-item-label");
  });

  it("render 渲染指定触发元素", () => {
    render(<XSelectMenu items={items} valueKey="value" render={<a href="#top" />} />);
    expect(document.querySelector("[data-slot='base']")?.tagName).toBe("A");
  });
});

describe("XSelectMenu virtualize 虚拟滚动", () => {
  /* jsdom 无法计算布局尺寸,mock 列表高度让虚拟窗口可渲染 */
  beforeEach(() => {
    vi.spyOn(HTMLElement.prototype, "offsetHeight", "get").mockImplementation(function (this: HTMLElement) {
      return this.getAttribute("data-slot") === "viewport" ? 240 : 0;
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  /* 构建 200 项大数据列表 */
  function bigItems(count = 200): XSelectMenuItem[] {
    return Array.from({ length: count }, (_, index) => ({
      label: `选项 ${index}`,
      value: `value-${index}`,
    }));
  }

  it("virtualize 开启后渲染虚拟窗口而不是全部选项", async () => {
    render(<XSelectMenu items={bigItems()} valueKey="value" virtualize />);
    await userEvent.click(trigger());
    await waitFor(() => {
      expect(document.querySelector("[data-slot='virtualizer']")).not.toBeNull();
    });
    /* 窗口渲染数量应远小于总项数,且首项可见 */
    const options = await screen.findAllByRole("option");
    expect(options.length).toBeLessThan(100);
    expect(screen.getByText("选项 0")).toBeInTheDocument();
  });

  it("virtualize 配置对象支持 estimateSize 与 overscan", async () => {
    render(
      <XSelectMenu
        items={bigItems(60)}
        valueKey="value"
        virtualize={{ estimateSize: 40, overscan: 0 }}
      />,
    );
    await userEvent.click(trigger());
    await waitFor(() => {
      expect(document.querySelector("[data-slot='virtualizer']")).not.toBeNull();
    });
    /* overscan 为 0 时只渲染窗口内选项 */
    const options = await screen.findAllByRole("option");
    expect(options.length).toBeLessThan(60);
    expect(screen.getByText("选项 0")).toBeInTheDocument();
  });

  it("virtualize 下仍可选择选项并上报值", async () => {
    const onValueChange = vi.fn();
    render(
      <XSelectMenu items={bigItems(80)} valueKey="value" virtualize onValueChange={onValueChange} />,
    );
    await userEvent.click(trigger());
    await userEvent.click(await screen.findByText("选项 5"));
    expect(onValueChange).toHaveBeenCalledWith("value-5");
  });
});

describe("XSelectMenu by 自定义比较", () => {
  it("by 字符串作为取值字段,等价 valueKey", () => {
    render(
      <XSelectMenu
        items={[
          { id: "a", name: "苹果" },
          { id: "b", name: "香蕉" },
        ]}
        labelKey="name"
        by="id"
        value="a"
      />,
    );
    expect(trigger()).toHaveTextContent("苹果");
  });

  it("by 函数接管选中值比较", async () => {
    const onValueChange = vi.fn();
    render(
      <XSelectMenu
        items={[
          { id: "a", label: "苹果" },
          { id: "b", label: "香蕉" },
        ]}
        value={{ id: "b" } as unknown as string}
        by={(a, b) => (a as { id: string }).id === (b as { id: string }).id}
        onValueChange={onValueChange}
      />,
    );
    /* by 判定 id 相等即选中,触发器显示对应标签 */
    expect(trigger()).toHaveTextContent("香蕉");
    await userEvent.click(trigger());
    await userEvent.click(await screen.findByText("苹果"));
    /* by 只接管值比较,选中值仍为选项对象本身 */
    expect(onValueChange.mock.calls[0]?.[0]).toEqual({ id: "a", label: "苹果" });
  });
});
