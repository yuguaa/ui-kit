import { useState } from "react";
import { XSlider } from "@/components/kit/x-slider";

export default function SliderColors() {
  const [value, setValue] = useState(60);
  return (
    <div className="flex w-full max-w-sm flex-col gap-8">
      <XSlider value={value} onValueChange={setValue} color="primary" />
      <XSlider value={value} onValueChange={setValue} color="success" />
      <XSlider value={value} onValueChange={setValue} color="error" />
      <XSlider value={value} onValueChange={setValue} disabled />
    </div>
  );
}
