import { XDropdownMenu } from "@/components/kit";

export default function DropdownMenuSubmenuDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <XDropdownMenu
        items={[
          {
            key: "edit",
            label: "编辑",
            icon: "pen",
            children: [
              { key: "cut", label: "剪切", shortcut: "⌘ X" },
              { key: "copy", label: "复制", shortcut: "⌘ C" },
              { key: "paste", label: "粘贴", shortcut: "⌘ V" },
            ],
          },
          { key: "favorite", label: "收藏", icon: "star" },
          { type: "separator" },
          { type: "checkbox", key: "sync", label: "自动同步", checked: true },
          { type: "checkbox", key: "compress", label: "压缩图片", checked: false },
        ]}
      />
      <XDropdownMenu
        triggerLabel="查看状态"
        items={[
          { key: "loading", label: "同步中…", loading: true },
          { key: "done", label: "同步完成", loadingIcon: "circle-check" },
        ]}
      />
    </div>
  );
}
