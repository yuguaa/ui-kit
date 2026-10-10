import { useState } from "react";
import { XButton, XCommandPalette } from "@/components/kit";

export default function CommandPaletteUiDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <XButton variant="soft" color="info" onClick={() => setOpen(true)}>
        打开命令面板
      </XButton>
      <XCommandPalette
        open={open}
        onOpenChange={setOpen}
        close
        input={{ placeholder: "输入关键词过滤…" }}
        ui={{
          root: "rounded-lg",
          input: "h-10",
          item: "rounded-lg",
          itemLeadingIcon: "text-info-6",
          group: "p-0.5",
        }}
        groups={[
          {
            id: "files",
            label: "最近文件",
            items: [
              { key: "readme", label: "README.md", description: "文档根目录", icon: "file-text" },
              { key: "design", label: "设计规范.fig", description: "设计资源", icon: "figma" },
              { key: "roadmap", label: "路线图.md", description: "项目规划", icon: "file-text" },
            ],
          },
        ]}
      />
    </div>
  );
}
