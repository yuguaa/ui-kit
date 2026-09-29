import { XButton } from "@/components/kit/x-button";
import { XButtonGroup } from "@/components/kit/x-button-group";
import { XIcon } from "@/components/kit/x-icon";

export default function ButtonBasic() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <XButton color="primary">主要按钮</XButton>
      <XButton variant="outline" color="primary">次要按钮</XButton>
      <XButton variant="soft" color="success">保存</XButton>
      <XButton variant="ghost" color="warning">警告</XButton>
      <XButton variant="subtle" color="error">删除</XButton>
      <XButton variant="link" color="info">链接按钮</XButton>
      <XButton color="neutral" loading>提交中</XButton>
      <XButton size="xs" variant="soft">xs</XButton>
      <XButton size="xl" color="primary">xl</XButton>
      <div className="flex flex-wrap items-center gap-3">
        <XButton leading={<XIcon name="plus" size="sm" />}>新建</XButton>
        <XButton trailing={<XIcon name="chevron-down" size="sm" />}>展开</XButton>
        <XButtonGroup>
          <XButton variant="outline">左</XButton>
          <XButton variant="outline">中</XButton>
          <XButton variant="outline">右</XButton>
        </XButtonGroup>
      </div>
    </div>
  );
}
