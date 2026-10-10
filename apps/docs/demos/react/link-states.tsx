import { XLink } from "@/components/kit/x-link";

export default function LinkStates() {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="flex flex-wrap items-center gap-6">
        <XLink to="/docs" active>激活链接</XLink>
        <XLink to="/examples" inactiveClass="italic tracking-wide">非激活附加类名</XLink>
        <XLink to="/disabled" disabled>禁用链接</XLink>
      </div>
      <div className="flex flex-wrap items-center gap-6">
        <XLink to="/docs" ui={{ base: "rounded-full px-3 py-1 bg-primary/10" }}>
          ui.base 自定义外观
        </XLink>
        <XLink render={<button type="button" />}>render 渲染为按钮</XLink>
      </div>
    </div>
  );
}
