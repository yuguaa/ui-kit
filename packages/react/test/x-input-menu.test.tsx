import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { XInputMenu } from "@/components/kit/x-input-menu";

const items = [
  { label: "上海", value: "sh" },
  { label: "北京", value: "bj", description: "首都" },
];

function input() {
  return screen.getByRole("combobox");
}

describe("XInputMenu 字段映射与选择", () => {
  it("labelKey / valueKey 控制标签与值字段", async () => {
    const onValueChange = vi.fn();
    render(
      <XInputMenu
        items={[
          { id: "sh", name: "上海" },
          { id: "bj", name: "北京" },
        ]}
        labelKey="name"
        valueKey="id"
        onValueChange={onValueChange}
      />,
    );
    await userEvent.click(input());
    await userEvent.click(await screen.findByText("上海"));
    expect(onValueChange).toHaveBeenCalledWith("sh");
  });

  it("受控 value 在输入框显示标签文本", async () => {
    render(<XInputMenu items={items} valueKey="value" value="sh" />);
    await waitFor(() => expect(input()).toHaveValue("上海"));
  });

  it("descriptionKey 渲染选项说明文字", async () => {
    render(<XInputMenu items={items} valueKey="value" />);
    await userEvent.click(input());
    expect(await screen.findByText("首都")).toBeInTheDocument();
  });
});

describe("XInputMenu 搜索过滤", () => {
  it("输入即过滤，filterFields 指定字段", async () => {
    render(
      <XInputMenu
        items={[
          { label: "上海", value: "sh", alias: "魔都" },
          { label: "北京", value: "bj" },
        ]}
        valueKey="value"
        filterFields={["alias"]}
      />,
    );
    await userEvent.click(input());
    await userEvent.type(input(), "魔都");
    expect(await screen.findByText("上海")).toBeInTheDocument();
    expect(screen.queryByText("北京")).not.toBeInTheDocument();
  });

  it("ignoreFilter 关闭内置过滤", async () => {
    render(<XInputMenu items={items} valueKey="value" ignoreFilter />);
    await userEvent.click(input());
    await userEvent.type(input(), "不存在");
    await screen.findByText("上海");
    expect(document.querySelectorAll("[data-slot='item']").length).toBe(2);
  });
});

describe("XInputMenu 模式与 searchInput", () => {
  it("mode=autocomplete 输入文本作为值", async () => {
    const onValueChange = vi.fn();
    render(<XInputMenu items={items} valueKey="value" mode="autocomplete" onValueChange={onValueChange} />);
    await userEvent.click(input());
    await userEvent.type(input(), "自定义");
    expect(onValueChange).toHaveBeenLastCalledWith("自定义");
  });

  it("mode=listbox 输入框只读，searchInput 渲染菜单内搜索框", async () => {
    render(
      <XInputMenu items={items} valueKey="value" mode="listbox" searchInput={{ placeholder: "菜单内搜索" }} />,
    );
    expect(input()).toHaveAttribute("readonly");
    await userEvent.click(input());
    const menuInput = await screen.findByPlaceholderText("菜单内搜索");
    await userEvent.type(menuInput, "北");
    expect(screen.getByText("北京")).toBeInTheDocument();
    expect(screen.queryByText("上海")).not.toBeInTheDocument();
  });

  it("searchInputSlot 自定义菜单内搜索框", async () => {
    render(
      <XInputMenu
        items={items}
        valueKey="value"
        mode="listbox"
        searchInput
        searchInputSlot={({ keyword, onInput }) => (
          <input
            className="slot-search"
            placeholder="插槽搜索"
            value={keyword}
            onChange={(event) => onInput(event.target.value)}
          />
        )}
      />,
    );
    await userEvent.click(input());
    const slotInput = await screen.findByPlaceholderText("插槽搜索");
    await userEvent.type(slotInput, "北");
    expect(screen.getByText("北京")).toBeInTheDocument();
  });
});

describe("XInputMenu 多选与清空", () => {
  it("multiple 选中渲染标签并可删除", async () => {
    const onRemoveTag = vi.fn();
    render(<XInputMenu items={items} valueKey="value" multiple value={["sh"]} onRemoveTag={onRemoveTag} />);
    const tag = document.querySelector("[data-slot='tagsItem']");
    expect(tag).toHaveTextContent("上海");
    await userEvent.click(document.querySelector("[data-slot='tagsItemDelete']")!);
    expect(onRemoveTag).toHaveBeenCalledWith("sh");
  });

  it("deleteIcon 支持自定义图标", () => {
    render(<XInputMenu items={items} valueKey="value" multiple value={["sh"]} deleteIcon="trash" />);
    expect(document.querySelector("[data-slot='tagsItemDelete'] svg")).toBeTruthy();
  });

  it("clear 显示清空按钮并触发 onClear", async () => {
    const onClear = vi.fn();
    const onValueChange = vi.fn();
    render(
      <XInputMenu
        items={items}
        valueKey="value"
        value="sh"
        clear
        onClear={onClear}
        onValueChange={onValueChange}
      />,
    );
    await userEvent.click(screen.getByRole("button", { name: "清空" }));
    expect(onClear).toHaveBeenCalledTimes(1);
    expect(onValueChange).toHaveBeenCalledWith(undefined);
  });

  it("clearIcon 支持自定义图标", () => {
    render(<XInputMenu items={items} valueKey="value" value="sh" clear clearIcon="trash" />);
    expect(document.querySelector("[data-slot='trailingClear'] svg")).toBeTruthy();
  });
});

describe("XInputMenu 图标与插槽", () => {
  it("selectedIcon 渲染在选中项尾部", async () => {
    render(<XInputMenu items={items} valueKey="value" value="sh" />);
    await userEvent.click(input());
    await screen.findAllByRole("option");
    expect(document.querySelector("[data-slot='itemTrailingIcon']")).toBeInTheDocument();
  });

  it("leading / trailing 渲染自定义内容", () => {
    render(
      <XInputMenu
        items={items}
        valueKey="value"
        leading={<span data-testid="lead" />}
        trailing={<span data-testid="trail" />}
      />,
    );
    expect(screen.getByTestId("lead")).toBeInTheDocument();
    expect(screen.getByTestId("trail")).toBeInTheDocument();
  });

  it("itemLabel 自定义选项文本", async () => {
    render(
      <XInputMenu
        items={items}
        valueKey="value"
        itemLabel={({ item }) => <span data-testid="item-slot">[{item.label}]</span>}
      />,
    );
    await userEvent.click(input());
    const slots = await screen.findAllByTestId("item-slot");
    expect(slots[0]).toHaveTextContent("[上海]");
  });

  it("empty 渲染自定义空态", async () => {
    render(<XInputMenu items={[]} empty={() => <span data-testid="empty-slot" />} />);
    await userEvent.click(input());
    expect(await screen.findByTestId("empty-slot")).toBeInTheDocument();
  });
});

describe("XInputMenu ui 插槽与 render", () => {
  it("ui 插槽类名应用到各元素", () => {
    render(
      <XInputMenu
        items={items}
        valueKey="value"
        ui={{ root: "custom-root", base: "custom-base", leading: "custom-leading" }}
      />,
    );
    expect(document.querySelector("[data-slot='root']")).toHaveClass("custom-root");
    expect(input()).toHaveClass("custom-base");
  });

  it("render 渲染指定根元素", () => {
    render(<XInputMenu items={items} valueKey="value" render={<div />} />);
    expect(document.querySelector("[data-slot='root']")?.tagName).toBe("DIV");
  });
});
