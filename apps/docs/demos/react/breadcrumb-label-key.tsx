import { XBreadcrumb } from "@/components/kit/x-breadcrumb";

export default function BreadcrumbLabelKey() {
  return (
    <div className="flex w-full flex-col gap-5">
      <XBreadcrumb
        labelKey="name"
        items={[
          { name: "首页", href: "/" },
          { name: "组件", href: "/components" },
          { name: "面包屑" },
        ]}
      />
    </div>
  );
}
