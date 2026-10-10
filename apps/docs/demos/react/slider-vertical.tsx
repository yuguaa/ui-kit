import { useState } from "react";
import { XSlider } from "@/components/kit/x-slider";

export default function SliderVertical() {
  const [value, setValue] = useState(30);
  return (
    <div className="flex items-center gap-10">
      <XSlider
        value={value}
        onValueChange={setValue}
        tooltip
        orientation="vertical"
        className="h-40"
      />
      <XSlider
        value={value}
        onValueChange={setValue}
        orientation="vertical"
        color="info"
        className="h-40"
      />
      <div className="text-sm text-muted-foreground">当前值：{value}</div>
    </div>
  );
}
