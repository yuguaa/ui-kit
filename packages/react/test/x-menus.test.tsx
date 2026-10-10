import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { describe, expect, it, vi } from "vitest";
import { XCommandPalette, type XCommandPaletteApi } from "@/components/kit/x-command-palette";
import { XContextMenu } from "@/components/kit/x-context-menu";
import { XDropdownMenu } from "@/components/kit/x-dropdown-menu";
import { XNavigationMenu } from "@/components/kit/x-navigation-menu";

/** 断言浮层元素存在且带自定义类名 */
function expectSlot(slot: string, custom: string) {
  expect(document.querySelector(`[data-slot='${slot}'].${custom}`)).not.toBeNull();
}

describe("XDropdownMenu", () => {
  it("ui 插槽类名覆盖全部主题键", async () => {
    render(
      <XDropdownMenu
        open
        filter
        arrow
        ui={{
          content: "custom-content",
          input: "custom-input",
          empty: "custom-empty",
          viewport: "custom-viewport",
          arrow: "custom-arrow",
          group: "custom-group",
          label: "custom-label",
          separator: "custom-separator",
          item: "custom-item",
          itemLeadingIcon: "custom-itemLeadingIcon",
          itemLeadingAvatar: "custom-itemLeadingAvatar",
          itemLeadingAvatarSize: "lg",
          itemTrailing: "custom-itemTrailing",
          itemTrailingIcon: "custom-itemTrailingIcon",
          itemTrailingKbds: "custom-itemTrailingKbds",
          itemTrailingKbdsSize: "lg",
          itemWrapper: "custom-itemWrapper",
          itemLabel: "custom-itemLabel",
          itemDescription: "custom-itemDescription",
          itemLabelExternalIcon: "custom-itemLabelExternalIcon",
        }}
        items={[
          { type: "label", label: "分组标题" },
          { key: "site", label: "官网", icon: "globe", target: "_blank" },
          { key: "copy", label: "复制", description: "复制到剪贴板", kbds: ["⌘", "C"] },
          { key: "avatar", label: "成员", avatar: { text: "成" } },
          { key: "sep", type: "separator" },
          { key: "nested", label: "子菜单", children: [{ key: "child", label: "子项" }] },
          { type: "checkbox", key: "sync", label: "自动同步", checked: true },
        ]}
      />,
    );
    await screen.findByText("复制");
    expectSlot("content", "custom-content");
    expectSlot("input", "custom-input");
    expectSlot("viewport", "custom-viewport");
    expectSlot("arrow", "custom-arrow");
    expectSlot("group", "custom-group");
    expectSlot("label", "custom-label");
    expectSlot("separator", "custom-separator");
    expectSlot("item", "custom-item");
    expectSlot("itemLeadingIcon", "custom-itemLeadingIcon");
    expectSlot("itemLeadingAvatar", "custom-itemLeadingAvatar");
    expectSlot("itemTrailing", "custom-itemTrailing");
    expectSlot("itemTrailingIcon", "custom-itemTrailingIcon");
    expectSlot("itemTrailingKbds", "custom-itemTrailingKbds");
    expectSlot("itemWrapper", "custom-itemWrapper");
    expectSlot("itemLabel", "custom-itemLabel");
    expectSlot("itemDescription", "custom-itemDescription");
    expectSlot("itemLabelExternalIcon", "custom-itemLabelExternalIcon");
  });

  it("字段映射与过滤：labelKey / descriptionKey / filterFields / 空态", async () => {
    render(
      <XDropdownMenu
        open
        filter
        labelKey="name"
        descriptionKey="hint"
        filterFields={["name", "hint"]}
        items={[
          { name: "新建文件", hint: "创建空白文件" },
          { name: "打开文件", hint: "从磁盘选择文件" },
        ]}
      />,
    );
    await screen.findByText("新建文件");
    expect(screen.getByText("创建空白文件")).toBeInTheDocument();
    fireEvent.change(document.querySelector("[data-slot='input']") as HTMLInputElement, {
      target: { value: "不存在的关键词" },
    });
    expect(await screen.findByText(/未找到/)).toBeInTheDocument();
  });

  it("子菜单与 checkbox 选中态图标", async () => {
    render(
      <XDropdownMenu
        open
        items={[
          { key: "nested", label: "子菜单", children: [{ key: "child", label: "子项" }] },
          { type: "checkbox", key: "sync", label: "自动同步", checked: true },
        ]}
      />,
    );
    await screen.findByText("自动同步");
    /* checkbox 选中态在尾部渲染图标 */
    expect(document.querySelectorAll("[data-slot='itemTrailingIcon']").length).toBeGreaterThan(0);
  });
  it("content-top / content-bottom 插槽与 defaultOpen 非受控打开", async () => {
    render(
      <XDropdownMenu
        defaultOpen
        portal={false}
        contentTopSlot={() => <div>顶部内容</div>}
        contentBottomSlot={({ sub }) => <div>底部内容 {String(sub)}</div>}
        items={[{ key: "a", label: "操作项" }]}
      />,
    );
    expect(await screen.findByText("顶部内容")).toBeInTheDocument();
    expect(screen.getByText("底部内容 false")).toBeInTheDocument();
    expect(screen.getByText("操作项")).toBeInTheDocument();
  });
});

describe("XContextMenu", () => {
  it("ui 插槽类名覆盖全部主题键", async () => {
    render(
      <XContextMenu
        open
        ui={{
          content: "custom-content",
          viewport: "custom-viewport",
          group: "custom-group",
          label: "custom-label",
          separator: "custom-separator",
          item: "custom-item",
          itemLeadingIcon: "custom-itemLeadingIcon",
          itemLeadingAvatar: "custom-itemLeadingAvatar",
          itemLeadingAvatarSize: "lg",
          itemTrailing: "custom-itemTrailing",
          itemTrailingIcon: "custom-itemTrailingIcon",
          itemTrailingKbds: "custom-itemTrailingKbds",
          itemTrailingKbdsSize: "lg",
          itemWrapper: "custom-itemWrapper",
          itemLabel: "custom-itemLabel",
          itemDescription: "custom-itemDescription",
          itemLabelExternalIcon: "custom-itemLabelExternalIcon",
        }}
        items={[
          { type: "label", label: "分组标题" },
          { key: "site", label: "官网", icon: "globe", target: "_blank" },
          { key: "copy", label: "复制", description: "复制到剪贴板", kbds: ["⌘", "C"] },
          { key: "avatar", label: "成员", avatar: { text: "成" } },
          { key: "sep", type: "separator" },
          { key: "nested", label: "子菜单", children: [{ key: "child", label: "子项" }] },
          { type: "checkbox", key: "sync", label: "自动同步", checked: true },
        ]}
      >
        <span>右键区域</span>
      </XContextMenu>,
    );
    await screen.findByText("复制");
    expectSlot("content", "custom-content");
    expectSlot("viewport", "custom-viewport");
    expectSlot("group", "custom-group");
    expectSlot("label", "custom-label");
    expectSlot("separator", "custom-separator");
    expectSlot("item", "custom-item");
    expectSlot("itemLeadingIcon", "custom-itemLeadingIcon");
    expectSlot("itemLeadingAvatar", "custom-itemLeadingAvatar");
    expectSlot("itemTrailing", "custom-itemTrailing");
    expectSlot("itemTrailingIcon", "custom-itemTrailingIcon");
    expectSlot("itemTrailingKbds", "custom-itemTrailingKbds");
    expectSlot("itemWrapper", "custom-itemWrapper");
    expectSlot("itemLabel", "custom-itemLabel");
    expectSlot("itemDescription", "custom-itemDescription");
    expectSlot("itemLabelExternalIcon", "custom-itemLabelExternalIcon");
  });

  it("字段映射 labelKey / descriptionKey 与子菜单渲染", async () => {
    render(
      <XContextMenu
        open
        labelKey="name"
        descriptionKey="hint"
        items={[
          { name: "复制", hint: "复制到剪贴板" },
          { name: "更多", children: [{ name: "剪切" }] },
        ]}
      >
        <span>右键区域</span>
      </XContextMenu>,
    );
    await screen.findByText("复制");
    expect(screen.getByText("复制到剪贴板")).toBeInTheDocument();
  });

  it("content-top / content-bottom 插槽渲染", async () => {
    render(
      <XContextMenu
        open
        portal={false}
        contentTopSlot={() => <div>右键顶部</div>}
        contentBottomSlot={() => <div>右键底部</div>}
        items={[{ key: "copy", label: "复制" }]}
      >
        <span>右键区域</span>
      </XContextMenu>,
    );
    expect(await screen.findByText("右键顶部")).toBeInTheDocument();
    expect(screen.getByText("右键底部")).toBeInTheDocument();
  });
});

describe("XCommandPalette", () => {
  it("ui 插槽类名覆盖全部主题键与 close / footer", async () => {
    render(
      <XCommandPalette
        open
        close
        placeholder="搜索命令…"
        footer={<div>底部内容</div>}
        ui={{
          root: "custom-root",
          input: "custom-input",
          close: "custom-close",
          back: "custom-back",
          content: "custom-content",
          footer: "custom-footer",
          viewport: "custom-viewport",
          group: "custom-group",
          empty: "custom-empty",
          label: "custom-label",
          item: "custom-item",
          itemLeadingIcon: "custom-itemLeadingIcon",
          itemLeadingAvatar: "custom-itemLeadingAvatar",
          itemLeadingAvatarSize: "lg",
          itemLeadingChip: "custom-itemLeadingChip",
          itemLeadingChipSize: "lg",
          itemTrailing: "custom-itemTrailing",
          itemTrailingIcon: "custom-itemTrailingIcon",
          itemTrailingHighlightedIcon: "custom-itemTrailingHighlightedIcon",
          itemTrailingKbds: "custom-itemTrailingKbds",
          itemTrailingKbdsSize: "lg",
          itemWrapper: "custom-itemWrapper",
          itemLabel: "custom-itemLabel",
          itemLabelBase: "custom-itemLabelBase",
          itemLabelPrefix: "custom-itemLabelPrefix",
          itemLabelSuffix: "custom-itemLabelSuffix",
          itemDescription: "custom-itemDescription",
        }}
        groups={[
          {
            id: "ops",
            label: "操作",
            highlightedIcon: "corner-down-right",
            items: [
              { key: "plain", label: "普通命令", prefix: "P", suffix: "S", description: "说明" },
              { key: "nested", label: "子层", icon: "folder", children: [{ key: "child", label: "子命令" }] },
              { key: "kbd", label: "快捷键", kbds: ["⌘", "K"] },
              { key: "chip", label: "色块", icon: "palette", chip: true },
              { key: "avatar", label: "头像", avatar: { text: "头" } },
            ],
          },
        ]}
      />,
    );
    await screen.findByText("普通命令");
    expectSlot("root", "custom-root");
    expectSlot("input", "custom-input");
    expectSlot("close", "custom-close");
    expectSlot("content", "custom-content");
    expectSlot("footer", "custom-footer");
    expectSlot("viewport", "custom-viewport");
    expectSlot("group", "custom-group");
    expectSlot("label", "custom-label");
    expectSlot("item", "custom-item");
    expectSlot("itemLeadingIcon", "custom-itemLeadingIcon");
    expectSlot("itemLeadingAvatar", "custom-itemLeadingAvatar");
    expectSlot("itemLeadingChip", "custom-itemLeadingChip");
    expectSlot("itemTrailing", "custom-itemTrailing");
    expectSlot("itemTrailingIcon", "custom-itemTrailingIcon");
    expectSlot("itemTrailingKbds", "custom-itemTrailingKbds");
    expectSlot("itemWrapper", "custom-itemWrapper");
    expectSlot("itemLabel", "custom-itemLabel");
    expectSlot("itemLabelBase", "custom-itemLabelBase");
    expectSlot("itemLabelPrefix", "custom-itemLabelPrefix");
    expectSlot("itemLabelSuffix", "custom-itemLabelSuffix");
    expectSlot("itemDescription", "custom-itemDescription");
    expect(screen.getByText("底部内容")).toBeInTheDocument();
  });

  it("children 子层导航渲染 back 按钮，close 点击关闭", async () => {
    const onOpenChange = vi.fn();
    render(
      <XCommandPalette
        open
        close
        onOpenChange={onOpenChange}
        groups={[
          {
            id: "ops",
            label: "操作",
            items: [{ key: "lang", label: "语言", children: [{ key: "zh", label: "中文" }] }],
          },
        ]}
      />,
    );
    await screen.findByText("语言");
    await userEvent.click(screen.getByText("语言"));
    expect(await screen.findByText("中文")).toBeInTheDocument();
    expect(document.querySelector("[data-slot='back']")).not.toBeNull();
    await userEvent.click(screen.getByRole("button", { name: "关闭" }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("字段映射与 placeholder 显示", async () => {
    render(
      <XCommandPalette
        open
        placeholder="自定义占位"
        labelKey="name"
        valueKey="id"
        descriptionKey="hint"
        groups={[{ id: "g", label: "分组", items: [{ id: "a", name: "命令甲", hint: "说明甲" }] }]}
      />,
    );
    await screen.findByText("命令甲");
    expect((document.querySelector("[data-slot='input']") as HTMLInputElement).placeholder).toBe("自定义占位");
    expect(screen.getByText("说明甲")).toBeInTheDocument();
  });

  it("输入区图标与选中态图标", async () => {
    render(
      <XCommandPalette
        open
        trailingIcon="star"
        groups={[{ id: "g", label: "组", items: [{ key: "a", label: "已选中", active: true }] }]}
      />,
    );
    await screen.findByText("已选中");
    expect(document.querySelector("[data-slot='trailingIcon']")).not.toBeNull();
    expect(document.querySelectorAll("[data-slot='itemTrailingIcon']").length).toBeGreaterThan(0);
  });

  it("itemSlot / groupLabelSlot 覆盖默认渲染", async () => {
    render(
      <XCommandPalette
        open
        groupLabelSlot={({ label }) => <span>分组：{label}</span>}
        itemSlot={({ item }) => <span>项：{String(item.label)}</span>}
        groups={[{ id: "g", label: "操作", items: [{ key: "a", label: "命令甲" }] }]}
      />,
    );
    expect(await screen.findByText("分组：操作")).toBeInTheDocument();
    expect(screen.getByText("项：命令甲")).toBeInTheDocument();
  });
});

describe("XNavigationMenu", () => {
  it("垂直模式 ui 插槽类名与手风琴展开", async () => {
    render(
      <XNavigationMenu
        ui={{
          root: "custom-root",
          list: "custom-list",
          label: "custom-label",
          item: "custom-item",
          link: "custom-link",
          linkLeadingIcon: "custom-linkLeadingIcon",
          linkLeadingAvatar: "custom-linkLeadingAvatar",
          linkLeadingAvatarSize: "lg",
          linkLeadingChipSize: "lg",
          linkTrailing: "custom-linkTrailing",
          linkTrailingBadge: "custom-linkTrailingBadge",
          linkTrailingBadgeSize: "lg",
          linkTrailingIcon: "custom-linkTrailingIcon",
          linkLabel: "custom-linkLabel",
          linkLabelExternalIcon: "custom-linkLabelExternalIcon",
          childList: "custom-childList",
        }}
        items={[
          { type: "label", label: "分组标题" },
          { key: "leaf", label: "叶子项", icon: "house", trailingIcon: "star", badge: 3, target: "_blank" },
          { key: "avatar", label: "头像项", avatar: { text: "头" } },
          { key: "group", label: "有子级", children: [{ key: "child", label: "子项" }] },
        ]}
      />,
    );
    expectSlot("root", "custom-root");
    expectSlot("list", "custom-list");
    expectSlot("label", "custom-label");
    expectSlot("item", "custom-item");
    expectSlot("link", "custom-link");
    expectSlot("linkLeadingIcon", "custom-linkLeadingIcon");
    expectSlot("linkLeadingAvatar", "custom-linkLeadingAvatar");
    expectSlot("linkTrailing", "custom-linkTrailing");
    expectSlot("linkTrailingBadge", "custom-linkTrailingBadge");
    expectSlot("linkTrailingIcon", "custom-linkTrailingIcon");
    expectSlot("linkLabel", "custom-linkLabel");
    expectSlot("linkLabelExternalIcon", "custom-linkLabelExternalIcon");

    /* 展开手风琴子级，断言 childList 键 */
    await userEvent.click(screen.getByRole("button", { name: /有子级/ }));
    expectSlot("childList", "custom-childList");
    expect(screen.getByText("子项")).toBeInTheDocument();
  });

  it("多列表渲染 separator，collapsed 折叠隐藏标签", () => {
    render(
      <XNavigationMenu
        collapsed
        ui={{ separator: "custom-separator", linkLabel: "custom-linkLabel" }}
        items={[
          [{ key: "a", label: "第一组" }],
          [{ key: "b", label: "第二组" }],
        ]}
      />,
    );
    expectSlot("separator", "custom-separator");
    expect(document.querySelector("[data-slot='linkLabel'].custom-linkLabel")).toHaveClass("hidden");
  });

  it("水平模式渲染 trigger / content 面板与 indicator / arrow", async () => {
    render(
      <XNavigationMenu
        orientation="horizontal"
        arrow
        ui={{
          viewportWrapper: "custom-viewportWrapper",
          viewport: "custom-viewport",
          indicator: "custom-indicator",
          arrow: "custom-arrow",
          childLinkWrapper: "custom-childLinkWrapper",
          childLinkDescription: "custom-childLinkDescription",
        }}
        items={[
          {
            key: "products",
            label: "产品",
            children: [{ key: "editor", label: "编辑器", description: "富文本编辑组件" }],
          },
        ]}
      />,
    );
    /* 点击 trigger 打开内容面板后再断言全部键 */
    await userEvent.click(screen.getByRole("button", { name: /产品/ }));
    expect(await screen.findByText("编辑器")).toBeInTheDocument();
    expectSlot("viewportWrapper", "custom-viewportWrapper");
    expectSlot("indicator", "custom-indicator");
    expectSlot("arrow", "custom-arrow");
    expectSlot("viewport", "custom-viewport");
    expectSlot("childLinkWrapper", "custom-childLinkWrapper");
    expectSlot("childLinkDescription", "custom-childLinkDescription");
  });

  it("collapsed + popover / tooltip 渲染子菜单与标签提示", async () => {
    render(
      <XNavigationMenu
        collapsed
        popover
        tooltip
        ui={{ childLabel: "custom-childLabel", childLink: "custom-childLink" }}
        items={[
          { key: "leaf", label: "叶子项", icon: "house" },
          { key: "group", label: "有子级", icon: "folder", children: [{ key: "child", label: "子项" }] },
        ]}
      />,
    );
    /* 第二个按钮是有子级项，悬停展开 popover */
    const buttons = screen.getAllByRole("button");
    await userEvent.hover(buttons[1] as HTMLElement);
    expect(await screen.findByText("子项")).toBeInTheDocument();
    expectSlot("childLabel", "custom-childLabel");
    expectSlot("childLink", "custom-childLink");
  });

  it("字段映射 labelKey / valueKey 与 selectedKeys 选中态", () => {
    render(
      <XNavigationMenu
        labelKey="name"
        valueKey="id"
        selectedKeys={["dash"]}
        items={[{ id: "dash", name: "仪表盘" }]}
      />,
    );
    expect(screen.getByRole("button", { name: "仪表盘" })).toHaveClass("bg-primary/10");
  });

  it("受控 value 展开子级，listLeading / listTrailing 插槽渲染", () => {
    render(
      <XNavigationMenu
        value={["g"]}
        listLeadingSlot={() => <div>列表前</div>}
        listTrailingSlot={() => <div>列表后</div>}
        items={[{ key: "g", label: "有子级", children: [{ key: "c", label: "子项" }] }]}
      />,
    );
    expect(screen.getByText("列表前")).toBeInTheDocument();
    expect(screen.getByText("列表后")).toBeInTheDocument();
    expect(screen.getByText("子项")).toBeInTheDocument();
  });

  it("type single 单开，contentOrientation 与 itemContent 插槽", async () => {
    render(
      <XNavigationMenu
        orientation="horizontal"
        contentOrientation="vertical"
        itemContentSlot={({ item }) => <div>面板：{String(item.label)}</div>}
        items={[{ key: "p", label: "产品", children: [{ key: "c", label: "子项" }] }]}
      />,
    );
    await userEvent.click(screen.getByRole("button", { name: /产品/ }));
    expect(await screen.findByText("面板：产品")).toBeInTheDocument();
  });
});
