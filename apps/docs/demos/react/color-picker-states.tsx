import { XColorPicker } from "@/components/kit";

export default function ColorPickerStates() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-3">
        <span className="text-sm text-muted-foreground">disabled 禁用选择</span>
        <XColorPicker disabled defaultValue="#1677ff" />
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-muted-foreground">throttle 拖拽节流（200ms）</span>
        <XColorPicker throttle={200} />
      </div>
    </div>
  );
}
