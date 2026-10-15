import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableFillBodyCell,
  DataGridTableFillHeadCell,
  DataGridTableFoot,
  DataGridTableFootRow,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
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
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="flex items-start justify-center max-w-7xl min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Treasury finance data grid"}
      </h1>
      <Frame className="w-full" spacing="sm">
        <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-px">
            <div className="font-semibold text-balance text-sm">
              {"Treasury Waterfall"}
            </div>
            <div className="text-muted-foreground text-pretty text-xs">
              <span className="gap-1.5 inline-flex items-center">
                <span>
                  {"5 Visible Lines"}
                </span>
                <span className="bg-gray-500 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  {"Closing Cash"}
                </span>
              </span>
            </div>
          </div>
          <Button type="button" tabIndex={0} extracted="1">
            <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            {"New Transaction"}
          </Button>
        </header>
        <FramePanel className="bg-card p-0! shadow-none!">
          <div className="flex flex-wrap gap-2 items-center justify-between px-(--frame-panel-header-px)">
            <Tabs data-orientation="horizontal" activationDirection="none">
              <TabsList className="gap-5 mt-(--frame-panel-header-py)" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                <TabsTrigger className="pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_1_" compositeItemActive="">
                  {"Actuals"}
                </TabsTrigger>
                <TabsTrigger className="pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_2_">
                  {"Plan"}
                </TabsTrigger>
                <TabsTrigger className="pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_3_">
                  {"Variance"}
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <Button type="button" tabIndex={0}>
              {"Expand All"}
            </Button>
          </div>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <div className="flex flex-wrap gap-2 items-center justify-between px-(--frame-panel-header-px) py-2.5">
            <div className="flex flex-wrap gap-2 items-center">
              <InputGroup className="min-w-52 sm:w-[260px]" role="group">
                <InputGroupAddon role="group" data-align="inline-start">
                  <svg className="lucide lucide-search size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                    <path d="m21 21-4.34-4.34"></path>
                    <circle cx={11} cy={11} r={8}></circle>
                  </svg>
                </InputGroupAddon>
                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_4_" placeholder="Search Line Items" aria-label="Search Line Items" value="" />
              </InputGroup>
              <Select>
              <SelectTrigger className="w-[168px]" type="button" tabIndex={0} id="base-ui-_r_5_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                <SelectValue>
                  {"All Lines"}
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  {"▼"}
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_5_-hidden-input" tabIndex={-1} aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <ButtonGroup role="group">
                <Button type="button" disabled="" tabIndex={0} disabled aria-label="Previous Range">
                  <svg className="lucide lucide-chevron-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine" aria-hidden="true">
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                </Button>
                <Popover>
                <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button group/pick-date inline-flex items-center justify-between outline-none select-none shrink-0 tabular-nums transition-all w-[236px] whitespace-nowrap" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_9_" aria-haspopup="dialog" aria-expanded="false">
                  <span className="truncate">
                    {"Apr 2026 - Aug 2026"}
                  </span>
                  <svg className="group-hover/pick-date:text-foreground lucide lucide-calendar shrink-0 text-muted-foreground/80 transition-colors" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                </PopoverTrigger>
                </Popover>
                <Button type="button" disabled="" tabIndex={0} disabled aria-label="Next Range">
                  <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
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
              <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_a_-viewport" tabIndex={-1} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                <div role="presentation" style={{minWidth: "fit-content"}}>
                  <DataGridProvider>
                  <DataGridTableViewport style={{width: "calc(1214px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px", "--data-grid-fill": "0"}}>
                    <DataGridProvider>
                    <DataGridTable style={{"--header-line-size": "414", "--col-line-size": "414", "--header-2026-04-size": "160", "--col-2026-04-size": "160", "--header-2026-05-size": "160", "--col-2026-05-size": "160", "--header-2026-06-size": "160", "--col-2026-06-size": "160", "--header-2026-07-size": "160", "--col-2026-07-size": "160", "--header-2026-08-size": "160", "--col-2026-08-size": "160", width: "calc(1214px + var(--data-grid-fill-size, 0px))"}}>
                      <colgroup>
                        <col style={{width: "calc(var(--col-line-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-2026-04-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-2026-05-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-2026-06-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-2026-07-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-2026-08-size) * 1px)"}} />
                        <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                      </colgroup>
                      <thead>
                        <tr className="[&>th]:border-b bg-transparent">
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="line" data-header-id="line" data-header-depth="0" style={{width: "calc(var(--header-line-size) * 1px)"}}>
                            <div className="-ms-2 flex h-full items-center">
                              <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                {"Line Item"}
                              </Button>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left text-right!" scope="col" data-col-id="2026-04" data-header-id="2026-04" data-header-depth="0" style={{width: "calc(var(--header-2026-04-size) * 1px)"}}>
                            <div className="-ms-2 flex h-full items-center">
                              <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground justify-end px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-right text-secondary-foreground/80 w-full" type="button" tabIndex={0}>
                                {"Apr 2026"}
                              </Button>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left text-right!" scope="col" data-col-id="2026-05" data-header-id="2026-05" data-header-depth="0" style={{width: "calc(var(--header-2026-05-size) * 1px)"}}>
                            <div className="-ms-2 flex h-full items-center">
                              <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground justify-end px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-right text-secondary-foreground/80 w-full" type="button" tabIndex={0}>
                                {"May 2026"}
                              </Button>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left text-right!" scope="col" data-col-id="2026-06" data-header-id="2026-06" data-header-depth="0" style={{width: "calc(var(--header-2026-06-size) * 1px)"}}>
                            <div className="-ms-2 flex h-full items-center">
                              <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground justify-end px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-right text-secondary-foreground/80 w-full" type="button" tabIndex={0}>
                                {"Jun 2026"}
                              </Button>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left text-right!" scope="col" data-col-id="2026-07" data-header-id="2026-07" data-header-depth="0" style={{width: "calc(var(--header-2026-07-size) * 1px)"}}>
                            <div className="-ms-2 flex h-full items-center">
                              <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground justify-end px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-right text-secondary-foreground/80 w-full" type="button" tabIndex={0}>
                                {"Jul 2026"}
                              </Button>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle bg-muted/35 font-medium h-8 overflow-visible pe-8 pr-(--frame-panel-px) px-2 relative rtl:text-right text-foreground text-left text-right!" scope="col" data-col-id="2026-08" data-header-id="2026-08" data-header-depth="0" style={{width: "calc(var(--header-2026-08-size) * 1px)"}}>
                            <div className="-ms-2 flex h-full items-center">
                              <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground justify-end px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-right text-secondary-foreground/80 w-full" type="button" tabIndex={0}>
                                {"Aug 2026"}
                              </Button>
                            </div>
                            <span className="absolute before:hidden cursor-col-resize end-0 flex h-full justify-end select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                        </tr>
                      </thead>
                      <DataGridProvider>
                      <DataGridTableBody>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cash">
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-line-size) * 1px)"}}>
                            <div className="flex gap-3 items-center min-w-0 w-full">
                              <div className="flex flex-1 gap-2 items-center min-w-0">
                                <Button className="hover:text-foreground p-0 rounded-md shadow-none size-6 text-muted-foreground" type="button" tabIndex={0} aria-label="Hide details for Cash">
                                  <svg className="duration-150 lucide lucide-chevron-right rotate-90 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </Button>
                                <span className="block font-semibold min-w-0 text-foreground text-sm truncate">
                                  {"Cash"}
                                </span>
                              </div>
                              <div className="flex items-center justify-end ml-auto shrink-0">
                                <Tooltip>
                                <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring gap-1.5 hover:text-foreground inline-flex items-center rounded-sm transition-colors" type="button" aria-label="Plan match 85%. Actual $852,000 versus plan $868,000 in the visible range." id="base-ui-_r_c_" baseUiTooltipTrigger="">
                                  <svg className="shrink-0 size-5 text-emerald-500" viewBox="0 0 24 24" aria-hidden="true">
                                    <circle className="stroke-border" cx={12} cy={12} r={8} fill="none" strokeWidth={3}></circle>
                                    <circle className="stroke-current" cx={12} cy={12} r={8} fill="none" strokeWidth={3} strokeLinecap="round" strokeDasharray={50.26548245743669} strokeDashoffset={7.5398223686155035} transform="rotate(-90 12 12)"></circle>
                                  </svg>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    {"85%"}
                                  </span>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-04-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"$243,000"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-05-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"$181,000"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-06-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"$121,000"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-07-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"$62,000"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle bg-muted/20 pr-(--frame-panel-px) px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-08-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"$245,000"}
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cash:opening-cash-balance">
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-line-size) * 1px)"}}>
                            <div className="flex gap-3 items-center min-w-0 w-full">
                              <div className="flex flex-1 gap-2 items-center min-w-0">
                                <div className="shrink-0 size-6" aria-hidden="true"></div>
                                <span className="block min-w-0 pl-4 text-muted-foreground text-sm truncate">
                                  {"Opening Cash Balance Carryover"}
                                </span>
                              </div>
                              <div className="flex justify-end ml-auto shrink-0">
                                <div className="gap-2 inline-flex items-center justify-end">
                                  <span className="font-medium tabular-nums text-warning text-xs">
                                    {"-16%"}
                                  </span>
                                  <Tooltip>
                                  <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-sm text-warning transition-colors" type="button" aria-label="Watch. Jul 2026 landed 16% below plan." id="base-ui-_r_e_" baseUiTooltipTrigger="">
                                    <svg className="lucide lucide-info shrink-0 size-4 text-warning" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={10}></circle>
                                      <path d="M12 16v-4"></path>
                                      <path d="M12 8h.01"></path>
                                    </svg>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-04-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"$290,000"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-05-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"$243,000"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-06-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"$181,000"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-07-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"$121,000"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle bg-muted/20 pr-(--frame-panel-px) px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-08-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"$62,000"}
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cash:operating-cash-movement">
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-line-size) * 1px)"}}>
                            <div className="flex gap-3 items-center min-w-0 w-full">
                              <div className="flex flex-1 gap-2 items-center min-w-0">
                                <div className="shrink-0 size-6" aria-hidden="true"></div>
                                <span className="block min-w-0 pl-4 text-muted-foreground text-sm truncate">
                                  {"Operating Cash Movement Impact"}
                                </span>
                              </div>
                              <div className="flex justify-end ml-auto shrink-0">
                                <div className="gap-2 inline-flex items-center justify-end">
                                  <span className="font-medium tabular-nums text-warning text-xs">
                                    {"+56%"}
                                  </span>
                                  <Tooltip>
                                  <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-sm text-warning transition-colors" type="button" aria-label="Timing. Aug 2026 spend came in 56% under plan. This looks more like timing than durable savings." id="base-ui-_r_g_" baseUiTooltipTrigger="">
                                    <svg className="lucide lucide-info shrink-0 size-4 text-warning" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={10}></circle>
                                      <path d="M12 16v-4"></path>
                                      <path d="M12 8h.01"></path>
                                    </svg>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-04-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"($47,000)"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-05-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"($62,000)"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-06-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"($60,000)"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-07-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"($93,000)"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle bg-muted/20 pr-(--frame-panel-px) px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-08-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"($15,000)"}
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cash:capital-inflow-events">
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-line-size) * 1px)"}}>
                            <div className="flex gap-3 items-center min-w-0 w-full">
                              <div className="flex flex-1 gap-2 items-center min-w-0">
                                <div className="shrink-0 size-6" aria-hidden="true"></div>
                                <span className="block min-w-0 pl-4 text-muted-foreground text-sm truncate">
                                  {"Capital Inflow Event Timing"}
                                </span>
                              </div>
                              <div className="flex justify-end ml-auto shrink-0">
                                <div className="gap-2 inline-flex items-center justify-end">
                                  <span className="font-medium tabular-nums text-destructive text-xs">
                                    {"+89%"}
                                  </span>
                                  <Tooltip>
                                  <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-sm text-destructive transition-colors" type="button" aria-label="Spike. Jul 2026 landed 89% above plan. This reads more like a one-off spike than steady improvement." id="base-ui-_r_i_" baseUiTooltipTrigger="">
                                    <svg className="lucide lucide-triangle-alert shrink-0 size-4 text-destructive" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                      <path d="M12 9v4"></path>
                                      <path d="M12 17h.01"></path>
                                    </svg>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-04-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"$0"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-05-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"$0"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-06-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"$0"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-07-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"$34,000"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle bg-muted/20 pr-(--frame-panel-px) px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-08-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"$198,000"}
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="burn">
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-line-size) * 1px)"}}>
                            <div className="flex gap-3 items-center min-w-0 w-full">
                              <div className="flex flex-1 gap-2 items-center min-w-0">
                                <Button className="hover:text-foreground p-0 rounded-md shadow-none size-6 text-muted-foreground" type="button" tabIndex={0} aria-label="Hide details for Burn">
                                  <svg className="duration-150 lucide lucide-chevron-right rotate-90 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </Button>
                                <span className="block font-semibold min-w-0 text-foreground text-sm truncate">
                                  {"Burn"}
                                </span>
                              </div>
                              <div className="flex items-center justify-end ml-auto shrink-0">
                                <Tooltip>
                                <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring gap-1.5 hover:text-foreground inline-flex items-center rounded-sm transition-colors" type="button" aria-label="Plan match 77%. Actual ($277,000) versus plan ($256,000) in the visible range." id="base-ui-_r_k_" baseUiTooltipTrigger="">
                                  <svg className="shrink-0 size-5 text-amber-500" viewBox="0 0 24 24" aria-hidden="true">
                                    <circle className="stroke-border" cx={12} cy={12} r={8} fill="none" strokeWidth={3}></circle>
                                    <circle className="stroke-current" cx={12} cy={12} r={8} fill="none" strokeWidth={3} strokeLinecap="round" strokeDasharray={50.26548245743669} strokeDashoffset={11.561060965210437} transform="rotate(-90 12 12)"></circle>
                                  </svg>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    {"77%"}
                                  </span>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-04-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"($47,000)"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-05-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"($62,000)"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-06-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"($60,000)"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-07-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"($93,000)"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle bg-muted/20 pr-(--frame-panel-px) px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-08-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"($15,000)"}
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="burn:collections">
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-line-size) * 1px)"}}>
                            <div className="flex gap-3 items-center min-w-0 w-full">
                              <div className="flex flex-1 gap-2 items-center min-w-0">
                                <div className="shrink-0 size-6" aria-hidden="true"></div>
                                <span className="block min-w-0 pl-4 text-muted-foreground text-sm truncate">
                                  {"Customer Cash Collection Pace"}
                                </span>
                              </div>
                              <div className="flex justify-end ml-auto shrink-0">
                                <div className="gap-2 inline-flex items-center justify-end">
                                  <span className="font-medium tabular-nums text-warning text-xs">
                                    {"-18%"}
                                  </span>
                                  <Tooltip>
                                  <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-sm text-warning transition-colors" type="button" aria-label="Watch. May 2026 landed 18% below plan." id="base-ui-_r_m_" baseUiTooltipTrigger="">
                                    <svg className="lucide lucide-info shrink-0 size-4 text-warning" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                      <circle cx={12} cy={12} r={10}></circle>
                                      <path d="M12 16v-4"></path>
                                      <path d="M12 8h.01"></path>
                                    </svg>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-04-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"$72,000"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-05-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"$64,000"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-06-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"$82,000"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-07-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"$91,000"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle bg-muted/20 pr-(--frame-panel-px) px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-08-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"$118,000"}
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="burn:operating-outflows">
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-line-size) * 1px)"}}>
                            <div className="flex gap-3 items-center min-w-0 w-full">
                              <div className="flex flex-1 gap-2 items-center min-w-0">
                                <div className="shrink-0 size-6" aria-hidden="true"></div>
                                <span className="block min-w-0 pl-4 text-muted-foreground text-sm truncate">
                                  {"Operating Cash Outflow Load"}
                                </span>
                              </div>
                              <div className="flex justify-end ml-auto shrink-0">
                                <div className="gap-2 inline-flex items-center justify-end">
                                  <span className="font-medium tabular-nums text-destructive text-xs">
                                    {"-11%"}
                                  </span>
                                  <Tooltip>
                                  <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-sm text-destructive transition-colors" type="button" aria-label="Critical. Jul 2026 spend ran 11% over plan." id="base-ui-_r_o_" baseUiTooltipTrigger="">
                                    <svg className="lucide lucide-triangle-alert shrink-0 size-4 text-destructive" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                      <path d="M12 9v4"></path>
                                      <path d="M12 17h.01"></path>
                                    </svg>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-04-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"($119,000)"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-05-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"($126,000)"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-06-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"($142,000)"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-07-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"($184,000)"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle bg-muted/20 pr-(--frame-panel-px) px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-08-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"($133,000)"}
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="income">
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-line-size) * 1px)"}}>
                            <div className="flex gap-3 items-center min-w-0 w-full">
                              <div className="flex flex-1 gap-2 items-center min-w-0">
                                <Button className="hover:text-foreground p-0 rounded-md shadow-none size-6 text-muted-foreground" type="button" tabIndex={0} aria-label="Show details for Income">
                                  <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </Button>
                                <span className="block font-semibold min-w-0 text-foreground text-sm truncate">
                                  {"Income"}
                                </span>
                              </div>
                              <div className="flex items-center justify-end ml-auto shrink-0">
                                <Tooltip>
                                <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring gap-1.5 hover:text-foreground inline-flex items-center rounded-sm transition-colors" type="button" aria-label="Plan match 88%. Actual $427,000 versus plan $444,000 in the visible range." id="base-ui-_r_q_" baseUiTooltipTrigger="">
                                  <svg className="shrink-0 size-5 text-emerald-500" viewBox="0 0 24 24" aria-hidden="true">
                                    <circle className="stroke-border" cx={12} cy={12} r={8} fill="none" strokeWidth={3}></circle>
                                    <circle className="stroke-current" cx={12} cy={12} r={8} fill="none" strokeWidth={3} strokeLinecap="round" strokeDasharray={50.26548245743669} strokeDashoffset={6.031857894892404} transform="rotate(-90 12 12)"></circle>
                                  </svg>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    {"88%"}
                                  </span>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-04-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"$72,000"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-05-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"$64,000"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-06-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"$82,000"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-07-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"$91,000"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle bg-muted/20 pr-(--frame-panel-px) px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-08-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"$118,000"}
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="expenses">
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-line-size) * 1px)"}}>
                            <div className="flex gap-3 items-center min-w-0 w-full">
                              <div className="flex flex-1 gap-2 items-center min-w-0">
                                <Button className="hover:text-foreground p-0 rounded-md shadow-none size-6 text-muted-foreground" type="button" tabIndex={0} aria-label="Show details for Expenses">
                                  <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </Button>
                                <span className="block font-semibold min-w-0 text-foreground text-sm truncate">
                                  {"Expenses"}
                                </span>
                              </div>
                              <div className="flex items-center justify-end ml-auto shrink-0">
                                <Tooltip>
                                <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring gap-1.5 hover:text-foreground inline-flex items-center rounded-sm transition-colors" type="button" aria-label="Plan match 88%. Actual ($704,000) versus plan ($700,000) in the visible range." id="base-ui-_r_s_" baseUiTooltipTrigger="">
                                  <svg className="shrink-0 size-5 text-emerald-500" viewBox="0 0 24 24" aria-hidden="true">
                                    <circle className="stroke-border" cx={12} cy={12} r={8} fill="none" strokeWidth={3}></circle>
                                    <circle className="stroke-current" cx={12} cy={12} r={8} fill="none" strokeWidth={3} strokeLinecap="round" strokeDasharray={50.26548245743669} strokeDashoffset={6.031857894892404} transform="rotate(-90 12 12)"></circle>
                                  </svg>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    {"88%"}
                                  </span>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-04-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"($119,000)"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-05-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"($126,000)"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-06-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"($142,000)"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-07-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"($184,000)"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle bg-muted/20 pr-(--frame-panel-px) px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-08-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"($133,000)"}
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="funding">
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-line-size) * 1px)"}}>
                            <div className="flex gap-3 items-center min-w-0 w-full">
                              <div className="flex flex-1 gap-2 items-center min-w-0">
                                <Button className="hover:text-foreground p-0 rounded-md shadow-none size-6 text-muted-foreground" type="button" tabIndex={0} aria-label="Show details for Funding">
                                  <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </Button>
                                <span className="block font-semibold min-w-0 text-foreground text-sm truncate">
                                  {"Funding"}
                                </span>
                              </div>
                              <div className="flex items-center justify-end ml-auto shrink-0">
                                <Tooltip>
                                <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring gap-1.5 hover:text-foreground inline-flex items-center rounded-sm transition-colors" type="button" aria-label="Plan match 62%. Actual $232,000 versus plan $168,000 in the visible range." id="base-ui-_r_u_" baseUiTooltipTrigger="">
                                  <svg className="shrink-0 size-5 text-amber-500" viewBox="0 0 24 24" aria-hidden="true">
                                    <circle className="stroke-border" cx={12} cy={12} r={8} fill="none" strokeWidth={3}></circle>
                                    <circle className="stroke-current" cx={12} cy={12} r={8} fill="none" strokeWidth={3} strokeLinecap="round" strokeDasharray={50.26548245743669} strokeDashoffset={19.10088333382594} transform="rotate(-90 12 12)"></circle>
                                  </svg>
                                  <span className="tabular-nums text-muted-foreground text-xs">
                                    {"62%"}
                                  </span>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-04-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"$0"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-05-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"$0"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-06-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"$0"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-07-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"$34,000"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle bg-muted/20 pr-(--frame-panel-px) px-2 py-1.5 text-right! truncate" style={{width: "calc(var(--col-2026-08-size) * 1px)"}}>
                            <div className="flex justify-end w-full">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"$198,000"}
                              </span>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                      </DataGridTableBody>
                      </DataGridProvider>
                      <DataGridProvider>
                      <DataGridTableFoot>
                        <DataGridTableFootRow>
                          <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium ps-(--frame-panel-px) px-2 py-1.5 text-secondary-foreground/80">
                            <div className="flex flex-col gap-0.5">
                              <span className="text-muted-foreground text-xs">
                                {"Treasury Summary"}
                              </span>
                              <span className="font-medium text-sm">
                                {"Closing Cash"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-2 py-1.5 text-right text-secondary-foreground/80">
                            <div className="flex flex-col gap-0.5 items-end">
                              <span className="text-muted-foreground text-xs">
                                {"End Of Month"}
                              </span>
                              <span className="tabular-nums text-foreground text-sm">
                                {"$243,000"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-2 py-1.5 text-right text-secondary-foreground/80">
                            <div className="flex flex-col gap-0.5 items-end">
                              <span className="text-muted-foreground text-xs">
                                {"End Of Month"}
                              </span>
                              <span className="tabular-nums text-foreground text-sm">
                                {"$181,000"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-2 py-1.5 text-right text-secondary-foreground/80">
                            <div className="flex flex-col gap-0.5 items-end">
                              <span className="text-muted-foreground text-xs">
                                {"End Of Month"}
                              </span>
                              <span className="tabular-nums text-foreground text-sm">
                                {"$121,000"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-2 py-1.5 text-right text-secondary-foreground/80">
                            <div className="flex flex-col gap-0.5 items-end">
                              <span className="text-muted-foreground text-xs">
                                {"End Of Month"}
                              </span>
                              <span className="tabular-nums text-foreground text-sm">
                                {"$62,000"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle bg-muted/20 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium pr-(--frame-panel-px) px-2 py-1.5 text-right text-secondary-foreground/80">
                            <div className="flex flex-col gap-0.5 items-end">
                              <span className="text-muted-foreground text-xs">
                                {"End Of Month"}
                              </span>
                              <span className="tabular-nums text-foreground text-sm">
                                {"$245,000"}
                              </span>
                            </div>
                          </td>
                          <td className="p-0" aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></td>
                        </DataGridTableFootRow>
                        <DataGridTableFootRow>
                          <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium ps-(--frame-panel-px) px-2 py-1.5 text-secondary-foreground/80">
                            <div className="flex flex-col gap-0.5">
                              <span className="text-muted-foreground text-xs">
                                {"5 Visible Lines"}
                              </span>
                              <span className="font-medium text-sm">
                                {"Net Burn"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-2 py-1.5 text-right text-secondary-foreground/80">
                            <div className="flex flex-col gap-0.5 items-end">
                              <span className="text-muted-foreground text-xs">
                                {"Operating Movement"}
                              </span>
                              <span className="tabular-nums text-foreground text-sm">
                                {"($47,000)"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-2 py-1.5 text-right text-secondary-foreground/80">
                            <div className="flex flex-col gap-0.5 items-end">
                              <span className="text-muted-foreground text-xs">
                                {"Operating Movement"}
                              </span>
                              <span className="tabular-nums text-foreground text-sm">
                                {"($62,000)"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-2 py-1.5 text-right text-secondary-foreground/80">
                            <div className="flex flex-col gap-0.5 items-end">
                              <span className="text-muted-foreground text-xs">
                                {"Operating Movement"}
                              </span>
                              <span className="tabular-nums text-foreground text-sm">
                                {"($60,000)"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle bg-muted/40 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-2 py-1.5 text-right text-secondary-foreground/80">
                            <div className="flex flex-col gap-0.5 items-end">
                              <span className="text-muted-foreground text-xs">
                                {"Operating Movement"}
                              </span>
                              <span className="tabular-nums text-foreground text-sm">
                                {"($93,000)"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle bg-muted/20 dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium pr-(--frame-panel-px) px-2 py-1.5 text-right text-secondary-foreground/80">
                            <div className="flex flex-col gap-0.5 items-end">
                              <span className="text-muted-foreground text-xs">
                                {"Operating Movement"}
                              </span>
                              <span className="tabular-nums text-foreground text-sm">
                                {"($15,000)"}
                              </span>
                            </div>
                          </td>
                          <td className="p-0" aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></td>
                        </DataGridTableFootRow>
                      </DataGridTableFoot>
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
                <SelectTrigger className="min-w-16" type="button" tabIndex={0} id="base-ui-_r_v_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                  <SelectValue>
                    {"5"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_v_-hidden-input" tabIndex={-1} aria-hidden="true" value="5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                  {"1 - 5 of 5"}
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
