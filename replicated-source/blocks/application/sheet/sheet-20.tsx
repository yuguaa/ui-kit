import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/bases/base/ui/alert"
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
        {"SLO detail"}
      </h1>
      <div className="flex items-center justify-center min-h-[360px]">
        <Sheet>
        <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-lg cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
          <svg className="lucide lucide-target" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TargetIcon" tabler="IconTarget" hugeicons="Target01Icon" phosphor="TargetIcon" remixicon="RiFocus3Line" data-icon="inline-start" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
          {"Open SLO"}
        </SheetTrigger>
        </Sheet>
      </div>
    </main>
    <Sheet>
    <SheetContent className="flex flex-col gap-0 h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden p-0 right-4 rounded-xl w-[min(36rem,calc(100vw-2rem))]" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" style={{"--nested-dialogs": "0"}} aria-labelledby="base-ui-_r_d_" aria-describedby="base-ui-_r_e_">
      <div className="border-b flex flex-col px-5 py-3.5 shrink-0">
        <div className="flex gap-2 items-center justify-between">
          <div className="flex gap-1 items-center min-w-0">
            <span className="font-mono min-w-0 text-muted-foreground text-xs truncate">
              {"SLO-104"}
            </span>
            <Button type="button" tabIndex="0" aria-label="Copy SLO ID">
              <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
              </svg>
            </Button>
          </div>
          <div className="flex gap-1 items-center shrink-0">
            <ButtonGroup role="group" aria-label="SLOs">
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" disabled="" tabIndex="0" disabled aria-label="Previous SLO" id="base-ui-_r_5_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-chevron-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine" aria-hidden="true">
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-16 tabular-nums text-xs">
                {"1 of 18"}
              </div>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Next SLO" id="base-ui-_r_7_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
            </ButtonGroup>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More SLO actions" aria-haspopup="menu" id="base-ui-_r_b_" aria-expanded="false">
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
        <div className="flex flex-wrap gap-2 items-center min-w-0 mt-1">
          <SheetTitle className="min-w-0 text-lg" id="base-ui-_r_d_">
            {"Ledger write success"}
          </SheetTitle>
          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
            {"Exhausted"}
          </Badge>
        </div>
        <SheetDescription className="mt-1" id="base-ui-_r_e_">
          <span className="flex flex-wrap gap-1.5 items-center min-w-0">
            <span className="[&_svg:not([class*=size-])]:size-3.5 flex gap-1.5 items-center min-w-0">
              <span className="flex shrink-0 text-muted-foreground">
                <svg className="lucide lucide-badge-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BadgeCheckIcon" tabler="IconRosetteDiscountCheck" hugeicons="CheckmarkBadge01Icon" phosphor="SealCheckIcon" remixicon="RiVerifiedBadgeLine" aria-hidden="true">
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </span>
              <span className="truncate">
                {"Correctness"}
              </span>
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span className="tabular-nums">
              {"99.99% over 30 days"}
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span className="[&_svg:not([class*=size-])]:size-3.5 flex gap-1.5 items-center min-w-0">
              <span className="flex shrink-0 text-muted-foreground">
                <svg className="lucide lucide-database" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                  <path d="M3 12A9 3 0 0 0 21 12"></path>
                </svg>
              </span>
              <span className="truncate">
                {"ledger-worker"}
              </span>
            </span>
          </span>
        </SheetDescription>
        <div className="flex gap-2 items-center mt-2.5">
          <Button type="button" tabIndex="0">
            <svg className="lucide lucide-bell-off" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellOffIcon" tabler="IconBellOff" hugeicons="NotificationOff03Icon" phosphor="BellSlashIcon" remixicon="RiNotificationOffLine" aria-hidden="true">
              <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
              <path d="M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742"></path>
              <path d="m2 2 20 20"></path>
              <path d="M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05"></path>
            </svg>
            {"Mute Alerts"}
          </Button>
          <Button type="button" tabIndex="0">
            <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
              <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
              <path d="m15 5 4 4"></path>
            </svg>
            {"Edit"}
          </Button>
        </div>
      </div>
      <Tabs className="flex-1 flex-col gap-0 min-h-0" data-orientation="horizontal" activationDirection="none">
        <div className="border-b px-5 shrink-0">
          <TabsList className="-mb-px gap-5 h-10! no-scrollbar overflow-x-auto p-0" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
            <TabsTrigger className="after:-bottom-px! flex-none font-medium gap-1.5 h-full! px-0 text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_f_" compositeItemActive="" aria-controls="base-ui-_r_j_">
              {"Overview"}
            </TabsTrigger>
            <TabsTrigger className="after:-bottom-px! flex-none font-medium gap-1.5 h-full! px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_g_">
              {"Burn Rate"}
            </TabsTrigger>
            <TabsTrigger className="after:-bottom-px! flex-none font-medium gap-1.5 h-full! px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_h_">
              {"Events"}
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                {"2"}
              </Badge>
            </TabsTrigger>
            <TabsTrigger className="after:-bottom-px! flex-none font-medium gap-1.5 h-full! px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_i_">
              {"Settings"}
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="flex-1 min-h-0 no-scrollbar overflow-y-auto scroll-fade-y scroll-py-10">
          <div className="flex flex-col gap-5 px-5 py-5">
            <TabsContent className="flex flex-col gap-5" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_j_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_f_">
              <Alert className="[&>svg:not([class*=size-])]:size-4 [&>svg]:text-destructive bg-destructive/4 border border-destructive/30 gap-y-0.5 grid grid-cols-[0_1fr] has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_[data-slot=alert-action]]:sm:row-end-3 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_svg]:translate-y-0.5 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:items-start has-[>svg]:gap-x-2.5 has-[>svg]:grid-cols-[calc(var(--spacing)*3)_1fr] items-center px-3 py-2.5 style-luma:rounded-2xl style-lyra:rounded-none style-maia:rounded-lg style-mira:rounded-lg style-nova:rounded-lg style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-lg text-sm" role="alert">
                <svg className="lucide lucide-octagon-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="OctagonXIcon" tabler="IconAlertOctagon" hugeicons="MultiplicationSignCircleIcon" phosphor="XCircleIcon" remixicon="RiCloseCircleLine" aria-hidden="true">
                  <path d="m15 9-6 6"></path>
                  <path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"></path>
                  <path d="m9 9 6 6"></path>
                </svg>
                <AlertTitle className="col-start-2 font-medium line-clamp-1 min-h-4 tracking-tight">
                  {"Deploy Freeze"}
                </AlertTitle>
                <AlertDescription className="[&_p]:leading-relaxed col-start-2 gap-1 grid justify-items-start text-muted-foreground text-sm">
                  {"The budget is 42% over. Releases to ledger-worker need SRE approval until it recovers."}
                </AlertDescription>
              </Alert>
              <Frame className="min-w-0" spacing="default">
                <header className="flex flex-row flex-wrap gap-(--frame-panel-header-gap) gap-x-3 gap-y-2 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                  <div className="flex flex-1 gap-3 items-center min-w-0">
                    <IconTile variant="frame" size="sm" aria-hidden="true">
                      <svg className="lucide lucide-trending-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                        <path d="M16 17h6v-6"></path>
                        <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                      </svg>
                    </IconTile>
                    <div className="flex flex-col gap-px min-w-0">
                      <div className="flex flex-wrap gap-x-2 gap-y-1 items-center min-w-0">
                        <div className="font-semibold text-sm truncate" role="heading" aria-level="3">
                          {"Burn-Down"}
                        </div>
                      </div>
                      <div className="text-muted-foreground text-sm truncate">
                        {"Budget left, day by day"}
                      </div>
                    </div>
                  </div>
                </header>
                <FramePanel className="flex flex-col gap-4">
                  <div className="flex gap-4 items-center min-w-0">
                    <p className="flex gap-1.5 items-baseline shrink-0">
                      <span className="font-semibold tabular-nums text-3xl text-destructive tracking-tight">
                        {"42%"}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {"over budget"}
                      </span>
                    </p>
                    <p className="min-w-0 text-muted-foreground text-pretty text-sm">
                      {"Two incidents spent 112% in six days."}
                    </p>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="cursor-crosshair flex flex-col min-w-0 select-none touch-pan-y" style={{opacity: "1"}}>
                      <div className="flex flex-col h-60 min-w-0 relative">
                        <div className="-bottom-1.5 absolute bg-linear-to-b from-foreground/2 left-0 pointer-events-none to-foreground/8 top-3.5" aria-hidden="true" style={{width: "26px", borderRadius: "13px", transform: "translateX(379.311px)"}}></div>
                        <div className="h-8 shrink-0" aria-hidden="true"></div>
                        <div className="flex-1 min-h-0 relative">
                          <ChartContainer>
                          <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden [&_.recharts-surface]:overflow-visible [&_[class*=recharts-zIndex-layer]]:outline-hidden absolute aspect-auto cn-chart flex focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring/50 focus-visible:outline-solid h-auto inset-0 justify-center min-w-0 outline-hidden text-xs" data-chart="chart-_r_l_" role="group" aria-label="Ledger write success error budget, last 30 days: 42% over budget. Arrow keys move, Enter selects a day, Shift+Enter extends, Escape clears." tabIndex="0">
                            <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                              <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                                <div className="recharts-wrapper" width="501" height="176" style={{position: "relative", cursor: "default", width: "501px", height: "176px"}}>
                                  <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                                  <svg className="recharts-surface" width="501" height="176" viewBox="0 0 501 176" style={{width: "100%", height: "100%", display: "block"}}>
                                    <title></title>
                                    <desc></desc>
                                    <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                    <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                    <defs>
                                      <clippath id="recharts1-clip">
                                        <rect x="12" y="10" height="162" width="477"></rect>
                                      </clippath>
                                    </defs>
                                    <defs>
                                      <lineargradient id="bbc-overspend-rk" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0" stopColor="var(--destructive)" stopOpacity="0.07"></stop>
                                        <stop offset="1" stopColor="var(--destructive)" stopOpacity="0"></stop>
                                      </lineargradient>
                                    </defs>
                                    <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                      <g className="recharts-layer recharts-reference-area">
                                        <path className="recharts-rectangle recharts-reference-area-rect" y1="-1" y2="0" fill="url(#bbc-overspend-rk)" fillOpacity="1" strokeOpacity="0" stroke="none" strokeWidth="1" x="12" y="91" width="477" height="81" radius="0" d="M 12,91 h 477 v 81 h -477 Z"></path>
                                      </g>
                                    </g>
                                    <g className="recharts-zIndex-layer_200" tabIndex="-1">
                                      <g className="recharts-layer recharts-reference-line">
                                        <line className="recharts-reference-line-line" y="0.25" stroke="var(--warning)" strokeDasharray="4 4" fill="none" fillOpacity="1" strokeWidth="1" x1="12" y1="70.75" x2="489" y2="70.75"></line>
                                      </g>
                                      <g className="recharts-layer recharts-reference-line">
                                        <line className="recharts-reference-line-line" y="0" stroke="var(--foreground)" strokeOpacity="0.22" fill="none" fillOpacity="1" strokeWidth="1" x1="12" y1="91" x2="489" y2="91"></line>
                                      </g>
                                      <g className="recharts-layer recharts-reference-line">
                                        <line className="recharts-reference-line-line" y="0" stroke="none" fill="none" fillOpacity="1" strokeWidth="1" x1="12" y1="91" x2="489" y2="91"></line>
                                      </g>
                                    </g>
                                    <g className="recharts-zIndex-layer_300" tabIndex="-1">
                                      <g className="recharts-bar recharts-layer" id="recharts-bar-_r_p_">
                                        <g className="recharts-bar-rectangles recharts-layer">
                                          <g className="recharts-layer">
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="18.289189189189187" x2="18.289189189189187" y1="91" y2="17.86837681980773" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round"></line>
                                                  <line x1="14.789189189189187" x2="21.789189189189187" y1="12.69999999999999" y2="12.69999999999999" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="18.289189189189187" cy="10.868376819807727" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="31.181081081081082" x2="31.181081081081082" y1="91" y2="18.43579994033192" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round"></line>
                                                  <line x1="27.681081081081082" x2="34.68108108108108" y1="15.399999999999999" y2="15.399999999999999" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="31.181081081081082" cy="11.43579994033192" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="44.07297297297297" x2="44.07297297297297" y1="91" y2="19.498542690926914" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round"></line>
                                                  <line x1="40.57297297297297" x2="47.57297297297297" y1="18.10000000000001" y2="18.10000000000001" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="44.07297297297297" cy="12.498542690926914" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="56.964864864864865" x2="56.964864864864865" y1="91" y2="20.482912082333513" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round"></line>
                                                  <line x1="53.464864864864865" x2="60.464864864864865" y1="20.799999999999997" y2="20.799999999999997" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="56.964864864864865" cy="13.482912082333511" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="69.85675675675675" x2="69.85675675675675" y1="91" y2="21.10362908710582" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round"></line>
                                                  <line x1="66.35675675675675" x2="73.35675675675675" y1="23.49999999999999" y2="23.49999999999999" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="69.85675675675675" cy="14.10362908710582" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="82.74864864864864" x2="82.74864864864864" y1="91" y2="21.805854385434095" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round"></line>
                                                  <line x1="79.24864864864864" x2="86.24864864864864" y1="26.199999999999996" y2="26.199999999999996" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="82.74864864864864" cy="14.805854385434095" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="95.64054054054054" x2="95.64054054054054" y1="91" y2="22.533159158702652" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round"></line>
                                                  <line x1="92.14054054054054" x2="99.14054054054054" y1="28.900000000000002" y2="28.900000000000002" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="95.64054054054054" cy="15.533159158702654" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="108.53243243243243" x2="108.53243243243243" y1="91" y2="23.097447344859294" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round"></line>
                                                  <line x1="105.03243243243243" x2="112.03243243243243" y1="31.599999999999998" y2="31.599999999999998" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="108.53243243243243" cy="16.097447344859294" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="121.42432432432432" x2="121.42432432432432" y1="91" y2="23.74951369330697" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round"></line>
                                                  <line x1="117.92432432432432" x2="124.92432432432432" y1="34.300000000000004" y2="34.300000000000004" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="121.42432432432432" cy="16.74951369330697" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="134.31621621621622" x2="134.31621621621622" y1="91" y2="24.50816781025091" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round"></line>
                                                  <line x1="130.81621621621622" x2="137.81621621621622" y1="36.99999999999999" y2="36.99999999999999" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="134.31621621621622" cy="17.50816781025091" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="147.2081081081081" x2="147.2081081081081" y1="91" y2="25.257417124092242" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round"></line>
                                                  <line x1="143.7081081081081" x2="150.7081081081081" y1="39.7" y2="39.7" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="147.2081081081081" cy="18.257417124092242" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="160.1" x2="160.1" y1="91" y2="26.213572106191002" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round"></line>
                                                  <line x1="156.6" x2="163.6" y1="42.39999999999999" y2="42.39999999999999" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="160.1" cy="19.213572106191002" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="172.9918918918919" x2="172.9918918918919" y1="91" y2="27.094488663468862" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round"></line>
                                                  <line x1="169.4918918918919" x2="176.4918918918919" y1="45.1" y2="45.1" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="172.9918918918919" cy="20.094488663468862" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="185.88378378378377" x2="185.88378378378377" y1="91" y2="27.95032574580646" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round"></line>
                                                  <line x1="182.38378378378377" x2="189.38378378378377" y1="47.800000000000004" y2="47.800000000000004" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="185.88378378378377" cy="20.95032574580646" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="198.77567567567567" x2="198.77567567567567" y1="91" y2="29.04441784007682" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round"></line>
                                                  <line x1="195.27567567567567" x2="202.27567567567567" y1="50.5" y2="50.5" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="198.77567567567567" cy="22.04441784007682" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="211.66756756756754" x2="211.66756756756754" y1="91" y2="30.097755787569234" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round"></line>
                                                  <line x1="208.16756756756754" x2="215.16756756756754" y1="53.199999999999996" y2="53.199999999999996" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="211.66756756756754" cy="23.097755787569234" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="224.55945945945945" x2="224.55945945945945" y1="91" y2="30.994347016684777" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round"></line>
                                                  <line x1="221.05945945945945" x2="228.05945945945945" y1="55.9" y2="55.9" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="224.55945945945945" cy="23.994347016684777" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="237.45135135135135" x2="237.45135135135135" y1="91" y2="31.91288278637311" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round"></line>
                                                  <line x1="233.95135135135135" x2="240.95135135135135" y1="58.60000000000001" y2="58.60000000000001" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="237.45135135135135" cy="24.91288278637311" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="250.34324324324322" x2="250.34324324324322" y1="91" y2="33.18566613959309" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round"></line>
                                                  <line x1="246.84324324324322" x2="253.84324324324322" y1="61.3" y2="61.3" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="250.34324324324322" cy="26.18566613959309" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="263.2351351351351" x2="263.2351351351351" y1="91" y2="33.590072673005345" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round"></line>
                                                  <line x1="259.7351351351351" x2="266.7351351351351" y1="63.999999999999986" y2="63.999999999999986" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="263.2351351351351" cy="26.590072673005345" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="276.127027027027" x2="276.127027027027" y1="91" y2="34.01328881262283" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round"></line>
                                                  <line x1="272.627027027027" x2="279.627027027027" y1="66.69999999999999" y2="66.69999999999999" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="276.127027027027" cy="27.013288812622832" r="4" fill="var(--success)" opacity="0.7"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="289.0189189189189" x2="289.0189189189189" y1="82.74637231491552" y2="69.4" stroke="var(--muted-foreground)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 2"></line>
                                                  <line x1="285.5189189189189" x2="292.5189189189189" y1="69.4" y2="69.4" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="289.0189189189189" cy="87.74637231491552" r="7" fill="none" stroke="var(--destructive)" strokeOpacity="0.35" strokeWidth="1.5"></circle>
                                                  <circle cx="289.0189189189189" cy="87.74637231491552" r="4" fill="var(--warning)"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="301.9108108108108" x2="301.9108108108108" y1="83.60220939725309" y2="72.1" stroke="var(--muted-foreground)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 2"></line>
                                                  <line x1="298.4108108108108" x2="305.4108108108108" y1="72.1" y2="72.1" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="301.9108108108108" cy="88.60220939725309" r="4" fill="var(--warning)"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="314.8027027027027" x2="314.8027027027027" y1="84.36086351419704" y2="74.8" stroke="var(--muted-foreground)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 2"></line>
                                                  <line x1="311.3027027027027" x2="318.3027027027027" y1="74.8" y2="74.8" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="314.8027027027027" cy="89.36086351419704" r="4" fill="var(--warning)"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="327.6945945945946" x2="327.6945945945946" y1="85.06935868126038" y2="77.50000000000001" stroke="var(--muted-foreground)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 2"></line>
                                                  <line x1="324.1945945945946" x2="331.1945945945946" y1="77.50000000000001" y2="77.50000000000001" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="327.6945945945946" cy="90.06935868126038" r="4" fill="var(--warning)"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="340.5864864864865" x2="340.5864864864865" y1="91" y2="80.2" stroke="var(--muted-foreground)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 2"></line>
                                                  <line x1="337.0864864864865" x2="344.0864864864865" y1="80.2" y2="80.2" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="340.5864864864865" cy="91.28571321586469" r="4" fill="var(--destructive)"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="353.47837837837835" x2="353.47837837837835" y1="91" y2="115.97362980292783" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round"></line>
                                                  <line x1="353.47837837837835" x2="353.47837837837835" y1="91" y2="82.89999999999999" stroke="var(--muted-foreground)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 2"></line>
                                                  <line x1="349.97837837837835" x2="356.97837837837835" y1="82.89999999999999" y2="82.89999999999999" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="353.47837837837835" cy="122.97362980292783" r="7" fill="none" stroke="var(--destructive)" strokeOpacity="0.35" strokeWidth="1.5"></circle>
                                                  <circle cx="353.47837837837835" cy="122.97362980292783" r="4" fill="var(--destructive)"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="366.3702702702702" x2="366.3702702702702" y1="91" y2="116.50343371104158" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round"></line>
                                                  <line x1="366.3702702702702" x2="366.3702702702702" y1="91" y2="85.6" stroke="var(--muted-foreground)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 2"></line>
                                                  <line x1="362.8702702702702" x2="369.8702702702702" y1="85.6" y2="85.6" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="366.3702702702702" cy="123.50343371104158" r="4" fill="var(--destructive)"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="379.26216216216216" x2="379.26216216216216" y1="91" y2="117.51288257738845" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round"></line>
                                                  <line x1="379.26216216216216" x2="379.26216216216216" y1="91" y2="88.30000000000001" stroke="var(--muted-foreground)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 2"></line>
                                                  <line x1="375.76216216216216" x2="382.76216216216216" y1="88.30000000000001" y2="88.30000000000001" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="379.26216216216216" cy="124.51288257738845" r="4" fill="var(--destructive)"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="392.15405405405403" x2="392.15405405405403" y1="91" y2="117.26526682559731" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round"></line>
                                                  <line x1="388.65405405405403" x2="395.65405405405403" y1="91" y2="91" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"></line>
                                                  <circle cx="392.15405405405403" cy="125.26526682559731" r="10" fill="var(--destructive)" fillOpacity="0.18"></circle>
                                                  <circle cx="392.15405405405403" cy="125.26526682559731" r="7" fill="var(--card)"></circle>
                                                  <circle cx="392.15405405405403" cy="125.26526682559731" r="5" fill="var(--destructive)"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="405.0459459459459" x2="405.0459459459459" y1="91" y2="124.00284645821793" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round" strokeDasharray="1.5 3.5"></line>
                                                  <circle cx="405.0459459459459" cy="130.50284645821793" r="3.5" fill="var(--card)" stroke="var(--destructive)" strokeWidth="1.5"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="417.93783783783783" x2="417.93783783783783" y1="91" y2="129.24042609083853" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round" strokeDasharray="1.5 3.5"></line>
                                                  <circle cx="417.93783783783783" cy="135.74042609083853" r="3.5" fill="var(--card)" stroke="var(--destructive)" strokeWidth="1.5"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="430.8297297297297" x2="430.8297297297297" y1="91" y2="134.4780057234591" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round" strokeDasharray="1.5 3.5"></line>
                                                  <circle cx="430.8297297297297" cy="140.9780057234591" r="3.5" fill="var(--card)" stroke="var(--destructive)" strokeWidth="1.5"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="443.7216216216216" x2="443.7216216216216" y1="91" y2="139.7155853560797" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round" strokeDasharray="1.5 3.5"></line>
                                                  <circle cx="443.7216216216216" cy="146.2155853560797" r="3.5" fill="var(--card)" stroke="var(--destructive)" strokeWidth="1.5"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="456.6135135135135" x2="456.6135135135135" y1="91" y2="144.95316498870034" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round" strokeDasharray="1.5 3.5"></line>
                                                  <circle cx="456.6135135135135" cy="151.45316498870034" r="3.5" fill="var(--card)" stroke="var(--destructive)" strokeWidth="1.5"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="469.5054054054054" x2="469.5054054054054" y1="91" y2="150.19074462132093" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round" strokeDasharray="1.5 3.5"></line>
                                                  <circle cx="469.5054054054054" cy="156.69074462132093" r="3.5" fill="var(--card)" stroke="var(--destructive)" strokeWidth="1.5"></circle>
                                                </g>
                                              </g>
                                            </g>
                                            <g className="recharts-bar-rectangle recharts-layer">
                                              <g className="recharts-inactive-bar recharts-layer">
                                                <g aria-hidden="true">
                                                  <line x1="482.39729729729726" x2="482.39729729729726" y1="91" y2="155.42832425394153" stroke="var(--muted-foreground)" strokeOpacity="0.24" strokeWidth="1" strokeLinecap="round" strokeDasharray="1.5 3.5"></line>
                                                  <circle cx="482.39729729729726" cy="161.92832425394153" r="3.5" fill="var(--card)" stroke="var(--destructive)" strokeWidth="1.5"></circle>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                                    <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                                    <g className="recharts-zIndex-layer_600" tabIndex="-1"></g>
                                    <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                                    <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                                    <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                                    <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                                      <text className="dark:fill-warning fill-warning-foreground font-medium text-xs" aria-hidden="true" x="12" y="64.75" textAnchor="start" stroke="var(--card)" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                                        {"Warn 25%"}
                                      </text>
                                      <text className="fill-muted-foreground font-medium text-xs" aria-hidden="true" x="12" y="85" textAnchor="start" stroke="var(--card)" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                                        {"0%"}
                                      </text>
                                      <text className="fill-destructive font-medium text-xs" aria-hidden="true" x="12" y="106" textAnchor="start" stroke="var(--card)" strokeWidth="4" strokeLinejoin="round" paint-order="stroke">
                                        {"Over budget"}
                                      </text>
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          </ChartContainer>
                        </div>
                        <div className="@container h-6 mt-2 relative shrink-0" aria-hidden="true">
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "70.0135px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "82.9054px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "95.7973px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "147.365px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "160.257px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "173.149px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "186.041px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "237.608px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "250.5px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "263.392px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "314.959px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "327.851px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "418.095px"}}></span>
                          <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "430.986px"}}></span>
                          <span className="absolute bg-muted flex font-medium h-6 items-center justify-center left-0 min-w-6 px-2 rounded-full tabular-nums text-muted-foreground text-xs top-0 whitespace-nowrap" style={{transform: "translateX(clamp(0px, -50% + 31.3378px, -100% + 100cqw))"}}>
                            {"Sep 1"}
                          </span>
                          <span className="absolute bg-muted flex font-medium h-6 items-center justify-center left-0 min-w-6 px-1 rounded-full tabular-nums text-muted-foreground text-xs top-0 whitespace-nowrap" style={{transform: "translateX(clamp(0px, -50% + 121.581px, -100% + 100cqw))"}}>
                            {"8"}
                          </span>
                          <span className="absolute bg-muted flex font-medium h-6 items-center justify-center left-0 min-w-6 px-1 rounded-full tabular-nums text-muted-foreground text-xs top-0 whitespace-nowrap" style={{transform: "translateX(clamp(0px, -50% + 211.824px, -100% + 100cqw))"}}>
                            {"15"}
                          </span>
                          <span className="absolute bg-destructive/10 flex font-medium h-6 items-center justify-center left-0 min-w-6 px-1 ring-1 ring-destructive/25 ring-inset rounded-full tabular-nums text-destructive text-xs top-0 whitespace-nowrap" style={{transform: "translateX(clamp(0px, -50% + 289.176px, -100% + 100cqw))"}}>
                            {"21"}
                          </span>
                          <span className="absolute bg-destructive/10 flex font-medium h-6 items-center justify-center left-0 min-w-6 px-1 ring-1 ring-destructive/25 ring-inset rounded-full tabular-nums text-destructive text-xs top-0 whitespace-nowrap" style={{transform: "translateX(clamp(0px, -50% + 353.635px, -100% + 100cqw))"}}>
                            {"26"}
                          </span>
                          <span className="absolute bg-foreground flex font-semibold h-6 items-center justify-center left-0 min-w-6 px-1 rounded-full tabular-nums text-background text-xs top-0 whitespace-nowrap" style={{transform: "translateX(clamp(0px, -50% + 392.311px, -100% + 100cqw))"}}>
                            {"29"}
                          </span>
                          <span className="absolute flex font-medium h-6 items-center justify-center left-0 min-w-6 px-2 ring-1 ring-border ring-inset rounded-full tabular-nums text-muted-foreground text-xs top-0 whitespace-nowrap" style={{transform: "translateX(clamp(0px, -50% + 482.554px, -100% + 100cqw))"}}>
                            {"Oct 6"}
                          </span>
                        </div>
                        <div className="@container absolute h-7 inset-x-0 pointer-events-none top-1" aria-hidden="true">
                          <div className="absolute flex left-0 top-0" style={{transform: "translateX(clamp(0px, -50% + 503.135px, -100% + 100cqw))"}}>
                            <span className="bg-foreground font-semibold gap-1.5 h-7 inline-flex items-center px-3 rounded-full tabular-nums text-background text-xs whitespace-nowrap" aria-hidden="true">
                              {"42% over"}
                              <span className="bg-background/40 rounded-full size-1"></span>
                              <span className="font-medium text-background/65">
                                {"Today"}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="sr-only" aria-live="polite"></p>
                </FramePanel>
                <footer className="flex flex-row flex-wrap gap-(--frame-panel-footer-gap) gap-x-4 gap-y-1 items-center justify-between min-h-10 px-(--frame-panel-footer-px) py-(--frame-panel-footer-py) tabular-nums text-muted-foreground text-xs">
                  <div className="flex gap-4 items-center max-sm:hidden" aria-hidden="true">
                    <span className="flex gap-1.5 items-center">
                      <svg className="shrink-0" aria-hidden="true" width="12" height="12" viewBox="0 0 12 12">
                        <line x1="2.5" x2="9.5" y1="6" y2="6" stroke="var(--muted-foreground)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round"></line>
                      </svg>
                      {"Even burn"}
                    </span>
                    <span className="flex gap-1.5 items-center">
                      <svg className="shrink-0" aria-hidden="true" width="12" height="12" viewBox="0 0 12 12">
                        <circle cx="6" cy="6" r="3.5" fill="var(--card)" stroke="var(--muted-foreground)" strokeWidth="1.5"></circle>
                      </svg>
                      {"Forecast"}
                    </span>
                    <span className="flex gap-1.5 items-center">
                      <span className="bg-destructive/10 ring-1 ring-destructive/25 ring-inset rounded-full shrink-0 size-3" aria-hidden="true"></span>
                      {"Incident"}
                    </span>
                  </div>
                  <div className="flex gap-1.5 items-center min-w-0 sm:ms-auto" aria-live="off" aria-busy="false">
                    <span>
                      {"Drag across days to sum spend"}
                    </span>
                  </div>
                </footer>
              </Frame>
              <section className="flex flex-col gap-3 min-w-0">
                <h3 className="font-medium text-muted-foreground text-xs">
                  {"Budget"}
                </h3>
                <dl className="gap-x-3 gap-y-2.5 grid grid-cols-[7rem_minmax(0,1fr)] text-sm">
                  <div className="contents">
                    <dt className="text-muted-foreground">
                      {"Attainment"}
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-5 min-w-0 tabular-nums">
                      <span className="font-medium">
                        {"99.986%"}
                      </span>
                      <span className="text-muted-foreground truncate">
                        {"target 99.99%"}
                      </span>
                    </dd>
                  </div>
                  <div className="contents">
                    <dt className="text-muted-foreground">
                      {"Allowance"}
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-5 min-w-0 tabular-nums">
                      <span>
                        {"4m 19s"}
                      </span>
                      <span className="text-muted-foreground truncate">
                        {"or 25.8K records"}
                      </span>
                    </dd>
                  </div>
                  <div className="contents">
                    <dt className="text-muted-foreground">
                      {"Spent"}
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-5 min-w-0 tabular-nums">
                      <span>
                        {"142%"}
                      </span>
                      <span className="text-muted-foreground truncate">
                        {"36.8K bad records"}
                      </span>
                    </dd>
                  </div>
                  <div className="contents">
                    <dt className="text-muted-foreground">
                      {"Runs out"}
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-5 min-w-0 tabular-nums">
                      <span className="text-destructive">
                        {"Already spent"}
                      </span>
                    </dd>
                  </div>
                </dl>
              </section>
              <section className="flex flex-col gap-3 min-w-0">
                <h3 className="font-medium text-muted-foreground text-xs">
                  {"Definition"}
                </h3>
                <dl className="gap-x-3 gap-y-2.5 grid grid-cols-[7rem_minmax(0,1fr)] text-sm">
                  <div className="contents">
                    <dt className="text-muted-foreground">
                      {"Indicator"}
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-5 min-w-0 tabular-nums">
                      <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                        <span className="flex shrink-0 text-muted-foreground">
                          <svg className="lucide lucide-badge-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BadgeCheckIcon" tabler="IconRosetteDiscountCheck" hugeicons="CheckmarkBadge01Icon" phosphor="SealCheckIcon" remixicon="RiVerifiedBadgeLine" aria-hidden="true">
                            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <span className="truncate">
                          {"Correctness"}
                        </span>
                      </span>
                    </dd>
                  </div>
                  <div className="contents">
                    <dt className="text-muted-foreground">
                      {"Good event"}
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-5 min-w-0 tabular-nums">
                      <span className="text-pretty">
                        {"Share of ledger writes committed on the first attempt"}
                      </span>
                    </dd>
                  </div>
                  <div className="contents">
                    <dt className="text-muted-foreground">
                      {"Service"}
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-5 min-w-0 tabular-nums">
                      <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                        <span className="flex shrink-0 text-muted-foreground">
                          <svg className="lucide lucide-database" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                            <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                            <path d="M3 12A9 3 0 0 0 21 12"></path>
                          </svg>
                        </span>
                        <span className="truncate">
                          {"ledger-worker"}
                        </span>
                      </span>
                    </dd>
                  </div>
                  <div className="contents">
                    <dt className="text-muted-foreground">
                      {"Owner"}
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-5 min-w-0 tabular-nums">
                      <span className="flex gap-2 items-center min-w-0">
                        <Avatar className="size-5" size="sm">
                          <AvatarImage alt="" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <span className="truncate">
                          {"Alex Johnson"}
                        </span>
                      </span>
                    </dd>
                  </div>
                  <div className="contents">
                    <dt className="text-muted-foreground">
                      {"Created"}
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-5 min-w-0 tabular-nums">
                      {"Feb 20"}
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
