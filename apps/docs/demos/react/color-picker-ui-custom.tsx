import { XColorPicker } from "@/components/kit";

export default function ColorPickerUiCustom() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-3">
        <span className="text-sm text-muted-foreground">picker 间距与 selector 圆角自定义</span>
        <XColorPicker
          ui={{
            picker: "gap-8",
            selector: "rounded-xl",
            selectorBackground: "rounded-xl",
            selectorThumb: "ring-4 ring-white size-5",
          }}
        />
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-muted-foreground">track 与 trackThumb 加宽</span>
        <XColorPicker ui={{ track: "w-[12px]", trackThumb: "size-5" }} />
      </div>
    </div>
  );
}
