import { XBreadcrumb } from "@/components/kit/x-breadcrumb";
import { XIcon } from "@/components/kit/x-icon";

const items = [
  { title: "首页", href: "/", icon: <XIcon name="dashboard" size="sm" /> },
  { title: "组件", href: "/components", icon: <XIcon name="bell" size="sm" /> },
  { title: "导航", href: "/components/navigation", icon: <XIcon name="menu" size="sm" /> },
  { title: "面包屑", icon: <XIcon name="info" size="sm" /> },
];

export default function BreadcrumbIcons() {
  return (
    <div className="flex w-full flex-col gap-5">
      <XBreadcrumb items={items} separatorIcon={<XIcon name="chevron-down" size="sm" />} />
      <XBreadcrumb
        items={items}
        separator={<span className="text-muted-foreground">/</span>}
      />
    </div>
  );
}
