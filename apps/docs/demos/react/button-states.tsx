import { XButton } from "@/components/kit/x-button";

export default function ButtonStates() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <XButton loading>加载中</XButton>
      <XButton disabled>禁用</XButton>
      <XButton variant="outline" disabled>禁用</XButton>
      <XButton variant="soft" disabled>禁用</XButton>
      <XButton variant="link" disabled>禁用</XButton>
    </div>
  );
}
