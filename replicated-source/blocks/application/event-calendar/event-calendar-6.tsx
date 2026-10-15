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
  HoverCard,
  HoverCardTrigger,
} from "@/registry/bases/base/ui/hover-card"
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col h-svh min-w-0 p-4 w-full">
      <Card className="flex-1 gap-0 min-h-0 overflow-hidden p-0!" size="default">
        <div className="border-b flex gap-3 items-center px-4 py-3 shrink-0">
          <h1 className="flex-1 font-semibold min-w-0 text-base truncate">
            {"Deal Calendar"}
          </h1>
          <Button type="button" tabIndex="0">
            <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            {"New event"}
          </Button>
        </div>
        <EventCalendar className="flex-1">
          <div className="flex flex-wrap gap-x-2 items-center pe-2">
            <EventCalendarNav className="flex-1 flex-nowrap">
              <EventCalendarNavToday className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" id="base-ui-_r_1_" baseUiTooltipTrigger="">
                {"Today"}
              </EventCalendarNavToday>
              <EventCalendarViewSwitcher className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Select view" id="base-ui-_r_6_" baseUiTooltipTrigger="" aria-haspopup="menu" aria-expanded="false">
                {"Week"}
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
                {"January 12 - 18, 2026"}
              </EventCalendarTitle>
              <div className="grow"></div>
            </EventCalendarNav>
            <EventCalendarToolbar className="max-sm:pb-2 max-sm:w-full">
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_g_" aria-expanded="false">
                {"Category"}
                <span className="tabular-nums text-muted-foreground">
                  {"6"}
                </span>
                <svg className="lucide lucide-chevron-down opacity-50 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_l_" aria-expanded="false">
                {"Ownership"}
                <span className="tabular-nums text-muted-foreground">
                  {"6"}
                </span>
                <svg className="lucide lucide-chevron-down opacity-50 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </EventCalendarToolbar>
          </div>
          <EventCalendarContent view="week">
            <EventCalendarTimeGrid view="week" style={{"--ec-hour-height": "4rem", "--ec-scrollbar-w": "0px"}}>
              <div className="border-b flex pe-(--ec-scrollbar-w,0px)">
                <div className="border-e shrink-0 w-(--ec-gutter-width,4.5rem)"></div>
                <div className="flex-1 grid min-w-0" style={{gridTemplateColumns: "repeat(7, minmax(var(--ec-day-col-min,0px), 1fr))"}}>
                  <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate">
                    {"Mon 12"}
                  </div>
                  <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate">
                    {"Tue 13"}
                  </div>
                  <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate">
                    {"Wed 14"}
                  </div>
                  <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate">
                    {"Thu 15"}
                  </div>
                  <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate">
                    {"Fri 16"}
                  </div>
                  <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate">
                    {"Sat 17"}
                  </div>
                  <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate">
                    {"Sun 18"}
                  </div>
                </div>
              </div>
              <div className="[--ec-month-bar-h:6.25rem] border-b flex pe-(--ec-scrollbar-w,0px)">
                <div className="border-e pe-2.5 ps-2 pt-1.5 shrink-0 text-muted-foreground w-(--ec-gutter-width,4.5rem)">
                  <span className="flex h-[calc(var(--ec-month-bar-h,1.625rem)-0.125rem)] items-center justify-end">
                    {"All day"}
                  </span>
                </div>
                <div className="flex-1 min-w-0 relative">
                  <div className="grid h-full" style={{gridTemplateColumns: "repeat(7, minmax(var(--ec-day-col-min,0px), 1fr))", minHeight: "calc(1 * var(--ec-month-bar-h, 1.625rem) + 0.625rem)"}}>
                    <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1768147200000"></div>
                    <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1768233600000"></div>
                    <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1768320000000"></div>
                    <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1768406400000"></div>
                    <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1768492800000"></div>
                    <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1768579200000"></div>
                    <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1768665600000"></div>
                  </div>
                  <div className="absolute grid inset-x-0 pointer-events-none pt-1.5 top-0" style={{gridTemplateColumns: "repeat(7, minmax(var(--ec-day-col-min,0px), 1fr))", gridAutoRows: "var(--ec-month-bar-h, 1.625rem)"}}>
                    <div className="min-w-0 pointer-events-auto px-1" style={{gridArea: "1 / 1 / auto / span 1"}}>
                      <EventCalendarEvent className="h-[calc(var(--ec-month-bar-h,1.625rem)-0.125rem)]" type="button" view="week" allDay="true" past="true" title="Harbour Point Logistics (Term Loan), All day" aria-label="Harbour Point Logistics (Term Loan), All day" aria-pressed="false" style={{"--ec-event-color": "var(--color-amber-500)"}}>
                        <HoverCard>
                        <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_o_">
                          <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                            <span className="flex gap-1.5 items-center min-w-0 w-full">
                              <span className="@[7rem]:flex hidden min-w-0">
                                <span className="flex gap-0.5 items-center min-w-0 text-muted-foreground">
                                  <svg className="lucide lucide-hash shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HashIcon" tabler="IconHash" hugeicons="HashtagIcon" phosphor="HashIcon" remixicon="RiHashtag" aria-hidden="true">
                                    <line x1="4" x2="20" y1="9" y2="9"></line>
                                    <line x1="4" x2="20" y1="15" y2="15"></line>
                                    <line x1="10" x2="8" y1="3" y2="21"></line>
                                    <line x1="16" x2="14" y1="3" y2="21"></line>
                                  </svg>
                                  <span className="font-medium truncate">
                                    {"LN-40218"}
                                  </span>
                                </span>
                              </span>
                              <span className="ms-auto shrink-0">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-amber-700)", "--kind-tag-dark": "var(--color-amber-400)"}}>
                                  {"Deal Closing"}
                                </Badge>
                              </span>
                            </span>
                            <span className="font-medium line-clamp-2 min-w-0 text-foreground w-full">
                              {"Harbour Point Logistics (Term Loan)"}
                            </span>
                            <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground w-full">
                              <svg className="lucide lucide-list-checks shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
                                <path d="M13 5h8"></path>
                                <path d="M13 12h8"></path>
                                <path d="M13 19h8"></path>
                                <path d="m3 17 2 2 4-4"></path>
                                <path d="m3 7 2 2 4-4"></path>
                              </svg>
                              <span className="truncate">
                                {"Tasks"}
                              </span>
                              <span className="ms-auto shrink-0 tabular-nums">
                                {"7/8"}
                              </span>
                            </span>
                            <Progress className="h-1 w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="88" aria-valuetext="88%" role="progressbar" aria-label="Tasks progress">
                              <ProgressTrack progressing="">
                                <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "88%"}}></ProgressIndicator>
                              </ProgressTrack>
                              <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                {"x"}
                              </span>
                            </Progress>
                          </span>
                        </HoverCardTrigger>
                        </HoverCard>
                        <span className="absolute cursor-ew-resize duration-150 flex group-hover/ec-event:opacity-100 inset-y-0 items-center justify-center opacity-0 start-0 transition-opacity w-2" data-edge="start">
                          <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                        </span>
                        <span className="absolute cursor-ew-resize duration-150 end-0 flex group-hover/ec-event:opacity-100 inset-y-0 items-center justify-center opacity-0 transition-opacity w-2" data-edge="end">
                          <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                        </span>
                      </EventCalendarEvent>
                    </div>
                    <div className="min-w-0 pointer-events-auto px-1" style={{gridArea: "1 / 3 / auto / span 1"}}>
                      <EventCalendarEvent className="h-[calc(var(--ec-month-bar-h,1.625rem)-0.125rem)]" type="button" view="week" allDay="true" past="true" title="Send data room for Calder Row, All day" aria-label="Send data room for Calder Row, All day" aria-pressed="false" style={{"--ec-event-color": "var(--color-slate-500)"}}>
                        <HoverCard>
                        <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_q_">
                          <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                            <span className="flex gap-1.5 items-center min-w-0 w-full">
                              <span className="@[7rem]:flex hidden min-w-0">
                                <span className="flex gap-1 items-center min-w-0 text-muted-foreground">
                                  <svg className="lucide lucide-calendar shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                    <path d="M3 10h18"></path>
                                  </svg>
                                  <span className="truncate">
                                    {"Jan 14"}
                                  </span>
                                </span>
                              </span>
                              <span className="ms-auto shrink-0">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-slate-700)", "--kind-tag-dark": "var(--color-slate-400)"}}>
                                  {"Task"}
                                </Badge>
                              </span>
                            </span>
                            <span className="font-medium line-clamp-2 min-w-0 text-foreground w-full">
                              {"Send data room for Calder Row"}
                            </span>
                            <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground w-full">
                              <svg className="lucide lucide-layout-grid shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutGridIcon" tabler="IconLayoutGrid" hugeicons="GridViewIcon" phosphor="SquaresFourIcon" remixicon="RiGalleryView2" aria-hidden="true">
                                <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                                <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                                <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                                <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                              </svg>
                              <span className="truncate">
                                {"Deal Pipeline"}
                              </span>
                              <span className="ms-auto shrink-0 tabular-nums">
                                {"1/5"}
                              </span>
                            </span>
                            <Progress className="h-1 w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="20" aria-valuetext="20%" role="progressbar" aria-label="Deal Pipeline progress">
                              <ProgressTrack progressing="">
                                <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "20%"}}></ProgressIndicator>
                              </ProgressTrack>
                              <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                {"x"}
                              </span>
                            </Progress>
                          </span>
                        </HoverCardTrigger>
                        </HoverCard>
                        <span className="absolute cursor-ew-resize duration-150 flex group-hover/ec-event:opacity-100 inset-y-0 items-center justify-center opacity-0 start-0 transition-opacity w-2" data-edge="start">
                          <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                        </span>
                        <span className="absolute cursor-ew-resize duration-150 end-0 flex group-hover/ec-event:opacity-100 inset-y-0 items-center justify-center opacity-0 transition-opacity w-2" data-edge="end">
                          <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                        </span>
                      </EventCalendarEvent>
                    </div>
                    <div className="min-w-0 pointer-events-auto px-1" style={{gridArea: "1 / 4 / auto / span 1"}}>
                      <EventCalendarEvent className="h-[calc(var(--ec-month-bar-h,1.625rem)-0.125rem)]" type="button" view="week" allDay="true" past="true" title="Ashgrove Medical insurance certificates, All day" aria-label="Ashgrove Medical insurance certificates, All day" aria-pressed="false" style={{"--ec-event-color": "var(--color-indigo-500)"}}>
                        <HoverCard>
                        <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_s_">
                          <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                            <span className="flex gap-1.5 items-center min-w-0 w-full">
                              <span className="@[7rem]:flex hidden min-w-0">
                                <span className="flex gap-1 items-center min-w-0 text-muted-foreground">
                                  <svg className="lucide lucide-calendar shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                    <path d="M3 10h18"></path>
                                  </svg>
                                  <span className="truncate">
                                    {"Jan 15"}
                                  </span>
                                </span>
                              </span>
                              <span className="ms-auto shrink-0">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-indigo-700)", "--kind-tag-dark": "var(--color-indigo-400)"}}>
                                  {"Compliance"}
                                </Badge>
                              </span>
                            </span>
                            <span className="font-medium line-clamp-2 min-w-0 text-foreground w-full">
                              {"Ashgrove Medical insurance certificates"}
                            </span>
                            <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground w-full">
                              <svg className="lucide lucide-package shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                <path d="M12 22V12"></path>
                                <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                <path d="m7.5 4.27 9 5.15"></path>
                              </svg>
                              <span className="truncate">
                                {"Deliverables"}
                              </span>
                              <span className="ms-auto shrink-0 tabular-nums">
                                {"4/9"}
                              </span>
                            </span>
                            <Progress className="h-1 w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="44" aria-valuetext="44%" role="progressbar" aria-label="Deliverables progress">
                              <ProgressTrack progressing="">
                                <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "44%"}}></ProgressIndicator>
                              </ProgressTrack>
                              <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                {"x"}
                              </span>
                            </Progress>
                          </span>
                        </HoverCardTrigger>
                        </HoverCard>
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
              </div>
              <div className="flex-1 min-h-0">
                <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYStart="" overflowYEnd="">
                  <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_t_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "116px", "--scroll-area-overflow-y-end": "353px"}} data-has-overflow-y="" data-overflow-y-start="" data-overflow-y-end="">
                    <div className="flex relative">
                      <EventCalendarTimeGutter>
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}></div>
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                          <span className="-top-2 absolute end-2.5 text-muted-foreground">
                            {"8 AM"}
                          </span>
                        </div>
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                          <span className="-top-2 absolute end-2.5 text-muted-foreground">
                            {"9 AM"}
                          </span>
                        </div>
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                          <span className="-top-2 absolute end-2.5 text-muted-foreground">
                            {"10 AM"}
                          </span>
                        </div>
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                          <span className="-top-2 absolute end-2.5 text-muted-foreground">
                            {"11 AM"}
                          </span>
                        </div>
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                          <span className="-top-2 absolute end-2.5 text-muted-foreground">
                            {"12 PM"}
                          </span>
                        </div>
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                          <span className="-top-2 absolute end-2.5 text-muted-foreground">
                            {"1 PM"}
                          </span>
                        </div>
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                          <span className="-top-2 absolute end-2.5 text-muted-foreground">
                            {"2 PM"}
                          </span>
                        </div>
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                          <span className="-top-2 absolute end-2.5 text-muted-foreground">
                            {"3 PM"}
                          </span>
                        </div>
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                          <span className="-top-2 absolute end-2.5 text-muted-foreground">
                            {"4 PM"}
                          </span>
                        </div>
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                          <span className="-top-2 absolute end-2.5 text-muted-foreground">
                            {"5 PM"}
                          </span>
                        </div>
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                          <span className="-top-2 absolute end-2.5 text-muted-foreground">
                            {"6 PM"}
                          </span>
                        </div>
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                          <span className="-top-2 absolute end-2.5 text-muted-foreground">
                            {"7 PM"}
                          </span>
                        </div>
                      </EventCalendarTimeGutter>
                      <div className="flex-1 grid min-w-0" style={{gridTemplateColumns: "repeat(7, minmax(var(--ec-day-col-min,0px), 1fr))"}}>
                        <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1768147200000" data-ec-bounds-start="420" data-ec-bounds-end="1200" role="group" aria-label="Monday, January 12th, 2026" style={{height: "calc(var(--ec-hour-height) * 13)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 2)", height: "calc(var(--ec-hour-height) * 1.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Funding Conditions Review, 9:00 AM - 10:30 AM" aria-label="Funding Conditions Review, 9:00 AM - 10:30 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-indigo-500)"}}>
                              <HoverCard>
                              <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_v_">
                                <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                                  <span className="flex gap-1.5 items-center min-w-0 w-full">
                                    <span className="@[7rem]:flex hidden min-w-0">
                                      <span className="text-muted-foreground truncate">
                                        {"9:00 AM, 90 min"}
                                      </span>
                                    </span>
                                    <span className="ms-auto shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-indigo-700)", "--kind-tag-dark": "var(--color-indigo-400)"}}>
                                        {"Compliance"}
                                      </Badge>
                                    </span>
                                  </span>
                                  <span className="font-medium min-w-0 text-foreground truncate w-full">
                                    {"Funding Conditions Review"}
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground w-full">
                                    <svg className="lucide lucide-package shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                      <path d="M12 22V12"></path>
                                      <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                      <path d="m7.5 4.27 9 5.15"></path>
                                    </svg>
                                    <span className="truncate">
                                      {"Deliverables"}
                                    </span>
                                    <span className="ms-auto shrink-0 tabular-nums">
                                      {"5/6"}
                                    </span>
                                  </span>
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 6)", height: "calc(var(--ec-hour-height) * 1)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Weekly Credit Standup, 1:00 PM - 2:00 PM" aria-label="Weekly Credit Standup, 1:00 PM - 2:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                              <HoverCard>
                              <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_11_">
                                <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                                  <span className="flex gap-1.5 items-center min-w-0 w-full">
                                    <span className="@[7rem]:flex hidden min-w-0">
                                      <span className="text-muted-foreground truncate">
                                        {"1:00 PM, 60 min"}
                                      </span>
                                    </span>
                                    <span className="ms-auto shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-violet-700)", "--kind-tag-dark": "var(--color-violet-400)"}}>
                                        {"Meeting"}
                                      </Badge>
                                    </span>
                                  </span>
                                  <span className="font-medium min-w-0 text-foreground truncate w-full">
                                    {"Weekly Credit Standup"}
                                  </span>
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                        </div>
                        <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1768233600000" data-ec-bounds-start="420" data-ec-bounds-end="1200" role="group" aria-label="Tuesday, January 13th, 2026" style={{height: "calc(var(--ec-hour-height) * 13)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 3)", height: "calc(var(--ec-hour-height) * 1)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Introductory Call, 10:00 AM - 11:00 AM" aria-label="Introductory Call, 10:00 AM - 11:00 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-sky-500)"}}>
                              <HoverCard>
                              <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_13_">
                                <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                                  <span className="flex gap-1.5 items-center min-w-0 w-full">
                                    <span className="@[7rem]:flex hidden min-w-0">
                                      <span className="text-muted-foreground truncate">
                                        {"10:00 AM, 60 min"}
                                      </span>
                                    </span>
                                    <span className="ms-auto shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-sky-700)", "--kind-tag-dark": "var(--color-sky-400)"}}>
                                        {"Call"}
                                      </Badge>
                                    </span>
                                  </span>
                                  <span className="font-medium min-w-0 text-foreground truncate w-full">
                                    {"Introductory Call"}
                                  </span>
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 3.5)", height: "calc(var(--ec-hour-height) * 1.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "11"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Kestrel Terms Review, 10:30 AM - 12:00 PM" aria-label="Kestrel Terms Review, 10:30 AM - 12:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-sky-500)"}}>
                              <HoverCard>
                              <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_15_">
                                <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                                  <span className="flex gap-1.5 items-center min-w-0 w-full">
                                    <span className="@[7rem]:flex hidden min-w-0">
                                      <span className="text-muted-foreground truncate">
                                        {"10:30 AM, 90 min"}
                                      </span>
                                    </span>
                                    <span className="ms-auto shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-sky-700)", "--kind-tag-dark": "var(--color-sky-400)"}}>
                                        {"Call"}
                                      </Badge>
                                    </span>
                                  </span>
                                  <span className="font-medium min-w-0 text-foreground truncate w-full">
                                    {"Kestrel Terms Review"}
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0 w-full">
                                    <svg className="lucide lucide-building-2 lucide-building2 shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Building2Icon" tabler="IconBuilding" hugeicons="Building02Icon" phosphor="BuildingsIcon" remixicon="RiBuildingLine" aria-hidden="true">
                                      <path d="M10 12h4"></path>
                                      <path d="M10 8h4"></path>
                                      <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                                      <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                                      <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                                    </svg>
                                    <span className="truncate">
                                      {"Kestrel Cold Storage"}
                                    </span>
                                    <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                      <AvatarGroup>
                                        <Avatar className="size-4" size="default">
                                          <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <Avatar className="size-4" size="default">
                                          <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                      </AvatarGroup>
                                    </span>
                                  </span>
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                        </div>
                        <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1768320000000" data-ec-bounds-start="420" data-ec-bounds-end="1200" role="group" aria-label="Wednesday, January 14th, 2026" style={{height: "calc(var(--ec-hour-height) * 13)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 2)", height: "calc(var(--ec-hour-height) * 1)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Certificate Chase, 9:00 AM - 10:00 AM" aria-label="Certificate Chase, 9:00 AM - 10:00 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-emerald-500)"}}>
                              <HoverCard>
                              <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_17_">
                                <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                                  <span className="flex gap-1.5 items-center min-w-0 w-full">
                                    <span className="@[7rem]:flex hidden min-w-0">
                                      <span className="text-muted-foreground truncate">
                                        {"9:00 AM, 60 min"}
                                      </span>
                                    </span>
                                    <span className="ms-auto shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-emerald-700)", "--kind-tag-dark": "var(--color-emerald-400)"}}>
                                        {"Email"}
                                      </Badge>
                                    </span>
                                  </span>
                                  <span className="font-medium min-w-0 text-foreground truncate w-full">
                                    {"Certificate Chase"}
                                  </span>
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 8)", height: "calc(var(--ec-hour-height) * 1.75)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Site Visit Debrief, 3:00 PM - 4:45 PM" aria-label="Site Visit Debrief, 3:00 PM - 4:45 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-sky-500)"}}>
                              <HoverCard>
                              <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_19_">
                                <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                                  <span className="flex gap-1.5 items-center min-w-0 w-full">
                                    <span className="@[7rem]:flex hidden min-w-0">
                                      <span className="text-muted-foreground truncate">
                                        {"3:00 PM, 105 min"}
                                      </span>
                                    </span>
                                    <span className="ms-auto shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-sky-700)", "--kind-tag-dark": "var(--color-sky-400)"}}>
                                        {"Call"}
                                      </Badge>
                                    </span>
                                  </span>
                                  <span className="font-medium line-clamp-2 min-w-0 text-foreground w-full">
                                    {"Site Visit Debrief"}
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0 w-full">
                                    <svg className="lucide lucide-building-2 lucide-building2 shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Building2Icon" tabler="IconBuilding" hugeicons="Building02Icon" phosphor="BuildingsIcon" remixicon="RiBuildingLine" aria-hidden="true">
                                      <path d="M10 12h4"></path>
                                      <path d="M10 8h4"></path>
                                      <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                                      <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                                      <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                                    </svg>
                                    <span className="truncate">
                                      {"Kestrel Cold Storage"}
                                    </span>
                                    <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                      <AvatarGroup>
                                        <Avatar className="size-4" size="default">
                                          <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <Avatar className="size-4" size="default">
                                          <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                      </AvatarGroup>
                                    </span>
                                  </span>
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                        </div>
                        <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1768406400000" data-ec-bounds-start="420" data-ec-bounds-end="1200" role="group" aria-label="Thursday, January 15th, 2026" style={{height: "calc(var(--ec-hour-height) * 13)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 3)", height: "calc(var(--ec-hour-height) * 1.25)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Watchlist Prep, 10:00 AM - 11:15 AM" aria-label="Watchlist Prep, 10:00 AM - 11:15 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-slate-500)"}}>
                              <HoverCard>
                              <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_1b_">
                                <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                                  <span className="flex gap-1.5 items-center min-w-0 w-full">
                                    <span className="@[7rem]:flex hidden min-w-0">
                                      <span className="text-muted-foreground truncate">
                                        {"10:00 AM, 75 min"}
                                      </span>
                                    </span>
                                    <span className="ms-auto shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-slate-700)", "--kind-tag-dark": "var(--color-slate-400)"}}>
                                        {"Task"}
                                      </Badge>
                                    </span>
                                  </span>
                                  <span className="font-medium min-w-0 text-foreground truncate w-full">
                                    {"Watchlist Prep"}
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground w-full">
                                    <svg className="lucide lucide-list-checks shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
                                      <path d="M13 5h8"></path>
                                      <path d="M13 12h8"></path>
                                      <path d="M13 19h8"></path>
                                      <path d="m3 17 2 2 4-4"></path>
                                      <path d="m3 7 2 2 4-4"></path>
                                    </svg>
                                    <span className="truncate">
                                      {"Tasks"}
                                    </span>
                                    <span className="ms-auto shrink-0 tabular-nums">
                                      {"3/6"}
                                    </span>
                                  </span>
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 6.5)", height: "calc(var(--ec-hour-height) * 2)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Portfolio Review, 1:30 PM - 3:30 PM" aria-label="Portfolio Review, 1:30 PM - 3:30 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                              <HoverCard>
                              <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_1d_">
                                <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                                  <span className="flex gap-1.5 items-center min-w-0 w-full">
                                    <span className="@[7rem]:flex hidden min-w-0">
                                      <span className="text-muted-foreground truncate">
                                        {"1:30 PM, 120 min"}
                                      </span>
                                    </span>
                                    <span className="ms-auto shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-violet-700)", "--kind-tag-dark": "var(--color-violet-400)"}}>
                                        {"Meeting"}
                                      </Badge>
                                    </span>
                                  </span>
                                  <span className="font-medium line-clamp-2 min-w-0 text-foreground w-full">
                                    {"Portfolio Review"}
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0 w-full">
                                    <svg className="lucide lucide-building-2 lucide-building2 shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Building2Icon" tabler="IconBuilding" hugeicons="Building02Icon" phosphor="BuildingsIcon" remixicon="RiBuildingLine" aria-hidden="true">
                                      <path d="M10 12h4"></path>
                                      <path d="M10 8h4"></path>
                                      <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                                      <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                                      <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                                    </svg>
                                    <span className="truncate">
                                      {"Internal"}
                                    </span>
                                    <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                      <AvatarGroup>
                                        <Avatar className="size-4" size="default">
                                          <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <Avatar className="size-4" size="default">
                                          <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <Avatar className="size-4" size="default">
                                          <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <AvatarGroupCount className="bg-muted size-4 text-[9px] text-muted-foreground">
                                          {"+11"}
                                        </AvatarGroupCount>
                                      </AvatarGroup>
                                    </span>
                                  </span>
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                        </div>
                        <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1768492800000" data-ec-bounds-start="420" data-ec-bounds-end="1200" role="group" aria-label="Friday, January 16th, 2026" style={{height: "calc(var(--ec-hour-height) * 13)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 2)", height: "calc(var(--ec-hour-height) * 1.25)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Calder Row Kickoff, 9:00 AM - 10:15 AM" aria-label="Calder Row Kickoff, 9:00 AM - 10:15 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                              <HoverCard>
                              <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_1f_">
                                <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                                  <span className="flex gap-1.5 items-center min-w-0 w-full">
                                    <span className="@[7rem]:flex hidden min-w-0">
                                      <span className="text-muted-foreground truncate">
                                        {"9:00 AM, 75 min"}
                                      </span>
                                    </span>
                                    <span className="ms-auto shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-violet-700)", "--kind-tag-dark": "var(--color-violet-400)"}}>
                                        {"Meeting"}
                                      </Badge>
                                    </span>
                                  </span>
                                  <span className="font-medium min-w-0 text-foreground truncate w-full">
                                    {"Calder Row Kickoff"}
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0 w-full">
                                    <svg className="lucide lucide-building-2 lucide-building2 shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Building2Icon" tabler="IconBuilding" hugeicons="Building02Icon" phosphor="BuildingsIcon" remixicon="RiBuildingLine" aria-hidden="true">
                                      <path d="M10 12h4"></path>
                                      <path d="M10 8h4"></path>
                                      <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                                      <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                                      <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                                    </svg>
                                    <span className="truncate">
                                      {"Calder Row Residences"}
                                    </span>
                                    <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                      <AvatarGroup>
                                        <Avatar className="size-4" size="default">
                                          <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <Avatar className="size-4" size="default">
                                          <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <Avatar className="size-4" size="default">
                                          <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <AvatarGroupCount className="bg-muted size-4 text-[9px] text-muted-foreground">
                                          {"+3"}
                                        </AvatarGroupCount>
                                      </AvatarGroup>
                                    </span>
                                  </span>
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 4.5)", height: "calc(var(--ec-hour-height) * 1.25)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Closing Docs Follow Up, 11:30 AM - 12:45 PM" aria-label="Closing Docs Follow Up, 11:30 AM - 12:45 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-emerald-500)"}}>
                              <HoverCard>
                              <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_1h_">
                                <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                                  <span className="flex gap-1.5 items-center min-w-0 w-full">
                                    <span className="@[7rem]:flex hidden min-w-0">
                                      <span className="text-muted-foreground truncate">
                                        {"11:30 AM, 75 min"}
                                      </span>
                                    </span>
                                    <span className="ms-auto shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-emerald-700)", "--kind-tag-dark": "var(--color-emerald-400)"}}>
                                        {"Email"}
                                      </Badge>
                                    </span>
                                  </span>
                                  <span className="font-medium min-w-0 text-foreground truncate w-full">
                                    {"Closing Docs Follow Up"}
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0 w-full">
                                    <svg className="lucide lucide-building-2 lucide-building2 shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Building2Icon" tabler="IconBuilding" hugeicons="Building02Icon" phosphor="BuildingsIcon" remixicon="RiBuildingLine" aria-hidden="true">
                                      <path d="M10 12h4"></path>
                                      <path d="M10 8h4"></path>
                                      <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                                      <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                                      <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                                    </svg>
                                    <span className="truncate">
                                      {"Orchard Line Retail"}
                                    </span>
                                    <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                      <AvatarGroup>
                                        <Avatar className="size-4" size="default">
                                          <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <Avatar className="size-4" size="default">
                                          <AvatarFallback className="text-[8px]">
                                            {"RC"}
                                          </AvatarFallback>
                                        </Avatar>
                                        <Avatar className="size-4" size="default">
                                          <AvatarFallback className="text-[8px]">
                                            {"DA"}
                                          </AvatarFallback>
                                        </Avatar>
                                        <AvatarGroupCount className="bg-muted size-4 text-[9px] text-muted-foreground">
                                          {"+4"}
                                        </AvatarGroupCount>
                                      </AvatarGroup>
                                    </span>
                                  </span>
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 8)", height: "calc(var(--ec-hour-height) * 1.25)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Servicing Handover, 3:00 PM - 4:15 PM" aria-label="Servicing Handover, 3:00 PM - 4:15 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-indigo-500)"}}>
                              <HoverCard>
                              <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_1j_">
                                <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                                  <span className="flex gap-1.5 items-center min-w-0 w-full">
                                    <span className="@[7rem]:flex hidden min-w-0">
                                      <span className="text-muted-foreground truncate">
                                        {"3:00 PM, 75 min"}
                                      </span>
                                    </span>
                                    <span className="ms-auto shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-indigo-700)", "--kind-tag-dark": "var(--color-indigo-400)"}}>
                                        {"Compliance"}
                                      </Badge>
                                    </span>
                                  </span>
                                  <span className="font-medium min-w-0 text-foreground truncate w-full">
                                    {"Servicing Handover"}
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground w-full">
                                    <svg className="lucide lucide-package shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                      <path d="M12 22V12"></path>
                                      <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                      <path d="m7.5 4.27 9 5.15"></path>
                                    </svg>
                                    <span className="truncate">
                                      {"Deliverables"}
                                    </span>
                                    <span className="ms-auto shrink-0 tabular-nums">
                                      {"2/4"}
                                    </span>
                                  </span>
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                        </div>
                        <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1768579200000" data-ec-bounds-start="420" data-ec-bounds-end="1200" role="group" aria-label="Saturday, January 17th, 2026" style={{height: "calc(var(--ec-hour-height) * 13)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}></div>
                        <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1768665600000" data-ec-bounds-start="420" data-ec-bounds-end="1200" role="group" aria-label="Sunday, January 18th, 2026" style={{height: "calc(var(--ec-hour-height) * 13)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-start="" data-overflow-y-end="" data-id="base-ui-_r_t_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "157.50360576923077px"}}>
                    <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 50.3317px, 0px)"}}></div>
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
