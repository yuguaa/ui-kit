import { useState } from "react";
import { XColorPicker, type XColorPickerFormat } from "@/components/kit";

const formats: XColorPickerFormat[] = ["hex", "rgb", "hsl", "cmyk", "lab"];

export default function ColorPickerFormats() {
  const [color, setColor] = useState("#00C16A");
  const [active, setActive] = useState<XColorPickerFormat>("hex");

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        {formats.map((format) => (
          <button
            key={format}
            type="button"
            className={`rounded-md px-3 py-1 text-sm outline-none transition-colors ${
              active === format ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
            }`}
            onClick={() => setActive(format)}
          >
            {format}
          </button>
        ))}
      </div>
      <XColorPicker value={color} format={active} onChange={setColor} />
      <p className="text-sm text-muted-foreground">
        输出：<code className="rounded bg-muted px-1.5 py-0.5">{color}</code>
      </p>
    </div>
  );
}
