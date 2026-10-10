import { XCheckbox } from "@/components/kit/x-checkbox";

export default function CheckboxUiCustomDemo() {
  return (
    <div className="flex w-full flex-col gap-3">
      <span className="text-muted-foreground text-sm">ui 按主题插槽覆盖类名</span>
      <div className="flex flex-wrap items-center gap-6">
        <XCheckbox
          checked
          label="自定义外观"
          description="说明文字"
          ui={{
            root: "gap-4",
            base: "rounded-full ring-2 ring-warning-6",
            indicator: "bg-warning-6",
            label: "italic text-error-6",
            description: "text-xs",
          }}
        />
        <XCheckbox
          checked
          variant="card"
          label="卡片自定义"
          ui={{ root: "bg-primary-1 border-primary-3", indicator: "bg-info-6" }}
        />
      </div>
    </div>
  );
}
