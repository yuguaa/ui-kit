import {
  GanttNavNext,
  GanttNavPrev,
  GanttNavToday,
} from "@/registry-neui/bases/base/neui/gantt/gantt-nav"
import { GanttBar } from "@/registry-neui/bases/radix/neui/gantt/gantt-bar"
import {
  GanttNav,
  GanttTitle,
  GanttToolbar,
} from "@/registry-neui/bases/radix/neui/gantt/gantt-nav"
import { GanttView } from "@/registry-neui/bases/radix/neui/gantt/gantt-view"
import { Gantt } from "@/registry-neui/bases/radix/neui/gantt/gantt"
import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col h-svh p-4 w-full">
      <Card className="flex-1 gap-0! min-h-0 p-0!" size="default">
        <Gantt className="flex-1">
          <GanttNav>
            <GanttNavToday className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" id="base-ui-_r_1_" baseUiTooltipTrigger="">
              Today
            </GanttNavToday>
            <GanttNavPrev className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Previous" id="base-ui-_r_3_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine" aria-hidden="true">
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </GanttNavPrev>
            <GanttNavNext className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Next" id="base-ui-_r_5_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </GanttNavNext>
            <GanttTitle aria-live="polite">
              Wednesday, July 22, 2026
            </GanttTitle>
            <div className="flex-1" aria-hidden="true"></div>
            <GanttToolbar>
              <Popover>
              <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_7_" aria-haspopup="dialog" aria-expanded="false">
                <svg className="lucide lucide-settings-2 lucide-settings2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                  <path d="M14 17H5"></path>
                  <path d="M19 7h-9"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
                <span className="max-sm:sr-only">
                  Settings
                </span>
              </PopoverTrigger>
              </Popover>
              <Button className="gap-1.5" type="button" tabIndex="0">
                <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <span className="max-sm:sr-only">
                  New Stage
                </span>
              </Button>
            </GanttToolbar>
          </GanttNav>
          <GanttView scale="day">
            <div className="flex flex-1 min-h-0 relative">
              <div className="h-full relative shrink-0" style={{width: "480px"}}>
                <ScrollArea className="[&>[data-orientation=vertical]]:hidden h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "16px", "--scroll-area-corner-width": "0px"}} hasOverflowX="" hasOverflowY="" overflowXEnd="" overflowYEnd="">
                  <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_8_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "40px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "283px"}} data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-end="" data-overflow-y-end="">
                    <div role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-end="" data-overflow-y-end="">
                      <div className="flex flex-col min-h-full min-w-full pb-2.5 w-max">
                        <div className="bg-background border-b border-b-transparent box-content h-16 shrink-0 sticky top-0 z-30">
                          <div className="border-b flex h-8">
                            <div className="flex flex-1 h-full min-w-0">
                              <div className="flex h-full items-center shrink-0" style={{width: "264px", paddingInlineStart: "2.25rem"}}>
                                <span className="font-medium text-muted-foreground truncate">
                                  Stage
                                </span>
                              </div>
                              <div className="flex font-medium h-full items-center px-2 shrink-0 text-muted-foreground" data-column="status" style={{width: "92px"}}>
                                <span className="truncate">
                                  Status
                                </span>
                              </div>
                              <div className="flex font-medium h-full items-center justify-end px-2 shrink-0 text-muted-foreground" data-column="slack" style={{width: "92px"}}>
                                <span className="truncate">
                                  Slack
                                </span>
                              </div>
                              <div className="flex font-medium h-full items-center px-2 shrink-0 text-muted-foreground" data-column="actions" style={{width: "32px"}}>
                                <span className="truncate">
                                  actions
                                </span>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                            <div className="before:-start-5 before:absolute before:bg-linear-to-l before:from-background before:inset-y-0 before:pointer-events-none before:to-transparent before:w-5 bg-background end-0 flex h-full items-center pe-2.5 ps-1.5 rtl:before:bg-linear-to-r shrink-0 sticky z-10">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Choose columns" aria-haspopup="menu" id="base-ui-_r_c_" aria-expanded="false">
                                <svg className="lucide lucide-settings-2 lucide-settings2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                                  <path d="M14 17H5"></path>
                                  <path d="M19 7h-9"></path>
                                  <circle cx="17" cy="17" r="3"></circle>
                                  <circle cx="7" cy="7" r="3"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="pb-31" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex font-medium items-start pe-3 ps-3 shrink-0" style={{width: "264px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <Button className="aria-expanded:bg-transparent! aria-expanded:text-muted-foreground! hover:text-foreground! size-5! text-muted-foreground" type="button" tabIndex="0" aria-expanded="true" aria-label="Refund Escalation">
                                      <svg className="lucide lucide-chevron-right rotate-90 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                    </Button>
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0">
                                    <span className="font-medium min-w-0 text-sm truncate">
                                      Refund Escalation
                                    </span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-secondary-foreground text-xs transition-shadow">
                                      PB-31
                                    </Badge>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "92px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                    <span className="bg-rose-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    Failed
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="slack" style={{width: "92px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="font-medium tabular-nums text-destructive text-xs">
                                    0m
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}></div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="rf-intake" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "264px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5"></span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <span className="flex items-center shrink-0 text-muted-foreground">
                                      <svg className="lucide lucide-bot shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                                        <path d="M12 8V4H8"></path>
                                        <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                                        <path d="M2 14h2"></path>
                                        <path d="M20 14h2"></path>
                                        <path d="M15 13v2"></path>
                                        <path d="M9 13v2"></path>
                                      </svg>
                                    </span>
                                    <span className="flex-1 min-w-0 text-sm truncate">
                                      Intake & Classify
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "92px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                    <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    Succeeded
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="slack" style={{width: "92px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="font-medium tabular-nums text-destructive text-xs">
                                    0m
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Intake & Classify" aria-haspopup="menu" id="base-ui-_r_h_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="12" cy="5" r="1"></circle>
                                      <circle cx="12" cy="19" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="rf-policy" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "264px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5"></span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <span className="flex items-center shrink-0 text-muted-foreground">
                                      <svg className="lucide lucide-wrench shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WrenchIcon" tabler="IconTool" hugeicons="Wrench01Icon" phosphor="WrenchIcon" remixicon="RiToolsLine" aria-hidden="true">
                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
                                      </svg>
                                    </span>
                                    <span className="flex-1 min-w-0 text-sm truncate">
                                      Policy Check
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "92px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                    <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    Succeeded
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="slack" style={{width: "92px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="font-medium tabular-nums text-destructive text-xs">
                                    0m
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Policy Check" aria-haspopup="menu" id="base-ui-_r_m_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="12" cy="5" r="1"></circle>
                                      <circle cx="12" cy="19" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="rf-approval" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "264px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5"></span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <span className="flex items-center shrink-0 text-muted-foreground">
                                      <svg className="lucide lucide-shield-check shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                        <path d="m9 12 2 2 4-4"></path>
                                      </svg>
                                    </span>
                                    <span className="flex-1 min-w-0 text-sm truncate">
                                      Finance Approval
                                    </span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-secondary-foreground text-xs transition-shadow">
                                      Gate
                                    </Badge>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "92px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                    <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    Succeeded
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="slack" style={{width: "92px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="font-medium tabular-nums text-destructive text-xs">
                                    0m
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Finance Approval" aria-haspopup="menu" id="base-ui-_r_r_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="12" cy="5" r="1"></circle>
                                      <circle cx="12" cy="19" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="rf-capture" style={{height: "5.125rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "264px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.25rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5"></span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <span className="flex items-center shrink-0 text-muted-foreground">
                                      <svg className="lucide lucide-wrench shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WrenchIcon" tabler="IconTool" hugeicons="Wrench01Icon" phosphor="WrenchIcon" remixicon="RiToolsLine" aria-hidden="true">
                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
                                      </svg>
                                    </span>
                                    <span className="flex-1 min-w-0 text-sm truncate">
                                      Capture Refund
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "92px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.25rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                    <span className="bg-rose-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    Failed
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="slack" style={{width: "92px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "2.25rem"}}>
                                  <span className="font-medium tabular-nums text-destructive text-xs">
                                    0m
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.25rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Capture Refund" aria-haspopup="menu" id="base-ui-_r_10_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="12" cy="5" r="1"></circle>
                                      <circle cx="12" cy="19" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="rf-notify" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "264px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5"></span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <span className="flex items-center shrink-0 text-muted-foreground">
                                      <svg className="lucide lucide-bot shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                                        <path d="M12 8V4H8"></path>
                                        <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                                        <path d="M2 14h2"></path>
                                        <path d="M20 14h2"></path>
                                        <path d="M15 13v2"></path>
                                        <path d="M9 13v2"></path>
                                      </svg>
                                    </span>
                                    <span className="flex-1 min-w-0 text-sm truncate">
                                      Notify Customer
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "92px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                    <span className="bg-zinc-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    Queued
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="slack" style={{width: "92px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="font-medium text-destructive text-xs">
                                    Blocked
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Notify Customer" aria-haspopup="menu" id="base-ui-_r_15_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="12" cy="5" r="1"></circle>
                                      <circle cx="12" cy="19" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="pb-44" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex font-medium items-start pe-3 ps-3 shrink-0" style={{width: "264px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <Button className="aria-expanded:bg-transparent! aria-expanded:text-muted-foreground! hover:text-foreground! size-5! text-muted-foreground" type="button" tabIndex="0" aria-expanded="true" aria-label="Contract Ingest">
                                      <svg className="lucide lucide-chevron-right rotate-90 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                    </Button>
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0">
                                    <span className="font-medium min-w-0 text-sm truncate">
                                      Contract Ingest
                                    </span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-secondary-foreground text-xs transition-shadow">
                                      PB-44
                                    </Badge>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "92px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                    <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    Running
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="slack" style={{width: "92px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    30m
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}></div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="ci-fetch" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "264px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5"></span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <span className="flex items-center shrink-0 text-muted-foreground">
                                      <svg className="lucide lucide-wrench shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WrenchIcon" tabler="IconTool" hugeicons="Wrench01Icon" phosphor="WrenchIcon" remixicon="RiToolsLine" aria-hidden="true">
                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
                                      </svg>
                                    </span>
                                    <span className="flex-1 min-w-0 text-sm truncate">
                                      Fetch Documents
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "92px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                    <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    Succeeded
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="slack" style={{width: "92px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    30m
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Fetch Documents" aria-haspopup="menu" id="base-ui-_r_1a_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="12" cy="5" r="1"></circle>
                                      <circle cx="12" cy="19" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="ci-parse" style={{height: "5.125rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "264px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.25rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5"></span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <span className="flex items-center shrink-0 text-muted-foreground">
                                      <svg className="lucide lucide-bot shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                                        <path d="M12 8V4H8"></path>
                                        <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                                        <path d="M2 14h2"></path>
                                        <path d="M20 14h2"></path>
                                        <path d="M15 13v2"></path>
                                        <path d="M9 13v2"></path>
                                      </svg>
                                    </span>
                                    <span className="flex-1 min-w-0 text-sm truncate">
                                      Parse Batch
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "92px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.25rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                    <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    Running
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="slack" style={{width: "92px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "2.25rem"}}>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    30m
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.25rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Parse Batch" aria-haspopup="menu" id="base-ui-_r_1f_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="12" cy="5" r="1"></circle>
                                      <circle cx="12" cy="19" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="ci-summarize" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "264px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5"></span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <span className="flex items-center shrink-0 text-muted-foreground">
                                      <svg className="lucide lucide-bot shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                                        <path d="M12 8V4H8"></path>
                                        <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                                        <path d="M2 14h2"></path>
                                        <path d="M20 14h2"></path>
                                        <path d="M15 13v2"></path>
                                        <path d="M9 13v2"></path>
                                      </svg>
                                    </span>
                                    <span className="flex-1 min-w-0 text-sm truncate">
                                      Summarize
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "92px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                    <span className="bg-zinc-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    Queued
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="slack" style={{width: "92px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    30m
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Summarize" aria-haspopup="menu" id="base-ui-_r_1k_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="12" cy="5" r="1"></circle>
                                      <circle cx="12" cy="19" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="ci-review" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "264px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5"></span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <span className="flex items-center shrink-0 text-muted-foreground">
                                      <svg className="lucide lucide-shield-check shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                        <path d="m9 12 2 2 4-4"></path>
                                      </svg>
                                    </span>
                                    <span className="flex-1 min-w-0 text-sm truncate">
                                      Risk Review
                                    </span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-secondary-foreground text-xs transition-shadow">
                                      Gate
                                    </Badge>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "92px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                    <span className="bg-zinc-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    Queued
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="slack" style={{width: "92px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    30m
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Risk Review" aria-haspopup="menu" id="base-ui-_r_1p_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="12" cy="5" r="1"></circle>
                                      <circle cx="12" cy="19" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="pb-19" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex font-medium items-start pe-3 ps-3 shrink-0" style={{width: "264px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <Button className="aria-expanded:bg-transparent! aria-expanded:text-muted-foreground! hover:text-foreground! size-5! text-muted-foreground" type="button" tabIndex="0" aria-expanded="true" aria-label="Data Steward Sweep">
                                      <svg className="lucide lucide-chevron-right rotate-90 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                    </Button>
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0">
                                    <span className="font-medium min-w-0 text-sm truncate">
                                      Data Steward Sweep
                                    </span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-secondary-foreground text-xs transition-shadow">
                                      PB-19
                                    </Badge>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "92px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                    <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    Waiting
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="slack" style={{width: "92px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    3h
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}></div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="ds-snapshot" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "264px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5"></span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <span className="flex items-center shrink-0 text-muted-foreground">
                                      <svg className="lucide lucide-wrench shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WrenchIcon" tabler="IconTool" hugeicons="Wrench01Icon" phosphor="WrenchIcon" remixicon="RiToolsLine" aria-hidden="true">
                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
                                      </svg>
                                    </span>
                                    <span className="flex-1 min-w-0 text-sm truncate">
                                      Snapshot
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "92px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                    <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    Succeeded
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="slack" style={{width: "92px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    6h
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Snapshot" aria-haspopup="menu" id="base-ui-_r_1u_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="12" cy="5" r="1"></circle>
                                      <circle cx="12" cy="19" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="ds-dedupe" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "264px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5"></span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <span className="flex items-center shrink-0 text-muted-foreground">
                                      <svg className="lucide lucide-bot shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                                        <path d="M12 8V4H8"></path>
                                        <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                                        <path d="M2 14h2"></path>
                                        <path d="M20 14h2"></path>
                                        <path d="M15 13v2"></path>
                                        <path d="M9 13v2"></path>
                                      </svg>
                                    </span>
                                    <span className="flex-1 min-w-0 text-sm truncate">
                                      Dedupe & Enrich
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "92px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                    <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    Succeeded
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="slack" style={{width: "92px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    6h
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Dedupe & Enrich" aria-haspopup="menu" id="base-ui-_r_23_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="12" cy="5" r="1"></circle>
                                      <circle cx="12" cy="19" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="ds-purge" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "264px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5"></span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <span className="flex items-center shrink-0 text-muted-foreground">
                                      <svg className="lucide lucide-wrench shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WrenchIcon" tabler="IconTool" hugeicons="Wrench01Icon" phosphor="WrenchIcon" remixicon="RiToolsLine" aria-hidden="true">
                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
                                      </svg>
                                    </span>
                                    <span className="flex-1 min-w-0 text-sm truncate">
                                      Purge Stale
                                    </span>
                                    <svg className="lucide lucide-lock shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-label="Fixed compliance window">
                                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "92px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                    <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    Waiting
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="slack" style={{width: "92px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="text-muted-foreground text-xs">
                                    Fixed
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Purge Stale" aria-haspopup="menu" id="base-ui-_r_28_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="12" cy="5" r="1"></circle>
                                      <circle cx="12" cy="19" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="ds-reindex" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "264px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5"></span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <span className="flex items-center shrink-0 text-muted-foreground">
                                      <svg className="lucide lucide-wrench shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WrenchIcon" tabler="IconTool" hugeicons="Wrench01Icon" phosphor="WrenchIcon" remixicon="RiToolsLine" aria-hidden="true">
                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
                                      </svg>
                                    </span>
                                    <span className="flex-1 min-w-0 text-sm truncate">
                                      Reindex
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "92px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                    <span className="bg-zinc-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    Queued
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="slack" style={{width: "92px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    3h
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Reindex" aria-haspopup="menu" id="base-ui-_r_2d_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="12" cy="5" r="1"></circle>
                                      <circle cx="12" cy="19" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="pb-52" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex font-medium items-start pe-3 ps-3 shrink-0" style={{width: "264px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <Button className="aria-expanded:bg-transparent! size-5! text-foreground" type="button" tabIndex="0" aria-expanded="false" aria-label="Nightly Evaluation">
                                      <svg className="lucide lucide-chevron-right size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                    </Button>
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0">
                                    <span className="font-medium min-w-0 text-sm truncate">
                                      Nightly Evaluation
                                    </span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-secondary-foreground text-xs transition-shadow">
                                      PB-52
                                    </Badge>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "92px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                    <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    Succeeded
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="slack" style={{width: "92px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    3h 15m
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}></div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-background border-t-border! cn-scroll-area-scrollbar end-0! flex h-4! p-px py-1 rounded-none select-none touch-none transition-colors z-40" data-orientation="horizontal" data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-end="" data-overflow-y-end="" data-id="base-ui-_r_8_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "441.2307692307693px"}}>
                      <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                    </div>
                  </div>
                  <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-end="" data-overflow-y-end="" data-id="base-ui-_r_8_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "16px"}}>
                    <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, -18px, 0px)"}}></div>
                  </div>
                  <div style={{position: "absolute", bottom: "0px", insetInlineEnd: "0px", width: "0px", height: "16px"}}></div>
                </ScrollArea>
                <div className="absolute bg-background border-t border-t-border bottom-0 h-4 inset-x-0 pointer-events-none" aria-hidden="true"></div>
              </div>
              <div className="after:-end-1 after:-start-1 after:absolute after:inset-y-0 bg-border cursor-col-resize data-resizing:bg-primary focus-visible:ring-2 focus-visible:ring-ring/50 group/gantt-splitter hover:bg-primary/60 outline-none relative shrink-0 touch-none w-px z-30" role="separator" aria-orientation="vertical" aria-label="Resize panel" aria-valuenow="480" aria-valuemin="280" aria-valuemax="720" tabIndex="0">
                <span className="-translate-x-1/2 -translate-y-1/2 absolute bg-primary/60 duration-150 group-data-resizing/gantt-splitter:bg-primary group-data-resizing/gantt-splitter:opacity-100 group-focus-visible/gantt-splitter:opacity-100 group-hover/gantt-splitter:opacity-100 h-6 left-1/2 opacity-0 rounded-full top-1/2 transition-opacity w-0.75" aria-hidden="true"></span>
              </div>
              <div className="flex-1 h-full min-w-0 relative">
                <div className="absolute bg-background border bottom-5 duration-200 end-[calc(0.75rem+var(--gantt-zoom-shift,0px))] flex flex-col rounded-md shadow-sm transition-[inset-inline-end] z-40" style={{"--gantt-zoom-shift": "0px"}}>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:cursor-not-allowed aria-disabled:hover:bg-transparent aria-disabled:opacity-50 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none rounded-b-none select-none shrink-0 size-5! text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Zoom in" id="base-ui-_r_2g_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-plus size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:cursor-not-allowed aria-disabled:hover:bg-transparent aria-disabled:opacity-50 border-t cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none rounded-t-none select-none shrink-0 size-5! text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Zoom out" id="base-ui-_r_2i_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-minus size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </div>
                <ScrollArea className="[&>[data-orientation=vertical]]:bottom-4! [&>[data-orientation=vertical]]:h-auto! [&>[data-orientation=vertical]]:top-[65px]! h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "16px", "--scroll-area-corner-width": "10px"}} hasOverflowX="" hasOverflowY="" overflowXStart="" overflowXEnd="" overflowYEnd="">
                  <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_2j_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "673px", "--scroll-area-overflow-x-end": "864px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "283px"}} data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-start="" data-overflow-x-end="" data-overflow-y-end="">
                    <div className="flex flex-col min-h-full" role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-start="" data-overflow-x-end="" data-overflow-y-end="">
                      <div className="flex flex-col grow min-h-full min-w-full pb-2.5 w-max">
                        <div className="bg-background border-b shrink-0 sticky top-0 z-30" style={{minWidth: "144rem"}}>
                          <div className="border-b h-8 relative">
                            <div className="flex h-full">
                              <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "24 0 0px"}}>
                                <span className="max-w-full start-3 sticky truncate">
                                  Wednesday, July 22, 2026
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="h-8 relative" data-gantt-axis="" data-gantt-range-start="1784649600000" data-gantt-range-end="1784736000000" data-gantt-snap="15">
                            <div className="absolute inset-0" aria-hidden="true"></div>
                            <div className="flex h-full">
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                12 AM
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                1 AM
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                2 AM
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                3 AM
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                4 AM
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                5 AM
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                6 AM
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                7 AM
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                8 AM
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                9 AM
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                10 AM
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                11 AM
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                12 PM
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                1 PM
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                2 PM
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                3 PM
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                4 PM
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                5 PM
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                6 PM
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                7 PM
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                8 PM
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                9 PM
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                10 PM
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                11 PM
                              </div>
                            </div>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(4.16667% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(8.33333% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(12.5% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(16.6667% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(20.8333% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(25% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(29.1667% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(33.3333% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(37.5% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(41.6667% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(45.8333% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(50% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(54.1667% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(58.3333% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(62.5% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(66.6667% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(70.8333% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(75% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(79.1667% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(83.3333% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(87.5% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(91.6667% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(95.8333% - 1px)"}}></span>
                          </div>
                        </div>
                        <div className="flex flex-col grow min-h-0 relative">
                          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(4.16667% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(8.33333% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(12.5% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(16.6667% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(20.8333% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(25% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(29.1667% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(33.3333% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(37.5% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(41.6667% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(45.8333% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(50% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(54.1667% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(58.3333% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(62.5% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(66.6667% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(70.8333% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(75% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(79.1667% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(83.3333% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(87.5% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(91.6667% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(95.8333% - 1px)"}}></span>
                          </div>
                          <svg className="absolute overflow-visible pointer-events-none rtl:-scale-x-100 start-0 text-muted-foreground/70 top-0 w-full" aria-hidden="true" viewBox="0 0 144 47.75" preserveAspectRatio="none" style={{height: "47.75rem"}}>
                            <g>
                              <path d="M 52 3.75 H 52.625 V 4.5625 H 51.375 V 6.25 H 51.625" fill="none" stroke="currentColor" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
                              <path d="M 52 6.25 L 51.625 6.025 L 51.625 6.475 Z" fill="currentColor"></path>
                            </g>
                            <g>
                              <path d="M 54 6.25 H 54.625 V 7.0625 H 53.375 V 8.75 H 53.625" fill="none" stroke="currentColor" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
                              <path d="M 54 8.75 L 53.625 8.525 L 53.625 8.975 Z" fill="currentColor"></path>
                            </g>
                            <g>
                              <path d="M 63 8.75 H 63.625 V 9.5625 H 62.375 V 11.125 H 62.625" fill="none" stroke="currentColor" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
                              <path d="M 63 11.125 L 62.625 10.9 L 62.625 11.35 Z" fill="currentColor"></path>
                            </g>
                            <g>
                              <path d="M 68 14 H 68.625 V 14.8125 H 67.375 V 16.375 H 67.625" fill="none" stroke="currentColor" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
                              <path d="M 68 16.375 L 67.625 16.15 L 67.625 16.6 Z" fill="currentColor"></path>
                            </g>
                            <g>
                              <path d="M 57 21.375 H 57.625 V 22.1875 H 56.375 V 26.625 H 56.625" fill="none" stroke="currentColor" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
                              <path d="M 57 26.625 L 56.625 26.4 L 56.625 26.85 Z" fill="currentColor"></path>
                            </g>
                            <g>
                              <path d="M 69.5 23.75 H 70.125 V 24.5625 H 68.875 V 29 H 69.125" fill="none" stroke="currentColor" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
                              <path d="M 69.5 29 L 69.125 28.775 L 69.125 29.225 Z" fill="currentColor"></path>
                            </g>
                            <g>
                              <path d="M 75 29 H 75.625 V 29.8125 H 74.375 V 31.5 H 74.625" fill="none" stroke="currentColor" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
                              <path d="M 75 31.5 L 74.625 31.275 L 74.625 31.725 Z" fill="currentColor"></path>
                            </g>
                            <g>
                              <path d="M 49.5 36.5 H 50.125 V 37.3125 H 48.875 V 39 H 49.125" fill="none" stroke="currentColor" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
                              <path d="M 49.5 39 L 49.125 38.775 L 49.125 39.225 Z" fill="currentColor"></path>
                            </g>
                            <g>
                              <path d="M 66 39 H 66.625 V 41.5 H 83.625" fill="none" stroke="currentColor" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
                              <path d="M 84 41.5 L 83.625 41.275 L 83.625 41.725 Z" fill="currentColor"></path>
                            </g>
                            <g>
                              <path d="M 93 41.5 H 93.625 V 42.3125 H 92.375 V 44 H 92.625" fill="none" stroke="currentColor" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
                              <path d="M 93 44 L 92.625 43.775 L 92.625 44.225 Z" fill="currentColor"></path>
                            </g>
                          </svg>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="pb-31" data-gantt-row-id="pb-31" data-gantt-row-static="true" data-gantt-bar-min="0.3333333333333333" data-gantt-bar-max="0.5" data-gantt-bar-label="Refund Escalation" data-gantt-bar-start-ms="1784678400000" style={{height: "2.5rem", minWidth: "144rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="-translate-y-1/2 absolute pointer-events-none top-1/2" aria-hidden="true" style={{insetInlineStart: "33.3333%", width: "16.6667%"}}>
                                <span className="-translate-y-1/2 absolute bg-muted-foreground/50 h-3 rounded-full start-0 top-1/2 w-0.5" aria-hidden="true"></span>
                                <span className="-translate-y-1/2 absolute bg-muted-foreground/50 end-0 h-3 rounded-full top-1/2 w-0.5" aria-hidden="true"></span>
                                <div className="bg-muted-foreground/20 h-1.5 overflow-hidden relative rounded-full">
                                  <div className="absolute bg-muted-foreground/50 inset-y-0 rounded-full start-0" style={{width: "60%"}}></div>
                                </div>
                                <span className="-translate-y-1/2 absolute ms-2 start-full text-muted-foreground top-1/2 whitespace-nowrap">
                                  60%
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="rf-intake" data-gantt-row-id="rf-intake" data-gantt-bar-min="0.3333333333333333" data-gantt-bar-max="0.3611111111111111" data-gantt-bar-color="var(--color-emerald-500)" data-gantt-bar-label="Intake & Classify" data-gantt-bar-start-ms="1784678400000" style={{height: "2.5rem", minWidth: "144rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "33.3333%", width: "2.77778%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger duration-200 h-full transition-colors" type="button" past="true" progress="100" completed="true" aria-label="Intake & Classify, 8:00 AM - 8:40 AM, Intake & Classify, 100% complete" id="base-ui-_r_2p_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-emerald-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" data-full="true" style={{width: "100%"}}></span>
                                  <span className="flex flex-1 gap-1.5 items-center min-w-0">
                                    <span className="@[4rem]:inline-flex hidden items-center shrink-0">
                                      <svg className="lucide lucide-check shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                        <path d="M20 6 9 17l-5-5"></path>
                                      </svg>
                                    </span>
                                    <span className="flex-1 font-medium min-w-0 truncate">
                                      Intake & Classify
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="rf-policy" data-gantt-row-id="rf-policy" data-gantt-bar-min="0.3611111111111111" data-gantt-bar-max="0.375" data-gantt-bar-color="var(--color-emerald-500)" data-gantt-bar-label="Policy Check" data-gantt-bar-start-ms="1784680800000" style={{height: "2.5rem", minWidth: "144rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "36.1111%", width: "1.38889%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger duration-200 h-full transition-colors" type="button" past="true" progress="100" completed="true" aria-label="Policy Check, 8:40 AM - 9:00 AM, Policy Check, 100% complete" id="base-ui-_r_2v_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-emerald-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" data-full="true" style={{width: "100%"}}></span>
                                  <span className="flex flex-1 gap-1.5 items-center min-w-0">
                                    <span className="@[4rem]:inline-flex hidden items-center shrink-0">
                                      <svg className="lucide lucide-check shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                        <path d="M20 6 9 17l-5-5"></path>
                                      </svg>
                                    </span>
                                    <span className="flex-1 font-medium min-w-0 truncate">
                                      Policy Check
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="rf-approval" data-gantt-row-id="rf-approval" data-gantt-bar-min="0.375" data-gantt-bar-max="0.4375" data-gantt-bar-color="var(--color-emerald-500)" data-gantt-bar-label="2 events" data-gantt-bar-start-ms="1784682000000" style={{height: "2.5rem", minWidth: "144rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "40.625%", width: "3.125%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger duration-200 h-full transition-colors" type="button" past="true" progress="100" completed="true" aria-label="Finance Approval, 9:45 AM - 10:30 AM, Finance Approval, 100% complete" id="base-ui-_r_35_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-emerald-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" data-full="true" style={{width: "100%"}}></span>
                                  <span className="flex flex-1 gap-1.5 items-center min-w-0">
                                    <span className="@[4rem]:inline-flex hidden items-center shrink-0">
                                      <svg className="lucide lucide-check shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                        <path d="M20 6 9 17l-5-5"></path>
                                      </svg>
                                    </span>
                                    <span className="flex-1 font-medium min-w-0 truncate">
                                      Finance Approval
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "37.5%", width: "3.125%", top: "0.625rem", height: "1.25rem", zIndex: "11"}}>
                                <GanttBar className="cn-context-menu-trigger duration-200 h-full transition-colors" type="button" past="true" progress="100" completed="true" aria-label="Finance Approval, 9:00 AM - 9:45 AM, Finance Approval, 100% complete" id="base-ui-_r_3b_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-rose-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" data-full="true" style={{width: "100%"}}></span>
                                  <span className="flex flex-1 gap-1.5 items-center min-w-0">
                                    <span className="@[4rem]:inline-flex hidden items-center shrink-0">
                                      <svg className="lucide lucide-circle-x shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleXIcon" tabler="IconCircleX" hugeicons="CancelCircleIcon" phosphor="XCircleIcon" remixicon="RiCloseCircleLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="m15 9-6 6"></path>
                                        <path d="m9 9 6 6"></path>
                                      </svg>
                                    </span>
                                    <span className="flex-1 font-medium min-w-0 truncate">
                                      Finance Approval
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="rf-capture" data-gantt-row-id="rf-capture" data-gantt-bar-min="0.4375" data-gantt-bar-max="0.4722222222222222" data-gantt-bar-color="var(--color-rose-500)" data-gantt-bar-label="3 events" data-gantt-bar-start-ms="1784687400000" style={{height: "5.125rem", minWidth: "144rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="2" data-lane-count="3" style={{insetInlineStart: "45.1389%", width: "2.08333%", top: "3.375rem", height: "1.25rem", zIndex: "12"}}>
                                <GanttBar className="cn-context-menu-trigger duration-200 h-full transition-colors" type="button" past="true" progress="100" completed="true" aria-label="Capture Refund, 10:50 AM - 11:20 AM, Capture Refund, 100% complete" id="base-ui-_r_3h_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-rose-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" data-full="true" style={{width: "100%"}}></span>
                                  <span className="flex flex-1 gap-1.5 items-center min-w-0">
                                    <span className="@[4rem]:inline-flex hidden items-center shrink-0">
                                      <svg className="lucide lucide-circle-x shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleXIcon" tabler="IconCircleX" hugeicons="CancelCircleIcon" phosphor="XCircleIcon" remixicon="RiCloseCircleLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="m15 9-6 6"></path>
                                        <path d="m9 9 6 6"></path>
                                      </svg>
                                    </span>
                                    <span className="flex-1 font-medium min-w-0 truncate">
                                      Capture Refund
                                    </span>
                                    <span className="@[11rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                      Try 3 of 3
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="1" data-lane-count="3" style={{insetInlineStart: "44.4444%", width: "2.08333%", top: "1.9375rem", height: "1.25rem", zIndex: "11"}}>
                                <GanttBar className="cn-context-menu-trigger duration-200 h-full transition-colors" type="button" past="true" progress="100" completed="true" aria-label="Capture Refund, 10:40 AM - 11:10 AM, Capture Refund, 100% complete" id="base-ui-_r_3n_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-rose-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" data-full="true" style={{width: "100%"}}></span>
                                  <span className="flex flex-1 gap-1.5 items-center min-w-0">
                                    <span className="@[4rem]:inline-flex hidden items-center shrink-0">
                                      <svg className="lucide lucide-circle-x shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleXIcon" tabler="IconCircleX" hugeicons="CancelCircleIcon" phosphor="XCircleIcon" remixicon="RiCloseCircleLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="m15 9-6 6"></path>
                                        <path d="m9 9 6 6"></path>
                                      </svg>
                                    </span>
                                    <span className="flex-1 font-medium min-w-0 truncate">
                                      Capture Refund
                                    </span>
                                    <span className="@[11rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                      Try 2 of 3
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="3" style={{insetInlineStart: "43.75%", width: "2.08333%", top: "0.5rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger duration-200 h-full transition-colors" type="button" past="true" progress="100" completed="true" aria-label="Capture Refund, 10:30 AM - 11:00 AM, Capture Refund, 100% complete" id="base-ui-_r_3t_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-rose-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" data-full="true" style={{width: "100%"}}></span>
                                  <span className="flex flex-1 gap-1.5 items-center min-w-0">
                                    <span className="@[4rem]:inline-flex hidden items-center shrink-0">
                                      <svg className="lucide lucide-circle-x shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleXIcon" tabler="IconCircleX" hugeicons="CancelCircleIcon" phosphor="XCircleIcon" remixicon="RiCloseCircleLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="m15 9-6 6"></path>
                                        <path d="m9 9 6 6"></path>
                                      </svg>
                                    </span>
                                    <span className="flex-1 font-medium min-w-0 truncate">
                                      Capture Refund
                                    </span>
                                    <span className="@[11rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                      Try 1 of 3
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="rf-notify" data-gantt-row-id="rf-notify" data-gantt-bar-min="0.4722222222222222" data-gantt-bar-max="0.5" data-gantt-bar-color="var(--color-zinc-400)" data-gantt-bar-label="Notify Customer" data-gantt-bar-start-ms="1784690400000" style={{height: "2.5rem", minWidth: "144rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "47.2222%", width: "2.77778%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger duration-200 h-full transition-colors" type="button" past="true" progress="0" aria-label="Notify Customer, 11:20 AM - 12:00 PM, Notify Customer, 0% complete" id="base-ui-_r_43_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-zinc-400)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "0%"}}></span>
                                  <span className="flex flex-1 gap-1.5 items-center min-w-0">
                                    <span className="@[4rem]:inline-flex hidden items-center shrink-0">
                                      <svg className="lucide lucide-circle shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleIcon" tabler="IconCircle" hugeicons="CircleIcon" phosphor="CircleIcon" remixicon="RiCircleLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                      </svg>
                                    </span>
                                    <span className="flex-1 font-medium min-w-0 truncate">
                                      Notify Customer
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="pb-44" data-gantt-row-id="pb-44" data-gantt-row-static="true" data-gantt-bar-min="0.375" data-gantt-bar-max="0.5625" data-gantt-bar-label="Contract Ingest" data-gantt-bar-start-ms="1784682000000" style={{height: "2.5rem", minWidth: "144rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="-translate-y-1/2 absolute pointer-events-none top-1/2" aria-hidden="true" style={{insetInlineStart: "37.5%", width: "18.75%"}}>
                                <span className="-translate-y-1/2 absolute bg-muted-foreground/50 h-3 rounded-full start-0 top-1/2 w-0.5" aria-hidden="true"></span>
                                <span className="-translate-y-1/2 absolute bg-muted-foreground/50 end-0 h-3 rounded-full top-1/2 w-0.5" aria-hidden="true"></span>
                                <div className="bg-muted-foreground/20 h-1.5 overflow-hidden relative rounded-full">
                                  <div className="absolute bg-muted-foreground/50 inset-y-0 rounded-full start-0" style={{width: "25%"}}></div>
                                </div>
                                <span className="-translate-y-1/2 absolute ms-2 start-full text-muted-foreground top-1/2 whitespace-nowrap">
                                  25%
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="ci-fetch" data-gantt-row-id="ci-fetch" data-gantt-bar-min="0.375" data-gantt-bar-max="0.3958333333333333" data-gantt-bar-color="var(--color-emerald-500)" data-gantt-bar-label="Fetch Documents" data-gantt-bar-start-ms="1784682000000" style={{height: "2.5rem", minWidth: "144rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "37.5%", width: "2.08333%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger duration-200 h-full transition-colors" type="button" past="true" progress="100" completed="true" aria-label="Fetch Documents, 9:00 AM - 9:30 AM, Fetch Documents, 100% complete" id="base-ui-_r_49_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-emerald-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" data-full="true" style={{width: "100%"}}></span>
                                  <span className="flex flex-1 gap-1.5 items-center min-w-0">
                                    <span className="@[4rem]:inline-flex hidden items-center shrink-0">
                                      <svg className="lucide lucide-check shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                        <path d="M20 6 9 17l-5-5"></path>
                                      </svg>
                                    </span>
                                    <span className="flex-1 font-medium min-w-0 truncate">
                                      Fetch Documents
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="ci-parse" data-gantt-row-id="ci-parse" data-gantt-bar-min="0.3958333333333333" data-gantt-bar-max="0.4826388888888889" data-gantt-bar-color="var(--color-sky-500)" data-gantt-bar-label="3 events" data-gantt-bar-start-ms="1784683800000" style={{height: "5.125rem", minWidth: "144rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="3" style={{insetInlineStart: "39.5833%", width: "8.68056%", top: "0.5rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger duration-200 h-full transition-colors" type="button" past="true" progress="88" aria-label="Parse Batch, 9:30 AM - 11:35 AM, Parse Batch, 88% complete" id="base-ui-_r_4f_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-sky-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "88%"}}></span>
                                  <span className="flex flex-1 gap-1.5 items-center min-w-0">
                                    <span className="@[4rem]:inline-flex hidden items-center shrink-0">
                                      <svg className="lucide lucide-activity shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                                        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                                      </svg>
                                    </span>
                                    <span className="flex-1 font-medium min-w-0 truncate">
                                      Parse Batch
                                    </span>
                                    <span className="@[11rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                      Shard 3 of 3
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="1" data-lane-count="3" style={{insetInlineStart: "39.5833%", width: "5.55556%", top: "1.9375rem", height: "1.25rem", zIndex: "11"}}>
                                <GanttBar className="cn-context-menu-trigger duration-200 h-full transition-colors" type="button" past="true" progress="100" completed="true" aria-label="Parse Batch, 9:30 AM - 10:50 AM, Parse Batch, 100% complete" id="base-ui-_r_4l_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-emerald-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" data-full="true" style={{width: "100%"}}></span>
                                  <span className="flex flex-1 gap-1.5 items-center min-w-0">
                                    <span className="@[4rem]:inline-flex hidden items-center shrink-0">
                                      <svg className="lucide lucide-check shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                        <path d="M20 6 9 17l-5-5"></path>
                                      </svg>
                                    </span>
                                    <span className="flex-1 font-medium min-w-0 truncate">
                                      Parse Batch
                                    </span>
                                    <span className="@[11rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                      Shard 2 of 3
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="2" data-lane-count="3" style={{insetInlineStart: "39.5833%", width: "4.16667%", top: "3.375rem", height: "1.25rem", zIndex: "12"}}>
                                <GanttBar className="cn-context-menu-trigger duration-200 h-full transition-colors" type="button" past="true" progress="100" completed="true" aria-label="Parse Batch, 9:30 AM - 10:30 AM, Parse Batch, 100% complete" id="base-ui-_r_4r_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-emerald-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" data-full="true" style={{width: "100%"}}></span>
                                  <span className="flex flex-1 gap-1.5 items-center min-w-0">
                                    <span className="@[4rem]:inline-flex hidden items-center shrink-0">
                                      <svg className="lucide lucide-check shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                        <path d="M20 6 9 17l-5-5"></path>
                                      </svg>
                                    </span>
                                    <span className="flex-1 font-medium min-w-0 truncate">
                                      Parse Batch
                                    </span>
                                    <span className="@[11rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                      Shard 1 of 3
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="ci-summarize" data-gantt-row-id="ci-summarize" data-gantt-bar-min="0.4826388888888889" data-gantt-bar-max="0.5208333333333334" data-gantt-bar-color="var(--color-zinc-400)" data-gantt-bar-label="Summarize" data-gantt-bar-start-ms="1784691300000" style={{height: "2.5rem", minWidth: "144rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "48.2639%", width: "3.81944%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger duration-200 h-full transition-colors" type="button" past="true" progress="0" aria-label="Summarize, 11:35 AM - 12:30 PM, Summarize, 0% complete" id="base-ui-_r_51_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-zinc-400)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "0%"}}></span>
                                  <span className="flex flex-1 gap-1.5 items-center min-w-0">
                                    <span className="@[4rem]:inline-flex hidden items-center shrink-0">
                                      <svg className="lucide lucide-circle shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleIcon" tabler="IconCircle" hugeicons="CircleIcon" phosphor="CircleIcon" remixicon="RiCircleLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                      </svg>
                                    </span>
                                    <span className="flex-1 font-medium min-w-0 truncate">
                                      Summarize
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="ci-review" data-gantt-row-id="ci-review" data-gantt-bar-min="0.5208333333333334" data-gantt-bar-max="0.5625" data-gantt-bar-color="var(--color-zinc-400)" data-gantt-bar-label="Risk Review" data-gantt-bar-start-ms="1784694600000" style={{height: "2.5rem", minWidth: "144rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "52.0833%", width: "4.16667%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger duration-200 h-full transition-colors" type="button" past="true" progress="0" aria-label="Risk Review, 12:30 PM - 1:30 PM, Risk Review, 0% complete" id="base-ui-_r_57_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-zinc-400)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "0%"}}></span>
                                  <span className="flex flex-1 gap-1.5 items-center min-w-0">
                                    <span className="@[4rem]:inline-flex hidden items-center shrink-0">
                                      <svg className="lucide lucide-circle shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleIcon" tabler="IconCircle" hugeicons="CircleIcon" phosphor="CircleIcon" remixicon="RiCircleLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                      </svg>
                                    </span>
                                    <span className="flex-1 font-medium min-w-0 truncate">
                                      Risk Review
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="pb-19" data-gantt-row-id="pb-19" data-gantt-row-static="true" data-gantt-bar-min="0.3125" data-gantt-bar-max="0.7083333333333334" data-gantt-bar-label="Data Steward Sweep" data-gantt-bar-start-ms="1784676600000" style={{height: "2.5rem", minWidth: "144rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="-translate-y-1/2 absolute pointer-events-none top-1/2" aria-hidden="true" style={{insetInlineStart: "31.25%", width: "39.5833%"}}>
                                <span className="-translate-y-1/2 absolute bg-muted-foreground/50 h-3 rounded-full start-0 top-1/2 w-0.5" aria-hidden="true"></span>
                                <span className="-translate-y-1/2 absolute bg-muted-foreground/50 end-0 h-3 rounded-full top-1/2 w-0.5" aria-hidden="true"></span>
                                <div className="bg-muted-foreground/20 h-1.5 overflow-hidden relative rounded-full">
                                  <div className="absolute bg-muted-foreground/50 inset-y-0 rounded-full start-0" style={{width: "50%"}}></div>
                                </div>
                                <span className="-translate-y-1/2 absolute ms-2 start-full text-muted-foreground top-1/2 whitespace-nowrap">
                                  50%
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="ds-snapshot" data-gantt-row-id="ds-snapshot" data-gantt-bar-min="0.3125" data-gantt-bar-max="0.34375" data-gantt-bar-color="var(--color-emerald-500)" data-gantt-bar-label="Snapshot" data-gantt-bar-start-ms="1784676600000" style={{height: "2.5rem", minWidth: "144rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "31.25%", width: "3.125%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger duration-200 h-full transition-colors" type="button" past="true" progress="100" completed="true" aria-label="Snapshot, 7:30 AM - 8:15 AM, Snapshot, 100% complete" id="base-ui-_r_5d_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-emerald-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" data-full="true" style={{width: "100%"}}></span>
                                  <span className="flex flex-1 gap-1.5 items-center min-w-0">
                                    <span className="@[4rem]:inline-flex hidden items-center shrink-0">
                                      <svg className="lucide lucide-check shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                        <path d="M20 6 9 17l-5-5"></path>
                                      </svg>
                                    </span>
                                    <span className="flex-1 font-medium min-w-0 truncate">
                                      Snapshot
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="ds-dedupe" data-gantt-row-id="ds-dedupe" data-gantt-bar-min="0.34375" data-gantt-bar-max="0.4583333333333333" data-gantt-bar-color="var(--color-emerald-500)" data-gantt-bar-label="Dedupe & Enrich" data-gantt-bar-start-ms="1784679300000" style={{height: "2.5rem", minWidth: "144rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "34.375%", width: "11.4583%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger duration-200 h-full transition-colors" type="button" past="true" progress="100" completed="true" aria-label="Dedupe & Enrich, 8:15 AM - 11:00 AM, Dedupe & Enrich, 100% complete" id="base-ui-_r_5j_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-emerald-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" data-full="true" style={{width: "100%"}}></span>
                                  <span className="flex flex-1 gap-1.5 items-center min-w-0">
                                    <span className="@[4rem]:inline-flex hidden items-center shrink-0">
                                      <svg className="lucide lucide-check shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                        <path d="M20 6 9 17l-5-5"></path>
                                      </svg>
                                    </span>
                                    <span className="flex-1 font-medium min-w-0 truncate">
                                      Dedupe & Enrich
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="ds-purge" data-gantt-row-id="ds-purge" data-gantt-bar-min="0.5833333333333334" data-gantt-bar-max="0.6458333333333334" data-gantt-bar-color="var(--color-amber-500)" data-gantt-bar-label="Purge Stale" data-gantt-bar-start-ms="1784700000000" style={{height: "2.5rem", minWidth: "144rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "58.3333%", width: "6.25%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger duration-200 h-full transition-colors" type="button" past="true" progress="0" aria-label="Purge Stale, 2:00 PM - 3:30 PM, Purge Stale, 0% complete" id="base-ui-_r_5p_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-amber-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "0%"}}></span>
                                  <span className="flex flex-1 gap-1.5 items-center min-w-0">
                                    <span className="@[4rem]:inline-flex hidden items-center shrink-0">
                                      <svg className="lucide lucide-clock shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 6v6l4 2"></path>
                                      </svg>
                                    </span>
                                    <svg className="@[7rem]:inline hidden lucide lucide-lock opacity-80 shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg>
                                    <span className="flex-1 font-medium min-w-0 truncate">
                                      Purge Stale
                                    </span>
                                  </span>
                                </GanttBar>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="ds-reindex" data-gantt-row-id="ds-reindex" data-gantt-bar-min="0.6458333333333334" data-gantt-bar-max="0.7083333333333334" data-gantt-bar-color="var(--color-zinc-400)" data-gantt-bar-label="Reindex" data-gantt-bar-start-ms="1784705400000" style={{height: "2.5rem", minWidth: "144rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "64.5833%", width: "6.25%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger duration-200 h-full transition-colors" type="button" past="true" progress="0" aria-label="Reindex, 3:30 PM - 5:00 PM, Reindex, 0% complete" id="base-ui-_r_5v_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-zinc-400)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "0%"}}></span>
                                  <span className="flex flex-1 gap-1.5 items-center min-w-0">
                                    <span className="@[4rem]:inline-flex hidden items-center shrink-0">
                                      <svg className="lucide lucide-circle shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleIcon" tabler="IconCircle" hugeicons="CircleIcon" phosphor="CircleIcon" remixicon="RiCircleLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                      </svg>
                                    </span>
                                    <span className="flex-1 font-medium min-w-0 truncate">
                                      Reindex
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="pb-52" data-gantt-row-id="pb-52" data-gantt-row-static="true" data-gantt-bar-min="0.041666666666666664" data-gantt-bar-max="0.19791666666666666" data-gantt-bar-label="Nightly Evaluation" data-gantt-bar-start-ms="1784653200000" style={{height: "2.5rem", minWidth: "144rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="-translate-y-1/2 absolute pointer-events-none top-1/2" aria-hidden="true" style={{insetInlineStart: "4.16667%", width: "15.625%"}}>
                                <span className="-translate-y-1/2 absolute bg-muted-foreground/50 h-3 rounded-full start-0 top-1/2 w-0.5" aria-hidden="true"></span>
                                <span className="-translate-y-1/2 absolute bg-muted-foreground/50 end-0 h-3 rounded-full top-1/2 w-0.5" aria-hidden="true"></span>
                                <div className="bg-muted-foreground/20 h-1.5 overflow-hidden relative rounded-full">
                                  <div className="absolute bg-muted-foreground/50 inset-y-0 rounded-full start-0" style={{width: "100%"}}></div>
                                </div>
                                <span className="-translate-y-1/2 absolute ms-2 start-full text-muted-foreground top-1/2 whitespace-nowrap">
                                  100%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-background border-t-border! cn-scroll-area-scrollbar end-0! flex h-4! p-px py-1 rounded-none select-none touch-none transition-colors z-40" data-orientation="horizontal" data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-start="" data-overflow-x-end="" data-overflow-y-end="" data-id="base-ui-_r_2j_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "252.00477430555557px"}}>
                      <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(224.623px, 0px, 0px)"}}></div>
                    </div>
                  </div>
                  <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-start="" data-overflow-x-end="" data-overflow-y-end="" data-id="base-ui-_r_2j_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "304.1764004767581px"}}>
                    <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                  </div>
                  <div style={{position: "absolute", bottom: "0px", insetInlineEnd: "0px", width: "10px", height: "16px"}}></div>
                </ScrollArea>
                <div className="absolute bg-background border-t border-t-border bottom-0 h-4 inset-x-0 pointer-events-none" aria-hidden="true"></div>
              </div>
            </div>
          </GanttView>
          <div className="sr-only" aria-live="polite"></div>
        </Gantt>
      </Card>
    </div>
  )
}
