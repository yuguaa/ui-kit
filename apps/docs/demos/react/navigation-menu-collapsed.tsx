import { XNavigationMenu } from "@/components/kit";

export default function NavigationMenuCollapsedDemo() {
  return (
    <div className="flex flex-wrap items-start gap-8">
      <XNavigationMenu
        orientation="vertical"
        collapsed
        tooltip
        items={[
          { key: "dashboard", label: "仪表盘", icon: "layout-dashboard" },
          { key: "files", label: "文件", icon: "folder" },
          { key: "users", label: "成员", icon: "users", badge: 3 },
          { key: "settings", label: "设置", icon: "settings" },
        ]}
      />
      <XNavigationMenu
        orientation="vertical"
        collapsed
        popover
        tooltip
        ui={{ content: "border border-primary/20", link: "justify-center" }}
        items={[
          { key: "home", label: "首页", icon: "house" },
          {
            key: "projects",
            label: "项目",
            icon: "folder",
            children: [
              { key: "project-a", label: "项目 A" },
              { key: "project-b", label: "项目 B" },
            ],
          },
          {
            key: "reports",
            label: "报表",
            icon: "chart-bar",
            children: [
              { key: "weekly", label: "周报" },
              { key: "monthly", label: "月报" },
            ],
          },
          { key: "trash", label: "回收站", icon: "trash" },
        ]}
      />
    </div>
  );
}
