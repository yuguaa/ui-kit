import { useState } from "react";
import { XRadioGroup } from "@/components/kit/x-radio-group";

const plans = [
  { value: "basic", label: "基础版", description: "个人使用" },
  { value: "standard", label: "标准版", description: "小团队推荐" },
  { value: "pro", label: "专业版", description: "企业级功能" },
];

export default function RadioGroupBasicDemo() {
  const [plan, setPlan] = useState("standard");

  return (
    <div className="flex w-full flex-col gap-6">
      <XRadioGroup value={plan} onValueChange={setPlan} options={plans} legend="订阅方案" />
      <XRadioGroup value={plan} onValueChange={setPlan} options={plans} legend="横向排列" orientation="horizontal" />
    </div>
  );
}
