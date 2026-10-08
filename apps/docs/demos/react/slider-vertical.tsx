import { useState } from "react";
import { XSlider } from "@/components/kit/x-slider";

export default function SliderVertical() {
  const [value, setValue] = useState(30);
  return (
    <div className="flex items-center gap-10">
      <XSlider
        value={[value]}
        tooltip
        orientation="vertical"
        onChange={setValue}
        className="h-40"
      />
      <XSlider
        value={[value]}
        orientation="vertical"
        onChange={setValue}
        className="h-40"
      />
      <div className="text-sm text-muted-foreground">当前值：{value}</div>
    </div>
  );
}
