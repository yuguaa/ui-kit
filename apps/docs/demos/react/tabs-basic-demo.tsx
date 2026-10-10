import { useState } from "react";
import { XTabs } from "@/components/kit";

export default function TabsBasicDemo() {
  const [pillKey, setPillKey] = useState<string | number>("a");
  const [linkKey, setLinkKey] = useState<string | number>("x");

  return (
    <div className="flex w-full flex-col gap-6">
      <XTabs
        value={pillKey}
        onValueChange={setPillKey}
        variant="pill"
        items={[
          { value: "a", label: "标签一", content: "pill 标签一的内容。" },
          { value: "b", label: "标签二", content: "pill 标签二的内容。" },
          { value: "c", label: "标签三", content: "pill 标签三的内容。" },
        ]}
      />
      <XTabs
        value={linkKey}
        onValueChange={setLinkKey}
        variant="link"
        items={[
          { value: "x", label: "下划线式", content: "link 标签内容一。" },
          { value: "y", label: "下划线式二", content: "link 标签内容二。" },
        ]}
      />
    </div>
  );
}
