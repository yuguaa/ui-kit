import { XBreadcrumb } from "@/components/kit/x-breadcrumb";

const items = [
  { title: "首页", href: "/" },
  { title: "组件", href: "/components" },
  { title: "导航", href: "/components/navigation" },
  { title: "面包屑" },
];

export default function BreadcrumbBasic() {
  return (
    <div className="flex w-full flex-col gap-5">
      <XBreadcrumb items={items} />
    </div>
  );
}
