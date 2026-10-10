import { XBreadcrumb } from "@/components/kit/x-breadcrumb";

const items = [
  { title: "首页", href: "/" },
  { title: "组件", href: "/components" },
  { title: "面包屑" },
];

export default function BreadcrumbUi() {
  return (
    <div className="flex w-full flex-col gap-5">
      <XBreadcrumb
        items={items}
        ui={{
          link: "px-2 py-1 bg-primary-1 rounded-full",
          linkLabel: "tracking-wide",
          separatorIcon: "text-primary-6",
        }}
      />
    </div>
  );
}
