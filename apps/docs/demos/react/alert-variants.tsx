import { XAlert } from "@/components/kit";

export default function AlertVariants() {
  return (
    <div className="flex w-full flex-col gap-3">
      <XAlert variant="solid" type="info" message="solid 变体" description="实心背景，用于强提示。" showIcon />
      <XAlert variant="outline" type="warning" message="outline 变体" description="描边样式，背景透明。" showIcon />
      <XAlert variant="subtle" type="error" message="subtle 变体" description="浅底加描边，弱化边界。" showIcon />
    </div>
  );
}
