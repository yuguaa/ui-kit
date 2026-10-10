import { XCollapsible } from "@/components/kit/x-collapsible";

export default function CollapsibleUi() {
  return (
    <div className="flex w-full flex-col gap-5">
      <XCollapsible
        defaultOpen
        ui={{
          root: "gap-2 rounded-lg border border-border p-3",
          content: "rounded-md bg-primary-1 p-3 text-primary-7",
        }}
      >
        ui.root 覆盖根容器，ui.content 覆盖内容区，可注入任意 Tailwind 类名。
      </XCollapsible>

      <XCollapsible
        render={<section />}
        defaultOpen
        unmountOnHide={false}
        ui={{ content: "text-success-7" }}
      >
        render 渲染为 section 根元素；unmountOnHide=false 时关闭后内容保留在 DOM 中。
      </XCollapsible>
    </div>
  );
}
