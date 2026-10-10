import { XNavigationMenu } from "@/components/kit";

const items = [
  { key: "dashboard", label: "仪表盘", icon: "layout-dashboard" },
  { key: "analytics", label: "数据分析", icon: "chart-line" },
  { type: "label", label: "工作区" },
  {
    key: "projects",
    label: "项目",
    icon: "folder",
    children: [
      { key: "project-a", label: "项目 A" },
      { key: "project-b", label: "项目 B" },
      { key: "project-c", label: "项目 C" },
    ],
  },
  {
    key: "settings",
    label: "设置",
    icon: "settings",
    children: [
      { key: "general", label: "通用" },
      { key: "members", label: "成员管理" },
    ],
  },
];

export default function NavigationMenuVerticalDemo() {
  return (
    <div className="flex flex-wrap items-start gap-8">
      <XNavigationMenu items={items} selectedKeys={["dashboard"]} className="w-56" />
      <XNavigationMenu
        highlight
        highlightColor="info"
        variant="link"
        labelKey="name"
        items={[
          { name: "概览", icon: "gauge" },
          { name: "报表", icon: "chart-bar", children: [{ name: "周报" }, { name: "月报" }] },
          { name: "导出", icon: "download" },
        ]}
        className="w-56"
      />
    </div>
  );
}
