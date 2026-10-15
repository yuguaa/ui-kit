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
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
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
              {"Today"}
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
              {"Sunday, July 19, 2026"}
            </GanttTitle>
            <div className="flex-1" aria-hidden="true"></div>
            <GanttToolbar>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_9_" aria-expanded="false">
                <span className="-space-x-1 flex" aria-hidden="true">
                  <span className="ring-2 ring-background rounded-full size-2.5" style={{backgroundColor: "var(--color-blue-500)"}}></span>
                  <span className="ring-2 ring-background rounded-full size-2.5" style={{backgroundColor: "var(--color-amber-500)"}}></span>
                  <span className="ring-2 ring-background rounded-full size-2.5" style={{backgroundColor: "var(--color-cyan-500)"}}></span>
                  <span className="ring-2 ring-background rounded-full size-2.5" style={{backgroundColor: "var(--color-rose-500)"}}></span>
                </span>
                <span className="max-sm:sr-only">
                  {"Job Types"}
                </span>
                <svg className="lucide lucide-chevron-down opacity-50 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <span className="max-sm:sr-only">
                  {"Book Job"}
                </span>
              </Button>
            </GanttToolbar>
          </GanttNav>
          <GanttView scale="day">
            <div className="flex flex-1 min-h-0 relative">
              <div className="h-full relative shrink-0" style={{width: "640px"}}>
                <ScrollArea className="[&>[data-orientation=vertical]]:hidden h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                  <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_b_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                    <div role="presentation" style={{minWidth: "fit-content"}}>
                      <div className="flex flex-col min-h-full min-w-full pb-2.5 w-max">
                        <div className="bg-background border-b border-b-transparent box-content h-16 shrink-0 sticky top-0 z-30">
                          <div className="border-b flex h-8">
                            <div className="flex flex-1 h-full min-w-0">
                              <div className="flex h-full items-center shrink-0" style={{width: "280px", paddingInlineStart: "3.125rem"}}>
                                <span className="font-medium text-muted-foreground truncate">
                                  {"Technician"}
                                </span>
                              </div>
                              <div className="flex font-medium h-full items-center px-2 shrink-0 text-muted-foreground" data-column="shift" style={{width: "104px"}}>
                                <span className="truncate">
                                  {"Shift"}
                                </span>
                              </div>
                              <div className="flex font-medium h-full items-center px-2 shrink-0 text-muted-foreground" data-column="load" style={{width: "132px"}}>
                                <span className="truncate">
                                  {"Booked"}
                                </span>
                              </div>
                              <div className="flex font-medium h-full items-center justify-end px-2 shrink-0 text-muted-foreground" data-column="gap" style={{width: "88px"}}>
                                <span className="truncate">
                                  {"Next Free"}
                                </span>
                              </div>
                              <div className="flex font-medium h-full items-center px-2 shrink-0 text-muted-foreground" data-column="actions" style={{width: "32px"}}>
                                <span className="truncate"></span>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="north" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex font-medium items-start pe-3 ps-3 shrink-0" style={{width: "280px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                    <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx="9" cy="12" r="1"></circle>
                                      <circle cx="9" cy="5" r="1"></circle>
                                      <circle cx="9" cy="19" r="1"></circle>
                                      <circle cx="15" cy="12" r="1"></circle>
                                      <circle cx="15" cy="5" r="1"></circle>
                                      <circle cx="15" cy="19" r="1"></circle>
                                    </svg>
                                  </button>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <Button className="aria-expanded:bg-transparent! aria-expanded:text-muted-foreground! hover:text-foreground! size-5! text-muted-foreground" type="button" tabIndex="0" aria-expanded="true" aria-label="North Crew">
                                      <svg className="lucide lucide-chevron-right rotate-90 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                    </Button>
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0">
                                    <span className="font-medium text-sm truncate">
                                      {"North Crew"}
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="shrink-0 text-muted-foreground text-xs">
                                      {"Zone 1"}
                                    </span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-destructive-foreground text-xs transition-shadow" title="1h 30m double booked">
                                      {"Clash"}
                                      <span className="sr-only">
                                        {", 1h 30m double booked"}
                                      </span>
                                    </Badge>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="shift" style={{width: "104px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}></div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="load" style={{width: "132px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="flex gap-2 items-center w-full">
                                    <Progress className="[&_[data-slot=progress-indicator]]:bg-primary [&_[data-slot=progress-track]]:bg-muted-foreground/25 [&_[data-slot=progress-track]]:h-1.5 [&_[data-slot=progress-track]]:rounded-full flex-1 gap-0 min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="83" aria-valuetext="83%" role="progressbar" aria-label="83 percent of the shift booked">
                                      <ProgressTrack progressing="">
                                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "83%"}}></ProgressIndicator>
                                      </ProgressTrack>
                                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                        {"x"}
                                      </span>
                                    </Progress>
                                    <span className="shrink-0 tabular-nums text-foreground text-xs">
                                      {"22h 30m"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="gap" style={{width: "88px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    {"12 jobs"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}></div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="mira" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "280px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                    <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx="9" cy="12" r="1"></circle>
                                      <circle cx="9" cy="5" r="1"></circle>
                                      <circle cx="9" cy="19" r="1"></circle>
                                      <circle cx="15" cy="12" r="1"></circle>
                                      <circle cx="15" cy="5" r="1"></circle>
                                      <circle cx="15" cy="19" r="1"></circle>
                                    </svg>
                                  </button>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <span className="after:-inset-x-3 after:-inset-y-2 after:absolute cn-checkbox disabled:cursor-not-allowed disabled:opacity-50 focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 opacity-0 outline-none peer relative shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_c_" aria-checked="false" aria-label="Mira Stone"></span>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-6" size="default">
                                      <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="flex-1 min-w-0 text-sm truncate">
                                      {"Mira Stone"}
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="max-w-20 shrink text-muted-foreground text-xs truncate">
                                      {"HVAC Lead"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="shift" style={{width: "104px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    {"8am to 5pm"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="load" style={{width: "132px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="flex gap-2 items-center w-full">
                                    <Progress className="[&_[data-slot=progress-indicator]]:bg-primary [&_[data-slot=progress-track]]:bg-muted-foreground/25 [&_[data-slot=progress-track]]:h-1.5 [&_[data-slot=progress-track]]:rounded-full flex-1 gap-0 min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="83" aria-valuetext="83%" role="progressbar" aria-label="83 percent of the shift booked">
                                      <ProgressTrack progressing="">
                                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "83%"}}></ProgressIndicator>
                                      </ProgressTrack>
                                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                        {"x"}
                                      </span>
                                    </Progress>
                                    <span className="shrink-0 tabular-nums text-foreground text-xs">
                                      {"7h 30m"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="gap" style={{width: "88px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    {"11:30am"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Mira Stone" aria-haspopup="menu" id="base-ui-_r_i_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="alex" style={{height: "3.6875rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "280px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.25rem"}}>
                                  <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                    <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx="9" cy="12" r="1"></circle>
                                      <circle cx="9" cy="5" r="1"></circle>
                                      <circle cx="9" cy="19" r="1"></circle>
                                      <circle cx="15" cy="12" r="1"></circle>
                                      <circle cx="15" cy="5" r="1"></circle>
                                      <circle cx="15" cy="19" r="1"></circle>
                                    </svg>
                                  </button>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <span className="after:-inset-x-3 after:-inset-y-2 after:absolute cn-checkbox disabled:cursor-not-allowed disabled:opacity-50 focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 opacity-0 outline-none peer relative shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_k_" aria-checked="false" aria-label="Alex Johnson"></span>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-6" size="default">
                                      <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="flex-1 min-w-0 text-sm truncate">
                                      {"Alex Johnson"}
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-destructive-foreground text-xs transition-shadow" title="1h 30m double booked">
                                      {"Clash"}
                                      <span className="sr-only">
                                        {", 1h 30m double booked"}
                                      </span>
                                    </Badge>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="shift" style={{width: "104px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.25rem"}}>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    {"8am to 5pm"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="load" style={{width: "132px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.25rem"}}>
                                  <span className="flex gap-2 items-center w-full">
                                    <Progress className="[&_[data-slot=progress-indicator]]:bg-primary [&_[data-slot=progress-track]]:bg-muted-foreground/25 [&_[data-slot=progress-track]]:h-1.5 [&_[data-slot=progress-track]]:rounded-full flex-1 gap-0 min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="83" aria-valuetext="83%" role="progressbar" aria-label="83 percent of the shift booked">
                                      <ProgressTrack progressing="">
                                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "83%"}}></ProgressIndicator>
                                      </ProgressTrack>
                                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                        {"x"}
                                      </span>
                                    </Progress>
                                    <span className="shrink-0 tabular-nums text-foreground text-xs">
                                      {"7h 30m"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="gap" style={{width: "88px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "2.25rem"}}>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    {"8am"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.25rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Alex Johnson" aria-haspopup="menu" id="base-ui-_r_q_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="sarah" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "280px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                    <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx="9" cy="12" r="1"></circle>
                                      <circle cx="9" cy="5" r="1"></circle>
                                      <circle cx="9" cy="19" r="1"></circle>
                                      <circle cx="15" cy="12" r="1"></circle>
                                      <circle cx="15" cy="5" r="1"></circle>
                                      <circle cx="15" cy="19" r="1"></circle>
                                    </svg>
                                  </button>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <span className="after:-inset-x-3 after:-inset-y-2 after:absolute cn-checkbox disabled:cursor-not-allowed disabled:opacity-50 focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 opacity-0 outline-none peer relative shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_s_" aria-checked="false" aria-label="Sarah Chen"></span>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-6" size="default">
                                      <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="flex-1 min-w-0 text-sm truncate">
                                      {"Sarah Chen"}
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="max-w-20 shrink text-muted-foreground text-xs truncate">
                                      {"Plumbing"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="shift" style={{width: "104px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    {"8am to 5pm"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="load" style={{width: "132px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="flex gap-2 items-center w-full">
                                    <Progress className="[&_[data-slot=progress-indicator]]:bg-primary [&_[data-slot=progress-track]]:bg-muted-foreground/25 [&_[data-slot=progress-track]]:h-1.5 [&_[data-slot=progress-track]]:rounded-full flex-1 gap-0 min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="83" aria-valuetext="83%" role="progressbar" aria-label="83 percent of the shift booked">
                                      <ProgressTrack progressing="">
                                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "83%"}}></ProgressIndicator>
                                      </ProgressTrack>
                                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                        {"x"}
                                      </span>
                                    </Progress>
                                    <span className="shrink-0 tabular-nums text-foreground text-xs">
                                      {"7h 30m"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="gap" style={{width: "88px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    {"12:30pm"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Sarah Chen" aria-haspopup="menu" id="base-ui-_r_12_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="south" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex font-medium items-start pe-3 ps-3 shrink-0" style={{width: "280px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                    <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx="9" cy="12" r="1"></circle>
                                      <circle cx="9" cy="5" r="1"></circle>
                                      <circle cx="9" cy="19" r="1"></circle>
                                      <circle cx="15" cy="12" r="1"></circle>
                                      <circle cx="15" cy="5" r="1"></circle>
                                      <circle cx="15" cy="19" r="1"></circle>
                                    </svg>
                                  </button>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <Button className="aria-expanded:bg-transparent! aria-expanded:text-muted-foreground! hover:text-foreground! size-5! text-muted-foreground" type="button" tabIndex="0" aria-expanded="true" aria-label="South Crew">
                                      <svg className="lucide lucide-chevron-right rotate-90 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                    </Button>
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0">
                                    <span className="font-medium text-sm truncate">
                                      {"South Crew"}
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="shrink-0 text-muted-foreground text-xs">
                                      {"Zone 4"}
                                    </span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-destructive-foreground text-xs transition-shadow" title="1h 30m double booked">
                                      {"Clash"}
                                      <span className="sr-only">
                                        {", 1h 30m double booked"}
                                      </span>
                                    </Badge>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="shift" style={{width: "104px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}></div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="load" style={{width: "132px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="flex gap-2 items-center w-full">
                                    <Progress className="[&_[data-slot=progress-indicator]]:bg-primary [&_[data-slot=progress-track]]:bg-muted-foreground/25 [&_[data-slot=progress-track]]:h-1.5 [&_[data-slot=progress-track]]:rounded-full flex-1 gap-0 min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="78" aria-valuetext="78%" role="progressbar" aria-label="78 percent of the shift booked">
                                      <ProgressTrack progressing="">
                                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "78%"}}></ProgressIndicator>
                                      </ProgressTrack>
                                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                        {"x"}
                                      </span>
                                    </Progress>
                                    <span className="shrink-0 tabular-nums text-foreground text-xs">
                                      {"25h"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="gap" style={{width: "88px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    {"14 jobs"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}></div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="leo" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "280px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                    <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx="9" cy="12" r="1"></circle>
                                      <circle cx="9" cy="5" r="1"></circle>
                                      <circle cx="9" cy="19" r="1"></circle>
                                      <circle cx="15" cy="12" r="1"></circle>
                                      <circle cx="15" cy="5" r="1"></circle>
                                      <circle cx="15" cy="19" r="1"></circle>
                                    </svg>
                                  </button>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <span className="after:-inset-x-3 after:-inset-y-2 after:absolute cn-checkbox disabled:cursor-not-allowed disabled:opacity-50 focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 opacity-0 outline-none peer relative shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_14_" aria-checked="false" aria-label="Leo Grant"></span>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-6" size="default">
                                      <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="flex-1 min-w-0 text-sm truncate">
                                      {"Leo Grant"}
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="max-w-20 shrink text-muted-foreground text-xs truncate">
                                      {"HVAC"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="shift" style={{width: "104px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    {"9am to 6pm"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="load" style={{width: "132px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="flex gap-2 items-center w-full">
                                    <Progress className="[&_[data-slot=progress-indicator]]:bg-muted-foreground/50 [&_[data-slot=progress-track]]:bg-muted-foreground/25 [&_[data-slot=progress-track]]:h-1.5 [&_[data-slot=progress-track]]:rounded-full flex-1 gap-0 min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="67" aria-valuetext="67%" role="progressbar" aria-label="67 percent of the shift booked">
                                      <ProgressTrack progressing="">
                                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "67%"}}></ProgressIndicator>
                                      </ProgressTrack>
                                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                        {"x"}
                                      </span>
                                    </Progress>
                                    <span className="shrink-0 tabular-nums text-foreground text-xs">
                                      {"6h"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="gap" style={{width: "88px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    {"1pm"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Leo Grant" aria-haspopup="menu" id="base-ui-_r_1a_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="sofia" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "280px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                    <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx="9" cy="12" r="1"></circle>
                                      <circle cx="9" cy="5" r="1"></circle>
                                      <circle cx="9" cy="19" r="1"></circle>
                                      <circle cx="15" cy="12" r="1"></circle>
                                      <circle cx="15" cy="5" r="1"></circle>
                                      <circle cx="15" cy="19" r="1"></circle>
                                    </svg>
                                  </button>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <span className="after:-inset-x-3 after:-inset-y-2 after:absolute cn-checkbox disabled:cursor-not-allowed disabled:opacity-50 focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 opacity-0 outline-none peer relative shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1c_" aria-checked="false" aria-label="Sofia Romero"></span>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-6" size="default">
                                      <AvatarFallback className="text-[10px]">
                                        {"SR"}
                                      </AvatarFallback>
                                    </Avatar>
                                    <span className="flex-1 min-w-0 text-sm truncate">
                                      {"Sofia Romero"}
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="max-w-20 shrink text-muted-foreground text-xs truncate">
                                      {"Electrical"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="shift" style={{width: "104px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    {"8am to 5pm"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="load" style={{width: "132px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="flex gap-2 items-center w-full">
                                    <Progress className="[&_[data-slot=progress-indicator]]:bg-primary [&_[data-slot=progress-track]]:bg-muted-foreground/25 [&_[data-slot=progress-track]]:h-1.5 [&_[data-slot=progress-track]]:rounded-full flex-1 gap-0 min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="72" aria-valuetext="72%" role="progressbar" aria-label="72 percent of the shift booked">
                                      <ProgressTrack progressing="">
                                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "72%"}}></ProgressIndicator>
                                      </ProgressTrack>
                                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                        {"x"}
                                      </span>
                                    </Progress>
                                    <span className="shrink-0 tabular-nums text-foreground text-xs">
                                      {"6h 30m"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="gap" style={{width: "88px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    {"11am"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Sofia Romero" aria-haspopup="menu" id="base-ui-_r_1i_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="theo" style={{height: "5.125rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "280px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.25rem"}}>
                                  <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                    <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx="9" cy="12" r="1"></circle>
                                      <circle cx="9" cy="5" r="1"></circle>
                                      <circle cx="9" cy="19" r="1"></circle>
                                      <circle cx="15" cy="12" r="1"></circle>
                                      <circle cx="15" cy="5" r="1"></circle>
                                      <circle cx="15" cy="19" r="1"></circle>
                                    </svg>
                                  </button>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <span className="after:-inset-x-3 after:-inset-y-2 after:absolute cn-checkbox disabled:cursor-not-allowed disabled:opacity-50 focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 opacity-0 outline-none peer relative shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1k_" aria-checked="false" aria-label="Theo Park"></span>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-6" size="default">
                                      <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="flex-1 min-w-0 text-sm truncate">
                                      {"Theo Park"}
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-destructive-foreground text-xs transition-shadow" title="1h 30m double booked">
                                      {"Clash"}
                                      <span className="sr-only">
                                        {", 1h 30m double booked"}
                                      </span>
                                    </Badge>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="shift" style={{width: "104px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.25rem"}}>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    {"8am to 5pm"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="load" style={{width: "132px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.25rem"}}>
                                  <span className="flex gap-2 items-center w-full">
                                    <Progress className="[&_[data-slot=progress-indicator]]:bg-primary [&_[data-slot=progress-track]]:bg-muted-foreground/25 [&_[data-slot=progress-track]]:h-1.5 [&_[data-slot=progress-track]]:rounded-full flex-1 gap-0 min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="94" aria-valuetext="94%" role="progressbar" aria-label="94 percent of the shift booked">
                                      <ProgressTrack progressing="">
                                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "94%"}}></ProgressIndicator>
                                      </ProgressTrack>
                                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                        {"x"}
                                      </span>
                                    </Progress>
                                    <span className="shrink-0 tabular-nums text-foreground text-xs">
                                      {"8h 30m"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="gap" style={{width: "88px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "2.25rem"}}>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    {"8am"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.25rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Theo Park" aria-haspopup="menu" id="base-ui-_r_1q_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="jonas" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "280px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                    <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx="9" cy="12" r="1"></circle>
                                      <circle cx="9" cy="5" r="1"></circle>
                                      <circle cx="9" cy="19" r="1"></circle>
                                      <circle cx="15" cy="12" r="1"></circle>
                                      <circle cx="15" cy="5" r="1"></circle>
                                      <circle cx="15" cy="19" r="1"></circle>
                                    </svg>
                                  </button>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <span className="after:-inset-x-3 after:-inset-y-2 after:absolute cn-checkbox disabled:cursor-not-allowed disabled:opacity-50 focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 opacity-0 outline-none peer relative shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1s_" aria-checked="false" aria-label="Jonas Beck"></span>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-6" size="default">
                                      <AvatarFallback className="text-[10px]">
                                        {"JB"}
                                      </AvatarFallback>
                                    </Avatar>
                                    <span className="flex-1 min-w-0 text-sm truncate">
                                      {"Jonas Beck"}
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="max-w-20 shrink text-muted-foreground text-xs truncate">
                                      {"Apprentice"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="shift" style={{width: "104px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    {"10am to 3pm"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="load" style={{width: "132px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="flex gap-2 items-center w-full">
                                    <Progress className="[&_[data-slot=progress-indicator]]:bg-primary [&_[data-slot=progress-track]]:bg-muted-foreground/25 [&_[data-slot=progress-track]]:h-1.5 [&_[data-slot=progress-track]]:rounded-full flex-1 gap-0 min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="80" aria-valuetext="80%" role="progressbar" aria-label="80 percent of the shift booked">
                                      <ProgressTrack progressing="">
                                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "80%"}}></ProgressIndicator>
                                      </ProgressTrack>
                                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                        {"x"}
                                      </span>
                                    </Progress>
                                    <span className="shrink-0 tabular-nums text-foreground text-xs">
                                      {"4h"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="gap" style={{width: "88px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    {"12pm"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Jonas Beck" aria-haspopup="menu" id="base-ui-_r_22_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
                <div className="absolute bg-background border-t border-t-border bottom-0 h-4 inset-x-0 pointer-events-none" aria-hidden="true"></div>
              </div>
              <div className="after:-end-1 after:-start-1 after:absolute after:inset-y-0 bg-border cursor-col-resize data-resizing:bg-primary focus-visible:ring-2 focus-visible:ring-ring/50 group/gantt-splitter hover:bg-primary/60 outline-none relative shrink-0 touch-none w-px z-30" role="separator" aria-orientation="vertical" aria-label="Resize panel" aria-valuenow="640" aria-valuemin="280" aria-valuemax="640" tabIndex="0">
                <span className="-translate-x-1/2 -translate-y-1/2 absolute bg-primary/60 duration-150 group-data-resizing/gantt-splitter:bg-primary group-data-resizing/gantt-splitter:opacity-100 group-focus-visible/gantt-splitter:opacity-100 group-hover/gantt-splitter:opacity-100 h-6 left-1/2 opacity-0 rounded-full top-1/2 transition-opacity w-0.75" aria-hidden="true"></span>
              </div>
              <div className="flex-1 h-full min-w-0 relative">
                <div className="absolute bg-background border bottom-5 duration-200 end-[calc(0.75rem+var(--gantt-zoom-shift,0px))] flex flex-col rounded-md shadow-sm transition-[inset-inline-end] z-40" style={{"--gantt-zoom-shift": "0px"}}>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:cursor-not-allowed aria-disabled:hover:bg-transparent aria-disabled:opacity-50 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none rounded-b-none select-none shrink-0 size-5! text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Zoom in" id="base-ui-_r_25_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-plus size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:cursor-not-allowed aria-disabled:hover:bg-transparent aria-disabled:opacity-50 border-t cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none rounded-t-none select-none shrink-0 size-5! text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Zoom out" id="base-ui-_r_27_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-minus size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </div>
                <ScrollArea className="[&>[data-orientation=vertical]]:bottom-4! [&>[data-orientation=vertical]]:h-auto! [&>[data-orientation=vertical]]:top-[65px]! h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowX="" overflowXStart="" overflowXEnd="">
                  <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_28_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "849px", "--scroll-area-overflow-x-end": "848px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}} data-has-overflow-x="" data-overflow-x-start="" data-overflow-x-end="">
                    <div className="flex flex-col min-h-full" role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-x="" data-overflow-x-start="" data-overflow-x-end="">
                      <div className="flex flex-col grow min-h-full min-w-full pb-2.5 w-max">
                        <div className="bg-background border-b shrink-0 sticky top-0 z-30" style={{minWidth: "144rem"}}>
                          <div className="border-b h-8 relative">
                            <div className="flex h-full">
                              <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "48 0 0px"}}>
                                <span className="max-w-full start-3 sticky truncate">
                                  {"Sunday, July 19, 2026"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="h-8 relative" data-gantt-axis="" data-gantt-range-start="1784390400000" data-gantt-range-end="1784476800000" data-gantt-snap="30">
                            <div className="absolute inset-0" aria-hidden="true">
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "0%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "2.08333%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "4.16667%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "6.25%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "8.33333%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "10.4167%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "12.5%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "14.5833%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "16.6667%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "18.75%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "20.8333%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "22.9167%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "25%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "27.0833%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "29.1667%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "31.25%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "33.3333%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "35.4167%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "37.5%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "39.5833%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "41.6667%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "43.75%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "45.8333%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "47.9167%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "50%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "52.0833%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "54.1667%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "56.25%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "58.3333%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "60.4167%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "62.5%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "64.5833%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "66.6667%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "68.75%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "70.8333%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "72.9167%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "75%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "77.0833%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "79.1667%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "81.25%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "83.3333%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "85.4167%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "87.5%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "89.5833%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "91.6667%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "93.75%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "95.8333%", width: "2.08333%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "97.9167%", width: "2.08333%"}}></span>
                            </div>
                            <div className="flex h-full">
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"12:00"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"12:30"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"1:00"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"1:30"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"2:00"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"2:30"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"3:00"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"3:30"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"4:00"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"4:30"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"5:00"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"5:30"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"6:00"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"6:30"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"7:00"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"7:30"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"8:00"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"8:30"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"9:00"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"9:30"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"10:00"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"10:30"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"11:00"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"11:30"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"12:00"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"12:30"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"1:00"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"1:30"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"2:00"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"2:30"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"3:00"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"3:30"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"4:00"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"4:30"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"5:00"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"5:30"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"6:00"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"6:30"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"7:00"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"7:30"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"8:00"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"8:30"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"9:00"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"9:30"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"10:00"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"10:30"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"11:00"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"11:30"}
                              </div>
                            </div>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(2.08333% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(4.16667% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(6.25% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(8.33333% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(10.4167% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(12.5% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(14.5833% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(16.6667% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(18.75% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(20.8333% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(22.9167% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(25% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(27.0833% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(29.1667% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(31.25% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(33.3333% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(35.4167% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(37.5% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(39.5833% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(41.6667% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(43.75% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(45.8333% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(47.9167% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(50% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(52.0833% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(54.1667% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(56.25% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(58.3333% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(60.4167% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(62.5% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(64.5833% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(66.6667% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(68.75% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(70.8333% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(72.9167% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(75% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(77.0833% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(79.1667% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(81.25% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(83.3333% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(85.4167% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(87.5% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(89.5833% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(91.6667% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(93.75% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(95.8333% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(97.9167% - 1px)"}}></span>
                          </div>
                        </div>
                        <div className="flex flex-col grow min-h-0 relative">
                          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "0%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "2.08333%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "4.16667%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "6.25%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "8.33333%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "10.4167%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "12.5%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "14.5833%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "16.6667%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "18.75%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "20.8333%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "22.9167%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "25%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "27.0833%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "29.1667%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "31.25%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "33.3333%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "35.4167%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "37.5%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "39.5833%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "41.6667%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "43.75%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "45.8333%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "47.9167%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "50%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "52.0833%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "54.1667%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "56.25%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "58.3333%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "60.4167%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "62.5%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "64.5833%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "66.6667%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "68.75%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "70.8333%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "72.9167%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "75%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "77.0833%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "79.1667%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "81.25%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "83.3333%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "85.4167%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "87.5%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "89.5833%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "91.6667%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "93.75%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "95.8333%", width: "2.08333%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "97.9167%", width: "2.08333%"}}></span>
                            </span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(2.08333% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(4.16667% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(6.25% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(8.33333% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(10.4167% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(12.5% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(14.5833% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(16.6667% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(18.75% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(20.8333% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(22.9167% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(25% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(27.0833% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(29.1667% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(31.25% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(33.3333% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(35.4167% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(37.5% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(39.5833% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(41.6667% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(43.75% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(45.8333% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(47.9167% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(50% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(52.0833% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(54.1667% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(56.25% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(58.3333% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(60.4167% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(62.5% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(64.5833% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(66.6667% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(68.75% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(70.8333% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(72.9167% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(75% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(77.0833% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(79.1667% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(81.25% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(83.3333% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(85.4167% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(87.5% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(89.5833% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(91.6667% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(93.75% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(95.8333% - 1px)"}}></span>
                            <span className="absolute bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_3px,transparent_3px,transparent_6px)] inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(97.9167% - 1px)"}}></span>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="north" data-gantt-row-id="north" data-gantt-row-static="true" style={{height: "2.5rem", minWidth: "144rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}></div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="mira" data-gantt-row-id="mira" data-gantt-bar-min="0.3333333333333333" data-gantt-bar-max="0.7083333333333334" data-gantt-bar-color="var(--color-blue-500)" data-gantt-bar-label="4 events" data-gantt-bar-start-ms="1784419200000" style={{height: "2.5rem", minWidth: "144rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "33.3333%", width: "8.33333%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" past="true" progress="100" completed="true" aria-label="Harbor Dental, 8:00 AM - 10:00 AM, Mira Stone, 100% complete" id="base-ui-_r_2e_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-blue-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" data-full="true" style={{width: "100%"}}></span>
                                  <span className="flex-1 font-medium min-w-0 truncate">
                                    {"Harbor Dental"}
                                  </span>
                                  <span className="@[9rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                    {"8am"}
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "41.6667%", width: "6.25%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" past="true" progress="100" completed="true" aria-label="Lakeside Deli, 10:00 AM - 11:30 AM, Mira Stone, 100% complete" id="base-ui-_r_2k_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-amber-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" data-full="true" style={{width: "100%"}}></span>
                                  <span className="flex-1 font-medium min-w-0 truncate">
                                    {"Lakeside Deli"}
                                  </span>
                                  <span className="@[9rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                    {"10am"}
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "54.1667%", width: "8.33333%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" past="true" progress="0" aria-label="Rowan Apartments, 1:00 PM - 3:00 PM, Mira Stone, 0% complete" id="base-ui-_r_2q_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-cyan-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "0%"}}></span>
                                  <span className="flex-1 font-medium min-w-0 truncate">
                                    {"Rowan Apartments"}
                                  </span>
                                  <span className="@[9rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                    {"1pm"}
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "62.5%", width: "8.33333%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" past="true" progress="0" aria-label="Cedar Clinic, 3:00 PM - 5:00 PM, Mira Stone, 0% complete" id="base-ui-_r_30_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-amber-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "0%"}}></span>
                                  <span className="flex-1 font-medium min-w-0 truncate">
                                    {"Cedar Clinic"}
                                  </span>
                                  <span className="@[9rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                    {"3pm"}
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
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="alex" data-gantt-row-id="alex" data-gantt-bar-min="0.3541666666666667" data-gantt-bar-max="0.6666666666666666" data-gantt-bar-color="var(--color-amber-500)" data-gantt-bar-label="4 events" data-gantt-bar-start-ms="1784421000000" style={{height: "3.6875rem", minWidth: "144rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="2" style={{insetInlineStart: "35.4167%", width: "6.25%", top: "0.5rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" past="true" progress="100" completed="true" aria-label="Fenwick Bakery, 8:30 AM - 10:00 AM, Alex Johnson, 100% complete" id="base-ui-_r_36_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-amber-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" data-full="true" style={{width: "100%"}}></span>
                                  <span className="flex-1 font-medium min-w-0 truncate">
                                    {"Fenwick Bakery"}
                                  </span>
                                  <span className="@[9rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                    {"8:30am"}
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="1" data-lane-count="2" style={{insetInlineStart: "37.5%", width: "6.25%", top: "1.9375rem", height: "1.25rem", zIndex: "11"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" past="true" progress="100" completed="true" aria-label="Halsey Court, 9:00 AM - 10:30 AM, Alex Johnson, 100% complete" id="base-ui-_r_3c_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-rose-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" data-full="true" style={{width: "100%"}}></span>
                                  <span className="flex-1 font-medium min-w-0 truncate">
                                    {"Halsey Court"}
                                  </span>
                                  <span className="@[9rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                    {"9am"}
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="2" style={{insetInlineStart: "41.6667%", width: "8.33333%", top: "0.5rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" past="true" progress="75" aria-label="Ridgeway School, 10:00 AM - 12:00 PM, Alex Johnson, 75% complete" id="base-ui-_r_3i_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-blue-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "75%"}}></span>
                                  <svg className="lucide lucide-lock opacity-70 shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                  </svg>
                                  <span className="flex-1 font-medium min-w-0 truncate">
                                    {"Ridgeway School"}
                                  </span>
                                  <span className="@[9rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                    {"10am"}
                                  </span>
                                </GanttBar>
                              </div>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="2" style={{insetInlineStart: "56.25%", width: "10.4167%", top: "0.5rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" past="true" progress="0" aria-label="Ash Street Lofts, 1:30 PM - 4:00 PM, Alex Johnson, 0% complete" id="base-ui-_r_3o_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-cyan-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "0%"}}></span>
                                  <span className="flex-1 font-medium min-w-0 truncate">
                                    {"Ash Street Lofts"}
                                  </span>
                                  <span className="@[9rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                    {"1:30pm"}
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
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="sarah" data-gantt-row-id="sarah" data-gantt-bar-min="0.3333333333333333" data-gantt-bar-max="0.7083333333333334" data-gantt-bar-color="var(--color-amber-500)" data-gantt-bar-label="4 events" data-gantt-bar-start-ms="1784419200000" style={{height: "2.5rem", minWidth: "144rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "33.3333%", width: "6.25%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" past="true" progress="100" completed="true" aria-label="Copper Kettle, 8:00 AM - 9:30 AM, Sarah Chen, 100% complete" id="base-ui-_r_3u_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-amber-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" data-full="true" style={{width: "100%"}}></span>
                                  <span className="flex-1 font-medium min-w-0 truncate">
                                    {"Copper Kettle"}
                                  </span>
                                  <span className="@[9rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                    {"8am"}
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "39.5833%", width: "6.25%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" past="true" progress="100" completed="true" aria-label="Nia Okafor, 9:30 AM - 11:00 AM, Sarah Chen, 100% complete" id="base-ui-_r_44_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-amber-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" data-full="true" style={{width: "100%"}}></span>
                                  <span className="flex-1 font-medium min-w-0 truncate">
                                    {"Nia Okafor"}
                                  </span>
                                  <span className="@[9rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                    {"9:30am"}
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "45.8333%", width: "6.25%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" past="true" progress="33" aria-label="Marlow Gym, 11:00 AM - 12:30 PM, Sarah Chen, 33% complete" id="base-ui-_r_4a_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-blue-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "33%"}}></span>
                                  <span className="flex-1 font-medium min-w-0 truncate">
                                    {"Marlow Gym"}
                                  </span>
                                  <span className="@[9rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                    {"11am"}
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "58.3333%", width: "12.5%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" past="true" progress="0" aria-label="Bay View Hotel, 2:00 PM - 5:00 PM, Sarah Chen, 0% complete" id="base-ui-_r_4g_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-cyan-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "0%"}}></span>
                                  <span className="flex-1 font-medium min-w-0 truncate">
                                    {"Bay View Hotel"}
                                  </span>
                                  <span className="@[9rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                    {"2pm"}
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
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="south" data-gantt-row-id="south" data-gantt-row-static="true" style={{height: "2.5rem", minWidth: "144rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}></div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="leo" data-gantt-row-id="leo" data-gantt-bar-min="0.375" data-gantt-bar-max="0.6875" data-gantt-bar-color="var(--color-blue-500)" data-gantt-bar-label="3 events" data-gantt-bar-start-ms="1784422800000" style={{height: "2.5rem", minWidth: "144rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "37.5%", width: "8.33333%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" past="true" progress="100" completed="true" aria-label="Alder Offices, 9:00 AM - 11:00 AM, Leo Grant, 100% complete" id="base-ui-_r_4m_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-blue-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" data-full="true" style={{width: "100%"}}></span>
                                  <span className="flex-1 font-medium min-w-0 truncate">
                                    {"Alder Offices"}
                                  </span>
                                  <span className="@[9rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                    {"9am"}
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "45.8333%", width: "8.33333%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" past="true" progress="25" aria-label="Priya Raman, 11:00 AM - 1:00 PM, Leo Grant, 25% complete" id="base-ui-_r_4s_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-amber-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "25%"}}></span>
                                  <span className="flex-1 font-medium min-w-0 truncate">
                                    {"Priya Raman"}
                                  </span>
                                  <span className="@[9rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                    {"11am"}
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "60.4167%", width: "8.33333%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" past="true" progress="0" aria-label="Stonebridge Mall, 2:30 PM - 4:30 PM, Leo Grant, 0% complete" id="base-ui-_r_52_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-cyan-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "0%"}}></span>
                                  <span className="flex-1 font-medium min-w-0 truncate">
                                    {"Stonebridge Mall"}
                                  </span>
                                  <span className="@[9rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                    {"2:30pm"}
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
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="sofia" data-gantt-row-id="sofia" data-gantt-bar-min="0.3333333333333333" data-gantt-bar-max="0.6458333333333334" data-gantt-bar-color="var(--color-rose-500)" data-gantt-bar-label="3 events" data-gantt-bar-start-ms="1784419200000" style={{height: "2.5rem", minWidth: "144rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "33.3333%", width: "12.5%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" past="true" progress="100" completed="true" aria-label="Grant Medical, 8:00 AM - 11:00 AM, Sofia Romero, 100% complete" id="base-ui-_r_58_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-rose-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" data-full="true" style={{width: "100%"}}></span>
                                  <span className="flex-1 font-medium min-w-0 truncate">
                                    {"Grant Medical"}
                                  </span>
                                  <span className="@[9rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                    {"8am"}
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "50%", width: "8.33333%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" past="true" progress="0" aria-label="Bramble Cafe, 12:00 PM - 2:00 PM, Sofia Romero, 0% complete" id="base-ui-_r_5e_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-amber-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "0%"}}></span>
                                  <span className="flex-1 font-medium min-w-0 truncate">
                                    {"Bramble Cafe"}
                                  </span>
                                  <span className="@[9rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                    {"12pm"}
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "58.3333%", width: "6.25%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" past="true" progress="0" aria-label="Olive Court, 2:00 PM - 3:30 PM, Sofia Romero, 0% complete" id="base-ui-_r_5k_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-cyan-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "0%"}}></span>
                                  <span className="flex-1 font-medium min-w-0 truncate">
                                    {"Olive Court"}
                                  </span>
                                  <span className="@[9rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                    {"2pm"}
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
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="theo" data-gantt-row-id="theo" data-gantt-bar-min="0.3541666666666667" data-gantt-bar-max="0.7083333333333334" data-gantt-bar-color="var(--color-amber-500)" data-gantt-bar-label="6 events" data-gantt-bar-start-ms="1784421000000" style={{height: "5.125rem", minWidth: "144rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="3" style={{insetInlineStart: "35.4167%", width: "4.16667%", top: "0.5rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" past="true" progress="100" completed="true" aria-label="Sunset Laundry, 8:30 AM - 9:30 AM, Theo Park, 100% complete" id="base-ui-_r_5q_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-amber-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" data-full="true" style={{width: "100%"}}></span>
                                  <span className="flex-1 font-medium min-w-0 truncate">
                                    {"Sunset Laundry"}
                                  </span>
                                  <span className="@[9rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                    {"8:30am"}
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="3" style={{insetInlineStart: "41.6667%", width: "6.25%", top: "0.5rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" past="true" progress="100" completed="true" aria-label="Kwan Residence, 10:00 AM - 11:30 AM, Theo Park, 100% complete" id="base-ui-_r_60_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-blue-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" data-full="true" style={{width: "100%"}}></span>
                                  <span className="flex-1 font-medium min-w-0 truncate">
                                    {"Kwan Residence"}
                                  </span>
                                  <span className="@[9rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                    {"10am"}
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="1" data-lane-count="3" style={{insetInlineStart: "43.75%", width: "4.16667%", top: "1.9375rem", height: "1.25rem", zIndex: "11"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" past="true" progress="100" completed="true" aria-label="Ivy Lane Cafe, 10:30 AM - 11:30 AM, Theo Park, 100% complete" id="base-ui-_r_66_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-amber-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" data-full="true" style={{width: "100%"}}></span>
                                  <span className="flex-1 font-medium min-w-0 truncate">
                                    {"Ivy Lane Cafe"}
                                  </span>
                                  <span className="@[9rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                    {"10:30am"}
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="2" data-lane-count="3" style={{insetInlineStart: "45.8333%", width: "6.25%", top: "3.375rem", height: "1.25rem", zIndex: "12"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" past="true" progress="33" aria-label="Dunmore Court, 11:00 AM - 12:30 PM, Theo Park, 33% complete" id="base-ui-_r_6c_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-cyan-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "33%"}}></span>
                                  <span className="flex-1 font-medium min-w-0 truncate">
                                    {"Dunmore Court"}
                                  </span>
                                  <span className="@[9rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                    {"11am"}
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="3" style={{insetInlineStart: "54.1667%", width: "6.25%", top: "0.5rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" past="true" progress="0" aria-label="Ferry Road Diner, 1:00 PM - 2:30 PM, Theo Park, 0% complete" id="base-ui-_r_6i_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-amber-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "0%"}}></span>
                                  <span className="flex-1 font-medium min-w-0 truncate">
                                    {"Ferry Road Diner"}
                                  </span>
                                  <span className="@[9rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                    {"1pm"}
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="3" style={{insetInlineStart: "62.5%", width: "8.33333%", top: "0.5rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" past="true" progress="0" aria-label="Northgate Flats, 3:00 PM - 5:00 PM, Theo Park, 0% complete" id="base-ui-_r_6o_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-cyan-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "0%"}}></span>
                                  <span className="flex-1 font-medium min-w-0 truncate">
                                    {"Northgate Flats"}
                                  </span>
                                  <span className="@[9rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                    {"3pm"}
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
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="jonas" data-gantt-row-id="jonas" data-gantt-bar-min="0.4166666666666667" data-gantt-bar-max="0.625" data-gantt-bar-color="var(--color-cyan-500)" data-gantt-bar-label="2 events" data-gantt-bar-start-ms="1784426400000" style={{height: "2.5rem", minWidth: "144rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "41.6667%", width: "8.33333%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" past="true" progress="75" aria-label="Willow Terrace, 10:00 AM - 12:00 PM, Jonas Beck, 75% complete" id="base-ui-_r_6u_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-cyan-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "75%"}}></span>
                                  <span className="flex-1 font-medium min-w-0 truncate">
                                    {"Willow Terrace"}
                                  </span>
                                  <span className="@[9rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                    {"10am"}
                                  </span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "54.1667%", width: "8.33333%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" past="true" progress="0" aria-label="Ambrose Hardware, 1:00 PM - 3:00 PM, Jonas Beck, 0% complete" id="base-ui-_r_74_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-amber-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "0%"}}></span>
                                  <span className="flex-1 font-medium min-w-0 truncate">
                                    {"Ambrose Hardware"}
                                  </span>
                                  <span className="@[9rem]:inline hidden shrink-0 tabular-nums text-foreground/70">
                                    {"1pm"}
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
                        </div>
                      </div>
                    </div>
                    <div className="bg-background border-t-border! cn-scroll-area-scrollbar end-0! flex h-4! p-px py-1 rounded-none select-none touch-none transition-colors z-40" data-orientation="horizontal" data-has-overflow-x="" data-overflow-x-start="" data-overflow-x-end="" data-id="base-ui-_r_28_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "159.39019097222223px"}}>
                      <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(222.936px, 0px, 0px)"}}></div>
                    </div>
                  </div>
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
