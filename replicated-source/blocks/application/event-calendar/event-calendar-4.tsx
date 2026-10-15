import {
  EventCalendarNavNext,
  EventCalendarNavPrev,
  EventCalendarNavToday,
  EventCalendarViewSwitcher,
} from "@/registry-neui/bases/base/neui/event-calendar/event-calendar-nav"
import { EventCalendarTimeGutter } from "@/registry-neui/bases/base/neui/event-calendar/event-calendar-time-grid"
import { EventCalendarContent } from "@/registry-neui/bases/radix/neui/event-calendar/event-calendar-content"
import { EventCalendarEvent } from "@/registry-neui/bases/radix/neui/event-calendar/event-calendar-event"
import {
  EventCalendarNav,
  EventCalendarTitle,
  EventCalendarToolbar,
} from "@/registry-neui/bases/radix/neui/event-calendar/event-calendar-nav"
import { EventCalendarTimeGrid } from "@/registry-neui/bases/radix/neui/event-calendar/event-calendar-time-grid"
import { EventCalendar } from "@/registry-neui/bases/radix/neui/event-calendar/event-calendar"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import { Toggle } from "@/registry/bases/base/ui/toggle"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col h-svh min-w-0 p-4 w-full">
      <Card className="flex-1 gap-0 min-h-0 overflow-hidden p-0!" size="default">
        <EventCalendar className="flex-1">
          <div className="flex flex-wrap gap-x-2 items-center pe-2">
            <EventCalendarNav className="flex-1 flex-nowrap">
              <EventCalendarNavToday className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" id="base-ui-_r_1_" baseUiTooltipTrigger="">
                Today
              </EventCalendarNavToday>
              <EventCalendarViewSwitcher className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Select view" id="base-ui-_r_6_" baseUiTooltipTrigger="" aria-haspopup="menu" aria-expanded="false">
                Week
                <svg className="lucide lucide-chevron-down opacity-60 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </EventCalendarViewSwitcher>
              <div className="flex items-center">
                <EventCalendarNavPrev className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Previous" id="base-ui-_r_a_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine" aria-hidden="true">
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                </EventCalendarNavPrev>
                <EventCalendarNavNext className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Next" id="base-ui-_r_c_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </EventCalendarNavNext>
              </div>
              <EventCalendarTitle className="ms-3" aria-live="polite">
                September 14 - 20, 2026
              </EventCalendarTitle>
              <div className="grow"></div>
            </EventCalendarNav>
            <EventCalendarToolbar className="max-sm:flex-wrap max-sm:gap-y-2 max-sm:pb-2 max-sm:w-full">
              <InputGroup className="lg:w-52 max-sm:w-full sm:w-44" role="group">
                <InputGroupAddon role="group" data-align="inline-start">
                  <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                    <path d="m21 21-4.34-4.34"></path>
                    <circle cx="11" cy="11" r="8"></circle>
                  </svg>
                </InputGroupAddon>
                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_d_" placeholder="Search shifts or staff..." aria-label="Search shifts or staff" value="" />
              </InputGroup>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_h_" aria-label="Departments" aria-expanded="false">
                <span className="-space-x-1 flex" aria-hidden="true">
                  <span className="ring-2 ring-background rounded-full size-2.5" style={{backgroundColor: "var(--color-sky-500)"}}></span>
                  <span className="ring-2 ring-background rounded-full size-2.5" style={{backgroundColor: "var(--color-violet-500)"}}></span>
                  <span className="ring-2 ring-background rounded-full size-2.5" style={{backgroundColor: "var(--color-emerald-500)"}}></span>
                  <span className="ring-2 ring-background rounded-full size-2.5" style={{backgroundColor: "var(--color-rose-500)"}}></span>
                  <span className="ring-2 ring-background rounded-full size-2.5" style={{backgroundColor: "var(--color-indigo-500)"}}></span>
                </span>
                <span className="hidden sm:inline">
                  Departments
                </span>
                <svg className="lucide lucide-chevron-down opacity-50 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
              <Toggle className="gap-2 shrink-0" type="button" tabIndex="0" aria-pressed="false">
                <span className="bg-warning rounded-full shrink-0 size-2" aria-hidden="true"></span>
                <span className="tabular-nums">
                  17 Open
                </span>
              </Toggle>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                New shift
              </Button>
            </EventCalendarToolbar>
          </div>
          <EventCalendarContent view="week">
            <EventCalendarTimeGrid view="week" style={{"--ec-hour-height": "4rem", "--ec-scrollbar-w": "0px"}}>
              <div className="border-b flex pe-(--ec-scrollbar-w,0px)">
                <div className="border-e shrink-0 w-(--ec-gutter-width,4.5rem)"></div>
                <div className="flex-1 grid min-w-0" style={{gridTemplateColumns: "repeat(7, minmax(var(--ec-day-col-min,0px), 1fr))"}}>
                  <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate">
                    Mon 14
                  </div>
                  <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate">
                    Tue 15
                  </div>
                  <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate">
                    Wed 16
                  </div>
                  <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate">
                    Thu 17
                  </div>
                  <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate">
                    Fri 18
                  </div>
                  <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate">
                    Sat 19
                  </div>
                  <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate">
                    Sun 20
                  </div>
                </div>
              </div>
              <div className="border-b flex pe-(--ec-scrollbar-w,0px)">
                <div className="border-e pe-2.5 ps-2 pt-1.5 shrink-0 text-muted-foreground w-(--ec-gutter-width,4.5rem)">
                  <span className="flex h-[calc(var(--ec-month-bar-h,1.625rem)-0.125rem)] items-center justify-end">
                    All day
                  </span>
                </div>
                <div className="flex-1 min-w-0 relative">
                  <div className="grid h-full" style={{gridTemplateColumns: "repeat(7, minmax(var(--ec-day-col-min,0px), 1fr))", minHeight: "calc(1 * var(--ec-month-bar-h, 1.625rem) + 0.625rem)"}}>
                    <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1789315200000"></div>
                    <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1789401600000"></div>
                    <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1789488000000"></div>
                    <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1789574400000"></div>
                    <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1789660800000"></div>
                    <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1789747200000"></div>
                    <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1789833600000"></div>
                  </div>
                  <div className="absolute grid inset-x-0 pointer-events-none pt-1.5 top-0" style={{gridTemplateColumns: "repeat(7, minmax(var(--ec-day-col-min,0px), 1fr))", gridAutoRows: "var(--ec-month-bar-h, 1.625rem)"}}>
                    <div className="min-w-0 pointer-events-auto px-1" style={{gridArea: "1 / 3 / auto / span 1"}}>
                      <EventCalendarEvent className="h-[calc(var(--ec-month-bar-h,1.625rem)-0.125rem)]" type="button" view="week" allDay="true" past="true" title="On Call, All day" aria-label="On Call, All day" aria-pressed="false" style={{"--ec-event-color": "var(--color-indigo-500)"}}>
                        <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="font-medium truncate">
                          On Call
                        </span>
                        <span className="ms-auto shrink-0">
                          <span className="shrink-0 tabular-nums text-muted-foreground">
                            1/1
                          </span>
                        </span>
                      </EventCalendarEvent>
                    </div>
                    <div className="min-w-0 pointer-events-auto px-1" style={{gridArea: "1 / 6 / auto / span 2"}}>
                      <EventCalendarEvent className="h-[calc(var(--ec-month-bar-h,1.625rem)-0.125rem)]" type="button" view="week" allDay="true" past="true" title="On Call, All day" aria-label="On Call, All day" aria-pressed="false" style={{"--ec-event-color": "var(--color-indigo-500)"}}>
                        <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="font-medium truncate">
                          On Call
                        </span>
                        <span className="ms-auto shrink-0">
                          <span className="shrink-0 tabular-nums text-muted-foreground">
                            1/1
                          </span>
                        </span>
                      </EventCalendarEvent>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 min-h-0">
                <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYStart="" overflowYEnd="">
                  <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_k_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "52px", "--scroll-area-overflow-y-end": "674px"}} data-has-overflow-y="" data-overflow-y-start="" data-overflow-y-end="">
                    <div className="flex relative">
                      <EventCalendarTimeGutter>
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}></div>
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                          <span className="-top-2 absolute end-2.5 text-muted-foreground">
                            6 AM
                          </span>
                        </div>
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                          <span className="-top-2 absolute end-2.5 text-muted-foreground">
                            7 AM
                          </span>
                        </div>
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                          <span className="-top-2 absolute end-2.5 text-muted-foreground">
                            8 AM
                          </span>
                        </div>
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
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                          <span className="-top-2 absolute end-2.5 text-muted-foreground">
                            7 PM
                          </span>
                        </div>
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                          <span className="-top-2 absolute end-2.5 text-muted-foreground">
                            8 PM
                          </span>
                        </div>
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                          <span className="-top-2 absolute end-2.5 text-muted-foreground">
                            9 PM
                          </span>
                        </div>
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                          <span className="-top-2 absolute end-2.5 text-muted-foreground">
                            10 PM
                          </span>
                        </div>
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                          <span className="-top-2 absolute end-2.5 text-muted-foreground">
                            11 PM
                          </span>
                        </div>
                      </EventCalendarTimeGutter>
                      <div className="flex-1 grid min-w-0" style={{gridTemplateColumns: "repeat(7, minmax(var(--ec-day-col-min,0px), 1fr))"}}>
                        <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1789315200000" data-ec-bounds-start="300" data-ec-bounds-end="1440" role="group" aria-label="Monday, September 14th, 2026" style={{height: "calc(var(--ec-hour-height) * 19)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 1)", height: "calc(var(--ec-hour-height) * 8)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Dock AM, 6:00 AM - 2:00 PM" aria-label="Dock AM, 6:00 AM - 2:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-sky-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Dock AM
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                6:00 AM - 2:00 PM
                              </span>
                              <span className="@[4.5rem]:flex hidden pt-0.5">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <AvatarGroupCount className="bg-muted font-medium size-4 text-[10px] text-muted-foreground">
                                    +1
                                  </AvatarGroupCount>
                                </AvatarGroup>
                              </span>
                              <span className="shrink-0 tabular-nums text-muted-foreground">
                                4/4
                              </span>
                              <span className="@[16rem]:inline hidden text-muted-foreground truncate w-full">
                                Ines, Rafe, Tobias, Yuki
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 1)", height: "calc(var(--ec-hour-height) * 8)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "11"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Pick AM, 6:00 AM - 2:00 PM" aria-label="Pick AM, 6:00 AM - 2:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Pick AM
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                6:00 AM - 2:00 PM
                              </span>
                              <span className="@[4.5rem]:flex hidden pt-0.5">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <AvatarGroupCount className="bg-muted font-medium size-4 text-[10px] text-muted-foreground">
                                    +1
                                  </AvatarGroupCount>
                                </AvatarGroup>
                              </span>
                              <span className="font-medium shrink-0 tabular-nums text-warning-foreground">
                                2 open
                              </span>
                              <span className="@[16rem]:inline hidden text-muted-foreground truncate w-full">
                                Emeka, Amara, Greta, Dara
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 9)", height: "calc(var(--ec-hour-height) * 8)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Pick PM, 2:00 PM - 10:00 PM" aria-label="Pick PM, 2:00 PM - 10:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Pick PM
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                2:00 PM - 10:00 PM
                              </span>
                              <span className="@[4.5rem]:flex hidden pt-0.5">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarFallback className="text-[8px]">
                                      RD
                                    </AvatarFallback>
                                  </Avatar>
                                  <AvatarGroupCount className="bg-muted font-medium size-4 text-[10px] text-muted-foreground">
                                    +2
                                  </AvatarGroupCount>
                                </AvatarGroup>
                              </span>
                              <span className="shrink-0 tabular-nums text-muted-foreground">
                                5/5
                              </span>
                              <span className="@[16rem]:inline hidden text-muted-foreground truncate w-full">
                                Nikolai, Bram, Rosa, Casey, Marisol
                              </span>
                            </EventCalendarEvent>
                          </div>
                        </div>
                        <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1789401600000" data-ec-bounds-start="300" data-ec-bounds-end="1440" role="group" aria-label="Tuesday, September 15th, 2026" style={{height: "calc(var(--ec-hour-height) * 19)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 1)", height: "calc(var(--ec-hour-height) * 8)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Dock AM, 6:00 AM - 2:00 PM" aria-label="Dock AM, 6:00 AM - 2:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-sky-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Dock AM
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                6:00 AM - 2:00 PM
                              </span>
                              <span className="@[4.5rem]:flex hidden pt-0.5">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                </AvatarGroup>
                              </span>
                              <span className="font-medium shrink-0 tabular-nums text-warning-foreground">
                                1 open
                              </span>
                              <span className="@[16rem]:inline hidden text-muted-foreground truncate w-full">
                                Ines, Rafe, Tobias
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 1)", height: "calc(var(--ec-hour-height) * 8)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "11"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Pick AM, 6:00 AM - 2:00 PM" aria-label="Pick AM, 6:00 AM - 2:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Pick AM
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                6:00 AM - 2:00 PM
                              </span>
                              <span className="@[4.5rem]:flex hidden pt-0.5">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <AvatarGroupCount className="bg-muted font-medium size-4 text-[10px] text-muted-foreground">
                                    +3
                                  </AvatarGroupCount>
                                </AvatarGroup>
                              </span>
                              <span className="shrink-0 tabular-nums text-muted-foreground">
                                6/6
                              </span>
                              <span className="@[16rem]:inline hidden text-muted-foreground truncate w-full">
                                Emeka, Amara, Greta, Dara, Yuki, Marisol
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 9)", height: "calc(var(--ec-hour-height) * 8)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Pick PM, 2:00 PM - 10:00 PM" aria-label="Pick PM, 2:00 PM - 10:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Pick PM
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                2:00 PM - 10:00 PM
                              </span>
                              <span className="@[4.5rem]:flex hidden pt-0.5">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarFallback className="text-[8px]">
                                      RD
                                    </AvatarFallback>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                </AvatarGroup>
                              </span>
                              <span className="font-medium shrink-0 tabular-nums text-warning-foreground">
                                2 open
                              </span>
                              <span className="@[16rem]:inline hidden text-muted-foreground truncate w-full">
                                Nikolai, Rosa, Otto
                              </span>
                            </EventCalendarEvent>
                          </div>
                        </div>
                        <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1789488000000" data-ec-bounds-start="300" data-ec-bounds-end="1440" role="group" aria-label="Wednesday, September 16th, 2026" style={{height: "calc(var(--ec-hour-height) * 19)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 1)", height: "calc(var(--ec-hour-height) * 8)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Dock AM, 6:00 AM - 2:00 PM" aria-label="Dock AM, 6:00 AM - 2:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-sky-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Dock AM
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                6:00 AM - 2:00 PM
                              </span>
                              <span className="@[4.5rem]:flex hidden pt-0.5">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <AvatarGroupCount className="bg-muted font-medium size-4 text-[10px] text-muted-foreground">
                                    +1
                                  </AvatarGroupCount>
                                </AvatarGroup>
                              </span>
                              <span className="shrink-0 tabular-nums text-muted-foreground">
                                4/4
                              </span>
                              <span className="@[16rem]:inline hidden text-muted-foreground truncate w-full">
                                Ines, Rafe, Tobias, Yuki
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 1)", height: "calc(var(--ec-hour-height) * 8)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "11"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Pick AM, 6:00 AM - 2:00 PM" aria-label="Pick AM, 6:00 AM - 2:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Pick AM
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                6:00 AM - 2:00 PM
                              </span>
                              <span className="@[4.5rem]:flex hidden pt-0.5">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <AvatarGroupCount className="bg-muted font-medium size-4 text-[10px] text-muted-foreground">
                                    +2
                                  </AvatarGroupCount>
                                </AvatarGroup>
                              </span>
                              <span className="font-medium shrink-0 tabular-nums text-warning-foreground">
                                1 open
                              </span>
                              <span className="@[16rem]:inline hidden text-muted-foreground truncate w-full">
                                Emeka, Amara, Greta, Dara, Marisol
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 11)", height: "calc(var(--ec-hour-height) * 6)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Load Out, 4:00 PM - 10:00 PM" aria-label="Load Out, 4:00 PM - 10:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-emerald-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Load Out
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                4:00 PM - 10:00 PM
                              </span>
                              <span className="font-medium shrink-0 tabular-nums text-warning-foreground">
                                3 open
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
                        <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1789574400000" data-ec-bounds-start="300" data-ec-bounds-end="1440" role="group" aria-label="Thursday, September 17th, 2026" style={{height: "calc(var(--ec-hour-height) * 19)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 1)", height: "calc(var(--ec-hour-height) * 8)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Dock AM, 6:00 AM - 2:00 PM" aria-label="Dock AM, 6:00 AM - 2:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-sky-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Dock AM
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                6:00 AM - 2:00 PM
                              </span>
                              <span className="@[4.5rem]:flex hidden pt-0.5">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <AvatarGroupCount className="bg-muted font-medium size-4 text-[10px] text-muted-foreground">
                                    +1
                                  </AvatarGroupCount>
                                </AvatarGroup>
                              </span>
                              <span className="shrink-0 tabular-nums text-muted-foreground">
                                4/4
                              </span>
                              <span className="@[16rem]:inline hidden text-muted-foreground truncate w-full">
                                Ines, Rafe, Tobias, Yuki
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 1)", height: "calc(var(--ec-hour-height) * 8)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "11"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Pick AM, 6:00 AM - 2:00 PM" aria-label="Pick AM, 6:00 AM - 2:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Pick AM
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                6:00 AM - 2:00 PM
                              </span>
                              <span className="@[4.5rem]:flex hidden pt-0.5">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <AvatarGroupCount className="bg-muted font-medium size-4 text-[10px] text-muted-foreground">
                                    +1
                                  </AvatarGroupCount>
                                </AvatarGroup>
                              </span>
                              <span className="font-medium shrink-0 tabular-nums text-warning-foreground">
                                2 open
                              </span>
                              <span className="@[16rem]:inline hidden text-muted-foreground truncate w-full">
                                Emeka, Amara, Greta, Dara
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 9)", height: "calc(var(--ec-hour-height) * 8)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Cold PM, 2:00 PM - 10:00 PM" aria-label="Cold PM, 2:00 PM - 10:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-rose-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Cold PM
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                2:00 PM - 10:00 PM
                              </span>
                              <span className="@[4.5rem]:flex hidden pt-0.5">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                </AvatarGroup>
                              </span>
                              <span className="font-medium shrink-0 tabular-nums text-warning-foreground">
                                1 open
                              </span>
                              <span className="@[16rem]:inline hidden text-muted-foreground truncate w-full">
                                Bram
                              </span>
                            </EventCalendarEvent>
                          </div>
                        </div>
                        <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1789660800000" data-ec-bounds-start="300" data-ec-bounds-end="1440" role="group" aria-label="Friday, September 18th, 2026" style={{height: "calc(var(--ec-hour-height) * 19)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 1)", height: "calc(var(--ec-hour-height) * 8)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Dock AM, 6:00 AM - 2:00 PM" aria-label="Dock AM, 6:00 AM - 2:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-sky-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Dock AM
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                6:00 AM - 2:00 PM
                              </span>
                              <span className="@[4.5rem]:flex hidden pt-0.5">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <AvatarGroupCount className="bg-muted font-medium size-4 text-[10px] text-muted-foreground">
                                    +2
                                  </AvatarGroupCount>
                                </AvatarGroup>
                              </span>
                              <span className="shrink-0 tabular-nums text-muted-foreground">
                                5/5
                              </span>
                              <span className="@[16rem]:inline hidden text-muted-foreground truncate w-full">
                                Ines, Rafe, Tobias, Yuki, Marisol
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 1)", height: "calc(var(--ec-hour-height) * 8)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "11"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Pick AM, 6:00 AM - 2:00 PM" aria-label="Pick AM, 6:00 AM - 2:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Pick AM
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                6:00 AM - 2:00 PM
                              </span>
                              <span className="@[4.5rem]:flex hidden pt-0.5">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <AvatarGroupCount className="bg-muted font-medium size-4 text-[10px] text-muted-foreground">
                                    +1
                                  </AvatarGroupCount>
                                </AvatarGroup>
                              </span>
                              <span className="font-medium shrink-0 tabular-nums text-warning-foreground">
                                2 open
                              </span>
                              <span className="@[16rem]:inline hidden text-muted-foreground truncate w-full">
                                Emeka, Amara, Greta, Dara
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 9)", height: "calc(var(--ec-hour-height) * 8)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Pick PM, 2:00 PM - 10:00 PM" aria-label="Pick PM, 2:00 PM - 10:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Pick PM
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                2:00 PM - 10:00 PM
                              </span>
                              <span className="@[4.5rem]:flex hidden pt-0.5">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarFallback className="text-[8px]">
                                      RD
                                    </AvatarFallback>
                                  </Avatar>
                                  <AvatarGroupCount className="bg-muted font-medium size-4 text-[10px] text-muted-foreground">
                                    +2
                                  </AvatarGroupCount>
                                </AvatarGroup>
                              </span>
                              <span className="font-medium shrink-0 tabular-nums text-warning-foreground">
                                1 open
                              </span>
                              <span className="@[16rem]:inline hidden text-muted-foreground truncate w-full">
                                Nikolai, Bram, Rosa, Casey, Otto
                              </span>
                            </EventCalendarEvent>
                          </div>
                        </div>
                        <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1789747200000" data-ec-bounds-start="300" data-ec-bounds-end="1440" role="group" aria-label="Saturday, September 19th, 2026" style={{height: "calc(var(--ec-hour-height) * 19)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 2)", height: "calc(var(--ec-hour-height) * 8)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Pick AM, 7:00 AM - 3:00 PM" aria-label="Pick AM, 7:00 AM - 3:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Pick AM
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                7:00 AM - 3:00 PM
                              </span>
                              <span className="@[4.5rem]:flex hidden pt-0.5">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                </AvatarGroup>
                              </span>
                              <span className="font-medium shrink-0 tabular-nums text-warning-foreground">
                                1 open
                              </span>
                              <span className="@[16rem]:inline hidden text-muted-foreground truncate w-full">
                                Emeka, Amara, Greta
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 3)", height: "calc(var(--ec-hour-height) * 8)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "11"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Site Cover, 8:00 AM - 4:00 PM" aria-label="Site Cover, 8:00 AM - 4:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-indigo-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Site Cover
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                8:00 AM - 4:00 PM
                              </span>
                              <span className="@[4.5rem]:flex hidden pt-0.5">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarFallback className="text-[8px]">
                                      CM
                                    </AvatarFallback>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                </AvatarGroup>
                              </span>
                              <span className="shrink-0 tabular-nums text-muted-foreground">
                                2/2
                              </span>
                              <span className="@[16rem]:inline hidden text-muted-foreground truncate w-full">
                                Casey, Marisol
                              </span>
                            </EventCalendarEvent>
                          </div>
                        </div>
                        <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1789833600000" data-ec-bounds-start="300" data-ec-bounds-end="1440" role="group" aria-label="Sunday, September 20th, 2026" style={{height: "calc(var(--ec-hour-height) * 19)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 3)", height: "calc(var(--ec-hour-height) * 6)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Dock AM, 8:00 AM - 2:00 PM" aria-label="Dock AM, 8:00 AM - 2:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-sky-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Dock AM
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                8:00 AM - 2:00 PM
                              </span>
                              <span className="@[4.5rem]:flex hidden pt-0.5">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                </AvatarGroup>
                              </span>
                              <span className="font-medium shrink-0 tabular-nums text-warning-foreground">
                                1 open
                              </span>
                              <span className="@[16rem]:inline hidden text-muted-foreground truncate w-full">
                                Ines, Tobias
                              </span>
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 4)", height: "calc(var(--ec-hour-height) * 6)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "11"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Cold AM, 9:00 AM - 3:00 PM" aria-label="Cold AM, 9:00 AM - 3:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-rose-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Cold AM
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                9:00 AM - 3:00 PM
                              </span>
                              <span className="@[4.5rem]:flex hidden pt-0.5">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                </AvatarGroup>
                              </span>
                              <span className="shrink-0 tabular-nums text-muted-foreground">
                                2/2
                              </span>
                              <span className="@[16rem]:inline hidden text-muted-foreground truncate w-full">
                                Bram, Yuki
                              </span>
                            </EventCalendarEvent>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-start="" data-overflow-y-end="" data-id="base-ui-_r_k_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "196.64473684210526px"}}>
                    <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 20.8684px, 0px)"}}></div>
                  </div>
                </ScrollArea>
              </div>
            </EventCalendarTimeGrid>
          </EventCalendarContent>
          <div className="sr-only" aria-live="polite"></div>
        </EventCalendar>
      </Card>
    </div>
  )
}
