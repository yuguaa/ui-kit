import {
  GanttNavNext,
  GanttNavPrev,
  GanttNavToday,
  GanttScaleSwitcher,
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
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/registry/bases/base/ui/button-group"
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
            <GanttNavToday className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} id="base-ui-_r_1_" baseUiTooltipTrigger="">
              {"Today"}
            </GanttNavToday>
            <GanttScaleSwitcher className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Select view" id="base-ui-_r_6_" baseUiTooltipTrigger="" aria-haspopup="menu" aria-expanded="false">
              {"Month"}
              <svg className="lucide lucide-chevron-down opacity-60 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </GanttScaleSwitcher>
            <div className="flex items-center">
              <GanttNavPrev className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Previous" id="base-ui-_r_a_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine" aria-hidden="true">
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </GanttNavPrev>
              <GanttNavNext className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Next" id="base-ui-_r_c_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </GanttNavNext>
            </div>
            <GanttTitle aria-live="polite">
              {"July 2026"}
            </GanttTitle>
            <div className="grow"></div>
            <GanttToolbar>
              <Popover>
              <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none gap-1.5 group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Filter by assignee" baseUiClickTrigger="" id="base-ui-_r_e_" aria-haspopup="dialog" aria-expanded="false">
                <AvatarGroup className="-space-x-1.5">
                  <Avatar className="size-5" size="default">
                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <Avatar className="size-5" size="default">
                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <Avatar className="size-5" size="default">
                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <Avatar className="size-5" size="default">
                    <AvatarImage alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <AvatarGroupCount className="size-5 text-[10px]">
                    {"+1"}
                  </AvatarGroupCount>
                </AvatarGroup>
              </PopoverTrigger>
              </Popover>
              <ButtonGroup className="**:data-[slot=button]:border-r-0" role="group">
                <Button type="button" tabIndex={0}>
                  <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  {"Add Task"}
                </Button>
                <ButtonGroupSeparator className="bg-primary/72 data-horizontal:h-px data-vertical:self-stretch data-vertical:w-px shrink-0" data-orientation="vertical" role="separator" aria-orientation="vertical"></ButtonGroupSeparator>
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 border-l border-primary-foreground/20 cn-button cn-button-size-icon cn-button-variant-default disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none rounded-l-none select-none shrink-0 transition-all w-7! whitespace-nowrap" type="button" tabIndex={0} aria-label="More create options" aria-haspopup="menu" id="base-ui-_r_i_" aria-expanded="false">
                  <svg className="lucide lucide-chevron-down size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </ButtonGroup>
            </GanttToolbar>
          </GanttNav>
          <GanttView scale="month">
            <div className="flex flex-1 min-h-0 relative">
              <div className="h-full relative shrink-0" style={{width: "520px"}}>
                <ScrollArea className="[&>[data-orientation=vertical]]:hidden h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
                  <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_k_-viewport" tabIndex={0} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "243px"}} data-has-overflow-y="" data-overflow-y-end="">
                    <div role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-y="" data-overflow-y-end="">
                      <div className="flex flex-col min-h-full min-w-full pb-2.5 w-max">
                        <div className="bg-background border-b border-b-transparent box-content h-16 shrink-0 sticky top-0 z-30">
                          <div className="border-b flex h-8">
                            <div className="flex flex-1 h-full min-w-0">
                              <div className="flex h-full items-center shrink-0" style={{width: "208px", paddingInlineStart: "3.125rem"}}>
                                <span className="font-medium text-muted-foreground truncate">
                                  {"Name"}
                                </span>
                              </div>
                              <div className="flex font-medium h-full items-center px-2 shrink-0 text-muted-foreground" data-column="status" style={{width: "96px"}}>
                                <span className="truncate">
                                  {"Status"}
                                </span>
                              </div>
                              <div className="flex font-medium h-full items-center px-2 shrink-0 text-muted-foreground" data-column="assignee" style={{width: "72px"}}>
                                <span className="truncate">
                                  {"Assignee"}
                                </span>
                              </div>
                              <div className="flex font-medium h-full items-center px-2 shrink-0 text-muted-foreground" data-column="due" style={{width: "72px"}}>
                                <span className="truncate">
                                  {"Due date"}
                                </span>
                              </div>
                              <div className="flex font-medium h-full items-center px-2 shrink-0 text-muted-foreground" data-column="actions" style={{width: "32px"}}>
                                <span className="truncate"></span>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                            <div className="before:-start-5 before:absolute before:bg-linear-to-l before:from-background before:inset-y-0 before:pointer-events-none before:to-transparent before:w-5 bg-background end-0 flex h-full items-center pe-2.5 ps-1.5 rtl:before:bg-linear-to-r shrink-0 sticky z-10">
                              <Tooltip>
                              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Add or remove columns" aria-haspopup="menu" id="base-ui-_r_p_" baseUiTooltipTrigger="" aria-expanded="false">
                                <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path>
                                </svg>
                              </TooltipTrigger>
                              </Tooltip>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="bug-tracking" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex font-medium items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                    <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx={9} cy={12} r={1}></circle>
                                      <circle cx={9} cy={5} r={1}></circle>
                                      <circle cx={9} cy={19} r={1}></circle>
                                      <circle cx={15} cy={12} r={1}></circle>
                                      <circle cx={15} cy={5} r={1}></circle>
                                      <circle cx={15} cy={19} r={1}></circle>
                                    </svg>
                                  </button>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <Button className="aria-expanded:bg-transparent! aria-expanded:text-muted-foreground! hover:text-foreground! size-5! text-muted-foreground" type="button" tabIndex={0} aria-expanded="true" aria-label="Bug Tracking">
                                      <svg className="lucide lucide-chevron-right rotate-90 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                    </Button>
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0">
                                    <svg className="lucide lucide-list-checks shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
                                      <path d="M13 5h8"></path>
                                      <path d="M13 12h8"></path>
                                      <path d="M13 19h8"></path>
                                      <path d="m3 17 2 2 4-4"></path>
                                      <path d="m3 7 2 2 4-4"></path>
                                    </svg>
                                    <span className="truncate">
                                      {"Bug Tracking"}
                                    </span>
                                    <Tooltip>
                                    <TooltipTrigger className="inline-flex ms-0.5" role="img" aria-label="49% complete" id="base-ui-_r_t_" baseUiTooltipTrigger="">
                                      <svg className="shrink-0 size-4 text-primary" viewBox="0 0 24 24" aria-hidden="true">
                                        <circle className="stroke-border" cx={12} cy={12} r={9} fill="none" strokeWidth={3}></circle>
                                        <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={3} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={28.8398205599543} transform="rotate(-90 12 12)"></circle>
                                      </svg>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}></div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}></div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}></div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Bug Tracking" aria-haspopup="menu" id="base-ui-_r_11_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="login-redirect" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                    <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx={9} cy={12} r={1}></circle>
                                      <circle cx={9} cy={5} r={1}></circle>
                                      <circle cx={9} cy={19} r={1}></circle>
                                      <circle cx={15} cy={12} r={1}></circle>
                                      <circle cx={15} cy={5} r={1}></circle>
                                      <circle cx={15} cy={19} r={1}></circle>
                                    </svg>
                                  </button>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <span className="after:-inset-x-3 after:-inset-y-2 after:absolute cn-checkbox disabled:cursor-not-allowed disabled:opacity-50 focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 opacity-0 outline-none peer relative shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_13_" aria-checked="false" aria-label="Login redirect"></span>
                                    <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0">
                                    <span className="bg-emerald-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Login redirect"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                                    {"Done"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" role="img" aria-label="Mira Stone, Leo Grant" id="base-ui-_r_17_" baseUiTooltipTrigger="">
                                    <AvatarGroup className="-space-x-1.5">
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </AvatarGroup>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="text-muted-foreground truncate">
                                    {"Jul 14"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Login redirect" aria-haspopup="menu" id="base-ui-_r_1b_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="access-rules" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                    <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx={9} cy={12} r={1}></circle>
                                      <circle cx={9} cy={5} r={1}></circle>
                                      <circle cx={9} cy={19} r={1}></circle>
                                      <circle cx={15} cy={12} r={1}></circle>
                                      <circle cx={15} cy={5} r={1}></circle>
                                      <circle cx={15} cy={19} r={1}></circle>
                                    </svg>
                                  </button>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <span className="after:-inset-x-3 after:-inset-y-2 after:absolute cn-checkbox disabled:cursor-not-allowed disabled:opacity-50 focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 opacity-0 outline-none peer relative shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_1d_" aria-checked="false" aria-label="Access rules"></span>
                                    <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0">
                                    <span className="bg-blue-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Access rules"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-info-foreground text-xs transition-shadow">
                                    {"In Progress"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" role="img" aria-label="Leo Grant" id="base-ui-_r_1h_" baseUiTooltipTrigger="">
                                    <AvatarGroup className="-space-x-1.5">
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </AvatarGroup>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="text-muted-foreground truncate">
                                    {"Jul 19"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Access rules" aria-haspopup="menu" id="base-ui-_r_1l_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="mobile-crash" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex font-medium items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                    <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx={9} cy={12} r={1}></circle>
                                      <circle cx={9} cy={5} r={1}></circle>
                                      <circle cx={9} cy={19} r={1}></circle>
                                      <circle cx={15} cy={12} r={1}></circle>
                                      <circle cx={15} cy={5} r={1}></circle>
                                      <circle cx={15} cy={19} r={1}></circle>
                                    </svg>
                                  </button>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <Button className="aria-expanded:bg-transparent! aria-expanded:text-muted-foreground! hover:text-foreground! size-5! text-muted-foreground" type="button" tabIndex={0} aria-expanded="true" aria-label="Mobile crash">
                                      <svg className="lucide lucide-chevron-right rotate-90 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                    </Button>
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0">
                                    <span className="bg-blue-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Mobile crash"}
                                    </span>
                                    <Tooltip>
                                    <TooltipTrigger className="inline-flex ms-0.5" role="img" aria-label="27% complete" id="base-ui-_r_1o_" baseUiTooltipTrigger="">
                                      <svg className="shrink-0 size-4 text-primary" viewBox="0 0 24 24" aria-hidden="true">
                                        <circle className="stroke-border" cx={12} cy={12} r={9} fill="none" strokeWidth={3}></circle>
                                        <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={3} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={41.28052746816988} transform="rotate(-90 12 12)"></circle>
                                      </svg>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-info-foreground text-xs transition-shadow">
                                    {"In Progress"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" role="img" aria-label="Mira Stone, Nora Vale, Theo Park" id="base-ui-_r_1q_" baseUiTooltipTrigger="">
                                    <AvatarGroup className="-space-x-1.5">
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </AvatarGroup>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}></div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Mobile crash" aria-haspopup="menu" id="base-ui-_r_1u_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="crash-ios" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                    <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx={9} cy={12} r={1}></circle>
                                      <circle cx={9} cy={5} r={1}></circle>
                                      <circle cx={9} cy={19} r={1}></circle>
                                      <circle cx={15} cy={12} r={1}></circle>
                                      <circle cx={15} cy={5} r={1}></circle>
                                      <circle cx={15} cy={19} r={1}></circle>
                                    </svg>
                                  </button>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "1.75rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <span className="after:-inset-x-3 after:-inset-y-2 after:absolute cn-checkbox disabled:cursor-not-allowed disabled:opacity-50 focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 opacity-0 outline-none peer relative shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_20_" aria-checked="false" aria-label="iOS audit"></span>
                                    <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0">
                                    <span className="bg-blue-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"iOS audit"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-info-foreground text-xs transition-shadow">
                                    {"In Progress"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" role="img" aria-label="Nora Vale" id="base-ui-_r_24_" baseUiTooltipTrigger="">
                                    <AvatarGroup className="-space-x-1.5">
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </AvatarGroup>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="text-muted-foreground truncate">
                                    {"Jul 20"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for iOS audit" aria-haspopup="menu" id="base-ui-_r_28_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="crash-android" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                    <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx={9} cy={12} r={1}></circle>
                                      <circle cx={9} cy={5} r={1}></circle>
                                      <circle cx={9} cy={19} r={1}></circle>
                                      <circle cx={15} cy={12} r={1}></circle>
                                      <circle cx={15} cy={5} r={1}></circle>
                                      <circle cx={15} cy={19} r={1}></circle>
                                    </svg>
                                  </button>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "1.75rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <span className="after:-inset-x-3 after:-inset-y-2 after:absolute cn-checkbox disabled:cursor-not-allowed disabled:opacity-50 focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 opacity-0 outline-none peer relative shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_2a_" aria-checked="false" aria-label="Android audit"></span>
                                    <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0">
                                    <span className="bg-transparent border-2 border-muted-foreground/40 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Android audit"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                    {"To Do"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="border border-dashed border-muted-foreground/40 rounded-full shrink-0 size-5" role="img" aria-label="Unassigned"></span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="text-muted-foreground truncate">
                                    {"Jul 25"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Android audit" aria-haspopup="menu" id="base-ui-_r_2g_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="button-text" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                    <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx={9} cy={12} r={1}></circle>
                                      <circle cx={9} cy={5} r={1}></circle>
                                      <circle cx={9} cy={19} r={1}></circle>
                                      <circle cx={15} cy={12} r={1}></circle>
                                      <circle cx={15} cy={5} r={1}></circle>
                                      <circle cx={15} cy={19} r={1}></circle>
                                    </svg>
                                  </button>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <span className="after:-inset-x-3 after:-inset-y-2 after:absolute cn-checkbox disabled:cursor-not-allowed disabled:opacity-50 focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 opacity-0 outline-none peer relative shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_2i_" aria-checked="false" aria-label="Button truncation"></span>
                                    <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0">
                                    <span className="bg-amber-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Button truncation"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-warning-foreground text-xs transition-shadow">
                                    {"In Review"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" role="img" aria-label="Theo Park" id="base-ui-_r_2m_" baseUiTooltipTrigger="">
                                    <AvatarGroup className="-space-x-1.5">
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </AvatarGroup>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="text-destructive truncate">
                                    {"Jul 14"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Button truncation" aria-haspopup="menu" id="base-ui-_r_2q_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="offline-sync" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                    <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx={9} cy={12} r={1}></circle>
                                      <circle cx={9} cy={5} r={1}></circle>
                                      <circle cx={9} cy={19} r={1}></circle>
                                      <circle cx={15} cy={12} r={1}></circle>
                                      <circle cx={15} cy={5} r={1}></circle>
                                      <circle cx={15} cy={19} r={1}></circle>
                                    </svg>
                                  </button>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <span className="after:-inset-x-3 after:-inset-y-2 after:absolute cn-checkbox disabled:cursor-not-allowed disabled:opacity-50 focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 opacity-0 outline-none peer relative shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_2s_" aria-checked="false" aria-label="Offline sync"></span>
                                    <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0">
                                    <span className="bg-transparent border-2 border-muted-foreground/40 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Offline sync"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                    {"To Do"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" role="img" aria-label="Leo Grant, Theo Park" id="base-ui-_r_30_" baseUiTooltipTrigger="">
                                    <AvatarGroup className="-space-x-1.5">
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </AvatarGroup>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="text-muted-foreground truncate">
                                    {"Jul 27"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Offline sync" aria-haspopup="menu" id="base-ui-_r_34_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="api-keys" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                    <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx={9} cy={12} r={1}></circle>
                                      <circle cx={9} cy={5} r={1}></circle>
                                      <circle cx={9} cy={19} r={1}></circle>
                                      <circle cx={15} cy={12} r={1}></circle>
                                      <circle cx={15} cy={5} r={1}></circle>
                                      <circle cx={15} cy={19} r={1}></circle>
                                    </svg>
                                  </button>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <span className="after:-inset-x-3 after:-inset-y-2 after:absolute cn-checkbox disabled:cursor-not-allowed disabled:opacity-50 focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 opacity-0 outline-none peer relative shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_36_" aria-checked="false" aria-label="API key rotation"></span>
                                    <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0">
                                    <span className="bg-emerald-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"API key rotation"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                                    {"Done"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" role="img" aria-label="Nora Vale" id="base-ui-_r_3a_" baseUiTooltipTrigger="">
                                    <AvatarGroup className="-space-x-1.5">
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </AvatarGroup>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="text-muted-foreground truncate">
                                    {"Jul 14"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for API key rotation" aria-haspopup="menu" id="base-ui-_r_3e_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="session-replay" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                    <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx={9} cy={12} r={1}></circle>
                                      <circle cx={9} cy={5} r={1}></circle>
                                      <circle cx={9} cy={19} r={1}></circle>
                                      <circle cx={15} cy={12} r={1}></circle>
                                      <circle cx={15} cy={5} r={1}></circle>
                                      <circle cx={15} cy={19} r={1}></circle>
                                    </svg>
                                  </button>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <span className="after:-inset-x-3 after:-inset-y-2 after:absolute cn-checkbox disabled:cursor-not-allowed disabled:opacity-50 focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 opacity-0 outline-none peer relative shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_3g_" aria-checked="false" aria-label="Session replay"></span>
                                    <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0">
                                    <span className="bg-transparent border-2 border-muted-foreground/40 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Session replay"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                    {"To Do"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="border border-dashed border-muted-foreground/40 rounded-full shrink-0 size-5" role="img" aria-label="Unassigned"></span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}></div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Session replay" aria-haspopup="menu" id="base-ui-_r_3m_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="release-24" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex font-medium items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                    <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx={9} cy={12} r={1}></circle>
                                      <circle cx={9} cy={5} r={1}></circle>
                                      <circle cx={9} cy={19} r={1}></circle>
                                      <circle cx={15} cy={12} r={1}></circle>
                                      <circle cx={15} cy={5} r={1}></circle>
                                      <circle cx={15} cy={19} r={1}></circle>
                                    </svg>
                                  </button>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <Button className="aria-expanded:bg-transparent! aria-expanded:text-muted-foreground! hover:text-foreground! size-5! text-muted-foreground" type="button" tabIndex={0} aria-expanded="true" aria-label="Release 2.4">
                                      <svg className="lucide lucide-chevron-right rotate-90 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                    </Button>
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0">
                                    <svg className="lucide lucide-list-checks shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
                                      <path d="M13 5h8"></path>
                                      <path d="M13 12h8"></path>
                                      <path d="M13 19h8"></path>
                                      <path d="m3 17 2 2 4-4"></path>
                                      <path d="m3 7 2 2 4-4"></path>
                                    </svg>
                                    <span className="truncate">
                                      {"Release 2.4"}
                                    </span>
                                    <Tooltip>
                                    <TooltipTrigger className="inline-flex ms-0.5" role="img" aria-label="21% complete" id="base-ui-_r_3p_" baseUiTooltipTrigger="">
                                      <svg className="shrink-0 size-4 text-primary" viewBox="0 0 24 24" aria-hidden="true">
                                        <circle className="stroke-border" cx={12} cy={12} r={9} fill="none" strokeWidth={3}></circle>
                                        <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={3} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={44.67344753404686} transform="rotate(-90 12 12)"></circle>
                                      </svg>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}></div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}></div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}></div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Release 2.4" aria-haspopup="menu" id="base-ui-_r_3t_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="data-export" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                    <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx={9} cy={12} r={1}></circle>
                                      <circle cx={9} cy={5} r={1}></circle>
                                      <circle cx={9} cy={19} r={1}></circle>
                                      <circle cx={15} cy={12} r={1}></circle>
                                      <circle cx={15} cy={5} r={1}></circle>
                                      <circle cx={15} cy={19} r={1}></circle>
                                    </svg>
                                  </button>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <span className="after:-inset-x-3 after:-inset-y-2 after:absolute cn-checkbox disabled:cursor-not-allowed disabled:opacity-50 focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 opacity-0 outline-none peer relative shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_3v_" aria-checked="false" aria-label="Data export"></span>
                                    <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0">
                                    <span className="bg-blue-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Data export"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-info-foreground text-xs transition-shadow">
                                    {"In Progress"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" role="img" aria-label="Theo Park, Mira Stone" id="base-ui-_r_43_" baseUiTooltipTrigger="">
                                    <AvatarGroup className="-space-x-1.5">
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </AvatarGroup>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="text-muted-foreground truncate">
                                    {"Jul 22"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Data export" aria-haspopup="menu" id="base-ui-_r_47_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="form-validation" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                    <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx={9} cy={12} r={1}></circle>
                                      <circle cx={9} cy={5} r={1}></circle>
                                      <circle cx={9} cy={19} r={1}></circle>
                                      <circle cx={15} cy={12} r={1}></circle>
                                      <circle cx={15} cy={5} r={1}></circle>
                                      <circle cx={15} cy={19} r={1}></circle>
                                    </svg>
                                  </button>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <span className="after:-inset-x-3 after:-inset-y-2 after:absolute cn-checkbox disabled:cursor-not-allowed disabled:opacity-50 focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 opacity-0 outline-none peer relative shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_49_" aria-checked="false" aria-label="Form validation"></span>
                                    <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0">
                                    <span className="bg-transparent border-2 border-muted-foreground/40 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Form validation"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                    {"To Do"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" role="img" aria-label="Mira Stone" id="base-ui-_r_4d_" baseUiTooltipTrigger="">
                                    <AvatarGroup className="-space-x-1.5">
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </AvatarGroup>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="text-muted-foreground truncate">
                                    {"Jul 27"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Form validation" aria-haspopup="menu" id="base-ui-_r_4h_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="nav-focus" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                    <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx={9} cy={12} r={1}></circle>
                                      <circle cx={9} cy={5} r={1}></circle>
                                      <circle cx={9} cy={19} r={1}></circle>
                                      <circle cx={15} cy={12} r={1}></circle>
                                      <circle cx={15} cy={5} r={1}></circle>
                                      <circle cx={15} cy={19} r={1}></circle>
                                    </svg>
                                  </button>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <span className="after:-inset-x-3 after:-inset-y-2 after:absolute cn-checkbox disabled:cursor-not-allowed disabled:opacity-50 focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 opacity-0 outline-none peer relative shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_4j_" aria-checked="false" aria-label="Nav focus"></span>
                                    <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0">
                                    <span className="bg-transparent border-2 border-muted-foreground/40 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Nav focus"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                    {"To Do"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="border border-dashed border-muted-foreground/40 rounded-full shrink-0 size-5" role="img" aria-label="Unassigned"></span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="text-muted-foreground truncate">
                                    {"Jul 28"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Nav focus" aria-haspopup="menu" id="base-ui-_r_4p_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="perf-audit" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                    <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx={9} cy={12} r={1}></circle>
                                      <circle cx={9} cy={5} r={1}></circle>
                                      <circle cx={9} cy={19} r={1}></circle>
                                      <circle cx={15} cy={12} r={1}></circle>
                                      <circle cx={15} cy={5} r={1}></circle>
                                      <circle cx={15} cy={19} r={1}></circle>
                                    </svg>
                                  </button>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <span className="after:-inset-x-3 after:-inset-y-2 after:absolute cn-checkbox disabled:cursor-not-allowed disabled:opacity-50 focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 opacity-0 outline-none peer relative shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_4r_" aria-checked="false" aria-label="Perf audit"></span>
                                    <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0">
                                    <span className="bg-amber-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Perf audit"}
                                    </span>
                                    <svg className="lucide lucide-lock shrink-0 size-3 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                                      <rect width={18} height={11} x={3} y={11} rx={2} ry={2}></rect>
                                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-warning-foreground text-xs transition-shadow">
                                    {"In Review"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" role="img" aria-label="Leo Grant" id="base-ui-_r_4v_" baseUiTooltipTrigger="">
                                    <AvatarGroup className="-space-x-1.5">
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </AvatarGroup>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="text-muted-foreground truncate">
                                    {"Jul 22"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Perf audit" aria-haspopup="menu" id="base-ui-_r_53_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="changelog" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                    <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx={9} cy={12} r={1}></circle>
                                      <circle cx={9} cy={5} r={1}></circle>
                                      <circle cx={9} cy={19} r={1}></circle>
                                      <circle cx={15} cy={12} r={1}></circle>
                                      <circle cx={15} cy={5} r={1}></circle>
                                      <circle cx={15} cy={19} r={1}></circle>
                                    </svg>
                                  </button>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <span className="after:-inset-x-3 after:-inset-y-2 after:absolute cn-checkbox disabled:cursor-not-allowed disabled:opacity-50 focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 opacity-0 outline-none peer relative shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_55_" aria-checked="false" aria-label="Changelog"></span>
                                    <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0">
                                    <span className="bg-transparent border-2 border-muted-foreground/40 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Changelog"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                    {"To Do"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="border border-dashed border-muted-foreground/40 rounded-full shrink-0 size-5" role="img" aria-label="Unassigned"></span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="text-muted-foreground truncate">
                                    {"Aug 4"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Changelog" aria-haspopup="menu" id="base-ui-_r_5b_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="release-notes" style={{height: "2.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                    <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx={9} cy={12} r={1}></circle>
                                      <circle cx={9} cy={5} r={1}></circle>
                                      <circle cx={9} cy={19} r={1}></circle>
                                      <circle cx={15} cy={12} r={1}></circle>
                                      <circle cx={15} cy={5} r={1}></circle>
                                      <circle cx={15} cy={19} r={1}></circle>
                                    </svg>
                                  </button>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <span className="after:-inset-x-3 after:-inset-y-2 after:absolute cn-checkbox disabled:cursor-not-allowed disabled:opacity-50 focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 opacity-0 outline-none peer relative shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_5d_" aria-checked="false" aria-label="Release notes"></span>
                                    <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0">
                                    <span className="bg-transparent border-2 border-muted-foreground/40 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Release notes"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                    {"To Do"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <span className="border border-dashed border-muted-foreground/40 rounded-full shrink-0 size-5" role="img" aria-label="Unassigned"></span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}></div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Release notes" aria-haspopup="menu" id="base-ui-_r_5j_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <button className="border-b flex h-10 hover:bg-muted/40 hover:text-foreground items-center pe-3 ps-3 shrink-0 text-muted-foreground w-full" type="button">
                            <span className="flex h-full items-center w-full">
                              <span className="shrink-0 w-3.5" aria-hidden="true"></span>
                              <span className="flex items-center justify-center me-1 shrink-0 w-5">
                                <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path>
                                </svg>
                              </span>
                              <span>
                                {"Add task"}
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_k_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "16px"}}>
                    <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, -18px, 0px)"}}></div>
                  </div>
                </ScrollArea>
                <div className="absolute bg-background border-t border-t-border bottom-0 h-4 inset-x-0 pointer-events-none" aria-hidden="true"></div>
              </div>
              <div className="after:-end-1 after:-start-1 after:absolute after:inset-y-0 bg-border cursor-col-resize data-resizing:bg-primary focus-visible:ring-2 focus-visible:ring-ring/50 group/gantt-splitter hover:bg-primary/60 outline-none relative shrink-0 touch-none w-px z-30" role="separator" aria-orientation="vertical" aria-label="Resize panel" aria-valuenow="520" aria-valuemin="180" aria-valuemax="640" tabIndex={0}>
                <span className="-translate-x-1/2 -translate-y-1/2 absolute bg-primary/60 duration-150 group-data-resizing/gantt-splitter:bg-primary group-data-resizing/gantt-splitter:opacity-100 group-focus-visible/gantt-splitter:opacity-100 group-hover/gantt-splitter:opacity-100 h-6 left-1/2 opacity-0 rounded-full top-1/2 transition-opacity w-0.75" aria-hidden="true"></span>
              </div>
              <div className="flex-1 h-full min-w-0 relative">
                <div className="absolute bg-background border bottom-5 duration-200 end-[calc(0.75rem+var(--gantt-zoom-shift,0px))] flex flex-col rounded-md shadow-sm transition-[inset-inline-end] z-40" style={{"--gantt-zoom-shift": "0px"}}>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:cursor-not-allowed aria-disabled:hover:bg-transparent aria-disabled:opacity-50 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none rounded-b-none select-none shrink-0 size-5! text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Zoom in" id="base-ui-_r_5m_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-plus size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:cursor-not-allowed aria-disabled:hover:bg-transparent aria-disabled:opacity-50 border-t cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none rounded-t-none select-none shrink-0 size-5! text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Zoom out" id="base-ui-_r_5o_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-minus size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </div>
                <ScrollArea className="[&>[data-orientation=vertical]]:bottom-4! [&>[data-orientation=vertical]]:h-auto! [&>[data-orientation=vertical]]:top-[65px]! h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "16px", "--scroll-area-corner-width": "10px"}} hasOverflowX="" hasOverflowY="" overflowXStart="" overflowXEnd="" overflowYEnd="">
                  <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_5p_-viewport" tabIndex={0} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "2741px", "--scroll-area-overflow-x-end": "2420px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "243px"}} data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-start="" data-overflow-x-end="" data-overflow-y-end="">
                    <div className="flex flex-col min-h-full" role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-start="" data-overflow-x-end="" data-overflow-y-end="">
                      <div className="flex flex-col grow min-h-full min-w-full pb-2.5 w-max">
                        <div className="bg-background border-b shrink-0 sticky top-0 z-30" style={{minWidth: "368rem"}}>
                          <div className="border-b h-8 relative">
                            <div className="flex h-full">
                              <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "6 0 0px"}}>
                                <span className="max-w-full start-3 sticky truncate">
                                  {"W23 May 31 - 6"}
                                </span>
                              </div>
                              <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "7 0 0px"}}>
                                <span className="max-w-full start-3 sticky truncate">
                                  {"W24 Jun 7 - 13"}
                                </span>
                              </div>
                              <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "7 0 0px"}}>
                                <span className="max-w-full start-3 sticky truncate">
                                  {"W25 Jun 14 - 20"}
                                </span>
                              </div>
                              <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "7 0 0px"}}>
                                <span className="max-w-full start-3 sticky truncate">
                                  {"W26 Jun 21 - 27"}
                                </span>
                              </div>
                              <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "7 0 0px"}}>
                                <span className="max-w-full start-3 sticky truncate">
                                  {"W27 Jun 28 - 4"}
                                </span>
                              </div>
                              <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "7 0 0px"}}>
                                <span className="max-w-full start-3 sticky truncate">
                                  {"W28 Jul 5 - 11"}
                                </span>
                              </div>
                              <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "7 0 0px"}}>
                                <span className="max-w-full start-3 sticky truncate">
                                  {"W29 Jul 12 - 18"}
                                </span>
                              </div>
                              <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "7 0 0px"}}>
                                <span className="max-w-full start-3 sticky truncate">
                                  {"W30 Jul 19 - 25"}
                                </span>
                              </div>
                              <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "7 0 0px"}}>
                                <span className="max-w-full start-3 sticky truncate">
                                  {"W31 Jul 26 - 1"}
                                </span>
                              </div>
                              <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "7 0 0px"}}>
                                <span className="max-w-full start-3 sticky truncate">
                                  {"W32 Aug 2 - 8"}
                                </span>
                              </div>
                              <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "7 0 0px"}}>
                                <span className="max-w-full start-3 sticky truncate">
                                  {"W33 Aug 9 - 15"}
                                </span>
                              </div>
                              <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "7 0 0px"}}>
                                <span className="max-w-full start-3 sticky truncate">
                                  {"W34 Aug 16 - 22"}
                                </span>
                              </div>
                              <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "7 0 0px"}}>
                                <span className="max-w-full start-3 sticky truncate">
                                  {"W35 Aug 23 - 29"}
                                </span>
                              </div>
                              <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "2 0 0px"}}>
                                <span className="max-w-full start-3 sticky truncate">
                                  {"W36 Aug 30 - 5"}
                                </span>
                              </div>
                            </div>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(6.52174% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(14.1304% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(21.7391% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(29.3478% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(36.9565% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(44.5652% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(52.1739% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(59.7826% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(67.3913% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(75% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(82.6087% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(90.2174% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(97.8261% - 1px)"}}></span>
                          </div>
                          <div className="h-8 relative" data-gantt-axis="" data-gantt-range-start="1780243200000" data-gantt-range-end="1788192000000" data-gantt-snap="1440">
                            <div className="absolute inset-0" aria-hidden="true">
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "5.43478%", width: "1.08696%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "6.52174%", width: "1.08696%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "13.0435%", width: "1.08696%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "14.1304%", width: "1.08696%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "20.6522%", width: "1.08696%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "21.7391%", width: "1.08696%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "28.2609%", width: "1.08696%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "29.3478%", width: "1.08696%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "35.8696%", width: "1.08696%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "36.9565%", width: "1.08696%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "43.4783%", width: "1.08696%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "44.5652%", width: "1.08696%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "51.087%", width: "1.08696%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "52.1739%", width: "1.08696%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "58.6957%", width: "1.08696%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "59.7826%", width: "1.08696%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "66.3043%", width: "1.08696%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "67.3913%", width: "1.08696%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "73.913%", width: "1.08696%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "75%", width: "1.08696%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "81.5217%", width: "1.08696%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "82.6087%", width: "1.08696%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "89.1304%", width: "1.08696%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "90.2174%", width: "1.08696%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "96.7391%", width: "1.08696%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "97.8261%", width: "1.08696%"}}></span>
                            </div>
                            <div className="flex h-full">
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Mon 1"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Tue 2"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Wed 3"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Thu 4"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Fri 5"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"Sat 6"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"Sun 7"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Mon 8"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Tue 9"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Wed 10"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Thu 11"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Fri 12"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"Sat 13"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"Sun 14"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Mon 15"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Tue 16"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Wed 17"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Thu 18"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Fri 19"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"Sat 20"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"Sun 21"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Mon 22"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Tue 23"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Wed 24"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Thu 25"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Fri 26"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"Sat 27"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"Sun 28"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Mon 29"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Tue 30"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Wed 1"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Thu 2"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Fri 3"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"Sat 4"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"Sun 5"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Mon 6"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Tue 7"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Wed 8"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Thu 9"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Fri 10"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"Sat 11"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"Sun 12"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Mon 13"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Tue 14"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Wed 15"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Thu 16"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Fri 17"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"Sat 18"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"Sun 19"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Mon 20"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Tue 21"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Wed 22"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Thu 23"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Fri 24"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"Sat 25"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"Sun 26"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Mon 27"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Tue 28"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Wed 29"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Thu 30"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Fri 31"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"Sat 1"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"Sun 2"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Mon 3"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Tue 4"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Wed 5"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Thu 6"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Fri 7"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"Sat 8"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"Sun 9"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Mon 10"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Tue 11"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Wed 12"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Thu 13"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Fri 14"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"Sat 15"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"Sun 16"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Mon 17"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Tue 18"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Wed 19"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Thu 20"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Fri 21"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"Sat 22"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"Sun 23"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Mon 24"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Tue 25"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Wed 26"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Thu 27"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Fri 28"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"Sat 29"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                {"Sun 30"}
                              </div>
                              <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                {"Mon 31"}
                              </div>
                            </div>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(1.08696% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(2.17391% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(3.26087% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(4.34783% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(5.43478% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(6.52174% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(7.6087% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(8.69565% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(9.78261% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(10.8696% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(11.9565% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(13.0435% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(14.1304% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(15.2174% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(16.3043% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(17.3913% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(18.4783% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(19.5652% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(20.6522% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(21.7391% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(22.8261% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(23.913% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(25% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(26.087% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(27.1739% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(28.2609% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(29.3478% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(30.4348% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(31.5217% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(32.6087% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(33.6957% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(34.7826% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(35.8696% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(36.9565% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(38.0435% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(39.1304% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(40.2174% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(41.3043% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(42.3913% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(43.4783% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(44.5652% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(45.6522% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(46.7391% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(47.8261% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(48.913% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(50% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(51.087% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(52.1739% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(53.2609% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(54.3478% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(55.4348% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(56.5217% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(57.6087% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(58.6957% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(59.7826% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(60.8696% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(61.9565% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(63.0435% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(64.1304% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(65.2174% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(66.3043% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(67.3913% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(68.4783% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(69.5652% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(70.6522% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(71.7391% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(72.8261% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(73.913% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(75% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(76.087% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(77.1739% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(78.2609% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(79.3478% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(80.4348% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(81.5217% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(82.6087% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(83.6957% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(84.7826% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(85.8696% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(86.9565% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(88.0435% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(89.1304% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(90.2174% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(91.3043% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(92.3913% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(93.4783% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(94.5652% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(95.6522% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(96.7391% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(97.8261% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(98.913% - 1px)"}}></span>
                          </div>
                        </div>
                        <div className="flex flex-col grow min-h-0 relative">
                          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "5.43478%", width: "1.08696%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "6.52174%", width: "1.08696%"}}></span>
                            </span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "13.0435%", width: "1.08696%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "14.1304%", width: "1.08696%"}}></span>
                            </span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "20.6522%", width: "1.08696%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "21.7391%", width: "1.08696%"}}></span>
                            </span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "28.2609%", width: "1.08696%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "29.3478%", width: "1.08696%"}}></span>
                            </span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "35.8696%", width: "1.08696%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "36.9565%", width: "1.08696%"}}></span>
                            </span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "43.4783%", width: "1.08696%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "44.5652%", width: "1.08696%"}}></span>
                            </span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "51.087%", width: "1.08696%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "52.1739%", width: "1.08696%"}}></span>
                            </span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "58.6957%", width: "1.08696%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "59.7826%", width: "1.08696%"}}></span>
                            </span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "66.3043%", width: "1.08696%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "67.3913%", width: "1.08696%"}}></span>
                            </span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "73.913%", width: "1.08696%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "75%", width: "1.08696%"}}></span>
                            </span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "81.5217%", width: "1.08696%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "82.6087%", width: "1.08696%"}}></span>
                            </span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "89.1304%", width: "1.08696%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "90.2174%", width: "1.08696%"}}></span>
                            </span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "96.7391%", width: "1.08696%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "97.8261%", width: "1.08696%"}}></span>
                            </span>
                            <span className="contents"></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(1.08696% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(2.17391% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(3.26087% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(4.34783% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(5.43478% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(6.52174% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(7.6087% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(8.69565% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(9.78261% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(10.8696% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(11.9565% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(13.0435% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(14.1304% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(15.2174% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(16.3043% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(17.3913% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(18.4783% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(19.5652% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(20.6522% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(21.7391% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(22.8261% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(23.913% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(25% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(26.087% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(27.1739% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(28.2609% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(29.3478% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(30.4348% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(31.5217% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(32.6087% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(33.6957% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(34.7826% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(35.8696% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(36.9565% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(38.0435% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(39.1304% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(40.2174% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(41.3043% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(42.3913% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(43.4783% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(44.5652% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(45.6522% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(46.7391% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(47.8261% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(48.913% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(50% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(51.087% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(52.1739% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(53.2609% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(54.3478% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(55.4348% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(56.5217% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(57.6087% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(58.6957% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(59.7826% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(60.8696% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(61.9565% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(63.0435% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(64.1304% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(65.2174% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(66.3043% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(67.3913% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(68.4783% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(69.5652% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(70.6522% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(71.7391% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(72.8261% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(73.913% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(75% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(76.087% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(77.1739% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(78.2609% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(79.3478% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(80.4348% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(81.5217% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(82.6087% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(83.6957% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(84.7826% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(85.8696% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(86.9565% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(88.0435% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(89.1304% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(90.2174% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(91.3043% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(92.3913% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(93.4783% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(94.5652% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(95.6522% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(96.7391% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(97.8261% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(98.913% - 1px)"}}></span>
                          </div>
                          <svg className="absolute overflow-visible pointer-events-none rtl:-scale-x-100 start-0 text-muted-foreground/70 top-0 w-full" aria-hidden="true" viewBox="0 0 368 42.5" preserveAspectRatio="none" style={{height: "42.5rem"}}>
                            <g>
                              <path d="M 176 3.75 H 176.625 V 4.5625 H 175.375 V 6.25 H 175.625" fill="none" stroke="currentColor" strokeWidth={1.5} vector-effect="non-scaling-stroke"></path>
                              <path d="M 176 6.25 L 175.625 6.025 L 175.625 6.475 Z" fill="currentColor"></path>
                            </g>
                            <g>
                              <path d="M 200 11.25 H 200.625 V 12.0625 H 199.375 V 13.75 H 199.625" fill="none" stroke="currentColor" strokeWidth={1.5} vector-effect="non-scaling-stroke"></path>
                              <path d="M 200 13.75 L 199.625 13.525 L 199.625 13.975 Z" fill="currentColor"></path>
                            </g>
                            <g>
                              <path d="M 207.99999999999997 28.75 H 208.62499999999997 V 29.5625 H 207.37499999999997 V 31.25 H 207.62499999999997" fill="none" stroke="currentColor" strokeWidth={1.5} vector-effect="non-scaling-stroke"></path>
                              <path d="M 207.99999999999997 31.25 L 207.62499999999997 31.025 L 207.62499999999997 31.475 Z" fill="currentColor"></path>
                            </g>
                            <g>
                              <path d="M 207.99999999999997 36.25 H 208.62499999999997 V 38.75 H 243.62499999999997" fill="none" stroke="currentColor" strokeWidth={1.5} vector-effect="non-scaling-stroke"></path>
                              <path d="M 243.99999999999997 38.75 L 243.62499999999997 38.525 L 243.62499999999997 38.975 Z" fill="currentColor"></path>
                            </g>
                            <g>
                              <path d="M 232 33.75 H 232.625 V 38.75 H 243.62499999999997" fill="none" stroke="currentColor" strokeWidth={1.5} vector-effect="non-scaling-stroke"></path>
                              <path d="M 243.99999999999997 38.75 L 243.62499999999997 38.525 L 243.62499999999997 38.975 Z" fill="currentColor"></path>
                            </g>
                          </svg>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="bug-tracking" data-gantt-row-id="bug-tracking" data-gantt-row-static="true" data-gantt-bar-min="0.43478260869565216" data-gantt-bar-max="0.6195652173913043" data-gantt-bar-label="Bug Tracking" data-gantt-bar-start-ms="1783699200000" style={{height: "2.5rem", minWidth: "368rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="-translate-y-1/2 absolute pointer-events-none top-1/2" aria-hidden="true" style={{insetInlineStart: "43.4783%", width: "18.4783%"}}>
                                <span className="-translate-y-1/2 absolute bg-muted-foreground/50 h-3 rounded-full start-0 top-1/2 w-0.5" aria-hidden="true"></span>
                                <span className="-translate-y-1/2 absolute bg-muted-foreground/50 end-0 h-3 rounded-full top-1/2 w-0.5" aria-hidden="true"></span>
                                <div className="bg-muted-foreground/20 h-1.5 overflow-hidden relative rounded-full">
                                  <div className="absolute bg-muted-foreground/50 inset-y-0 rounded-full start-0" style={{width: "49%"}}></div>
                                </div>
                                <span className="-translate-y-1/2 absolute ms-2 start-full text-muted-foreground top-1/2 whitespace-nowrap">
                                  {"49%"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="login-redirect" data-gantt-row-id="login-redirect" data-gantt-bar-min="0.43478260869565216" data-gantt-bar-max="0.4782608695652174" data-gantt-bar-color="var(--color-blue-500)" data-gantt-bar-label="Login redirect" data-gantt-bar-start-ms="1783699200000" style={{height: "2.5rem", minWidth: "368rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{width: "4.34783%", top: "0.625rem", height: "1.25rem", zIndex: "10", insetInlineStart: "43.4783%"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" allDay="true" past="true" labelOutside="true" progress="100" completed="true" aria-label="Login redirect, Jul 11 - Jul 14, 2026, Login redirect, 100% complete" id="base-ui-_r_5v_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-blue-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" data-full="true" style={{width: "100%"}}></span>
                                  <svg className="lucide lucide-check opacity-80 relative shrink-0 size-2.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                    <path d="M20 6 9 17l-5-5"></path>
                                  </svg>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                                <span className="-translate-y-1/2 absolute font-medium group-data-[drag-kind^=resize]/gantt-seg:opacity-0 max-w-60 ms-4 pointer-events-none start-full text-foreground top-1/2 truncate z-10" data-placement="after">
                                  {"Login redirect"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="access-rules" data-gantt-row-id="access-rules" data-gantt-bar-min="0.4782608695652174" data-gantt-bar-max="0.532608695652174" data-gantt-bar-color="var(--color-violet-500)" data-gantt-bar-label="Access rules" data-gantt-bar-start-ms="1784044800000" style={{height: "2.5rem", minWidth: "368rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{width: "5.43478%", top: "0.625rem", height: "1.25rem", zIndex: "10", insetInlineStart: "47.8261%"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" allDay="true" past="true" labelOutside="true" progress="45" aria-label="Access rules, Jul 15 - Jul 19, 2026, Access rules, 45% complete" id="base-ui-_r_65_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-violet-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "45%"}}></span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                                <span className="-translate-y-1/2 absolute font-medium group-data-[drag-kind^=resize]/gantt-seg:opacity-0 max-w-60 ms-2 pointer-events-none start-full text-foreground top-1/2 truncate z-10" data-placement="after">
                                  {"Access rules"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="mobile-crash" data-gantt-row-id="mobile-crash" data-gantt-row-static="true" data-gantt-bar-min="0.5" data-gantt-bar-max="0.5978260869565217" data-gantt-bar-label="Mobile crash" data-gantt-bar-start-ms="1784217600000" style={{height: "2.5rem", minWidth: "368rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="-translate-y-1/2 absolute pointer-events-none top-1/2" aria-hidden="true" style={{insetInlineStart: "50%", width: "9.78261%"}}>
                                <span className="-translate-y-1/2 absolute bg-muted-foreground/50 h-3 rounded-full start-0 top-1/2 w-0.5" aria-hidden="true"></span>
                                <span className="-translate-y-1/2 absolute bg-muted-foreground/50 end-0 h-3 rounded-full top-1/2 w-0.5" aria-hidden="true"></span>
                                <div className="bg-muted-foreground/20 h-1.5 overflow-hidden relative rounded-full">
                                  <div className="absolute bg-muted-foreground/50 inset-y-0 rounded-full start-0" style={{width: "27%"}}></div>
                                </div>
                                <span className="-translate-y-1/2 absolute ms-2 start-full text-muted-foreground top-1/2 whitespace-nowrap">
                                  {"27%"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="crash-ios" data-gantt-row-id="crash-ios" data-gantt-bar-min="0.5" data-gantt-bar-max="0.5434782608695652" data-gantt-bar-color="var(--color-cyan-500)" data-gantt-bar-label="iOS audit" data-gantt-bar-start-ms="1784217600000" style={{height: "2.5rem", minWidth: "368rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{width: "4.34783%", top: "0.625rem", height: "1.25rem", zIndex: "10", insetInlineStart: "50%"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" allDay="true" past="true" labelOutside="true" progress="60" aria-label="iOS audit, Jul 17 - Jul 20, 2026, iOS audit, 60% complete" id="base-ui-_r_6b_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-cyan-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "60%"}}></span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                                <span className="-translate-y-1/2 absolute font-medium group-data-[drag-kind^=resize]/gantt-seg:opacity-0 max-w-60 ms-4 pointer-events-none start-full text-foreground top-1/2 truncate z-10" data-placement="after">
                                  {"iOS audit"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="crash-android" data-gantt-row-id="crash-android" data-gantt-bar-min="0.5434782608695652" data-gantt-bar-max="0.5978260869565217" data-gantt-bar-color="var(--color-teal-500)" data-gantt-bar-label="Android audit" data-gantt-bar-start-ms="1784563200000" style={{height: "2.5rem", minWidth: "368rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{width: "5.43478%", top: "0.625rem", height: "1.25rem", zIndex: "10", insetInlineStart: "54.3478%"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" allDay="true" past="true" labelOutside="true" aria-label="Android audit, Jul 21 - Jul 25, 2026, Android audit" id="base-ui-_r_6h_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-teal-500)"}}>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                                <span className="-translate-y-1/2 absolute font-medium group-data-[drag-kind^=resize]/gantt-seg:opacity-0 max-w-60 ms-2 pointer-events-none start-full text-foreground top-1/2 truncate z-10" data-placement="after">
                                  {"Android audit"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="button-text" data-gantt-row-id="button-text" data-gantt-bar-min="0.45652173913043476" data-gantt-bar-max="0.4782608695652174" data-gantt-bar-color="var(--color-amber-500)" data-gantt-bar-label="Button truncation" data-gantt-bar-start-ms="1783872000000" style={{height: "2.5rem", minWidth: "368rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{width: "2.17391%", top: "0.625rem", height: "1.25rem", zIndex: "10", insetInlineStart: "45.6522%"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" allDay="true" past="true" labelOutside="true" progress="70" aria-label="Button truncation, Jul 13 - Jul 14, 2026, Button truncation, 70% complete" id="base-ui-_r_6n_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-amber-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "70%"}}></span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                                <span className="-translate-y-1/2 absolute font-medium group-data-[drag-kind^=resize]/gantt-seg:opacity-0 max-w-60 ms-2 pointer-events-none start-full text-foreground top-1/2 truncate z-10" data-placement="after">
                                  {"Button truncation"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="offline-sync" data-gantt-row-id="offline-sync" data-gantt-bar-min="0.5543478260869565" data-gantt-bar-max="0.6195652173913043" data-gantt-bar-color="var(--color-emerald-500)" data-gantt-bar-label="Offline sync" data-gantt-bar-start-ms="1784649600000" style={{height: "2.5rem", minWidth: "368rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{width: "6.52174%", top: "0.625rem", height: "1.25rem", zIndex: "10", insetInlineStart: "55.4348%"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" allDay="true" past="true" labelOutside="true" progress="20" aria-label="Offline sync, Jul 22 - Jul 27, 2026, Offline sync, 20% complete" id="base-ui-_r_6t_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-emerald-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "20%"}}></span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                                <span className="-translate-y-1/2 absolute font-medium group-data-[drag-kind^=resize]/gantt-seg:opacity-0 max-w-60 ms-2 pointer-events-none start-full text-foreground top-1/2 truncate z-10" data-placement="after">
                                  {"Offline sync"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="api-keys" data-gantt-row-id="api-keys" data-gantt-bar-min="0.44565217391304346" data-gantt-bar-max="0.4782608695652174" data-gantt-bar-color="var(--color-rose-500)" data-gantt-bar-label="API key rotation" data-gantt-bar-start-ms="1783785600000" style={{height: "2.5rem", minWidth: "368rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{width: "3.26087%", top: "0.625rem", height: "1.25rem", zIndex: "10", insetInlineStart: "44.5652%"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" allDay="true" past="true" labelOutside="true" progress="100" completed="true" aria-label="API key rotation, Jul 12 - Jul 14, 2026, API key rotation, 100% complete" id="base-ui-_r_73_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-rose-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" data-full="true" style={{width: "100%"}}></span>
                                  <svg className="lucide lucide-check opacity-80 relative shrink-0 size-2.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                    <path d="M20 6 9 17l-5-5"></path>
                                  </svg>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                                <span className="-translate-y-1/2 absolute font-medium group-data-[drag-kind^=resize]/gantt-seg:opacity-0 max-w-60 ms-2 pointer-events-none start-full text-foreground top-1/2 truncate z-10" data-placement="after">
                                  {"API key rotation"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="session-replay" data-gantt-row-id="session-replay" style={{height: "2.5rem", minWidth: "368rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}></div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="release-24" data-gantt-row-id="release-24" data-gantt-row-static="true" data-gantt-bar-min="0.5217391304347826" data-gantt-bar-max="0.7065217391304348" data-gantt-bar-label="Release 2.4" data-gantt-bar-start-ms="1784390400000" style={{height: "2.5rem", minWidth: "368rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="-translate-y-1/2 absolute pointer-events-none top-1/2" aria-hidden="true" style={{insetInlineStart: "52.1739%", width: "18.4783%"}}>
                                <span className="-translate-y-1/2 absolute bg-muted-foreground/50 h-3 rounded-full start-0 top-1/2 w-0.5" aria-hidden="true"></span>
                                <span className="-translate-y-1/2 absolute bg-muted-foreground/50 end-0 h-3 rounded-full top-1/2 w-0.5" aria-hidden="true"></span>
                                <div className="bg-muted-foreground/20 h-1.5 overflow-hidden relative rounded-full">
                                  <div className="absolute bg-muted-foreground/50 inset-y-0 rounded-full start-0" style={{width: "21%"}}></div>
                                </div>
                                <span className="-translate-y-1/2 absolute ms-2 start-full text-muted-foreground top-1/2 whitespace-nowrap">
                                  {"21%"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="data-export" data-gantt-row-id="data-export" data-gantt-bar-min="0.5217391304347826" data-gantt-bar-max="0.5652173913043478" data-gantt-bar-color="var(--color-blue-500)" data-gantt-bar-label="Data export" data-gantt-bar-start-ms="1784390400000" style={{height: "2.5rem", minWidth: "368rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{width: "4.34783%", top: "0.625rem", height: "1.25rem", zIndex: "10", insetInlineStart: "52.1739%"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" allDay="true" past="true" labelOutside="true" progress="55" aria-label="Data export, Jul 19 - Jul 22, 2026, Data export, 55% complete" id="base-ui-_r_79_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-blue-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "55%"}}></span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                                <span className="-translate-y-1/2 absolute font-medium group-data-[drag-kind^=resize]/gantt-seg:opacity-0 max-w-60 ms-4 pointer-events-none start-full text-foreground top-1/2 truncate z-10" data-placement="after">
                                  {"Data export"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="form-validation" data-gantt-row-id="form-validation" data-gantt-bar-min="0.5652173913043478" data-gantt-bar-max="0.6195652173913043" data-gantt-bar-color="var(--color-pink-500)" data-gantt-bar-label="Form validation" data-gantt-bar-start-ms="1784736000000" style={{height: "2.5rem", minWidth: "368rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{width: "5.43478%", top: "0.625rem", height: "1.25rem", zIndex: "10", insetInlineStart: "56.5217%"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" allDay="true" past="true" labelOutside="true" progress="10" aria-label="Form validation, Jul 23 - Jul 27, 2026, Form validation, 10% complete" id="base-ui-_r_7f_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-pink-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "10%"}}></span>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                                <span className="-translate-y-1/2 absolute font-medium group-data-[drag-kind^=resize]/gantt-seg:opacity-0 max-w-60 ms-2 pointer-events-none start-full text-foreground top-1/2 truncate z-10" data-placement="after">
                                  {"Form validation"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="nav-focus" data-gantt-row-id="nav-focus" data-gantt-bar-min="0.5869565217391305" data-gantt-bar-max="0.6304347826086957" data-gantt-bar-color="var(--color-orange-500)" data-gantt-bar-label="Nav focus" data-gantt-bar-start-ms="1784908800000" style={{height: "2.5rem", minWidth: "368rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{width: "4.34783%", top: "0.625rem", height: "1.25rem", zIndex: "10", insetInlineStart: "58.6957%"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" allDay="true" past="true" labelOutside="true" aria-label="Nav focus, Jul 25 - Jul 28, 2026, Nav focus" id="base-ui-_r_7l_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-orange-500)"}}>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                                <span className="-translate-y-1/2 absolute font-medium group-data-[drag-kind^=resize]/gantt-seg:opacity-0 max-w-60 ms-4 pointer-events-none start-full text-foreground top-1/2 truncate z-10" data-placement="after">
                                  {"Nav focus"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="perf-audit" data-gantt-row-id="perf-audit" data-gantt-bar-min="0.532608695652174" data-gantt-bar-max="0.5652173913043478" data-gantt-bar-color="var(--color-rose-500)" data-gantt-bar-label="Perf audit" data-gantt-bar-start-ms="1784476800000" style={{height: "2.5rem", minWidth: "368rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{width: "3.26087%", top: "0.625rem", height: "1.25rem", zIndex: "10", insetInlineStart: "53.2609%"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" allDay="true" past="true" labelOutside="true" progress="50" aria-label="Perf audit, Jul 20 - Jul 22, 2026, Perf audit, 50% complete" id="base-ui-_r_7r_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-rose-500)"}}>
                                  <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "50%"}}></span>
                                </GanttBar>
                                <span className="-translate-y-1/2 absolute font-medium group-data-[drag-kind^=resize]/gantt-seg:opacity-0 max-w-60 ms-4 pointer-events-none start-full text-foreground top-1/2 truncate z-10" data-placement="after">
                                  {"Perf audit"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="changelog" data-gantt-row-id="changelog" style={{height: "2.5rem", minWidth: "368rem"}} data-gantt-bar-min="0.6630434782608695" data-gantt-bar-max="0.7065217391304348" data-gantt-bar-color="var(--color-indigo-500)" data-gantt-bar-label="Changelog" data-gantt-bar-start-ms="1785513600000">
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "66.3043%", width: "4.34783%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                <GanttBar className="cn-context-menu-trigger h-full" type="button" allDay="true" past="true" labelOutside="true" aria-label="Changelog, Aug 1 - Aug 4, 2026, Changelog" id="base-ui-_r_84_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-indigo-500)"}}>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                                <span className="-translate-y-1/2 absolute font-medium group-data-[drag-kind^=resize]/gantt-seg:opacity-0 max-w-60 ms-2 pointer-events-none start-full text-foreground top-1/2 truncate z-10" data-placement="after">
                                  {"Changelog"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="release-notes" data-gantt-row-id="release-notes" style={{height: "2.5rem", minWidth: "368rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}></div>
                          </div>
                          <div className="border-b h-10" aria-hidden="true" style={{minWidth: "368rem"}}></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-background border-t-border! cn-scroll-area-scrollbar end-0! flex h-4! p-px py-1 rounded-none select-none touch-none transition-colors z-40" data-orientation="horizontal" data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-start="" data-overflow-x-end="" data-overflow-y-end="" data-id="base-ui-_r_5p_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "88.52904211956522px"}}>
                      <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(338.029px, 0px, 0px)"}}></div>
                    </div>
                  </div>
                  <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-start="" data-overflow-x-end="" data-overflow-y-end="" data-id="base-ui-_r_5p_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "315.92452830188677px"}}>
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
