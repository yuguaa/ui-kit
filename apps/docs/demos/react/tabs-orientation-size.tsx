import { useState } from "react";
import { XTabs, type XTabItem } from "@/components/kit/x-tabs";

const items: XTabItem[] = [
  { key: "a", label: "概览", content: "概览面板内容。" },
  { key: "b", label: "详情", content: "详情面板内容。" },
  { key: "c", label: "设置", content: "设置面板内容。" },
];

export default function TabsOrientationSizeDemo() {
  const [verticalKey, setVerticalKey] = useState("a");
  const [smKey, setSmKey] = useState("a");
  const [mdKey, setMdKey] = useState("a");
  const [lgKey, setLgKey] = useState("a");

  return (
    <div className="flex w-full flex-col gap-8">
      <XTabs
        orientation="vertical"
        items={items}
        activeKey={verticalKey}
        onChange={setVerticalKey}
      />
      <XTabs size="sm" items={items} activeKey={smKey} onChange={setSmKey} />
      <XTabs size="md" items={items} activeKey={mdKey} onChange={setMdKey} />
      <XTabs
        size="lg"
        type="card"
        items={items}
        activeKey={lgKey}
        onChange={setLgKey}
      />
    </div>
  );
}
