import { XColorPicker } from "@/components/kit";

const sizes = ["xs", "sm", "md", "lg", "xl"] as const;

export default function ColorPickerSizes() {
  return (
    <div className="flex w-full flex-wrap items-end gap-6">
      {sizes.map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <XColorPicker size={size} />
          <span className="text-xs text-muted-foreground">{size}</span>
        </div>
      ))}
    </div>
  );
}
