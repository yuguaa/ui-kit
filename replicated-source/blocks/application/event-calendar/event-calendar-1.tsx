import {
  EventCalendarNavNext,
  EventCalendarNavPrev,
  EventCalendarNavToday,
  EventCalendarViewSwitcher,
} from "@/registry-neui/bases/base/neui/event-calendar/event-calendar-nav"
import { EventCalendarContent } from "@/registry-neui/bases/radix/neui/event-calendar/event-calendar-content"
import { EventCalendarEvent } from "@/registry-neui/bases/radix/neui/event-calendar/event-calendar-event"
import { EventCalendarMonthView } from "@/registry-neui/bases/radix/neui/event-calendar/event-calendar-month-view"
import {
  EventCalendarNav,
  EventCalendarTitle,
  EventCalendarToolbar,
} from "@/registry-neui/bases/radix/neui/event-calendar/event-calendar-nav"
import { EventCalendar } from "@/registry-neui/bases/radix/neui/event-calendar/event-calendar"
import {
  Avatar,
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

export function Pattern() {
  return (
    <div className="bg-background flex flex-col h-svh min-w-0 p-4 w-full">
      <Card className="flex-1 gap-0 min-h-0 overflow-hidden p-0!" size="default">
        <EventCalendar className="flex-1">
          <div className="flex flex-wrap gap-x-2 items-center pe-2">
            <EventCalendarNav className="flex-1 flex-nowrap">
              <EventCalendarNavToday className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" id="base-ui-_r_1_" baseUiTooltipTrigger="">
                Today
              </EventCalendarNavToday>
              <EventCalendarViewSwitcher className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Select view" id="base-ui-_r_6_" baseUiTooltipTrigger="" aria-haspopup="menu" aria-expanded="false">
                Month
                <svg className="lucide lucide-chevron-down opacity-60 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </EventCalendarViewSwitcher>
              <div className="flex items-center">
                <EventCalendarNavPrev className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Previous" id="base-ui-_r_a_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine" aria-hidden="true">
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                </EventCalendarNavPrev>
                <EventCalendarNavNext className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Next" id="base-ui-_r_c_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </EventCalendarNavNext>
              </div>
              <EventCalendarTitle className="ms-3" aria-live="polite">
                July 2026
              </EventCalendarTitle>
              <div className="grow"></div>
            </EventCalendarNav>
            <EventCalendarToolbar className="max-sm:pb-2 max-sm:w-full">
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_g_" aria-expanded="false">
                <span className="-space-x-1 flex" aria-hidden="true">
                  <span className="ring-2 ring-background rounded-full size-2.5" style={{backgroundColor: "var(--color-blue-500)"}}></span>
                  <span className="ring-2 ring-background rounded-full size-2.5" style={{backgroundColor: "var(--color-violet-500)"}}></span>
                  <span className="ring-2 ring-background rounded-full size-2.5" style={{backgroundColor: "var(--color-amber-500)"}}></span>
                  <span className="ring-2 ring-background rounded-full size-2.5" style={{backgroundColor: "var(--color-emerald-500)"}}></span>
                  <span className="ring-2 ring-background rounded-full size-2.5" style={{backgroundColor: "var(--color-rose-500)"}}></span>
                </span>
                Calendars
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
                Add event
              </Button>
            </EventCalendarToolbar>
          </div>
          <EventCalendarContent view="month">
            <EventCalendarMonthView view="month" role="grid" aria-label="July 2026">
              <div className="@container border-b grid" role="row" style={{gridTemplateColumns: "repeat(7, minmax(0px, 1fr))"}}>
                <div className="font-medium px-2 py-1.5 text-muted-foreground truncate" role="columnheader">
                  <span className="@max-[36rem]:hidden">
                    Mon
                  </span>
                  <span className="@max-[36rem]:inline hidden">
                    M
                  </span>
                </div>
                <div className="font-medium px-2 py-1.5 text-muted-foreground truncate" role="columnheader">
                  <span className="@max-[36rem]:hidden">
                    Tue
                  </span>
                  <span className="@max-[36rem]:inline hidden">
                    T
                  </span>
                </div>
                <div className="font-medium px-2 py-1.5 text-muted-foreground truncate" role="columnheader">
                  <span className="@max-[36rem]:hidden">
                    Wed
                  </span>
                  <span className="@max-[36rem]:inline hidden">
                    W
                  </span>
                </div>
                <div className="font-medium px-2 py-1.5 text-muted-foreground truncate" role="columnheader">
                  <span className="@max-[36rem]:hidden">
                    Thu
                  </span>
                  <span className="@max-[36rem]:inline hidden">
                    T
                  </span>
                </div>
                <div className="font-medium px-2 py-1.5 text-muted-foreground truncate" role="columnheader">
                  <span className="@max-[36rem]:hidden">
                    Fri
                  </span>
                  <span className="@max-[36rem]:inline hidden">
                    F
                  </span>
                </div>
                <div className="font-medium px-2 py-1.5 text-muted-foreground truncate" role="columnheader">
                  <span className="@max-[36rem]:hidden">
                    Sat
                  </span>
                  <span className="@max-[36rem]:inline hidden">
                    S
                  </span>
                </div>
                <div className="font-medium px-2 py-1.5 text-muted-foreground truncate" role="columnheader">
                  <span className="@max-[36rem]:hidden">
                    Sun
                  </span>
                  <span className="@max-[36rem]:inline hidden">
                    S
                  </span>
                </div>
              </div>
              <div className="flex-1 grid min-h-0" style={{gridTemplateRows: "repeat(6, minmax(0px, 1fr))"}}>
                <div className="border-b grid last:border-b-0 min-h-0 relative" role="row" style={{gridTemplateColumns: "repeat(7, minmax(0px, 1fr))"}}>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-outside="true" data-ec-day="1782662400000" aria-label="Monday, June 29th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5 text-muted-foreground">
                        29
                      </span>
                    </div>
                  </div>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-outside="true" data-ec-day="1782748800000" aria-label="Tuesday, June 30th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5 text-muted-foreground">
                        30
                      </span>
                    </div>
                  </div>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1782835200000" aria-label="Wednesday, July 1st, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                      <div className="shrink-0" aria-hidden="true" style={{height: "calc(1 * var(--ec-month-bar-h, 1.75rem) - 0.125rem)"}}></div>
                    </div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        1
                      </span>
                    </div>
                  </div>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1782921600000" aria-label="Thursday, July 2nd, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                      <div className="shrink-0" aria-hidden="true" style={{height: "calc(1 * var(--ec-month-bar-h, 1.75rem) - 0.125rem)"}}></div>
                      <EventCalendarEvent className="shrink-0" type="button" view="month" past="true" title="1:1 with Leo, 11:00 AM - 11:30 AM" aria-label="1:1 with Leo, 11:00 AM - 11:30 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                        <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="font-medium truncate">
                          1:1 with Leo
                        </span>
                        <span className="shrink-0 text-muted-foreground text-xs">
                          11:00 AM
                        </span>
                        <span className="@[9rem]:flex hidden ms-auto shrink-0">
                          <AvatarGroup>
                            <Avatar className="size-4" size="default">
                              <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                          </AvatarGroup>
                        </span>
                      </EventCalendarEvent>
                    </div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        2
                      </span>
                    </div>
                  </div>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1783008000000" aria-label="Friday, July 3rd, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                      <div className="shrink-0" aria-hidden="true" style={{height: "calc(1 * var(--ec-month-bar-h, 1.75rem) - 0.125rem)"}}></div>
                    </div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        3
                      </span>
                    </div>
                  </div>
                  <div className="bg-muted/25 border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-weekend="true" data-ec-day="1783094400000" data-off="true" aria-label="Saturday, July 4th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        4
                      </span>
                    </div>
                  </div>
                  <div className="bg-muted/25 flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-weekend="true" data-ec-day="1783180800000" data-off="true" aria-label="Sunday, July 5th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        5
                      </span>
                    </div>
                  </div>
                  <div className="absolute grid inset-x-0 pointer-events-none pt-1.5 top-0 z-10" style={{gridTemplateColumns: "repeat(7, minmax(0px, 1fr))", gridAutoRows: "var(--ec-month-bar-h, 1.75rem)"}}>
                    <div className="min-w-0 pointer-events-auto px-1" style={{gridArea: "1 / 3 / auto / span 3"}}>
                      <EventCalendarEvent className="h-[calc(var(--ec-month-bar-h,1.75rem)-0.125rem)]" type="button" view="month" allDay="true" past="true" title="Time off, All day" aria-label="Time off, All day" aria-pressed="false" style={{"--ec-event-color": "var(--color-emerald-500)"}}>
                        <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="font-medium truncate">
                          Time off
                        </span>
                        <span className="absolute cursor-ew-resize duration-150 flex group-hover/ec-event:opacity-100 inset-y-0 items-center justify-center opacity-0 start-0 transition-opacity w-2" data-edge="start">
                          <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                        </span>
                        <span className="absolute cursor-ew-resize duration-150 end-0 flex group-hover/ec-event:opacity-100 inset-y-0 items-center justify-center opacity-0 transition-opacity w-2" data-edge="end">
                          <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                        </span>
                      </EventCalendarEvent>
                    </div>
                  </div>
                </div>
                <div className="border-b grid last:border-b-0 min-h-0 relative" role="row" style={{gridTemplateColumns: "repeat(7, minmax(0px, 1fr))"}}>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1783267200000" aria-label="Monday, July 6th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                      <EventCalendarEvent className="shrink-0" type="button" view="month" recurring="true" past="true" title="Weekly planning, 9:30 AM - 10:00 AM" aria-label="Weekly planning, 9:30 AM - 10:00 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                        <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <svg className="lucide lucide-repeat opacity-70 shrink-0 size-2.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RepeatIcon" tabler="IconRepeat" hugeicons="RepeatIcon" phosphor="RepeatIcon" remixicon="RiRepeatLine" aria-hidden="true">
                          <path d="m17 2 4 4-4 4"></path>
                          <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                          <path d="m7 22-4-4 4-4"></path>
                          <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
                        </svg>
                        <span className="font-medium truncate">
                          Weekly planning
                        </span>
                        <span className="shrink-0 text-muted-foreground text-xs">
                          9:30 AM
                        </span>
                        <span className="@[9rem]:flex hidden ms-auto shrink-0">
                          <AvatarGroup>
                            <Avatar className="size-4" size="default">
                              <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="size-4" size="default">
                              <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                          </AvatarGroup>
                        </span>
                      </EventCalendarEvent>
                    </div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        6
                      </span>
                    </div>
                  </div>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1783353600000" aria-label="Tuesday, July 7th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                      <EventCalendarEvent className="shrink-0" type="button" view="month" past="true" title="Design review, 10:00 AM - 11:00 AM" aria-label="Design review, 10:00 AM - 11:00 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-blue-500)"}}>
                        <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="font-medium truncate">
                          Design review
                        </span>
                        <span className="shrink-0 text-muted-foreground text-xs">
                          10:00 AM
                        </span>
                        <span className="@[9rem]:flex hidden ms-auto shrink-0">
                          <AvatarGroup>
                            <Avatar className="size-4" size="default">
                              <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="size-4" size="default">
                              <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                          </AvatarGroup>
                        </span>
                      </EventCalendarEvent>
                    </div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        7
                      </span>
                    </div>
                  </div>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1783440000000" aria-label="Wednesday, July 8th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        8
                      </span>
                    </div>
                  </div>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1783526400000" aria-label="Thursday, July 9th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                      <div className="shrink-0" aria-hidden="true" style={{height: "calc(1 * var(--ec-month-bar-h, 1.75rem) - 0.125rem)"}}></div>
                    </div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        9
                      </span>
                    </div>
                  </div>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1783612800000" aria-label="Friday, July 10th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                      <div className="shrink-0" aria-hidden="true" style={{height: "calc(1 * var(--ec-month-bar-h, 1.75rem) - 0.125rem)"}}></div>
                    </div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        10
                      </span>
                    </div>
                  </div>
                  <div className="bg-muted/25 border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-weekend="true" data-ec-day="1783699200000" data-off="true" aria-label="Saturday, July 11th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        11
                      </span>
                    </div>
                  </div>
                  <div className="bg-muted/25 flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-weekend="true" data-ec-day="1783785600000" data-off="true" aria-label="Sunday, July 12th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        12
                      </span>
                    </div>
                  </div>
                  <div className="absolute grid inset-x-0 pointer-events-none pt-1.5 top-0 z-10" style={{gridTemplateColumns: "repeat(7, minmax(0px, 1fr))", gridAutoRows: "var(--ec-month-bar-h, 1.75rem)"}}>
                    <div className="min-w-0 pointer-events-auto px-1" style={{gridArea: "1 / 4 / auto / span 2"}}>
                      <EventCalendarEvent className="h-[calc(var(--ec-month-bar-h,1.75rem)-0.125rem)]" type="button" view="month" allDay="true" past="true" title="Offsite, All day" aria-label="Offsite, All day" aria-pressed="false" style={{"--ec-event-color": "var(--color-rose-500)"}}>
                        <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="font-medium truncate">
                          Offsite
                        </span>
                        <span className="absolute cursor-ew-resize duration-150 flex group-hover/ec-event:opacity-100 inset-y-0 items-center justify-center opacity-0 start-0 transition-opacity w-2" data-edge="start">
                          <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                        </span>
                        <span className="absolute cursor-ew-resize duration-150 end-0 flex group-hover/ec-event:opacity-100 inset-y-0 items-center justify-center opacity-0 transition-opacity w-2" data-edge="end">
                          <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                        </span>
                      </EventCalendarEvent>
                    </div>
                  </div>
                </div>
                <div className="border-b grid last:border-b-0 min-h-0 relative" role="row" style={{gridTemplateColumns: "repeat(7, minmax(0px, 1fr))"}}>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1783872000000" aria-label="Monday, July 13th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                      <EventCalendarEvent className="shrink-0" type="button" view="month" recurring="true" past="true" title="Weekly planning, 9:30 AM - 10:00 AM" aria-label="Weekly planning, 9:30 AM - 10:00 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                        <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <svg className="lucide lucide-repeat opacity-70 shrink-0 size-2.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RepeatIcon" tabler="IconRepeat" hugeicons="RepeatIcon" phosphor="RepeatIcon" remixicon="RiRepeatLine" aria-hidden="true">
                          <path d="m17 2 4 4-4 4"></path>
                          <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                          <path d="m7 22-4-4 4-4"></path>
                          <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
                        </svg>
                        <span className="font-medium truncate">
                          Weekly planning
                        </span>
                        <span className="shrink-0 text-muted-foreground text-xs">
                          9:30 AM
                        </span>
                        <span className="@[9rem]:flex hidden ms-auto shrink-0">
                          <AvatarGroup>
                            <Avatar className="size-4" size="default">
                              <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="size-4" size="default">
                              <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                          </AvatarGroup>
                        </span>
                      </EventCalendarEvent>
                    </div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        13
                      </span>
                    </div>
                  </div>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1783958400000" aria-label="Tuesday, July 14th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                      <EventCalendarEvent className="shrink-0" type="button" view="month" past="true" title="Roadmap review, 1:00 PM - 2:30 PM" aria-label="Roadmap review, 1:00 PM - 2:30 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                        <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="font-medium truncate">
                          Roadmap review
                        </span>
                        <span className="shrink-0 text-muted-foreground text-xs">
                          1:00 PM
                        </span>
                        <span className="@[9rem]:flex hidden ms-auto shrink-0">
                          <AvatarGroup>
                            <Avatar className="size-4" size="default">
                              <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="size-4" size="default">
                              <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="size-4" size="default">
                              <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                          </AvatarGroup>
                        </span>
                      </EventCalendarEvent>
                    </div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        14
                      </span>
                    </div>
                  </div>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1784044800000" aria-label="Wednesday, July 15th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                      <EventCalendarEvent className="shrink-0" type="button" view="month" past="true" title="Focus block, 2:00 PM - 4:00 PM" aria-label="Focus block, 2:00 PM - 4:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-amber-500)"}}>
                        <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="font-medium truncate">
                          Focus block
                        </span>
                        <span className="shrink-0 text-muted-foreground text-xs">
                          2:00 PM
                        </span>
                      </EventCalendarEvent>
                    </div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        15
                      </span>
                    </div>
                  </div>
                  <div className="bg-muted/25 border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1784131200000" data-off="true" aria-label="Thursday, July 16th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        16
                      </span>
                    </div>
                  </div>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1784217600000" aria-label="Friday, July 17th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                      <EventCalendarEvent className="shrink-0" type="button" view="month" past="true" title="Client call: Northstar, 3:00 PM - 3:30 PM" aria-label="Client call: Northstar, 3:00 PM - 3:30 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                        <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="font-medium truncate">
                          Client call: Northstar
                        </span>
                        <span className="shrink-0 text-muted-foreground text-xs">
                          3:00 PM
                        </span>
                        <span className="@[9rem]:flex hidden ms-auto shrink-0">
                          <AvatarGroup>
                            <Avatar className="size-4" size="default">
                              <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                          </AvatarGroup>
                        </span>
                      </EventCalendarEvent>
                    </div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        17
                      </span>
                    </div>
                  </div>
                  <div className="bg-muted/25 border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-weekend="true" data-ec-day="1784304000000" data-off="true" aria-label="Saturday, July 18th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        18
                      </span>
                    </div>
                  </div>
                  <div className="bg-muted/25 flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-weekend="true" data-ec-day="1784390400000" data-off="true" aria-label="Sunday, July 19th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        19
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border-b grid last:border-b-0 min-h-0 relative" role="row" style={{gridTemplateColumns: "repeat(7, minmax(0px, 1fr))"}}>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1784476800000" aria-label="Monday, July 20th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                      <EventCalendarEvent className="shrink-0" type="button" view="month" recurring="true" past="true" title="Weekly planning, 9:30 AM - 10:00 AM" aria-label="Weekly planning, 9:30 AM - 10:00 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                        <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <svg className="lucide lucide-repeat opacity-70 shrink-0 size-2.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RepeatIcon" tabler="IconRepeat" hugeicons="RepeatIcon" phosphor="RepeatIcon" remixicon="RiRepeatLine" aria-hidden="true">
                          <path d="m17 2 4 4-4 4"></path>
                          <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                          <path d="m7 22-4-4 4-4"></path>
                          <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
                        </svg>
                        <span className="font-medium truncate">
                          Weekly planning
                        </span>
                        <span className="shrink-0 text-muted-foreground text-xs">
                          9:30 AM
                        </span>
                        <span className="@[9rem]:flex hidden ms-auto shrink-0">
                          <AvatarGroup>
                            <Avatar className="size-4" size="default">
                              <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="size-4" size="default">
                              <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                          </AvatarGroup>
                        </span>
                      </EventCalendarEvent>
                    </div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        20
                      </span>
                    </div>
                  </div>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1784563200000" aria-label="Tuesday, July 21st, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                      <EventCalendarEvent className="shrink-0" type="button" view="month" past="true" title="Interview: System design, 10:00 AM - 10:45 AM" aria-label="Interview: System design, 10:00 AM - 10:45 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                        <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="font-medium truncate">
                          Interview: System design
                        </span>
                        <span className="shrink-0 text-muted-foreground text-xs">
                          10:00 AM
                        </span>
                      </EventCalendarEvent>
                    </div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        21
                      </span>
                    </div>
                  </div>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1784649600000" aria-label="Wednesday, July 22nd, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        22
                      </span>
                    </div>
                  </div>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1784736000000" aria-label="Thursday, July 23rd, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                      <EventCalendarEvent className="shrink-0" type="button" view="month" past="true" title="Quarterly planning, 1:00 PM - 2:30 PM" aria-label="Quarterly planning, 1:00 PM - 2:30 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-blue-500)"}}>
                        <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="font-medium truncate">
                          Quarterly planning
                        </span>
                        <span className="shrink-0 text-muted-foreground text-xs">
                          1:00 PM
                        </span>
                        <span className="@[9rem]:flex hidden ms-auto shrink-0">
                          <AvatarGroup>
                            <Avatar className="size-4" size="default">
                              <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="size-4" size="default">
                              <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="size-4" size="default">
                              <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                          </AvatarGroup>
                        </span>
                      </EventCalendarEvent>
                    </div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        23
                      </span>
                    </div>
                  </div>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1784822400000" aria-label="Friday, July 24th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        24
                      </span>
                    </div>
                  </div>
                  <div className="bg-muted/25 border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-weekend="true" data-ec-day="1784908800000" data-off="true" aria-label="Saturday, July 25th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        25
                      </span>
                    </div>
                  </div>
                  <div className="bg-muted/25 flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-weekend="true" data-ec-day="1784995200000" data-off="true" aria-label="Sunday, July 26th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        26
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border-b grid last:border-b-0 min-h-0 relative" role="row" style={{gridTemplateColumns: "repeat(7, minmax(0px, 1fr))"}}>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1785081600000" aria-label="Monday, July 27th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        27
                      </span>
                    </div>
                  </div>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1785168000000" aria-label="Tuesday, July 28th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                      <EventCalendarEvent className="shrink-0" type="button" view="month" past="true" title="Monthly review, 10:00 AM - 11:00 AM" aria-label="Monthly review, 10:00 AM - 11:00 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                        <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="font-medium truncate">
                          Monthly review
                        </span>
                        <span className="shrink-0 text-muted-foreground text-xs">
                          10:00 AM
                        </span>
                        <span className="@[9rem]:flex hidden ms-auto shrink-0">
                          <AvatarGroup>
                            <Avatar className="size-4" size="default">
                              <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="size-4" size="default">
                              <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="size-4" size="default">
                              <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <AvatarGroupCount className="bg-muted font-medium size-4 text-[10px] text-muted-foreground">
                              +1
                            </AvatarGroupCount>
                          </AvatarGroup>
                        </span>
                      </EventCalendarEvent>
                    </div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        28
                      </span>
                    </div>
                  </div>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1785254400000" aria-label="Wednesday, July 29th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        29
                      </span>
                    </div>
                  </div>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1785340800000" aria-label="Thursday, July 30th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                      <div className="shrink-0" aria-hidden="true" style={{height: "calc(1 * var(--ec-month-bar-h, 1.75rem) - 0.125rem)"}}></div>
                    </div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        30
                      </span>
                    </div>
                  </div>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1785427200000" aria-label="Friday, July 31st, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5">
                        31
                      </span>
                    </div>
                  </div>
                  <div className="bg-muted/25 border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-outside="true" data-weekend="true" data-ec-day="1785513600000" data-off="true" aria-label="Saturday, August 1st, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5 text-muted-foreground">
                        1
                      </span>
                    </div>
                  </div>
                  <div className="bg-muted/25 flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-outside="true" data-weekend="true" data-ec-day="1785600000000" data-off="true" aria-label="Sunday, August 2nd, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5 text-muted-foreground">
                        2
                      </span>
                    </div>
                  </div>
                  <div className="absolute grid inset-x-0 pointer-events-none pt-1.5 top-0 z-10" style={{gridTemplateColumns: "repeat(7, minmax(0px, 1fr))", gridAutoRows: "var(--ec-month-bar-h, 1.75rem)"}}>
                    <div className="min-w-0 pointer-events-auto px-1" style={{gridArea: "1 / 4 / auto / span 1"}}>
                      <EventCalendarEvent className="h-[calc(var(--ec-month-bar-h,1.75rem)-0.125rem)]" type="button" view="month" allDay="true" past="true" title="Release day, All day" aria-label="Release day, All day" aria-pressed="false" style={{"--ec-event-color": "var(--color-blue-500)"}}>
                        <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="font-medium truncate">
                          Release day
                        </span>
                        <span className="absolute cursor-ew-resize duration-150 flex group-hover/ec-event:opacity-100 inset-y-0 items-center justify-center opacity-0 start-0 transition-opacity w-2" data-edge="start">
                          <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                        </span>
                        <span className="absolute cursor-ew-resize duration-150 end-0 flex group-hover/ec-event:opacity-100 inset-y-0 items-center justify-center opacity-0 transition-opacity w-2" data-edge="end">
                          <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                        </span>
                      </EventCalendarEvent>
                    </div>
                  </div>
                </div>
                <div className="border-b grid last:border-b-0 min-h-0 relative" role="row" style={{gridTemplateColumns: "repeat(7, minmax(0px, 1fr))"}}>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-outside="true" data-ec-day="1785686400000" aria-label="Monday, August 3rd, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5 text-muted-foreground">
                        3
                      </span>
                    </div>
                  </div>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-outside="true" data-ec-day="1785772800000" aria-label="Tuesday, August 4th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5 text-muted-foreground">
                        4
                      </span>
                    </div>
                  </div>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-outside="true" data-ec-day="1785859200000" aria-label="Wednesday, August 5th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5 text-muted-foreground">
                        5
                      </span>
                    </div>
                  </div>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-outside="true" data-ec-day="1785945600000" aria-label="Thursday, August 6th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5 text-muted-foreground">
                        6
                      </span>
                    </div>
                  </div>
                  <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-outside="true" data-ec-day="1786032000000" aria-label="Friday, August 7th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5 text-muted-foreground">
                        7
                      </span>
                    </div>
                  </div>
                  <div className="bg-muted/25 border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-outside="true" data-weekend="true" data-ec-day="1786118400000" data-off="true" aria-label="Saturday, August 8th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5 text-muted-foreground">
                        8
                      </span>
                    </div>
                  </div>
                  <div className="bg-muted/25 flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-outside="true" data-weekend="true" data-ec-day="1786204800000" data-off="true" aria-label="Sunday, August 9th, 2026">
                    <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                    <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                      <button className="bg-primary cursor-pointer flex focus-visible:opacity-100 group-hover/ec-cell:opacity-100 items-center justify-center opacity-0 rounded-sm size-5 text-primary-foreground transition-opacity" type="button" aria-label="Add event">
                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                      <span className="flex items-center justify-center rounded-full size-5 text-muted-foreground">
                        9
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute h-[var(--ec-month-bar-h,1.75rem)] invisible pointer-events-none w-0" aria-hidden="true"></div>
            </EventCalendarMonthView>
          </EventCalendarContent>
          <div className="sr-only" aria-live="polite"></div>
        </EventCalendar>
      </Card>
    </div>
  )
}
