import { XAlert } from "@/components/kit/x-alert";

export default function AlertVariants() {
  return (
    <div className="flex w-full flex-col gap-3">
      <XAlert variant="solid" color="info" icon="info" title="solid 变体" description="实心背景，用于强提示。" />
      <XAlert variant="outline" color="warning" icon="circle-alert" title="outline 变体" description="描边样式，背景透明。" />
      <XAlert variant="soft" color="success" icon="circle-check" title="soft 变体" description="浅色背景，弱强调。" />
      <XAlert variant="subtle" color="error" icon="circle-alert" title="subtle 变体" description="浅底加描边，弱化边界。" />
    </div>
  );
}
