import { XRadioGroup } from "@/components/kit/x-radio-group";

const options = [
  { value: "a", label: "选项 A", description: "辅助说明" },
  { value: "b", label: "选项 B", description: "辅助说明" },
];

export default function RadioGroupUiCustomDemo() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-3">
        <span className="text-muted-foreground text-sm">ui 按主题插槽覆盖类名</span>
        <XRadioGroup
          options={options}
          value="a"
          legend="自定义外观"
          ui={{
            legend: "text-error",
            item: "rounded-lg border p-3",
            indicator: "bg-success",
            label: "font-bold",
            description: "italic text-xs",
          }}
        />
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-muted-foreground text-sm">单项 ui 覆盖</span>
        <XRadioGroup
          options={[
            { value: "a", label: "选项 A", ui: { item: "rounded-lg border border-primary/20 p-2" } },
            { value: "b", label: "选项 B" },
          ]}
          value="a"
        />
      </div>
    </div>
  );
}
