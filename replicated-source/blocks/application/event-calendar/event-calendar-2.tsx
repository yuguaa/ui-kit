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
  AvatarGroup,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { Calendar } from "@/registry/bases/base/ui/calendar"
import { Card } from "@/registry/bases/base/ui/card"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col h-svh min-w-0 p-4 w-full">
      <Card className="flex-1 flex-row gap-0 min-h-0 overflow-hidden p-0!" size="default">
        <aside className="border-e flex-col hidden lg:flex shrink-0 w-80">
          <ScrollArea className="flex-1 min-h-0" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
            <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_0_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "238px"}} data-has-overflow-y="" data-overflow-y-end="">
              <div className="flex flex-col gap-4 pb-4 pt-2 px-4">
                <Calendar className="[--cell-size:--spacing(8)] bg-transparent rdp-root rtl:**:[.rdp-button\\_next>svg]:rotate-180 rtl:**:[.rdp-button\\_previous>svg]:rotate-180" lang="en-US" mode="single" required="true">
                  <div className="flex flex-col gap-4 md:flex-row rdp-months relative">
                    <nav className="absolute flex gap-1 inset-x-0 items-center justify-between rdp-nav top-0 w-full" aria-label="Navigation bar">
                      <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:opacity-50 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none p-0 rdp-button_previous select-none shrink-0 size-(--cell-size) transition-all whitespace-nowrap" type="button" aria-label="Go to the Previous Month">
                        <svg className="cn-rtl-flip lucide lucide-chevron-left rdp-chevron size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeftIcon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                          <path d="m15 18-6-6 6-6"></path>
                        </svg>
                      </button>
                      <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:opacity-50 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none p-0 rdp-button_next select-none shrink-0 size-(--cell-size) transition-all whitespace-nowrap" type="button" aria-label="Go to the Next Month">
                        <svg className="cn-rtl-flip lucide lucide-chevron-right rdp-chevron size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRightIcon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </button>
                    </nav>
                    <div className="flex flex-col gap-4 rdp-month w-full">
                      <div className="flex h-(--cell-size) items-center justify-center px-(--cell-size) rdp-month_caption w-full">
                        <span className="cn-calendar-caption font-medium rdp-caption_label select-none text-sm" role="status" aria-live="polite">
                          July 2026
                        </span>
                      </div>
                      <table className="border-collapse rdp-month_grid w-full" role="grid" aria-multiselectable="false" aria-label="July 2026">
                        <thead aria-hidden="true">
                          <tr className="flex rdp-weekdays">
                            <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Monday" scope="col">
                              Mo
                            </th>
                            <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Tuesday" scope="col">
                              Tu
                            </th>
                            <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Wednesday" scope="col">
                              We
                            </th>
                            <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Thursday" scope="col">
                              Th
                            </th>
                            <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Friday" scope="col">
                              Fr
                            </th>
                            <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Saturday" scope="col">
                              Sa
                            </th>
                            <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Sunday" scope="col">
                              Su
                            </th>
                          </tr>
                        </thead>
                        <tbody className="rdp-weeks">
                          <tr className="flex mt-2 rdp-week w-full">
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-06-29" data-month="2026-06" data-outside="true">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/29" aria-label="Monday, June 29th, 2026">
                                29
                                <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-06-30" data-month="2026-06" data-outside="true">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/30" aria-label="Tuesday, June 30th, 2026">
                                30
                                <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-01">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/1" aria-label="Wednesday, July 1st, 2026">
                                1
                                <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-02">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/2" aria-label="Thursday, July 2nd, 2026">
                                2
                                <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-03">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/3" aria-label="Friday, July 3rd, 2026">
                                3
                                <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-04">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/4" aria-label="Saturday, July 4th, 2026">
                                4
                                <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-05">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/5" aria-label="Sunday, July 5th, 2026">
                                5
                                <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                          </tr>
                          <tr className="flex mt-2 rdp-week w-full">
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-06">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/6" aria-label="Monday, July 6th, 2026">
                                6
                                <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-07">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/7" aria-label="Tuesday, July 7th, 2026">
                                7
                                <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day rdp-selected relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" aria-selected="true" data-day="2026-07-08" data-selected="true">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="0" day="2026/7/8" selectedSingle="true" aria-label="Wednesday, July 8th, 2026, selected">
                                8
                                <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-09">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/9" aria-label="Thursday, July 9th, 2026">
                                9
                                <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-10">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/10" aria-label="Friday, July 10th, 2026">
                                10
                                <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-11">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/11" aria-label="Saturday, July 11th, 2026">
                                11
                                <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-12">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/12" aria-label="Sunday, July 12th, 2026">
                                12
                                <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                          </tr>
                          <tr className="flex mt-2 rdp-week w-full">
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-13">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/13" aria-label="Monday, July 13th, 2026">
                                13
                                <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-14">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/14" aria-label="Tuesday, July 14th, 2026">
                                14
                                <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-15">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/15" aria-label="Wednesday, July 15th, 2026">
                                15
                                <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-16">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/16" aria-label="Thursday, July 16th, 2026">
                                16
                                <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-17">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/17" aria-label="Friday, July 17th, 2026">
                                17
                                <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-18">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/18" aria-label="Saturday, July 18th, 2026">
                                18
                                <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-19">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/19" aria-label="Sunday, July 19th, 2026">
                                19
                                <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                          </tr>
                          <tr className="flex mt-2 rdp-week w-full">
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-20">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/20" aria-label="Monday, July 20th, 2026">
                                20
                                <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-21">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/21" aria-label="Tuesday, July 21st, 2026">
                                21
                                <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-22">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/22" aria-label="Wednesday, July 22nd, 2026">
                                22
                                <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-23">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/23" aria-label="Thursday, July 23rd, 2026">
                                23
                                <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-24">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/24" aria-label="Friday, July 24th, 2026">
                                24
                                <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-25">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/25" aria-label="Saturday, July 25th, 2026">
                                25
                                <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-26">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/26" aria-label="Sunday, July 26th, 2026">
                                26
                                <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                          </tr>
                          <tr className="flex mt-2 rdp-week w-full">
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-27">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/27" aria-label="Monday, July 27th, 2026">
                                27
                                <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-28">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/28" aria-label="Tuesday, July 28th, 2026">
                                28
                                <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-29">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/29" aria-label="Wednesday, July 29th, 2026">
                                29
                                <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-30">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/30" aria-label="Thursday, July 30th, 2026">
                                30
                                <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-31">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/31" aria-label="Friday, July 31st, 2026">
                                31
                                <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-08-01" data-month="2026-08" data-outside="true">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/8/1" aria-label="Saturday, August 1st, 2026">
                                1
                                <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                            <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-08-02" data-month="2026-08" data-outside="true">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/8/2" aria-label="Sunday, August 2nd, 2026">
                                2
                                <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Calendar>
                <section className="flex flex-col gap-0.5">
                  <span className="font-medium mb-1.5 px-2 text-muted-foreground text-xs">
                    Up Next
                  </span>
                  <button className="flex flex-col focus-visible:ring-2 focus-visible:ring-ring gap-0.5 hover:bg-accent outline-none px-2 py-1.5 rounded-md text-left" type="button">
                    <span className="flex gap-2 items-center">
                      <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "var(--color-emerald-500)"}}></span>
                      <span className="flex-1 font-medium min-w-0 text-sm truncate">
                        Lunch with Nora
                      </span>
                    </span>
                    <span className="flex gap-1.5 items-center ps-4 text-muted-foreground text-xs">
                      <span>
                        Wed, Jul 8
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span>
                        12:30 PM
                      </span>
                    </span>
                  </button>
                  <button className="flex flex-col focus-visible:ring-2 focus-visible:ring-ring gap-0.5 hover:bg-accent outline-none px-2 py-1.5 rounded-md text-left" type="button">
                    <span className="flex gap-2 items-center">
                      <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "var(--color-violet-500)"}}></span>
                      <span className="flex-1 font-medium min-w-0 text-sm truncate">
                        Interview: System design
                      </span>
                    </span>
                    <span className="flex gap-1.5 items-center ps-4 text-muted-foreground text-xs">
                      <span>
                        Thu, Jul 9
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span>
                        10:00 AM
                      </span>
                    </span>
                  </button>
                  <button className="flex flex-col focus-visible:ring-2 focus-visible:ring-ring gap-0.5 hover:bg-accent outline-none px-2 py-1.5 rounded-md text-left" type="button">
                    <span className="flex gap-2 items-center">
                      <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "var(--color-violet-500)"}}></span>
                      <span className="flex-1 font-medium min-w-0 text-sm truncate">
                        Roadmap review
                      </span>
                    </span>
                    <span className="flex gap-1.5 items-center ps-4 text-muted-foreground text-xs">
                      <span>
                        Thu, Jul 9
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span>
                        1:00 PM
                      </span>
                    </span>
                  </button>
                  <button className="flex flex-col focus-visible:ring-2 focus-visible:ring-ring gap-0.5 hover:bg-accent outline-none px-2 py-1.5 rounded-md text-left" type="button">
                    <span className="flex gap-2 items-center">
                      <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "var(--color-violet-500)"}}></span>
                      <span className="flex-1 font-medium min-w-0 text-sm truncate">
                        Client call: Northstar
                      </span>
                    </span>
                    <span className="flex gap-1.5 items-center ps-4 text-muted-foreground text-xs">
                      <span>
                        Thu, Jul 9
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span>
                        1:30 PM
                      </span>
                    </span>
                  </button>
                </section>
                <section className="flex flex-col gap-0.5">
                  <span className="font-medium mb-1.5 px-2 text-muted-foreground text-xs">
                    My Calendars
                  </span>
                  <div className="flex gap-2 group/cal hover:bg-accent items-center px-2 py-1 rounded-md">
                    <Checkbox className="**:text-white!" checked="" role="checkbox" tabIndex="0" id="base-ui-_r_1_" aria-checked="true" aria-label="Work" style={{backgroundColor: "var(--color-blue-500)", borderColor: "var(--color-blue-500)"}}>
                      <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                        <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </Checkbox>
                    <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <span className="flex-1 min-w-0 text-sm truncate">
                      Work
                    </span>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[popup-open]:opacity-100 disabled:opacity-50 disabled:pointer-events-none group-focus-within/cal:opacity-100 group-hover/cal:opacity-100 group/button inline-flex items-center justify-center opacity-0 outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_7_" aria-label="Work options" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </div>
                  <div className="flex gap-2 group/cal hover:bg-accent items-center px-2 py-1 rounded-md">
                    <Checkbox className="**:text-white!" checked="" role="checkbox" tabIndex="0" id="base-ui-_r_9_" aria-checked="true" aria-label="Meetings" style={{backgroundColor: "var(--color-violet-500)", borderColor: "var(--color-violet-500)"}}>
                      <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                        <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </Checkbox>
                    <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <span className="flex-1 min-w-0 text-sm truncate">
                      Meetings
                    </span>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[popup-open]:opacity-100 disabled:opacity-50 disabled:pointer-events-none group-focus-within/cal:opacity-100 group-hover/cal:opacity-100 group/button inline-flex items-center justify-center opacity-0 outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_f_" aria-label="Meetings options" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </div>
                  <div className="flex gap-2 group/cal hover:bg-accent items-center px-2 py-1 rounded-md">
                    <Checkbox className="**:text-white!" checked="" role="checkbox" tabIndex="0" id="base-ui-_r_h_" aria-checked="true" aria-label="Focus" style={{backgroundColor: "var(--color-amber-500)", borderColor: "var(--color-amber-500)"}}>
                      <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                        <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </Checkbox>
                    <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <span className="flex-1 min-w-0 text-sm truncate">
                      Focus
                    </span>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[popup-open]:opacity-100 disabled:opacity-50 disabled:pointer-events-none group-focus-within/cal:opacity-100 group-hover/cal:opacity-100 group/button inline-flex items-center justify-center opacity-0 outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_n_" aria-label="Focus options" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </div>
                  <div className="flex gap-2 group/cal hover:bg-accent items-center px-2 py-1 rounded-md">
                    <Checkbox className="**:text-white!" checked="" role="checkbox" tabIndex="0" id="base-ui-_r_p_" aria-checked="true" aria-label="Personal" style={{backgroundColor: "var(--color-emerald-500)", borderColor: "var(--color-emerald-500)"}}>
                      <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                        <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </Checkbox>
                    <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <span className="flex-1 min-w-0 text-sm truncate">
                      Personal
                    </span>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[popup-open]:opacity-100 disabled:opacity-50 disabled:pointer-events-none group-focus-within/cal:opacity-100 group-hover/cal:opacity-100 group/button inline-flex items-center justify-center opacity-0 outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_v_" aria-label="Personal options" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </div>
                  <div className="flex gap-2 group/cal hover:bg-accent items-center px-2 py-1 rounded-md">
                    <Checkbox className="**:text-white!" checked="" role="checkbox" tabIndex="0" id="base-ui-_r_11_" aria-checked="true" aria-label="Travel" style={{backgroundColor: "var(--color-rose-500)", borderColor: "var(--color-rose-500)"}}>
                      <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                        <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </Checkbox>
                    <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <span className="flex-1 min-w-0 text-sm truncate">
                      Travel
                    </span>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost data-[popup-open]:opacity-100 disabled:opacity-50 disabled:pointer-events-none group-focus-within/cal:opacity-100 group-hover/cal:opacity-100 group/button inline-flex items-center justify-center opacity-0 outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_17_" aria-label="Travel options" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </div>
                  <button className="flex focus-visible:ring-2 focus-visible:ring-ring gap-2 hover:bg-accent hover:text-foreground items-center outline-none px-2 py-1 rounded-md text-muted-foreground text-sm" type="button">
                    <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                    New calendar
                  </button>
                </section>
              </div>
            </div>
            <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_0_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "429.0810488676996px"}}>
              <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
            </div>
          </ScrollArea>
        </aside>
        <EventCalendar className="flex-1">
          <div className="flex flex-wrap gap-x-2 items-center pe-2">
            <EventCalendarNav className="flex-1 flex-nowrap">
              <EventCalendarNavToday className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" id="base-ui-_r_1a_" baseUiTooltipTrigger="">
                Today
              </EventCalendarNavToday>
              <EventCalendarViewSwitcher className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Select view" id="base-ui-_r_1f_" baseUiTooltipTrigger="" aria-haspopup="menu" aria-expanded="false">
                Week
                <svg className="lucide lucide-chevron-down opacity-60 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </EventCalendarViewSwitcher>
              <div className="flex items-center">
                <EventCalendarNavPrev className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Previous" id="base-ui-_r_1j_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine" aria-hidden="true">
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                </EventCalendarNavPrev>
                <EventCalendarNavNext className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Next" id="base-ui-_r_1l_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </EventCalendarNavNext>
              </div>
              <EventCalendarTitle className="ms-3" aria-live="polite">
                July 6 - 12, 2026
              </EventCalendarTitle>
              <div className="grow"></div>
            </EventCalendarNav>
            <EventCalendarToolbar className="max-sm:pb-2 max-sm:w-full">
              <div className="lg:hidden">
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1p_" aria-expanded="false">
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
              </div>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                New event
              </Button>
            </EventCalendarToolbar>
          </div>
          <EventCalendarContent view="week">
            <EventCalendarTimeGrid view="week" style={{"--ec-hour-height": "4rem", "--ec-scrollbar-w": "0px"}}>
              <div className="border-b flex pe-(--ec-scrollbar-w,0px)">
                <div className="border-e shrink-0 w-(--ec-gutter-width,4.5rem)"></div>
                <div className="flex-1 grid min-w-0" style={{gridTemplateColumns: "repeat(7, minmax(var(--ec-day-col-min,0px), 1fr))"}}>
                  <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate">
                    Mon 6
                  </div>
                  <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate">
                    Tue 7
                  </div>
                  <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate">
                    Wed 8
                  </div>
                  <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate">
                    Thu 9
                  </div>
                  <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate">
                    Fri 10
                  </div>
                  <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate">
                    Sat 11
                  </div>
                  <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate">
                    Sun 12
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
                    <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1783267200000"></div>
                    <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1783353600000"></div>
                    <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1783440000000"></div>
                    <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1783526400000"></div>
                    <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1783612800000"></div>
                    <div className="bg-muted/25 border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1783699200000" data-off="true"></div>
                    <div className="bg-muted/25 border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1783785600000" data-off="true"></div>
                  </div>
                  <div className="absolute grid inset-x-0 pointer-events-none pt-1.5 top-0" style={{gridTemplateColumns: "repeat(7, minmax(var(--ec-day-col-min,0px), 1fr))", gridAutoRows: "var(--ec-month-bar-h, 1.625rem)"}}>
                    <div className="min-w-0 pointer-events-auto px-1" style={{gridArea: "1 / 5 / auto / span 1"}}>
                      <EventCalendarEvent className="h-[calc(var(--ec-month-bar-h,1.625rem)-0.125rem)]" type="button" view="week" allDay="true" past="true" title="Offsite, All day" aria-label="Offsite, All day" aria-pressed="false" style={{"--ec-event-color": "var(--color-rose-500)"}}>
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
              </div>
              <div className="flex-1 min-h-0">
                <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYStart="" overflowYEnd="">
                  <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_1r_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "436px", "--scroll-area-overflow-y-end": "614px"}} data-has-overflow-y="" data-overflow-y-start="" data-overflow-y-end="">
                    <div className="flex relative">
                      <EventCalendarTimeGutter>
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}></div>
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                          <span className="-top-2 absolute end-2.5 text-muted-foreground">
                            1 AM
                          </span>
                        </div>
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                          <span className="-top-2 absolute end-2.5 text-muted-foreground">
                            2 AM
                          </span>
                        </div>
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                          <span className="-top-2 absolute end-2.5 text-muted-foreground">
                            3 AM
                          </span>
                        </div>
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                          <span className="-top-2 absolute end-2.5 text-muted-foreground">
                            4 AM
                          </span>
                        </div>
                        <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                          <span className="-top-2 absolute end-2.5 text-muted-foreground">
                            5 AM
                          </span>
                        </div>
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
                        <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1783267200000" data-ec-bounds-start="0" data-ec-bounds-end="1440" role="group" aria-label="Monday, July 6th, 2026" style={{height: "calc(var(--ec-hour-height) * 24)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 9.5)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="gap-1 h-full leading-4 py-0" type="button" view="week" recurring="true" past="true" title="Weekly planning, 9:30 AM - 10:00 AM" aria-label="Weekly planning, 9:30 AM - 10:00 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                              <svg className="lucide lucide-repeat opacity-70 shrink-0 size-2.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RepeatIcon" tabler="IconRepeat" hugeicons="RepeatIcon" phosphor="RepeatIcon" remixicon="RiRepeatLine" aria-hidden="true">
                                <path d="m17 2 4 4-4 4"></path>
                                <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                                <path d="m7 22-4-4 4-4"></path>
                                <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
                              </svg>
                              <span className="font-medium truncate">
                                Weekly planning
                              </span>
                              <span className="@[8rem]:inline hidden text-muted-foreground truncate">
                                9:30 AM - 10:00 AM
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
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 14)", height: "calc(var(--ec-hour-height) * 1)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Design review, 2:00 PM - 3:00 PM" aria-label="Design review, 2:00 PM - 3:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-blue-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Design review
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                2:00 PM - 3:00 PM
                              </span>
                              <span className="@[9rem]:flex absolute end-1 hidden shrink-0 top-1">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                </AvatarGroup>
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
                        <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1783353600000" data-ec-bounds-start="0" data-ec-bounds-end="1440" role="group" aria-label="Tuesday, July 7th, 2026" style={{height: "calc(var(--ec-hour-height) * 24)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 11)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="gap-1 h-full leading-4 py-0" type="button" view="week" past="true" title="1:1 with Leo, 11:00 AM - 11:30 AM" aria-label="1:1 with Leo, 11:00 AM - 11:30 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                              <span className="font-medium truncate">
                                1:1 with Leo
                              </span>
                              <span className="@[8rem]:inline hidden text-muted-foreground truncate">
                                11:00 AM - 11:30 AM
                              </span>
                              <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                </AvatarGroup>
                              </span>
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 14)", height: "calc(var(--ec-hour-height) * 2)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Focus block, 2:00 PM - 4:00 PM" aria-label="Focus block, 2:00 PM - 4:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-amber-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Focus block
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                2:00 PM - 4:00 PM
                              </span>
                            </EventCalendarEvent>
                          </div>
                        </div>
                        <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1783440000000" data-ec-bounds-start="0" data-ec-bounds-end="1440" role="group" aria-label="Wednesday, July 8th, 2026" style={{height: "calc(var(--ec-hour-height) * 24)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 12.5)", height: "calc(var(--ec-hour-height) * 1)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Lunch with Nora, 12:30 PM - 1:30 PM" aria-label="Lunch with Nora, 12:30 PM - 1:30 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-emerald-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Lunch with Nora
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                12:30 PM - 1:30 PM
                              </span>
                              <span className="@[9rem]:flex absolute end-1 hidden shrink-0 top-1">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                </AvatarGroup>
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
                        <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1783526400000" data-ec-bounds-start="0" data-ec-bounds-end="1440" role="group" aria-label="Thursday, July 9th, 2026" style={{height: "calc(var(--ec-hour-height) * 24)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 10)", height: "calc(var(--ec-hour-height) * 0.75)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Interview: System design, 10:00 AM - 10:45 AM" aria-label="Interview: System design, 10:00 AM - 10:45 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Interview: System design
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                10:00 AM - 10:45 AM
                              </span>
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 13)", height: "calc(var(--ec-hour-height) * 1.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Roadmap review, 1:00 PM - 2:30 PM" aria-label="Roadmap review, 1:00 PM - 2:30 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Roadmap review
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                1:00 PM - 2:30 PM
                              </span>
                              <span className="@[9rem]:flex absolute end-1 hidden shrink-0 top-1">
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
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 13.5)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "11"}}>
                            <EventCalendarEvent className="gap-1 h-full leading-4 py-0 ring-1 ring-background" type="button" view="week" past="true" title="Client call: Northstar, 1:30 PM - 2:00 PM" aria-label="Client call: Northstar, 1:30 PM - 2:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                              <span className="font-medium truncate">
                                Client call: Northstar
                              </span>
                              <span className="@[8rem]:inline hidden text-muted-foreground truncate">
                                1:30 PM - 2:00 PM
                              </span>
                              <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                </AvatarGroup>
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
                        <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1783612800000" data-ec-bounds-start="0" data-ec-bounds-end="1440" role="group" aria-label="Friday, July 10th, 2026" style={{height: "calc(var(--ec-hour-height) * 24)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}></div>
                        <div className="bg-muted/25 border-e last:border-e-0 min-w-0 relative" data-off="true" data-ec-day="1783699200000" data-ec-bounds-start="0" data-ec-bounds-end="1440" role="group" aria-label="Saturday, July 11th, 2026" style={{height: "calc(var(--ec-hour-height) * 24)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}></div>
                        <div className="bg-muted/25 border-e last:border-e-0 min-w-0 relative" data-off="true" data-ec-day="1783785600000" data-ec-bounds-start="0" data-ec-bounds-end="1440" role="group" aria-label="Sunday, July 12th, 2026" style={{height: "calc(var(--ec-hour-height) * 24)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-start="" data-overflow-y-end="" data-id="base-ui-_r_1r_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "153.140625px"}}>
                    <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 137.385px, 0px)"}}></div>
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
