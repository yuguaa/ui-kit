import { useState } from "react";
import { XStepper } from "@/components/kit";

const items = [
  { value: "basic", title: "基础信息", description: "填写基础资料", content: "基础信息表单" },
  { value: "confirm", title: "确认提交", description: "核对并提交", content: "确认提交面板" },
];

export default function StepperUiCustom() {
  const [stepKey, setStepKey] = useState<string | number>("basic");

  return (
    <div className="flex w-full flex-col gap-4">
      <XStepper
        value={stepKey}
        onValueChange={setStepKey}
        items={items}
        ui={{
          trigger: "border-2 border-primary-3",
          title: "text-primary-7",
          description: "text-primary-5",
          content: "rounded-md bg-elevated p-4",
        }}
        indicator={({ item }) => <span>{item.value === "basic" ? "★" : "✓"}</span>}
        title={(item) => <span>步骤：{item.title}</span>}
        description={(item) => <span>说明：{item.description}</span>}
        content={(item) => <span>内容面板：{item.content}</span>}
      />
    </div>
  );
}
