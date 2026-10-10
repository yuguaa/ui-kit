import { useState } from "react";
import { XSlider } from "@/components/kit/x-slider";

export default function SliderTooltip() {
  const [value, setValue] = useState(50);
  return (
    <div className="flex w-full max-w-sm flex-col gap-8">
      <XSlider value={value} onValueChange={setValue} tooltip className="w-full" />
      <XSlider value={value} onValueChange={setValue} tooltip={{ arrow: true }} color="success" className="w-full" />
      <div className="text-sm text-muted-foreground">当前值：{value}</div>
    </div>
  );
}
