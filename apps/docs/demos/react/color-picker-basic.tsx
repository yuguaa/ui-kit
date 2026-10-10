import { useState } from "react";
import { XColorPicker } from "@/components/kit";

export default function ColorPickerBasic() {
  const [color, setColor] = useState("#1677ff");

  return (
    <div className="flex w-full flex-col gap-4">
      <XColorPicker value={color} onChange={setColor} />
      <p className="text-sm text-muted-foreground">
        当前值：<code className="rounded bg-muted px-1.5 py-0.5">{color}</code>
      </p>
    </div>
  );
}
