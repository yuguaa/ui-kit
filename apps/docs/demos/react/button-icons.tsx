import { XButton } from "@/components/kit/x-button";
import { XButtonGroup } from "@/components/kit/x-button-group";
import { XIcon } from "@/components/kit/x-icon";

export default function ButtonIcons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <XButton leading={<XIcon name="plus" size="sm" />}>新建</XButton>
      <XButton trailing={<XIcon name="chevron-down" size="sm" />}>展开</XButton>
      <XButton variant="outline" size="sm" aria-label="设置">
        <XIcon name="settings" size="sm" />
      </XButton>
      <XButtonGroup>
        <XButton variant="outline">左</XButton>
        <XButton variant="outline">中</XButton>
        <XButton variant="outline">右</XButton>
      </XButtonGroup>
    </div>
  );
}
