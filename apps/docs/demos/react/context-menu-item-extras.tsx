import { XContextMenu } from "@/components/kit";

export default function ContextMenuItemExtrasDemo() {
  return (
    <XContextMenu
      items={[
        { key: "copy", label: "复制", description: "复制到剪贴板", shortcut: "⌘ C" },
        { key: "paste", label: "粘贴", description: "从剪贴板粘贴", shortcut: "⌘ V" },
        { key: "sep", separator: true },
        { key: "delete", label: "删除", shortcut: "⌘ ⌫" },
      ]}
    >
      <span className="rounded-lg border border-dashed border-border px-6 py-3 text-sm text-muted-foreground">
        在此区域右键
      </span>
    </XContextMenu>
  );
}
