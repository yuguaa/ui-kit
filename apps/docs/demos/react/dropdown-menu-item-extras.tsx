import { XDropdownMenu } from "@/components/kit";

export default function DropdownMenuItemExtrasDemo() {
  return (
    <XDropdownMenu
      items={[
        { key: "new", label: "新建文件", description: "创建空白文件", shortcut: "⌘ N" },
        { key: "open", label: "打开文件", description: "从磁盘选择文件", shortcut: "⌘ O" },
        { key: "sep", separator: true },
        { key: "delete", label: "删除文件", description: "移动到废纸篓", shortcut: "⌘ ⌫" },
      ]}
    />
  );
}
