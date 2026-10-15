import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="w-full">
      <section className="2xl:px-20 [--h11-accent:#432dd7] bg-background flex items-center lg:px-8 px-4 py-12 sm:px-6 w-full" aria-labelledby="hero-11-title">
        <div className="@container flex flex-col gap-8 max-w-7xl mx-auto w-full">
          <div className="@3xl:flex-row @3xl:items-end flex flex-col gap-8">
            <div className="flex flex-1 flex-col gap-4 items-start min-w-0">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-7 hover:bg-accent min-w-6 outline-none px-2 py-0.75 relative rounded-full text-foreground text-sm transition-colors" href="#">
                <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                {"Meet 485+ PRO Blocks"}
                <svg className="lucide lucide-arrow-up-right shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </Badge>
              <h1 className="@lg:leading-none @lg:text-5xl font-semibold leading-tight text-4xl text-balance text-foreground" id="hero-11-title">
                <span className="@lg:block">
                  {"Design-ready shadcn"}
                </span>
                <span className="@lg:block text-muted-foreground">
                  {"MCP native"}
                </span>
              </h1>
            </div>
            <div className="@3xl:max-w-md flex flex-1 flex-col gap-4 items-start min-w-0">
              <p className="leading-6 text-base text-muted-foreground text-pretty">
                {"Build faster with production-ready blocks, MCP support, and a curated shadcn registry."}
              </p>
              <div className="flex flex-wrap gap-2 items-center">
                <Button className="bg-(--h11-accent) border-transparent focus-visible:ring-(--h11-accent)/40 hover:bg-(--h11-accent)/90 shadow-xs text-white" type="button" tabIndex={0} extracted="1">
                  <svg className="fill-current shrink-0 size-4" aria-hidden="true" id="Ebene_1" version="1.1" viewBox="0 0 466.73 532.09">
                    <path d="M457.43,125.94L244.42,2.96c-6.84-3.95-15.28-3.95-22.12,0L9.3,125.94c-5.75,3.32-9.3,9.46-9.3,16.11v247.99c0,6.65,3.55,12.79,9.3,16.11l213.01,122.98c6.84,3.95,15.28,3.95,22.12,0l213.01-122.98c5.75-3.32,9.3-9.46,9.3-16.11v-247.99c0-6.65-3.55-12.79-9.3-16.11h-.01ZM444.05,151.99l-205.63,356.16c-1.39,2.4-5.06,1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87,145.67c-2.4-1.39-1.42-5.06,1.36-5.06h411.26c5.84,0,9.49,6.33,6.57,11.39h-.01Z"></path>
                  </svg>
                  {"Start with Cursor"}
                </Button>
                <Button type="button" tabIndex={0}>
                  <svg className="lucide lucide-book-open" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" aria-hidden="true">
                    <path d="M12 7v14"></path>
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                  </svg>
                  {"Read Docs"}
                </Button>
              </div>
            </div>
          </div>
          <div className="@5xl:flex-row @5xl:items-stretch border border-border flex flex-col overflow-hidden rounded-xl">
            <div className="@5xl:flex-1 @5xl:max-w-[512px] divide-border divide-y flex flex-col group/card min-w-0">
              <a className="flex flex-1 flex-col focus-visible:inset-ring-[3px] focus-visible:inset-ring-ring/50 gap-2 group/feature hover:bg-muted items-start outline-none px-6 py-6 transition-colors" href="#">
                <div className="bg-muted border border-border flex group-hover/feature:bg-(--h11-accent) group-hover/feature:border-white/30 group-hover/feature:text-white items-center justify-center rounded-md size-8 text-foreground transition-colors">
                  <svg className="lucide lucide-layout-panel-left size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayoutPanelLeftIcon" tabler="IconLayoutBoardSplit" hugeicons="DashboardSquare01Icon" phosphor="LayoutIcon" remixicon="RiLayoutLeftLine" aria-hidden="true">
                    <rect width={7} height={18} x={3} y={3} rx={1}></rect>
                    <rect width={7} height={7} x={14} y={3} rx={1}></rect>
                    <rect width={7} height={7} x={14} y={14} rx={1}></rect>
                  </svg>
                </div>
                <p className="font-medium leading-6 text-base text-foreground">
                  {"Design with ready-made blocks"}
                </p>
                <p className="leading-5 text-muted-foreground text-pretty text-sm">
                  {"A curated shadcn registry with polished components, blocks, templates, MCP tools, and Agent Skills for building modern interfaces with developers and AI agents."}
                </p>
              </a>
              <a className="flex flex-1 flex-col focus-visible:inset-ring-[3px] focus-visible:inset-ring-ring/50 gap-2 group/feature hover:bg-muted items-start outline-none px-6 py-6 transition-colors" href="#">
                <div className="bg-muted border border-border flex group-hover/feature:bg-(--h11-accent) group-hover/feature:border-white/30 group-hover/feature:text-white items-center justify-center rounded-md size-8 text-foreground transition-colors">
                  <svg className="lucide lucide-workflow size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="WorkflowIcon" tabler="IconSitemap" hugeicons="WorkflowCircle01Icon" phosphor="TreeStructureIcon" remixicon="RiFlowChart" aria-hidden="true">
                    <rect width={8} height={8} x={3} y={3} rx={2}></rect>
                    <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                    <rect width={8} height={8} x={13} y={13} rx={2}></rect>
                  </svg>
                </div>
                <p className="font-medium leading-6 text-base text-foreground">
                  {"Build with MCP workflows"}
                </p>
                <p className="leading-5 text-muted-foreground text-pretty text-sm">
                  {"Connect agents to the NeUI registry to discover, install, and adapt components directly inside your development workflow."}
                </p>
              </a>
              <a className="flex flex-1 flex-col focus-visible:inset-ring-[3px] focus-visible:inset-ring-ring/50 gap-2 group-not-has-[a:hover]/card:bg-muted group/feature hover:bg-muted items-start outline-none px-6 py-6 transition-colors" href="#" aria-current="true">
                <div className="bg-muted border border-border flex group-hover/feature:bg-(--h11-accent) group-hover/feature:border-white/30 group-hover/feature:text-white group-not-has-[a:hover]/card:bg-(--h11-accent) group-not-has-[a:hover]/card:border-white/30 group-not-has-[a:hover]/card:text-white items-center justify-center rounded-md size-8 text-foreground transition-colors">
                  <svg className="lucide lucide-bot size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                    <path d="M12 8V4H8"></path>
                    <rect width={16} height={12} x={4} y={8} rx={2}></rect>
                    <path d="M2 14h2"></path>
                    <path d="M20 14h2"></path>
                    <path d="M15 13v2"></path>
                    <path d="M9 13v2"></path>
                  </svg>
                </div>
                <p className="font-medium leading-6 text-base text-foreground">
                  {"Ship with Agent Skills"}
                </p>
                <p className="leading-5 text-muted-foreground text-pretty text-sm">
                  {"Give AI agents structured guidance for using NeUI components, patterns, and blocks with more consistent output."}
                </p>
              </a>
            </div>
            <div className="@5xl:aspect-auto @5xl:border-l @5xl:border-t-0 @5xl:flex-1 @container aspect-[4/3] border-border border-t flex items-center justify-center min-w-0 overflow-hidden p-[3cqw] relative">
              <img className="-scale-x-100 absolute h-full inset-y-0 left-[-13%] max-w-none object-[50%_8%] object-cover pointer-events-none w-[135%]" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1773751392342-17d8ae9e9f93?q=80&w=1600&auto=format&fit=crop" />
              <div className="aspect-[7/5] bg-white/25 dark:bg-white/15 p-[1.25cqw] relative rounded-xl size-full">
                <div className="[container-type:size] overflow-hidden rounded-lg size-full">
                  <div className="overflow-hidden relative rounded-lg size-full">
                    <div className="absolute left-0 origin-top-left top-0 w-[1440px]" style={{height: "calc((100cqh / 100cqw) * 1440px)", transform: "scale(calc(100cqw / 1440px))"}}>
                      <div className="bg-neutral-50 dark:bg-neutral-950 dark:text-neutral-50 flex overflow-hidden size-full text-neutral-900" role="img" aria-label="Roster HR people dashboard: workforce overview, review cycle, and headcount trend">
                        <style dangerouslySetInnerHTML={{ __html: "\n@keyframes rf-sheen { 0% { transform: translateX(-80%) } 58%, 100% { transform: translateX(360%) } }\n@keyframes rf-pulse { 0%, 100% { opacity: 0.45 } 50% { opacity: 1 } }\n@keyframes rf-ping { 0% { transform: scale(0.7); opacity: 0.55 } 72%, 100% { transform: scale(2); opacity: 0 } }\n/* Three-slot cross-fade: each period is shown for its third of a 9s loop, with a\n   short overlap so the value, delta, trend and the active tab hand off together. */\n@keyframes rf-cyc-0 { 0% { opacity: 1 } 31% { opacity: 1 } 35% { opacity: 0 } 97% { opacity: 0 } 100% { opacity: 1 } }\n@keyframes rf-cyc-1 { 0% { opacity: 0 } 31% { opacity: 0 } 35% { opacity: 1 } 64% { opacity: 1 } 68% { opacity: 0 } 100% { opacity: 0 } }\n@keyframes rf-cyc-2 { 0% { opacity: 0 } 64% { opacity: 0 } 68% { opacity: 1 } 97% { opacity: 1 } 100% { opacity: 0 } }\n\n/* Trend chart. One clip wipes across the plot, so the line and the fill under\n   it arrive together rather than a filled area under a missing line. */\n@keyframes rf-draw {\n  0%, 8% { transform: scaleX(0) }\n  58%, 100% { transform: scaleX(1) }\n}\n/* Under the wipe each dot waits for the edge to reach it, then lands. Fill mode\n   holds frame 0, so a dot stays hidden until its own delay elapses. */\n@keyframes rf-dot-land {\n  0% { opacity: 0; transform: scale(0.3) }\n  7% { opacity: 1; transform: scale(1.7) }\n  16%, 100% { opacity: 1; transform: scale(1) }\n}\n\n.rf-draw { transform-origin: left; animation: rf-draw 7.2s cubic-bezier(0.33, 1, 0.68, 1) infinite; }\n.rf-dot-land {\n  animation: rf-dot-land 7.2s cubic-bezier(0.22, 1, 0.36, 1) infinite both;\n  animation-delay: calc(0.55s + var(--rf-d) * 0.235s);\n}\n\n/* Calendar. The events land across the month, or a week lights at a time. */\n/* A light running the length of one event, then the next. The travel is inside\n   the pill rather than over the grid, so nothing sweeps and nothing tints. */\n@keyframes rf-evt-shimmer {\n  0% { transform: translateX(-120%) }\n  100% { transform: translateX(320%) }\n}\n\n.rf-evt-shimmer { position: relative; overflow: hidden; }\n.rf-evt-shimmer::after {\n  content: \"\"; position: absolute; inset-block: 0; inset-inline-start: 0;\n  width: 45%; pointer-events: none;\n  background: linear-gradient(90deg, transparent, currentColor, transparent);\n  opacity: 0.22;\n  animation: rf-evt-shimmer 7.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  animation-delay: calc(var(--rf-i) * 0.16s);\n}\n\n.rf-sheen { animation: rf-sheen 4.4s ease-in-out infinite; }\n.rf-pulse { animation: rf-pulse 3.4s ease-in-out infinite; }\n.rf-ping { animation: rf-ping 2.6s cubic-bezier(0,0,0.2,1) infinite; }\n.rf-cyc-0 { animation: rf-cyc-0 9s ease-in-out infinite; }\n.rf-cyc-1 { animation: rf-cyc-1 9s ease-in-out infinite; }\n.rf-cyc-2 { animation: rf-cyc-2 9s ease-in-out infinite; }\n\n@media (prefers-reduced-motion: reduce) {\n  .rf-sheen, .rf-pulse, .rf-ping, .rf-draw, .rf-dot-land,\n  .rf-evt-shimmer::after,\n  .rf-cyc-0, .rf-cyc-1, .rf-cyc-2 { animation: none; }\n  /* Rest at the finished chart, never at a half-drawn one. */\n  .rf-draw { transform: none }\n  .rf-dot-land { opacity: 1; transform: none }\n  .rf-evt-shimmer::after { opacity: 0 }\n  /* Settle on the Year view (the default read) when motion is off. */\n  .rf-cyc-0, .rf-cyc-1 { opacity: 0; }\n  .rf-cyc-2 { opacity: 1; }\n}\n" }} />
                        <aside className="bg-white border-neutral-300 border-r dark:bg-neutral-900 dark:border-neutral-800 flex flex-col px-4 py-5 shrink-0 w-[264px]">
                          <div className="flex items-center justify-between px-1">
                            <div className="flex gap-2 items-center">
                              <span className="bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 flex font-bold items-center justify-center rounded-md size-7 text-sm text-white">
                                {"U"}
                              </span>
                              <span className="font-semibold text-[17px]">
                                {"Roster"}
                              </span>
                            </div>
                            <div className="dark:text-neutral-400 flex gap-2 items-center text-neutral-500">
                              <span className="relative">
                                <svg className="lucide lucide-bell size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="Notification01Icon" phosphor="BellIcon" remixicon="RiNotification3Line" aria-hidden="true">
                                  <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                                  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                                </svg>
                                <span className="-right-0.5 -top-0.5 absolute bg-emerald-500 rounded-full size-1.5"></span>
                              </span>
                              <svg className="lucide lucide-panel-left size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine" aria-hidden="true">
                                <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                                <path d="M9 3v18"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="border border-neutral-300 dark:border-neutral-800 dark:text-neutral-400 flex gap-2 items-center mt-4 px-3 py-2 rounded-lg text-neutral-500 text-sm">
                            <svg className="lucide lucide-search size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                              <path d="m21 21-4.34-4.34"></path>
                              <circle cx={11} cy={11} r={8}></circle>
                            </svg>
                            <span>
                              {"Search..."}
                            </span>
                            <span className="dark:text-neutral-500 ml-auto text-neutral-400 text-xs">
                              {"⌘K"}
                            </span>
                          </div>
                          <p className="dark:text-neutral-400 font-medium mt-5 px-1 text-neutral-500 text-xs tracking-wide">
                            {"Workspace"}
                          </p>
                          <nav className="flex flex-col gap-0.5 mt-1.5">
                            <div className="bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-50 flex font-medium gap-2.5 items-center px-2.5 py-2 rounded-md text-neutral-900 text-sm">
                              <svg className="lucide lucide-layout-dashboard shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare01Icon" phosphor="SquaresFourIcon" remixicon="RiDashboardLine" aria-hidden="true">
                                <rect width={7} height={9} x={3} y={3} rx={1}></rect>
                                <rect width={7} height={5} x={14} y={3} rx={1}></rect>
                                <rect width={7} height={9} x={14} y={12} rx={1}></rect>
                                <rect width={7} height={5} x={3} y={16} rx={1}></rect>
                              </svg>
                              <span>
                                {"Dashboard"}
                              </span>
                            </div>
                            <div className="dark:text-neutral-300 flex font-medium gap-2.5 items-center px-2.5 py-2 rounded-md text-neutral-600 text-sm">
                              <svg className="lucide lucide-circle-check shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={10}></circle>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                              <span>
                                {"Approvals"}
                              </span>
                            </div>
                            <div className="dark:text-neutral-300 flex font-medium gap-2.5 items-center px-2.5 py-2 rounded-md text-neutral-600 text-sm">
                              <svg className="lucide lucide-users shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserGroupIcon" phosphor="UsersIcon" remixicon="RiTeamLine" aria-hidden="true">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <circle cx={9} cy={7} r={4}></circle>
                              </svg>
                              <span>
                                {"People"}
                              </span>
                              <svg className="dark:text-neutral-500 lucide lucide-chevron-right ml-auto size-4 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                <path d="m9 18 6-6-6-6"></path>
                              </svg>
                            </div>
                            <div className="dark:text-neutral-300 flex font-medium gap-2.5 items-center px-2.5 py-2 rounded-md text-neutral-600 text-sm">
                              <svg className="lucide lucide-user-plus shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UserPlusIcon" tabler="IconUserPlus" hugeicons="UserAdd01Icon" phosphor="UserPlusIcon" remixicon="RiUserAddLine" aria-hidden="true">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <circle cx={9} cy={7} r={4}></circle>
                                <line x1={19} x2={19} y1={8} y2={14}></line>
                                <line x1={22} x2={16} y1={11} y2={11}></line>
                              </svg>
                              <span>
                                {"Hiring"}
                              </span>
                              <svg className="dark:text-neutral-500 lucide lucide-chevron-right ml-auto size-4 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                <path d="m9 18 6-6-6-6"></path>
                              </svg>
                            </div>
                            <div className="dark:text-neutral-300 flex font-medium gap-2.5 items-center px-2.5 py-2 rounded-md text-neutral-600 text-sm">
                              <svg className="lucide lucide-clock shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="Clock01Icon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={10}></circle>
                                <path d="M12 6v6l4 2"></path>
                              </svg>
                              <span>
                                {"Time"}
                              </span>
                              <svg className="dark:text-neutral-500 lucide lucide-chevron-right ml-auto size-4 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                <path d="m9 18 6-6-6-6"></path>
                              </svg>
                            </div>
                            <div className="dark:text-neutral-300 flex font-medium gap-2.5 items-center px-2.5 py-2 rounded-md text-neutral-600 text-sm">
                              <svg className="lucide lucide-settings shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="Settings01Icon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                                <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                                <circle cx={12} cy={12} r={3}></circle>
                              </svg>
                              <span>
                                {"Settings"}
                              </span>
                              <svg className="dark:text-neutral-500 lucide lucide-chevron-right ml-auto size-4 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                <path d="m9 18 6-6-6-6"></path>
                              </svg>
                            </div>
                          </nav>
                          <div className="flex items-center justify-between mt-5 px-1">
                            <p className="dark:text-neutral-400 font-medium text-neutral-500 text-xs tracking-wide">
                              {"Headcount by department"}
                            </p>
                            <svg className="dark:text-neutral-500 lucide lucide-chevron-down size-3.5 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </div>
                          <div className="flex flex-col gap-2.5 mt-2 px-1.5">
                            <div className="flex gap-2.5 items-center text-sm">
                              <span className="ring-2 ring-inset rounded-full size-2.5" style={{color: "rgb(43, 127, 255)", boxShadow: "rgb(43, 127, 255) 0px 0px 0px 2px inset"}}></span>
                              <span className="dark:text-neutral-300 text-neutral-600">
                                {"Engineering"}
                              </span>
                            </div>
                            <div className="flex gap-2.5 items-center text-sm">
                              <span className="ring-2 ring-inset rounded-full size-2.5" style={{color: "rgb(142, 81, 255)", boxShadow: "rgb(142, 81, 255) 0px 0px 0px 2px inset"}}></span>
                              <span className="dark:text-neutral-300 text-neutral-600">
                                {"People"}
                              </span>
                            </div>
                            <div className="flex gap-2.5 items-center text-sm">
                              <span className="ring-2 ring-inset rounded-full size-2.5" style={{color: "rgb(0, 166, 62)", boxShadow: "rgb(0, 166, 62) 0px 0px 0px 2px inset"}}></span>
                              <span className="dark:text-neutral-300 text-neutral-600">
                                {"Sales"}
                              </span>
                            </div>
                            <div className="flex gap-2.5 items-center text-sm">
                              <span className="ring-2 ring-inset rounded-full size-2.5" style={{color: "rgb(245, 73, 0)", boxShadow: "rgb(245, 73, 0) 0px 0px 0px 2px inset"}}></span>
                              <span className="dark:text-neutral-300 text-neutral-600">
                                {"Customer Success"}
                              </span>
                            </div>
                            <div className="flex gap-2.5 items-center text-sm">
                              <span className="ring-2 ring-inset rounded-full size-2.5" style={{color: "rgb(246, 51, 154)", boxShadow: "rgb(246, 51, 154) 0px 0px 0px 2px inset"}}></span>
                              <span className="dark:text-neutral-300 text-neutral-600">
                                {"Design"}
                              </span>
                            </div>
                          </div>
                          <div className="bg-amber-50/80 dark:bg-amber-500/15 mt-auto p-2 rounded-xl">
                            <p className="dark:text-amber-400 font-semibold pb-2 pt-1 px-2 text-[13px] text-amber-600">
                              {"Headcount plan"}
                            </p>
                            <div className="bg-white border border-neutral-300 dark:bg-neutral-900 dark:border-neutral-800 p-3 rounded-lg">
                              <p className="dark:text-neutral-300 leading-4 text-neutral-600 text-xs">
                                {"Approved headcount for FY26. Resets when the plan is re-baselined."}
                              </p>
                              <div className="bg-[repeating-linear-gradient(45deg,#e2e8f0_0_2px,#f1f5f9_2px_4px)] dark:bg-[repeating-linear-gradient(45deg,var(--color-neutral-700)_0_2px,var(--color-neutral-800)_2px_4px)] h-1.5 mt-3 overflow-hidden rounded-full">
                                <div className="bg-emerald-500 h-full overflow-hidden relative rounded-full w-[92%]">
                                  <span className="-left-1/3 absolute bg-white/55 inset-y-0 rf-sheen w-1/3"></span>
                                </div>
                              </div>
                              <div className="dark:text-neutral-300 flex items-center justify-between mt-2 text-neutral-600 text-xs">
                                <span>
                                  <span className="dark:text-neutral-100 font-semibold text-neutral-800">
                                    {"92%"}
                                  </span>
                                  {"Filled"}
                                </span>
                                <span>
                                  <span className="dark:text-neutral-100 font-semibold text-neutral-800">
                                    {"8%"}
                                  </span>
                                  {"Open"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2.5 items-center mt-3 px-1">
                            <Avatar className="size-8" size="default">
                              <AvatarImage alt="" width={64} height={64} src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <div className="leading-tight">
                              <p className="font-semibold text-sm">
                                {"Bruno Duarte"}
                              </p>
                              <p className="dark:text-neutral-400 flex gap-1 items-center text-neutral-500 text-xs">
                                <span className="bg-emerald-500 rounded-full size-1.5"></span>
                                {"Roster UK"}
                              </p>
                            </div>
                            <svg className="dark:text-neutral-400 lucide lucide-ellipsis ml-auto size-4 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalIcon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                              <circle cx={12} cy={12} r={1}></circle>
                              <circle cx={19} cy={12} r={1}></circle>
                              <circle cx={5} cy={12} r={1}></circle>
                            </svg>
                          </div>
                        </aside>
                        <main className="flex flex-1 flex-col gap-4 min-w-0 px-6 py-5">
                          <header className="flex items-center justify-between">
                            <div className="flex gap-2 items-center text-[15px]">
                              <svg className="dark:text-neutral-400 lucide lucide-house size-4 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HomeIcon" tabler="IconHome" hugeicons="Home01Icon" phosphor="HouseIcon" remixicon="RiHome5Line" aria-hidden="true">
                                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                                <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                              </svg>
                              <span className="dark:text-neutral-300 text-neutral-600">
                                {"People"}
                              </span>
                              <span className="bg-neutral-400/70 dark:bg-neutral-600 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="font-semibold">
                                {"Dashboard"}
                              </span>
                            </div>
                            <div className="flex gap-2.5 items-center">
                              <div className="bg-white border border-neutral-300 dark:bg-neutral-800 dark:border-neutral-700 flex gap-2 items-center px-3 py-1.5 rounded-lg text-sm">
                                <span>
                                  {"Jul 1, 2026 - Jul 30, 2026"}
                                </span>
                                <svg className="dark:text-neutral-400 lucide lucide-calendar size-4 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                                  <path d="M3 10h18"></path>
                                </svg>
                              </div>
                              <div className="bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 flex font-medium gap-1.5 items-center px-3 py-1.5 rounded-lg text-sm text-white">
                                <svg className="lucide lucide-download size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownloadLine" aria-hidden="true">
                                  <path d="M12 15V3"></path>
                                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                  <path d="m7 10 5 5 5-5"></path>
                                </svg>
                                {"Export"}
                              </div>
                            </div>
                          </header>
                          <section className="bg-white border border-neutral-300 dark:bg-neutral-900 dark:border-neutral-800 overflow-hidden rounded-xl">
                            <div className="-mb-3.5 bg-white border-b border-neutral-300 dark:bg-neutral-900 dark:border-neutral-800 p-5 relative rounded-b-xl z-10">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="font-semibold text-[15px]">
                                    {"Workforce overview"}
                                  </h3>
                                  <p className="dark:text-neutral-400 text-neutral-500 text-sm">
                                    {"Headcount, hiring pressure and absence in one pass."}
                                  </p>
                                </div>
                                <div className="bg-neutral-100 dark:bg-neutral-800 flex font-medium gap-0.5 items-center p-[3px] rounded-lg text-xs">
                                  <span className="dark:text-neutral-300 px-2.5 py-1 relative rounded-md text-neutral-600">
                                    <span className="absolute bg-white dark:bg-neutral-700 dark:shadow-none inset-0 rf-cyc-0 rounded-md shadow-sm" aria-hidden="true"></span>
                                    <span className="relative">
                                      {"Week"}
                                    </span>
                                  </span>
                                  <span className="dark:text-neutral-300 px-2.5 py-1 relative rounded-md text-neutral-600">
                                    <span className="absolute bg-white dark:bg-neutral-700 dark:shadow-none inset-0 rf-cyc-1 rounded-md shadow-sm" aria-hidden="true"></span>
                                    <span className="relative">
                                      {"Month"}
                                    </span>
                                  </span>
                                  <span className="dark:text-neutral-300 px-2.5 py-1 relative rounded-md text-neutral-600">
                                    <span className="absolute bg-white dark:bg-neutral-700 dark:shadow-none inset-0 rf-cyc-2 rounded-md shadow-sm" aria-hidden="true"></span>
                                    <span className="relative">
                                      {"Year"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-stretch mt-5">
                                <div className="flex flex-1 items-stretch">
                                  <div className="flex flex-1 flex-col gap-2 min-w-0">
                                    <div className="dark:text-neutral-300 flex gap-2 items-center text-neutral-600 text-sm">
                                      <span className="[&_svg]:size-4 text-neutral-500">
                                        <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserGroupIcon" phosphor="UsersIcon" remixicon="RiTeamLine" aria-hidden="true">
                                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                          <circle cx={9} cy={7} r={4}></circle>
                                        </svg>
                                      </span>
                                      {"Headcount"}
                                    </div>
                                    <div className="grid">
                                      <div className="col-start-1 flex flex-col gap-2.5 rf-cyc-0 row-start-1">
                                        <div className="flex gap-2 items-center">
                                          <span className="font-semibold leading-none tabular-nums text-[30px]">
                                            {"198"}
                                          </span>
                                          <span className="bg-emerald-50 dark:bg-emerald-500/15 dark:text-emerald-400 font-medium gap-0.5 inline-flex items-center px-1.5 py-0.5 rounded text-emerald-600 text-xs">
                                            {"↗ +1"}
                                          </span>
                                        </div>
                                        <div className="h-12 w-full">
                                          <svg className="overflow-visible size-full" viewBox="0 0 132 40" preserveAspectRatio="none" aria-hidden="true">
                                            <path d="M0 30 L22 27 L44 29 L66 24 L88 26 L110 21 L132 18" fill="none" stroke="#00a63e" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="col-start-1 flex flex-col gap-2.5 rf-cyc-1 row-start-1">
                                        <div className="flex gap-2 items-center">
                                          <span className="font-semibold leading-none tabular-nums text-[30px]">
                                            {"198"}
                                          </span>
                                          <span className="bg-emerald-50 dark:bg-emerald-500/15 dark:text-emerald-400 font-medium gap-0.5 inline-flex items-center px-1.5 py-0.5 rounded text-emerald-600 text-xs">
                                            {"↗ +2"}
                                          </span>
                                        </div>
                                        <div className="h-12 w-full">
                                          <svg className="overflow-visible size-full" viewBox="0 0 132 40" preserveAspectRatio="none" aria-hidden="true">
                                            <path d="M0 32 L26 28 L53 30 L79 23 L106 25 L132 15" fill="none" stroke="#00a63e" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="col-start-1 flex flex-col gap-2.5 rf-cyc-2 row-start-1">
                                        <div className="flex gap-2 items-center">
                                          <span className="font-semibold leading-none tabular-nums text-[30px]">
                                            {"198"}
                                          </span>
                                          <span className="bg-emerald-50 dark:bg-emerald-500/15 dark:text-emerald-400 font-medium gap-0.5 inline-flex items-center px-1.5 py-0.5 rounded text-emerald-600 text-xs">
                                            {"↗ +3"}
                                          </span>
                                        </div>
                                        <div className="h-12 w-full">
                                          <svg className="overflow-visible size-full" viewBox="0 0 132 40" preserveAspectRatio="none" aria-hidden="true">
                                            <path d="M0 30 L18 26 L36 30 L54 22 L72 27 L90 20 L108 25 L132 14" fill="none" stroke="#00a63e" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-1 items-stretch">
                                  <div className="bg-neutral-300/70 dark:bg-neutral-700/70 h-18 mx-6 self-center shrink-0 w-px" aria-hidden="true"></div>
                                  <div className="flex flex-1 flex-col gap-2 min-w-0">
                                    <div className="dark:text-neutral-300 flex gap-2 items-center text-neutral-600 text-sm">
                                      <span className="[&_svg]:size-4 text-neutral-500">
                                        <svg className="lucide lucide-user-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UserPlusIcon" tabler="IconUserPlus" hugeicons="UserAdd01Icon" phosphor="UserPlusIcon" remixicon="RiUserAddLine" aria-hidden="true">
                                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                          <circle cx={9} cy={7} r={4}></circle>
                                          <line x1={19} x2={19} y1={8} y2={14}></line>
                                          <line x1={22} x2={16} y1={11} y2={11}></line>
                                        </svg>
                                      </span>
                                      {"Open roles"}
                                    </div>
                                    <div className="grid">
                                      <div className="col-start-1 flex flex-col gap-2.5 rf-cyc-0 row-start-1">
                                        <div className="flex gap-2 items-center">
                                          <span className="font-semibold leading-none tabular-nums text-[30px]">
                                            {"4"}
                                          </span>
                                          <span className="bg-emerald-50 dark:bg-emerald-500/15 dark:text-emerald-400 font-medium gap-0.5 inline-flex items-center px-1.5 py-0.5 rounded text-emerald-600 text-xs">
                                            {"↗ +1"}
                                          </span>
                                        </div>
                                        <div className="h-12 w-full">
                                          <svg className="overflow-visible size-full" viewBox="0 0 132 40" preserveAspectRatio="none" aria-hidden="true">
                                            <path d="M0 30 L22 26 L44 30 L66 22 L88 27 L110 20 L132 22" fill="none" stroke="#00a63e" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="col-start-1 flex flex-col gap-2.5 rf-cyc-1 row-start-1">
                                        <div className="flex gap-2 items-center">
                                          <span className="font-semibold leading-none tabular-nums text-[30px]">
                                            {"5"}
                                          </span>
                                          <span className="bg-emerald-50 dark:bg-emerald-500/15 dark:text-emerald-400 font-medium gap-0.5 inline-flex items-center px-1.5 py-0.5 rounded text-emerald-600 text-xs">
                                            {"↗ +2"}
                                          </span>
                                        </div>
                                        <div className="h-12 w-full">
                                          <svg className="overflow-visible size-full" viewBox="0 0 132 40" preserveAspectRatio="none" aria-hidden="true">
                                            <path d="M0 32 L26 24 L53 29 L79 20 L106 24 L132 14" fill="none" stroke="#00a63e" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="col-start-1 flex flex-col gap-2.5 rf-cyc-2 row-start-1">
                                        <div className="flex gap-2 items-center">
                                          <span className="font-semibold leading-none tabular-nums text-[30px]">
                                            {"5"}
                                          </span>
                                          <span className="bg-emerald-50 dark:bg-emerald-500/15 dark:text-emerald-400 font-medium gap-0.5 inline-flex items-center px-1.5 py-0.5 rounded text-emerald-600 text-xs">
                                            {"↗ +2"}
                                          </span>
                                        </div>
                                        <div className="h-12 w-full">
                                          <svg className="overflow-visible size-full" viewBox="0 0 132 40" preserveAspectRatio="none" aria-hidden="true">
                                            <path d="M0 32 L18 24 L36 30 L54 18 L72 26 L90 14 L108 22 L132 12" fill="none" stroke="#00a63e" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-1 items-stretch">
                                  <div className="bg-neutral-300/70 dark:bg-neutral-700/70 h-18 mx-6 self-center shrink-0 w-px" aria-hidden="true"></div>
                                  <div className="flex flex-1 flex-col gap-2 min-w-0">
                                    <div className="dark:text-neutral-300 flex gap-2 items-center text-neutral-600 text-sm">
                                      <span className="[&_svg]:size-4 text-neutral-500">
                                        <svg className="lucide lucide-user-minus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UserMinusIcon" tabler="IconUserMinus" hugeicons="UserRemove01Icon" phosphor="UserMinusIcon" remixicon="RiUserUnfollowLine" aria-hidden="true">
                                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                          <circle cx={9} cy={7} r={4}></circle>
                                          <line x1={22} x2={16} y1={11} y2={11}></line>
                                        </svg>
                                      </span>
                                      {"Voluntary attrition"}
                                    </div>
                                    <div className="grid">
                                      <div className="col-start-1 flex flex-col gap-2.5 rf-cyc-0 row-start-1">
                                        <div className="flex gap-2 items-center">
                                          <span className="font-semibold leading-none tabular-nums text-[30px]">
                                            {"12.1%"}
                                          </span>
                                          <span className="bg-emerald-50 dark:bg-emerald-500/15 dark:text-emerald-400 font-medium gap-0.5 inline-flex items-center px-1.5 py-0.5 rounded text-emerald-600 text-xs">
                                            {"↗ +0.2"}
                                          </span>
                                        </div>
                                        <div className="h-12 w-full">
                                          <svg className="overflow-visible size-full" viewBox="0 0 132 40" preserveAspectRatio="none" aria-hidden="true">
                                            <path d="M0 26 L22 22 L44 26 L66 20 L88 24 L110 18 L132 22" fill="none" stroke="#00a63e" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="col-start-1 flex flex-col gap-2.5 rf-cyc-1 row-start-1">
                                        <div className="flex gap-2 items-center">
                                          <span className="font-semibold leading-none tabular-nums text-[30px]">
                                            {"12.5%"}
                                          </span>
                                          <span className="bg-emerald-50 dark:bg-emerald-500/15 dark:text-emerald-400 font-medium gap-0.5 inline-flex items-center px-1.5 py-0.5 rounded text-emerald-600 text-xs">
                                            {"↗ +0.6"}
                                          </span>
                                        </div>
                                        <div className="h-12 w-full">
                                          <svg className="overflow-visible size-full" viewBox="0 0 132 40" preserveAspectRatio="none" aria-hidden="true">
                                            <path d="M0 30 L26 24 L53 28 L79 20 L106 22 L132 16" fill="none" stroke="#00a63e" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="col-start-1 flex flex-col gap-2.5 rf-cyc-2 row-start-1">
                                        <div className="flex gap-2 items-center">
                                          <span className="font-semibold leading-none tabular-nums text-[30px]">
                                            {"12.8%"}
                                          </span>
                                          <span className="bg-emerald-50 dark:bg-emerald-500/15 dark:text-emerald-400 font-medium gap-0.5 inline-flex items-center px-1.5 py-0.5 rounded text-emerald-600 text-xs">
                                            {"↗ +0.9"}
                                          </span>
                                        </div>
                                        <div className="h-12 w-full">
                                          <svg className="overflow-visible size-full" viewBox="0 0 132 40" preserveAspectRatio="none" aria-hidden="true">
                                            <path d="M0 34 L18 22 L36 28 L54 16 L72 24 L90 18 L108 12 L132 20" fill="none" stroke="#00a63e" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-1 items-stretch">
                                  <div className="bg-neutral-300/70 dark:bg-neutral-700/70 h-18 mx-6 self-center shrink-0 w-px" aria-hidden="true"></div>
                                  <div className="flex flex-1 flex-col gap-2 min-w-0">
                                    <div className="dark:text-neutral-300 flex gap-2 items-center text-neutral-600 text-sm">
                                      <span className="[&_svg]:size-4 text-neutral-500">
                                        <svg className="lucide lucide-calendar-off" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarOffIcon" tabler="IconCalendarOff" hugeicons="Calendar01Icon" phosphor="CalendarXIcon" remixicon="RiCalendarCloseLine" aria-hidden="true">
                                          <path d="M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"></path>
                                          <path d="M21 15.5V6a2 2 0 0 0-2-2H9.5"></path>
                                          <path d="M16 2v4"></path>
                                          <path d="M3 10h7"></path>
                                          <path d="M21 10h-5.5"></path>
                                          <path d="m2 2 20 20"></path>
                                        </svg>
                                      </span>
                                      {"Absence rate"}
                                    </div>
                                    <div className="grid">
                                      <div className="col-start-1 flex flex-col gap-2.5 rf-cyc-0 row-start-1">
                                        <div className="flex gap-2 items-center">
                                          <span className="font-semibold leading-none tabular-nums text-[30px]">
                                            {"1.7%"}
                                          </span>
                                          <span className="bg-rose-50 dark:bg-rose-500/15 dark:text-rose-400 font-medium gap-0.5 inline-flex items-center px-1.5 py-0.5 rounded text-rose-600 text-xs">
                                            {"↘ -0.2"}
                                          </span>
                                        </div>
                                        <div className="h-12 w-full">
                                          <svg className="overflow-visible size-full" viewBox="0 0 132 40" preserveAspectRatio="none" aria-hidden="true">
                                            <path d="M0 22 L22 26 L44 20 L66 28 L88 22 L110 26 L132 24" fill="none" stroke="#e7000b" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="col-start-1 flex flex-col gap-2.5 rf-cyc-1 row-start-1">
                                        <div className="flex gap-2 items-center">
                                          <span className="font-semibold leading-none tabular-nums text-[30px]">
                                            {"1.6%"}
                                          </span>
                                          <span className="bg-rose-50 dark:bg-rose-500/15 dark:text-rose-400 font-medium gap-0.5 inline-flex items-center px-1.5 py-0.5 rounded text-rose-600 text-xs">
                                            {"↘ -0.4"}
                                          </span>
                                        </div>
                                        <div className="h-12 w-full">
                                          <svg className="overflow-visible size-full" viewBox="0 0 132 40" preserveAspectRatio="none" aria-hidden="true">
                                            <path d="M0 20 L26 28 L53 18 L79 26 L106 20 L132 30" fill="none" stroke="#e7000b" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="col-start-1 flex flex-col gap-2.5 rf-cyc-2 row-start-1">
                                        <div className="flex gap-2 items-center">
                                          <span className="font-semibold leading-none tabular-nums text-[30px]">
                                            {"1.5%"}
                                          </span>
                                          <span className="bg-rose-50 dark:bg-rose-500/15 dark:text-rose-400 font-medium gap-0.5 inline-flex items-center px-1.5 py-0.5 rounded text-rose-600 text-xs">
                                            {"↘ -0.6"}
                                          </span>
                                        </div>
                                        <div className="h-12 w-full">
                                          <svg className="overflow-visible size-full" viewBox="0 0 132 40" preserveAspectRatio="none" aria-hidden="true">
                                            <path d="M0 20 L18 26 L36 16 L54 30 L72 18 L90 28 L108 22 L132 32" fill="none" stroke="#e7000b" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-neutral-100/50 dark:bg-neutral-800/50 flex items-center justify-between pb-3 pt-5 px-5 text-sm">
                              <span className="dark:text-neutral-400 flex gap-1.5 items-center text-neutral-500">
                                <svg className="lucide lucide-circle-question-mark size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleHelpIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={10}></circle>
                                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                  <path d="M12 17h.01"></path>
                                </svg>
                                {"28 hires, 25 exits, now 198."}
                              </span>
                              <span className="dark:text-neutral-200 flex font-medium gap-1 items-center text-neutral-700">
                                {"View the directory"}
                                <svg className="lucide lucide-arrow-right size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                  <path d="m12 5 7 7-7 7"></path>
                                </svg>
                              </span>
                            </div>
                          </section>
                          <div className="flex-1 gap-4 grid grid-cols-[1fr_360px] items-start min-h-0">
                            <div className="bg-white border border-neutral-300 dark:bg-neutral-900 dark:border-neutral-800 flex flex-col overflow-hidden rounded-xl">
                              <div className="bg-neutral-100/50 dark:bg-neutral-800/50 flex items-center justify-between pb-6 pt-3 px-4">
                                <div className="flex gap-3 items-center text-sm">
                                  <span className="bg-white border border-neutral-300 dark:bg-neutral-800 dark:border-neutral-700 font-medium px-2.5 py-1 rounded-md">
                                    {"Today"}
                                  </span>
                                  <span className="bg-white border border-neutral-300 dark:bg-neutral-800 dark:border-neutral-700 flex gap-1 items-center px-2.5 py-1 rounded-md">
                                    {"Month"}
                                    <svg className="dark:text-neutral-400 lucide lucide-chevron-down size-3.5 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </span>
                                  <span className="dark:text-neutral-400 flex text-neutral-500">
                                    <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine" aria-hidden="true">
                                      <path d="m15 18-6-6 6-6"></path>
                                    </svg>
                                    <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                      <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                  </span>
                                  <span className="font-semibold ml-1">
                                    {"July 2026"}
                                  </span>
                                </div>
                                <span className="bg-white border border-neutral-300 dark:bg-neutral-800 dark:border-neutral-700 flex gap-1.5 items-center px-2.5 py-1 rounded-md text-sm">
                                  <span className="bg-amber-400 rounded-full size-2.5"></span>
                                  {"Streams"}
                                  <svg className="dark:text-neutral-400 lucide lucide-chevron-down size-3.5 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                    <path d="m6 9 6 6 6-6"></path>
                                  </svg>
                                </span>
                              </div>
                              <div className="-mt-3.5 bg-white border-neutral-300 border-t dark:bg-neutral-900 dark:border-neutral-800 flex flex-1 flex-col min-h-0 overflow-hidden pt-2.5 relative rounded-t-xl z-10">
                                <div className="border-b border-neutral-200 dark:border-neutral-800 dark:text-neutral-400 grid grid-cols-7 text-neutral-500 text-xs">
                                  <span className="px-2 py-1.5">
                                    {"Mon"}
                                  </span>
                                  <span className="px-2 py-1.5">
                                    {"Tue"}
                                  </span>
                                  <span className="px-2 py-1.5">
                                    {"Wed"}
                                  </span>
                                  <span className="px-2 py-1.5">
                                    {"Thu"}
                                  </span>
                                  <span className="px-2 py-1.5">
                                    {"Fri"}
                                  </span>
                                  <span className="px-2 py-1.5">
                                    {"Sat"}
                                  </span>
                                  <span className="px-2 py-1.5">
                                    {"Sun"}
                                  </span>
                                </div>
                                <div className="grid grid-cols-7 text-xs">
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-500 right-1.5 tabular-nums text-neutral-400">
                                      {"29"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-500 right-1.5 tabular-nums text-neutral-400">
                                      {"30"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"1"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"2"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="bg-amber-50 dark:bg-amber-500/15 dark:text-amber-300 flex font-medium gap-1 items-center mb-0.5 px-1 py-0.5 relative rf-evt-shimmer rounded text-[10px] text-amber-700" style={{"--rf-i": "0"}}>
                                      <span className="bg-amber-500 rounded-full shrink-0 size-1"></span>
                                      <span className="truncate">
                                        {"Aisha Rahman"}
                                      </span>
                                      <Avatar className="dark:ring-neutral-900 ml-auto ring-2 ring-white size-4" size="default">
                                        <AvatarImage alt="" width={48} height={48} loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </span>
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"3"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"4"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"5"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"6"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"7"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-0.5 flex items-center justify-center right-1 size-5">
                                      <span className="absolute bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 inset-0 rf-ping rounded-full text-white"></span>
                                      <span className="bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 flex font-semibold items-center justify-center relative rounded-full size-5 tabular-nums text-[11px] text-white">
                                        {"8"}
                                      </span>
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"9"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"10"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"11"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"12"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="bg-amber-50 dark:bg-amber-500/15 dark:text-amber-300 flex font-medium gap-1 items-center mb-0.5 px-1 py-0.5 relative rf-evt-shimmer rounded text-[10px] text-amber-700" style={{"--rf-i": "1"}}>
                                      <span className="bg-amber-500 rounded-full shrink-0 size-1"></span>
                                      <span className="truncate">
                                        {"Ingrid: leave"}
                                      </span>
                                      <Avatar className="dark:ring-neutral-900 ml-auto ring-2 ring-white size-4" size="default">
                                        <AvatarImage alt="" width={48} height={48} loading="lazy" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </span>
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"13"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"14"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="bg-emerald-50 dark:bg-emerald-500/15 dark:text-emerald-300 flex font-medium gap-1 items-center mb-0.5 px-1 py-0.5 relative rf-evt-shimmer rounded text-[10px] text-emerald-700" style={{"--rf-i": "2"}}>
                                      <span className="bg-emerald-500 rounded-full shrink-0 size-1"></span>
                                      <span className="truncate">
                                        {"Weekly 1:1"}
                                      </span>
                                      <Avatar className="dark:ring-neutral-900 ml-auto ring-2 ring-white size-4" size="default">
                                        <AvatarImage alt="" width={48} height={48} loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=48&h=48&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </span>
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"15"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"16"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"17"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"18"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"19"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="bg-emerald-50 dark:bg-emerald-500/15 dark:text-emerald-300 flex font-medium gap-1 items-center mb-0.5 px-1 py-0.5 relative rf-evt-shimmer rounded text-[10px] text-emerald-700" style={{"--rf-i": "3"}}>
                                      <span className="bg-emerald-500 rounded-full shrink-0 size-1"></span>
                                      <span className="truncate">
                                        {"Weekly sync"}
                                      </span>
                                      <Avatar className="dark:ring-neutral-900 ml-auto ring-2 ring-white size-4" size="default">
                                        <AvatarImage alt="" width={48} height={48} loading="lazy" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </span>
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"20"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="bg-emerald-50 dark:bg-emerald-500/15 dark:text-emerald-300 flex font-medium gap-1 items-center mb-0.5 px-1 py-0.5 relative rf-evt-shimmer rounded text-[10px] text-emerald-700" style={{"--rf-i": "4"}}>
                                      <span className="bg-emerald-500 rounded-full shrink-0 size-1"></span>
                                      <span className="truncate">
                                        {"Screening"}
                                      </span>
                                      <Avatar className="dark:ring-neutral-900 ml-auto ring-2 ring-white size-4" size="default">
                                        <AvatarImage alt="" width={48} height={48} loading="lazy" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=48&h=48&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </span>
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"21"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="bg-emerald-50 dark:bg-emerald-500/15 dark:text-emerald-300 flex font-medium gap-1 items-center mb-0.5 px-1 py-0.5 relative rf-evt-shimmer rounded text-[10px] text-emerald-700" style={{"--rf-i": "5"}}>
                                      <span className="bg-emerald-500 rounded-full shrink-0 size-1"></span>
                                      <span className="truncate">
                                        {"Weekly 1:1"}
                                      </span>
                                      <Avatar className="dark:ring-neutral-900 ml-auto ring-2 ring-white size-4" size="default">
                                        <AvatarImage alt="" width={48} height={48} loading="lazy" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=48&h=48&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </span>
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"22"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="bg-emerald-50 dark:bg-emerald-500/15 dark:text-emerald-300 flex font-medium gap-1 items-center mb-0.5 px-1 py-0.5 relative rf-evt-shimmer rounded text-[10px] text-emerald-700" style={{"--rf-i": "6"}}>
                                      <span className="bg-emerald-500 rounded-full shrink-0 size-1"></span>
                                      <span className="truncate">
                                        {"Panel: Sup."}
                                      </span>
                                      <Avatar className="dark:ring-neutral-900 ml-auto ring-2 ring-white size-4" size="default">
                                        <AvatarImage alt="" width={48} height={48} loading="lazy" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=48&h=48&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </span>
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"23"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"24"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"25"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"26"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="bg-emerald-50 dark:bg-emerald-500/15 dark:text-emerald-300 flex font-medium gap-1 items-center mb-0.5 px-1 py-0.5 relative rf-evt-shimmer rounded text-[10px] text-emerald-700" style={{"--rf-i": "7"}}>
                                      <span className="bg-emerald-500 rounded-full shrink-0 size-1"></span>
                                      <span className="truncate">
                                        {"Week 3 sync"}
                                      </span>
                                      <Avatar className="dark:ring-neutral-900 ml-auto ring-2 ring-white size-4" size="default">
                                        <AvatarImage alt="" width={48} height={48} loading="lazy" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </span>
                                    <span className="bg-amber-50 dark:bg-amber-500/15 dark:text-amber-300 flex font-medium gap-1 items-center mb-0.5 px-1 py-0.5 relative rf-evt-shimmer rounded text-[10px] text-amber-700" style={{"--rf-i": "12"}}>
                                      <span className="bg-amber-500 rounded-full shrink-0 size-1"></span>
                                      <span className="truncate">
                                        {"Marco: leave"}
                                      </span>
                                      <Avatar className="dark:ring-neutral-900 ml-auto ring-2 ring-white size-4" size="default">
                                        <AvatarImage alt="" width={48} height={48} loading="lazy" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=48&h=48&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </span>
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"27"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="bg-emerald-50 dark:bg-emerald-500/15 dark:text-emerald-300 flex font-medium gap-1 items-center mb-0.5 px-1 py-0.5 relative rf-evt-shimmer rounded text-[10px] text-emerald-700" style={{"--rf-i": "8"}}>
                                      <span className="bg-emerald-500 rounded-full shrink-0 size-1"></span>
                                      <span className="truncate">
                                        {"H2 calibration"}
                                      </span>
                                      <Avatar className="dark:ring-neutral-900 ml-auto ring-2 ring-white size-4" size="default">
                                        <AvatarImage alt="" width={48} height={48} loading="lazy" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=48&h=48&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </span>
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"28"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"29"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="bg-amber-50 dark:bg-amber-500/15 dark:text-amber-300 flex font-medium gap-1 items-center mb-0.5 px-1 py-0.5 relative rf-evt-shimmer rounded text-[10px] text-amber-700" style={{"--rf-i": "9"}}>
                                      <span className="bg-amber-500 rounded-full shrink-0 size-1"></span>
                                      <span className="truncate">
                                        {"Priya: leave"}
                                      </span>
                                      <Avatar className="dark:ring-neutral-900 ml-auto ring-2 ring-white size-4" size="default">
                                        <AvatarImage alt="" width={48} height={48} loading="lazy" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=48&h=48&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </span>
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"30"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-300 right-1.5 tabular-nums text-neutral-600">
                                      {"31"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-500 right-1.5 tabular-nums text-neutral-400">
                                      {"1"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-500 right-1.5 tabular-nums text-neutral-400">
                                      {"2"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="bg-emerald-50 dark:bg-emerald-500/15 dark:text-emerald-300 flex font-medium gap-1 items-center mb-0.5 px-1 py-0.5 relative rf-evt-shimmer rounded text-[10px] text-emerald-700" style={{"--rf-i": "10"}}>
                                      <span className="bg-emerald-500 rounded-full shrink-0 size-1"></span>
                                      <span className="truncate">
                                        {"First day: Jo"}
                                      </span>
                                      <Avatar className="dark:ring-neutral-900 ml-auto ring-2 ring-white size-4" size="default">
                                        <AvatarImage alt="" width={48} height={48} loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=48&h=48&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </span>
                                    <span className="absolute bottom-1 dark:text-neutral-500 right-1.5 tabular-nums text-neutral-400">
                                      {"3"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-500 right-1.5 tabular-nums text-neutral-400">
                                      {"4"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="bg-emerald-50 dark:bg-emerald-500/15 dark:text-emerald-300 flex font-medium gap-1 items-center mb-0.5 px-1 py-0.5 relative rf-evt-shimmer rounded text-[10px] text-emerald-700" style={{"--rf-i": "11"}}>
                                      <span className="bg-emerald-500 rounded-full shrink-0 size-1"></span>
                                      <span className="truncate">
                                        {"Screening"}
                                      </span>
                                      <Avatar className="dark:ring-neutral-900 ml-auto ring-2 ring-white size-4" size="default">
                                        <AvatarImage alt="" width={48} height={48} loading="lazy" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=48&h=48&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </span>
                                    <span className="absolute bottom-1 dark:text-neutral-500 right-1.5 tabular-nums text-neutral-400">
                                      {"5"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-500 right-1.5 tabular-nums text-neutral-400">
                                      {"6"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-500 right-1.5 tabular-nums text-neutral-400">
                                      {"7"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-500 right-1.5 tabular-nums text-neutral-400">
                                      {"8"}
                                    </span>
                                  </div>
                                  <div className="aspect-square border-b border-neutral-200 border-r dark:border-neutral-800 p-1 relative">
                                    <span className="absolute bottom-1 dark:text-neutral-500 right-1.5 tabular-nums text-neutral-400">
                                      {"9"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-4">
                              <div className="bg-white border border-neutral-300 dark:bg-neutral-900 dark:border-neutral-800 flex flex-col overflow-hidden rounded-xl">
                                <div className="bg-neutral-100/50 dark:bg-neutral-800/50 flex items-start justify-between pb-6 pt-4 px-4">
                                  <div>
                                    <h4 className="font-semibold text-sm">
                                      {"H2 review cycle"}
                                    </h4>
                                    <p className="dark:text-neutral-400 text-neutral-500 text-xs">
                                      {"Where reviews stand."}
                                    </p>
                                  </div>
                                  <span className="bg-white border border-neutral-300 dark:bg-neutral-800 dark:border-neutral-700 flex gap-1 items-center px-2 py-1 rounded-lg text-xs">
                                    {"All teams"}
                                    <svg className="dark:text-neutral-400 lucide lucide-chevrons-up-down size-3 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </span>
                                </div>
                                <div className="-mt-3.5 bg-white border-neutral-300 border-t dark:bg-neutral-900 dark:border-neutral-800 pb-4 pt-4 px-4 relative rounded-t-xl z-10">
                                  <div className="flex items-center justify-between text-sm">
                                    <span className="font-medium">
                                      {"Reviews complete"}
                                    </span>
                                    <span className="dark:text-neutral-300 tabular-nums text-neutral-600">
                                      {"9 / 21"}
                                    </span>
                                  </div>
                                  <div className="bg-neutral-100 h-1.5 mt-4 overflow-hidden rounded-full">
                                    <div className="bg-emerald-500 h-full overflow-hidden relative rounded-full w-[43%]">
                                      <span className="-left-1/3 absolute bg-white/55 inset-y-0 rf-sheen w-1/3"></span>
                                    </div>
                                  </div>
                                  <div className="gap-2 grid grid-cols-3 mt-6">
                                    <div className="bg-neutral-100/60 dark:bg-neutral-800/60 px-2 py-5 rounded-lg text-center">
                                      <div className="font-semibold tabular-nums text-lg" style={{color: "rgb(0, 166, 62)"}}>
                                        {"4"}
                                      </div>
                                      <div className="dark:text-neutral-300 leading-tight mt-0.5 text-[11px] text-neutral-600">
                                        {"Not started"}
                                      </div>
                                    </div>
                                    <div className="bg-neutral-100/60 dark:bg-neutral-800/60 px-2 py-5 rounded-lg text-center">
                                      <div className="font-semibold tabular-nums text-lg" style={{color: "rgb(225, 113, 0)"}}>
                                        {"4"}
                                      </div>
                                      <div className="dark:text-neutral-300 leading-tight mt-0.5 text-[11px] text-neutral-600">
                                        {"Self review"}
                                      </div>
                                    </div>
                                    <div className="bg-neutral-100/60 dark:bg-neutral-800/60 px-2 py-5 rounded-lg text-center">
                                      <div className="font-semibold tabular-nums text-lg" style={{color: "rgb(142, 81, 255)"}}>
                                        {"4"}
                                      </div>
                                      <div className="dark:text-neutral-300 leading-tight mt-0.5 text-[11px] text-neutral-600">
                                        {"Manager review"}
                                      </div>
                                    </div>
                                  </div>
                                  <p className="dark:text-neutral-400 mt-6 text-center text-neutral-500 text-xs">
                                    {"Cycle closes in"}
                                    <span className="dark:text-neutral-300 font-semibold text-neutral-600">
                                      {"32 days"}
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="bg-white border border-neutral-300 dark:bg-neutral-900 dark:border-neutral-800 flex flex-col overflow-hidden rounded-xl">
                                <div className="bg-neutral-100/50 dark:bg-neutral-800/50 flex items-start justify-between pb-6 pt-4 px-4">
                                  <div>
                                    <h4 className="font-semibold text-sm">
                                      {"Headcount"}
                                    </h4>
                                    <p className="dark:text-neutral-400 text-neutral-500 text-xs">
                                      {"Starters against leavers."}
                                    </p>
                                  </div>
                                  <svg className="dark:text-neutral-500 lucide lucide-info size-4 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                    <circle cx={12} cy={12} r={10}></circle>
                                    <path d="M12 16v-4"></path>
                                    <path d="M12 8h.01"></path>
                                  </svg>
                                </div>
                                <div className="-mt-3.5 bg-white border-neutral-300 border-t dark:bg-neutral-900 dark:border-neutral-800 flex flex-col pb-5 pt-2.5 px-4 relative rounded-t-xl z-10">
                                  <div className="flex gap-2 items-center">
                                    <span className="font-semibold tabular-nums text-2xl">
                                      {"198"}
                                    </span>
                                    <span className="dark:text-emerald-400 flex gap-1 items-center text-emerald-600 text-xs">
                                      {"↗ +3"}
                                    </span>
                                    <span className="dark:text-neutral-400 text-neutral-500 text-xs">
                                      {"net over 12M"}
                                    </span>
                                  </div>
                                  <div className="h-52 mt-4 relative">
                                    <svg className="size-full" viewBox="0 0 560 210" preserveAspectRatio="none" aria-hidden="true">
                                      <defs>
                                        <lineargradient className="dark:text-neutral-300 text-neutral-700" id="rf-head" x1={0} y1={0} x2={0} y2={1}>
                                          <stop offset="0%" stopColor="currentColor" stopOpacity={0.35}></stop>
                                          <stop offset="100%" stopColor="currentColor" stopOpacity={0.02}></stop>
                                        </lineargradient>
                                        <clippath id="rf-wipe">
                                          <rect className="rf-draw" x={0} y={0} width={560} height={210}></rect>
                                        </clippath>
                                      </defs>
                                      <g clipPath="url(#rf-wipe)">
                                        <path d="M0 150 C6.666666666666667 148 26.666666666666664 138 40 138 C53.333333333333336 138 66.66666666666667 153 80 150 C93.33333333333333 147 106.66666666666667 123 120 120 C133.33333333333334 117 146.66666666666666 136 160 132 C173.33333333333334 128 186.66666666666666 99.33333333333333 200 96 C213.33333333333334 92.66666666666667 226.66666666666666 103 240 112 C253.33333333333334 121 266.6666666666667 140.66666666666666 280 150 C293.3333333333333 159.33333333333334 306.6666666666667 168 320 168 C333.3333333333333 168 346.6666666666667 158 360 150 C373.3333333333333 142 386.6666666666667 129 400 120 C413.3333333333333 111 426.6666666666667 104 440 96 C453.3333333333333 88 466.6666666666667 73 480 72 C493.3333333333333 71 506.6666666666667 94 520 90 C533.3333333333334 86 553.3333333333334 55 560 48 L560 210 L0 210 Z" fill="url(#rf-head)"></path>
                                        <path className="dark:stroke-neutral-300 stroke-neutral-800" d="M0 150 C6.666666666666667 148 26.666666666666664 138 40 138 C53.333333333333336 138 66.66666666666667 153 80 150 C93.33333333333333 147 106.66666666666667 123 120 120 C133.33333333333334 117 146.66666666666666 136 160 132 C173.33333333333334 128 186.66666666666666 99.33333333333333 200 96 C213.33333333333334 92.66666666666667 226.66666666666666 103 240 112 C253.33333333333334 121 266.6666666666667 140.66666666666666 280 150 C293.3333333333333 159.33333333333334 306.6666666666667 168 320 168 C333.3333333333333 168 346.6666666666667 158 360 150 C373.3333333333333 142 386.6666666666667 129 400 120 C413.3333333333333 111 426.6666666666667 104 440 96 C453.3333333333333 88 466.6666666666667 73 480 72 C493.3333333333333 71 506.6666666666667 94 520 90 C533.3333333333334 86 553.3333333333334 55 560 48" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                      </g>
                                    </svg>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" style={{left: "0%", top: "71.4286%"}}>
                                      <span className="bg-white block border-2 border-neutral-800 dark:bg-neutral-900 dark:border-neutral-300 rf-dot-land rounded-full size-2.5" style={{"--rf-d": "0"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" style={{left: "7.14286%", top: "65.7143%"}}>
                                      <span className="bg-white block border-2 border-neutral-800 dark:bg-neutral-900 dark:border-neutral-300 rf-dot-land rounded-full size-2.5" style={{"--rf-d": "1"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" style={{left: "14.2857%", top: "71.4286%"}}>
                                      <span className="bg-white block border-2 border-neutral-800 dark:bg-neutral-900 dark:border-neutral-300 rf-dot-land rounded-full size-2.5" style={{"--rf-d": "2"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" style={{left: "21.4286%", top: "57.1429%"}}>
                                      <span className="bg-white block border-2 border-neutral-800 dark:bg-neutral-900 dark:border-neutral-300 rf-dot-land rounded-full size-2.5" style={{"--rf-d": "3"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" style={{left: "28.5714%", top: "62.8571%"}}>
                                      <span className="bg-white block border-2 border-neutral-800 dark:bg-neutral-900 dark:border-neutral-300 rf-dot-land rounded-full size-2.5" style={{"--rf-d": "4"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" style={{left: "35.7143%", top: "45.7143%"}}>
                                      <span className="bg-white block border-2 border-neutral-800 dark:bg-neutral-900 dark:border-neutral-300 rf-dot-land rounded-full size-2.5" style={{"--rf-d": "5"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" style={{left: "42.8571%", top: "53.3333%"}}>
                                      <span className="bg-white block border-2 border-neutral-800 dark:bg-neutral-900 dark:border-neutral-300 rf-dot-land rounded-full size-2.5" style={{"--rf-d": "6"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" style={{left: "50%", top: "71.4286%"}}>
                                      <span className="bg-white block border-2 border-neutral-800 dark:bg-neutral-900 dark:border-neutral-300 rf-dot-land rounded-full size-2.5" style={{"--rf-d": "7"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" style={{left: "57.1429%", top: "80%"}}>
                                      <span className="bg-white block border-2 border-neutral-800 dark:bg-neutral-900 dark:border-neutral-300 rf-dot-land rounded-full size-2.5" style={{"--rf-d": "8"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" style={{left: "64.2857%", top: "71.4286%"}}>
                                      <span className="bg-white block border-2 border-neutral-800 dark:bg-neutral-900 dark:border-neutral-300 rf-dot-land rounded-full size-2.5" style={{"--rf-d": "9"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" style={{left: "71.4286%", top: "57.1429%"}}>
                                      <span className="bg-white block border-2 border-neutral-800 dark:bg-neutral-900 dark:border-neutral-300 rf-dot-land rounded-full size-2.5" style={{"--rf-d": "10"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" style={{left: "78.5714%", top: "45.7143%"}}>
                                      <span className="bg-white block border-2 border-neutral-800 dark:bg-neutral-900 dark:border-neutral-300 rf-dot-land rounded-full size-2.5" style={{"--rf-d": "11"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" style={{left: "85.7143%", top: "34.2857%"}}>
                                      <span className="bg-white block border-2 border-neutral-800 dark:bg-neutral-900 dark:border-neutral-300 rf-dot-land rounded-full size-2.5" style={{"--rf-d": "12"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" style={{left: "92.8571%", top: "42.8571%"}}>
                                      <span className="bg-white block border-2 border-neutral-800 dark:bg-neutral-900 dark:border-neutral-300 rf-dot-land rounded-full size-2.5" style={{"--rf-d": "13"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" style={{left: "100%", top: "22.8571%"}}>
                                      <span className="bg-white block border-2 border-neutral-800 dark:bg-neutral-900 dark:border-neutral-300 rf-dot-land rounded-full size-2.5" style={{"--rf-d": "14"}}></span>
                                    </span>
                                  </div>
                                  <div className="bg-neutral-100 dark:bg-neutral-800 flex font-medium gap-1 items-center mt-5 p-1 rounded-lg text-xs">
                                    <span className="dark:text-neutral-300 flex-1 px-2 py-1 rounded-md text-center text-neutral-600">
                                      {"3M"}
                                    </span>
                                    <span className="dark:text-neutral-300 flex-1 px-2 py-1 rounded-md text-center text-neutral-600">
                                      {"6M"}
                                    </span>
                                    <span className="bg-white dark:bg-neutral-700 dark:shadow-none flex-1 px-2 py-1 rounded-md shadow-sm text-center">
                                      {"12M"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </main>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
