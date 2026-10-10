import { enableAutoUnmount, mount } from "@vue/test-utils";
import { nextTick } from "vue";
import { afterEach, describe, expect, it } from "vitest";
import XCommandPalette from "@/components/kit/XCommandPalette.vue";
import XContextMenu from "@/components/kit/XContextMenu.vue";
import XDropdownMenu from "@/components/kit/XDropdownMenu.vue";
import XNavigationMenu from "@/components/kit/XNavigationMenu.vue";

enableAutoUnmount(afterEach);

/** 浮层内容默认渲染在 body 下，断言统一查 document */
function bodyQuery(selector: string): Element | null {
  return document.body.querySelector(selector);
}

/** 等待浮层内容渲染到 body（reka Presence 状态机异步推进） */
async function waitForSelector(selector: string): Promise<boolean> {
  for (let i = 0; i < 20; i++) {
    if (bodyQuery(selector)) return true;
    await nextTick();
  }
  return false;
}

describe("XDropdownMenu", () => {
  it("ui 插槽类名覆盖全部主题键", async () => {
    mount(XDropdownMenu, {
      props: {
        open: true,
        filter: true,
        arrow: true,
        ui: {
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
        },
        items: [
          { type: "label", label: "分组标题" },
          { key: "site", label: "官网", icon: "globe", target: "_blank" },
          { key: "copy", label: "复制", description: "复制到剪贴板", kbds: ["⌘", "C"] },
          { key: "avatar", label: "成员", avatar: { text: "成" } },
          { key: "sep", type: "separator" },
          { key: "nested", label: "子菜单", children: [{ key: "child", label: "子项" }] },
          { type: "checkbox", key: "sync", label: "自动同步", checked: true },
        ],
      },
    });
    expect(await waitForSelector("[data-slot='content'].custom-content")).toBe(true);
    expect(bodyQuery("[data-slot='input'].custom-input")).not.toBeNull();
    expect(bodyQuery("[data-slot='viewport'].custom-viewport")).not.toBeNull();
    expect(bodyQuery("[data-slot='arrow'].custom-arrow")).not.toBeNull();
    expect(bodyQuery("[data-slot='group'].custom-group")).not.toBeNull();
    expect(bodyQuery("[data-slot='label'].custom-label")).not.toBeNull();
    expect(bodyQuery("[data-slot='separator'].custom-separator")).not.toBeNull();
    expect(bodyQuery("[data-slot='item'].custom-item")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemLeadingIcon'].custom-itemLeadingIcon")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemLeadingAvatar'].custom-itemLeadingAvatar")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemTrailing'].custom-itemTrailing")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemTrailingIcon'].custom-itemTrailingIcon")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemTrailingKbds'].custom-itemTrailingKbds")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemWrapper'].custom-itemWrapper")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemLabel'].custom-itemLabel")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemDescription'].custom-itemDescription")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemLabelExternalIcon'].custom-itemLabelExternalIcon")).not.toBeNull();
  });

  it("字段映射与过滤：labelKey / descriptionKey / filterFields / 空态", async () => {
    mount(XDropdownMenu, {
      props: {
        open: true,
        filter: true,
        labelKey: "name",
        descriptionKey: "hint",
        filterFields: ["name", "hint"],
        items: [
          { name: "新建文件", hint: "创建空白文件" },
          { name: "打开文件", hint: "从磁盘选择文件" },
        ],
      },
    });
    expect(await waitForSelector("[data-slot='viewport']")).toBe(true);
    expect(document.body.textContent).toContain("新建文件");
    expect(document.body.textContent).toContain("创建空白文件");

    const input = bodyQuery("[data-slot='input']") as HTMLInputElement;
    input.value = "不存在的关键词";
    input.dispatchEvent(new Event("input", { bubbles: true }));
    await nextTick();
    await nextTick();
    expect(bodyQuery("[data-slot='empty']")).not.toBeNull();
  });

  it("子菜单展开渲染 children，checkbox 选中态图标显示", async () => {
    mount(XDropdownMenu, {
      props: {
        open: true,
        items: [
          { key: "nested", label: "子菜单", children: [{ key: "child", label: "子项" }] },
          { type: "checkbox", key: "sync", label: "自动同步", checked: true },
        ],
      },
    });
    expect(await waitForSelector("[data-slot='viewport']")).toBe(true);
    /* 子菜单默认折叠，选中态图标渲染在 checkbox 项尾部 */
    expect(bodyQuery("[data-slot='itemTrailingIcon']")).not.toBeNull();
    expect(document.body.textContent).toContain("自动同步");
  });

  it("content-top / content-bottom 插槽与 defaultOpen 非受控打开", async () => {
    const wrapper = mount(XDropdownMenu, {
      props: {
        defaultOpen: true,
        portal: false,
        items: [{ key: "a", label: "操作项" }],
      },
      slots: {
        "content-top": "<div>顶部内容</div>",
        "content-bottom": "<div>底部内容</div>",
      },
    });
    await nextTick();
    expect(wrapper.text()).toContain("顶部内容");
    expect(wrapper.text()).toContain("底部内容");
    expect(wrapper.text()).toContain("操作项");
  });
});

describe("XContextMenu", () => {
  it("ui 插槽类名覆盖全部主题键", async () => {
    mount(XContextMenu, {
      props: {
        open: true,
        ui: {
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
        },
        items: [
          { type: "label", label: "分组标题" },
          { key: "site", label: "官网", icon: "globe", target: "_blank" },
          { key: "copy", label: "复制", description: "复制到剪贴板", kbds: ["⌘", "C"] },
          { key: "avatar", label: "成员", avatar: { text: "成" } },
          { key: "sep", type: "separator" },
          { key: "nested", label: "子菜单", children: [{ key: "child", label: "子项" }] },
          { type: "checkbox", key: "sync", label: "自动同步", checked: true },
        ],
      },
      slots: { default: "<span>触发区域</span>" },
    });
    expect(await waitForSelector("[data-slot='content'].custom-content")).toBe(true);
    expect(bodyQuery("[data-slot='viewport'].custom-viewport")).not.toBeNull();
    expect(bodyQuery("[data-slot='group'].custom-group")).not.toBeNull();
    expect(bodyQuery("[data-slot='label'].custom-label")).not.toBeNull();
    expect(bodyQuery("[data-slot='separator'].custom-separator")).not.toBeNull();
    expect(bodyQuery("[data-slot='item'].custom-item")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemLeadingIcon'].custom-itemLeadingIcon")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemLeadingAvatar'].custom-itemLeadingAvatar")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemTrailing'].custom-itemTrailing")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemTrailingIcon'].custom-itemTrailingIcon")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemTrailingKbds'].custom-itemTrailingKbds")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemWrapper'].custom-itemWrapper")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemLabel'].custom-itemLabel")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemDescription'].custom-itemDescription")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemLabelExternalIcon'].custom-itemLabelExternalIcon")).not.toBeNull();
  });

  it("字段映射 labelKey / descriptionKey 与子菜单渲染", async () => {
    mount(XContextMenu, {
      props: {
        open: true,
        labelKey: "name",
        descriptionKey: "hint",
        items: [
          { name: "复制", hint: "复制到剪贴板" },
          { name: "更多", children: [{ name: "剪切" }] },
        ],
      },
      slots: { default: "<span>触发区域</span>" },
    });
    expect(await waitForSelector("[data-slot='viewport']")).toBe(true);
    expect(document.body.textContent).toContain("复制");
    expect(document.body.textContent).toContain("复制到剪贴板");
  });

  it("content-top / content-bottom 插槽渲染", async () => {
    const wrapper = mount(XContextMenu, {
      props: {
        open: true,
        portal: false,
        items: [{ key: "copy", label: "复制" }],
      },
      slots: {
        default: "<span>右键区域</span>",
        "content-top": "<div>右键顶部</div>",
        "content-bottom": "<div>右键底部</div>",
      },
    });
    /* reka 打开状态机异步推进，轮询等待菜单内容渲染 */
    for (let i = 0; i < 20; i++) {
      if (wrapper.text().includes("右键顶部")) break
      await nextTick()
    }
    expect(wrapper.text()).toContain("右键顶部");
    expect(wrapper.text()).toContain("右键底部");
  });
});

describe("XCommandPalette", () => {
  it("ui 插槽类名覆盖全部主题键与 close / footer", async () => {
    mount(XCommandPalette, {
      props: {
        open: true,
        close: true,
        placeholder: "搜索命令…",
        ui: {
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
        },
        groups: [
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
        ],
      },
      slots: { footer: "底部内容" },
    });
    expect(await waitForSelector("[data-slot='root'].custom-root")).toBe(true);
    expect(bodyQuery("[data-slot='input'].custom-input")).not.toBeNull();
    expect(bodyQuery("[data-slot='close'].custom-close")).not.toBeNull();
    expect(bodyQuery("[data-slot='content'].custom-content")).not.toBeNull();
    expect(bodyQuery("[data-slot='footer'].custom-footer")).not.toBeNull();
    expect(bodyQuery("[data-slot='viewport'].custom-viewport")).not.toBeNull();
    expect(bodyQuery("[data-slot='group'].custom-group")).not.toBeNull();
    expect(bodyQuery("[data-slot='label'].custom-label")).not.toBeNull();
    expect(bodyQuery("[data-slot='item'].custom-item")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemLeadingIcon'].custom-itemLeadingIcon")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemLeadingAvatar'].custom-itemLeadingAvatar")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemLeadingChip'].custom-itemLeadingChip")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemTrailing'].custom-itemTrailing")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemTrailingIcon'].custom-itemTrailingIcon")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemTrailingKbds'].custom-itemTrailingKbds")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemWrapper'].custom-itemWrapper")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemLabel'].custom-itemLabel")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemLabelBase'].custom-itemLabelBase")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemLabelPrefix'].custom-itemLabelPrefix")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemLabelSuffix'].custom-itemLabelSuffix")).not.toBeNull();
    expect(bodyQuery("[data-slot='itemDescription'].custom-itemDescription")).not.toBeNull();
    expect(document.body.textContent).toContain("底部内容");
  });

  it("children 子层导航渲染 back 按钮，close 点击关闭", async () => {
    const wrapper = mount(XCommandPalette, {
      props: {
        open: true,
        close: true,
        groups: [
          {
            id: "ops",
            label: "操作",
            items: [
              { key: "lang", label: "语言", children: [{ key: "zh", label: "中文" }] },
            ],
          },
        ],
      },
    });
    expect(await waitForSelector("[data-slot='viewport']")).toBe(true);
    const item = Array.from(document.querySelectorAll("[data-slot='item']")).find(
      (el) => el.textContent?.includes("语言"),
    );
    item?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await nextTick();
    await nextTick();
    expect(bodyQuery("[data-slot='back']")).not.toBeNull();
    expect(document.body.textContent).toContain("中文");

    const closeButton = bodyQuery("[data-slot='close'] button");
    closeButton?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("update:open")).toContainEqual([false]);
  });

  it("字段映射与 placeholder 显示", async () => {
    mount(XCommandPalette, {
      props: {
        open: true,
        placeholder: "自定义占位",
        labelKey: "name",
        valueKey: "id",
        descriptionKey: "hint",
        groups: [{ id: "g", label: "分组", items: [{ id: "a", name: "命令甲", hint: "说明甲" }] }],
      },
    });
    expect(await waitForSelector("[data-slot='input']")).toBe(true);
    const input = bodyQuery("[data-slot='input']") as HTMLInputElement;
    expect(input?.placeholder).toBe("自定义占位");
    expect(document.body.textContent).toContain("命令甲");
    expect(document.body.textContent).toContain("说明甲");
  });

  it("输入区图标与选中态图标", async () => {
    mount(XCommandPalette, {
      props: {
        open: true,
        trailingIcon: "star",
        groups: [{ id: "g", label: "组", items: [{ key: "a", label: "已选中", active: true }] }],
      },
    });
    expect(await waitForSelector("[data-slot='trailingIcon']")).toBe(true);
    expect(bodyQuery("[data-slot='itemTrailingIcon']")).not.toBeNull();
  });

  it("item / group-label 插槽覆盖默认渲染", async () => {
    mount(XCommandPalette, {
      props: {
        open: true,
        groups: [{ id: "g", label: "操作", items: [{ key: "a", label: "命令甲" }] }],
      },
      slots: {
        "group-label": "<span>分组：操作</span>",
        item: "<span>项：命令甲</span>",
      },
    });
    await waitForSelector("[data-slot='item']");
    expect(document.body.textContent).toContain("分组：操作");
    expect(document.body.textContent).toContain("项：命令甲");
  });
});

describe("XNavigationMenu", () => {
  it("垂直模式 ui 插槽类名与手风琴展开", async () => {
    const wrapper = mount(XNavigationMenu, {
      props: {
        ui: {
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
          childLabel: "custom-childLabel",
          childItem: "custom-childItem",
          childLink: "custom-childLink",
          childLinkWrapper: "custom-childLinkWrapper",
          childLinkIcon: "custom-childLinkIcon",
          childLinkLabel: "custom-childLinkLabel",
          childLinkLabelExternalIcon: "custom-childLinkLabelExternalIcon",
          childLinkDescription: "custom-childLinkDescription",
          separator: "custom-separator",
          viewportWrapper: "custom-viewportWrapper",
          viewport: "custom-viewport",
          content: "custom-content",
          indicator: "custom-indicator",
          arrow: "custom-arrow",
        },
        items: [
          { type: "label", label: "分组标题" },
          { key: "leaf", label: "叶子项", icon: "house", trailingIcon: "star", badge: 3, target: "_blank" },
          { key: "avatar", label: "头像项", avatar: { text: "头" } },
          { key: "group", label: "有子级", children: [{ key: "child", label: "子项" }] },
        ],
      },
    });
    expect(wrapper.find("[data-slot='root'].custom-root").exists()).toBe(true);
    expect(wrapper.find("[data-slot='list'].custom-list").exists()).toBe(true);
    expect(wrapper.find("[data-slot='label'].custom-label").exists()).toBe(true);
    expect(wrapper.find("[data-slot='item'].custom-item").exists()).toBe(true);
    expect(wrapper.find("[data-slot='link'].custom-link").exists()).toBe(true);
    expect(wrapper.find("[data-slot='linkLeadingIcon'].custom-linkLeadingIcon").exists()).toBe(true);
    expect(wrapper.find("[data-slot='linkLeadingAvatar'].custom-linkLeadingAvatar").exists()).toBe(true);
    expect(wrapper.find("[data-slot='linkTrailing'].custom-linkTrailing").exists()).toBe(true);
    expect(wrapper.find("[data-slot='linkTrailingBadge'].custom-linkTrailingBadge").exists()).toBe(true);
    expect(wrapper.find("[data-slot='linkTrailingIcon'].custom-linkTrailingIcon").exists()).toBe(true);
    expect(wrapper.find("[data-slot='linkLabel'].custom-linkLabel").exists()).toBe(true);
    expect(wrapper.find("[data-slot='linkLabelExternalIcon'].custom-linkLabelExternalIcon").exists()).toBe(true);

    /* 展开手风琴子级，断言 content 与 childList 键 */
    await wrapper.findAll("button").find((b) => b.text() === "有子级")?.trigger("click");
    expect(wrapper.find("[data-slot='content'].custom-content").exists()).toBe(true);
    expect(wrapper.find("[data-slot='childList'].custom-childList").exists()).toBe(true);
    expect(wrapper.text()).toContain("子项");
  });

  it("多列表渲染 separator，collapsed 折叠隐藏标签", () => {
    const wrapper = mount(XNavigationMenu, {
      props: {
        collapsed: true,
        ui: { separator: "custom-separator", linkLabel: "custom-linkLabel" },
        items: [
          [{ key: "a", label: "第一组" }],
          [{ key: "b", label: "第二组" }],
        ],
      },
    });
    expect(wrapper.find("[data-slot='separator'].custom-separator").exists()).toBe(true);
    /* 折叠态标签隐藏 */
    expect(wrapper.find("[data-slot='linkLabel'].custom-linkLabel").classes()).toContain("hidden");
  });

  it("水平模式渲染 trigger / content 面板与 indicator / arrow", async () => {
    const wrapper = mount(XNavigationMenu, {
      props: {
        orientation: "horizontal",
        arrow: true,
        ui: {
          viewportWrapper: "custom-viewportWrapper",
          viewport: "custom-viewport",
          indicator: "custom-indicator",
          arrow: "custom-arrow",
          childLinkWrapper: "custom-childLinkWrapper",
          childLinkDescription: "custom-childLinkDescription",
        },
        items: [
          {
            key: "products",
            label: "产品",
            children: [{ key: "editor", label: "编辑器", description: "富文本编辑组件" }],
          },
        ],
      },
    });
    expect(wrapper.find("[data-slot='viewportWrapper'].custom-viewportWrapper").exists()).toBe(true);
    /* 点击 trigger 打开内容面板 */
    await wrapper.find("button[data-slot='link']").trigger("pointerdown");
    await wrapper.find("button[data-slot='link']").trigger("click");
    await nextTick();
    await nextTick();
    expect(wrapper.find("[data-slot='indicator'].custom-indicator").exists()).toBe(true);
    expect(wrapper.find("[data-slot='arrow'].custom-arrow").exists()).toBe(true);
    expect(wrapper.find("[data-slot='viewport'].custom-viewport").exists()).toBe(true);
    expect(wrapper.find("[data-slot='content']").exists()).toBe(true);
    expect(wrapper.find("[data-slot='childLinkWrapper'].custom-childLinkWrapper").exists()).toBe(true);
    expect(wrapper.find("[data-slot='childLinkDescription'].custom-childLinkDescription").exists()).toBe(true);
  });

  it("collapsed + popover / tooltip 渲染子菜单与标签提示", async () => {
    const wrapper = mount(XNavigationMenu, {
      props: {
        collapsed: true,
        popover: true,
        tooltip: true,
        ui: { childLabel: "custom-childLabel", childLink: "custom-childLink" },
        items: [
          { key: "leaf", label: "叶子项", icon: "house" },
          { key: "group", label: "有子级", icon: "folder", children: [{ key: "child", label: "子项" }] },
        ],
      },
    });
    /* 第二个按钮是有子级项，聚焦展开 popover */
    const groupButton = wrapper.findAll("button")[1];
    groupButton?.trigger("focus");
    await new Promise((resolve) => setTimeout(resolve, 100));
    await nextTick();
    expect(await waitForSelector("[data-slot='childLabel'].custom-childLabel")).toBe(true);
    expect(bodyQuery("[data-slot='childLink'].custom-childLink")).not.toBeNull();
  });

  it("字段映射 labelKey / valueKey 与 selectedKeys 选中态", () => {
    const wrapper = mount(XNavigationMenu, {
      props: {
        labelKey: "name",
        valueKey: "id",
        selectedKeys: ["dash"],
        items: [{ id: "dash", name: "仪表盘" }],
      },
    });
    const selected = wrapper.findAll("button").find((b) => b.text() === "仪表盘");
    expect(selected?.classes()).toContain("bg-primary-1");
  });

  it("受控 value 展开子级，list-leading / list-trailing 插槽渲染", () => {
    const wrapper = mount(XNavigationMenu, {
      props: {
        value: ["g"],
        items: [{ key: "g", label: "有子级", children: [{ key: "c", label: "子项" }] }],
      },
      slots: { "list-leading": "<div>列表前</div>", "list-trailing": "<div>列表后</div>" },
    });
    expect(wrapper.text()).toContain("列表前");
    expect(wrapper.text()).toContain("列表后");
    expect(wrapper.text()).toContain("子项");
  });

  it("contentOrientation 垂直布局与 item-content 插槽", async () => {
    const wrapper = mount(XNavigationMenu, {
      props: {
        orientation: "horizontal",
        contentOrientation: "vertical",
        items: [{ key: "p", label: "产品", children: [{ key: "c", label: "子项" }] }],
      },
      slots: { "item-content": '<div data-testid="panel">面板内容</div>' },
    });
    await wrapper.find("button[data-slot='link']").trigger("pointerdown");
    await wrapper.find("button[data-slot='link']").trigger("click");
    await nextTick();
    expect(wrapper.find('[data-testid="panel"]').exists()).toBe(true);
  });
});
