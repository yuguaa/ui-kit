import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Kbd } from "@/registry/bases/base/ui/kbd"
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="w-full">
      <section className="2xl:px-20 bg-background lg:px-8 px-4 py-12 sm:px-6 text-foreground w-full" aria-labelledby="how-it-works-5-title">
        <div className="@container flex flex-col gap-8 max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-6 items-center">
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-7 min-w-6 outline-none px-2 py-0.75 relative rounded-full text-sm transition-shadow">
              {"How It Works"}
            </Badge>
            <h2 className="@2xl:text-4xl font-semibold text-3xl text-balance text-center text-foreground tracking-tight" id="how-it-works-5-title">
              {"From Idea to UI"}
            </h2>
            <p className="leading-5 max-w-[40rem] text-center text-muted-foreground text-pretty text-sm">
              {"Pick the right pieces, add them with the shadcn CLI, fit them to your app, and ship with less guesswork from the first step onward."}
            </p>
          </div>
          <Card className="gap-0 overflow-hidden p-0 ring-0 shadow-none w-full" size="default">
            <Tabs className="@5xl:flex-row @5xl:items-stretch flex-col gap-0 w-full" data-orientation="vertical" activationDirection="none">
              <TabsList className="@5xl:flex-[7] @5xl:rounded-bl-[calc(var(--radius)+4px)] @5xl:rounded-tr-none border border-border flex flex-col gap-0 h-auto! items-stretch min-w-0 p-0! rounded-t-[calc(var(--radius)+4px)] w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                <TabsTrigger className="after:hidden border-0 border-border cursor-pointer dark:data-active:border-border! data-active:bg-muted/30! flex-col gap-2 h-auto! items-start justify-start not-data-active:hover:bg-muted/15! not-last:border-b p-6 rounded-none text-foreground text-start whitespace-normal" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_0_" data-active="" compositeItemActive="" aria-controls="base-ui-_r_8_" extracted="1">
                  <IconTile className="shadow-2xs" variant="outline" size="sm">
                    <span className="font-medium leading-6 tabular-nums text-base text-foreground">
                      {"1"}
                    </span>
                  </IconTile>
                  <span className="font-medium leading-6 text-base text-foreground">
                    {"Design with ready-made blocks"}
                  </span>
                  <span className="font-normal leading-5 text-muted-foreground text-pretty text-sm">
                    {"A curated shadcn registry with polished components, blocks, templates, MCP tools, and Agent Skills for building modern interfaces with developers and AI agents."}
                  </span>
                </TabsTrigger>
                <TabsTrigger className="after:hidden border-0 border-border cursor-pointer dark:data-active:border-border! data-active:bg-muted/30! flex-col gap-2 h-auto! items-start justify-start not-data-active:hover:bg-muted/15! not-last:border-b p-6 rounded-none text-foreground text-start whitespace-normal" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_1_">
                  <IconTile className="shadow-2xs" variant="outline" size="sm">
                    <span className="font-medium leading-6 tabular-nums text-base text-foreground">
                      {"2"}
                    </span>
                  </IconTile>
                  <span className="font-medium leading-6 text-base text-foreground">
                    {"Build with MCP workflows"}
                  </span>
                  <span className="font-normal leading-5 text-muted-foreground text-pretty text-sm">
                    {"Connect agents to the NeUI registry to discover, install, and adapt components directly inside your development workflow."}
                  </span>
                </TabsTrigger>
                <TabsTrigger className="after:hidden border-0 border-border cursor-pointer dark:data-active:border-border! data-active:bg-muted/30! flex-col gap-2 h-auto! items-start justify-start not-data-active:hover:bg-muted/15! not-last:border-b p-6 rounded-none text-foreground text-start whitespace-normal" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_2_">
                  <IconTile className="shadow-2xs" variant="outline" size="sm">
                    <span className="font-medium leading-6 tabular-nums text-base text-foreground">
                      {"3"}
                    </span>
                  </IconTile>
                  <span className="font-medium leading-6 text-base text-foreground">
                    {"Ship with Agent Skills"}
                  </span>
                  <span className="font-normal leading-5 text-muted-foreground text-pretty text-sm">
                    {"Give AI agents structured guidance for using NeUI components, patterns, and blocks with more consistent output."}
                  </span>
                </TabsTrigger>
              </TabsList>
              <div className="@5xl:flex-[9] @container aspect-[4/3] min-w-0 overflow-clip relative">
                <img className="absolute inset-0 max-w-none object-cover pointer-events-none rotate-180 size-full" alt="" aria-hidden="true" width={1600} height={1067} loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1733723518099-988dcbc2dc44?q=80&w=1600&auto=format&fit=crop" />
                <div className="absolute inset-[4.25cqw]">
                  <div className="bg-white/25 dark:bg-white/15 p-[1.25cqw] rounded-xl size-full">
                    <div className="[container-type:size] overflow-hidden rounded-lg size-full">
                      <TabsContent className="size-full" data-orientation="horizontal" activationDirection="none" aria-labelledby="base-ui-_r_0_" id="base-ui-_r_8_" role="tabpanel" tabIndex={-1} index="0">
                        <div className="overflow-hidden relative size-full">
                          <div className="absolute left-0 origin-top-left top-0 w-[1400px]" style={{height: "calc((100cqh / 100cqw) * 1400px)", transform: "scale(calc(100cqw / 1400px))"}}>
                            <Card className="[--card-spacing:0px] bg-white border-0 dark:bg-slate-900 dark:ring-white/10 dark:text-slate-50 gap-0 overflow-hidden ring-slate-900/10 shadow-2xl size-full text-slate-900" size="default" role="img" aria-label="Acme production console showing revenue, channel mix and the order queue">
                              <style dangerouslySetInnerHTML={{ __html: "\n/* Each loop settles early then holds, so the shot reads as a console that just\n   refreshed rather than a banner mid-cycle. */\n@keyframes hiw5-grow {\n  0% { transform: scaleY(0.34) }\n  38%, 100% { transform: scaleY(1) }\n}\n@keyframes hiw5-rise {\n  0% { opacity: 0.45; transform: translateY(3px) }\n  14%, 100% { opacity: 1; transform: translateY(0) }\n}\n@keyframes hiw5-fill {\n  0% { transform: scaleX(0.12) }\n  40%, 100% { transform: scaleX(1) }\n}\n@keyframes hiw5-live {\n  0%, 100% { opacity: 0 }\n  26%, 58% { opacity: 0.07 }\n}\n@keyframes hiw5-scan {\n  0% { opacity: 0; transform: translateX(0) }\n  12%, 72% { opacity: 1 }\n  100% { opacity: 0; transform: translateX(351px) }\n}\n@keyframes hiw5-blink {\n  0%, 100% { opacity: 1 }\n  50% { opacity: 0.45 }\n}\n\n/* Set `--hiw5-delay` per element to stagger siblings; keep it a custom property,\n   because an inline `animation` shorthand would outrank the reduced-motion rule. */\n.hiw5-grow,\n.hiw5-rise,\n.hiw5-track [data-slot=\"progress-indicator\"] {\n  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);\n  animation-iteration-count: infinite;\n  animation-fill-mode: both;\n  animation-delay: var(--hiw5-delay, 0s);\n}\n\n.hiw5-grow { animation-name: hiw5-grow; animation-duration: 11.3s; }\n.hiw5-rise { animation-name: hiw5-rise; animation-duration: 13.7s; }\n\n/* The primitive owns the indicator node, so the fill is reached through its\n   data-slot instead of a class on the element itself. */\n.hiw5-track [data-slot=\"progress-indicator\"] {\n  transform-origin: left center;\n  animation-name: hiw5-fill;\n  animation-duration: 10.1s;\n}\n\n.hiw5-blink {\n  animation: hiw5-blink 3.7s ease-in-out var(--hiw5-delay, 0s) infinite;\n}\n\n.hiw5-scan {\n  opacity: 0;\n  animation: hiw5-scan 15.5s linear var(--hiw5-delay, -5.5s) infinite;\n}\n\n.hiw5-live > td { position: relative; }\n.hiw5-live > td::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  opacity: 0;\n  background: var(--color-sky-500);\n  /* Custom properties inherit into pseudo-elements, which is the only way to\n     stagger a highlight that has no element of its own. */\n  animation: hiw5-live 9.7s ease-in-out var(--hiw5-delay, 0s) infinite;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .hiw5-grow,\n  .hiw5-rise,\n  .hiw5-blink,\n  .hiw5-scan,\n  .hiw5-track [data-slot=\"progress-indicator\"],\n  .hiw5-live > td::after {\n    animation: none;\n  }\n  .hiw5-scan,\n  .hiw5-live > td::after {\n    opacity: 0;\n  }\n}\n" }} />
                              <div className="border-b border-slate-200 dark:border-slate-800 flex gap-2 h-10 items-center px-2.5 shrink-0">
                                <IconTile className="[--icon-tile-icon-size:--spacing(4)]! [--icon-tile-size:--spacing(7)]! bg-slate-900 dark:bg-slate-100 dark:text-slate-900 text-white" variant="solid" size="xs">
                                  <svg className="lucide lucide-layers" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                                    <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                                    <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                                    <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                                  </svg>
                                </IconTile>
                                <div className="dark:text-slate-200 flex font-medium gap-1.5 items-center min-w-0 text-slate-700 text-sm">
                                  <span className="bg-violet-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Acme Inc"}
                                  </span>
                                  <svg className="dark:text-slate-500 lucide lucide-chevrons-up-down shrink-0 size-4 text-slate-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                  <span className="dark:text-slate-600 text-slate-300" aria-hidden="true">
                                    {"/"}
                                  </span>
                                  <span className="truncate">
                                    {"Web App"}
                                  </span>
                                  <span className="dark:text-slate-600 text-slate-300" aria-hidden="true">
                                    {"/"}
                                  </span>
                                  <span className="truncate">
                                    {"Production"}
                                  </span>
                                  <svg className="dark:text-slate-500 lucide lucide-chevrons-up-down shrink-0 size-4 text-slate-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </div>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-5 ms-auto outline-none px-2 py-0.5 relative rounded-full text-slate-700 text-xs transition-shadow">
                                  <svg className="dark:text-rose-400 hiw5-blink lucide lucide-activity size-4 text-rose-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                                  </svg>
                                  {"System"}
                                  <span className="dark:text-rose-400 text-rose-500">
                                    {"Alert"}
                                  </span>
                                </Badge>
                              </div>
                              <div className="flex flex-1 items-stretch min-h-0 min-w-0">
                                <div className="border-r border-slate-200 dark:border-slate-800 flex flex-col gap-2 p-2 shrink-0 w-54">
                                  <Item className="bg-white border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-500 gap-2 px-2 py-1.5 text-slate-400 text-sm" variant="outline" size="xs">
                                    <svg className="lucide lucide-search shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                                      <path d="m21 21-4.34-4.34"></path>
                                      <circle cx={11} cy={11} r={8}></circle>
                                    </svg>
                                    <span className="truncate">
                                      {"Search..."}
                                    </span>
                                    <Kbd className="bg-slate-100 dark:bg-slate-800 dark:text-slate-500 h-5 min-w-5 ms-auto px-1.5 text-slate-400 text-xs">
                                      {"⌘K"}
                                    </Kbd>
                                  </Item>
                                  <div className="dark:text-slate-500 font-medium pt-1.5 px-2 text-slate-400 text-xs">
                                    {"Platform"}
                                  </div>
                                  <div className="flex flex-col gap-0.5">
                                    <div className="contents">
                                      <Item className="bg-slate-100 border-transparent dark:bg-slate-800 dark:text-slate-50 font-medium gap-2 px-2 py-1.5 text-slate-900 text-sm" variant="default" size="xs">
                                        <svg className="lucide lucide-layout-grid shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayoutGridIcon" tabler="IconLayoutGrid" hugeicons="GridViewIcon" phosphor="SquaresFourIcon" remixicon="RiGalleryView2" aria-hidden="true">
                                          <rect width={7} height={7} x={3} y={3} rx={1}></rect>
                                          <rect width={7} height={7} x={14} y={3} rx={1}></rect>
                                          <rect width={7} height={7} x={14} y={14} rx={1}></rect>
                                          <rect width={7} height={7} x={3} y={14} rx={1}></rect>
                                        </svg>
                                        <span className="truncate">
                                          {"Overview"}
                                        </span>
                                      </Item>
                                    </div>
                                    <div className="contents">
                                      <Item className="border-transparent dark:text-slate-300 gap-2 px-2 py-1.5 text-slate-600 text-sm" variant="default" size="xs">
                                        <svg className="lucide lucide-users shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                          <circle cx={9} cy={7} r={4}></circle>
                                        </svg>
                                        <span className="truncate">
                                          {"Users"}
                                        </span>
                                        <svg className="dark:text-slate-500 lucide lucide-chevron-down ms-auto shrink-0 size-4 text-slate-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                          <path d="m6 9 6 6 6-6"></path>
                                        </svg>
                                      </Item>
                                      <Item className="border-transparent dark:text-slate-400 pe-2 ps-8 py-1.5 text-slate-500 text-sm" variant="default" size="xs">
                                        <span className="truncate">
                                          {"All Users"}
                                        </span>
                                      </Item>
                                      <Item className="border-transparent dark:text-slate-400 pe-2 ps-8 py-1.5 text-slate-500 text-sm" variant="default" size="xs">
                                        <span className="truncate">
                                          {"Invitations"}
                                        </span>
                                      </Item>
                                      <Item className="bg-slate-100 border-transparent dark:bg-slate-800 dark:text-slate-50 pe-2 ps-8 py-1.5 text-slate-900 text-sm" variant="default" size="xs">
                                        <span className="truncate">
                                          {"Roles"}
                                        </span>
                                      </Item>
                                    </div>
                                    <div className="contents">
                                      <Item className="border-transparent dark:text-slate-300 gap-2 px-2 py-1.5 text-slate-600 text-sm" variant="default" size="xs">
                                        <svg className="lucide lucide-building-2 lucide-building2 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Building2Icon" tabler="IconBuilding" hugeicons="Building02Icon" phosphor="BuildingsIcon" remixicon="RiBuildingLine" aria-hidden="true">
                                          <path d="M10 12h4"></path>
                                          <path d="M10 8h4"></path>
                                          <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                                          <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                                          <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                                        </svg>
                                        <span className="truncate">
                                          {"Organizations"}
                                        </span>
                                        <svg className="dark:text-slate-600 lucide lucide-chevron-right ms-auto shrink-0 size-4 text-slate-300" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                          <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                      </Item>
                                    </div>
                                    <div className="contents">
                                      <Item className="border-transparent dark:text-slate-300 gap-2 px-2 py-1.5 text-slate-600 text-sm" variant="default" size="xs">
                                        <svg className="lucide lucide-shield-check shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                          <path d="m9 12 2 2 4-4"></path>
                                        </svg>
                                        <span className="truncate">
                                          {"Security"}
                                        </span>
                                        <svg className="dark:text-slate-600 lucide lucide-chevron-right ms-auto shrink-0 size-4 text-slate-300" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                          <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                      </Item>
                                    </div>
                                    <div className="contents">
                                      <Item className="border-transparent dark:text-slate-300 gap-2 px-2 py-1.5 text-slate-600 text-sm" variant="default" size="xs">
                                        <svg className="lucide lucide-webhook shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="WebhookIcon" tabler="IconWebhook" hugeicons="WebhookIcon" phosphor="WebhooksLogoIcon" remixicon="RiWebhookLine" aria-hidden="true">
                                          <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                                          <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                                          <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                                        </svg>
                                        <span className="truncate">
                                          {"Webhooks"}
                                        </span>
                                      </Item>
                                    </div>
                                    <div className="contents">
                                      <Item className="border-transparent dark:text-slate-300 gap-2 px-2 py-1.5 text-slate-600 text-sm" variant="default" size="xs">
                                        <svg className="lucide lucide-key-round shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                                          <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                                          <circle cx={16.5} cy={7.5} r=".5" fill="currentColor"></circle>
                                        </svg>
                                        <span className="truncate">
                                          {"API Keys"}
                                        </span>
                                      </Item>
                                    </div>
                                  </div>
                                  <Card className="[--card-spacing:--spacing(2)] bg-white border-0 dark:bg-slate-900 dark:ring-white/10 dark:text-slate-50 gap-1.5 mt-auto ring-slate-900/8 text-slate-900" size="sm">
                                    <CardContent className="flex flex-col gap-1.5">
                                      <span className="dark:text-slate-100 font-medium leading-none text-slate-800 text-sm">
                                        {"Multi-theme Support"}
                                      </span>
                                      <span className="dark:text-slate-500 leading-tight text-slate-400 text-xs">
                                        {"Switch between eight NeUI styles."}
                                      </span>
                                      <svg className="h-10 w-full" viewBox="0 0 96 34" preserveAspectRatio="none" aria-hidden="true">
                                        <defs>
                                          <lineargradient id="_r_9_-sky" x1={0} y1={0} x2={1} y2={1}>
                                            <stop className="text-violet-400" offset="0%" stopColor="currentColor"></stop>
                                            <stop className="text-sky-400" offset="55%" stopColor="currentColor"></stop>
                                            <stop className="text-fuchsia-400" offset="100%" stopColor="currentColor"></stop>
                                          </lineargradient>
                                          <lineargradient id="_r_9_-wave" x1={0} y1={0} x2={0} y2={1}>
                                            <stop offset="0%" stopColor="white" stopOpacity={0.55}></stop>
                                            <stop offset="100%" stopColor="white" stopOpacity={0.05}></stop>
                                          </lineargradient>
                                        </defs>
                                        <rect width={96} height={34} fill="url(#_r_9_-sky)"></rect>
                                        <path d="M0 26 C 18 26 26 12 48 12 C 70 12 78 22 96 22 L96 34 L0 34 Z" fill="url(#_r_9_-wave)"></path>
                                      </svg>
                                    </CardContent>
                                  </Card>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-950 flex flex-1 flex-col gap-4 min-w-0 p-4">
                                  <div className="gap-2.5 grid grid-cols-4">
                                    <Card className="[--card-spacing:--spacing(2.5)] bg-white border-0 dark:bg-slate-900 dark:ring-white/10 dark:text-slate-50 ring-slate-900/8 text-slate-900" size="sm" style={{"--hiw5-delay": "0s"}}>
                                      <CardContent className="flex flex-col gap-1.5">
                                        <div className="flex gap-1.5 items-start justify-between">
                                          <IconTile className="[--icon-tile-icon-size:--spacing(4)]! [--icon-tile-size:--spacing(7)]! dark:text-slate-400 text-slate-500" variant="soft" size="xs">
                                            <svg className="lucide lucide-circle-dollar-sign" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                                              <circle cx={12} cy={12} r={10}></circle>
                                              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                              <path d="M12 18V6"></path>
                                            </svg>
                                          </IconTile>
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-emerald-50 border border-emerald-200 dark:bg-emerald-500/15 dark:border-emerald-500/25 dark:text-emerald-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.5 py-0.5 relative rounded-full text-emerald-700 text-xs transition-shadow">
                                            <svg className="lucide lucide-trending-up size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                              <path d="M16 7h6v6"></path>
                                              <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                            </svg>
                                            {"+12.8%"}
                                          </Badge>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                          <span className="dark:text-slate-200 font-medium leading-none text-slate-700 text-sm truncate">
                                            {"Net Revenue"}
                                          </span>
                                          <span className="dark:text-slate-500 leading-none text-slate-400 text-xs truncate">
                                            {"12.8% above plan"}
                                          </span>
                                        </div>
                                        <div className="flex gap-1.5 items-end justify-between">
                                          <span className="dark:text-slate-50 font-semibold hiw5-rise leading-none tabular-nums text-2xl text-slate-900 tracking-tight">
                                            {"$128,420"}
                                          </span>
                                          <span className="flex gap-0.5 h-7 items-end shrink-0" aria-hidden="true">
                                            <span className="bg-emerald-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "34%", "--hiw5-delay": "0s"}}></span>
                                            <span className="bg-emerald-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "44%", "--hiw5-delay": "-0.09s"}}></span>
                                            <span className="bg-emerald-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "39%", "--hiw5-delay": "-0.18s"}}></span>
                                            <span className="bg-emerald-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "52%", "--hiw5-delay": "-0.27s"}}></span>
                                            <span className="bg-emerald-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "47%", "--hiw5-delay": "-0.36s"}}></span>
                                            <span className="bg-emerald-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "60%", "--hiw5-delay": "-0.44999999999999996s"}}></span>
                                            <span className="bg-emerald-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "55%", "--hiw5-delay": "-0.54s"}}></span>
                                            <span className="bg-emerald-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "68%", "--hiw5-delay": "-0.63s"}}></span>
                                            <span className="bg-emerald-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "63%", "--hiw5-delay": "-0.72s"}}></span>
                                            <span className="bg-emerald-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "79%", "--hiw5-delay": "-0.8099999999999999s"}}></span>
                                            <span className="bg-emerald-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "86%", "--hiw5-delay": "-0.8999999999999999s"}}></span>
                                            <span className="bg-emerald-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "96%", "--hiw5-delay": "-0.99s"}}></span>
                                          </span>
                                        </div>
                                      </CardContent>
                                    </Card>
                                    <Card className="[--card-spacing:--spacing(2.5)] bg-white border-0 dark:bg-slate-900 dark:ring-white/10 dark:text-slate-50 ring-slate-900/8 text-slate-900" size="sm" style={{"--hiw5-delay": "-1.9s"}}>
                                      <CardContent className="flex flex-col gap-1.5">
                                        <div className="flex gap-1.5 items-start justify-between">
                                          <IconTile className="[--icon-tile-icon-size:--spacing(4)]! [--icon-tile-size:--spacing(7)]! dark:text-slate-400 text-slate-500" variant="soft" size="xs">
                                            <svg className="lucide lucide-package" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                              <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                              <path d="M12 22V12"></path>
                                              <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                              <path d="m7.5 4.27 9 5.15"></path>
                                            </svg>
                                          </IconTile>
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-emerald-50 border border-emerald-200 dark:bg-emerald-500/15 dark:border-emerald-500/25 dark:text-emerald-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.5 py-0.5 relative rounded-full text-emerald-700 text-xs transition-shadow">
                                            <svg className="lucide lucide-trending-up size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                              <path d="M16 7h6v6"></path>
                                              <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                            </svg>
                                            {"+9.4%"}
                                          </Badge>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                          <span className="dark:text-slate-200 font-medium leading-none text-slate-700 text-sm truncate">
                                            {"Units Moved"}
                                          </span>
                                          <span className="dark:text-slate-500 leading-none text-slate-400 text-xs truncate">
                                            {"84% of monthly goal"}
                                          </span>
                                        </div>
                                        <div className="flex gap-1.5 items-end justify-between">
                                          <span className="dark:text-slate-50 font-semibold hiw5-rise leading-none tabular-nums text-2xl text-slate-900 tracking-tight">
                                            {"4,892"}
                                          </span>
                                          <span className="flex gap-0.5 h-7 items-end shrink-0" aria-hidden="true">
                                            <span className="bg-violet-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "42%", "--hiw5-delay": "-1.9s"}}></span>
                                            <span className="bg-violet-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "38%", "--hiw5-delay": "-1.99s"}}></span>
                                            <span className="bg-violet-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "50%", "--hiw5-delay": "-2.08s"}}></span>
                                            <span className="bg-violet-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "46%", "--hiw5-delay": "-2.17s"}}></span>
                                            <span className="bg-violet-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "58%", "--hiw5-delay": "-2.26s"}}></span>
                                            <span className="bg-violet-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "53%", "--hiw5-delay": "-2.3499999999999996s"}}></span>
                                            <span className="bg-violet-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "66%", "--hiw5-delay": "-2.44s"}}></span>
                                            <span className="bg-violet-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "61%", "--hiw5-delay": "-2.53s"}}></span>
                                            <span className="bg-violet-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "74%", "--hiw5-delay": "-2.62s"}}></span>
                                            <span className="bg-violet-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "70%", "--hiw5-delay": "-2.71s"}}></span>
                                            <span className="bg-violet-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "82%", "--hiw5-delay": "-2.8s"}}></span>
                                            <span className="bg-violet-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "90%", "--hiw5-delay": "-2.8899999999999997s"}}></span>
                                          </span>
                                        </div>
                                      </CardContent>
                                    </Card>
                                    <Card className="[--card-spacing:--spacing(2.5)] bg-white border-0 dark:bg-slate-900 dark:ring-white/10 dark:text-slate-50 ring-slate-900/8 text-slate-900" size="sm" style={{"--hiw5-delay": "-3.8s"}}>
                                      <CardContent className="flex flex-col gap-1.5">
                                        <div className="flex gap-1.5 items-start justify-between">
                                          <IconTile className="[--icon-tile-icon-size:--spacing(4)]! [--icon-tile-size:--spacing(7)]! dark:text-slate-400 text-slate-500" variant="soft" size="xs">
                                            <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                              <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                              <circle cx={9} cy={7} r={4}></circle>
                                            </svg>
                                          </IconTile>
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-emerald-50 border border-emerald-200 dark:bg-emerald-500/15 dark:border-emerald-500/25 dark:text-emerald-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.5 py-0.5 relative rounded-full text-emerald-700 text-xs transition-shadow">
                                            <svg className="lucide lucide-trending-up size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                              <path d="M16 7h6v6"></path>
                                              <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                            </svg>
                                            {"+18.6%"}
                                          </Badge>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                          <span className="dark:text-slate-200 font-medium leading-none text-slate-700 text-sm truncate">
                                            {"New Buyers"}
                                          </span>
                                          <span className="dark:text-slate-500 leading-none text-slate-400 text-xs truncate">
                                            {"188 via referral"}
                                          </span>
                                        </div>
                                        <div className="flex gap-1.5 items-end justify-between">
                                          <span className="dark:text-slate-50 font-semibold hiw5-rise leading-none tabular-nums text-2xl text-slate-900 tracking-tight">
                                            {"642"}
                                          </span>
                                          <span className="flex gap-0.5 h-7 items-end shrink-0" aria-hidden="true">
                                            <span className="bg-sky-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "28%", "--hiw5-delay": "-3.8s"}}></span>
                                            <span className="bg-sky-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "36%", "--hiw5-delay": "-3.8899999999999997s"}}></span>
                                            <span className="bg-sky-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "33%", "--hiw5-delay": "-3.98s"}}></span>
                                            <span className="bg-sky-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "45%", "--hiw5-delay": "-4.07s"}}></span>
                                            <span className="bg-sky-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "40%", "--hiw5-delay": "-4.16s"}}></span>
                                            <span className="bg-sky-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "54%", "--hiw5-delay": "-4.25s"}}></span>
                                            <span className="bg-sky-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "49%", "--hiw5-delay": "-4.34s"}}></span>
                                            <span className="bg-sky-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "63%", "--hiw5-delay": "-4.43s"}}></span>
                                            <span className="bg-sky-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "58%", "--hiw5-delay": "-4.52s"}}></span>
                                            <span className="bg-sky-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "72%", "--hiw5-delay": "-4.609999999999999s"}}></span>
                                            <span className="bg-sky-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "80%", "--hiw5-delay": "-4.699999999999999s"}}></span>
                                            <span className="bg-sky-500/70 hiw5-grow origin-bottom rounded-full w-1" style={{height: "88%", "--hiw5-delay": "-4.79s"}}></span>
                                          </span>
                                        </div>
                                      </CardContent>
                                    </Card>
                                    <Card className="[--card-spacing:--spacing(2.5)] bg-white border-0 dark:bg-slate-900 dark:ring-white/10 dark:text-slate-50 ring-slate-900/8 text-slate-900" size="sm" style={{"--hiw5-delay": "-5.699999999999999s"}}>
                                      <CardContent className="flex flex-col gap-1.5">
                                        <div className="flex gap-1.5 items-start justify-between">
                                          <IconTile className="[--icon-tile-icon-size:--spacing(4)]! [--icon-tile-size:--spacing(7)]! dark:text-slate-400 text-slate-500" variant="soft" size="xs">
                                            <svg className="lucide lucide-shopping-cart" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingCartIcon" tabler="IconShoppingCart" hugeicons="ShoppingCart01Icon" phosphor="ShoppingCartIcon" remixicon="RiShoppingCartLine" aria-hidden="true">
                                              <circle cx={8} cy={21} r={1}></circle>
                                              <circle cx={19} cy={21} r={1}></circle>
                                              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                                            </svg>
                                          </IconTile>
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-amber-50 border border-amber-200 dark:bg-amber-500/15 dark:border-amber-500/25 dark:text-amber-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.5 py-0.5 relative rounded-full text-amber-700 text-xs transition-shadow">
                                            <svg className="lucide lucide-trending-down size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                                              <path d="M16 17h6v-6"></path>
                                              <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                                            </svg>
                                            {"-2.1%"}
                                          </Badge>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                          <span className="dark:text-slate-200 font-medium leading-none text-slate-700 text-sm truncate">
                                            {"Cart Recovery"}
                                          </span>
                                          <span className="dark:text-slate-500 leading-none text-slate-400 text-xs truncate">
                                            {"risk in paid social"}
                                          </span>
                                        </div>
                                        <div className="flex gap-1.5 items-end justify-between">
                                          <span className="dark:text-slate-50 font-semibold hiw5-rise leading-none tabular-nums text-2xl text-slate-900 tracking-tight">
                                            {"38.4%"}
                                          </span>
                                          <span className="flex gap-0.5 h-7 items-end shrink-0" aria-hidden="true">
                                            <span className="bg-amber-400/80 hiw5-grow origin-bottom rounded-full w-1" style={{height: "88%", "--hiw5-delay": "-5.699999999999999s"}}></span>
                                            <span className="bg-amber-400/80 hiw5-grow origin-bottom rounded-full w-1" style={{height: "82%", "--hiw5-delay": "-5.789999999999999s"}}></span>
                                            <span className="bg-amber-400/80 hiw5-grow origin-bottom rounded-full w-1" style={{height: "85%", "--hiw5-delay": "-5.879999999999999s"}}></span>
                                            <span className="bg-amber-400/80 hiw5-grow origin-bottom rounded-full w-1" style={{height: "74%", "--hiw5-delay": "-5.969999999999999s"}}></span>
                                            <span className="bg-amber-400/80 hiw5-grow origin-bottom rounded-full w-1" style={{height: "78%", "--hiw5-delay": "-6.06s"}}></span>
                                            <span className="bg-amber-400/80 hiw5-grow origin-bottom rounded-full w-1" style={{height: "66%", "--hiw5-delay": "-6.1499999999999995s"}}></span>
                                            <span className="bg-amber-400/80 hiw5-grow origin-bottom rounded-full w-1" style={{height: "70%", "--hiw5-delay": "-6.239999999999999s"}}></span>
                                            <span className="bg-amber-400/80 hiw5-grow origin-bottom rounded-full w-1" style={{height: "58%", "--hiw5-delay": "-6.329999999999999s"}}></span>
                                            <span className="bg-amber-400/80 hiw5-grow origin-bottom rounded-full w-1" style={{height: "62%", "--hiw5-delay": "-6.419999999999999s"}}></span>
                                            <span className="bg-amber-400/80 hiw5-grow origin-bottom rounded-full w-1" style={{height: "50%", "--hiw5-delay": "-6.509999999999999s"}}></span>
                                            <span className="bg-amber-400/80 hiw5-grow origin-bottom rounded-full w-1" style={{height: "46%", "--hiw5-delay": "-6.6s"}}></span>
                                            <span className="bg-amber-400/80 hiw5-grow origin-bottom rounded-full w-1" style={{height: "40%", "--hiw5-delay": "-6.6899999999999995s"}}></span>
                                          </span>
                                        </div>
                                      </CardContent>
                                    </Card>
                                  </div>
                                  <div className="flex flex-1 gap-4 items-stretch min-h-0">
                                    <Card className="[--card-spacing:--spacing(3)] bg-white border-0 dark:bg-slate-900 dark:ring-white/10 dark:text-slate-50 flex-3 min-h-0 ring-slate-900/8 text-slate-900" size="sm">
                                      <CardHeader>
                                        <CardTitle className="leading-none text-sm">
                                          {"Revenue Pace"}
                                        </CardTitle>
                                        <CardDescription className="dark:text-slate-500 leading-none text-slate-400 text-xs">
                                          {"Online and retail revenue"}
                                        </CardDescription>
                                        <CardAction className="flex gap-2.5 items-center">
                                          <span className="dark:text-slate-400 flex gap-1.5 items-center text-slate-500 text-xs">
                                            <span className="bg-violet-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                            {"Online"}
                                          </span>
                                          <span className="dark:text-slate-400 flex gap-1.5 items-center text-slate-500 text-xs">
                                            <span className="bg-sky-400 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                            {"Retail"}
                                          </span>
                                          <span className="dark:text-slate-400 flex gap-1.5 items-center text-slate-500 text-xs">
                                            <span className="bg-slate-400 dark:bg-slate-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                            {"Plan"}
                                          </span>
                                        </CardAction>
                                      </CardHeader>
                                      <CardContent className="flex flex-1 flex-col gap-2.5 min-h-0">
                                        <div className="gap-2.5 grid grid-cols-3 shrink-0">
                                          <div className="flex flex-col gap-1.5">
                                            <span className="dark:text-slate-500 leading-none text-slate-400 text-xs">
                                              {"Booked"}
                                            </span>
                                            <span className="dark:text-slate-50 flex font-semibold gap-1.5 items-baseline leading-none tabular-nums text-2xl text-slate-900 tracking-tight">
                                              {"$128K"}
                                            </span>
                                          </div>
                                          <div className="flex flex-col gap-1.5">
                                            <span className="dark:text-slate-500 leading-none text-slate-400 text-xs">
                                              {"Plan Gap"}
                                            </span>
                                            <span className="dark:text-slate-50 flex font-semibold gap-1.5 items-baseline leading-none tabular-nums text-2xl text-slate-900 tracking-tight">
                                              {"+$10K"}
                                            </span>
                                          </div>
                                          <div className="flex flex-col gap-1.5">
                                            <span className="dark:text-slate-500 leading-none text-slate-400 text-xs">
                                              {"Gross Profit"}
                                            </span>
                                            <span className="dark:text-slate-50 flex font-semibold gap-1.5 items-baseline leading-none tabular-nums text-2xl text-slate-900 tracking-tight">
                                              {"$41K"}
                                              <span className="dark:text-emerald-400 font-medium text-emerald-600 text-xs">
                                                {"32%"}
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                        <svg className="flex-1 min-h-0 w-full" viewBox="0 0 260 56" preserveAspectRatio="none" aria-hidden="true">
                                          <defs>
                                            <lineargradient className="text-violet-500" id="_r_a_-online" x1={0} y1={0} x2={0} y2={1}>
                                              <stop offset="0%" stopColor="currentColor" stopOpacity={0.2}></stop>
                                              <stop offset="100%" stopColor="currentColor" stopOpacity={0.02}></stop>
                                            </lineargradient>
                                            <lineargradient className="text-sky-400" id="_r_a_-retail" x1={0} y1={0} x2={0} y2={1}>
                                              <stop offset="0%" stopColor="currentColor" stopOpacity={0.24}></stop>
                                              <stop offset="100%" stopColor="currentColor" stopOpacity={0.03}></stop>
                                            </lineargradient>
                                            <pattern id="_r_a_-hatch" width={4} height={4} patternUnits="userSpaceOnUse" patterntransform="rotate(45)">
                                              <line className="dark:stroke-slate-500/20 stroke-slate-400/20" x1={0} y1={0} x2={0} y2={4} strokeWidth={1}></line>
                                            </pattern>
                                          </defs>
                                          <path d="M0 33 C 24 31 44 16 74 15 C 104 14 120 25 150 24 C 180 23 198 12 228 11 C 240 10.6 250 11 260 11 L260 56 L0 56 Z" fill="url(#_r_a_-online)"></path>
                                          <path d="M0 33 C 24 31 44 16 74 15 C 104 14 120 25 150 24 C 180 23 198 12 228 11 C 240 10.6 250 11 260 11 L260 56 L0 56 Z" fill="url(#_r_a_-hatch)"></path>
                                          <path d="M0 43 C 24 42 44 33 74 32 C 104 31 120 38 150 37 C 180 36 198 32 228 31 C 240 30.6 250 31 260 31 L260 56 L0 56 Z" fill="url(#_r_a_-retail)"></path>
                                          <path className="dark:stroke-slate-500 stroke-slate-400" d="M0 38 C 40 36 72 25 112 25 C 152 25 180 30 212 28 C 232 27 248 27 260 27" fill="none" strokeWidth={1} strokeDasharray="3 3" vector-effect="non-scaling-stroke"></path>
                                          <path className="stroke-violet-500" d="M0 33 C 24 31 44 16 74 15 C 104 14 120 25 150 24 C 180 23 198 12 228 11 C 240 10.6 250 11 260 11" fill="none" strokeWidth={1.5} strokeLinecap="round" vector-effect="non-scaling-stroke"></path>
                                          <path className="stroke-sky-400" d="M0 43 C 24 42 44 33 74 32 C 104 31 120 38 150 37 C 180 36 198 32 228 31 C 240 30.6 250 31 260 31" fill="none" strokeWidth={1.5} strokeLinecap="round" vector-effect="non-scaling-stroke"></path>
                                          <g className="hiw5-scan">
                                            <rect className="fill-violet-500/40" x={0} y={0} width={1} height={56}></rect>
                                          </g>
                                          <line className="dark:stroke-slate-700 stroke-slate-200" x1={0} y1={55.5} x2={260} y2={55.5} strokeWidth={1} vector-effect="non-scaling-stroke"></line>
                                        </svg>
                                        <div className="dark:text-slate-500 flex items-center justify-between text-slate-400 text-xs">
                                          <span>
                                            {"Aug 02"}
                                          </span>
                                          <span>
                                            {"Aug 03"}
                                          </span>
                                          <span>
                                            {"Aug 04"}
                                          </span>
                                        </div>
                                      </CardContent>
                                    </Card>
                                    <Card className="[--card-spacing:--spacing(3)] bg-white border-0 dark:bg-slate-900 dark:ring-white/10 dark:text-slate-50 flex-2 min-h-0 ring-slate-900/8 text-slate-900" size="sm">
                                      <CardHeader>
                                        <CardTitle className="leading-none text-sm">
                                          {"Channel Mix"}
                                        </CardTitle>
                                        <CardDescription className="dark:text-slate-500 leading-none text-slate-400 text-xs">
                                          {"Daily order share"}
                                        </CardDescription>
                                        <CardAction>
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-6 min-w-5 outline-none px-2 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-slate-700 text-xs transition-shadow">
                                            {"Direct"}
                                          </Badge>
                                        </CardAction>
                                      </CardHeader>
                                      <CardContent className="flex flex-1 flex-col gap-2.5 min-h-0">
                                        <div className="gap-2.5 grid grid-cols-2 shrink-0">
                                          <div className="flex flex-col gap-1.5">
                                            <span className="dark:text-slate-500 leading-none text-slate-400 text-xs">
                                              {"Latest Orders"}
                                            </span>
                                            <span className="dark:text-slate-50 font-semibold leading-none tabular-nums text-2xl text-slate-900 tracking-tight">
                                              {"46"}
                                            </span>
                                          </div>
                                          <div className="flex flex-col gap-1.5">
                                            <span className="dark:text-slate-500 leading-none text-slate-400 text-xs">
                                              {"Direct Share"}
                                            </span>
                                            <span className="dark:text-slate-50 font-semibold leading-none tabular-nums text-2xl text-slate-900 tracking-tight">
                                              {"39%"}
                                            </span>
                                          </div>
                                        </div>
                                        <div className="flex flex-wrap gap-x-2 gap-y-1 items-center">
                                          <span className="dark:text-slate-400 flex gap-1.5 items-center text-slate-500 text-xs">
                                            <span className="bg-sky-400 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                            {"Direct"}
                                          </span>
                                          <span className="dark:text-slate-400 flex gap-1.5 items-center text-slate-500 text-xs">
                                            <span className="bg-violet-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                            {"Partners"}
                                          </span>
                                          <span className="dark:text-slate-400 flex gap-1.5 items-center text-slate-500 text-xs">
                                            <span className="bg-amber-400 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                            {"Marketplace"}
                                          </span>
                                        </div>
                                        <div className="flex flex-1 gap-2.5 items-end min-h-0">
                                          <div className="flex flex-1 flex-col gap-1.5 h-full items-center">
                                            <div className="flex flex-1 flex-col justify-end min-h-0 w-full">
                                              <div className="flex flex-col hiw5-grow origin-bottom w-full" aria-hidden="true" style={{height: "100%", "--hiw5-delay": "0s"}}>
                                                <span className="bg-amber-400 w-full" style={{height: "32%"}}></span>
                                                <span className="bg-violet-500 w-full" style={{height: "24%"}}></span>
                                                <span className="bg-sky-400 w-full" style={{height: "44%"}}></span>
                                              </div>
                                            </div>
                                            <span className="dark:text-slate-500 text-slate-400 text-xs">
                                              {"Fri"}
                                            </span>
                                          </div>
                                          <div className="flex flex-1 flex-col gap-1.5 h-full items-center">
                                            <div className="flex flex-1 flex-col justify-end min-h-0 w-full">
                                              <div className="flex flex-col hiw5-grow origin-bottom w-full" aria-hidden="true" style={{height: "96%", "--hiw5-delay": "-0.24s"}}>
                                                <span className="bg-amber-400 w-full" style={{height: "34%"}}></span>
                                                <span className="bg-violet-500 w-full" style={{height: "26%"}}></span>
                                                <span className="bg-sky-400 w-full" style={{height: "40%"}}></span>
                                              </div>
                                            </div>
                                            <span className="dark:text-slate-500 text-slate-400 text-xs">
                                              {"Sat"}
                                            </span>
                                          </div>
                                          <div className="flex flex-1 flex-col gap-1.5 h-full items-center">
                                            <div className="flex flex-1 flex-col justify-end min-h-0 w-full">
                                              <div className="flex flex-col hiw5-grow origin-bottom w-full" aria-hidden="true" style={{height: "93%", "--hiw5-delay": "-0.48s"}}>
                                                <span className="bg-amber-400 w-full" style={{height: "31%"}}></span>
                                                <span className="bg-violet-500 w-full" style={{height: "22%"}}></span>
                                                <span className="bg-sky-400 w-full" style={{height: "47%"}}></span>
                                              </div>
                                            </div>
                                            <span className="dark:text-slate-500 text-slate-400 text-xs">
                                              {"Sun"}
                                            </span>
                                          </div>
                                          <div className="flex flex-1 flex-col gap-1.5 h-full items-center">
                                            <div className="flex flex-1 flex-col justify-end min-h-0 w-full">
                                              <div className="flex flex-col hiw5-grow origin-bottom w-full" aria-hidden="true" style={{height: "99%", "--hiw5-delay": "-0.72s"}}>
                                                <span className="bg-amber-400 w-full" style={{height: "29%"}}></span>
                                                <span className="bg-violet-500 w-full" style={{height: "28%"}}></span>
                                                <span className="bg-sky-400 w-full" style={{height: "43%"}}></span>
                                              </div>
                                            </div>
                                            <span className="dark:text-slate-500 text-slate-400 text-xs">
                                              {"Mon"}
                                            </span>
                                          </div>
                                        </div>
                                      </CardContent>
                                    </Card>
                                  </div>
                                  <Card className="[--card-spacing:--spacing(3)] bg-white border-0 dark:bg-slate-900 dark:ring-white/10 dark:text-slate-50 ring-slate-900/8 text-slate-900" size="sm">
                                    <CardHeader>
                                      <CardTitle className="leading-none text-sm">
                                        {"Order Queue"}
                                      </CardTitle>
                                      <CardDescription className="dark:text-slate-500 leading-none text-slate-400 text-xs">
                                        {"6 of 6 orders"}
                                      </CardDescription>
                                      <CardAction className="flex gap-2 items-center">
                                        <Item className="bg-white border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-500 gap-2 px-2 py-1 text-slate-400 text-xs w-32" variant="outline" size="xs">
                                          <svg className="lucide lucide-search shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                                            <path d="m21 21-4.34-4.34"></path>
                                            <circle cx={11} cy={11} r={8}></circle>
                                          </svg>
                                          <span className="truncate">
                                            {"Search orders"}
                                          </span>
                                        </Item>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-5 outline-none px-2 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-slate-700 text-xs transition-shadow">
                                          <svg className="lucide lucide-funnel size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                                            <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                                          </svg>
                                          {"Exceptions"}
                                        </Badge>
                                      </CardAction>
                                    </CardHeader>
                                    <CardContent>
                                      <div className="cn-table-container">
                                        <Table className="table-fixed text-sm">
                                          <TableHeader>
                                            <TableRow className="border-slate-200 dark:border-slate-800 hover:bg-transparent">
                                              <TableHead className="dark:text-slate-500 font-medium h-8 px-1.5 text-slate-400 text-xs w-[12%]">
                                                {"Order"}
                                              </TableHead>
                                              <TableHead className="dark:text-slate-500 font-medium h-8 px-1.5 text-slate-400 text-xs w-[22%]">
                                                {"Customer"}
                                              </TableHead>
                                              <TableHead className="dark:text-slate-500 font-medium h-8 px-1.5 text-slate-400 text-xs w-[21%]">
                                                {"Product"}
                                              </TableHead>
                                              <TableHead className="dark:text-slate-500 font-medium h-8 px-1.5 text-slate-400 text-xs w-[15%]">
                                                {"Fulfillment"}
                                              </TableHead>
                                              <TableHead className="dark:text-slate-500 font-medium h-8 px-1.5 text-slate-400 text-xs w-[10%]">
                                                {"Amount"}
                                              </TableHead>
                                              <TableHead className="dark:text-slate-500 font-medium h-8 px-1.5 text-slate-400 text-xs w-[12%]">
                                                {"Status"}
                                              </TableHead>
                                              <TableHead className="h-8 px-1.5 w-[8%]"></TableHead>
                                            </TableRow>
                                          </TableHeader>
                                          <TableBody>
                                            <TableRow className="border-slate-100 dark:border-slate-800 hiw5-live hover:bg-transparent" style={{"--hiw5-delay": "0s"}}>
                                              <TableCell className="px-1.5 py-1.5">
                                                <div className="flex flex-col gap-1">
                                                  <span className="dark:text-slate-100 font-medium text-slate-800">
                                                    {"RVO-7423"}
                                                  </span>
                                                  <span className="dark:text-slate-500 text-slate-400 text-xs">
                                                    {"Aug 02"}
                                                  </span>
                                                </div>
                                              </TableCell>
                                              <TableCell className="px-1.5 py-1.5">
                                                <div className="flex gap-1.5 items-center">
                                                  <Avatar className="size-5" size="default">
                                                    <AvatarImage alt="Alex Johnson" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                  </Avatar>
                                                  <div className="flex flex-col gap-1 min-w-0">
                                                    <span className="dark:text-slate-100 text-slate-800 truncate">
                                                      {"Alex Johnson"}
                                                    </span>
                                                    <span className="dark:text-slate-500 text-slate-400 text-xs truncate">
                                                      {"Partner"}
                                                    </span>
                                                  </div>
                                                </div>
                                              </TableCell>
                                              <TableCell className="dark:text-slate-200 px-1.5 py-1.5 text-slate-700 truncate">
                                                {"Aero Carry Kit"}
                                              </TableCell>
                                              <TableCell className="px-1.5 py-1.5">
                                                <div className="flex flex-col gap-1.5">
                                                  <span className="dark:text-slate-400 text-slate-500 text-xs">
                                                    {"Shipped"}
                                                  </span>
                                                  <div className="flex gap-1.5 items-center">
                                                    <Progress className="[&_[data-slot=progress-indicator]]:bg-emerald-500 [&_[data-slot=progress-track]]:bg-slate-200 [&_[data-slot=progress-track]]:h-1.5 gap-0 hiw5-track w-10" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="84" aria-valuetext="84%" role="progressbar" aria-label="Shipped progress">
                                                      <ProgressTrack progressing="">
                                                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "84%"}}></ProgressIndicator>
                                                      </ProgressTrack>
                                                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                                        {"x"}
                                                      </span>
                                                    </Progress>
                                                    <span className="dark:text-slate-500 tabular-nums text-slate-400 text-xs">
                                                      {"84%"}
                                                    </span>
                                                  </div>
                                                </div>
                                              </TableCell>
                                              <TableCell className="px-1.5 py-1.5">
                                                <div className="flex flex-col gap-1">
                                                  <span className="dark:text-slate-100 font-medium tabular-nums text-slate-800">
                                                    {"$652"}
                                                  </span>
                                                  <span className="dark:text-slate-500 text-slate-400 text-xs">
                                                    {"Qty 4"}
                                                  </span>
                                                </div>
                                              </TableCell>
                                              <TableCell className="px-1.5 py-1.5">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-emerald-50 border border-emerald-200 dark:bg-emerald-500/15 dark:border-emerald-500/25 dark:text-emerald-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.5 py-0.5 relative rounded-full text-emerald-700 text-xs transition-shadow">
                                                  <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                                  {"Paid"}
                                                </Badge>
                                              </TableCell>
                                              <TableCell className="px-1.5 py-1.5">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-6 min-w-5 outline-none px-1 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-slate-600 text-xs transition-shadow">
                                                  {"View"}
                                                </Badge>
                                              </TableCell>
                                            </TableRow>
                                            <TableRow className="border-slate-100 dark:border-slate-800 hover:bg-transparent" style={{"--hiw5-delay": "-1.3s"}}>
                                              <TableCell className="px-1.5 py-1.5">
                                                <div className="flex flex-col gap-1">
                                                  <span className="dark:text-slate-100 font-medium text-slate-800">
                                                    {"RVO-7418"}
                                                  </span>
                                                  <span className="dark:text-slate-500 text-slate-400 text-xs">
                                                    {"Aug 04"}
                                                  </span>
                                                </div>
                                              </TableCell>
                                              <TableCell className="px-1.5 py-1.5">
                                                <div className="flex gap-1.5 items-center">
                                                  <Avatar className="size-5" size="default">
                                                    <AvatarImage alt="Mira Stone" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                  </Avatar>
                                                  <div className="flex flex-col gap-1 min-w-0">
                                                    <span className="dark:text-slate-100 text-slate-800 truncate">
                                                      {"Mira Stone"}
                                                    </span>
                                                    <span className="dark:text-slate-500 text-slate-400 text-xs truncate">
                                                      {"Direct"}
                                                    </span>
                                                  </div>
                                                </div>
                                              </TableCell>
                                              <TableCell className="dark:text-slate-200 px-1.5 py-1.5 text-slate-700 truncate">
                                                {"Aero Carry Kit"}
                                              </TableCell>
                                              <TableCell className="px-1.5 py-1.5">
                                                <div className="flex flex-col gap-1.5">
                                                  <span className="dark:text-slate-400 text-slate-500 text-xs">
                                                    {"Shipped"}
                                                  </span>
                                                  <div className="flex gap-1.5 items-center">
                                                    <Progress className="[&_[data-slot=progress-indicator]]:bg-emerald-500 [&_[data-slot=progress-track]]:bg-slate-200 [&_[data-slot=progress-track]]:h-1.5 gap-0 hiw5-track w-10" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-label="Shipped progress">
                                                      <ProgressTrack complete="">
                                                        <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                                      </ProgressTrack>
                                                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                                        {"x"}
                                                      </span>
                                                    </Progress>
                                                    <span className="dark:text-slate-500 tabular-nums text-slate-400 text-xs">
                                                      {"100%"}
                                                    </span>
                                                  </div>
                                                </div>
                                              </TableCell>
                                              <TableCell className="px-1.5 py-1.5">
                                                <div className="flex flex-col gap-1">
                                                  <span className="dark:text-slate-100 font-medium tabular-nums text-slate-800">
                                                    {"$489"}
                                                  </span>
                                                  <span className="dark:text-slate-500 text-slate-400 text-xs">
                                                    {"Qty 3"}
                                                  </span>
                                                </div>
                                              </TableCell>
                                              <TableCell className="px-1.5 py-1.5">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-emerald-50 border border-emerald-200 dark:bg-emerald-500/15 dark:border-emerald-500/25 dark:text-emerald-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.5 py-0.5 relative rounded-full text-emerald-700 text-xs transition-shadow">
                                                  <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                                  {"Paid"}
                                                </Badge>
                                              </TableCell>
                                              <TableCell className="px-1.5 py-1.5">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-6 min-w-5 outline-none px-1 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-slate-600 text-xs transition-shadow">
                                                  {"View"}
                                                </Badge>
                                              </TableCell>
                                            </TableRow>
                                            <TableRow className="border-slate-100 dark:border-slate-800 hover:bg-transparent" style={{"--hiw5-delay": "-2.6s"}}>
                                              <TableCell className="px-1.5 py-1.5">
                                                <div className="flex flex-col gap-1">
                                                  <span className="dark:text-slate-100 font-medium text-slate-800">
                                                    {"RVO-7420"}
                                                  </span>
                                                  <span className="dark:text-slate-500 text-slate-400 text-xs">
                                                    {"Aug 03"}
                                                  </span>
                                                </div>
                                              </TableCell>
                                              <TableCell className="px-1.5 py-1.5">
                                                <div className="flex gap-1.5 items-center">
                                                  <Avatar className="size-5" size="default">
                                                    <AvatarImage alt="Nora Vale" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                  </Avatar>
                                                  <div className="flex flex-col gap-1 min-w-0">
                                                    <span className="dark:text-slate-100 text-slate-800 truncate">
                                                      {"Nora Vale"}
                                                    </span>
                                                    <span className="dark:text-slate-500 text-slate-400 text-xs truncate">
                                                      {"Marketplace"}
                                                    </span>
                                                  </div>
                                                </div>
                                              </TableCell>
                                              <TableCell className="dark:text-slate-200 px-1.5 py-1.5 text-slate-700 truncate">
                                                {"Orbit Weekender"}
                                              </TableCell>
                                              <TableCell className="px-1.5 py-1.5">
                                                <div className="flex flex-col gap-1.5">
                                                  <span className="dark:text-slate-400 text-slate-500 text-xs">
                                                    {"On Hold"}
                                                  </span>
                                                  <div className="flex gap-1.5 items-center">
                                                    <Progress className="[&_[data-slot=progress-indicator]]:bg-violet-500 [&_[data-slot=progress-track]]:bg-slate-200 [&_[data-slot=progress-track]]:h-1.5 gap-0 hiw5-track w-10" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="28" aria-valuetext="28%" role="progressbar" aria-label="On Hold progress">
                                                      <ProgressTrack progressing="">
                                                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "28%"}}></ProgressIndicator>
                                                      </ProgressTrack>
                                                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                                        {"x"}
                                                      </span>
                                                    </Progress>
                                                    <span className="dark:text-slate-500 tabular-nums text-slate-400 text-xs">
                                                      {"28%"}
                                                    </span>
                                                  </div>
                                                </div>
                                              </TableCell>
                                              <TableCell className="px-1.5 py-1.5">
                                                <div className="flex flex-col gap-1">
                                                  <span className="dark:text-slate-100 font-medium tabular-nums text-slate-800">
                                                    {"$319"}
                                                  </span>
                                                  <span className="dark:text-slate-500 text-slate-400 text-xs">
                                                    {"Qty 1"}
                                                  </span>
                                                </div>
                                              </TableCell>
                                              <TableCell className="px-1.5 py-1.5">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-violet-50 border border-violet-200 dark:bg-violet-500/15 dark:border-violet-500/25 dark:text-violet-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.5 py-0.5 relative rounded-full text-violet-700 text-xs transition-shadow">
                                                  <span className="bg-violet-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                                  {"Review"}
                                                </Badge>
                                              </TableCell>
                                              <TableCell className="px-1.5 py-1.5">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-6 min-w-5 outline-none px-1 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-slate-600 text-xs transition-shadow">
                                                  {"View"}
                                                </Badge>
                                              </TableCell>
                                            </TableRow>
                                            <TableRow className="border-slate-100 dark:border-slate-800 hover:bg-transparent" style={{"--hiw5-delay": "-3.9000000000000004s"}}>
                                              <TableCell className="px-1.5 py-1.5">
                                                <div className="flex flex-col gap-1">
                                                  <span className="dark:text-slate-100 font-medium text-slate-800">
                                                    {"RVO-7419"}
                                                  </span>
                                                  <span className="dark:text-slate-500 text-slate-400 text-xs">
                                                    {"Aug 03"}
                                                  </span>
                                                </div>
                                              </TableCell>
                                              <TableCell className="px-1.5 py-1.5">
                                                <div className="flex gap-1.5 items-center">
                                                  <Avatar className="size-5" size="default">
                                                    <AvatarImage alt="Leo Grant" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                  </Avatar>
                                                  <div className="flex flex-col gap-1 min-w-0">
                                                    <span className="dark:text-slate-100 text-slate-800 truncate">
                                                      {"Leo Grant"}
                                                    </span>
                                                    <span className="dark:text-slate-500 text-slate-400 text-xs truncate">
                                                      {"Direct"}
                                                    </span>
                                                  </div>
                                                </div>
                                              </TableCell>
                                              <TableCell className="dark:text-slate-200 px-1.5 py-1.5 text-slate-700 truncate">
                                                {"Pulse Desk Lamp"}
                                              </TableCell>
                                              <TableCell className="px-1.5 py-1.5">
                                                <div className="flex flex-col gap-1.5">
                                                  <span className="dark:text-slate-400 text-slate-500 text-xs">
                                                    {"Packing"}
                                                  </span>
                                                  <div className="flex gap-1.5 items-center">
                                                    <Progress className="[&_[data-slot=progress-indicator]]:bg-amber-400 [&_[data-slot=progress-track]]:bg-slate-200 [&_[data-slot=progress-track]]:h-1.5 gap-0 hiw5-track w-10" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="56" aria-valuetext="56%" role="progressbar" aria-label="Packing progress">
                                                      <ProgressTrack progressing="">
                                                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "56%"}}></ProgressIndicator>
                                                      </ProgressTrack>
                                                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                                        {"x"}
                                                      </span>
                                                    </Progress>
                                                    <span className="dark:text-slate-500 tabular-nums text-slate-400 text-xs">
                                                      {"56%"}
                                                    </span>
                                                  </div>
                                                </div>
                                              </TableCell>
                                              <TableCell className="px-1.5 py-1.5">
                                                <div className="flex flex-col gap-1">
                                                  <span className="dark:text-slate-100 font-medium tabular-nums text-slate-800">
                                                    {"$268"}
                                                  </span>
                                                  <span className="dark:text-slate-500 text-slate-400 text-xs">
                                                    {"Qty 2"}
                                                  </span>
                                                </div>
                                              </TableCell>
                                              <TableCell className="px-1.5 py-1.5">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-amber-50 border border-amber-200 dark:bg-amber-500/15 dark:border-amber-500/25 dark:text-amber-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.5 py-0.5 relative rounded-full text-amber-700 text-xs transition-shadow">
                                                  <span className="bg-amber-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                                  {"Pending"}
                                                </Badge>
                                              </TableCell>
                                              <TableCell className="px-1.5 py-1.5">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-6 min-w-5 outline-none px-1 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-slate-600 text-xs transition-shadow">
                                                  {"View"}
                                                </Badge>
                                              </TableCell>
                                            </TableRow>
                                          </TableBody>
                                        </Table>
                                      </div>
                                    </CardContent>
                                  </Card>
                                </div>
                              </div>
                            </Card>
                          </div>
                        </div>
                      </TabsContent>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs>
          </Card>
        </div>
      </section>
    </div>
  )
}
