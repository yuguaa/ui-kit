import { XContextMenu } from "@/components/kit";

const items = [
  { name: "复制", hint: "复制到剪贴板" },
  { name: "粘贴", hint: "从剪贴板粘贴" },
  { name: "剪切", hint: "移动到剪贴板" },
];

export default function ContextMenuSubmenuDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <XContextMenu
        labelKey="name"
        descriptionKey="hint"
        items={[
          ...items,
          { type: "separator" },
          {
            name: "格式转换",
            children: [{ name: "转为 Markdown" }, { name: "转为 PDF" }],
          },
          { type: "checkbox", name: "显示行号", checked: true },
          { type: "checkbox", name: "自动换行", checked: false },
        ]}
      >
        <span className="rounded-lg border border-dashed border-border px-6 py-3 text-sm text-muted-foreground">
          字段映射 + 子菜单
        </span>
      </XContextMenu>
      <XContextMenu
        externalIcon
        ui={{ content: "border border-primary-3", itemLeadingIcon: "text-info-6" }}
        items={[
          { key: "site", label: "访问官网", icon: "globe", target: "_blank" },
          { key: "docs", label: "查看文档", icon: "book", target: "_blank" },
        ]}
      >
        <span className="rounded-lg border border-dashed border-border px-6 py-3 text-sm text-muted-foreground">
          外链 + ui 插槽
        </span>
      </XContextMenu>
    </div>
  );
}
