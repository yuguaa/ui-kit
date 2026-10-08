import { useState } from "react";
import { XInputMenu } from "@/components/kit/x-input-menu";

const items = [
  { label: "上海", value: "sh" },
  { label: "北京", value: "bj" },
  { label: "广州", value: "gz" },
];

export default function InputMenuCreate() {
  const [last, setLast] = useState("");
  const [created, setCreated] = useState<string[]>([]);

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <XInputMenu
          items={items}
          clearable
          createItem
          placeholder="搜索或输入新城市"
          onSelect={(item) => setLast(item.label)}
          onCreate={(value) => setCreated((prev) => [...prev, value])}
          className="w-56"
        />
      </div>
      <p className="text-sm text-muted-foreground">
        最近选择：{last || "—"}，已创建：{created.join("、") || "—"}
      </p>
    </div>
  );
}
