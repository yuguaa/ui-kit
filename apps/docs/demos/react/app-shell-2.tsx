import { useEffect, useMemo, useState } from "react";
import { XAvatar } from "@/components/kit/x-avatar";
import { XBadge } from "@/components/kit/x-badge";
import { XBreadcrumb } from "@/components/kit/x-breadcrumb";
import { XButton } from "@/components/kit/x-button";
import { XCard } from "@/components/kit/x-card";
import { XDropdownMenu } from "@/components/kit/x-dropdown-menu";
import { XIcon } from "@/components/kit/x-icon";
import { XInput } from "@/components/kit/x-input";
import { XKbd } from "@/components/kit/x-kbd";
import { XModal } from "@/components/kit/x-modal";

/* 类名拼接（demo 场景直接模板字符串，避免额外依赖） */
function joinClass(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ")
}

/* 侧边栏折叠状态：展开 232px，折叠为 56px 图标栏 */
const workspaces = [
  { label: "Acme 工作区", icon: "building", desc: "企业版计划" },
  { label: "个人空间", icon: "house", desc: "免费计划" },
  { label: "客户演示区", icon: "users", desc: "演示计划" },
];

const navGroups = [
  {
    label: "总览",
    items: [
      { label: "仪表盘", icon: "gauge", count: undefined as number | undefined, live: false },
      { label: "实时活动", icon: "chart-line", count: undefined, live: true },
      { label: "报表", icon: "chart-bar", count: undefined, live: false },
    ],
  },
  {
    label: "管理",
    items: [
      { label: "项目", icon: "folder", count: 8, live: false },
      { label: "成员", icon: "users", count: undefined, live: false },
      { label: "设置", icon: "settings", count: undefined, live: false },
    ],
  },
];

const breadcrumbs = [{ title: "工作区" }, { title: "仪表盘" }];

const stats = [
  { label: "本月收入", value: "¥ 128,430", trend: "+12.5%", icon: "trending-up", tone: "text-success bg-success/10" },
  { label: "活跃用户", value: "8,649", trend: "+3.2%", icon: "users", tone: "text-info bg-info/10" },
  { label: "待处理工单", value: "42", trend: "-8.1%", icon: "inbox", tone: "text-warning bg-warning/10" },
];

const activities = [
  { name: "张伟", action: "创建了项目「官网改版」", time: "2 分钟前", avatar: "Z" },
  { name: "李娜", action: "邀请 3 位新成员", time: "18 分钟前", avatar: "L" },
  { name: "王强", action: "提交了季度报表", time: "1 小时前", avatar: "W" },
];

const commands = [
  { label: "前往仪表盘", icon: "gauge", group: "页面" },
  { label: "新建项目", icon: "folder-plus", group: "操作" },
  { label: "邀请成员", icon: "user-plus", group: "操作" },
  { label: "打开报表", icon: "chart-bar", group: "页面" },
  { label: "工作区设置", icon: "settings", group: "页面" },
];

export default function AppShell2Demo() {
  const [collapsed, setCollapsed] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNav, setSelectedNav] = useState("仪表盘");

  const filteredCommands = useMemo(
    () => commands.filter((command) => command.label.includes(searchTerm)),
    [searchTerm],
  );

  /* command-k 全局快捷键 */
  useEffect(() => {
    function onKeydown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
    }
    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  }, []);

  return (
    <div className="app-shell-demo relative w-full overflow-hidden rounded-xl border border-border bg-background p-3 text-foreground">
      <div className="flex h-[520px] w-full gap-3">
        {/* 浮动侧边栏：可折叠为图标栏 */}
        <aside
          className={joinClass(
            "flex shrink-0 flex-col gap-1 rounded-xl border border-border bg-muted/30 p-2 transition-[width] duration-200 ease-out",
            collapsed ? "w-14" : "w-[232px]",
          )}
        >
          {/* 工作区切换器 */}
          <XDropdownMenu
            items={workspaces}
            labelKey="label"
            descriptionKey="desc"
            ui={{ leadingIcon: "size-4 text-muted-foreground", item: "px-2 py-1.5" }}
            className={joinClass(
              "mb-1 flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium transition-colors hover:bg-muted/60 justify-start",
              collapsed && "justify-center px-1",
            )}
            trigger={
              <button type="button" className="contents" aria-label="切换工作区">
                <XIcon name="building" className="size-4 shrink-0 text-primary" />
                {!collapsed && (
                  <>
                    <span className="flex-1 truncate text-left">Acme 工作区</span>
                    <XIcon name="chevrons-up-down" className="size-3.5 text-muted-foreground" />
                  </>
                )}
              </button>
            }
          />

          {/* 导航分组 */}
          <nav className="flex flex-1 flex-col gap-2 overflow-y-auto">
            {navGroups.map((group) => (
              <div key={group.label} className="flex flex-col gap-0.5">
                {!collapsed && (
                  <span className="px-2 pb-1 pt-2 text-xs font-medium tracking-wide text-muted-foreground">
                    {group.label}
                  </span>
                )}
                {group.items.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    className={joinClass(
                      "flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm transition-colors",
                      selectedNav === item.label
                        ? "bg-primary/10 font-medium text-primary"
                        : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                      collapsed && "justify-center px-1",
                    )}
                    title={collapsed ? item.label : undefined}
                    onClick={() => setSelectedNav(item.label)}
                  >
                    <XIcon name={item.icon} className="size-4 shrink-0" />
                    {!collapsed && (
                      <>
                        <span className="flex-1 truncate text-left">{item.label}</span>
                        {/* live status pulse：绿色状态脉冲点 */}
                        {item.live && (
                          <span className="relative flex size-1.5">
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-75" />
                            <span className="relative inline-flex size-1.5 rounded-full bg-success" />
                          </span>
                        )}
                        {item.count != null && <XBadge count={item.count} size="xs" color="neutral" />}
                      </>
                    )}
                  </button>
                ))}
              </div>
            ))}
          </nav>

          {/* 折叠按钮 */}
          <button
            type="button"
            className={joinClass(
              "flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground",
              collapsed && "justify-center px-1",
            )}
            onClick={() => setCollapsed((value) => !value)}
          >
            <XIcon name="panel-left-close" className="size-4 shrink-0" />
            {!collapsed && <span>收起侧边栏</span>}
          </button>

          {/* 用户菜单 */}
          <XDropdownMenu
            items={[
              { label: "个人资料", icon: "user" },
              { label: "账户设置", icon: "settings" },
              { type: "separator" },
              { label: "退出登录", icon: "log-out", color: "error" },
            ]}
            labelKey="label"
            className={joinClass(
              "flex w-full items-center gap-2 rounded-lg px-2 py-1.5 transition-colors hover:bg-muted/60",
              collapsed && "justify-center px-1",
            )}
            trigger={
              <button type="button" className="contents" aria-label="用户菜单">
                <XAvatar src="https://github.com/nuxt-ui.png" alt="用户头像" size="xs" />
                {!collapsed && (
                  <span className="flex flex-1 flex-col items-start">
                    <span className="text-sm font-medium">菠萝吹雪</span>
                    <span className="text-xs text-muted-foreground">admin@acme.cn</span>
                  </span>
                )}
              </button>
            }
          />
        </aside>

        {/* 主区域 */}
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          {/* 头部：面包屑 + 搜索 + 通知 */}
          <header className="flex items-center gap-3 rounded-xl border border-border bg-muted/30 px-3 py-2">
            <XBreadcrumb items={breadcrumbs} ui={{ link: "text-sm px-1.5 py-0.5 rounded-md hover:bg-muted/60" }} />
            <div className="ml-auto flex items-center gap-2">
              <XButton
                variant="outline"
                color="neutral"
                className="w-56 justify-between text-muted-foreground"
                onClick={() => setSearchOpen(true)}
              >
                <span className="flex items-center gap-2">
                  <XIcon name="search" className="size-4" />
                  搜索命令…
                </span>
                <span className="flex items-center gap-1">
                  <XKbd value="⌘" variant="outline" size="xs" />
                  <XKbd value="K" variant="outline" size="xs" />
                </span>
              </XButton>
              <XButton variant="ghost" color="neutral" square aria-label="通知">
                <XIcon name="bell" className="size-4" />
              </XButton>
            </div>
          </header>

          {/* 统计卡片 */}
          <div className="grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <XCard key={stat.label} size="small">
                <div className="flex items-center gap-3">
                  <span className={joinClass("flex size-9 items-center justify-center rounded-lg", stat.tone)}>
                    <XIcon name={stat.icon} className="size-4.5" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">{stat.label}</span>
                    <span className="text-lg font-semibold">{stat.value}</span>
                  </div>
                  <span
                    className={joinClass(
                      "ml-auto text-xs font-medium",
                      stat.trend.startsWith("+") ? "text-success" : "text-info",
                    )}
                  >
                    {stat.trend}
                  </span>
                </div>
              </XCard>
            ))}
          </div>

          {/* 最近活动 */}
          <XCard title="最近活动" size="small" className="flex-1">
            <div className="flex flex-col divide-y divide-border">
              {activities.map((activity) => (
                <div key={activity.name} className="flex items-center gap-3 py-2.5">
                  <XAvatar text={activity.avatar} size="xs" color="primary" />
                  <span className="text-sm">
                    <span className="font-medium">{activity.name}</span>
                    <span className="text-muted-foreground">{activity.action}</span>
                  </span>
                  <span className="ml-auto text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </XCard>
        </div>
      </div>

      {/* command-k 搜索对话框 */}
      <XModal
        open={searchOpen}
        onOpenChange={setSearchOpen}
        title="搜索命令"
        close={false}
        ui={{ content: "sm:max-w-md gap-0 p-0" }}
        body={
        <div className="flex flex-col">
          <div className="flex items-center gap-2 border-b border-border px-3 py-2.5">
            <XIcon name="search" className="size-4 text-muted-foreground" />
            <XInput
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              variant="none"
              autoFocus
              placeholder="搜索页面或执行操作…"
              className="flex-1 border-0 px-0 text-sm shadow-none focus:ring-0"
              ui={{ base: "border-0 shadow-none" }}
            />
            <XKbd value="Esc" variant="outline" size="xs" />
          </div>
          <div className="flex max-h-64 flex-col gap-0.5 overflow-y-auto p-1.5">
            {filteredCommands.map((command) => (
              <button
                key={command.label}
                type="button"
                className="flex items-center gap-2.5 rounded-md px-2 py-1.5 text-left text-sm transition-colors hover:bg-muted/60"
                onClick={() => setSearchOpen(false)}
              >
                <XIcon name={command.icon} className="size-4 text-muted-foreground" />
                {command.label}
                <span className="ml-auto text-xs text-muted-foreground">{command.group}</span>
              </button>
            ))}
            {!filteredCommands.length && (
              <span className="px-2 py-4 text-center text-sm text-muted-foreground">没有匹配的命令</span>
            )}
          </div>
        </div>
        }
      />
    </div>
  );
}
