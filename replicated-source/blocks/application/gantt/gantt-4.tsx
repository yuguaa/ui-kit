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
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
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
      <Card className="flex-1 gap-0! min-h-0 p-0! w-full" size="default">
        <Gantt className="flex-1">
          <GanttNav>
            <GanttNavToday className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} id="base-ui-_r_1_" baseUiTooltipTrigger="">
              {"Today"}
            </GanttNavToday>
            <GanttScaleSwitcher className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Select view" id="base-ui-_r_6_" baseUiTooltipTrigger="" aria-haspopup="menu" aria-expanded="false">
              {"Month"}
              <svg className="lucide lucide-chevron-down opacity-60 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </GanttScaleSwitcher>
            <div className="flex gap-1 items-center">
              <GanttNavPrev className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Previous" id="base-ui-_r_a_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine" aria-hidden="true">
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </GanttNavPrev>
              <GanttNavNext className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Next" id="base-ui-_r_c_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </GanttNavNext>
            </div>
            <GanttTitle aria-live="polite">
              {"August 2026"}
            </GanttTitle>
            <div className="grow"></div>
            <GanttToolbar>
              <Popover>
              <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_e_" aria-haspopup="dialog" aria-expanded="false">
                <svg className="lucide lucide-funnel size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                  <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                </svg>
                {"Filter"}
              </PopoverTrigger>
              </Popover>
              <Button type="button" tabIndex={0}>
                <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                {"New Booking"}
              </Button>
            </GanttToolbar>
          </GanttNav>
          <GanttView className="[&_[data-slot=gantt-drag-ghost]>span]:hidden [&_[data-slot=gantt-drag-ghost]]:bg-transparent!" scale="month">
            <div className="flex flex-1 min-h-0 relative">
              <div className="h-full relative shrink-0" style={{width: "488px"}}>
                <ScrollArea className="[&>[data-orientation=vertical]]:hidden h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
                  <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_f_-viewport" tabIndex={0} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "189px"}} data-has-overflow-y="" data-overflow-y-end="">
                    <div role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-y="" data-overflow-y-end="">
                      <div className="flex flex-col min-h-full min-w-full pb-2.5 w-max">
                        <div className="bg-background border-b border-b-transparent box-content h-16 shrink-0 sticky top-0 z-30">
                          <div className="border-b flex h-8">
                            <div className="flex flex-1 h-full min-w-0">
                              <div className="flex h-full items-center shrink-0" style={{width: "208px", paddingInlineStart: "2.25rem"}}>
                                <span className="font-medium text-muted-foreground truncate">
                                  {"Resources"}
                                </span>
                              </div>
                              <div className="flex font-medium h-full items-center px-2 shrink-0 text-muted-foreground" data-column="role" style={{width: "132px"}}>
                                <span className="truncate">
                                  {"Role"}
                                </span>
                              </div>
                              <div className="flex font-medium h-full items-center justify-end px-2 shrink-0 text-muted-foreground" data-column="load" style={{width: "96px"}}>
                                <span className="truncate">
                                  {"Load"}
                                </span>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                            <div className="before:-start-5 before:absolute before:bg-linear-to-l before:from-background before:inset-y-0 before:pointer-events-none before:to-transparent before:w-5 bg-background end-0 flex h-full items-center pe-2.5 ps-1.5 rtl:before:bg-linear-to-r shrink-0 sticky z-10">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Show or hide columns" aria-haspopup="menu" id="base-ui-_r_j_" aria-expanded="false">
                                <svg className="lucide lucide-settings-2 lucide-settings2 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                                  <path d="M14 17H5"></path>
                                  <path d="M19 7h-9"></path>
                                  <circle cx={17} cy={17} r={3}></circle>
                                  <circle cx={7} cy={7} r={3}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="border-b cn-context-menu-trigger data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row select-none" data-gantt-row-id="squad-experience" style={{height: "3.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex font-medium items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <Button className="aria-expanded:bg-transparent! aria-expanded:text-muted-foreground! hover:text-foreground! size-5! text-muted-foreground" type="button" tabIndex={0} aria-expanded="true" aria-label="Experience">
                                      <svg className="lucide lucide-chevron-right rotate-90 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                    </Button>
                                  </span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <span className="font-medium truncate">
                                      {"Experience"}
                                    </span>
                                    <span className="shrink-0 text-muted-foreground">
                                      {"3"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="role" style={{width: "132px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <span className="text-muted-foreground truncate">
                                    {"Lead Mira Stone"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="load" style={{width: "96px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                    {"220/280"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b cn-context-menu-trigger data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row select-none" data-gantt-row-id="person-mira" style={{height: "3.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5"></span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-6" size="default">
                                      <AvatarImage alt="Mira Stone" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="flex flex-col min-w-0">
                                      <span className="font-medium truncate">
                                        {"Mira Stone"}
                                      </span>
                                      <span className="text-muted-foreground truncate">
                                        {"Design Lead"}
                                      </span>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="role" style={{width: "132px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <span className="text-muted-foreground truncate">
                                    {"Design Lead"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="load" style={{width: "96px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                    {"60/100"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b cn-context-menu-trigger data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row select-none" data-gantt-row-id="person-nora" style={{height: "3.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5"></span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-6" size="default">
                                      <AvatarImage alt="Nora Vale" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="flex flex-col min-w-0">
                                      <span className="font-medium truncate">
                                        {"Nora Vale"}
                                      </span>
                                      <span className="text-muted-foreground truncate">
                                        {"Product Designer"}
                                      </span>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="role" style={{width: "132px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <span className="text-muted-foreground truncate">
                                    {"Product Designer"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="load" style={{width: "96px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                    {"70/100"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b cn-context-menu-trigger data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row select-none" data-gantt-row-id="person-theo" style={{height: "6.875rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5"></span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-6" size="default">
                                      <AvatarImage alt="Theo Park" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="flex flex-col min-w-0">
                                      <span className="font-medium truncate">
                                        {"Theo Park"}
                                      </span>
                                      <span className="text-muted-foreground truncate">
                                        {"Frontend Engineer"}
                                      </span>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="role" style={{width: "132px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <span className="text-muted-foreground truncate">
                                    {"Frontend Engineer"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="load" style={{width: "96px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                    {"90/80"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b cn-context-menu-trigger data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row select-none" data-gantt-row-id="squad-platform" style={{height: "3.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex font-medium items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <Button className="aria-expanded:bg-transparent! aria-expanded:text-muted-foreground! hover:text-foreground! size-5! text-muted-foreground" type="button" tabIndex={0} aria-expanded="true" aria-label="Platform">
                                      <svg className="lucide lucide-chevron-right rotate-90 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                    </Button>
                                  </span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <span className="font-medium truncate">
                                      {"Platform"}
                                    </span>
                                    <span className="shrink-0 text-muted-foreground">
                                      {"3"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="role" style={{width: "132px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <span className="text-muted-foreground truncate">
                                    {"Lead Leo Grant"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="load" style={{width: "96px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                    {"190/260"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b cn-context-menu-trigger data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row select-none" data-gantt-row-id="person-leo" style={{height: "3.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5"></span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-6" size="default">
                                      <AvatarImage alt="Leo Grant" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="flex flex-col min-w-0">
                                      <span className="font-medium truncate">
                                        {"Leo Grant"}
                                      </span>
                                      <span className="text-muted-foreground truncate">
                                        {"Staff Engineer"}
                                      </span>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="role" style={{width: "132px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <span className="text-muted-foreground truncate">
                                    {"Staff Engineer"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="load" style={{width: "96px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                    {"50/100"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b cn-context-menu-trigger data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row select-none" data-gantt-row-id="person-alex" style={{height: "3.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5"></span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-6" size="default">
                                      <AvatarImage alt="Alex Johnson" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="flex flex-col min-w-0">
                                      <span className="font-medium truncate">
                                        {"Alex Johnson"}
                                      </span>
                                      <span className="text-muted-foreground truncate">
                                        {"Backend Engineer"}
                                      </span>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="role" style={{width: "132px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <span className="text-muted-foreground truncate">
                                    {"Backend Engineer"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="load" style={{width: "96px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                    {"80/100"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b cn-context-menu-trigger data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row select-none" data-gantt-row-id="person-priya" style={{height: "3.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5"></span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-6" size="default">
                                      <AvatarImage alt="Priya Patel" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="flex flex-col min-w-0">
                                      <span className="font-medium truncate">
                                        {"Priya Patel"}
                                      </span>
                                      <span className="text-muted-foreground truncate">
                                        {"Platform Engineer"}
                                      </span>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="role" style={{width: "132px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <span className="text-muted-foreground truncate">
                                    {"Platform Engineer"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="load" style={{width: "96px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                    {"60/60"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b cn-context-menu-trigger data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row select-none" data-gantt-row-id="squad-insights" style={{height: "3.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex font-medium items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                    <Button className="aria-expanded:bg-transparent! aria-expanded:text-muted-foreground! hover:text-foreground! size-5! text-muted-foreground" type="button" tabIndex={0} aria-expanded="true" aria-label="Insights">
                                      <svg className="lucide lucide-chevron-right rotate-90 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                    </Button>
                                  </span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <span className="font-medium truncate">
                                      {"Insights"}
                                    </span>
                                    <span className="shrink-0 text-muted-foreground">
                                      {"2"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="role" style={{width: "132px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <span className="text-muted-foreground truncate">
                                    {"Lead Sana Qureshi"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="load" style={{width: "96px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                    {"110/180"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b cn-context-menu-trigger data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row select-none" data-gantt-row-id="person-sana" style={{height: "3.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5"></span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-6" size="default">
                                      <AvatarImage alt="Sana Qureshi" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="flex flex-col min-w-0">
                                      <span className="font-medium truncate">
                                        {"Sana Qureshi"}
                                      </span>
                                      <span className="text-muted-foreground truncate">
                                        {"Research Lead"}
                                      </span>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="role" style={{width: "132px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <span className="text-muted-foreground truncate">
                                    {"Research Lead"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="load" style={{width: "96px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                    {"60/100"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                          <div className="border-b cn-context-menu-trigger data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row select-none" data-gantt-row-id="person-devin" style={{height: "3.5rem"}}>
                            <div className="flex h-full min-w-0 w-full">
                              <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                  <span className="flex items-center justify-start me-1 shrink-0 w-5"></span>
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar className="size-6" size="default">
                                      <AvatarFallback className="text-[10px]">
                                        {"DO"}
                                      </AvatarFallback>
                                    </Avatar>
                                    <span className="flex flex-col min-w-0">
                                      <span className="font-medium truncate">
                                        {"Devin Okoye"}
                                      </span>
                                      <span className="text-muted-foreground truncate">
                                        {"Data Analyst"}
                                      </span>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="role" style={{width: "132px"}}>
                                <div className="flex items-center min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <span className="text-muted-foreground truncate">
                                    {"Data Analyst"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-start px-2 shrink-0" data-column="load" style={{width: "96px"}}>
                                <div className="flex items-center justify-end min-w-0 w-full" style={{height: "3.5rem"}}>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                    {"50/80"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_f_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "16px"}}>
                    <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, -18px, 0px)"}}></div>
                  </div>
                </ScrollArea>
                <div className="absolute bg-background border-t border-t-border bottom-0 h-4 inset-x-0 pointer-events-none" aria-hidden="true"></div>
              </div>
              <div className="after:-end-1 after:-start-1 after:absolute after:inset-y-0 bg-border cursor-col-resize data-resizing:bg-primary focus-visible:ring-2 focus-visible:ring-ring/50 group/gantt-splitter hover:bg-primary/60 outline-none relative shrink-0 touch-none w-px z-30" role="separator" aria-orientation="vertical" aria-label="Resize panel" aria-valuenow="488" aria-valuemin="260" aria-valuemax="600" tabIndex={0}>
                <span className="-translate-x-1/2 -translate-y-1/2 absolute bg-primary/60 duration-150 group-data-resizing/gantt-splitter:bg-primary group-data-resizing/gantt-splitter:opacity-100 group-focus-visible/gantt-splitter:opacity-100 group-hover/gantt-splitter:opacity-100 h-6 left-1/2 opacity-0 rounded-full top-1/2 transition-opacity w-0.75" aria-hidden="true"></span>
              </div>
              <div className="flex-1 h-full min-w-0 relative">
                <div className="absolute bg-background border bottom-5 duration-200 end-[calc(0.75rem+var(--gantt-zoom-shift,0px))] flex flex-col rounded-md shadow-sm transition-[inset-inline-end] z-40" style={{"--gantt-zoom-shift": "0px"}}>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:cursor-not-allowed aria-disabled:hover:bg-transparent aria-disabled:opacity-50 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none rounded-b-none select-none shrink-0 size-5! text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Zoom in" id="base-ui-_r_22_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-plus size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:cursor-not-allowed aria-disabled:hover:bg-transparent aria-disabled:opacity-50 border-t cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none rounded-t-none select-none shrink-0 size-5! text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Zoom out" id="base-ui-_r_24_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-minus size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </div>
                <ScrollArea className="[&>[data-orientation=vertical]]:bottom-4! [&>[data-orientation=vertical]]:h-auto! [&>[data-orientation=vertical]]:top-[65px]! h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "16px", "--scroll-area-corner-width": "10px"}} hasOverflowX="" hasOverflowY="" overflowXStart="" overflowXEnd="" overflowYEnd="">
                  <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_25_-viewport" tabIndex={0} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "69px", "--scroll-area-overflow-x-end": "1156px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "189px"}} data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-start="" data-overflow-x-end="" data-overflow-y-end="">
                    <div className="flex flex-col min-h-full" role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-start="" data-overflow-x-end="" data-overflow-y-end="">
                      <div className="flex flex-col grow min-h-full min-w-full pb-2.5 w-max">
                        <div className="bg-background border-b shrink-0 sticky top-0 z-30" style={{minWidth: "124rem"}}>
                          <div className="border-b h-8 relative">
                            <div className="flex h-full">
                              <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "1 0 0px"}}>
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
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(3.22581% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(25.8065% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(48.3871% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(70.9677% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(93.5484% - 1px)"}}></span>
                          </div>
                          <div className="h-8 relative" data-gantt-axis="" data-gantt-range-start="1785513600000" data-gantt-range-end="1788192000000" data-gantt-snap="1440">
                            <div className="absolute inset-0" aria-hidden="true">
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "0%", width: "3.22581%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "3.22581%", width: "3.22581%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "22.5806%", width: "3.22581%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "25.8065%", width: "3.22581%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "45.1613%", width: "3.22581%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "48.3871%", width: "3.22581%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "67.7419%", width: "3.22581%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "70.9677%", width: "3.22581%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "90.3226%", width: "3.22581%"}}></span>
                              <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "93.5484%", width: "3.22581%"}}></span>
                            </div>
                            <div className="flex h-full">
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
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(3.22581% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(6.45161% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(9.67742% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(12.9032% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(16.129% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(19.3548% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(22.5806% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(25.8065% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(29.0323% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(32.2581% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(35.4839% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(38.7097% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(41.9355% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(45.1613% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(48.3871% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(51.6129% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(54.8387% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(58.0645% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(61.2903% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(64.5161% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(67.7419% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(70.9677% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(74.1935% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(77.4194% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(80.6452% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(83.871% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(87.0968% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(90.3226% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(93.5484% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(96.7742% - 1px)"}}></span>
                          </div>
                        </div>
                        <div className="flex flex-col grow min-h-0 relative">
                          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "0%", width: "3.22581%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "3.22581%", width: "3.22581%"}}></span>
                            </span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "22.5806%", width: "3.22581%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "25.8065%", width: "3.22581%"}}></span>
                            </span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "45.1613%", width: "3.22581%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "48.3871%", width: "3.22581%"}}></span>
                            </span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "67.7419%", width: "3.22581%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "70.9677%", width: "3.22581%"}}></span>
                            </span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents"></span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "90.3226%", width: "3.22581%"}}></span>
                            </span>
                            <span className="contents">
                              <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "93.5484%", width: "3.22581%"}}></span>
                            </span>
                            <span className="contents"></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(3.22581% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(6.45161% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(9.67742% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(12.9032% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(16.129% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(19.3548% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(22.5806% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(25.8065% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(29.0323% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(32.2581% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(35.4839% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(38.7097% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(41.9355% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(45.1613% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(48.3871% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(51.6129% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(54.8387% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(58.0645% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(61.2903% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(64.5161% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(67.7419% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(70.9677% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(74.1935% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(77.4194% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(80.6452% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(83.871% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(87.0968% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(90.3226% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(93.5484% - 1px)"}}></span>
                            <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(96.7742% - 1px)"}}></span>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="squad-experience" data-gantt-row-id="squad-experience" data-gantt-row-static="true" data-gantt-bar-min="0.06451612903225806" data-gantt-bar-max="0.45161290322580644" data-gantt-bar-label="Experience" data-gantt-bar-start-ms="1785686400000" style={{height: "3.5rem", minWidth: "124rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="-translate-y-1/2 absolute pointer-events-none top-1/2" aria-hidden="true" style={{insetInlineStart: "6.45161%", width: "38.7097%"}}>
                                <div className="flex gap-2 items-center w-full">
                                  <div className="bg-muted flex-1 h-1.5 min-w-0 overflow-hidden relative rounded-full">
                                    <span className="absolute bg-success inset-y-0 start-0" style={{width: "81%"}}></span>
                                  </div>
                                  <span className="font-medium shrink-0 tabular-nums text-[10px] text-success-foreground">
                                    {"81%"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="person-mira" data-gantt-row-id="person-mira" data-gantt-bar-min="0.06451612903225806" data-gantt-bar-max="0.3870967741935484" data-gantt-bar-color="var(--color-violet-500)" data-gantt-bar-label="2 events" data-gantt-bar-start-ms="1785686400000" style={{height: "3.5rem", minWidth: "124rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "6.45161%", width: "16.129%", top: "0.25rem", height: "3rem", zIndex: "10"}}>
                                <GanttBar className="bg-card border-border cn-context-menu-trigger data-[drag-kind=resize-end]:opacity-100 data-[drag-kind=resize-start]:opacity-100 data-selected:bg-accent/60 gap-0 h-full hover:bg-accent/40 items-stretch p-0 shadow-xs" type="button" allDay="true" past="true" aria-label="Checkout Audit, Aug 3 - Aug 7, 2026, Mira Stone" id="base-ui-_r_2b_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-violet-500)"}}>
                                  <div className="flex gap-2 h-full items-stretch min-w-0 w-full">
                                    <span className="bg-(--gantt-event-color) shrink-0 w-0.5" aria-hidden="true"></span>
                                    <div className="flex flex-1 flex-col gap-0.5 justify-center min-w-0 pe-1 py-0.5">
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <span className="font-medium truncate">
                                          {"Checkout Audit"}
                                        </span>
                                        <span className="ms-auto ps-1 shrink-0">
                                          <AvatarGroup>
                                            <Avatar className="size-5" size="default">
                                              <AvatarImage alt="Sana Qureshi" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <Avatar className="size-5" size="default">
                                              <AvatarImage alt="Nora Vale" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                          </AvatarGroup>
                                        </span>
                                      </div>
                                      <div className="@[11rem]:flex gap-1.5 hidden items-center min-w-0">
                                        <span className="text-muted-foreground truncate">
                                          {"Northwind Retail"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="shrink-0 text-muted-foreground">
                                          {"Aug 3"}
                                        </span>
                                        <span className="@[16rem]:flex gap-1 hidden items-center ps-0.5 shrink-0">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                            {"Discovery"}
                                          </Badge>
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                            {"High"}
                                          </Badge>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "22.5806%", width: "16.129%", top: "0.25rem", height: "3rem", zIndex: "10"}}>
                                <GanttBar className="bg-card border-border cn-context-menu-trigger data-[drag-kind=resize-end]:opacity-100 data-[drag-kind=resize-start]:opacity-100 data-selected:bg-accent/60 gap-0 h-full hover:bg-accent/40 items-stretch p-0 shadow-xs" type="button" allDay="true" past="true" aria-label="Design System, Aug 8 - Aug 12, 2026, Mira Stone" id="base-ui-_r_2h_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-blue-500)"}}>
                                  <div className="flex gap-2 h-full items-stretch min-w-0 w-full">
                                    <span className="bg-(--gantt-event-color) shrink-0 w-0.5" aria-hidden="true"></span>
                                    <div className="flex flex-1 flex-col gap-0.5 justify-center min-w-0 pe-1 py-0.5">
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <span className="font-medium truncate">
                                          {"Design System"}
                                        </span>
                                        <span className="ms-auto ps-1 shrink-0">
                                          <AvatarGroup>
                                            <Avatar className="size-5" size="default">
                                              <AvatarImage alt="Nora Vale" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                          </AvatarGroup>
                                        </span>
                                      </div>
                                      <div className="@[11rem]:flex gap-1.5 hidden items-center min-w-0">
                                        <span className="text-muted-foreground truncate">
                                          {"Internal"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="shrink-0 text-muted-foreground">
                                          {"Aug 8"}
                                        </span>
                                        <span className="@[16rem]:flex gap-1 hidden items-center ps-0.5 shrink-0">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                            {"Design"}
                                          </Badge>
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                            {"Medium"}
                                          </Badge>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
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
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="person-nora" data-gantt-row-id="person-nora" data-gantt-bar-min="0.0967741935483871" data-gantt-bar-max="0.3225806451612903" data-gantt-bar-color="var(--color-blue-500)" data-gantt-bar-label="Onboarding Flow" data-gantt-bar-start-ms="1785772800000" style={{height: "3.5rem", minWidth: "124rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "9.67742%", width: "22.5806%", top: "0.25rem", height: "3rem", zIndex: "10"}}>
                                <GanttBar className="bg-card border-border cn-context-menu-trigger data-[drag-kind=resize-end]:opacity-100 data-[drag-kind=resize-start]:opacity-100 data-selected:bg-accent/60 gap-0 h-full hover:bg-accent/40 items-stretch p-0 shadow-xs" type="button" allDay="true" past="true" aria-label="Onboarding Flow, Aug 4 - Aug 10, 2026, Nora Vale" id="base-ui-_r_2n_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-blue-500)"}}>
                                  <div className="flex gap-2 h-full items-stretch min-w-0 w-full">
                                    <span className="bg-(--gantt-event-color) shrink-0 w-0.5" aria-hidden="true"></span>
                                    <div className="flex flex-1 flex-col gap-0.5 justify-center min-w-0 pe-1 py-0.5">
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <span className="font-medium truncate">
                                          {"Onboarding Flow"}
                                        </span>
                                        <span className="ms-auto ps-1 shrink-0">
                                          <AvatarGroup>
                                            <Avatar className="size-5" size="default">
                                              <AvatarImage alt="Mira Stone" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <Avatar className="size-5" size="default">
                                              <AvatarImage alt="Theo Park" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                          </AvatarGroup>
                                        </span>
                                      </div>
                                      <div className="@[11rem]:flex gap-1.5 hidden items-center min-w-0">
                                        <span className="text-muted-foreground truncate">
                                          {"Kestrel Health"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="shrink-0 text-muted-foreground">
                                          {"Aug 4"}
                                        </span>
                                        <span className="@[16rem]:flex gap-1 hidden items-center ps-0.5 shrink-0">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                            {"Design"}
                                          </Badge>
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                            {"High"}
                                          </Badge>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
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
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="person-theo" data-gantt-row-id="person-theo" data-gantt-bar-min="0.06451612903225806" data-gantt-bar-max="0.45161290322580644" data-gantt-bar-color="var(--color-emerald-500)" data-gantt-bar-label="2 events" data-gantt-bar-start-ms="1785686400000" style={{height: "6.875rem", minWidth: "124rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="2" style={{insetInlineStart: "6.45161%", width: "35.4839%", top: "0.25rem", height: "3rem", zIndex: "10"}}>
                                <GanttBar className="bg-card border-border cn-context-menu-trigger data-[drag-kind=resize-end]:opacity-100 data-[drag-kind=resize-start]:opacity-100 data-selected:bg-accent/60 gap-0 h-full hover:bg-accent/40 items-stretch p-0 shadow-xs" type="button" allDay="true" past="true" aria-label="Billing Rewrite, Aug 3 - Aug 13, 2026, Theo Park" id="base-ui-_r_2t_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-emerald-500)"}}>
                                  <div className="flex gap-2 h-full items-stretch min-w-0 w-full">
                                    <span className="bg-destructive shrink-0 w-0.5" aria-hidden="true"></span>
                                    <div className="flex flex-1 flex-col gap-0.5 justify-center min-w-0 pe-1 py-0.5">
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <svg className="lucide lucide-triangle-alert shrink-0 size-3.5 text-destructive" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                          <path d="M12 9v4"></path>
                                          <path d="M12 17h.01"></path>
                                        </svg>
                                        <span className="font-medium truncate">
                                          {"Billing Rewrite"}
                                        </span>
                                        <span className="ms-auto ps-1 shrink-0">
                                          <AvatarGroup>
                                            <Avatar className="size-5" size="default">
                                              <AvatarImage alt="Leo Grant" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <Avatar className="size-5" size="default">
                                              <AvatarImage alt="Alex Johnson" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                          </AvatarGroup>
                                        </span>
                                      </div>
                                      <div className="@[11rem]:flex gap-1.5 hidden items-center min-w-0">
                                        <span className="text-muted-foreground truncate">
                                          {"Kestrel Health"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="shrink-0 text-muted-foreground">
                                          {"Aug 3"}
                                        </span>
                                        <span className="@[16rem]:flex gap-1 hidden items-center ps-0.5 shrink-0">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                            {"Build"}
                                          </Badge>
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                            {"High"}
                                          </Badge>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="1" data-lane-count="2" style={{insetInlineStart: "32.2581%", width: "12.9032%", top: "3.625rem", height: "3rem", zIndex: "11"}}>
                                <GanttBar className="bg-card border-border cn-context-menu-trigger data-[drag-kind=resize-end]:opacity-100 data-[drag-kind=resize-start]:opacity-100 data-selected:bg-accent/60 gap-0 h-full hover:bg-accent/40 items-stretch p-0 shadow-xs" type="button" allDay="true" past="true" aria-label="Launch Review, Aug 11 - Aug 14, 2026, Theo Park" id="base-ui-_r_33_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-amber-500)"}}>
                                  <div className="flex gap-2 h-full items-stretch min-w-0 w-full">
                                    <span className="bg-(--gantt-event-color)/40 shrink-0 w-0.5" aria-hidden="true"></span>
                                    <div className="flex flex-1 flex-col gap-0.5 justify-center min-w-0 pe-1 py-0.5">
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <span className="font-medium truncate">
                                          {"Launch Review"}
                                        </span>
                                        <span className="ms-auto ps-1 shrink-0">
                                          <AvatarGroup>
                                            <Avatar className="size-5" size="default">
                                              <AvatarImage alt="Mira Stone" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                          </AvatarGroup>
                                        </span>
                                      </div>
                                      <div className="@[11rem]:flex gap-1.5 hidden items-center min-w-0">
                                        <span className="text-muted-foreground truncate">
                                          {"Northwind Retail"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="shrink-0 text-muted-foreground">
                                          {"Aug 11"}
                                        </span>
                                        <span className="@[16rem]:flex gap-1 hidden items-center ps-0.5 shrink-0">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                            {"Launch"}
                                          </Badge>
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                            {"Low"}
                                          </Badge>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
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
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="squad-platform" data-gantt-row-id="squad-platform" data-gantt-row-static="true" data-gantt-bar-min="0.06451612903225806" data-gantt-bar-max="0.5483870967741935" data-gantt-bar-label="Platform" data-gantt-bar-start-ms="1785686400000" style={{height: "3.5rem", minWidth: "124rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="-translate-y-1/2 absolute pointer-events-none top-1/2" aria-hidden="true" style={{insetInlineStart: "6.45161%", width: "48.3871%"}}>
                                <div className="flex gap-2 items-center w-full">
                                  <div className="bg-muted flex-1 h-1.5 min-w-0 overflow-hidden relative rounded-full">
                                    <span className="absolute bg-success inset-y-0 start-0" style={{width: "77%"}}></span>
                                  </div>
                                  <span className="font-medium shrink-0 tabular-nums text-[10px] text-success-foreground">
                                    {"77%"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="person-leo" data-gantt-row-id="person-leo" data-gantt-bar-min="0.16129032258064516" data-gantt-bar-max="0.5483870967741935" data-gantt-bar-color="var(--color-amber-500)" data-gantt-bar-label="2 events" data-gantt-bar-start-ms="1785945600000" style={{height: "3.5rem", minWidth: "124rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "16.129%", width: "22.5806%", top: "0.25rem", height: "3rem", zIndex: "10"}}>
                                <GanttBar className="bg-card border-border cn-context-menu-trigger data-[drag-kind=resize-end]:opacity-100 data-[drag-kind=resize-start]:opacity-100 data-selected:bg-accent/60 gap-0 h-full hover:bg-accent/40 items-stretch p-0 shadow-xs" type="button" allDay="true" past="true" aria-label="Search Rollout, Aug 6 - Aug 12, 2026, Leo Grant" id="base-ui-_r_39_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-amber-500)"}}>
                                  <div className="flex gap-2 h-full items-stretch min-w-0 w-full">
                                    <span className="bg-(--gantt-event-color) shrink-0 w-0.5" aria-hidden="true"></span>
                                    <div className="flex flex-1 flex-col gap-0.5 justify-center min-w-0 pe-1 py-0.5">
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <span className="font-medium truncate">
                                          {"Search Rollout"}
                                        </span>
                                        <span className="ms-auto ps-1 shrink-0">
                                          <AvatarGroup>
                                            <Avatar className="size-5" size="default">
                                              <AvatarImage alt="Alex Johnson" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <Avatar className="size-5" size="default">
                                              <AvatarImage alt="Priya Patel" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <Avatar className="size-5" size="default">
                                              <AvatarImage alt="Theo Park" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                          </AvatarGroup>
                                        </span>
                                      </div>
                                      <div className="@[11rem]:flex gap-1.5 hidden items-center min-w-0">
                                        <span className="text-muted-foreground truncate">
                                          {"Northwind Retail"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="shrink-0 text-muted-foreground">
                                          {"Aug 6"}
                                        </span>
                                        <span className="@[16rem]:flex gap-1 hidden items-center ps-0.5 shrink-0">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                            {"Launch"}
                                          </Badge>
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                            {"Medium"}
                                          </Badge>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                    <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                  </span>
                                </GanttBar>
                              </div>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "38.7097%", width: "16.129%", top: "0.25rem", height: "3rem", zIndex: "10"}}>
                                <GanttBar className="bg-card border-border cn-context-menu-trigger data-[drag-kind=resize-end]:opacity-100 data-[drag-kind=resize-start]:opacity-100 data-selected:bg-accent/60 gap-0 h-full hover:bg-accent/40 items-stretch p-0 shadow-xs" type="button" allDay="true" past="true" aria-label="Event Pipeline, Aug 13 - Aug 17, 2026, Leo Grant" id="base-ui-_r_3f_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-emerald-500)"}}>
                                  <div className="flex gap-2 h-full items-stretch min-w-0 w-full">
                                    <span className="bg-(--gantt-event-color)/40 shrink-0 w-0.5" aria-hidden="true"></span>
                                    <div className="flex flex-1 flex-col gap-0.5 justify-center min-w-0 pe-1 py-0.5">
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <span className="font-medium truncate">
                                          {"Event Pipeline"}
                                        </span>
                                        <span className="ms-auto ps-1 shrink-0">
                                          <AvatarGroup>
                                            <Avatar className="size-5" size="default">
                                              <AvatarImage alt="Priya Patel" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                          </AvatarGroup>
                                        </span>
                                      </div>
                                      <div className="@[11rem]:flex gap-1.5 hidden items-center min-w-0">
                                        <span className="text-muted-foreground truncate">
                                          {"Meridian Logistics"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="shrink-0 text-muted-foreground">
                                          {"Aug 13"}
                                        </span>
                                        <span className="@[16rem]:flex gap-1 hidden items-center ps-0.5 shrink-0">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                            {"Build"}
                                          </Badge>
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                            {"Low"}
                                          </Badge>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
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
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="person-alex" data-gantt-row-id="person-alex" data-gantt-bar-min="0.06451612903225806" data-gantt-bar-max="0.2903225806451613" data-gantt-bar-color="var(--color-emerald-500)" data-gantt-bar-label="Ledger Sync" data-gantt-bar-start-ms="1785686400000" style={{height: "3.5rem", minWidth: "124rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "6.45161%", width: "22.5806%", top: "0.25rem", height: "3rem", zIndex: "10"}}>
                                <GanttBar className="bg-card border-border cn-context-menu-trigger data-[drag-kind=resize-end]:opacity-100 data-[drag-kind=resize-start]:opacity-100 data-selected:bg-accent/60 gap-0 h-full hover:bg-accent/40 items-stretch p-0 shadow-xs" type="button" allDay="true" past="true" aria-label="Ledger Sync, Aug 3 - Aug 9, 2026, Alex Johnson" id="base-ui-_r_3l_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-emerald-500)"}}>
                                  <div className="flex gap-2 h-full items-stretch min-w-0 w-full">
                                    <span className="bg-(--gantt-event-color) shrink-0 w-0.5" aria-hidden="true"></span>
                                    <div className="flex flex-1 flex-col gap-0.5 justify-center min-w-0 pe-1 py-0.5">
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <span className="font-medium truncate">
                                          {"Ledger Sync"}
                                        </span>
                                        <span className="ms-auto ps-1 shrink-0">
                                          <AvatarGroup>
                                            <Avatar className="size-5" size="default">
                                              <AvatarImage alt="Leo Grant" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                          </AvatarGroup>
                                        </span>
                                      </div>
                                      <div className="@[11rem]:flex gap-1.5 hidden items-center min-w-0">
                                        <span className="text-muted-foreground truncate">
                                          {"Meridian Logistics"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="shrink-0 text-muted-foreground">
                                          {"Aug 3"}
                                        </span>
                                        <span className="@[16rem]:flex gap-1 hidden items-center ps-0.5 shrink-0">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                            {"Build"}
                                          </Badge>
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                            {"Medium"}
                                          </Badge>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
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
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="person-priya" data-gantt-row-id="person-priya" data-gantt-bar-min="0.0967741935483871" data-gantt-bar-max="0.1935483870967742" data-gantt-bar-color="var(--color-emerald-500)" data-gantt-bar-label="Cache Tuning" data-gantt-bar-start-ms="1785772800000" style={{height: "3.5rem", minWidth: "124rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "9.67742%", width: "9.67742%", top: "0.25rem", height: "3rem", zIndex: "10"}}>
                                <GanttBar className="bg-card border-border cn-context-menu-trigger data-[drag-kind=resize-end]:opacity-100 data-[drag-kind=resize-start]:opacity-100 data-selected:bg-accent/60 gap-0 h-full hover:bg-accent/40 items-stretch p-0 shadow-xs" type="button" allDay="true" past="true" aria-label="Cache Tuning, Aug 4 - Aug 6, 2026, Priya Patel" id="base-ui-_r_3r_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-emerald-500)"}}>
                                  <div className="flex gap-2 h-full items-stretch min-w-0 w-full">
                                    <span className="bg-muted-foreground/50 shrink-0 w-0.5" aria-hidden="true"></span>
                                    <div className="flex flex-1 flex-col gap-0.5 justify-center min-w-0 pe-1 py-0.5">
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <svg className="lucide lucide-check shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                          <path d="M20 6 9 17l-5-5"></path>
                                        </svg>
                                        <span className="font-medium truncate">
                                          {"Cache Tuning"}
                                        </span>
                                        <span className="ms-auto ps-1 shrink-0"></span>
                                      </div>
                                      <div className="@[11rem]:flex gap-1.5 hidden items-center min-w-0">
                                        <span className="text-muted-foreground truncate">
                                          {"Internal"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="shrink-0 text-muted-foreground">
                                          {"Aug 4"}
                                        </span>
                                        <span className="@[16rem]:flex gap-1 hidden items-center ps-0.5 shrink-0">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                            {"Build"}
                                          </Badge>
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                            {"Low"}
                                          </Badge>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
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
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="squad-insights" data-gantt-row-id="squad-insights" data-gantt-row-static="true" data-gantt-bar-min="0.12903225806451613" data-gantt-bar-max="0.45161290322580644" data-gantt-bar-label="Insights" data-gantt-bar-start-ms="1785859200000" style={{height: "3.5rem", minWidth: "124rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="-translate-y-1/2 absolute pointer-events-none top-1/2" aria-hidden="true" style={{insetInlineStart: "12.9032%", width: "32.2581%"}}>
                                <div className="flex gap-2 items-center w-full">
                                  <div className="bg-muted flex-1 h-1.5 min-w-0 overflow-hidden relative rounded-full">
                                    <span className="absolute bg-success inset-y-0 start-0" style={{width: "61%"}}></span>
                                  </div>
                                  <span className="font-medium shrink-0 tabular-nums text-[10px] text-success-foreground">
                                    {"61%"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="person-sana" data-gantt-row-id="person-sana" data-gantt-bar-min="0.12903225806451613" data-gantt-bar-max="0.3870967741935484" data-gantt-bar-color="var(--color-violet-500)" data-gantt-bar-label="Pricing Study" data-gantt-bar-start-ms="1785859200000" style={{height: "3.5rem", minWidth: "124rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "12.9032%", width: "25.8065%", top: "0.25rem", height: "3rem", zIndex: "10"}}>
                                <GanttBar className="bg-card border-border cn-context-menu-trigger data-[drag-kind=resize-end]:opacity-100 data-[drag-kind=resize-start]:opacity-100 data-selected:bg-accent/60 gap-0 h-full hover:bg-accent/40 items-stretch p-0 shadow-xs" type="button" allDay="true" past="true" aria-label="Pricing Study, Aug 5 - Aug 12, 2026, Sana Qureshi" id="base-ui-_r_41_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-violet-500)"}}>
                                  <div className="flex gap-2 h-full items-stretch min-w-0 w-full">
                                    <span className="bg-(--gantt-event-color) shrink-0 w-0.5" aria-hidden="true"></span>
                                    <div className="flex flex-1 flex-col gap-0.5 justify-center min-w-0 pe-1 py-0.5">
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <span className="font-medium truncate">
                                          {"Pricing Study"}
                                        </span>
                                        <span className="ms-auto ps-1 shrink-0">
                                          <AvatarGroup>
                                            <Avatar className="size-5" size="default">
                                              <AvatarFallback className="text-[9px]">
                                                {"DO"}
                                              </AvatarFallback>
                                            </Avatar>
                                            <Avatar className="size-5" size="default">
                                              <AvatarImage alt="Mira Stone" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                          </AvatarGroup>
                                        </span>
                                      </div>
                                      <div className="@[11rem]:flex gap-1.5 hidden items-center min-w-0">
                                        <span className="text-muted-foreground truncate">
                                          {"Northwind Retail"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="shrink-0 text-muted-foreground">
                                          {"Aug 5"}
                                        </span>
                                        <span className="@[16rem]:flex gap-1 hidden items-center ps-0.5 shrink-0">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                            {"Discovery"}
                                          </Badge>
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                            {"High"}
                                          </Badge>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
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
                          <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="person-devin" data-gantt-row-id="person-devin" data-gantt-bar-min="0.1935483870967742" data-gantt-bar-max="0.45161290322580644" data-gantt-bar-color="var(--color-violet-500)" data-gantt-bar-label="Churn Model" data-gantt-bar-start-ms="1786032000000" style={{height: "3.5rem", minWidth: "124rem"}}>
                            <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                              <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "19.3548%", width: "25.8065%", top: "0.25rem", height: "3rem", zIndex: "10"}}>
                                <GanttBar className="bg-card border-border cn-context-menu-trigger data-[drag-kind=resize-end]:opacity-100 data-[drag-kind=resize-start]:opacity-100 data-selected:bg-accent/60 gap-0 h-full hover:bg-accent/40 items-stretch p-0 shadow-xs" type="button" allDay="true" past="true" aria-label="Churn Model, Aug 7 - Aug 14, 2026, Devin Okoye" id="base-ui-_r_47_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-violet-500)"}}>
                                  <div className="flex gap-2 h-full items-stretch min-w-0 w-full">
                                    <span className="bg-(--gantt-event-color)/40 shrink-0 w-0.5" aria-hidden="true"></span>
                                    <div className="flex flex-1 flex-col gap-0.5 justify-center min-w-0 pe-1 py-0.5">
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <span className="font-medium truncate">
                                          {"Churn Model"}
                                        </span>
                                        <span className="ms-auto ps-1 shrink-0">
                                          <AvatarGroup>
                                            <Avatar className="size-5" size="default">
                                              <AvatarImage alt="Sana Qureshi" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                          </AvatarGroup>
                                        </span>
                                      </div>
                                      <div className="@[11rem]:flex gap-1.5 hidden items-center min-w-0">
                                        <span className="text-muted-foreground truncate">
                                          {"Kestrel Health"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="shrink-0 text-muted-foreground">
                                          {"Aug 7"}
                                        </span>
                                        <span className="@[16rem]:flex gap-1 hidden items-center ps-0.5 shrink-0">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                            {"Discovery"}
                                          </Badge>
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                            {"Medium"}
                                          </Badge>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
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
                    <div className="bg-background border-t-border! cn-scroll-area-scrollbar end-0! flex h-4! p-px py-1 rounded-none select-none touch-none transition-colors z-40" data-orientation="horizontal" data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-start="" data-overflow-x-end="" data-overflow-y-end="" data-id="base-ui-_r_25_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "286.5378024193548px"}}>
                      <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(26.4995px, 0px, 0px)"}}></div>
                    </div>
                  </div>
                  <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-start="" data-overflow-x-end="" data-overflow-y-end="" data-id="base-ui-_r_25_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "342.5557046979866px"}}>
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
