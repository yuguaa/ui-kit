import { XPinInput } from "@/components/kit";

export default function PinInputUiCustom() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <span className="text-xs text-muted-foreground">root 间距与 base 圆角自定义</span>
        <XPinInput
          length={4}
          ui={{ root: "gap-2.5", base: "rounded-full", separator: "text-primary" }}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-xs text-muted-foreground">base 描边加粗</span>
        <XPinInput length={4} variant="outline" ui={{ base: "ring-2" }} />
      </div>
    </div>
  );
}
