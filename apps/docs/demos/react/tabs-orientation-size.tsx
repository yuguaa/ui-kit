import { useState } from "react";
import { XTabs } from "@/components/kit";

const items = [
  { value: "a", label: "概览", content: "概览面板内容。" },
  { value: "b", label: "详情", content: "详情面板内容。" },
  { value: "c", label: "设置", content: "设置面板内容。" },
];

export default function TabsOrientationSize() {
  const [verticalKey, setVerticalKey] = useState<string | number>("a");
  const [xsKey, setXsKey] = useState<string | number>("a");
  const [lgKey, setLgKey] = useState<string | number>("a");

  return (
    <div className="flex w-full flex-col gap-8">
      <XTabs value={verticalKey} onValueChange={setVerticalKey} orientation="vertical" items={items} />
      <XTabs value={xsKey} onValueChange={setXsKey} size="xs" items={items} />
      <XTabs value={lgKey} onValueChange={setLgKey} size="lg" items={items} />
    </div>
  );
}
