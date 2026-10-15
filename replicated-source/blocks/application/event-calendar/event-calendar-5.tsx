import {
  EventCalendarNavNext,
  EventCalendarNavPrev,
  EventCalendarNavToday,
} from "@/registry-neui/bases/base/neui/event-calendar/event-calendar-nav"
import { EventCalendarTimeGutter } from "@/registry-neui/bases/base/neui/event-calendar/event-calendar-time-grid"
import { EventCalendarContent } from "@/registry-neui/bases/radix/neui/event-calendar/event-calendar-content"
import { EventCalendarEvent } from "@/registry-neui/bases/radix/neui/event-calendar/event-calendar-event"
import {
  EventCalendarNav,
  EventCalendarTitle,
  EventCalendarToolbar,
} from "@/registry-neui/bases/radix/neui/event-calendar/event-calendar-nav"
import { EventCalendarResourceView } from "@/registry-neui/bases/radix/neui/event-calendar/event-calendar-resource-view"
import { EventCalendar } from "@/registry-neui/bases/radix/neui/event-calendar/event-calendar"
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
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col h-svh min-w-0 p-4 w-full">
      <Card className="flex-1 gap-0 min-h-0 overflow-hidden p-0!" size="default">
        <Tabs className="flex-1 flex-col gap-0 min-h-0" data-orientation="horizontal" activationDirection="none">
          <div className="border-b flex gap-3 items-stretch justify-between pe-4 shrink-0">
            <TabsList className="gap-6 h-11! ps-4 py-0!" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
              <TabsTrigger className="after:-bottom-px! h-full! px-1 text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_0_" compositeItemActive="" aria-controls="base-ui-_r_2_">
                Calendar
              </TabsTrigger>
              <TabsTrigger className="after:-bottom-px! h-full! px-1 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_1_">
                Log History
              </TabsTrigger>
            </TabsList>
            <div className="flex gap-1.5 items-center shrink-0 text-muted-foreground text-xs">
              <svg className="lucide lucide-calendar shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              <span className="tabular-nums">
                16
              </span>
              <span className="hidden sm:inline">
                booked in view
              </span>
            </div>
          </div>
          <TabsContent className="flex flex-col min-h-0" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_2_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_0_">
            <EventCalendar className="flex-1">
              <div className="flex flex-wrap gap-x-2 items-center pe-2">
                <EventCalendarNav className="flex-nowrap lg:flex-1 lg:w-auto w-full">
                  <EventCalendarNavToday className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" id="base-ui-_r_4_" baseUiTooltipTrigger="">
                    Today
                  </EventCalendarNavToday>
                  <div className="flex items-center">
                    <EventCalendarNavPrev className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Previous" id="base-ui-_r_6_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine" aria-hidden="true">
                        <path d="m15 18-6-6 6-6"></path>
                      </svg>
                    </EventCalendarNavPrev>
                    <EventCalendarNavNext className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Next" id="base-ui-_r_8_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </EventCalendarNavNext>
                  </div>
                  <EventCalendarTitle className="ms-3" aria-live="polite">
                    Thursday, May 14, 2026
                  </EventCalendarTitle>
                  <div className="grow"></div>
                </EventCalendarNav>
                <EventCalendarToolbar className="lg:pb-0 lg:ps-0 lg:w-auto max-sm:flex-wrap max-sm:gap-y-2 pb-2 ps-2 w-full">
                  <ToggleGroup className="shrink-0" data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="default" spacing="0" aria-label="Board view" style={{"--gap": "0"}}>
                    <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="outline" size="default" spacing="0">
                      Day
                    </ToggleGroupItem>
                    <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0">
                      Week
                    </ToggleGroupItem>
                  </ToggleGroup>
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_e_" aria-label="Choose chairs" aria-expanded="false">
                    <svg className="lucide lucide-briefcase-medical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BriefcaseMedicalIcon" tabler="IconStethoscope" hugeicons="Hospital02Icon" phosphor="StethoscopeIcon" remixicon="RiStethoscopeLine" aria-hidden="true">
                      <path d="M12 11v4"></path>
                      <path d="M14 13h-4"></path>
                      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                      <path d="M18 6v14"></path>
                      <path d="M6 6v14"></path>
                      <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                    </svg>
                    <span className="truncate">
                      5 of 9 Chairs
                    </span>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_j_" aria-label="Filter by status" aria-expanded="false">
                    <svg className="lucide lucide-funnel size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                      <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                    </svg>
                    <span className="hidden sm:inline">
                      Filters
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                      6
                    </Badge>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                  <Button className="flex-1 lg:flex-none max-sm:w-full" type="button" tabIndex="0">
                    <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                    New Booking
                  </Button>
                </EventCalendarToolbar>
              </div>
              <EventCalendarContent className="[--ec-resource-col-min:8rem]" view="resource">
                <EventCalendarResourceView view="resource" style={{"--ec-hour-height": "4rem", "--ec-scrollbar-w": "0px"}}>
                  <div className="border-b flex pe-(--ec-scrollbar-w,0px)">
                    <div className="border-e shrink-0 w-(--ec-gutter-width,4.5rem)"></div>
                    <div className="flex-1 grid min-w-0" style={{gridTemplateColumns: "repeat(5, minmax(var(--ec-resource-col-min,8rem), 1fr))"}}>
                      <div className="border-e font-medium last:border-e-0 min-w-0 p-0 text-start truncate whitespace-normal">
                        <div className="flex gap-2 items-center px-2 py-2 text-start">
                          <Avatar className="size-8" size="default">
                            <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                          <div className="flex flex-col min-w-0">
                            <span className="font-semibold text-sm truncate">
                              Dr. Amara Chen
                            </span>
                            <span className="font-normal text-muted-foreground text-xs truncate">
                              5 patients
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="border-e font-medium last:border-e-0 min-w-0 p-0 text-start truncate whitespace-normal">
                        <div className="flex gap-2 items-center px-2 py-2 text-start">
                          <Avatar className="size-8" size="default">
                            <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                          <div className="flex flex-col min-w-0">
                            <span className="font-semibold text-sm truncate">
                              Dr. Ravi Menon
                            </span>
                            <span className="font-normal text-muted-foreground text-xs truncate">
                              3 patients
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="border-e font-medium last:border-e-0 min-w-0 p-0 text-start truncate whitespace-normal">
                        <div className="flex gap-2 items-center px-2 py-2 text-start">
                          <Avatar className="size-8" size="default">
                            <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                          <div className="flex flex-col min-w-0">
                            <span className="font-semibold text-sm truncate">
                              Dr. Elena Novak
                            </span>
                            <span className="font-normal text-muted-foreground text-xs truncate">
                              3 patients
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="border-e font-medium last:border-e-0 min-w-0 p-0 text-start truncate whitespace-normal">
                        <div className="flex gap-2 items-center px-2 py-2 text-start">
                          <Avatar className="size-8" size="default">
                            <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                          <div className="flex flex-col min-w-0">
                            <span className="font-semibold text-sm truncate">
                              Dr. Tomas Reyes
                            </span>
                            <span className="font-normal text-muted-foreground text-xs truncate">
                              2 patients
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="border-e font-medium last:border-e-0 min-w-0 p-0 text-start truncate whitespace-normal">
                        <div className="flex gap-2 items-center px-2 py-2 text-start">
                          <Avatar className="size-8" size="default">
                            <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                          <div className="flex flex-col min-w-0">
                            <span className="font-semibold text-sm truncate">
                              Dr. Hana Sato
                            </span>
                            <span className="font-normal text-muted-foreground text-xs truncate">
                              3 patients
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-b flex pe-(--ec-scrollbar-w,0px)">
                    <div className="border-e pe-2.5 ps-2 pt-1.5 shrink-0 text-muted-foreground w-(--ec-gutter-width,4.5rem)">
                      <span className="flex h-[calc(var(--ec-month-bar-h,1.625rem)-0.125rem)] items-center justify-end">
                        All day
                      </span>
                    </div>
                    <div className="flex-1 grid min-w-0" style={{gridTemplateColumns: "repeat(5, minmax(var(--ec-resource-col-min,8rem), 1fr))"}}>
                      <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-h-[calc(var(--ec-month-bar-h,1.625rem)+0.625rem)] min-w-0 px-1 py-1.5 relative" data-ec-day="1778688000000"></div>
                      <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-h-[calc(var(--ec-month-bar-h,1.625rem)+0.625rem)] min-w-0 px-1 py-1.5 relative" data-ec-day="1778688000000"></div>
                      <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-h-[calc(var(--ec-month-bar-h,1.625rem)+0.625rem)] min-w-0 px-1 py-1.5 relative" data-ec-day="1778688000000"></div>
                      <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-h-[calc(var(--ec-month-bar-h,1.625rem)+0.625rem)] min-w-0 px-1 py-1.5 relative" data-ec-day="1778688000000"></div>
                      <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-h-[calc(var(--ec-month-bar-h,1.625rem)+0.625rem)] min-w-0 px-1 py-1.5 relative" data-ec-day="1778688000000"></div>
                    </div>
                  </div>
                  <div className="flex-1 min-h-0">
                    <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
                      <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_l_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "287px"}} data-has-overflow-y="" data-overflow-y-end="">
                        <div className="flex relative">
                          <EventCalendarTimeGutter>
                            <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}></div>
                            <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                              <span className="-top-2 absolute end-2.5 text-muted-foreground">
                                9 AM
                              </span>
                            </div>
                            <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                              <span className="-top-2 absolute end-2.5 text-muted-foreground">
                                10 AM
                              </span>
                            </div>
                            <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                              <span className="-top-2 absolute end-2.5 text-muted-foreground">
                                11 AM
                              </span>
                            </div>
                            <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                              <span className="-top-2 absolute end-2.5 text-muted-foreground">
                                12 PM
                              </span>
                            </div>
                            <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                              <span className="-top-2 absolute end-2.5 text-muted-foreground">
                                1 PM
                              </span>
                            </div>
                            <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                              <span className="-top-2 absolute end-2.5 text-muted-foreground">
                                2 PM
                              </span>
                            </div>
                            <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                              <span className="-top-2 absolute end-2.5 text-muted-foreground">
                                3 PM
                              </span>
                            </div>
                            <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                              <span className="-top-2 absolute end-2.5 text-muted-foreground">
                                4 PM
                              </span>
                            </div>
                            <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                              <span className="-top-2 absolute end-2.5 text-muted-foreground">
                                5 PM
                              </span>
                            </div>
                            <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                              <span className="-top-2 absolute end-2.5 text-muted-foreground">
                                6 PM
                              </span>
                            </div>
                          </EventCalendarTimeGutter>
                          <div className="flex-1 grid min-w-0" style={{gridTemplateColumns: "repeat(5, minmax(var(--ec-resource-col-min,8rem), 1fr))"}}>
                            <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1778688000000" data-ec-bounds-start="480" data-ec-bounds-end="1140" data-ec-resource="chen" role="group" aria-label="Dr. Amara Chen" style={{height: "calc(var(--ec-hour-height) * 11)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                              <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 0.5)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                                <EventCalendarEvent className="gap-1 h-full leading-4 py-0" type="button" view="resource" past="true" title="Ifeoma Okafor, 8:30 AM - 9:00 AM" aria-label="Ifeoma Okafor, 8:30 AM - 9:00 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-emerald-500)"}}>
                                  <span className="flex flex-col gap-1 min-w-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <Avatar className="size-4" size="default">
                                        <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium truncate">
                                        Ifeoma Okafor
                                      </span>
                                      <span className="@[9rem]:flex hidden items-center shrink-0" aria-hidden="true">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                          Completed
                                        </Badge>
                                      </span>
                                      <span className="sr-only">
                                        Completed
                                      </span>
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                </EventCalendarEvent>
                              </div>
                              <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 1.5)", height: "calc(var(--ec-hour-height) * 0.75)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                                <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="resource" past="true" title="Samir Haddad, 9:30 AM - 10:15 AM" aria-label="Samir Haddad, 9:30 AM - 10:15 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-emerald-500)"}}>
                                  <span className="flex flex-col gap-1 min-w-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <Avatar className="size-4" size="default">
                                        <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium truncate">
                                        Samir Haddad
                                      </span>
                                      <span className="@[9rem]:flex hidden items-center shrink-0" aria-hidden="true">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                          Completed
                                        </Badge>
                                      </span>
                                      <span className="sr-only">
                                        Completed
                                      </span>
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="shrink-0 tabular-nums">
                                        9:30 AM
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        Scaling
                                      </span>
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                </EventCalendarEvent>
                              </div>
                              <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 3)", height: "calc(var(--ec-hour-height) * 1)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                                <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="resource" past="true" title="Elsa Lindqvist, 11:00 AM - 12:00 PM" aria-label="Elsa Lindqvist, 11:00 AM - 12:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                                  <span className="flex flex-col gap-1 min-w-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <Avatar className="size-4" size="default">
                                        <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium truncate">
                                        Elsa Lindqvist
                                      </span>
                                      <span className="@[9rem]:flex hidden items-center shrink-0" aria-hidden="true">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-primary transition-shadow">
                                          In Chair
                                        </Badge>
                                      </span>
                                      <span className="sr-only">
                                        In Chair
                                      </span>
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="shrink-0 tabular-nums">
                                        11:00 AM
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        Crown Fitting
                                      </span>
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                </EventCalendarEvent>
                              </div>
                              <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 4)", height: "calc(var(--ec-hour-height) * 0.75)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                                <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="resource" past="true" title="Lunch, 12:00 PM - 12:45 PM" aria-label="Lunch, 12:00 PM - 12:45 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-slate-400)"}}>
                                  <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] flex font-medium gap-1.5 inset-0 items-center justify-center text-muted-foreground text-xs">
                                    <svg className="lucide lucide-clock shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="truncate">
                                      Lunch
                                    </span>
                                  </span>
                                </EventCalendarEvent>
                              </div>
                              <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 6.25)", height: "calc(var(--ec-hour-height) * 0.75)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                                <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="resource" past="true" title="Wei Ling Tan, 2:15 PM - 3:00 PM" aria-label="Wei Ling Tan, 2:15 PM - 3:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-slate-500)"}}>
                                  <span className="flex flex-col gap-1 min-w-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <Avatar className="size-4" size="default">
                                        <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium truncate">
                                        Wei Ling Tan
                                      </span>
                                      <span className="@[9rem]:flex hidden items-center shrink-0" aria-hidden="true">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-invert/10 border border-invert/15 dark:bg-invert/35 dark:border-invert/45 dark:text-invert-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-foreground transition-shadow">
                                          Booked
                                        </Badge>
                                      </span>
                                      <span className="sr-only">
                                        Booked
                                      </span>
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="shrink-0 tabular-nums">
                                        2:15 PM
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        Composite Filling
                                      </span>
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                </EventCalendarEvent>
                              </div>
                              <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 8)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                                <EventCalendarEvent className="gap-1 h-full leading-4 py-0" type="button" view="resource" past="true" title="Chiara Novello, 4:00 PM - 4:30 PM" aria-label="Chiara Novello, 4:00 PM - 4:30 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-slate-500)"}}>
                                  <span className="flex flex-col gap-1 min-w-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <Avatar className="size-4" size="default">
                                        <AvatarFallback className="bg-foreground! text-[8px] text-background!">
                                          CN
                                        </AvatarFallback>
                                      </Avatar>
                                      <span className="font-medium truncate">
                                        Chiara Novello
                                      </span>
                                      <span className="@[9rem]:flex hidden items-center shrink-0" aria-hidden="true">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-invert/10 border border-invert/15 dark:bg-invert/35 dark:border-invert/45 dark:text-invert-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-foreground transition-shadow">
                                          Booked
                                        </Badge>
                                      </span>
                                      <span className="sr-only">
                                        Booked
                                      </span>
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                </EventCalendarEvent>
                              </div>
                            </div>
                            <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1778688000000" data-ec-bounds-start="480" data-ec-bounds-end="1140" data-ec-resource="menon" role="group" aria-label="Dr. Ravi Menon" style={{height: "calc(var(--ec-hour-height) * 11)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                              <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 1)", height: "calc(var(--ec-hour-height) * 1.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                                <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="resource" past="true" title="Mateo Santos, 9:00 AM - 10:30 AM" aria-label="Mateo Santos, 9:00 AM - 10:30 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-emerald-500)"}}>
                                  <span className="flex flex-col gap-1 min-w-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <Avatar className="size-4" size="default">
                                        <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium truncate">
                                        Mateo Santos
                                      </span>
                                      <span className="@[9rem]:flex hidden items-center shrink-0" aria-hidden="true">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                          Completed
                                        </Badge>
                                      </span>
                                      <span className="sr-only">
                                        Completed
                                      </span>
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="shrink-0 tabular-nums">
                                        9:00 AM
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        Root Canal
                                      </span>
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                </EventCalendarEvent>
                              </div>
                              <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 2.75)", height: "calc(var(--ec-hour-height) * 1.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                                <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="resource" past="true" title="Gregory Whitfield, 10:45 AM - 12:15 PM" aria-label="Gregory Whitfield, 10:45 AM - 12:15 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-amber-500)"}}>
                                  <span className="flex flex-col gap-1 min-w-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <Avatar className="size-4" size="default">
                                        <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium truncate">
                                        Gregory Whitfield
                                      </span>
                                      <span className="@[9rem]:flex hidden items-center shrink-0" aria-hidden="true">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-warning-foreground transition-shadow">
                                          Unpaid
                                        </Badge>
                                      </span>
                                      <span className="sr-only">
                                        Unpaid
                                      </span>
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="shrink-0 tabular-nums">
                                        10:45 AM
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        Root Canal
                                      </span>
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                </EventCalendarEvent>
                              </div>
                              <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 4.5)", height: "calc(var(--ec-hour-height) * 0.75)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                                <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="resource" past="true" title="Lunch, 12:30 PM - 1:15 PM" aria-label="Lunch, 12:30 PM - 1:15 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-slate-400)"}}>
                                  <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] flex font-medium gap-1.5 inset-0 items-center justify-center text-muted-foreground text-xs">
                                    <svg className="lucide lucide-clock shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="truncate">
                                      Lunch
                                    </span>
                                  </span>
                                </EventCalendarEvent>
                              </div>
                              <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 7)", height: "calc(var(--ec-hour-height) * 0.75)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                                <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="resource" past="true" title="Declan Brennan, 3:00 PM - 3:45 PM" aria-label="Declan Brennan, 3:00 PM - 3:45 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-slate-500)"}}>
                                  <span className="flex flex-col gap-1 min-w-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <Avatar className="size-4" size="default">
                                        <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium truncate">
                                        Declan Brennan
                                      </span>
                                      <span className="@[9rem]:flex hidden items-center shrink-0" aria-hidden="true">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-invert/10 border border-invert/15 dark:bg-invert/35 dark:border-invert/45 dark:text-invert-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-foreground transition-shadow">
                                          Booked
                                        </Badge>
                                      </span>
                                      <span className="sr-only">
                                        Booked
                                      </span>
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="shrink-0 tabular-nums">
                                        3:00 PM
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        Composite Filling
                                      </span>
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                </EventCalendarEvent>
                              </div>
                            </div>
                            <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1778688000000" data-ec-bounds-start="480" data-ec-bounds-end="1140" data-ec-resource="novak" role="group" aria-label="Dr. Elena Novak" style={{height: "calc(var(--ec-hour-height) * 11)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                              <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 2.25)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                                <EventCalendarEvent className="gap-1 h-full leading-4 py-0" type="button" view="resource" past="true" title="Laila Abadi, 10:15 AM - 10:45 AM" aria-label="Laila Abadi, 10:15 AM - 10:45 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-sky-500)"}}>
                                  <span className="flex flex-col gap-1 min-w-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <Avatar className="size-4" size="default">
                                        <AvatarFallback className="bg-foreground! text-[8px] text-background!">
                                          LA
                                        </AvatarFallback>
                                      </Avatar>
                                      <span className="font-medium truncate">
                                        Laila Abadi
                                      </span>
                                      <span className="@[9rem]:flex hidden items-center shrink-0" aria-hidden="true">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
                                          Arrived
                                        </Badge>
                                      </span>
                                      <span className="sr-only">
                                        Arrived
                                      </span>
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                </EventCalendarEvent>
                              </div>
                              <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 2.75)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                                <EventCalendarEvent className="gap-1 h-full leading-4 py-0" type="button" view="resource" past="true" title="Chiara Novello, 10:45 AM - 11:15 AM" aria-label="Chiara Novello, 10:45 AM - 11:15 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-slate-500)"}}>
                                  <span className="flex flex-col gap-1 min-w-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <Avatar className="size-4" size="default">
                                        <AvatarFallback className="bg-foreground! text-[8px] text-background!">
                                          CN
                                        </AvatarFallback>
                                      </Avatar>
                                      <span className="font-medium truncate">
                                        Chiara Novello
                                      </span>
                                      <span className="@[9rem]:flex hidden items-center shrink-0" aria-hidden="true">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-invert/10 border border-invert/15 dark:bg-invert/35 dark:border-invert/45 dark:text-invert-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-foreground transition-shadow">
                                          Booked
                                        </Badge>
                                      </span>
                                      <span className="sr-only">
                                        Booked
                                      </span>
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                </EventCalendarEvent>
                              </div>
                              <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 5)", height: "calc(var(--ec-hour-height) * 0.75)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                                <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="resource" past="true" title="Lunch, 1:00 PM - 1:45 PM" aria-label="Lunch, 1:00 PM - 1:45 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-slate-400)"}}>
                                  <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] flex font-medium gap-1.5 inset-0 items-center justify-center text-muted-foreground text-xs">
                                    <svg className="lucide lucide-clock shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="truncate">
                                      Lunch
                                    </span>
                                  </span>
                                </EventCalendarEvent>
                              </div>
                              <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 6)", height: "calc(var(--ec-hour-height) * 0.75)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                                <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="resource" past="true" title="Ifeoma Okafor, 2:00 PM - 2:45 PM" aria-label="Ifeoma Okafor, 2:00 PM - 2:45 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-slate-500)"}}>
                                  <span className="flex flex-col gap-1 min-w-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <Avatar className="size-4" size="default">
                                        <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium truncate">
                                        Ifeoma Okafor
                                      </span>
                                      <span className="@[9rem]:flex hidden items-center shrink-0" aria-hidden="true">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-invert/10 border border-invert/15 dark:bg-invert/35 dark:border-invert/45 dark:text-invert-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-foreground transition-shadow">
                                          Booked
                                        </Badge>
                                      </span>
                                      <span className="sr-only">
                                        Booked
                                      </span>
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="shrink-0 tabular-nums">
                                        2:00 PM
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        Implant Review
                                      </span>
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                </EventCalendarEvent>
                              </div>
                              <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 8.5)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                                <EventCalendarEvent className="gap-1 h-full leading-4 py-0" type="button" view="resource" past="true" title="Mateo Santos, 4:30 PM - 5:00 PM" aria-label="Mateo Santos, 4:30 PM - 5:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-rose-500)"}}>
                                  <span className="flex flex-col gap-1 min-w-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <Avatar className="size-4" size="default">
                                        <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium truncate">
                                        Mateo Santos
                                      </span>
                                      <span className="@[9rem]:flex hidden items-center shrink-0" aria-hidden="true">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-destructive-foreground transition-shadow">
                                          Cancelled
                                        </Badge>
                                      </span>
                                      <span className="sr-only">
                                        Cancelled
                                      </span>
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                </EventCalendarEvent>
                              </div>
                              <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 9.5)", height: "calc(var(--ec-hour-height) * 1)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                                <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="resource" past="true" title="Case Review, 5:30 PM - 6:30 PM" aria-label="Case Review, 5:30 PM - 6:30 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-slate-400)"}}>
                                  <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] flex font-medium gap-1.5 inset-0 items-center justify-center text-muted-foreground text-xs">
                                    <svg className="lucide lucide-clock shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="truncate">
                                      Case Review
                                    </span>
                                  </span>
                                </EventCalendarEvent>
                              </div>
                            </div>
                            <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1778688000000" data-ec-bounds-start="480" data-ec-bounds-end="1140" data-ec-resource="reyes" role="group" aria-label="Dr. Tomas Reyes" style={{height: "calc(var(--ec-hour-height) * 11)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                              <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 0)", height: "calc(var(--ec-hour-height) * 5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                                <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="resource" past="true" title="Theatre List, 8:00 AM - 1:00 PM" aria-label="Theatre List, 8:00 AM - 1:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-slate-400)"}}>
                                  <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] flex font-medium gap-1.5 inset-0 items-center justify-center text-muted-foreground text-xs">
                                    <svg className="lucide lucide-clock shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="truncate">
                                      Theatre List
                                    </span>
                                  </span>
                                </EventCalendarEvent>
                              </div>
                              <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 5.25)", height: "calc(var(--ec-hour-height) * 0.75)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                                <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="resource" past="true" title="Lunch, 1:15 PM - 2:00 PM" aria-label="Lunch, 1:15 PM - 2:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-slate-400)"}}>
                                  <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] flex font-medium gap-1.5 inset-0 items-center justify-center text-muted-foreground text-xs">
                                    <svg className="lucide lucide-clock shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="truncate">
                                      Lunch
                                    </span>
                                  </span>
                                </EventCalendarEvent>
                              </div>
                              <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 6)", height: "calc(var(--ec-hour-height) * 1)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                                <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="resource" past="true" title="Samir Haddad, 2:00 PM - 3:00 PM" aria-label="Samir Haddad, 2:00 PM - 3:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-slate-500)"}}>
                                  <span className="flex flex-col gap-1 min-w-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <Avatar className="size-4" size="default">
                                        <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium truncate">
                                        Samir Haddad
                                      </span>
                                      <span className="@[9rem]:flex hidden items-center shrink-0" aria-hidden="true">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-invert/10 border border-invert/15 dark:bg-invert/35 dark:border-invert/45 dark:text-invert-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-foreground transition-shadow">
                                          Booked
                                        </Badge>
                                      </span>
                                      <span className="sr-only">
                                        Booked
                                      </span>
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="shrink-0 tabular-nums">
                                        2:00 PM
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        Extraction
                                      </span>
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                </EventCalendarEvent>
                              </div>
                              <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 7.5)", height: "calc(var(--ec-hour-height) * 1)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                                <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="resource" past="true" title="Elsa Lindqvist, 3:30 PM - 4:30 PM" aria-label="Elsa Lindqvist, 3:30 PM - 4:30 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-slate-500)"}}>
                                  <span className="flex flex-col gap-1 min-w-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <Avatar className="size-4" size="default">
                                        <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium truncate">
                                        Elsa Lindqvist
                                      </span>
                                      <span className="@[9rem]:flex hidden items-center shrink-0" aria-hidden="true">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-invert/10 border border-invert/15 dark:bg-invert/35 dark:border-invert/45 dark:text-invert-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-foreground transition-shadow">
                                          Booked
                                        </Badge>
                                      </span>
                                      <span className="sr-only">
                                        Booked
                                      </span>
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="shrink-0 tabular-nums">
                                        3:30 PM
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        Extraction
                                      </span>
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                </EventCalendarEvent>
                              </div>
                            </div>
                            <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1778688000000" data-ec-bounds-start="480" data-ec-bounds-end="1140" data-ec-resource="sato" role="group" aria-label="Dr. Hana Sato" style={{height: "calc(var(--ec-hour-height) * 11)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                              <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 0)", height: "calc(var(--ec-hour-height) * 0.75)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                                <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="resource" past="true" title="Wei Ling Tan, 8:00 AM - 8:45 AM" aria-label="Wei Ling Tan, 8:00 AM - 8:45 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-emerald-500)"}}>
                                  <span className="flex flex-col gap-1 min-w-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <Avatar className="size-4" size="default">
                                        <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium truncate">
                                        Wei Ling Tan
                                      </span>
                                      <span className="@[9rem]:flex hidden items-center shrink-0" aria-hidden="true">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                          Completed
                                        </Badge>
                                      </span>
                                      <span className="sr-only">
                                        Completed
                                      </span>
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="shrink-0 tabular-nums">
                                        8:00 AM
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        Scaling
                                      </span>
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                </EventCalendarEvent>
                              </div>
                              <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 1.25)", height: "calc(var(--ec-hour-height) * 1)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                                <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="resource" past="true" title="Declan Brennan, 9:15 AM - 10:15 AM" aria-label="Declan Brennan, 9:15 AM - 10:15 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-emerald-500)"}}>
                                  <span className="flex flex-col gap-1 min-w-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <Avatar className="size-4" size="default">
                                        <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="font-medium truncate">
                                        Declan Brennan
                                      </span>
                                      <span className="@[9rem]:flex hidden items-center shrink-0" aria-hidden="true">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                          Completed
                                        </Badge>
                                      </span>
                                      <span className="sr-only">
                                        Completed
                                      </span>
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="shrink-0 tabular-nums">
                                        9:15 AM
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        Whitening
                                      </span>
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                </EventCalendarEvent>
                              </div>
                              <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 3.5)", height: "calc(var(--ec-hour-height) * 0.75)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                                <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="resource" past="true" title="Lunch, 11:30 AM - 12:15 PM" aria-label="Lunch, 11:30 AM - 12:15 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-slate-400)"}}>
                                  <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] flex font-medium gap-1.5 inset-0 items-center justify-center text-muted-foreground text-xs">
                                    <svg className="lucide lucide-clock shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="truncate">
                                      Lunch
                                    </span>
                                  </span>
                                </EventCalendarEvent>
                              </div>
                              <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 4.5)", height: "calc(var(--ec-hour-height) * 0.75)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                                <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="resource" past="true" title="Laila Abadi, 12:30 PM - 1:15 PM" aria-label="Laila Abadi, 12:30 PM - 1:15 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-sky-500)"}}>
                                  <span className="flex flex-col gap-1 min-w-0">
                                    <span className="flex gap-1.5 items-center min-w-0">
                                      <Avatar className="size-4" size="default">
                                        <AvatarFallback className="bg-foreground! text-[8px] text-background!">
                                          LA
                                        </AvatarFallback>
                                      </Avatar>
                                      <span className="font-medium truncate">
                                        Laila Abadi
                                      </span>
                                      <span className="@[9rem]:flex hidden items-center shrink-0" aria-hidden="true">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
                                          Arrived
                                        </Badge>
                                      </span>
                                      <span className="sr-only">
                                        Arrived
                                      </span>
                                    </span>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="shrink-0 tabular-nums">
                                        12:30 PM
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        Scaling
                                      </span>
                                    </span>
                                  </span>
                                  <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                  <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                    <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                  </span>
                                </EventCalendarEvent>
                              </div>
                              <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 8)", height: "calc(var(--ec-hour-height) * 3)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                                <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="resource" past="true" title="Sterilisation, 4:00 PM - 7:00 PM" aria-label="Sterilisation, 4:00 PM - 7:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-slate-400)"}}>
                                  <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] flex font-medium gap-1.5 inset-0 items-center justify-center text-muted-foreground text-xs">
                                    <svg className="lucide lucide-clock shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="truncate">
                                      Sterilisation
                                    </span>
                                  </span>
                                </EventCalendarEvent>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_l_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "245.81676136363635px"}}>
                        <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                      </div>
                    </ScrollArea>
                  </div>
                </EventCalendarResourceView>
              </EventCalendarContent>
              <div className="sr-only" aria-live="polite"></div>
            </EventCalendar>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}
