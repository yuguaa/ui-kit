import { useState } from "react";
import { XTabs, type XTabItem } from "@/components/kit/x-tabs";

const lineItems: XTabItem[] = [
  { key: "a", label: "标签一", content: "标签一的内容。" },
  { key: "b", label: "标签二", content: "标签二的内容。" },
  { key: "c", label: "标签三", content: "标签三的内容。" },
];
const cardItems: XTabItem[] = [
  { key: "x", label: "卡片式", content: "卡片式标签内容。" },
  { key: "y", label: "卡片式二", content: "卡片式标签内容二。" },
];

export default function TabsBasicDemo() {
  const [lineKey, setLineKey] = useState("a");
  const [cardKey, setCardKey] = useState("x");

  return (
    <div className="flex w-full flex-col gap-6">
      <XTabs type="line" items={lineItems} activeKey={lineKey} onChange={setLineKey} />
      <XTabs type="card" items={cardItems} activeKey={cardKey} onChange={setCardKey} />
    </div>
  );
}
