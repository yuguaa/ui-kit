import { XContextMenu } from "@/components/kit";

export default function ContextMenuBasicDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <XContextMenu
        items={[
          { type: "label", label: "编辑操作" },
          { key: "copy", label: "复制", icon: "copy" },
          { key: "paste", label: "粘贴", icon: "clipboard-paste" },
          { key: "sep", type: "separator" },
          { key: "delete", label: "删除", icon: "trash", color: "error" },
        ]}
      >
        <span className="rounded-lg border border-dashed border-border px-6 py-3 text-sm text-muted-foreground">
          在此区域右键
        </span>
      </XContextMenu>
      <XContextMenu
        size="sm"
        items={[
          { key: "undo", label: "撤销", shortcut: "⌘ Z" },
          { key: "redo", label: "重做", shortcut: "⌘ ⇧ Z" },
        ]}
      >
        <span className="rounded-lg border border-dashed border-border px-6 py-3 text-sm text-muted-foreground">
          小尺寸菜单
        </span>
      </XContextMenu>
    </div>
  );
}
