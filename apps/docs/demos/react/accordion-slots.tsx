import { XAccordion } from "@/components/kit/x-accordion";
import { XIcon } from "@/components/kit/x-icon";

const items = [
  {
    name: "字段映射",
    id: "mapping",
    icon: "star",
    content: "labelKey 指定标题字段，valueKey 指定唯一值字段，均支持点路径。",
  },
  {
    name: "插槽与图标",
    id: "slots",
    trailingIcon: "chevron-right",
    content: "leading / trailing 插槽替换两侧图标，body 插槽接收 { item, index, open }。",
  },
];

export default function AccordionSlots() {
  return (
    <XAccordion
      items={items}
      labelKey="name"
      valueKey="id"
      defaultValue={["slots"]}
      className="w-full"
      leading={({ open }) => <XIcon name={open ? "chevron-down" : "star"} />}
      body={({ item, open }) => (
        <>
          {open && <span className="font-medium text-primary-6">展开中：</span>}
          {String(item.content)}
        </>
      )}
    />
  );
}
