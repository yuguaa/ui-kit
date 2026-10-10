import { XAlert } from "@/components/kit/x-alert";

export default function AlertUiCustom() {
  return (
    <div className="flex w-full flex-col gap-3">
      <XAlert
        color="primary"
        icon="info"
        title="ui 插槽自定义"
        description="ui 键按主题插槽覆盖类名：root 圆角与阴影，title 加宽字距。"
        ui={{ root: "rounded-2xl shadow-md", title: "tracking-wide" }}
      />
      <XAlert
        render={<section />}
        color="neutral"
        variant="outline"
        title="render 渲染为 section"
        description="render 可渲染为任意元素。"
      />
    </div>
  );
}
