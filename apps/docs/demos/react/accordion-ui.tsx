import { XAccordion } from "@/components/kit/x-accordion";

const items = [{ label: "自定义外观", icon: "star", content: "ui 按主题插槽注入类名，覆盖每一层元素的外观。" }];

export default function AccordionUi() {
  return (
    <XAccordion
      items={items}
      defaultValue={["0"]}
      className="w-full"
      ui={{
        root: "rounded-lg border border-border px-4",
        item: "border-dashed",
        header: "bg-muted rounded-md",
        trigger: "text-primary-6 font-semibold",
        leadingIcon: "text-warning-6",
        label: "tracking-wide",
        trailingIcon: "text-info-6",
        content: "text-neutral-6",
        body: "italic",
      }}
    />
  );
}
