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
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { ItemGroup } from "@/registry/bases/base/ui/item"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 p-10 w-full">
      <Frame className="max-w-md w-full">
        <FramePanel className="p-0!">
          <div className="flex flex-col gap-4 items-center justify-center p-5 select-none">
            <div className="flex gap-1 grow items-center justify-between w-full">
              <Select>
              <SelectTrigger className="shrink-0 w-30" type="button" tabIndex={0} id="base-ui-_r_0_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" extracted="1">
                <SelectValue>
                  {"June"}
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  {"▼"}
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_0_-hidden-input" tabIndex={-1} aria-hidden="true" value="June" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-between outline-none select-none shrink-0 transition-all w-30 whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_6_" aria-expanded="false">
                <span className="flex gap-1.5 items-center">
                  {"Filter"}
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 leading-none min-w-4 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.6rem] transition-shadow">
                    {"3"}
                  </Badge>
                </span>
                <svg className="lucide lucide-chevron-down opacity-50 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
            <Calendar className="bg-transparent rdp-root rtl:**:[.rdp-button\\_next>svg]:rotate-180 rtl:**:[.rdp-button\\_previous>svg]:rotate-180" lang="en-US" mode="single">
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
                        <th className="flex flex-1 font-medium h-6 items-center justify-center rounded-md text-muted-foreground text-xs" scope="col" aria-label="Sunday">
                          {"SUN"}
                        </th>
                        <th className="flex flex-1 font-medium h-6 items-center justify-center rounded-md text-muted-foreground text-xs" scope="col" aria-label="Monday">
                          {"MON"}
                        </th>
                        <th className="bg-accent flex flex-1 font-medium h-6 items-center justify-center rounded-md text-foreground! text-muted-foreground text-xs" scope="col" aria-label="Tuesday">
                          {"TUE"}
                        </th>
                        <th className="flex flex-1 font-medium h-6 items-center justify-center rounded-md text-muted-foreground text-xs" scope="col" aria-label="Wednesday">
                          {"WED"}
                        </th>
                        <th className="flex flex-1 font-medium h-6 items-center justify-center rounded-md text-muted-foreground text-xs" scope="col" aria-label="Thursday">
                          {"THU"}
                        </th>
                        <th className="flex flex-1 font-medium h-6 items-center justify-center rounded-md text-muted-foreground text-xs" scope="col" aria-label="Friday">
                          {"FRI"}
                        </th>
                        <th className="flex flex-1 font-medium h-6 items-center justify-center rounded-md text-muted-foreground text-xs" scope="col" aria-label="Saturday">
                          {"SAT"}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="rdp-weeks">
                      <tr className="flex gap-1 mt-1">
                        <td className="aspect-square flex-1 opacity-60 p-0" role="gridcell" data-day="2026-05-31" data-month="2026-05" data-outside="true">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/5/31" aria-label="Sunday, May 31st, 2026">
                            {"31"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-01">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/1" aria-label="Monday, June 1st, 2026">
                            {"1"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-02">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/2" aria-label="Tuesday, June 2nd, 2026">
                            {"2"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-03">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/3" aria-label="Wednesday, June 3rd, 2026">
                            {"3"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-04">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/4" aria-label="Thursday, June 4th, 2026">
                            {"4"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-05">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/5" aria-label="Friday, June 5th, 2026">
                            {"5"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-06">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/6" aria-label="Saturday, June 6th, 2026">
                            {"6"}
                          </Button>
                        </td>
                      </tr>
                      <tr className="flex gap-1 mt-1">
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-07">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/7" aria-label="Sunday, June 7th, 2026">
                            {"7"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-08">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/8" aria-label="Monday, June 8th, 2026">
                            {"8"}
                          </Button>
                        </td>
                        <td className="aspect-square bg-accent flex-1 p-0 rdp-selected rounded-md text-foreground" role="gridcell" aria-selected="true" data-day="2026-06-09" data-selected="true" data-today="true">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={0} day="2026/6/9" selectedSingle="true" aria-label="Today, Tuesday, June 9th, 2026, selected">
                            {"9"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-10">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/10" aria-label="Wednesday, June 10th, 2026">
                            {"10"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-11">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/11" aria-label="Thursday, June 11th, 2026">
                            {"11"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-12">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/12" aria-label="Friday, June 12th, 2026">
                            {"12"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-13">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/13" aria-label="Saturday, June 13th, 2026">
                            {"13"}
                          </Button>
                        </td>
                      </tr>
                      <tr className="flex gap-1 mt-1">
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-14">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/14" aria-label="Sunday, June 14th, 2026">
                            {"14"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-15">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/15" aria-label="Monday, June 15th, 2026">
                            {"15"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-16">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/16" aria-label="Tuesday, June 16th, 2026">
                            {"16"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-17">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/17" aria-label="Wednesday, June 17th, 2026">
                            {"17"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-18">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/18" aria-label="Thursday, June 18th, 2026">
                            {"18"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-19">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/19" aria-label="Friday, June 19th, 2026">
                            {"19"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-20">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/20" aria-label="Saturday, June 20th, 2026">
                            {"20"}
                          </Button>
                        </td>
                      </tr>
                      <tr className="flex gap-1 mt-1">
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-21">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/21" aria-label="Sunday, June 21st, 2026">
                            {"21"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-22">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/22" aria-label="Monday, June 22nd, 2026">
                            {"22"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-23">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/23" aria-label="Tuesday, June 23rd, 2026">
                            {"23"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-24">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/24" aria-label="Wednesday, June 24th, 2026">
                            {"24"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-25">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/25" aria-label="Thursday, June 25th, 2026">
                            {"25"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-26">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/26" aria-label="Friday, June 26th, 2026">
                            {"26"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-27">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/27" aria-label="Saturday, June 27th, 2026">
                            {"27"}
                          </Button>
                        </td>
                      </tr>
                      <tr className="flex gap-1 mt-1">
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-28">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/28" aria-label="Sunday, June 28th, 2026">
                            {"28"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-29">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/29" aria-label="Monday, June 29th, 2026">
                            {"29"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 p-0" role="gridcell" data-day="2026-06-30">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/30" aria-label="Tuesday, June 30th, 2026">
                            {"30"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 opacity-60 p-0" role="gridcell" data-day="2026-07-01" data-month="2026-07" data-outside="true">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/7/1" aria-label="Wednesday, July 1st, 2026">
                            {"1"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 opacity-60 p-0" role="gridcell" data-day="2026-07-02" data-month="2026-07" data-outside="true">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/7/2" aria-label="Thursday, July 2nd, 2026">
                            {"2"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 opacity-60 p-0" role="gridcell" data-day="2026-07-03" data-month="2026-07" data-outside="true">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/7/3" aria-label="Friday, July 3rd, 2026">
                            {"3"}
                          </Button>
                        </td>
                        <td className="aspect-square flex-1 opacity-60 p-0" role="gridcell" data-day="2026-07-04" data-month="2026-07" data-outside="true">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square bg-muted/50 border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-primary-foreground! data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto w-full z-10" type="button" tabIndex={-1} day="2026/7/4" aria-label="Saturday, July 4th, 2026">
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
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <div className="flex flex-col gap-2 px-5 py-3.5">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-foreground text-xs">
                {"Vertex Studio · Today"}
              </span>
              <Button className="-me-1.5 -my-1 text-muted-foreground" type="button" tabIndex={0}>
                {"All"}
              </Button>
            </div>
            <AvatarGroup>
              <Avatar size="sm">
                <AvatarImage alt="Zara Okafor" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage alt="Felix Nakamura" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage alt="Isla Petrov" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage alt="Theo Morales" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <AvatarGroupCount className="leading-none size-6 text-[10px]">
                <Popover>
                <PopoverTrigger className="flex focus-visible:ring-2 focus-visible:ring-ring/50 hover:text-foreground items-center justify-center outline-none rounded-full size-full tabular-nums" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_9_" aria-haspopup="dialog" aria-expanded="false" aria-label="4 more: Nina Hartley, Kai Svensson, Luna Baptiste, Remy Dubois">
                  {"+4"}
                </PopoverTrigger>
                </Popover>
              </AvatarGroupCount>
            </AvatarGroup>
          </div>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <ItemGroup className="gap-3 p-4" role="list">
            <Item className="gap-3 justify-between" variant="outline" size="sm">
              <div className="flex gap-1.5 items-center min-w-0">
                <span className="font-semibold text-foreground text-xs">
                  {"Attendance"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                  {"6/8"}
                </Badge>
              </div>
              <ChartContainer>
              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto! aspect-video cn-chart flex h-5 justify-center shrink-0 text-xs w-25" data-chart="chart-_r_a_">
                <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_a_] {\n  --color-value: var(--chart-1);\n}\n\n\n.dark [data-chart=chart-_r_a_] {\n  --color-value: var(--chart-1);\n}\n" }} />
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width={100} height={20} style={{position: "relative", cursor: "default", width: "100px", height: "20px"}}>
                      <svg className="recharts-surface" role="application" tabIndex={0} width={100} height={20} viewBox="0 0 100 20" style={{width: "100%", height: "100%", display: "block"}}>
                        <title></title>
                        <desc></desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                        <defs>
                          <clippath id="recharts1-clip">
                            <rect x={0} y={0} height={20} width={100}></rect>
                          </clippath>
                        </defs>
                        <g className="recharts-zIndex-layer_100" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_300" tabIndex={-1}>
                          <g className="recharts-bar recharts-layer" id="recharts-bar-_r_d_">
                            <g className="recharts-bar-rectangles recharts-layer">
                              <g className="recharts-layer">
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={0.5} y={5} width={4} height={15} d={"M0.5,6A 1,1,0,0,1,1.5,5L 3.5,5A 1,1,0,0,1,\n        4.5,6L 4.5,20L 0.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={5.5} y={2.5} width={4} height={17.5} d={"M5.5,3.5A 1,1,0,0,1,6.5,2.5L 8.5,2.5A 1,1,0,0,1,\n        9.5,3.5L 9.5,20L 5.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={10.5} y={7.5} width={4} height={12.5} d={"M10.5,8.5A 1,1,0,0,1,11.5,7.5L 13.5,7.5A 1,1,0,0,1,\n        14.5,8.5L 14.5,20L 10.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={15.5} y={0} width={4} height={20} d={"M15.5,1A 1,1,0,0,1,16.5,0L 18.5,0A 1,1,0,0,1,\n        19.5,1L 19.5,20L 15.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={20.5} y={2.5} width={4} height={17.5} d={"M20.5,3.5A 1,1,0,0,1,21.5,2.5L 23.5,2.5A 1,1,0,0,1,\n        24.5,3.5L 24.5,20L 20.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={25.5} y={10} width={4} height={10} d={"M25.5,11A 1,1,0,0,1,26.5,10L 28.5,10A 1,1,0,0,1,\n        29.5,11L 29.5,20L 25.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={30.5} y={12.5} width={4} height={7.5} d={"M30.5,13.5A 1,1,0,0,1,31.5,12.5L 33.5,12.5A 1,1,0,0,1,\n        34.5,13.5L 34.5,20L 30.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={35.5} y={5} width={4} height={15} d={"M35.5,6A 1,1,0,0,1,36.5,5L 38.5,5A 1,1,0,0,1,\n        39.5,6L 39.5,20L 35.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={40.5} y={0} width={4} height={20} d={"M40.5,1A 1,1,0,0,1,41.5,0L 43.5,0A 1,1,0,0,1,\n        44.5,1L 44.5,20L 40.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={45.5} y={7.5} width={4} height={12.5} d={"M45.5,8.5A 1,1,0,0,1,46.5,7.5L 48.5,7.5A 1,1,0,0,1,\n        49.5,8.5L 49.5,20L 45.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={50.5} y={2.5} width={4} height={17.5} d={"M50.5,3.5A 1,1,0,0,1,51.5,2.5L 53.5,2.5A 1,1,0,0,1,\n        54.5,3.5L 54.5,20L 50.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={55.5} y={5} width={4} height={15} d={"M55.5,6A 1,1,0,0,1,56.5,5L 58.5,5A 1,1,0,0,1,\n        59.5,6L 59.5,20L 55.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={60.5} y={10} width={4} height={10} d={"M60.5,11A 1,1,0,0,1,61.5,10L 63.5,10A 1,1,0,0,1,\n        64.5,11L 64.5,20L 60.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={65.5} y={7.5} width={4} height={12.5} d={"M65.5,8.5A 1,1,0,0,1,66.5,7.5L 68.5,7.5A 1,1,0,0,1,\n        69.5,8.5L 69.5,20L 65.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={70.5} y={2.5} width={4} height={17.5} d={"M70.5,3.5A 1,1,0,0,1,71.5,2.5L 73.5,2.5A 1,1,0,0,1,\n        74.5,3.5L 74.5,20L 70.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={75.5} y={0} width={4} height={20} d={"M75.5,1A 1,1,0,0,1,76.5,0L 78.5,0A 1,1,0,0,1,\n        79.5,1L 79.5,20L 75.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={80.5} y={5} width={4} height={15} d={"M80.5,6A 1,1,0,0,1,81.5,5L 83.5,5A 1,1,0,0,1,\n        84.5,6L 84.5,20L 80.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={85.5} y={7.5} width={4} height={12.5} d={"M85.5,8.5A 1,1,0,0,1,86.5,7.5L 88.5,7.5A 1,1,0,0,1,\n        89.5,8.5L 89.5,20L 85.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={90.5} y={2.5} width={4} height={17.5} d={"M90.5,3.5A 1,1,0,0,1,91.5,2.5L 93.5,2.5A 1,1,0,0,1,\n        94.5,3.5L 94.5,20L 90.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={95.5} y={0} width={4} height={20} d={"M95.5,1A 1,1,0,0,1,96.5,0L 98.5,0A 1,1,0,0,1,\n        99.5,1L 99.5,20L 95.5,20Z"}></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_400" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_500" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_600" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_1000" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_1100" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_1200" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_2000" tabIndex={-1}></g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              </ChartContainer>
            </Item>
            <Item className="gap-3 justify-between" variant="outline" size="sm">
              <div className="flex gap-1.5 items-center min-w-0">
                <span className="font-semibold text-foreground text-xs">
                  {"Absences"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
                  {"1/8"}
                </Badge>
              </div>
              <ChartContainer>
              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto! aspect-video cn-chart flex h-5 justify-center shrink-0 text-xs w-25" data-chart="chart-_r_b_">
                <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_b_] {\n  --color-value: var(--chart-2);\n}\n\n\n.dark [data-chart=chart-_r_b_] {\n  --color-value: var(--chart-2);\n}\n" }} />
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width={100} height={20} style={{position: "relative", cursor: "default", width: "100px", height: "20px"}}>
                      <svg className="recharts-surface" role="application" tabIndex={0} width={100} height={20} viewBox="0 0 100 20" style={{width: "100%", height: "100%", display: "block"}}>
                        <title></title>
                        <desc></desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                        <defs>
                          <clippath id="recharts2-clip">
                            <rect x={0} y={0} height={20} width={100}></rect>
                          </clippath>
                        </defs>
                        <g className="recharts-zIndex-layer_100" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_300" tabIndex={-1}>
                          <g className="recharts-bar recharts-layer" id="recharts-bar-_r_e_">
                            <g className="recharts-bar-rectangles recharts-layer">
                              <g className="recharts-layer">
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={0.5} y={13.3333} width={4} height={6.6667} d={"M0.5,14.3333A 1,1,0,0,1,1.5,13.3333L 3.5,13.3333A 1,1,0,0,1,\n        4.5,14.3333L 4.5,20L 0.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={5.5} y={6.6667} width={4} height={13.3333} d={"M5.5,7.6667A 1,1,0,0,1,6.5,6.6667L 8.5,6.6667A 1,1,0,0,1,\n        9.5,7.6667L 9.5,20L 5.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={10.5} y={13.3333} width={4} height={6.6667} d={"M10.5,14.3333A 1,1,0,0,1,11.5,13.3333L 13.5,13.3333A 1,1,0,0,1,\n        14.5,14.3333L 14.5,20L 10.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={15.5} y={0} width={4} height={20} d={"M15.5,1A 1,1,0,0,1,16.5,0L 18.5,0A 1,1,0,0,1,\n        19.5,1L 19.5,20L 15.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={20.5} y={13.3333} width={4} height={6.6667} d={"M20.5,14.3333A 1,1,0,0,1,21.5,13.3333L 23.5,13.3333A 1,1,0,0,1,\n        24.5,14.3333L 24.5,20L 20.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={25.5} y={6.6667} width={4} height={13.3333} d={"M25.5,7.6667A 1,1,0,0,1,26.5,6.6667L 28.5,6.6667A 1,1,0,0,1,\n        29.5,7.6667L 29.5,20L 25.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={30.5} y={13.3333} width={4} height={6.6667} d={"M30.5,14.3333A 1,1,0,0,1,31.5,13.3333L 33.5,13.3333A 1,1,0,0,1,\n        34.5,14.3333L 34.5,20L 30.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={35.5} y={6.6667} width={4} height={13.3333} d={"M35.5,7.6667A 1,1,0,0,1,36.5,6.6667L 38.5,6.6667A 1,1,0,0,1,\n        39.5,7.6667L 39.5,20L 35.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={40.5} y={13.3333} width={4} height={6.6667} d={"M40.5,14.3333A 1,1,0,0,1,41.5,13.3333L 43.5,13.3333A 1,1,0,0,1,\n        44.5,14.3333L 44.5,20L 40.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={45.5} y={13.3333} width={4} height={6.6667} d={"M45.5,14.3333A 1,1,0,0,1,46.5,13.3333L 48.5,13.3333A 1,1,0,0,1,\n        49.5,14.3333L 49.5,20L 45.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={50.5} y={0} width={4} height={20} d={"M50.5,1A 1,1,0,0,1,51.5,0L 53.5,0A 1,1,0,0,1,\n        54.5,1L 54.5,20L 50.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={55.5} y={6.6667} width={4} height={13.3333} d={"M55.5,7.6667A 1,1,0,0,1,56.5,6.6667L 58.5,6.6667A 1,1,0,0,1,\n        59.5,7.6667L 59.5,20L 55.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={60.5} y={13.3333} width={4} height={6.6667} d={"M60.5,14.3333A 1,1,0,0,1,61.5,13.3333L 63.5,13.3333A 1,1,0,0,1,\n        64.5,14.3333L 64.5,20L 60.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={65.5} y={6.6667} width={4} height={13.3333} d={"M65.5,7.6667A 1,1,0,0,1,66.5,6.6667L 68.5,6.6667A 1,1,0,0,1,\n        69.5,7.6667L 69.5,20L 65.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={70.5} y={13.3333} width={4} height={6.6667} d={"M70.5,14.3333A 1,1,0,0,1,71.5,13.3333L 73.5,13.3333A 1,1,0,0,1,\n        74.5,14.3333L 74.5,20L 70.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={75.5} y={13.3333} width={4} height={6.6667} d={"M75.5,14.3333A 1,1,0,0,1,76.5,13.3333L 78.5,13.3333A 1,1,0,0,1,\n        79.5,14.3333L 79.5,20L 75.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={80.5} y={6.6667} width={4} height={13.3333} d={"M80.5,7.6667A 1,1,0,0,1,81.5,6.6667L 83.5,6.6667A 1,1,0,0,1,\n        84.5,7.6667L 84.5,20L 80.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={85.5} y={13.3333} width={4} height={6.6667} d={"M85.5,14.3333A 1,1,0,0,1,86.5,13.3333L 88.5,13.3333A 1,1,0,0,1,\n        89.5,14.3333L 89.5,20L 85.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={90.5} y={6.6667} width={4} height={13.3333} d={"M90.5,7.6667A 1,1,0,0,1,91.5,6.6667L 93.5,6.6667A 1,1,0,0,1,\n        94.5,7.6667L 94.5,20L 90.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={95.5} y={13.3333} width={4} height={6.6667} d={"M95.5,14.3333A 1,1,0,0,1,96.5,13.3333L 98.5,13.3333A 1,1,0,0,1,\n        99.5,14.3333L 99.5,20L 95.5,20Z"}></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_400" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_500" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_600" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_1000" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_1100" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_1200" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_2000" tabIndex={-1}></g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              </ChartContainer>
            </Item>
            <Item className="gap-3 justify-between" variant="outline" size="sm">
              <div className="flex gap-1.5 items-center min-w-0">
                <span className="font-semibold text-foreground text-xs">
                  {"Delayed"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-warning-foreground transition-shadow">
                  {"1/8"}
                </Badge>
              </div>
              <ChartContainer>
              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto! aspect-video cn-chart flex h-5 justify-center shrink-0 text-xs w-25" data-chart="chart-_r_c_">
                <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_c_] {\n  --color-value: var(--chart-4);\n}\n\n\n.dark [data-chart=chart-_r_c_] {\n  --color-value: var(--chart-4);\n}\n" }} />
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width={100} height={20} style={{position: "relative", cursor: "default", width: "100px", height: "20px"}}>
                      <svg className="recharts-surface" role="application" tabIndex={0} width={100} height={20} viewBox="0 0 100 20" style={{width: "100%", height: "100%", display: "block"}}>
                        <title></title>
                        <desc></desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                        <defs>
                          <clippath id="recharts3-clip">
                            <rect x={0} y={0} height={20} width={100}></rect>
                          </clippath>
                        </defs>
                        <g className="recharts-zIndex-layer_100" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_300" tabIndex={-1}>
                          <g className="recharts-bar recharts-layer" id="recharts-bar-_r_f_">
                            <g className="recharts-bar-rectangles recharts-layer">
                              <g className="recharts-layer">
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={0.5} y={13.3333} width={4} height={6.6667} d={"M0.5,14.3333A 1,1,0,0,1,1.5,13.3333L 3.5,13.3333A 1,1,0,0,1,\n        4.5,14.3333L 4.5,20L 0.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={5.5} y={6.6667} width={4} height={13.3333} d={"M5.5,7.6667A 1,1,0,0,1,6.5,6.6667L 8.5,6.6667A 1,1,0,0,1,\n        9.5,7.6667L 9.5,20L 5.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={10.5} y={13.3333} width={4} height={6.6667} d={"M10.5,14.3333A 1,1,0,0,1,11.5,13.3333L 13.5,13.3333A 1,1,0,0,1,\n        14.5,14.3333L 14.5,20L 10.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={15.5} y={6.6667} width={4} height={13.3333} d={"M15.5,7.6667A 1,1,0,0,1,16.5,6.6667L 18.5,6.6667A 1,1,0,0,1,\n        19.5,7.6667L 19.5,20L 15.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={20.5} y={13.3333} width={4} height={6.6667} d={"M20.5,14.3333A 1,1,0,0,1,21.5,13.3333L 23.5,13.3333A 1,1,0,0,1,\n        24.5,14.3333L 24.5,20L 20.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={25.5} y={0} width={4} height={20} d={"M25.5,1A 1,1,0,0,1,26.5,0L 28.5,0A 1,1,0,0,1,\n        29.5,1L 29.5,20L 25.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={30.5} y={13.3333} width={4} height={6.6667} d={"M30.5,14.3333A 1,1,0,0,1,31.5,13.3333L 33.5,13.3333A 1,1,0,0,1,\n        34.5,14.3333L 34.5,20L 30.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={35.5} y={6.6667} width={4} height={13.3333} d={"M35.5,7.6667A 1,1,0,0,1,36.5,6.6667L 38.5,6.6667A 1,1,0,0,1,\n        39.5,7.6667L 39.5,20L 35.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={40.5} y={13.3333} width={4} height={6.6667} d={"M40.5,14.3333A 1,1,0,0,1,41.5,13.3333L 43.5,13.3333A 1,1,0,0,1,\n        44.5,14.3333L 44.5,20L 40.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={45.5} y={6.6667} width={4} height={13.3333} d={"M45.5,7.6667A 1,1,0,0,1,46.5,6.6667L 48.5,6.6667A 1,1,0,0,1,\n        49.5,7.6667L 49.5,20L 45.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={50.5} y={6.6667} width={4} height={13.3333} d={"M50.5,7.6667A 1,1,0,0,1,51.5,6.6667L 53.5,6.6667A 1,1,0,0,1,\n        54.5,7.6667L 54.5,20L 50.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={55.5} y={13.3333} width={4} height={6.6667} d={"M55.5,14.3333A 1,1,0,0,1,56.5,13.3333L 58.5,13.3333A 1,1,0,0,1,\n        59.5,14.3333L 59.5,20L 55.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={60.5} y={0} width={4} height={20} d={"M60.5,1A 1,1,0,0,1,61.5,0L 63.5,0A 1,1,0,0,1,\n        64.5,1L 64.5,20L 60.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={65.5} y={13.3333} width={4} height={6.6667} d={"M65.5,14.3333A 1,1,0,0,1,66.5,13.3333L 68.5,13.3333A 1,1,0,0,1,\n        69.5,14.3333L 69.5,20L 65.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={70.5} y={13.3333} width={4} height={6.6667} d={"M70.5,14.3333A 1,1,0,0,1,71.5,13.3333L 73.5,13.3333A 1,1,0,0,1,\n        74.5,14.3333L 74.5,20L 70.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={75.5} y={6.6667} width={4} height={13.3333} d={"M75.5,7.6667A 1,1,0,0,1,76.5,6.6667L 78.5,6.6667A 1,1,0,0,1,\n        79.5,7.6667L 79.5,20L 75.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={80.5} y={13.3333} width={4} height={6.6667} d={"M80.5,14.3333A 1,1,0,0,1,81.5,13.3333L 83.5,13.3333A 1,1,0,0,1,\n        84.5,14.3333L 84.5,20L 80.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={85.5} y={13.3333} width={4} height={6.6667} d={"M85.5,14.3333A 1,1,0,0,1,86.5,13.3333L 88.5,13.3333A 1,1,0,0,1,\n        89.5,14.3333L 89.5,20L 85.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={90.5} y={6.6667} width={4} height={13.3333} d={"M90.5,7.6667A 1,1,0,0,1,91.5,6.6667L 93.5,6.6667A 1,1,0,0,1,\n        94.5,7.6667L 94.5,20L 90.5,20Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-value)" name="undefined" x={95.5} y={13.3333} width={4} height={6.6667} d={"M95.5,14.3333A 1,1,0,0,1,96.5,13.3333L 98.5,13.3333A 1,1,0,0,1,\n        99.5,14.3333L 99.5,20L 95.5,20Z"}></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_400" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_500" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_600" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_1000" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_1100" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_1200" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_2000" tabIndex={-1}></g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              </ChartContainer>
            </Item>
          </ItemGroup>
        </FramePanel>
      </Frame>
    </div>
  )
}
