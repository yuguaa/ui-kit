import { XAccordion } from "@/components/kit/x-accordion";

const items = [
  { label: "什么是 ui-kit？", content: "基于 Tailwind 与 Reka UI 的组件库，提供完整的属性、插槽与 API。" },
  { label: "如何安装？", content: "通过 shadcn CLI 添加组件即可使用。" },
  { label: "支持哪些框架？", content: "同时支持 Vue 3 与 React。", disabled: true },
];

export default function AccordionBasic() {
  return <XAccordion items={items} defaultValue={["0"]} className="w-full" />;
}
