import { XChip } from "@/components/kit/x-chip";

export default function ChipUiCustom() {
  return (
    <div className="flex flex-wrap items-center gap-8">
      <XChip standalone color="info" text="ui 插槽" ui={{ base: "rounded-md px-3" }} />
      <XChip render={<span />} standalone color="success" text="render 渲染为 span" />
    </div>
  );
}
