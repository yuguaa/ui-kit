import { XBreadcrumb } from "@/components/kit/x-breadcrumb";

const items = [
  { title: "首页", href: "/" },
  { title: "组件", href: "/components" },
  { title: "面包屑" },
];

export default function BreadcrumbColor() {
  return (
    <div className="flex w-full flex-col gap-5">
      <XBreadcrumb items={items} color="primary" />
      <XBreadcrumb items={items} color="success" />
      <XBreadcrumb items={items} color="warning" />
    </div>
  );
}
