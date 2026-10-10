import { useState } from "react";
import { XTabs } from "@/components/kit";

export default function TabsUiCustom() {
  const [tabKey, setTabKey] = useState<string | number>("members");

  return (
    <div className="flex w-full flex-col gap-3">
      <XTabs
        value={tabKey}
        onValueChange={setTabKey}
        color="success"
        variant="pill"
        items={[
          {
            value: "members",
            label: "成员",
            icon: "folder-open",
            badge: 8,
            slot: "detail",
          },
          {
            value: "settings",
            label: "设置",
            avatar: { text: "设" },
            slot: "detail",
          },
        ]}
        ui={{
          trigger: "gap-2",
          leadingIcon: "text-success",
          label: "font-semibold",
          content: "bg-elevated p-4",
        }}
        contentSlot={({ item }) => (
          <p className="text-sm">{item.label} 面板：通过 slot 字段分发的自定义内容。</p>
        )}
      />
    </div>
  );
}
