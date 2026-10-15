import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="flex items-start justify-center max-w-7xl min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Timesheet data grid"}
      </h1>
      <Frame className="w-full">
        <header className="flex flex-col gap-3 px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-px">
            <div className="font-semibold text-balance text-sm">
              {"Timesheets"}
            </div>
            <div className="text-muted-foreground text-pretty text-xs">
              {"Weekly team timesheets"}
            </div>
          </div>
          <Button className="sm:w-auto w-full" type="button" tabIndex="0" extracted="1">
            {"New entry"}
          </Button>
        </header>
        <FramePanel className="bg-card p-0! shadow-none!">
          <div className="flex flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-2.5">
            <div className="flex flex-wrap gap-2 items-center">
              <Select>
              <SelectTrigger className="w-[180px]" type="button" tabIndex="0" id="base-ui-_r_1_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                <SelectValue>
                  {"People"}
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  {"▼"}
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_1_-hidden-input" tabIndex="-1" aria-hidden="true" value="everyone" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              <Select>
              <SelectTrigger className="w-[180px]" type="button" tabIndex="0" id="base-ui-_r_4_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                <SelectValue>
                  {"Tracked time"}
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  {"▼"}
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_4_-hidden-input" tabIndex="-1" aria-hidden="true" value="any" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              <Select>
              <SelectTrigger className="w-[180px]" type="button" tabIndex="0" id="base-ui-_r_7_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                <SelectValue>
                  {"Billable status"}
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  {"▼"}
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_7_-hidden-input" tabIndex="-1" aria-hidden="true" value="any" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-end">
              <ButtonGroup role="group">
                <Button type="button" tabIndex="0" aria-label="Previous week">
                  <svg className="lucide lucide-chevron-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine" aria-hidden="true">
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                </Button>
                <Popover>
                <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-between outline-none select-none shrink-0 tabular-nums transition-all w-[168px] whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_b_" aria-haspopup="dialog" aria-expanded="false">
                  <span className="truncate">
                    {"Mar 23 - 29"}
                  </span>
                  <svg className="lucide lucide-calendar text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                </PopoverTrigger>
                </Popover>
                <Button type="button" tabIndex="0" aria-label="Next week">
                  <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </Button>
              </ButtonGroup>
            </div>
          </div>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <div className="relative">
            <DataGridProvider>
            <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
              <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_c_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                <div role="presentation" style={{minWidth: "fit-content"}}>
                  <DataGridProvider>
                  <DataGridTableViewport>
                    <DataGridProvider>
                    <DataGridTable>
                      <colgroup>
                        <col style={{width: "240px"}} />
                        <col style={{width: "112px"}} />
                        <col style={{width: "112px"}} />
                        <col style={{width: "112px"}} />
                        <col style={{width: "112px"}} />
                        <col style={{width: "112px"}} />
                        <col style={{width: "112px"}} />
                        <col style={{width: "112px"}} />
                        <col style={{width: "120px"}} />
                      </colgroup>
                      <thead>
                        <tr className="*:last:border-e-0 [&>th]:border-b bg-transparent">
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="person" data-header-id="person" data-header-depth="0" style={{width: "240px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                              {"People"}
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="2026-03-23" data-header-id="2026-03-23" data-header-depth="0" style={{width: "112px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                              {"Mon, Mar 23"}
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="2026-03-24" data-header-id="2026-03-24" data-header-depth="0" style={{width: "112px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                              {"Tue, Mar 24"}
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="2026-03-25" data-header-id="2026-03-25" data-header-depth="0" style={{width: "112px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                              {"Wed, Mar 25"}
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="2026-03-26" data-header-id="2026-03-26" data-header-depth="0" style={{width: "112px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                              {"Thu, Mar 26"}
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="2026-03-27" data-header-id="2026-03-27" data-header-depth="0" style={{width: "112px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                              {"Fri, Mar 27"}
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="2026-03-28" data-header-id="2026-03-28" data-header-depth="0" style={{width: "112px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                              {"Sat, Mar 28"}
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="2026-03-29" data-header-id="2026-03-29" data-header-depth="0" style={{width: "112px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                              {"Sun, Mar 29"}
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-right" scope="col" data-col-id="total" data-header-id="total" data-header-depth="0" style={{width: "120px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-end leading-[calc(1.125/0.8125)] text-[0.8125rem] text-right text-secondary-foreground/80 w-full">
                              {"Total"}
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <DataGridProvider>
                      <DataGridTableBody>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="amara-ortiz">
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <div className="relative shrink-0">
                                <Avatar className="size-8" size="default">
                                  <AvatarImage alt="Amara Ortiz" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </div>
                              <div className="flex flex-col leading-tight min-w-0">
                                <div className="font-medium text-foreground text-sm truncate">
                                  {"Amara Ortiz"}
                                </div>
                                <div className="pt-0.5 text-muted-foreground text-xs truncate" title="Client delivery lead">
                                  {"Client delivery lead"}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Monday, Mar 23: 6h 30m logged as client. Migration kickoff with Atlas Health" id="base-ui-_r_e_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"6h 30m"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "81.25%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Client"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Tuesday, Mar 24: 5h 30m logged as internal. Weekly staffing and margin review" id="base-ui-_r_g_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"5h 30m"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-sky-500 block h-full rounded-full" style={{width: "68.75%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Internal"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Wednesday, Mar 25: 7h logged as client. Pilot implementation sync" id="base-ui-_r_i_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"7h"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "87.5%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Client"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Thursday, Mar 26: 6h logged as client. Partner escalation planning" id="base-ui-_r_k_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"6h"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "75%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Client"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Friday, Mar 27: 4h 30m logged as client. Renewal prep" id="base-ui-_r_m_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"4h 30m"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "56.25%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Client"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Saturday, Mar 28: No weekend hours were logged for this day." id="base-ui-_r_o_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                  {"-"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Off"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Sunday, Mar 29: No weekend hours were logged for this day." id="base-ui-_r_q_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                  {"-"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Off"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right">
                            <div className="flex flex-col gap-1 items-end text-right">
                              <span className="font-semibold tabular-nums text-foreground text-sm">
                                {"29h 30m"}
                              </span>
                              <span className="gap-1 inline-flex items-center tabular-nums text-emerald-600 text-xs">
                                <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                  <path d="M16 7h6v6"></path>
                                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                </svg>
                                {"92%"}
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="theo-mercer">
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <div className="relative shrink-0">
                                <Avatar className="size-8" size="default">
                                  <AvatarImage alt="Theo Mercer" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </div>
                              <div className="flex flex-col leading-tight min-w-0">
                                <div className="font-medium text-foreground text-sm truncate">
                                  {"Theo Mercer"}
                                </div>
                                <div className="pt-0.5 text-muted-foreground text-xs truncate" title="Platform engineer">
                                  {"Platform engineer"}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Monday, Mar 23: 8h logged as client. Gateway failover validation" id="base-ui-_r_s_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"8h"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "100%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Client"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Tuesday, Mar 24: 8h logged as client. Webhook retries" id="base-ui-_r_u_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"8h"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "100%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Client"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Wednesday, Mar 25: 7h 30m logged as client. Tenant sync fixes" id="base-ui-_r_10_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"7h 30m"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "93.75%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Client"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Thursday, Mar 26: 8h logged as client. SSO edge cases" id="base-ui-_r_12_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"8h"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "100%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Client"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Friday, Mar 27: 8h logged as client. Metrics rollout" id="base-ui-_r_14_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"8h"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "100%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Client"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Saturday, Mar 28: No weekend hours were logged for this day." id="base-ui-_r_16_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                  {"-"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Off"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Sunday, Mar 29: No weekend hours were logged for this day." id="base-ui-_r_18_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                  {"-"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Off"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right">
                            <div className="flex flex-col gap-1 items-end text-right">
                              <span className="font-semibold tabular-nums text-foreground text-sm">
                                {"39h 30m"}
                              </span>
                              <span className="gap-1 inline-flex items-center tabular-nums text-emerald-600 text-xs">
                                <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                  <path d="M16 7h6v6"></path>
                                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                </svg>
                                {"99%"}
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="lena-hoffman">
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <div className="relative shrink-0">
                                <Avatar className="size-8" size="default">
                                  <AvatarImage alt="Lena Hoffman" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </div>
                              <div className="flex flex-col leading-tight min-w-0">
                                <div className="font-medium text-foreground text-sm truncate">
                                  {"Lena Hoffman"}
                                </div>
                                <div className="pt-0.5 text-muted-foreground text-xs truncate" title="Content systems editor">
                                  {"Content systems editor"}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Monday, Mar 23: 5h logged as internal. Publishing QA" id="base-ui-_r_1a_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"5h"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-sky-500 block h-full rounded-full" style={{width: "62.5%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Internal"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Tuesday, Mar 24: 4h 30m logged as client. Implementation guide updates" id="base-ui-_r_1c_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"4h 30m"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "56.25%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Client"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Wednesday, Mar 25: 5h logged as internal. Docs audit" id="base-ui-_r_1e_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"5h"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-sky-500 block h-full rounded-full" style={{width: "62.5%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Internal"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Thursday, Mar 26: 3h 30m logged as client. Admin walkthrough copy" id="base-ui-_r_1g_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"3h 30m"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "43.75%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Client"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Friday, Mar 27: 4h logged as client. Email setup checklist" id="base-ui-_r_1i_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"4h"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "50%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Client"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Saturday, Mar 28: No weekend hours were logged for this day." id="base-ui-_r_1k_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                  {"-"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Off"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Sunday, Mar 29: No weekend hours were logged for this day." id="base-ui-_r_1m_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                  {"-"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Off"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right">
                            <div className="flex flex-col gap-1 items-end text-right">
                              <span className="font-semibold tabular-nums text-foreground text-sm">
                                {"22h"}
                              </span>
                              <span className="gap-1 inline-flex items-center tabular-nums text-amber-600 text-xs">
                                <svg className="lucide lucide-trending-down size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                                  <path d="M16 17h6v-6"></path>
                                  <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                                </svg>
                                {"73%"}
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="iris-calder">
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <div className="relative shrink-0">
                                <Avatar className="size-8" size="default">
                                  <AvatarImage alt="Iris Calder" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </div>
                              <div className="flex flex-col leading-tight min-w-0">
                                <div className="font-medium text-foreground text-sm truncate">
                                  {"Iris Calder"}
                                </div>
                                <div className="pt-0.5 text-muted-foreground text-xs truncate" title="Design systems lead">
                                  {"Design systems lead"}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Monday, Mar 23: 6h logged as client. Timesheet explorations" id="base-ui-_r_1o_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"6h"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "75%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Client"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Tuesday, Mar 24: 6h 30m logged as client. Usage analytics QA" id="base-ui-_r_1q_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"6h 30m"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "81.25%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Client"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Wednesday, Mar 25: 6h logged as internal. Pattern inventory" id="base-ui-_r_1s_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"6h"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-sky-500 block h-full rounded-full" style={{width: "75%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Internal"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Thursday, Mar 26: 6h 30m logged as client. Workspace theming" id="base-ui-_r_1u_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"6h 30m"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "81.25%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Client"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Friday, Mar 27: 4h logged as client. Review fixes" id="base-ui-_r_20_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"4h"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "50%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Client"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Saturday, Mar 28: No weekend hours were logged for this day." id="base-ui-_r_22_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                  {"-"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Off"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Sunday, Mar 29: No weekend hours were logged for this day." id="base-ui-_r_24_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                  {"-"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Off"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right">
                            <div className="flex flex-col gap-1 items-end text-right">
                              <span className="font-semibold tabular-nums text-foreground text-sm">
                                {"29h"}
                              </span>
                              <span className="gap-1 inline-flex items-center tabular-nums text-emerald-600 text-xs">
                                <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                  <path d="M16 7h6v6"></path>
                                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                </svg>
                                {"91%"}
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="samir-vale">
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <div className="relative shrink-0">
                                <Avatar className="size-8" size="default">
                                  <AvatarImage alt="Samir Vale" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </div>
                              <div className="flex flex-col leading-tight min-w-0">
                                <div className="font-medium text-foreground text-sm truncate">
                                  {"Samir Vale"}
                                </div>
                                <div className="pt-0.5 text-muted-foreground text-xs truncate" title="Partner success manager">
                                  {"Partner success manager"}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Monday, Mar 23: 7h logged as support. Go-live triage" id="base-ui-_r_26_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"7h"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-amber-500 block h-full rounded-full" style={{width: "87.5%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Support"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Tuesday, Mar 24: 7h 30m logged as support. Partner QBR prep" id="base-ui-_r_28_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"7h 30m"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-amber-500 block h-full rounded-full" style={{width: "93.75%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Support"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Wednesday, Mar 25: 6h 30m logged as client. Migration playbook review" id="base-ui-_r_2a_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"6h 30m"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "81.25%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Client"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Thursday, Mar 26: 8h logged as client. Expansion scoping" id="base-ui-_r_2c_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"8h"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "100%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Client"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Friday, Mar 27: 7h logged as support. Weekly care plan" id="base-ui-_r_2e_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"7h"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-amber-500 block h-full rounded-full" style={{width: "87.5%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Support"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Saturday, Mar 28: No weekend hours were logged for this day." id="base-ui-_r_2g_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                  {"-"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Off"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <Tooltip>
                            <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Sunday, Mar 29: No weekend hours were logged for this day." id="base-ui-_r_2i_" baseUiTooltipTrigger="">
                              <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                  {"-"}
                                </span>
                                <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                  <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Off"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            </Tooltip>
                          </td>
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right">
                            <div className="flex flex-col gap-1 items-end text-right">
                              <span className="font-semibold tabular-nums text-foreground text-sm">
                                {"36h"}
                              </span>
                              <span className="gap-1 inline-flex items-center tabular-nums text-emerald-600 text-xs">
                                <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                  <path d="M16 7h6v6"></path>
                                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                </svg>
                                {"103%"}
                              </span>
                            </div>
                          </td>
                        </tr>
                      </DataGridTableBody>
                      </DataGridProvider>
                    </DataGridTable>
                    </DataGridProvider>
                  </DataGridTableViewport>
                  </DataGridProvider>
                </div>
              </div>
            </DataGridScrollArea>
            </DataGridProvider>
          </div>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
            <DataGridProvider>
            <DataGridPagination>
              <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                <div className="text-muted-foreground text-sm">
                  {"Rows per page"}
                </div>
                <Select>
                <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_2j_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                  <SelectValue>
                    {"5"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_2j_-hidden-input" tabIndex="-1" aria-hidden="true" value="5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                  {"1 - 5 of 9"}
                </div>
                <div className="flex flex-wrap gap-1 items-center justify-center order-1 sm:flex-nowrap">
                  <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" disabled="" tabIndex="0" disabled>
                    <span className="sr-only">
                      {"Go to previous page"}
                    </span>
                    <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                  </Button>
                  <Button className="bg-accent px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-accent-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 1" aria-current="page">
                    {"1"}
                  </Button>
                  <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 2">
                    {"2"}
                  </Button>
                  <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" tabIndex="0">
                    <span className="sr-only">
                      {"Go to next page"}
                    </span>
                    <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </Button>
                </div>
              </div>
            </DataGridPagination>
            </DataGridProvider>
          </footer>
        </FramePanel>
      </Frame>
    </main>
  )
}
