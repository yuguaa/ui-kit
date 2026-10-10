import { Star } from "lucide-react";
import { XRadioGroup } from "@/components/kit/x-radio-group";

const simple = [{ value: "a", label: "选项 A" }];

export default function RadioGroupIndicatorDemo() {
  return (
    <div className="flex w-full flex-wrap items-start gap-8">
      <div className="flex flex-col gap-3">
        <span className="text-muted-foreground text-sm">indicator:start 圆点在左侧</span>
        <XRadioGroup options={simple} value="a" />
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-muted-foreground text-sm">indicator:end 圆点在右侧</span>
        <XRadioGroup options={simple} value="a" indicator="end" />
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-muted-foreground text-sm">indicator:hidden 圆点隐藏,图标显示在 label 上方</span>
        <XRadioGroup
          options={[{ value: "a", label: "选项 A", icon: Star, description: "辅助说明" }]}
          value="a"
          indicator="hidden"
        />
      </div>
    </div>
  );
}
