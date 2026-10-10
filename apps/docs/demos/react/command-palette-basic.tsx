import { useState } from "react";
import { XButton, XCommandPalette } from "@/components/kit";

const commands = [
  { name: "新建文档", hint: "创建空白文档", kbds: ["⌘", "N"] },
  { name: "添加用户", hint: "邀请团队成员", kbds: ["⌘", "U"] },
  { name: "打开设置", hint: "修改应用偏好", kbds: ["⌘", ","] },
];

export default function CommandPaletteBasicDemo() {
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
        labelKey="name"
        descriptionKey="hint"
        groups={[
          { id: "ops", label: "操作", items: commands },
          {
            id: "nav",
            label: "导航",
            items: [
              { name: "前往仪表盘", icon: "layout-dashboard", onSelect: () => setOpen(false) },
              { name: "前往设置", icon: "settings" },
            ],
          },
        ]}
      />
    </div>
  );
}
