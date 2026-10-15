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
import { EventCalendarTimeGrid } from "@/registry-neui/bases/radix/neui/event-calendar/event-calendar-time-grid"
import { EventCalendar } from "@/registry-neui/bases/radix/neui/event-calendar/event-calendar"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  Avatar,
  AvatarGroup,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { Calendar } from "@/registry/bases/base/ui/calendar"
import { Card } from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col h-svh min-w-0 p-4 w-full">
      <Card className="flex-1 flex-row gap-0 min-h-0 overflow-hidden p-0!" size="default">
        <aside className="border-e flex-col hidden lg:flex shrink-0 w-72">
          <div className="border-b flex gap-2 items-center px-3 py-2 shrink-0">
            <h2 className="flex-1 font-semibold min-w-0 text-sm truncate">
              Streams
            </h2>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_3_" aria-label="Streams" aria-expanded="false">
              <span className="-space-x-1 flex" aria-hidden="true">
                <span className="ring-2 ring-background rounded-full size-2.5" style={{backgroundColor: "var(--color-blue-500)"}}></span>
                <span className="ring-2 ring-background rounded-full size-2.5" style={{backgroundColor: "var(--color-amber-500)"}}></span>
                <span className="ring-2 ring-background rounded-full size-2.5" style={{backgroundColor: "var(--color-teal-500)"}}></span>
                <span className="ring-2 ring-background rounded-full size-2.5" style={{backgroundColor: "var(--color-violet-500)"}}></span>
                <span className="ring-2 ring-background rounded-full size-2.5" style={{backgroundColor: "var(--color-rose-500)"}}></span>
              </span>
              <svg className="lucide lucide-chevron-down opacity-50 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
          <div className="pb-1 pt-2 px-3 shrink-0">
            <Calendar className="[--cell-size:--spacing(7)] bg-transparent rdp-root rtl:**:[.rdp-button\\_next>svg]:rotate-180 rtl:**:[.rdp-button\\_previous>svg]:rotate-180" lang="en-US" mode="single" required="true">
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
                            <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-02">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/2" aria-label="Thursday, July 2nd, 2026">
                            2
                            <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
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
                            <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground rounded-full size-1" aria-hidden="true"></span>
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
                            <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground rounded-full size-1" aria-hidden="true"></span>
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-12">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/12" aria-label="Sunday, July 12th, 2026">
                            12
                            <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground rounded-full size-1" aria-hidden="true"></span>
                          </Button>
                        </td>
                      </tr>
                      <tr className="flex mt-2 rdp-week w-full">
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-13">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/13" aria-label="Monday, July 13th, 2026">
                            13
                            <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-14">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/14" aria-label="Tuesday, July 14th, 2026">
                            14
                            <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
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
                            <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-07-21">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/21" aria-label="Tuesday, July 21st, 2026">
                            21
                            <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
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
                            <span className="bg-transparent rounded-full size-1" aria-hidden="true"></span>
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
          </div>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <ScrollArea className="flex-1 min-h-0" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
            <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_5_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "198px"}} data-has-overflow-y="" data-overflow-y-end="">
              <div className="flex flex-col gap-4 pb-3 pt-3 px-3">
                <section className="flex flex-col gap-0.5">
                  <Item className="bg-accent mb-1" variant="outline" size="xs">
                    <ItemContent>
                      <ItemTitle>
                        Wed, Jul 8
                      </ItemTitle>
                      <ItemDescription className="flex gap-1.5 items-center tabular-nums">
                        <span>
                          2 in
                        </span>
                        <span className="bg-current/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span>
                          2 out
                        </span>
                        <span className="bg-current/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span>
                          3 jobs
                        </span>
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                  <button className="-mx-2 flex focus-visible:ring-2 focus-visible:ring-ring gap-2.5 hover:bg-accent items-center outline-none px-2 py-1.5 rounded-md text-left" type="button">
                    <Avatar className="size-6" size="default">
                      <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                    <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                      <span className="font-medium min-w-0 text-sm truncate">
                        Check out: Rodriguez
                      </span>
                      <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                        <span className="rounded-full shrink-0 size-1.5" aria-hidden="true" style={{backgroundColor: "var(--color-amber-500)"}}></span>
                        <span className="shrink-0 tabular-nums">
                          7:15 AM
                        </span>
                        <span className="bg-current/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="truncate">
                          Room 417
                        </span>
                      </span>
                    </span>
                  </button>
                  <button className="-mx-2 flex focus-visible:ring-2 focus-visible:ring-ring gap-2.5 hover:bg-accent items-center outline-none px-2 py-1.5 rounded-md text-left" type="button">
                    <IconTile className="[--icon-tile-icon-size:--spacing(3)]" variant="outline" size="xs">
                      <svg className="lucide lucide-wrench" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WrenchIcon" tabler="IconTool" hugeicons="Wrench01Icon" phosphor="WrenchIcon" remixicon="RiToolsLine" aria-hidden="true">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
                      </svg>
                    </IconTile>
                    <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                      <span className="font-medium min-w-0 text-sm truncate">
                        Deep clean: floor 9
                      </span>
                      <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                        <span className="rounded-full shrink-0 size-1.5" aria-hidden="true" style={{backgroundColor: "var(--color-teal-500)"}}></span>
                        <span className="shrink-0 tabular-nums">
                          9:00 AM
                        </span>
                        <span className="bg-current/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="truncate">
                          Floor 9
                        </span>
                      </span>
                    </span>
                  </button>
                  <button className="-mx-2 flex focus-visible:ring-2 focus-visible:ring-ring gap-2.5 hover:bg-accent items-center outline-none px-2 py-1.5 rounded-md text-left" type="button">
                    <Avatar className="size-6" size="default">
                      <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                    <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                      <span className="font-medium min-w-0 text-sm truncate">
                        Check out: Johnson
                      </span>
                      <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                        <span className="rounded-full shrink-0 size-1.5" aria-hidden="true" style={{backgroundColor: "var(--color-amber-500)"}}></span>
                        <span className="shrink-0 tabular-nums">
                          9:45 AM
                        </span>
                        <span className="bg-current/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="truncate">
                          Room 826
                        </span>
                      </span>
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                      Due Out
                    </Badge>
                  </button>
                  <button className="-mx-2 flex focus-visible:ring-2 focus-visible:ring-ring gap-2.5 hover:bg-accent items-center outline-none px-2 py-1.5 rounded-md text-left" type="button">
                    <IconTile className="[--icon-tile-icon-size:--spacing(3)]" variant="outline" size="xs">
                      <svg className="lucide lucide-wrench" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WrenchIcon" tabler="IconTool" hugeicons="Wrench01Icon" phosphor="WrenchIcon" remixicon="RiToolsLine" aria-hidden="true">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
                      </svg>
                    </IconTile>
                    <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                      <span className="font-medium min-w-0 text-sm truncate">
                        Turnover round
                      </span>
                      <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                        <span className="rounded-full shrink-0 size-1.5" aria-hidden="true" style={{backgroundColor: "var(--color-teal-500)"}}></span>
                        <span className="shrink-0 tabular-nums">
                          10:15 AM
                        </span>
                        <span className="bg-current/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="truncate">
                          Departure rooms
                        </span>
                      </span>
                    </span>
                  </button>
                  <button className="-mx-2 flex focus-visible:ring-2 focus-visible:ring-ring gap-2.5 hover:bg-accent items-center outline-none px-2 py-1.5 rounded-md text-left" type="button">
                    <Avatar className="size-6" size="default">
                      <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                    <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                      <span className="font-medium min-w-0 text-sm truncate">
                        Check in: Patel
                      </span>
                      <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                        <span className="rounded-full shrink-0 size-1.5" aria-hidden="true" style={{backgroundColor: "var(--color-blue-500)"}}></span>
                        <span className="shrink-0 tabular-nums">
                          2:00 PM
                        </span>
                        <span className="bg-current/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="truncate">
                          Harbour Suite 1203
                        </span>
                      </span>
                    </span>
                  </button>
                  <button className="-mx-2 flex focus-visible:ring-2 focus-visible:ring-ring gap-2.5 hover:bg-accent items-center outline-none px-2 py-1.5 rounded-md text-left" type="button">
                    <Avatar className="size-6" size="default">
                      <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                    <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                      <span className="font-medium min-w-0 text-sm truncate">
                        Check in: Santos
                      </span>
                      <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                        <span className="rounded-full shrink-0 size-1.5" aria-hidden="true" style={{backgroundColor: "var(--color-blue-500)"}}></span>
                        <span className="shrink-0 tabular-nums">
                          4:45 PM
                        </span>
                        <span className="bg-current/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="truncate">
                          Junior Suite 1002
                        </span>
                      </span>
                    </span>
                  </button>
                  <button className="-mx-2 flex focus-visible:ring-2 focus-visible:ring-ring gap-2.5 hover:bg-accent items-center outline-none px-2 py-1.5 rounded-md text-left" type="button">
                    <IconTile className="[--icon-tile-icon-size:--spacing(3)]" variant="outline" size="xs">
                      <svg className="lucide lucide-wrench" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WrenchIcon" tabler="IconTool" hugeicons="Wrench01Icon" phosphor="WrenchIcon" remixicon="RiToolsLine" aria-hidden="true">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
                      </svg>
                    </IconTile>
                    <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                      <span className="font-medium min-w-0 text-sm truncate">
                        Turndown round
                      </span>
                      <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                        <span className="rounded-full shrink-0 size-1.5" aria-hidden="true" style={{backgroundColor: "var(--color-teal-500)"}}></span>
                        <span className="shrink-0 tabular-nums">
                          6:00 PM
                        </span>
                        <span className="bg-current/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="truncate">
                          14 suites + VIP arrivals
                        </span>
                      </span>
                    </span>
                  </button>
                </section>
              </div>
            </div>
            <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_5_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "137.59060402684563px"}}>
              <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
            </div>
          </ScrollArea>
        </aside>
        <EventCalendar className="flex-1">
          <div className="flex flex-wrap gap-x-2 items-center pe-2">
            <EventCalendarNav className="flex-nowrap sm:flex-1 sm:w-auto w-full">
              <EventCalendarNavToday className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" id="base-ui-_r_7_" baseUiTooltipTrigger="">
                Today
              </EventCalendarNavToday>
              <div className="flex items-center">
                <EventCalendarNavPrev className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Previous" id="base-ui-_r_9_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine" aria-hidden="true">
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                </EventCalendarNavPrev>
                <EventCalendarNavNext className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Next" id="base-ui-_r_b_" baseUiTooltipTrigger="">
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
            <EventCalendarToolbar className="pb-2 sm:pb-0 sm:w-auto w-full">
              <div className="lg:hidden">
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_f_" aria-label="Streams" aria-expanded="false">
                  <span className="-space-x-1 flex" aria-hidden="true">
                    <span className="ring-2 ring-background rounded-full size-2.5" style={{backgroundColor: "var(--color-blue-500)"}}></span>
                    <span className="ring-2 ring-background rounded-full size-2.5" style={{backgroundColor: "var(--color-amber-500)"}}></span>
                    <span className="ring-2 ring-background rounded-full size-2.5" style={{backgroundColor: "var(--color-teal-500)"}}></span>
                    <span className="ring-2 ring-background rounded-full size-2.5" style={{backgroundColor: "var(--color-violet-500)"}}></span>
                    <span className="ring-2 ring-background rounded-full size-2.5" style={{backgroundColor: "var(--color-rose-500)"}}></span>
                  </span>
                  <svg className="lucide lucide-chevron-down opacity-50 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </div>
              <Button className="flex-1 sm:flex-none" type="button" tabIndex="0">
                <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                New booking
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
                    <div className="min-w-0 pointer-events-auto px-1" style={{gridArea: "1 / 1 / auto / span 4"}}>
                      <EventCalendarEvent className="h-[calc(var(--ec-month-bar-h,1.625rem)-0.125rem)]" type="button" view="week" allDay="true" past="true" title="MERIDIAN AGM in house, All day" aria-label="MERIDIAN AGM in house, All day" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                        <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="font-medium truncate">
                          MERIDIAN AGM in house
                        </span>
                        <span className="absolute cursor-ew-resize duration-150 flex group-hover/ec-event:opacity-100 inset-y-0 items-center justify-center opacity-0 start-0 transition-opacity w-2" data-edge="start">
                          <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                        </span>
                        <span className="absolute cursor-ew-resize duration-150 end-0 flex group-hover/ec-event:opacity-100 inset-y-0 items-center justify-center opacity-0 transition-opacity w-2" data-edge="end">
                          <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                        </span>
                      </EventCalendarEvent>
                    </div>
                    <div className="min-w-0 pointer-events-auto px-1" style={{gridArea: "1 / 5 / auto / span 2"}}>
                      <EventCalendarEvent className="h-[calc(var(--ec-month-bar-h,1.625rem)-0.125rem)]" type="button" view="week" allDay="true" past="true" title="Romero wedding, All day" aria-label="Romero wedding, All day" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                        <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="font-medium truncate">
                          Romero wedding
                        </span>
                        <span className="@[9rem]:flex hidden ms-auto shrink-0">
                          <AvatarGroup></AvatarGroup>
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
                  <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_h_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "500px", "--scroll-area-overflow-y-end": "550px"}} data-has-overflow-y="" data-overflow-y-start="" data-overflow-y-end="">
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 7.75)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="gap-1 h-full leading-4 py-0" type="button" view="week" past="true" title="Check out: Johnson, 7:45 AM - 8:15 AM" aria-label="Check out: Johnson, 7:45 AM - 8:15 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-amber-500)"}}>
                              <span className="font-medium truncate">
                                Check out: Johnson
                              </span>
                              <span className="@[8rem]:inline hidden text-muted-foreground truncate">
                                7:45 AM - 8:15 AM
                              </span>
                              <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 9.25)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="gap-1 h-full leading-4 py-0" type="button" view="week" past="true" title="Check out: Chen, 9:15 AM - 9:45 AM" aria-label="Check out: Chen, 9:15 AM - 9:45 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-amber-500)"}}>
                              <span className="font-medium truncate">
                                Check out: Chen
                              </span>
                              <span className="@[8rem]:inline hidden text-muted-foreground truncate">
                                9:15 AM - 9:45 AM
                              </span>
                              <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 10.5)", height: "calc(var(--ec-hour-height) * 1)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Turnover round, 10:30 AM - 11:30 AM" aria-label="Turnover round, 10:30 AM - 11:30 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-teal-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Turnover round
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                10:30 AM - 11:30 AM
                              </span>
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 14.5)", height: "calc(var(--ec-hour-height) * 0.75)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Check in: Wilson, 2:30 PM - 3:15 PM" aria-label="Check in: Wilson, 2:30 PM - 3:15 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-blue-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Check in: Wilson
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                2:30 PM - 3:15 PM
                              </span>
                              <span className="@[9rem]:flex absolute end-1 hidden shrink-0 top-1">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 16.25)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="gap-1 h-full leading-4 py-0" type="button" view="week" past="true" title="Check in: Meridian AGM, 4:15 PM - 4:45 PM" aria-label="Check in: Meridian AGM, 4:15 PM - 4:45 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-blue-500)"}}>
                              <span className="font-medium truncate">
                                Check in: Meridian AGM
                              </span>
                              <span className="@[8rem]:inline hidden text-muted-foreground truncate">
                                4:15 PM - 4:45 PM
                              </span>
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 18)", height: "calc(var(--ec-hour-height) * 1.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" recurring="true" past="true" title="Turndown round, 6:00 PM - 7:30 PM" aria-label="Turndown round, 6:00 PM - 7:30 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-teal-500)"}}>
                              <svg className="lucide lucide-repeat opacity-70 shrink-0 size-2.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RepeatIcon" tabler="IconRepeat" hugeicons="RepeatIcon" phosphor="RepeatIcon" remixicon="RiRepeatLine" aria-hidden="true">
                                <path d="m17 2 4 4-4 4"></path>
                                <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                                <path d="m7 22-4-4 4-4"></path>
                                <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
                              </svg>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Turndown round
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                6:00 PM - 7:30 PM
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 8)", height: "calc(var(--ec-hour-height) * 9)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Ballroom refit, 8:00 AM - 5:00 PM" aria-label="Ballroom refit, 8:00 AM - 5:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Ballroom refit
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                8:00 AM - 5:00 PM
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 8.5)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "11"}}>
                            <EventCalendarEvent className="gap-1 h-full leading-4 py-0 ring-1 ring-background" type="button" view="week" past="true" title="Check out: Tan, 8:30 AM - 9:00 AM" aria-label="Check out: Tan, 8:30 AM - 9:00 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-amber-500)"}}>
                              <span className="font-medium truncate">
                                Check out: Tan
                              </span>
                              <span className="@[8rem]:inline hidden text-muted-foreground truncate">
                                8:30 AM - 9:00 AM
                              </span>
                              <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 10)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "11"}}>
                            <EventCalendarEvent className="gap-1 h-full leading-4 py-0 ring-1 ring-background" type="button" view="week" past="true" title="Check out: Wilson, 10:00 AM - 10:30 AM" aria-label="Check out: Wilson, 10:00 AM - 10:30 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-amber-500)"}}>
                              <span className="font-medium truncate">
                                Check out: Wilson
                              </span>
                              <span className="@[8rem]:inline hidden text-muted-foreground truncate">
                                10:00 AM - 10:30 AM
                              </span>
                              <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 11)", height: "calc(var(--ec-hour-height) * 1)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "11"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Turnover round, 11:00 AM - 12:00 PM" aria-label="Turnover round, 11:00 AM - 12:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-teal-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Turnover round
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                11:00 AM - 12:00 PM
                              </span>
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 15)", height: "calc(var(--ec-hour-height) * 0.75)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "11"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Check in: Haddad, 3:00 PM - 3:45 PM" aria-label="Check in: Haddad, 3:00 PM - 3:45 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-blue-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Check in: Haddad
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                3:00 PM - 3:45 PM
                              </span>
                              <span className="@[9rem]:flex absolute end-1 hidden shrink-0 top-1">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 17.5)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="gap-1 h-full leading-4 py-0" type="button" view="week" past="true" title="Check in: Romero, 5:30 PM - 6:00 PM" aria-label="Check in: Romero, 5:30 PM - 6:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-blue-500)"}}>
                              <span className="font-medium truncate">
                                Check in: Romero
                              </span>
                              <span className="@[8rem]:inline hidden text-muted-foreground truncate">
                                5:30 PM - 6:00 PM
                              </span>
                              <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 18)", height: "calc(var(--ec-hour-height) * 1.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" recurring="true" past="true" title="Turndown round, 6:00 PM - 7:30 PM" aria-label="Turndown round, 6:00 PM - 7:30 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-teal-500)"}}>
                              <svg className="lucide lucide-repeat opacity-70 shrink-0 size-2.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RepeatIcon" tabler="IconRepeat" hugeicons="RepeatIcon" phosphor="RepeatIcon" remixicon="RiRepeatLine" aria-hidden="true">
                                <path d="m17 2 4 4-4 4"></path>
                                <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                                <path d="m7 22-4-4 4-4"></path>
                                <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
                              </svg>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Turndown round
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                6:00 PM - 7:30 PM
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
                        <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1783440000000" data-ec-bounds-start="0" data-ec-bounds-end="1440" role="group" aria-label="Wednesday, July 8th, 2026" style={{height: "calc(var(--ec-hour-height) * 24)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 7.25)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="gap-1 h-full leading-4 py-0" type="button" view="week" past="true" title="Check out: Rodriguez, 7:15 AM - 7:45 AM" aria-label="Check out: Rodriguez, 7:15 AM - 7:45 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-amber-500)"}}>
                              <span className="font-medium truncate">
                                Check out: Rodriguez
                              </span>
                              <span className="@[8rem]:inline hidden text-muted-foreground truncate">
                                7:15 AM - 7:45 AM
                              </span>
                              <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 9)", height: "calc(var(--ec-hour-height) * 4)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Deep clean: floor 9, 9:00 AM - 1:00 PM" aria-label="Deep clean: floor 9, 9:00 AM - 1:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-teal-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Deep clean: floor 9
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                9:00 AM - 1:00 PM
                              </span>
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 9.75)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "11"}}>
                            <EventCalendarEvent className="gap-1 h-full leading-4 py-0 ring-1 ring-background" type="button" view="week" past="true" title="Check out: Johnson, 9:45 AM - 10:15 AM" aria-label="Check out: Johnson, 9:45 AM - 10:15 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-amber-500)"}}>
                              <span className="font-medium truncate">
                                Check out: Johnson
                              </span>
                              <span className="@[8rem]:inline hidden text-muted-foreground truncate">
                                9:45 AM - 10:15 AM
                              </span>
                              <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 10.25)", height: "calc(var(--ec-hour-height) * 1)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "11"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Turnover round, 10:15 AM - 11:15 AM" aria-label="Turnover round, 10:15 AM - 11:15 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-teal-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Turnover round
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                10:15 AM - 11:15 AM
                              </span>
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 14)", height: "calc(var(--ec-hour-height) * 0.75)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Check in: Patel, 2:00 PM - 2:45 PM" aria-label="Check in: Patel, 2:00 PM - 2:45 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-blue-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Check in: Patel
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                2:00 PM - 2:45 PM
                              </span>
                              <span className="@[9rem]:flex absolute end-1 hidden shrink-0 top-1">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 16.75)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="gap-1 h-full leading-4 py-0" type="button" view="week" past="true" title="Check in: Santos, 4:45 PM - 5:15 PM" aria-label="Check in: Santos, 4:45 PM - 5:15 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-blue-500)"}}>
                              <span className="font-medium truncate">
                                Check in: Santos
                              </span>
                              <span className="@[8rem]:inline hidden text-muted-foreground truncate">
                                4:45 PM - 5:15 PM
                              </span>
                              <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 18)", height: "calc(var(--ec-hour-height) * 1.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" recurring="true" past="true" title="Turndown round, 6:00 PM - 7:30 PM" aria-label="Turndown round, 6:00 PM - 7:30 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-teal-500)"}}>
                              <svg className="lucide lucide-repeat opacity-70 shrink-0 size-2.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RepeatIcon" tabler="IconRepeat" hugeicons="RepeatIcon" phosphor="RepeatIcon" remixicon="RiRepeatLine" aria-hidden="true">
                                <path d="m17 2 4 4-4 4"></path>
                                <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                                <path d="m7 22-4-4 4-4"></path>
                                <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
                              </svg>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Turndown round
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                6:00 PM - 7:30 PM
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 8)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="gap-1 h-full leading-4 py-0" type="button" view="week" past="true" title="Check out: Meridian AGM, 8:00 AM - 8:30 AM" aria-label="Check out: Meridian AGM, 8:00 AM - 8:30 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-amber-500)"}}>
                              <span className="font-medium truncate">
                                Check out: Meridian AGM
                              </span>
                              <span className="@[8rem]:inline hidden text-muted-foreground truncate">
                                8:00 AM - 8:30 AM
                              </span>
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 11.25)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="gap-1 h-full leading-4 py-0" type="button" view="week" past="true" title="Check out: Chen, 11:15 AM - 11:45 AM" aria-label="Check out: Chen, 11:15 AM - 11:45 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-amber-500)"}}>
                              <span className="font-medium truncate">
                                Check out: Chen
                              </span>
                              <span className="@[8rem]:inline hidden text-muted-foreground truncate">
                                11:15 AM - 11:45 AM
                              </span>
                              <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 12)", height: "calc(var(--ec-hour-height) * 1)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Turnover round, 12:00 PM - 1:00 PM" aria-label="Turnover round, 12:00 PM - 1:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-teal-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Turnover round
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                12:00 PM - 1:00 PM
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
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Wedding walkthrough, 1:00 PM - 2:30 PM" aria-label="Wedding walkthrough, 1:00 PM - 2:30 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Wedding walkthrough
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                1:00 PM - 2:30 PM
                              </span>
                              <span className="@[9rem]:flex absolute end-1 hidden shrink-0 top-1">
                                <AvatarGroup></AvatarGroup>
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
                            <EventCalendarEvent className="gap-1 h-full leading-4 py-0 ring-1 ring-background" type="button" view="week" past="true" title="Spa: Romero, 1:30 PM - 2:00 PM" aria-label="Spa: Romero, 1:30 PM - 2:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-rose-500)"}}>
                              <span className="font-medium truncate">
                                Spa: Romero
                              </span>
                              <span className="@[8rem]:inline hidden text-muted-foreground truncate">
                                1:30 PM - 2:00 PM
                              </span>
                              <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                <AvatarGroup></AvatarGroup>
                              </span>
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 15.5)", height: "calc(var(--ec-hour-height) * 0.75)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Check in: Morgan, 3:30 PM - 4:15 PM" aria-label="Check in: Morgan, 3:30 PM - 4:15 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-blue-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Check in: Morgan
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                3:30 PM - 4:15 PM
                              </span>
                              <span className="@[9rem]:flex absolute end-1 hidden shrink-0 top-1">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 17)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="gap-1 h-full leading-4 py-0" type="button" view="week" past="true" title="Check in: Tan, 5:00 PM - 5:30 PM" aria-label="Check in: Tan, 5:00 PM - 5:30 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-blue-500)"}}>
                              <span className="font-medium truncate">
                                Check in: Tan
                              </span>
                              <span className="@[8rem]:inline hidden text-muted-foreground truncate">
                                5:00 PM - 5:30 PM
                              </span>
                              <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 18)", height: "calc(var(--ec-hour-height) * 1.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" recurring="true" past="true" title="Turndown round, 6:00 PM - 7:30 PM" aria-label="Turndown round, 6:00 PM - 7:30 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-teal-500)"}}>
                              <svg className="lucide lucide-repeat opacity-70 shrink-0 size-2.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RepeatIcon" tabler="IconRepeat" hugeicons="RepeatIcon" phosphor="RepeatIcon" remixicon="RiRepeatLine" aria-hidden="true">
                                <path d="m17 2 4 4-4 4"></path>
                                <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                                <path d="m7 22-4-4 4-4"></path>
                                <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
                              </svg>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Turndown round
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                6:00 PM - 7:30 PM
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
                        <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1783612800000" data-ec-bounds-start="0" data-ec-bounds-end="1440" role="group" aria-label="Friday, July 10th, 2026" style={{height: "calc(var(--ec-hour-height) * 24)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 7.25)", height: "calc(var(--ec-hour-height) * 0.75)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Airport transfer, 7:15 AM - 8:00 AM" aria-label="Airport transfer, 7:15 AM - 8:00 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-rose-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Airport transfer
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                7:15 AM - 8:00 AM
                              </span>
                              <span className="@[9rem]:flex absolute end-1 hidden shrink-0 top-1">
                                <AvatarGroup></AvatarGroup>
                              </span>
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 7.5)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "11"}}>
                            <EventCalendarEvent className="gap-1 h-full leading-4 py-0 ring-1 ring-background" type="button" view="week" past="true" title="Check out: Patel, 7:30 AM - 8:00 AM" aria-label="Check out: Patel, 7:30 AM - 8:00 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-amber-500)"}}>
                              <span className="font-medium truncate">
                                Check out: Patel
                              </span>
                              <span className="@[8rem]:inline hidden text-muted-foreground truncate">
                                7:30 AM - 8:00 AM
                              </span>
                              <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 9)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="gap-1 h-full leading-4 py-0" type="button" view="week" past="true" title="Check out: Santos, 9:00 AM - 9:30 AM" aria-label="Check out: Santos, 9:00 AM - 9:30 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-amber-500)"}}>
                              <span className="font-medium truncate">
                                Check out: Santos
                              </span>
                              <span className="@[8rem]:inline hidden text-muted-foreground truncate">
                                9:00 AM - 9:30 AM
                              </span>
                              <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 10)", height: "calc(var(--ec-hour-height) * 1)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Turnover round, 10:00 AM - 11:00 AM" aria-label="Turnover round, 10:00 AM - 11:00 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-teal-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Turnover round
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                10:00 AM - 11:00 AM
                              </span>
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 14.25)", height: "calc(var(--ec-hour-height) * 0.75)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Check in: Romero, 2:15 PM - 3:00 PM" aria-label="Check in: Romero, 2:15 PM - 3:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-blue-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Check in: Romero
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                2:15 PM - 3:00 PM
                              </span>
                              <span className="@[9rem]:flex absolute end-1 hidden shrink-0 top-1">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 16.5)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="gap-1 h-full leading-4 py-0" type="button" view="week" past="true" title="Check in: Kim, 4:30 PM - 5:00 PM" aria-label="Check in: Kim, 4:30 PM - 5:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-blue-500)"}}>
                              <span className="font-medium truncate">
                                Check in: Kim
                              </span>
                              <span className="@[8rem]:inline hidden text-muted-foreground truncate">
                                4:30 PM - 5:00 PM
                              </span>
                              <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 18)", height: "calc(var(--ec-hour-height) * 1.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" recurring="true" past="true" title="Turndown round, 6:00 PM - 7:30 PM" aria-label="Turndown round, 6:00 PM - 7:30 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-teal-500)"}}>
                              <svg className="lucide lucide-repeat opacity-70 shrink-0 size-2.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RepeatIcon" tabler="IconRepeat" hugeicons="RepeatIcon" phosphor="RepeatIcon" remixicon="RiRepeatLine" aria-hidden="true">
                                <path d="m17 2 4 4-4 4"></path>
                                <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                                <path d="m7 22-4-4 4-4"></path>
                                <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
                              </svg>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Turndown round
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                6:00 PM - 7:30 PM
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
                        <div className="bg-muted/25 border-e last:border-e-0 min-w-0 relative" data-off="true" data-ec-day="1783699200000" data-ec-bounds-start="0" data-ec-bounds-end="1440" role="group" aria-label="Saturday, July 11th, 2026" style={{height: "calc(var(--ec-hour-height) * 24)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 8.75)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="gap-1 h-full leading-4 py-0" type="button" view="week" past="true" title="Check out: Kim, 8:45 AM - 9:15 AM" aria-label="Check out: Kim, 8:45 AM - 9:15 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-amber-500)"}}>
                              <span className="font-medium truncate">
                                Check out: Kim
                              </span>
                              <span className="@[8rem]:inline hidden text-muted-foreground truncate">
                                8:45 AM - 9:15 AM
                              </span>
                              <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 10.5)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="gap-1 h-full leading-4 py-0" type="button" view="week" past="true" title="Check out: Morgan, 10:30 AM - 11:00 AM" aria-label="Check out: Morgan, 10:30 AM - 11:00 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-amber-500)"}}>
                              <span className="font-medium truncate">
                                Check out: Morgan
                              </span>
                              <span className="@[8rem]:inline hidden text-muted-foreground truncate">
                                10:30 AM - 11:00 AM
                              </span>
                              <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 11.5)", height: "calc(var(--ec-hour-height) * 1)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Turnover round, 11:30 AM - 12:30 PM" aria-label="Turnover round, 11:30 AM - 12:30 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-teal-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Turnover round
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                11:30 AM - 12:30 PM
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
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Group coach in, 2:00 PM - 3:00 PM" aria-label="Group coach in, 2:00 PM - 3:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-rose-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Group coach in
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                2:00 PM - 3:00 PM
                              </span>
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 15.75)", height: "calc(var(--ec-hour-height) * 0.75)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Check in: Wilson, 3:45 PM - 4:30 PM" aria-label="Check in: Wilson, 3:45 PM - 4:30 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-blue-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Check in: Wilson
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                3:45 PM - 4:30 PM
                              </span>
                              <span className="@[9rem]:flex absolute end-1 hidden shrink-0 top-1">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 17.25)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="gap-1 h-full leading-4 py-0" type="button" view="week" past="true" title="Check in: Rodriguez, 5:15 PM - 5:45 PM" aria-label="Check in: Rodriguez, 5:15 PM - 5:45 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-blue-500)"}}>
                              <span className="font-medium truncate">
                                Check in: Rodriguez
                              </span>
                              <span className="@[8rem]:inline hidden text-muted-foreground truncate">
                                5:15 PM - 5:45 PM
                              </span>
                              <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 18)", height: "calc(var(--ec-hour-height) * 1.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" recurring="true" past="true" title="Turndown round, 6:00 PM - 7:30 PM" aria-label="Turndown round, 6:00 PM - 7:30 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-teal-500)"}}>
                              <svg className="lucide lucide-repeat opacity-70 shrink-0 size-2.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RepeatIcon" tabler="IconRepeat" hugeicons="RepeatIcon" phosphor="RepeatIcon" remixicon="RiRepeatLine" aria-hidden="true">
                                <path d="m17 2 4 4-4 4"></path>
                                <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                                <path d="m7 22-4-4 4-4"></path>
                                <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
                              </svg>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Turndown round
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                6:00 PM - 7:30 PM
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
                        <div className="bg-muted/25 border-e last:border-e-0 min-w-0 relative" data-off="true" data-ec-day="1783785600000" data-ec-bounds-start="0" data-ec-bounds-end="1440" role="group" aria-label="Sunday, July 12th, 2026" style={{height: "calc(var(--ec-hour-height) * 24)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 7)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="gap-1 h-full leading-4 py-0" type="button" view="week" past="true" title="Check out: Haddad, 7:00 AM - 7:30 AM" aria-label="Check out: Haddad, 7:00 AM - 7:30 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-amber-500)"}}>
                              <span className="font-medium truncate">
                                Check out: Haddad
                              </span>
                              <span className="@[8rem]:inline hidden text-muted-foreground truncate">
                                7:00 AM - 7:30 AM
                              </span>
                              <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 8.25)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="gap-1 h-full leading-4 py-0" type="button" view="week" past="true" title="Check out: Romero, 8:15 AM - 8:45 AM" aria-label="Check out: Romero, 8:15 AM - 8:45 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-amber-500)"}}>
                              <span className="font-medium truncate">
                                Check out: Romero
                              </span>
                              <span className="@[8rem]:inline hidden text-muted-foreground truncate">
                                8:15 AM - 8:45 AM
                              </span>
                              <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 9.333333333333334)", height: "calc(var(--ec-hour-height) * 0.75)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Airport transfer, 9:20 AM - 10:05 AM" aria-label="Airport transfer, 9:20 AM - 10:05 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-rose-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Airport transfer
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                9:20 AM - 10:05 AM
                              </span>
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 9.5)", height: "calc(var(--ec-hour-height) * 1)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0.5)", "--ec-z": "11"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Turnover round, 9:30 AM - 10:30 AM" aria-label="Turnover round, 9:30 AM - 10:30 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-teal-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Turnover round
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                9:30 AM - 10:30 AM
                              </span>
                              <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 13.75)", height: "calc(var(--ec-hour-height) * 0.75)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Check in: Santos, 1:45 PM - 2:30 PM" aria-label="Check in: Santos, 1:45 PM - 2:30 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-blue-500)"}}>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Check in: Santos
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                1:45 PM - 2:30 PM
                              </span>
                              <span className="@[9rem]:flex absolute end-1 hidden shrink-0 top-1">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 16)", height: "calc(var(--ec-hour-height) * 0.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="gap-1 h-full leading-4 py-0" type="button" view="week" past="true" title="Check in: Morgan, 4:00 PM - 4:30 PM" aria-label="Check in: Morgan, 4:00 PM - 4:30 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-blue-500)"}}>
                              <span className="font-medium truncate">
                                Check in: Morgan
                              </span>
                              <span className="@[8rem]:inline hidden text-muted-foreground truncate">
                                4:00 PM - 4:30 PM
                              </span>
                              <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                <AvatarGroup>
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="" loading="lazy" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
                          <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 18)", height: "calc(var(--ec-hour-height) * 1.5)", left: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 0)", width: "calc((100% - var(--ec-event-gutter, 0.75rem)) * 1)", "--ec-z": "10"}}>
                            <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" recurring="true" past="true" title="Turndown round, 6:00 PM - 7:30 PM" aria-label="Turndown round, 6:00 PM - 7:30 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-teal-500)"}}>
                              <svg className="lucide lucide-repeat opacity-70 shrink-0 size-2.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RepeatIcon" tabler="IconRepeat" hugeicons="RepeatIcon" phosphor="RepeatIcon" remixicon="RiRepeatLine" aria-hidden="true">
                                <path d="m17 2 4 4-4 4"></path>
                                <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                                <path d="m7 22-4-4 4-4"></path>
                                <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
                              </svg>
                              <span className="@max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip font-medium truncate w-full">
                                Turndown round
                              </span>
                              <span className="@[8rem]:inline @max-[10rem]:[mask-image:linear-gradient(to_right,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:rtl:[mask-image:linear-gradient(to_left,#000_calc(100%-0.75rem),transparent)] @max-[10rem]:text-clip hidden text-muted-foreground truncate w-full">
                                6:00 PM - 7:30 PM
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
                      </div>
                    </div>
                  </div>
                  <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-start="" data-overflow-y-end="" data-id="base-ui-_r_h_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "153.140625px"}}>
                    <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 157.552px, 0px)"}}></div>
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
