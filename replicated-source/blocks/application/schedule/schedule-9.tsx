import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import { Calendar } from "@/registry/bases/base/ui/calendar"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 p-10 w-full">
      <Frame className="max-w-lg w-full" spacing="sm">
        <header className="flex flex-row gap-(--frame-panel-header-gap) items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="font-semibold text-sm">
            Schedule a session
          </div>
          <div className="flex gap-1">
            <Button type="button" tabIndex="0" extracted="1">
              15m
            </Button>
            <Button type="button" tabIndex="0">
              30m
            </Button>
            <Button type="button" tabIndex="0">
              45m
            </Button>
            <Button type="button" tabIndex="0">
              60m
            </Button>
            <Button type="button" tabIndex="0">
              90m
            </Button>
          </div>
        </header>
        <FramePanel className="p-0!">
          <div className="flex flex-col lg:flex-row">
            <div className="p-5">
              <div className="flex flex-col gap-4 items-center justify-center select-none">
                <div className="flex gap-1 grow items-center justify-between w-full">
                  <Button className="p-0 size-7" type="button" tabIndex="0" aria-label="Previous month">
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
                <Calendar className="bg-transparent md:[--cell-size:--spacing(10)] rdp-root rtl:**:[.rdp-button\\_next>svg]:rotate-180 rtl:**:[.rdp-button\\_previous>svg]:rotate-180" lang="en-US" mode="single">
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
                                31
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-01">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="0" day="2026/6/1" aria-label="Monday, June 1st, 2026">
                                1
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-02">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/2" aria-label="Tuesday, June 2nd, 2026">
                                2
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-03">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/3" aria-label="Wednesday, June 3rd, 2026">
                                3
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-04">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/4" aria-label="Thursday, June 4th, 2026">
                                4
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-05">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/5" aria-label="Friday, June 5th, 2026">
                                5
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-06">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/6" aria-label="Saturday, June 6th, 2026">
                                6
                              </Button>
                            </td>
                          </tr>
                          <tr className="flex gap-1 mt-1">
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-07">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/7" aria-label="Sunday, June 7th, 2026">
                                7
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-08">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/8" aria-label="Monday, June 8th, 2026">
                                8
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-09">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/9" aria-label="Tuesday, June 9th, 2026">
                                9
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-10">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/10" aria-label="Wednesday, June 10th, 2026">
                                10
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-11">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/11" aria-label="Thursday, June 11th, 2026">
                                11
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-12">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/12" aria-label="Friday, June 12th, 2026">
                                12
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-13">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/13" aria-label="Saturday, June 13th, 2026">
                                13
                              </Button>
                            </td>
                          </tr>
                          <tr className="flex gap-1 mt-1">
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-14">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/14" aria-label="Sunday, June 14th, 2026">
                                14
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-15">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/15" aria-label="Monday, June 15th, 2026">
                                15
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-16">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/16" aria-label="Tuesday, June 16th, 2026">
                                16
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-17">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/17" aria-label="Wednesday, June 17th, 2026">
                                17
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-18">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/18" aria-label="Thursday, June 18th, 2026">
                                18
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-19">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/19" aria-label="Friday, June 19th, 2026">
                                19
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-20">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/20" aria-label="Saturday, June 20th, 2026">
                                20
                              </Button>
                            </td>
                          </tr>
                          <tr className="flex gap-1 mt-1">
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-21">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/21" aria-label="Sunday, June 21st, 2026">
                                21
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-22">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/22" aria-label="Monday, June 22nd, 2026">
                                22
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-23">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/23" aria-label="Tuesday, June 23rd, 2026">
                                23
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-24">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/24" aria-label="Wednesday, June 24th, 2026">
                                24
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-25">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/25" aria-label="Thursday, June 25th, 2026">
                                25
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-26">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/26" aria-label="Friday, June 26th, 2026">
                                26
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-27">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/27" aria-label="Saturday, June 27th, 2026">
                                27
                              </Button>
                            </td>
                          </tr>
                          <tr className="flex gap-1 mt-1">
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-28">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/28" aria-label="Sunday, June 28th, 2026">
                                28
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-29">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/29" aria-label="Monday, June 29th, 2026">
                                29
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-30">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/30" aria-label="Tuesday, June 30th, 2026">
                                30
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 opacity-60 p-0" role="gridcell" data-day="2026-07-01" data-month="2026-07" data-outside="true">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/1" aria-label="Wednesday, July 1st, 2026">
                                1
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 opacity-60 p-0" role="gridcell" data-day="2026-07-02" data-month="2026-07" data-outside="true">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/2" aria-label="Thursday, July 2nd, 2026">
                                2
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 opacity-60 p-0" role="gridcell" data-day="2026-07-03" data-month="2026-07" data-outside="true">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/3" aria-label="Friday, July 3rd, 2026">
                                3
                              </Button>
                            </td>
                            <td className="aspect-square flex-1 opacity-60 p-0" role="gridcell" data-day="2026-07-04" data-month="2026-07" data-outside="true">
                              <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/4" aria-label="Saturday, July 4th, 2026">
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
            <div className="lg:border-border lg:border-s lg:w-[160px] min-h-[380px] p-5">
              <p className="font-semibold pb-6 pt-1.5 text-foreground text-sm">
                Pick a date
              </p>
              <div className="flex max-h-full relative">
                <ScrollArea className="**:data-[slot=scroll-area-thumb]:bg-foreground/15 **:data-[slot=scroll-area-thumb]:rounded-full **:data-[slot=scroll-area-viewport]:[--fade-size:1.5rem] **:data-[slot=scroll-area-viewport]:mask-b-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-y-end)))] **:data-[slot=scroll-area-viewport]:mask-l-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-x-start)))] **:data-[slot=scroll-area-viewport]:mask-r-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-x-end)))] **:data-[slot=scroll-area-viewport]:mask-t-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-y-start)))] -mr-3.5 grow max-h-[285px] pr-3.5" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                  <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_6_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                    <div className="gap-1.5 grid">
                      <div className="flex flex-col gap-3 items-center justify-center text-center">
                        <Item className="bg-muted p-0 rounded-full size-10" variant="default" size="default">
                          <ItemMedia className="size-auto" variant="icon">
                            <svg className="lucide lucide-clock size-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 6v6l4 2"></path>
                            </svg>
                          </ItemMedia>
                        </Item>
                        <div className="space-y-1">
                          <p className="text-muted-foreground text-xs">
                            Select a date to see available times
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>
        </FramePanel>
        <footer className="flex flex-col gap-3 items-center md:flex-row px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
          <div className="flex flex-1 gap-1">
            <svg className="lucide lucide-circle-check shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            <p className="text-muted-foreground text-xs">
              Choose a date and time to book
            </p>
          </div>
          <div className="flex gap-2 justify-center">
            <Button type="button" disabled="" tabIndex="0" disabled>
              Book session
            </Button>
          </div>
        </footer>
      </Frame>
    </div>
  )
}
