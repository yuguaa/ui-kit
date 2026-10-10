import { useState } from "react";
import { XRadioGroup } from "@/components/kit/x-radio-group";

const options = [
  { value: "list", label: "列表" },
  { value: "card", label: "卡片" },
];

export default function RadioGroupVariantsDemo() {
  const [mode, setMode] = useState("list");

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-3">
        <span className="text-muted-foreground text-sm">variant:radio 普通圆形单选框</span>
        <XRadioGroup value={mode} onValueChange={setMode} options={options} />
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-muted-foreground text-sm">variant:button 按钮样式,buttonStyle 控制选中填充</span>
        <div className="flex flex-col items-start gap-4">
          <XRadioGroup value={mode} onValueChange={setMode} options={options} variant="button" />
          <XRadioGroup value={mode} onValueChange={setMode} options={options} variant="button" buttonStyle="solid" />
          <XRadioGroup
            value={mode}
            onValueChange={setMode}
            options={options}
            variant="button"
            buttonStyle="outline"
            orientation="vertical"
          />
        </div>
      </div>
    </div>
  );
}
