import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Connection detail
      </h1>
      <div className="flex items-center justify-center min-h-[360px]">
        <Sheet>
        <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-lg cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
          <svg className="lucide lucide-plug-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlugZapIcon" tabler="IconPlugConnected" hugeicons="LinkCircle02Icon" phosphor="PlugsConnectedIcon" remixicon="RiPlug2Line" data-icon="inline-start" aria-hidden="true">
            <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
            <path d="m2 22 3-3"></path>
            <path d="M7.5 13.5 10 11"></path>
            <path d="M10.5 16.5 13 14"></path>
            <path d="m18 3-4 4h6l-4 4"></path>
          </svg>
          Open Connection
        </SheetTrigger>
        </Sheet>
      </div>
    </main>
    <Sheet>
    <SheetContent className="flex flex-col gap-0 h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden p-0 right-4 rounded-xl w-[min(40rem,calc(100vw-2rem))]" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" style={{"--nested-dialogs": "0"}} aria-labelledby="base-ui-_r_h_" aria-describedby="base-ui-_r_i_">
      <div className="border-b flex flex-col px-5 py-3 shrink-0">
        <div className="flex gap-2 items-center justify-between">
          <div className="flex gap-1 items-center min-w-0">
            <span className="font-mono min-w-0 text-muted-foreground text-xs truncate">
              CON-101
            </span>
            <Tooltip>
            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Copy connection ID" id="base-ui-_r_7_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
              </svg>
            </TooltipTrigger>
            </Tooltip>
          </div>
          <div className="flex gap-1 items-center shrink-0">
            <ButtonGroup role="group" aria-label="Connections">
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Previous connection" id="base-ui-_r_9_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-chevron-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine" aria-hidden="true">
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-16 tabular-nums text-xs">
                2 of 13
              </div>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Next connection" id="base-ui-_r_b_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
            </ButtonGroup>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More connection actions" aria-haspopup="menu" id="base-ui-_r_f_" aria-expanded="false">
              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <Button type="button" tabIndex="0" aria-label="Close">
              <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </Button>
          </div>
        </div>
        <div className="flex gap-3 items-center min-w-0 mt-1.5">
          <IconTile variant="outline" size="default" aria-hidden="true">
            <svg aria-hidden="true" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
              <defs>
                <lineargradient id="neon-a" x1="100%" x2="12.069%" y1="100%" y2="0%">
                  <stop offset="0%" stopColor="#62F755"></stop>
                  <stop offset="100%" stopColor="#8FF986" stopOpacity="0"></stop>
                </lineargradient>
                <lineargradient id="neon-b" x1="100%" x2="40.603%" y1="100%" y2="76.897%">
                  <stop offset="0%" stopOpacity=".9"></stop>
                  <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0"></stop>
                </lineargradient>
              </defs>
              <path fill="#00E0D9" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
              <path fill="url(#neon-a)" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
              <path fill="url(#neon-b)" fillOpacity=".4" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
              <path fill="#63F655" d="M211.861 0C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723a4.409 4.409 0 0 0 4.409-4.409V115.058c0-25.223 31.914-36.167 47.395-16.256l48.391 62.243V8.825c0-4.871-3.953-8.825-8.832-8.825Z"></path>
            </svg>
          </IconTile>
          <div className="flex flex-col gap-0.5 min-w-0">
            <div className="flex flex-wrap gap-2 items-center min-w-0">
              <SheetTitle className="min-w-0 truncate" id="base-ui-_r_h_">
                ledger-primary
              </SheetTitle>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                Healthy
              </Badge>
            </div>
            <SheetDescription id="base-ui-_r_i_">
              <span className="flex flex-wrap gap-1.5 items-center min-w-0">
                <span>
                  Neon Postgres
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                  Production
                </Badge>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="tabular-nums">
                  4 of 6 datasets linked
                </span>
              </span>
            </SheetDescription>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 items-center mt-2.5">
          <Button type="button" tabIndex="0">
            <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
              <path d="M21 3v5h-5"></path>
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
              <path d="M8 16H3v5"></path>
            </svg>
            Sync Now
          </Button>
          <Button type="button" tabIndex="0">
            <svg className="lucide lucide-circle-pause" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PauseCircleIcon" tabler="IconPlayerPauseFilled" hugeicons="PauseCircleIcon" phosphor="PauseCircleIcon" remixicon="RiPauseCircleLine" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="10" x2="10" y1="15" y2="9"></line>
              <line x1="14" x2="14" y1="15" y2="9"></line>
            </svg>
            Pause
          </Button>
          <Button type="button" tabIndex="0">
            <svg className="lucide lucide-rows-3 lucide-rows3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Rows3Icon" tabler="IconLayoutRows" hugeicons="LayoutTable01Icon" phosphor="RowsIcon" remixicon="RiLayoutRowLine" aria-hidden="true">
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M21 9H3"></path>
              <path d="M21 15H3"></path>
            </svg>
            Preview
          </Button>
        </div>
      </div>
      <Tabs className="flex-1 flex-col gap-0 min-h-0" data-orientation="horizontal" activationDirection="none">
        <div className="border-b px-5 shrink-0">
          <TabsList className="-mb-px gap-5 h-10! max-sm:gap-3 max-w-full no-scrollbar overflow-x-auto p-0" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
            <TabsTrigger className="after:-bottom-px! flex-none font-medium gap-1.5 h-full! px-0 text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_j_" compositeItemActive="" aria-controls="base-ui-_r_n_">
              Overview
            </TabsTrigger>
            <TabsTrigger className="after:-bottom-px! flex-none font-medium gap-1.5 h-full! px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_k_">
              Datasets
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                6
              </Badge>
            </TabsTrigger>
            <TabsTrigger className="after:-bottom-px! flex-none font-medium gap-1.5 h-full! px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_l_">
              Preview
            </TabsTrigger>
            <TabsTrigger className="after:-bottom-px! flex-none font-medium gap-1.5 h-full! px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_m_">
              Settings
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="flex-1 min-h-0 no-scrollbar overflow-y-auto scroll-fade-y scroll-py-10">
          <div className="flex flex-col gap-4 px-5 py-4">
            <TabsContent className="flex flex-col gap-4" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_n_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_j_">
              <Frame className="min-w-0" spacing="default">
                <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                  <div className="flex gap-0.5 items-center min-w-0">
                    <div className="font-semibold text-sm truncate">
                      Last 24 Hours
                    </div>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="94 runs, 861.5K rows synced" id="base-ui-_r_p_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </div>
                  <ul className="flex flex-wrap gap-x-3 gap-y-1 items-center text-muted-foreground text-xs">
                    <li className="flex gap-1.5 items-center">
                      <span className="bg-success rounded-full size-2" aria-hidden="true"></span>
                      Succeeded
                    </li>
                    <li className="flex gap-1.5 items-center">
                      <span className="bg-warning rounded-full size-2" aria-hidden="true"></span>
                      Slow
                    </li>
                    <li className="flex gap-1.5 items-center">
                      <span className="bg-destructive rounded-full size-2" aria-hidden="true"></span>
                      Failed
                    </li>
                  </ul>
                </header>
                <FramePanel>
                  <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-36 justify-center min-w-0 text-xs w-full" data-chart="chart-_r_r_">
                    <style>{`
 [data-chart=chart-_r_r_] {
  --color-succeeded: var(--success);
  --color-partial: var(--warning);
  --color-failed: var(--destructive);
}


.dark [data-chart=chart-_r_r_] {
  --color-succeeded: var(--success);
  --color-partial: var(--warning);
  --color-failed: var(--destructive);
}
`}</style>
                    <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                      <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                        <div className="recharts-wrapper" width="557" height="144" style={{position: "relative", cursor: "default", width: "557px", height: "144px"}}>
                          <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                          <svg className="recharts-surface" role="application" tabIndex="0" width="557" height="144" viewBox="0 0 557 144" style={{width: "100%", height: "100%", display: "block"}}>
                            <title></title>
                            <desc></desc>
                            <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_-50" tabIndex="-1">
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="37.3667" y="4" width="13" height="114" fill="var(--muted)" radius="6" d={"M 37.3667,10\n            A 6,6,0,0,1,43.3667,4\n            L 44.3667,4\n            A 6,6,0,0,1,50.3667,10\n            L 50.3667,112\n            A 6,6,0,0,1,44.3667,118\n            L 43.3667,118\n            A 6,6,0,0,1,37.3667,112 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="59.2" y="4" width="13" height="114" fill="var(--muted)" radius="6" d={"M 59.2,10\n            A 6,6,0,0,1,65.2,4\n            L 66.2,4\n            A 6,6,0,0,1,72.2,10\n            L 72.2,112\n            A 6,6,0,0,1,66.2,118\n            L 65.2,118\n            A 6,6,0,0,1,59.2,112 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="81.0333" y="4" width="13" height="114" fill="var(--muted)" radius="6" d={"M 81.0333,10\n            A 6,6,0,0,1,87.0333,4\n            L 88.0333,4\n            A 6,6,0,0,1,94.0333,10\n            L 94.0333,112\n            A 6,6,0,0,1,88.0333,118\n            L 87.0333,118\n            A 6,6,0,0,1,81.0333,112 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="102.8667" y="4" width="13" height="114" fill="var(--muted)" radius="6" d={"M 102.8667,10\n            A 6,6,0,0,1,108.8667,4\n            L 109.8667,4\n            A 6,6,0,0,1,115.8667,10\n            L 115.8667,112\n            A 6,6,0,0,1,109.8667,118\n            L 108.8667,118\n            A 6,6,0,0,1,102.8667,112 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="124.7" y="4" width="13" height="114" fill="var(--muted)" radius="6" d={"M 124.7,10\n            A 6,6,0,0,1,130.7,4\n            L 131.7,4\n            A 6,6,0,0,1,137.7,10\n            L 137.7,112\n            A 6,6,0,0,1,131.7,118\n            L 130.7,118\n            A 6,6,0,0,1,124.7,112 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="146.5333" y="4" width="13" height="114" fill="var(--muted)" radius="6" d={"M 146.5333,10\n            A 6,6,0,0,1,152.5333,4\n            L 153.5333,4\n            A 6,6,0,0,1,159.5333,10\n            L 159.5333,112\n            A 6,6,0,0,1,153.5333,118\n            L 152.5333,118\n            A 6,6,0,0,1,146.5333,112 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="168.3667" y="4" width="13" height="114" fill="var(--muted)" radius="6" d={"M 168.3667,10\n            A 6,6,0,0,1,174.3667,4\n            L 175.3667,4\n            A 6,6,0,0,1,181.3667,10\n            L 181.3667,112\n            A 6,6,0,0,1,175.3667,118\n            L 174.3667,118\n            A 6,6,0,0,1,168.3667,112 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="190.2" y="4" width="13" height="114" fill="var(--muted)" radius="6" d={"M 190.2,10\n            A 6,6,0,0,1,196.2,4\n            L 197.2,4\n            A 6,6,0,0,1,203.2,10\n            L 203.2,112\n            A 6,6,0,0,1,197.2,118\n            L 196.2,118\n            A 6,6,0,0,1,190.2,112 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="212.0333" y="4" width="13" height="114" fill="var(--muted)" radius="6" d={"M 212.0333,10\n            A 6,6,0,0,1,218.0333,4\n            L 219.0333,4\n            A 6,6,0,0,1,225.0333,10\n            L 225.0333,112\n            A 6,6,0,0,1,219.0333,118\n            L 218.0333,118\n            A 6,6,0,0,1,212.0333,112 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="233.8667" y="4" width="13" height="114" fill="var(--muted)" radius="6" d={"M 233.8667,10\n            A 6,6,0,0,1,239.8667,4\n            L 240.8667,4\n            A 6,6,0,0,1,246.8667,10\n            L 246.8667,112\n            A 6,6,0,0,1,240.8667,118\n            L 239.8667,118\n            A 6,6,0,0,1,233.8667,112 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="255.7" y="4" width="13" height="114" fill="var(--muted)" radius="6" d={"M 255.7,10\n            A 6,6,0,0,1,261.7,4\n            L 262.7,4\n            A 6,6,0,0,1,268.7,10\n            L 268.7,112\n            A 6,6,0,0,1,262.7,118\n            L 261.7,118\n            A 6,6,0,0,1,255.7,112 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="277.5333" y="4" width="13" height="114" fill="var(--muted)" radius="6" d={"M 277.5333,10\n            A 6,6,0,0,1,283.5333,4\n            L 284.5333,4\n            A 6,6,0,0,1,290.5333,10\n            L 290.5333,112\n            A 6,6,0,0,1,284.5333,118\n            L 283.5333,118\n            A 6,6,0,0,1,277.5333,112 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="299.3667" y="4" width="13" height="114" fill="var(--muted)" radius="6" d={"M 299.3667,10\n            A 6,6,0,0,1,305.3667,4\n            L 306.3667,4\n            A 6,6,0,0,1,312.3667,10\n            L 312.3667,112\n            A 6,6,0,0,1,306.3667,118\n            L 305.3667,118\n            A 6,6,0,0,1,299.3667,112 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="321.2" y="4" width="13" height="114" fill="var(--muted)" radius="6" d={"M 321.2,10\n            A 6,6,0,0,1,327.2,4\n            L 328.2,4\n            A 6,6,0,0,1,334.2,10\n            L 334.2,112\n            A 6,6,0,0,1,328.2,118\n            L 327.2,118\n            A 6,6,0,0,1,321.2,112 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="343.0333" y="4" width="13" height="114" fill="var(--muted)" radius="6" d={"M 343.0333,10\n            A 6,6,0,0,1,349.0333,4\n            L 350.0333,4\n            A 6,6,0,0,1,356.0333,10\n            L 356.0333,112\n            A 6,6,0,0,1,350.0333,118\n            L 349.0333,118\n            A 6,6,0,0,1,343.0333,112 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="364.8667" y="4" width="13" height="114" fill="var(--muted)" radius="6" d={"M 364.8667,10\n            A 6,6,0,0,1,370.8667,4\n            L 371.8667,4\n            A 6,6,0,0,1,377.8667,10\n            L 377.8667,112\n            A 6,6,0,0,1,371.8667,118\n            L 370.8667,118\n            A 6,6,0,0,1,364.8667,112 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="386.7" y="4" width="13" height="114" fill="var(--muted)" radius="6" d={"M 386.7,10\n            A 6,6,0,0,1,392.7,4\n            L 393.7,4\n            A 6,6,0,0,1,399.7,10\n            L 399.7,112\n            A 6,6,0,0,1,393.7,118\n            L 392.7,118\n            A 6,6,0,0,1,386.7,112 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="408.5333" y="4" width="13" height="114" fill="var(--muted)" radius="6" d={"M 408.5333,10\n            A 6,6,0,0,1,414.5333,4\n            L 415.5333,4\n            A 6,6,0,0,1,421.5333,10\n            L 421.5333,112\n            A 6,6,0,0,1,415.5333,118\n            L 414.5333,118\n            A 6,6,0,0,1,408.5333,112 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="430.3667" y="4" width="13" height="114" fill="var(--muted)" radius="6" d={"M 430.3667,10\n            A 6,6,0,0,1,436.3667,4\n            L 437.3667,4\n            A 6,6,0,0,1,443.3667,10\n            L 443.3667,112\n            A 6,6,0,0,1,437.3667,118\n            L 436.3667,118\n            A 6,6,0,0,1,430.3667,112 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="452.2" y="4" width="13" height="114" fill="var(--muted)" radius="6" d={"M 452.2,10\n            A 6,6,0,0,1,458.2,4\n            L 459.2,4\n            A 6,6,0,0,1,465.2,10\n            L 465.2,112\n            A 6,6,0,0,1,459.2,118\n            L 458.2,118\n            A 6,6,0,0,1,452.2,112 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="474.0333" y="4" width="13" height="114" fill="var(--muted)" radius="6" d={"M 474.0333,10\n            A 6,6,0,0,1,480.0333,4\n            L 481.0333,4\n            A 6,6,0,0,1,487.0333,10\n            L 487.0333,112\n            A 6,6,0,0,1,481.0333,118\n            L 480.0333,118\n            A 6,6,0,0,1,474.0333,112 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="495.8667" y="4" width="13" height="114" fill="var(--muted)" radius="6" d={"M 495.8667,10\n            A 6,6,0,0,1,501.8667,4\n            L 502.8667,4\n            A 6,6,0,0,1,508.8667,10\n            L 508.8667,112\n            A 6,6,0,0,1,502.8667,118\n            L 501.8667,118\n            A 6,6,0,0,1,495.8667,112 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="517.7" y="4" width="13" height="114" fill="var(--muted)" radius="6" d={"M 517.7,10\n            A 6,6,0,0,1,523.7,4\n            L 524.7,4\n            A 6,6,0,0,1,530.7,10\n            L 530.7,112\n            A 6,6,0,0,1,524.7,118\n            L 523.7,118\n            A 6,6,0,0,1,517.7,112 Z"}></path>
                              </g>
                              <g className="recharts-inactive-bar recharts-layer">
                                <path className="recharts-bar-background-rectangle recharts-rectangle" x="539.5333" y="4" width="13" height="114" fill="var(--muted)" radius="6" d={"M 539.5333,10\n            A 6,6,0,0,1,545.5333,4\n            L 546.5333,4\n            A 6,6,0,0,1,552.5333,10\n            L 552.5333,112\n            A 6,6,0,0,1,546.5333,118\n            L 545.5333,118\n            A 6,6,0,0,1,539.5333,112 Z"}></path>
                              </g>
                            </g>
                            <defs>
                              <clippath id="recharts1-clip">
                                <rect x="33" y="4" height="114" width="524"></rect>
                              </clippath>
                            </defs>
                            <defs>
                              <pattern id="rq-succeeded" width="5" height="5" patternUnits="userSpaceOnUse" patterntransform="rotate(45)">
                                <rect width="5" height="5" fill="var(--color-succeeded)" fillOpacity="0.22"></rect>
                                <rect width="2" height="5" fill="var(--color-succeeded)" fillOpacity="0.5"></rect>
                              </pattern>
                              <pattern id="rq-partial" width="5" height="5" patternUnits="userSpaceOnUse" patterntransform="rotate(45)">
                                <rect width="5" height="5" fill="var(--color-partial)" fillOpacity="0.22"></rect>
                                <rect width="2" height="5" fill="var(--color-partial)" fillOpacity="0.5"></rect>
                              </pattern>
                              <pattern id="rq-failed" width="5" height="5" patternUnits="userSpaceOnUse" patterntransform="rotate(45)">
                                <rect width="5" height="5" fill="var(--color-failed)" fillOpacity="0.22"></rect>
                                <rect width="2" height="5" fill="var(--color-failed)" fillOpacity="0.5"></rect>
                              </pattern>
                            </defs>
                            <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_300" tabIndex="-1">
                              <g className="recharts-bar recharts-layer" id="recharts-bar-_r_v_">
                                <g className="recharts-bar-rectangles recharts-layer">
                                  <g className="recharts-layer">
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="37.3667" y="26.6733" width="13" height="91.3267" fill="url(#rq-succeeded)" radius="4" d={"M 37.3667,30.6733\n            A 4,4,0,0,1,41.3667,26.6733\n            L 46.3667,26.6733\n            A 4,4,0,0,1,50.3667,30.6733\n            L 50.3667,114\n            A 4,4,0,0,1,46.3667,118\n            L 41.3667,118\n            A 4,4,0,0,1,37.3667,114 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="59.2" y="30.6025" width="13" height="87.3975" fill="url(#rq-succeeded)" radius="4" d={"M 59.2,34.6025\n            A 4,4,0,0,1,63.2,30.6025\n            L 68.2,30.6025\n            A 4,4,0,0,1,72.2,34.6025\n            L 72.2,114\n            A 4,4,0,0,1,68.2,118\n            L 63.2,118\n            A 4,4,0,0,1,59.2,114 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="81.0333" y="13.8673" width="13" height="104.1327" fill="url(#rq-succeeded)" radius="4" d={"M 81.0333,17.8673\n            A 4,4,0,0,1,85.0333,13.8673\n            L 90.0333,13.8673\n            A 4,4,0,0,1,94.0333,17.8673\n            L 94.0333,114\n            A 4,4,0,0,1,90.0333,118\n            L 85.0333,118\n            A 4,4,0,0,1,81.0333,114 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="102.8667" y="22.9392" width="13" height="95.0608" fill="url(#rq-succeeded)" radius="4" d={"M 102.8667,26.9392\n            A 4,4,0,0,1,106.8667,22.9392\n            L 111.8667,22.9392\n            A 4,4,0,0,1,115.8667,26.9392\n            L 115.8667,114\n            A 4,4,0,0,1,111.8667,118\n            L 106.8667,118\n            A 4,4,0,0,1,102.8667,114 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="124.7" y="21.9841" width="13" height="96.0159" fill="url(#rq-succeeded)" radius="4" d={"M 124.7,25.9841\n            A 4,4,0,0,1,128.7,21.9841\n            L 133.7,21.9841\n            A 4,4,0,0,1,137.7,25.9841\n            L 137.7,114\n            A 4,4,0,0,1,133.7,118\n            L 128.7,118\n            A 4,4,0,0,1,124.7,114 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="146.5333" y="17.7611" width="13" height="100.2389" fill="url(#rq-succeeded)" radius="4" d={"M 146.5333,21.7611\n            A 4,4,0,0,1,150.5333,17.7611\n            L 155.5333,17.7611\n            A 4,4,0,0,1,159.5333,21.7611\n            L 159.5333,114\n            A 4,4,0,0,1,155.5333,118\n            L 150.5333,118\n            A 4,4,0,0,1,146.5333,114 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="168.3667" y="33.1688" width="13" height="84.8312" fill="url(#rq-succeeded)" radius="4" d={"M 168.3667,37.1688\n            A 4,4,0,0,1,172.3667,33.1688\n            L 177.3667,33.1688\n            A 4,4,0,0,1,181.3667,37.1688\n            L 181.3667,114\n            A 4,4,0,0,1,177.3667,118\n            L 172.3667,118\n            A 4,4,0,0,1,168.3667,114 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="190.2" y="24.0184" width="13" height="93.9816" fill="url(#rq-succeeded)" radius="4" d={"M 190.2,28.0184\n            A 4,4,0,0,1,194.2,24.0184\n            L 199.2,24.0184\n            A 4,4,0,0,1,203.2,28.0184\n            L 203.2,114\n            A 4,4,0,0,1,199.2,118\n            L 194.2,118\n            A 4,4,0,0,1,190.2,114 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="212.0333" y="22.4781" width="13" height="95.5219" fill="url(#rq-succeeded)" radius="4" d={"M 212.0333,26.4781\n            A 4,4,0,0,1,216.0333,22.4781\n            L 221.0333,22.4781\n            A 4,4,0,0,1,225.0333,26.4781\n            L 225.0333,114\n            A 4,4,0,0,1,221.0333,118\n            L 216.0333,118\n            A 4,4,0,0,1,212.0333,114 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="233.8667" y="22.6251" width="13" height="95.3749" fill="url(#rq-succeeded)" radius="4" d={"M 233.8667,26.6251\n            A 4,4,0,0,1,237.8667,22.6251\n            L 242.8667,22.6251\n            A 4,4,0,0,1,246.8667,26.6251\n            L 246.8667,114\n            A 4,4,0,0,1,242.8667,118\n            L 237.8667,118\n            A 4,4,0,0,1,233.8667,114 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="255.7" y="41.6681" width="13" height="76.3319" fill="url(#rq-succeeded)" radius="4" d={"M 255.7,45.6681\n            A 4,4,0,0,1,259.7,41.6681\n            L 264.7,41.6681\n            A 4,4,0,0,1,268.7,45.6681\n            L 268.7,114\n            A 4,4,0,0,1,264.7,118\n            L 259.7,118\n            A 4,4,0,0,1,255.7,114 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="277.5333" y="28.2693" width="13" height="89.7307" fill="url(#rq-succeeded)" radius="4" d={"M 277.5333,32.2693\n            A 4,4,0,0,1,281.5333,28.2693\n            L 286.5333,28.2693\n            A 4,4,0,0,1,290.5333,32.2693\n            L 290.5333,114\n            A 4,4,0,0,1,286.5333,118\n            L 281.5333,118\n            A 4,4,0,0,1,277.5333,114 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="299.3667" y="26.61" width="13" height="91.39" fill="url(#rq-succeeded)" radius="4" d={"M 299.3667,30.61\n            A 4,4,0,0,1,303.3667,26.61\n            L 308.3667,26.61\n            A 4,4,0,0,1,312.3667,30.61\n            L 312.3667,114\n            A 4,4,0,0,1,308.3667,118\n            L 303.3667,118\n            A 4,4,0,0,1,299.3667,114 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="321.2" y="37.592" width="13" height="80.408" fill="url(#rq-succeeded)" radius="4" d={"M 321.2,41.592\n            A 4,4,0,0,1,325.2,37.592\n            L 330.2,37.592\n            A 4,4,0,0,1,334.2,41.592\n            L 334.2,114\n            A 4,4,0,0,1,330.2,118\n            L 325.2,118\n            A 4,4,0,0,1,321.2,114 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="343.0333" y="11.0249" width="13" height="106.9751" fill="url(#rq-succeeded)" radius="4" d={"M 343.0333,15.0249\n            A 4,4,0,0,1,347.0333,11.0249\n            L 352.0333,11.0249\n            A 4,4,0,0,1,356.0333,15.0249\n            L 356.0333,114\n            A 4,4,0,0,1,352.0333,118\n            L 347.0333,118\n            A 4,4,0,0,1,343.0333,114 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="364.8667" y="16.9377" width="13" height="101.0623" fill="url(#rq-succeeded)" radius="4" d={"M 364.8667,20.9377\n            A 4,4,0,0,1,368.8667,16.9377\n            L 373.8667,16.9377\n            A 4,4,0,0,1,377.8667,20.9377\n            L 377.8667,114\n            A 4,4,0,0,1,373.8667,118\n            L 368.8667,118\n            A 4,4,0,0,1,364.8667,114 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="386.7" y="40.4015" width="13" height="77.5985" fill="url(#rq-succeeded)" radius="4" d={"M 386.7,44.4015\n            A 4,4,0,0,1,390.7,40.4015\n            L 395.7,40.4015\n            A 4,4,0,0,1,399.7,44.4015\n            L 399.7,114\n            A 4,4,0,0,1,395.7,118\n            L 390.7,118\n            A 4,4,0,0,1,386.7,114 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="408.5333" y="15.6483" width="13" height="102.3517" fill="url(#rq-succeeded)" radius="4" d={"M 408.5333,19.6483\n            A 4,4,0,0,1,412.5333,15.6483\n            L 417.5333,15.6483\n            A 4,4,0,0,1,421.5333,19.6483\n            L 421.5333,114\n            A 4,4,0,0,1,417.5333,118\n            L 412.5333,118\n            A 4,4,0,0,1,408.5333,114 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="430.3667" y="16.5805" width="13" height="101.4195" fill="url(#rq-succeeded)" radius="4" d={"M 430.3667,20.5805\n            A 4,4,0,0,1,434.3667,16.5805\n            L 439.3667,16.5805\n            A 4,4,0,0,1,443.3667,20.5805\n            L 443.3667,114\n            A 4,4,0,0,1,439.3667,118\n            L 434.3667,118\n            A 4,4,0,0,1,430.3667,114 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="452.2" y="37.5616" width="13" height="80.4384" fill="url(#rq-succeeded)" radius="4" d={"M 452.2,41.5616\n            A 4,4,0,0,1,456.2,37.5616\n            L 461.2,37.5616\n            A 4,4,0,0,1,465.2,41.5616\n            L 465.2,114\n            A 4,4,0,0,1,461.2,118\n            L 456.2,118\n            A 4,4,0,0,1,452.2,114 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="474.0333" y="11.1871" width="13" height="106.8129" fill="url(#rq-succeeded)" radius="4" d={"M 474.0333,15.1871\n            A 4,4,0,0,1,478.0333,11.1871\n            L 483.0333,11.1871\n            A 4,4,0,0,1,487.0333,15.1871\n            L 487.0333,114\n            A 4,4,0,0,1,483.0333,118\n            L 478.0333,118\n            A 4,4,0,0,1,474.0333,114 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="495.8667" y="32.2644" width="13" height="85.7356" fill="url(#rq-succeeded)" radius="4" d={"M 495.8667,36.2644\n            A 4,4,0,0,1,499.8667,32.2644\n            L 504.8667,32.2644\n            A 4,4,0,0,1,508.8667,36.2644\n            L 508.8667,114\n            A 4,4,0,0,1,504.8667,118\n            L 499.8667,118\n            A 4,4,0,0,1,495.8667,114 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="517.7" y="21.5079" width="13" height="96.4921" fill="url(#rq-succeeded)" radius="4" d={"M 517.7,25.5079\n            A 4,4,0,0,1,521.7,21.5079\n            L 526.7,21.5079\n            A 4,4,0,0,1,530.7,25.5079\n            L 530.7,114\n            A 4,4,0,0,1,526.7,118\n            L 521.7,118\n            A 4,4,0,0,1,517.7,114 Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" x="539.5333" y="76.1088" width="13" height="41.8912" fill="url(#rq-succeeded)" radius="4" d={"M 539.5333,80.1088\n            A 4,4,0,0,1,543.5333,76.1088\n            L 548.5333,76.1088\n            A 4,4,0,0,1,552.5333,80.1088\n            L 552.5333,114\n            A 4,4,0,0,1,548.5333,118\n            L 543.5333,118\n            A 4,4,0,0,1,539.5333,114 Z"}></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar recharts-layer" id="recharts-bar-_r_10_">
                                <g className="recharts-bar-rectangles recharts-layer">
                                  <g className="recharts-layer">
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar recharts-layer" id="recharts-bar-_r_11_">
                                <g className="recharts-bar-rectangles recharts-layer">
                                  <g className="recharts-layer">
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <g></g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_500" tabIndex="-1">
                              <g className="recharts-cartesian-axis recharts-layer recharts-xAxis xAxis">
                                <g className="recharts-cartesian-axis-ticks recharts-xAxis-ticks">
                                  <g className="recharts-cartesian-axis-tick-lines recharts-xAxis-tick-lines">
                                    <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                    <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                    <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                    <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                    <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                    <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-cartesian-axis recharts-layer recharts-yAxis yAxis">
                                <g className="recharts-cartesian-axis-ticks recharts-yAxis-ticks">
                                  <g className="recharts-cartesian-axis-tick-lines recharts-yAxis-tick-lines">
                                    <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                    <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                    <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                    <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_600" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                              <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="26" orientation="bottom" width="524" stroke="none" x="109.41666666666667" y="132" textAnchor="middle" fill="#666">
                                    <tspan x="109.41666666666667" dy="0.71em">
                                      18:00
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="26" orientation="bottom" width="524" stroke="none" x="196.74999999999997" y="132" textAnchor="middle" fill="#666">
                                    <tspan x="196.74999999999997" dy="0.71em">
                                      22:00
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="26" orientation="bottom" width="524" stroke="none" x="284.0833333333333" y="132" textAnchor="middle" fill="#666">
                                    <tspan x="284.0833333333333" dy="0.71em">
                                      02:00
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="26" orientation="bottom" width="524" stroke="none" x="371.4166666666667" y="132" textAnchor="middle" fill="#666">
                                    <tspan x="371.4166666666667" dy="0.71em">
                                      06:00
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="26" orientation="bottom" width="524" stroke="none" x="458.75" y="132" textAnchor="middle" fill="#666">
                                    <tspan x="458.75" dy="0.71em">
                                      10:00
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="26" orientation="bottom" width="524" stroke="none" x="544.078125" y="132" textAnchor="middle" fill="#666">
                                    <tspan x="544.078125" dy="0.71em">
                                      Now
                                    </tspan>
                                  </text>
                                </g>
                              </g>
                              <g className="recharts-cartesian-axis-tick-labels recharts-yAxis-tick-labels">
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" height="114" stroke="none" x="23" y="118" textAnchor="end" fill="#666">
                                    <tspan x="23" dy="0.355em">
                                      0
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" height="114" stroke="none" x="23" y="80" textAnchor="end" fill="#666">
                                    <tspan x="23" dy="0.355em">
                                      15K
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" height="114" stroke="none" x="23" y="42" textAnchor="end" fill="#666">
                                    <tspan x="23" dy="0.355em">
                                      30K
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" height="114" stroke="none" x="23" y="9" textAnchor="end" fill="#666">
                                    <tspan x="23" dy="0.355em">
                                      45K
                                    </tspan>
                                  </text>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </FramePanel>
              </Frame>
              <section className="flex flex-col gap-2 min-w-0">
                <div className="flex gap-3 items-center justify-between">
                  <h3 className="font-medium text-muted-foreground text-xs">
                    Sync
                  </h3>
                </div>
                <dl className="gap-x-3 gap-y-1.5 grid grid-cols-[7rem_minmax(0,1fr)] text-sm">
                  <div className="contents">
                    <dt className="text-muted-foreground">
                      Frequency
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-5 min-w-0 tabular-nums">
                      Every 15 minutes
                    </dd>
                  </div>
                  <div className="contents">
                    <dt className="text-muted-foreground">
                      Last sync
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-5 min-w-0 tabular-nums">
                      <span className="shrink-0 whitespace-nowrap">
                        4m ago
                      </span>
                      <span className="text-muted-foreground truncate">
                        Sep 29, 14:15 UTC
                      </span>
                    </dd>
                  </div>
                  <div className="contents">
                    <dt className="text-muted-foreground">
                      Next sync
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-5 min-w-0 tabular-nums">
                      <span className="shrink-0 whitespace-nowrap">
                        in 10m
                      </span>
                      <span className="text-muted-foreground truncate">
                        14:30 UTC
                      </span>
                    </dd>
                  </div>
                  <div className="contents">
                    <dt className="text-muted-foreground">
                      Datasets
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-5 min-w-0 tabular-nums">
                      <button className="cursor-pointer hover:text-primary hover:underline underline-offset-2" type="button">
                        4 of 6 linked
                      </button>
                    </dd>
                  </div>
                </dl>
              </section>
              <section className="flex flex-col gap-2 min-w-0">
                <div className="flex gap-3 items-center justify-between">
                  <h3 className="font-medium text-muted-foreground text-xs">
                    Connection
                  </h3>
                  <Button type="button" tabIndex="0">
                    <svg className="lucide lucide-key-round" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </svg>
                    Rotate
                  </Button>
                </div>
                <dl className="gap-x-3 gap-y-1.5 grid grid-cols-[7rem_minmax(0,1fr)] text-sm">
                  <div className="contents">
                    <dt className="text-muted-foreground">
                      Integration
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-5 min-w-0 tabular-nums">
                      <span className="flex gap-2 items-center min-w-0">
                        <IconTile variant="outline" size="xs" aria-hidden="true">
                          <svg aria-hidden="true" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                            <defs>
                              <lineargradient id="neon-a" x1="100%" x2="12.069%" y1="100%" y2="0%">
                                <stop offset="0%" stopColor="#62F755"></stop>
                                <stop offset="100%" stopColor="#8FF986" stopOpacity="0"></stop>
                              </lineargradient>
                              <lineargradient id="neon-b" x1="100%" x2="40.603%" y1="100%" y2="76.897%">
                                <stop offset="0%" stopOpacity=".9"></stop>
                                <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0"></stop>
                              </lineargradient>
                            </defs>
                            <path fill="#00E0D9" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                            <path fill="url(#neon-a)" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                            <path fill="url(#neon-b)" fillOpacity=".4" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                            <path fill="#63F655" d="M211.861 0C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723a4.409 4.409 0 0 0 4.409-4.409V115.058c0-25.223 31.914-36.167 47.395-16.256l48.391 62.243V8.825c0-4.871-3.953-8.825-8.832-8.825Z"></path>
                          </svg>
                        </IconTile>
                        <span className="truncate">
                          Neon
                        </span>
                        <span className="text-muted-foreground truncate">
                          Postgres
                        </span>
                      </span>
                    </dd>
                  </div>
                  <div className="contents">
                    <dt className="text-muted-foreground">
                      Endpoint
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-5 min-w-0 tabular-nums">
                      <span className="font-mono text-xs truncate">
                        ep-quiet-harbor-41.us-east-1.aws.neon.tech
                      </span>
                    </dd>
                  </div>
                  <div className="contents">
                    <dt className="text-muted-foreground">
                      Environment
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-5 min-w-0 tabular-nums">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                        Production
                      </Badge>
                    </dd>
                  </div>
                  <div className="contents">
                    <dt className="text-muted-foreground">
                      Signs in as
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-5 min-w-0 tabular-nums">
                      <span className="truncate">
                        harbor_sync
                      </span>
                    </dd>
                  </div>
                  <div className="contents">
                    <dt className="text-muted-foreground">
                      Password
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-5 min-w-0 tabular-nums">
                      <span className="font-mono text-xs">
                        ••••a71c
                      </span>
                      <span className="text-muted-foreground truncate">
                        Sep 1 by JOB-290
                      </span>
                    </dd>
                  </div>
                </dl>
              </section>
              <section className="flex flex-col gap-2 min-w-0">
                <div className="flex gap-3 items-center justify-between">
                  <h3 className="font-medium text-muted-foreground text-xs">
                    Recent Runs
                  </h3>
                </div>
                <ul className="-my-2 divide-border divide-y flex flex-col">
                  <li className="flex gap-2.5 items-start min-w-0 py-2">
                    <span className="[&_svg:not([class*=size-])]:size-4 flex h-5 items-center justify-center shrink-0 text-success w-4">
                      <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </span>
                    <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                      <span className="flex gap-2 items-center min-w-0 text-sm">
                        <span className="font-medium tabular-nums">
                          14:15
                        </span>
                        <span className="font-mono text-muted-foreground text-xs truncate">
                          RUN-58494
                        </span>
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5 items-end shrink-0 tabular-nums text-xs">
                      <span className="font-medium text-foreground">
                        7K rows
                      </span>
                      <span className="text-muted-foreground">
                        41s
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-2.5 items-start min-w-0 py-2">
                    <span className="[&_svg:not([class*=size-])]:size-4 flex h-5 items-center justify-center shrink-0 text-success w-4">
                      <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </span>
                    <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                      <span className="flex gap-2 items-center min-w-0 text-sm">
                        <span className="font-medium tabular-nums">
                          14:00
                        </span>
                        <span className="font-mono text-muted-foreground text-xs truncate">
                          RUN-58493
                        </span>
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5 items-end shrink-0 tabular-nums text-xs">
                      <span className="font-medium text-foreground">
                        9.5K rows
                      </span>
                      <span className="text-muted-foreground">
                        32s
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-2.5 items-start min-w-0 py-2">
                    <span className="[&_svg:not([class*=size-])]:size-4 flex h-5 items-center justify-center shrink-0 text-success w-4">
                      <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </span>
                    <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                      <span className="flex gap-2 items-center min-w-0 text-sm">
                        <span className="font-medium tabular-nums">
                          13:45
                        </span>
                        <span className="font-mono text-muted-foreground text-xs truncate">
                          RUN-58492
                        </span>
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5 items-end shrink-0 tabular-nums text-xs">
                      <span className="font-medium text-foreground">
                        11.8K rows
                      </span>
                      <span className="text-muted-foreground">
                        40s
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-2.5 items-start min-w-0 py-2">
                    <span className="[&_svg:not([class*=size-])]:size-4 flex h-5 items-center justify-center shrink-0 text-success w-4">
                      <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </span>
                    <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                      <span className="flex gap-2 items-center min-w-0 text-sm">
                        <span className="font-medium tabular-nums">
                          13:30
                        </span>
                        <span className="font-mono text-muted-foreground text-xs truncate">
                          RUN-58491
                        </span>
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5 items-end shrink-0 tabular-nums text-xs">
                      <span className="font-medium text-foreground">
                        9.3K rows
                      </span>
                      <span className="text-muted-foreground">
                        33s
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-2.5 items-start min-w-0 py-2">
                    <span className="[&_svg:not([class*=size-])]:size-4 flex h-5 items-center justify-center shrink-0 text-success w-4">
                      <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </span>
                    <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                      <span className="flex gap-2 items-center min-w-0 text-sm">
                        <span className="font-medium tabular-nums">
                          13:15
                        </span>
                        <span className="font-mono text-muted-foreground text-xs truncate">
                          RUN-58490
                        </span>
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5 items-end shrink-0 tabular-nums text-xs">
                      <span className="font-medium text-foreground">
                        7.1K rows
                      </span>
                      <span className="text-muted-foreground">
                        37s
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-2.5 items-start min-w-0 py-2">
                    <span className="[&_svg:not([class*=size-])]:size-4 flex h-5 items-center justify-center shrink-0 text-success w-4">
                      <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </span>
                    <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                      <span className="flex gap-2 items-center min-w-0 text-sm">
                        <span className="font-medium tabular-nums">
                          13:00
                        </span>
                        <span className="font-mono text-muted-foreground text-xs truncate">
                          RUN-58489
                        </span>
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5 items-end shrink-0 tabular-nums text-xs">
                      <span className="font-medium text-foreground">
                        9.9K rows
                      </span>
                      <span className="text-muted-foreground">
                        37s
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-2.5 items-start min-w-0 py-2">
                    <span className="[&_svg:not([class*=size-])]:size-4 flex h-5 items-center justify-center shrink-0 text-success w-4">
                      <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </span>
                    <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                      <span className="flex gap-2 items-center min-w-0 text-sm">
                        <span className="font-medium tabular-nums">
                          12:45
                        </span>
                        <span className="font-mono text-muted-foreground text-xs truncate">
                          RUN-58488
                        </span>
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5 items-end shrink-0 tabular-nums text-xs">
                      <span className="font-medium text-foreground">
                        9.7K rows
                      </span>
                      <span className="text-muted-foreground">
                        34s
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-2.5 items-start min-w-0 py-2">
                    <span className="[&_svg:not([class*=size-])]:size-4 flex h-5 items-center justify-center shrink-0 text-success w-4">
                      <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </span>
                    <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                      <span className="flex gap-2 items-center min-w-0 text-sm">
                        <span className="font-medium tabular-nums">
                          12:30
                        </span>
                        <span className="font-mono text-muted-foreground text-xs truncate">
                          RUN-58487
                        </span>
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5 items-end shrink-0 tabular-nums text-xs">
                      <span className="font-medium text-foreground">
                        9.3K rows
                      </span>
                      <span className="text-muted-foreground">
                        35s
                      </span>
                    </div>
                  </li>
                </ul>
              </section>
              <section className="flex flex-col gap-2 min-w-0">
                <div className="flex gap-3 items-center justify-between">
                  <h3 className="font-medium text-muted-foreground text-xs">
                    Ownership
                  </h3>
                </div>
                <dl className="gap-x-3 gap-y-1.5 grid grid-cols-[7rem_minmax(0,1fr)] text-sm">
                  <div className="contents">
                    <dt className="text-muted-foreground">
                      Owner
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-5 min-w-0 tabular-nums">
                      <span className="flex gap-2 items-center min-w-0">
                        <Avatar className="size-5" size="sm">
                          <AvatarImage alt="" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <span className="truncate">
                          Alex Johnson
                        </span>
                      </span>
                    </dd>
                  </div>
                  <div className="contents">
                    <dt className="text-muted-foreground">
                      Failure alerts
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-5 min-w-0 tabular-nums">
                      <span>
                        #data-platform
                      </span>
                    </dd>
                  </div>
                  <div className="contents">
                    <dt className="text-muted-foreground">
                      Created
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-5 min-w-0 tabular-nums">
                      Nov 4
                    </dd>
                  </div>
                </dl>
              </section>
            </TabsContent>
          </div>
        </div>
      </Tabs>
      <span className="sr-only" role="status"></span>
    </SheetContent>
    </Sheet>
  </>
  )
}
