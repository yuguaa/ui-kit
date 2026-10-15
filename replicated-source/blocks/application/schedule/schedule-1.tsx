import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { Calendar } from "@/registry/bases/base/ui/calendar"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 p-10 w-full">
      <Frame className="max-w-4xl w-full">
        <FramePanel className="flex flex-col lg:flex-row p-0!">
          <div className="lg:border-border lg:border-r lg:w-[370px] p-5 pt-5.5 shrink-0">
            <div className="flex flex-col gap-4 items-center justify-center select-none">
              <div className="flex gap-1 grow items-center justify-between w-full">
                <Button className="p-0 size-7" type="button" tabIndex="0" aria-label="Previous month" extracted="1">
                  <svg className="lucide lucide-chevron-left size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine" aria-hidden="true">
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                </Button>
                <Select>
                <SelectTrigger className="flex-1 min-w-0" type="button" tabIndex="0" id="base-ui-_r_0_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                  <SelectValue>
                    June
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    ▼
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_0_-hidden-input" tabIndex="-1" aria-hidden="true" value="June" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <Select>
                <SelectTrigger className="shrink-0 w-22" type="button" tabIndex="0" id="base-ui-_r_3_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                  <SelectValue>
                    2026
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    ▼
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_3_-hidden-input" tabIndex="-1" aria-hidden="true" value="2026" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <Button className="p-0 size-7" type="button" tabIndex="0" aria-label="Next month">
                  <svg className="lucide lucide-chevron-right size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </Button>
              </div>
              <Calendar className="bg-transparent md:[--cell-size:--spacing(11)] rdp-root rtl:**:[.rdp-button\\_next>svg]:rotate-180 rtl:**:[.rdp-button\\_previous>svg]:rotate-180" lang="en-US" mode="single">
                <div className="flex flex-col gap-4 md:flex-row rdp-months relative">
                  <div className="flex flex-col gap-4 rdp-month w-full">
                    <div className="hidden">
                      <span className="cn-calendar-caption font-medium rdp-caption_label select-none text-sm" role="status" aria-live="polite">
                        June 2026
                      </span>
                    </div>
                    <table className="border-collapse rdp-month_grid w-full" role="grid" aria-multiselectable="false" aria-label="June 2026">
                      <thead aria-hidden="true">
                        <tr className="flex gap-1">
                          <th className="flex flex-1 font-medium h-14 h-6! items-center justify-center rounded-md text-[0.65rem] text-muted-foreground" scope="col" aria-label="Sunday">
                            SUN
                          </th>
                          <th className="flex flex-1 font-medium h-14 h-6! items-center justify-center rounded-md text-[0.65rem] text-muted-foreground" scope="col" aria-label="Monday">
                            MON
                          </th>
                          <th className="flex flex-1 font-medium h-14 h-6! items-center justify-center rounded-md text-[0.65rem] text-muted-foreground" scope="col" aria-label="Tuesday">
                            TUE
                          </th>
                          <th className="bg-accent flex flex-1 font-medium h-14 h-6! items-center justify-center rounded-md text-[0.65rem] text-foreground! text-muted-foreground" scope="col" aria-label="Wednesday">
                            WED
                          </th>
                          <th className="flex flex-1 font-medium h-14 h-6! items-center justify-center rounded-md text-[0.65rem] text-muted-foreground" scope="col" aria-label="Thursday">
                            THU
                          </th>
                          <th className="flex flex-1 font-medium h-14 h-6! items-center justify-center rounded-md text-[0.65rem] text-muted-foreground" scope="col" aria-label="Friday">
                            FRI
                          </th>
                          <th className="flex flex-1 font-medium h-14 h-6! items-center justify-center rounded-md text-[0.65rem] text-muted-foreground" scope="col" aria-label="Saturday">
                            SAT
                          </th>
                        </tr>
                      </thead>
                      <tbody className="rdp-weeks">
                        <tr className="flex gap-1 mt-1">
                          <td className="aspect-square flex-1 opacity-60 p-0" role="gridcell" data-day="2026-05-31" data-month="2026-05" data-outside="true">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/5/31" aria-label="Sunday, May 31st, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              31
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-01">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/1" aria-label="Monday, June 1st, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              1
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-02">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/2" aria-label="Tuesday, June 2nd, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              2
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-03">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/3" aria-label="Wednesday, June 3rd, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              3
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-04">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/4" aria-label="Thursday, June 4th, 2026">
                              <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1 text-primary-foreground" aria-hidden="true"></span>
                              4
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-05">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/5" aria-label="Friday, June 5th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              5
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-06">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/6" aria-label="Saturday, June 6th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              6
                            </Button>
                          </td>
                        </tr>
                        <tr className="flex gap-1 mt-1">
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-07">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/7" aria-label="Sunday, June 7th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              7
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-08">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/8" aria-label="Monday, June 8th, 2026">
                              <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1 text-primary-foreground" aria-hidden="true"></span>
                              8
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-09">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/9" aria-label="Tuesday, June 9th, 2026">
                              <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1 text-primary-foreground" aria-hidden="true"></span>
                              9
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0 rdp-selected" role="gridcell" aria-selected="true" data-day="2026-06-10" data-selected="true">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="0" day="2026/6/10" selectedSingle="true" aria-label="Wednesday, June 10th, 2026, selected">
                              <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1 text-primary-foreground" aria-hidden="true"></span>
                              10
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-11">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/11" aria-label="Thursday, June 11th, 2026">
                              <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1 text-primary-foreground" aria-hidden="true"></span>
                              11
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-12">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/12" aria-label="Friday, June 12th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              12
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-13">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/13" aria-label="Saturday, June 13th, 2026">
                              <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1 text-primary-foreground" aria-hidden="true"></span>
                              13
                            </Button>
                          </td>
                        </tr>
                        <tr className="flex gap-1 mt-1">
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-14">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/14" aria-label="Sunday, June 14th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              14
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-15">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/15" aria-label="Monday, June 15th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              15
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-16">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/16" aria-label="Tuesday, June 16th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              16
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-17">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/17" aria-label="Wednesday, June 17th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              17
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-18">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/18" aria-label="Thursday, June 18th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              18
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-19">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/19" aria-label="Friday, June 19th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              19
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-20">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/20" aria-label="Saturday, June 20th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              20
                            </Button>
                          </td>
                        </tr>
                        <tr className="flex gap-1 mt-1">
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-21">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/21" aria-label="Sunday, June 21st, 2026">
                              <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1 text-primary-foreground" aria-hidden="true"></span>
                              21
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-22">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/22" aria-label="Monday, June 22nd, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              22
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-23">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/23" aria-label="Tuesday, June 23rd, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              23
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-24">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/24" aria-label="Wednesday, June 24th, 2026">
                              <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1 text-primary-foreground" aria-hidden="true"></span>
                              24
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-25">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/25" aria-label="Thursday, June 25th, 2026">
                              <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1 text-primary-foreground" aria-hidden="true"></span>
                              25
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-26">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/26" aria-label="Friday, June 26th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              26
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-27">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/27" aria-label="Saturday, June 27th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              27
                            </Button>
                          </td>
                        </tr>
                        <tr className="flex gap-1 mt-1">
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-28">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/28" aria-label="Sunday, June 28th, 2026">
                              <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1 text-primary-foreground" aria-hidden="true"></span>
                              28
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-29">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/29" aria-label="Monday, June 29th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              29
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-30">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/30" aria-label="Tuesday, June 30th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              30
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 opacity-60 p-0" role="gridcell" data-day="2026-07-01" data-month="2026-07" data-outside="true">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/1" aria-label="Wednesday, July 1st, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              1
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 opacity-60 p-0" role="gridcell" data-day="2026-07-02" data-month="2026-07" data-outside="true">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/2" aria-label="Thursday, July 2nd, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              2
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 opacity-60 p-0" role="gridcell" data-day="2026-07-03" data-month="2026-07" data-outside="true">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/3" aria-label="Friday, July 3rd, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              3
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 opacity-60 p-0" role="gridcell" data-day="2026-07-04" data-month="2026-07" data-outside="true">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/4" aria-label="Saturday, July 4th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              4
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Calendar>
            </div>
          </div>
          <div className="flex-1 p-5">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-3 sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <h2 className="font-semibold text-foreground text-sm">
                    Wednesday, June 10
                  </h2>
                  <p className="text-muted-foreground text-xs">
                    6 events
                  </p>
                </div>
                <div className="flex gap-2 items-center shrink-0 sm:w-auto">
                  <Select>
                  <SelectTrigger type="button" tabIndex="0" id="base-ui-_r_6_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                    <SelectValue>
                      All events
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      ▼
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_6_-hidden-input" tabIndex="-1" aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Button type="button" tabIndex="0">
                    <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                    Add
                  </Button>
                </div>
              </div>
              <div className="min-h-[320px]">
                <div className="flex max-h-full relative">
                  <ScrollArea className="**:data-[slot=scroll-area-thumb]:bg-foreground/15 **:data-[slot=scroll-area-thumb]:rounded-full **:data-[slot=scroll-area-viewport]:[--fade-size:1.5rem] **:data-[slot=scroll-area-viewport]:mask-b-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-y-end)))] **:data-[slot=scroll-area-viewport]:mask-l-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-x-start)))] **:data-[slot=scroll-area-viewport]:mask-r-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-x-end)))] **:data-[slot=scroll-area-viewport]:mask-t-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-y-start)))] -mr-3.5 grow max-h-[320px] pr-3.5" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
                    <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_9_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "135px"}} data-has-overflow-y="" data-overflow-y-end="">
                      <ul className="space-y-2.5">
                        <li>
                          <Item className="gap-4 items-start py-3" variant="outline" size="xs">
                            <div className="flex flex-1 flex-col gap-1.5 min-w-0">
                              <a className="font-medium hover:text-primary leading-tight text-foreground text-sm" href="#">
                                Mobile QA Handoff
                              </a>
                              <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
                                  Upcoming
                                </Badge>
                                <AvatarGroup className="-space-x-1.5">
                                  <Avatar className="size-4!" size="default" title="Emma Wilson">
                                    <AvatarImage alt="Emma Wilson" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4!" size="default" title="Alex Johnson">
                                    <AvatarImage alt="Alex Johnson" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4!" size="default" title="Zoe Martinez">
                                    <AvatarImage alt="Zoe Martinez" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <AvatarGroupCount className="size-4! text-[10px]">
                                    <Popover>
                                    <PopoverTrigger className="flex focus-visible:ring-2 focus-visible:ring-ring/50 hover:text-foreground items-center justify-center outline-none rounded-full size-full tabular-nums" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_b_" aria-haspopup="dialog" aria-expanded="false" aria-label="1 more: Lucas Ferreira">
                                      +1
                                    </PopoverTrigger>
                                    </Popover>
                                  </AvatarGroupCount>
                                </AvatarGroup>
                                <span className="flex gap-1 items-center text-muted-foreground text-xs">
                                  <svg className="lucide lucide-clock shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 6v6l4 2"></path>
                                  </svg>
                                  Jun 10 · 2:30 pm
                                </span>
                                <span className="flex gap-1 items-center text-muted-foreground text-xs">
                                  <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                  </svg>
                                  Remote
                                </span>
                              </div>
                            </div>
                          </Item>
                        </li>
                        <li>
                          <Item className="gap-4 items-start py-3" variant="outline" size="xs">
                            <div className="flex flex-1 flex-col gap-1.5 min-w-0">
                              <a className="font-medium hover:text-primary leading-tight text-foreground text-sm" href="#">
                                Quarterly All-Hands
                              </a>
                              <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
                                  Upcoming
                                </Badge>
                                <AvatarGroup className="-space-x-1.5">
                                  <Avatar className="size-4!" size="default" title="Tom Anderson">
                                    <AvatarImage alt="Tom Anderson" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4!" size="default" title="Sarah Chen">
                                    <AvatarImage alt="Sarah Chen" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                </AvatarGroup>
                                <span className="flex gap-1 items-center text-muted-foreground text-xs">
                                  <svg className="lucide lucide-clock shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 6v6l4 2"></path>
                                  </svg>
                                  Jun 10 · 4:00 pm
                                </span>
                                <span className="flex gap-1 items-center text-muted-foreground text-xs">
                                  <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                  </svg>
                                  Main Hall
                                </span>
                              </div>
                            </div>
                          </Item>
                        </li>
                        <li>
                          <Item className="gap-4 items-start py-3" variant="outline" size="xs">
                            <div className="flex flex-1 flex-col gap-1.5 min-w-0">
                              <a className="font-medium hover:text-primary leading-tight text-foreground text-sm" href="#">
                                Marketing Campaign Review
                              </a>
                              <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
                                  Upcoming
                                </Badge>
                                <AvatarGroup className="-space-x-1.5">
                                  <Avatar className="size-4!" size="default" title="Tom Anderson">
                                    <AvatarImage alt="Tom Anderson" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4!" size="default" title="Sarah Chen">
                                    <AvatarImage alt="Sarah Chen" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4!" size="default" title="James Park">
                                    <AvatarImage alt="James Park" src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <AvatarGroupCount className="size-4! text-[10px]">
                                    <Popover>
                                    <PopoverTrigger className="flex focus-visible:ring-2 focus-visible:ring-ring/50 hover:text-foreground items-center justify-center outline-none rounded-full size-full tabular-nums" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_d_" aria-haspopup="dialog" aria-expanded="false" aria-label="1 more: Nina Patel">
                                      +1
                                    </PopoverTrigger>
                                    </Popover>
                                  </AvatarGroupCount>
                                </AvatarGroup>
                                <span className="flex gap-1 items-center text-muted-foreground text-xs">
                                  <svg className="lucide lucide-clock shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 6v6l4 2"></path>
                                  </svg>
                                  Jun 10 · 10:30 am
                                </span>
                                <span className="flex gap-1 items-center text-muted-foreground text-xs">
                                  <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                  </svg>
                                  Google Meet
                                </span>
                              </div>
                            </div>
                          </Item>
                        </li>
                        <li>
                          <Item className="gap-4 items-start py-3" variant="outline" size="xs">
                            <div className="flex flex-1 flex-col gap-1.5 min-w-0">
                              <a className="font-medium hover:text-primary leading-tight text-foreground text-sm" href="#">
                                Hiring Panel · Design
                              </a>
                              <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
                                  Upcoming
                                </Badge>
                                <AvatarGroup className="-space-x-1.5">
                                  <Avatar className="size-4!" size="default" title="Alex Johnson">
                                    <AvatarImage alt="Alex Johnson" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4!" size="default" title="Zoe Martinez">
                                    <AvatarImage alt="Zoe Martinez" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4!" size="default" title="Lucas Ferreira">
                                    <AvatarImage alt="Lucas Ferreira" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <AvatarGroupCount className="size-4! text-[10px]">
                                    <Popover>
                                    <PopoverTrigger className="flex focus-visible:ring-2 focus-visible:ring-ring/50 hover:text-foreground items-center justify-center outline-none rounded-full size-full tabular-nums" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_f_" aria-haspopup="dialog" aria-expanded="false" aria-label="1 more: Emma Wilson">
                                      +1
                                    </PopoverTrigger>
                                    </Popover>
                                  </AvatarGroupCount>
                                </AvatarGroup>
                                <span className="flex gap-1 items-center text-muted-foreground text-xs">
                                  <svg className="lucide lucide-clock shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 6v6l4 2"></path>
                                  </svg>
                                  Jun 10 · 11:00 am
                                </span>
                                <span className="flex gap-1 items-center text-muted-foreground text-xs">
                                  <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                  </svg>
                                  Zoom
                                </span>
                              </div>
                            </div>
                          </Item>
                        </li>
                        <li>
                          <Item className="gap-4 items-start py-3" variant="outline" size="xs">
                            <div className="flex flex-1 flex-col gap-1.5 min-w-0">
                              <a className="font-medium hover:text-primary leading-tight text-foreground text-sm" href="#">
                                Release Sign-off
                              </a>
                              <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
                                  Upcoming
                                </Badge>
                                <AvatarGroup className="-space-x-1.5">
                                  <Avatar className="size-4!" size="default" title="Zoe Martinez">
                                    <AvatarImage alt="Zoe Martinez" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4!" size="default" title="Lucas Ferreira">
                                    <AvatarImage alt="Lucas Ferreira" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4!" size="default" title="Emma Wilson">
                                    <AvatarImage alt="Emma Wilson" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <AvatarGroupCount className="size-4! text-[10px]">
                                    <Popover>
                                    <PopoverTrigger className="flex focus-visible:ring-2 focus-visible:ring-ring/50 hover:text-foreground items-center justify-center outline-none rounded-full size-full tabular-nums" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_h_" aria-haspopup="dialog" aria-expanded="false" aria-label="1 more: Alex Johnson">
                                      +1
                                    </PopoverTrigger>
                                    </Popover>
                                  </AvatarGroupCount>
                                </AvatarGroup>
                                <span className="flex gap-1 items-center text-muted-foreground text-xs">
                                  <svg className="lucide lucide-clock shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 6v6l4 2"></path>
                                  </svg>
                                  Jun 10 · 3:00 pm
                                </span>
                                <span className="flex gap-1 items-center text-muted-foreground text-xs">
                                  <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                  </svg>
                                  Zoom
                                </span>
                              </div>
                            </div>
                          </Item>
                        </li>
                        <li>
                          <Item className="gap-4 items-start py-3" variant="outline" size="xs">
                            <div className="flex flex-1 flex-col gap-1.5 min-w-0">
                              <a className="font-medium hover:text-primary leading-tight text-foreground text-sm" href="#">
                                UX Research Session
                              </a>
                              <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
                                  Upcoming
                                </Badge>
                                <AvatarGroup className="-space-x-1.5">
                                  <Avatar className="size-4!" size="default" title="Zoe Martinez">
                                    <AvatarImage alt="Zoe Martinez" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4!" size="default" title="Lucas Ferreira">
                                    <AvatarImage alt="Lucas Ferreira" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <Avatar className="size-4!" size="default" title="Emma Wilson">
                                    <AvatarImage alt="Emma Wilson" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <AvatarGroupCount className="size-4! text-[10px]">
                                    <Popover>
                                    <PopoverTrigger className="flex focus-visible:ring-2 focus-visible:ring-ring/50 hover:text-foreground items-center justify-center outline-none rounded-full size-full tabular-nums" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_j_" aria-haspopup="dialog" aria-expanded="false" aria-label="1 more: Alex Johnson">
                                      +1
                                    </PopoverTrigger>
                                    </Popover>
                                  </AvatarGroupCount>
                                </AvatarGroup>
                                <span className="flex gap-1 items-center text-muted-foreground text-xs">
                                  <svg className="lucide lucide-clock shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 6v6l4 2"></path>
                                  </svg>
                                  Jun 10 · 4:00 pm
                                </span>
                                <span className="flex gap-1 items-center text-muted-foreground text-xs">
                                  <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                  </svg>
                                  Lab 2
                                </span>
                              </div>
                            </div>
                          </Item>
                        </li>
                      </ul>
                    </div>
                    <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_9_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "223.64835164835168px"}}>
                      <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </div>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}
