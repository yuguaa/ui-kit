import { useState } from "react";
import { XSlider } from "@/components/kit/x-slider";

export default function SliderBasic() {
  const [value, setValue] = useState(50);
  const [range, setRange] = useState<number | number[]>([30, 70]);
  return (
    <div className="flex w-full max-w-sm flex-col gap-8">
      <XSlider value={value} onValueChange={setValue} size="sm" />
      <XSlider value={value} onValueChange={setValue} size="md" />
      <XSlider value={value} onValueChange={setValue} size="lg" />
      <XSlider value={range} onValueChange={setRange} ui={{ range: "bg-info" }} />
    </div>
  );
}
