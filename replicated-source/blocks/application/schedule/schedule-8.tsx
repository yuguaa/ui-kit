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
import { Separator } from "@/registry/bases/base/ui/separator"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 p-10 w-full">
      <Frame className="max-w-sm w-full">
        <FramePanel className="p-0!">
          <div className="p-5">
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
                    {"June"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_0_-hidden-input" tabIndex="-1" aria-hidden="true" value="June" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <Select>
                <SelectTrigger className="shrink-0 w-22" type="button" tabIndex="0" id="base-ui-_r_3_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                  <SelectValue>
                    {"2026"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
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
              <Calendar className="bg-transparent md:[--cell-size:--spacing(9)] rdp-root rtl:**:[.rdp-button\\_next>svg]:rotate-180 rtl:**:[.rdp-button\\_previous>svg]:rotate-180" lang="en-US" mode="single">
                <div className="flex flex-col gap-4 md:flex-row rdp-months relative">
                  <div className="flex flex-col gap-4 rdp-month w-full">
                    <div className="hidden">
                      <span className="cn-calendar-caption font-medium rdp-caption_label select-none text-sm" role="status" aria-live="polite">
                        {"June 2026"}
                      </span>
                    </div>
                    <table className="border-collapse rdp-month_grid w-full" role="grid" aria-multiselectable="false" aria-label="June 2026">
                      <thead aria-hidden="true">
                        <tr className="flex gap-1">
                          <th className="flex flex-1 font-medium h-6 h-6! items-center justify-center rounded-md text-muted-foreground text-xs" scope="col" aria-label="Sunday">
                            {"SUN"}
                          </th>
                          <th className="flex flex-1 font-medium h-6 h-6! items-center justify-center rounded-md text-muted-foreground text-xs" scope="col" aria-label="Monday">
                            {"MON"}
                          </th>
                          <th className="bg-accent flex flex-1 font-medium h-6 h-6! items-center justify-center rounded-md text-foreground! text-muted-foreground text-xs" scope="col" aria-label="Tuesday">
                            {"TUE"}
                          </th>
                          <th className="flex flex-1 font-medium h-6 h-6! items-center justify-center rounded-md text-muted-foreground text-xs" scope="col" aria-label="Wednesday">
                            {"WED"}
                          </th>
                          <th className="flex flex-1 font-medium h-6 h-6! items-center justify-center rounded-md text-muted-foreground text-xs" scope="col" aria-label="Thursday">
                            {"THU"}
                          </th>
                          <th className="flex flex-1 font-medium h-6 h-6! items-center justify-center rounded-md text-muted-foreground text-xs" scope="col" aria-label="Friday">
                            {"FRI"}
                          </th>
                          <th className="flex flex-1 font-medium h-6 h-6! items-center justify-center rounded-md text-muted-foreground text-xs" scope="col" aria-label="Saturday">
                            {"SAT"}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="rdp-weeks">
                        <tr className="flex gap-1 mt-1">
                          <td className="aspect-square flex-1 opacity-60 p-0" role="gridcell" data-day="2026-05-31" data-month="2026-05" data-outside="true">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/5/31" aria-label="Sunday, May 31st, 2026">
                              {"31"}
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-01">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/1" aria-label="Monday, June 1st, 2026">
                              {"1"}
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-02">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/2" aria-label="Tuesday, June 2nd, 2026">
                              {"2"}
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-03">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/3" aria-label="Wednesday, June 3rd, 2026">
                              {"3"}
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-04">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/4" aria-label="Thursday, June 4th, 2026">
                              {"4"}
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-05">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/5" aria-label="Friday, June 5th, 2026">
                              {"5"}
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-06">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/6" aria-label="Saturday, June 6th, 2026">
                              {"6"}
                            </Button>
                          </td>
                        </tr>
                        <tr className="flex gap-1 mt-1">
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-07">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/7" aria-label="Sunday, June 7th, 2026">
                              {"7"}
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-08">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/8" aria-label="Monday, June 8th, 2026">
                              {"8"}
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0 rdp-selected" role="gridcell" aria-selected="true" data-day="2026-06-09" data-selected="true">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="0" day="2026/6/9" selectedSingle="true" aria-label="Tuesday, June 9th, 2026, selected">
                              {"9"}
                              <span className="-translate-x-1/2 absolute bottom-0.5 flex gap-0.5 left-1/2">
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(139, 92, 246)"}}></span>
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(245, 158, 11)"}}></span>
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(14, 165, 233)"}}></span>
                              </span>
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-10">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/10" aria-label="Wednesday, June 10th, 2026">
                              {"10"}
                              <span className="-translate-x-1/2 absolute bottom-0.5 flex gap-0.5 left-1/2">
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(14, 165, 233)"}}></span>
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(245, 158, 11)"}}></span>
                              </span>
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-11">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/11" aria-label="Thursday, June 11th, 2026">
                              {"11"}
                              <span className="-translate-x-1/2 absolute bottom-0.5 flex gap-0.5 left-1/2">
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(244, 63, 94)"}}></span>
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(245, 158, 11)"}}></span>
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(14, 165, 233)"}}></span>
                              </span>
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-12">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/12" aria-label="Friday, June 12th, 2026">
                              {"12"}
                              <span className="-translate-x-1/2 absolute bottom-0.5 flex gap-0.5 left-1/2">
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(16, 185, 129)"}}></span>
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(14, 165, 233)"}}></span>
                              </span>
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-13">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/13" aria-label="Saturday, June 13th, 2026">
                              {"13"}
                              <span className="-translate-x-1/2 absolute bottom-0.5 flex gap-0.5 left-1/2">
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(14, 165, 233)"}}></span>
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(139, 92, 246)"}}></span>
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(245, 158, 11)"}}></span>
                              </span>
                            </Button>
                          </td>
                        </tr>
                        <tr className="flex gap-1 mt-1">
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-14">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/14" aria-label="Sunday, June 14th, 2026">
                              {"14"}
                              <span className="-translate-x-1/2 absolute bottom-0.5 flex gap-0.5 left-1/2">
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(245, 158, 11)"}}></span>
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(16, 185, 129)"}}></span>
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(14, 165, 233)"}}></span>
                              </span>
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-15">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/15" aria-label="Monday, June 15th, 2026">
                              {"15"}
                              <span className="-translate-x-1/2 absolute bottom-0.5 flex gap-0.5 left-1/2">
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(245, 158, 11)"}}></span>
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(14, 165, 233)"}}></span>
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(16, 185, 129)"}}></span>
                              </span>
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-16">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/16" aria-label="Tuesday, June 16th, 2026">
                              {"16"}
                              <span className="-translate-x-1/2 absolute bottom-0.5 flex gap-0.5 left-1/2">
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(244, 63, 94)"}}></span>
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(245, 158, 11)"}}></span>
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(14, 165, 233)"}}></span>
                              </span>
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-17">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/17" aria-label="Wednesday, June 17th, 2026">
                              {"17"}
                              <span className="-translate-x-1/2 absolute bottom-0.5 flex gap-0.5 left-1/2">
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(16, 185, 129)"}}></span>
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(245, 158, 11)"}}></span>
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(244, 63, 94)"}}></span>
                              </span>
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-18">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/18" aria-label="Thursday, June 18th, 2026">
                              {"18"}
                              <span className="-translate-x-1/2 absolute bottom-0.5 flex gap-0.5 left-1/2">
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(245, 158, 11)"}}></span>
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(14, 165, 233)"}}></span>
                              </span>
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-19">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/19" aria-label="Friday, June 19th, 2026">
                              {"19"}
                              <span className="-translate-x-1/2 absolute bottom-0.5 flex gap-0.5 left-1/2">
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(14, 165, 233)"}}></span>
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(245, 158, 11)"}}></span>
                              </span>
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-20">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/20" aria-label="Saturday, June 20th, 2026">
                              {"20"}
                              <span className="-translate-x-1/2 absolute bottom-0.5 flex gap-0.5 left-1/2">
                                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(139, 92, 246)"}}></span>
                              </span>
                            </Button>
                          </td>
                        </tr>
                        <tr className="flex gap-1 mt-1">
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-21">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/21" aria-label="Sunday, June 21st, 2026">
                              {"21"}
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-22">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/22" aria-label="Monday, June 22nd, 2026">
                              {"22"}
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-23">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/23" aria-label="Tuesday, June 23rd, 2026">
                              {"23"}
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-24">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/24" aria-label="Wednesday, June 24th, 2026">
                              {"24"}
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-25">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/25" aria-label="Thursday, June 25th, 2026">
                              {"25"}
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-26">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/26" aria-label="Friday, June 26th, 2026">
                              {"26"}
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-27">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/27" aria-label="Saturday, June 27th, 2026">
                              {"27"}
                            </Button>
                          </td>
                        </tr>
                        <tr className="flex gap-1 mt-1">
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-28">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/28" aria-label="Sunday, June 28th, 2026">
                              {"28"}
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-29">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/29" aria-label="Monday, June 29th, 2026">
                              {"29"}
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-30">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/6/30" aria-label="Tuesday, June 30th, 2026">
                              {"30"}
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 opacity-60 p-0" role="gridcell" data-day="2026-07-01" data-month="2026-07" data-outside="true">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/1" aria-label="Wednesday, July 1st, 2026">
                              {"1"}
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 opacity-60 p-0" role="gridcell" data-day="2026-07-02" data-month="2026-07" data-outside="true">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/2" aria-label="Thursday, July 2nd, 2026">
                              {"2"}
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 opacity-60 p-0" role="gridcell" data-day="2026-07-03" data-month="2026-07" data-outside="true">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/3" aria-label="Friday, July 3rd, 2026">
                              {"3"}
                            </Button>
                          </td>
                          <td className="aspect-square flex-1 opacity-60 p-0" role="gridcell" data-day="2026-07-04" data-month="2026-07" data-outside="true">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex="-1" day="2026/7/4" aria-label="Saturday, July 4th, 2026">
                              {"4"}
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
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <div className="flex flex-col gap-3 min-h-[330px] p-5">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-foreground text-sm">
                {"June 9, 2026"}
              </span>
              <Button className="p-0 size-7" type="button" tabIndex="0">
                <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </Button>
            </div>
            <div className="gap-2 grid grid-cols-3 lg:grid-cols-3">
              <Button type="button" tabIndex="0">
                {"All"}
              </Button>
              <Button type="button" tabIndex="0">
                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(139, 92, 246)"}}></span>
                {"Sprint"}
              </Button>
              <Button type="button" tabIndex="0">
                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(245, 158, 11)"}}></span>
                {"Standup"}
              </Button>
              <Button type="button" tabIndex="0">
                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(14, 165, 233)"}}></span>
                {"Review"}
              </Button>
              <Button type="button" tabIndex="0">
                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(244, 63, 94)"}}></span>
                {"Deadline"}
              </Button>
              <Button type="button" tabIndex="0">
                <span className="rounded-full size-1" aria-hidden="true" style={{backgroundColor: "rgb(16, 185, 129)"}}></span>
                {"Workshop"}
              </Button>
            </div>
            <div className="flex max-h-full relative">
              <ScrollArea className="**:data-[slot=scroll-area-thumb]:bg-foreground/15 **:data-[slot=scroll-area-thumb]:rounded-full **:data-[slot=scroll-area-viewport]:[--fade-size:1.5rem] **:data-[slot=scroll-area-viewport]:mask-b-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-y-end)))] **:data-[slot=scroll-area-viewport]:mask-t-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-y-start)))] -mr-3.5 grow max-h-[180px] pr-3.5" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
                <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_6_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "192px"}} data-has-overflow-y="" data-overflow-y-end="">
                  <div className="flex flex-col gap-2">
                    <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none gap-2.5 group/button h-auto inline-flex items-start justify-center outline-none py-2 select-none shrink-0 text-start transition-all whitespace-nowrap">
                      <span className="rounded-full self-stretch shrink-0 w-1" aria-hidden="true" style={{backgroundColor: "rgb(139, 92, 246)"}}></span>
                      <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                        <span className="font-medium leading-snug text-foreground text-sm truncate">
                          {"Sprint Kickoff"}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {"Jun 9, 9:00 - 10:30"}
                        </span>
                      </div>
                      <AvatarGroup className="-space-x-1.5">
                        <Avatar className="size-4!" size="default">
                          <AvatarImage alt="Alex Chen" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <Avatar className="size-4!" size="default">
                          <AvatarImage alt="Priya Singh" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <Avatar className="size-4!" size="default">
                          <AvatarImage alt="Marcus Webb" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <AvatarGroupCount className="size-4! text-[10px]">
                          <Popover>
                          <PopoverTrigger className="flex focus-visible:ring-2 focus-visible:ring-ring/50 hover:text-foreground items-center justify-center outline-none rounded-full size-full tabular-nums" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_8_" aria-haspopup="dialog" aria-expanded="false" aria-label="1 more: Sofia Reyes">
                            {"+1"}
                          </PopoverTrigger>
                          </Popover>
                        </AvatarGroupCount>
                      </AvatarGroup>
                    </div>
                    <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none gap-2.5 group/button h-auto inline-flex items-start justify-center outline-none py-2 select-none shrink-0 text-start transition-all whitespace-nowrap">
                      <span className="rounded-full self-stretch shrink-0 w-1" aria-hidden="true" style={{backgroundColor: "rgb(245, 158, 11)"}}></span>
                      <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                        <span className="font-medium leading-snug text-foreground text-sm truncate">
                          {"Eng Standup"}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {"Jun 9, 9:30 - 9:45"}
                        </span>
                      </div>
                      <AvatarGroup className="-space-x-1.5">
                        <Avatar className="size-4!" size="default">
                          <AvatarImage alt="Alex Chen" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <Avatar className="size-4!" size="default">
                          <AvatarImage alt="Marcus Webb" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <Avatar className="size-4!" size="default">
                          <AvatarImage alt="Liam Torres" src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=64&h=64&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                      </AvatarGroup>
                    </div>
                    <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none gap-2.5 group/button h-auto inline-flex items-start justify-center outline-none py-2 select-none shrink-0 text-start transition-all whitespace-nowrap">
                      <span className="rounded-full self-stretch shrink-0 w-1" aria-hidden="true" style={{backgroundColor: "rgb(14, 165, 233)"}}></span>
                      <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                        <span className="font-medium leading-snug text-foreground text-sm truncate">
                          {"Design Review"}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {"Jun 9, 11:00 - 12:00"}
                        </span>
                      </div>
                      <AvatarGroup className="-space-x-1.5">
                        <Avatar className="size-4!" size="default">
                          <AvatarImage alt="Priya Singh" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <Avatar className="size-4!" size="default">
                          <AvatarImage alt="Sofia Reyes" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=64&h=64&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <Avatar className="size-4!" size="default">
                          <AvatarImage alt="Liam Torres" src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=64&h=64&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                      </AvatarGroup>
                    </div>
                    <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none gap-2.5 group/button h-auto inline-flex items-start justify-center outline-none py-2 select-none shrink-0 text-start transition-all whitespace-nowrap">
                      <span className="rounded-full self-stretch shrink-0 w-1" aria-hidden="true" style={{backgroundColor: "rgb(245, 158, 11)"}}></span>
                      <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                        <span className="font-medium leading-snug text-foreground text-sm truncate">
                          {"Product Sync"}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {"Jun 9, 13:00 - 13:15"}
                        </span>
                      </div>
                      <AvatarGroup className="-space-x-1.5">
                        <Avatar className="size-4!" size="default">
                          <AvatarImage alt="Alex Chen" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <Avatar className="size-4!" size="default">
                          <AvatarImage alt="Priya Singh" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                      </AvatarGroup>
                    </div>
                    <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none gap-2.5 group/button h-auto inline-flex items-start justify-center outline-none py-2 select-none shrink-0 text-start transition-all whitespace-nowrap">
                      <span className="rounded-full self-stretch shrink-0 w-1" aria-hidden="true" style={{backgroundColor: "rgb(16, 185, 129)"}}></span>
                      <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                        <span className="font-medium leading-snug text-foreground text-sm truncate">
                          {"Figma Workshop"}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {"Jun 9, 14:00 - 15:30"}
                        </span>
                      </div>
                      <AvatarGroup className="-space-x-1.5">
                        <Avatar className="size-4!" size="default">
                          <AvatarImage alt="Alex Chen" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <Avatar className="size-4!" size="default">
                          <AvatarImage alt="Marcus Webb" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <Avatar className="size-4!" size="default">
                          <AvatarImage alt="Sofia Reyes" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=64&h=64&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <AvatarGroupCount className="size-4! text-[10px]">
                          <Popover>
                          <PopoverTrigger className="flex focus-visible:ring-2 focus-visible:ring-ring/50 hover:text-foreground items-center justify-center outline-none rounded-full size-full tabular-nums" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_a_" aria-haspopup="dialog" aria-expanded="false" aria-label="1 more: Liam Torres">
                            {"+1"}
                          </PopoverTrigger>
                          </Popover>
                        </AvatarGroupCount>
                      </AvatarGroup>
                    </div>
                    <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none gap-2.5 group/button h-auto inline-flex items-start justify-center outline-none py-2 select-none shrink-0 text-start transition-all whitespace-nowrap">
                      <span className="rounded-full self-stretch shrink-0 w-1" aria-hidden="true" style={{backgroundColor: "rgb(244, 63, 94)"}}></span>
                      <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                        <span className="font-medium leading-snug text-foreground text-sm truncate">
                          {"Auth Deadline"}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {"Jun 9, 17:00 - 17:00"}
                        </span>
                      </div>
                      <AvatarGroup className="-space-x-1.5">
                        <Avatar className="size-4!" size="default">
                          <AvatarImage alt="Alex Chen" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <Avatar className="size-4!" size="default">
                          <AvatarImage alt="Marcus Webb" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                      </AvatarGroup>
                    </div>
                  </div>
                </div>
                <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_6_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "86.12903225806451px"}}>
                  <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}
