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
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
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
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex justify-center md:p-10 min-h-svh p-6 w-full">
      <div className="@container flex flex-col gap-6 max-w-7xl mx-auto w-full">
        <Card className="w-full" size="default">
          <CardContent>
            <div className="flex flex-col items-stretch sm:flex-row">
              <div className="flex flex-col justify-center shrink-0 sm:basis-1/3 sm:pe-6">
                <span className="text-muted-foreground text-xs">
                  {"Total Asset Value"}
                </span>
                <span className="font-semibold mt-1 tabular-nums text-2xl text-foreground">
                  {"$106,576.00"}
                </span>
              </div>
              <Separator className="hidden self-stretch sm:block" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
              <div className="flex flex-1 flex-col gap-2 justify-center sm:ps-6">
                <div>
                  <span className="font-semibold tabular-nums text-foreground text-xl">
                    {"2,258"}
                  </span>
                  <span className="text-muted-foreground text-xs">
                    {"products"}
                  </span>
                </div>
                <div className="bg-muted flex gap-0.5 h-1.5 items-center overflow-hidden rounded-full w-full" role="img" aria-label="Stock health: 1892 in stock, 164 low stock, 257 out of stock">
                  <span className="bg-emerald-500 h-full" style={{width: "81.7985%"}}></span>
                  <span className="bg-amber-400 h-full" style={{width: "7.09036%"}}></span>
                  <span className="bg-destructive h-full" style={{width: "11.1111%"}}></span>
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-1.5 items-center text-xs">
                  <div className="gap-1.5 inline-flex items-center text-muted-foreground">
                    <span className="bg-emerald-500 inline-block rounded-full size-2" aria-hidden="true"></span>
                    <span>
                      {"In stock:"}
                      <span className="font-semibold tabular-nums text-foreground">
                        {"1,892"}
                      </span>
                    </span>
                  </div>
                  <div className="gap-1.5 inline-flex items-center text-muted-foreground">
                    <span className="bg-amber-400 inline-block rounded-full size-2" aria-hidden="true"></span>
                    <span>
                      {"Low stock:"}
                      <span className="font-semibold tabular-nums text-foreground">
                        {"164"}
                      </span>
                    </span>
                  </div>
                  <div className="gap-1.5 inline-flex items-center text-muted-foreground">
                    <span className="bg-destructive inline-block rounded-full size-2" aria-hidden="true"></span>
                    <span>
                      {"Out of stock:"}
                      <span className="font-semibold tabular-nums text-foreground">
                        {"257"}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Frame className="w-full">
          <FramePanel className="p-0 shadow-none!">
            <div className="flex flex-wrap gap-2 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="flex flex-wrap gap-2 items-center">
                <InputGroup className="min-w-52 sm:w-[220px]" role="group">
                  <InputGroupAddon role="group" data-align="inline-start">
                    <svg className="lucide lucide-search size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                      <path d="m21 21-4.34-4.34"></path>
                      <circle cx={11} cy={11} r={8}></circle>
                    </svg>
                  </InputGroupAddon>
                  <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_1_" placeholder="Search..." aria-label="Search products" value="" />
                </InputGroup>
                <Popover>
                <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-between outline-none select-none shrink-0 tabular-nums transition-all whitespace-nowrap" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_3_" aria-haspopup="dialog" aria-expanded="false" extracted="1">
                  <svg className="lucide lucide-calendar size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" data-icon="inline-start" aria-hidden="true">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <span className="truncate">
                    {"Aug 21, 2025 - May 16, 2026"}
                  </span>
                </PopoverTrigger>
                </Popover>
                <Select>
                <SelectTrigger className="w-[140px]" type="button" tabIndex={0} id="base-ui-_r_4_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                  <SelectValue>
                    {"Category"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_4_-hidden-input" tabIndex={-1} aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <Select>
                <SelectTrigger className="w-[140px]" type="button" tabIndex={0} id="base-ui-_r_7_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                  <SelectValue>
                    {"Supplier"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_7_-hidden-input" tabIndex={-1} aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
              <Button type="button" tabIndex={0}>
                <svg className="lucide lucide-clipboard-list size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClipboardListIcon" tabler="IconClipboardList" hugeicons="ClipboardIcon" phosphor="ClipboardTextIcon" remixicon="RiFileListLine" data-icon="inline-start" aria-hidden="true">
                  <rect width={8} height={4} x={8} y={2} rx={1} ry={1}></rect>
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <path d="M12 11h4"></path>
                  <path d="M12 16h4"></path>
                  <path d="M8 11h.01"></path>
                  <path d="M8 16h.01"></path>
                </svg>
                {"Stock Planner"}
              </Button>
            </div>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="relative">
              <DataGridProvider>
              <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_a_-viewport" tabIndex={-1} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                  <div role="presentation" style={{minWidth: "fit-content"}}>
                    <DataGridProvider>
                    <DataGridTableViewport>
                      <DataGridProvider>
                      <DataGridTable>
                        <colgroup>
                          <col style={{width: "36px"}} />
                          <col style={{width: "240px"}} />
                          <col style={{width: "160px"}} />
                          <col style={{width: "110px"}} />
                          <col style={{width: "100px"}} />
                          <col style={{width: "130px"}} />
                          <col style={{width: "180px"}} />
                          <col style={{width: "140px"}} />
                          <col style={{width: "50px"}} />
                        </colgroup>
                        <thead>
                          <tr className="[&>th]:border-b bg-transparent">
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 ps-(--frame-panel-px) px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" style={{width: "36px"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_b_" aria-checked="false" aria-label="Select all"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="product" data-header-id="product" data-header-depth="0" style={{width: "240px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                  {"Product Info"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="stockFlow" data-header-id="stockFlow" data-header-depth="0" style={{width: "160px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                  {"Stock Flow"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="delta" data-header-id="delta" data-header-depth="0" style={{width: "110px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                  {"Delta"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="price" data-header-id="price" data-header-depth="0" style={{width: "100px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                  {"Price"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="category" data-header-id="category" data-header-depth="0" style={{width: "130px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                  {"Category"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="supplier" data-header-id="supplier" data-header-depth="0" style={{width: "180px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                  {"Supplier"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="updated" data-header-id="updated" data-header-depth="0" style={{width: "140px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                  {"Updated"}
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 pr-(--frame-panel-px) px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "50px"}}></th>
                          </tr>
                        </thead>
                        <DataGridProvider>
                        <DataGridTableBody>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-001">
                            <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_e_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0">
                                <div className="bg-muted overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0">
                                  <img className="h-10 object-cover w-10" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=120&h=120&q=80" />
                                </div>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-4" href="#product-pc-5678">
                                    {"Premium Comfort Max"}
                                  </a>
                                  <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                    <span>
                                      {"SKU"}
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="font-mono truncate">
                                      {"PC-5678"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-3 items-center">
                                <Tooltip>
                                <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_i_" baseUiTooltipTrigger="">
                                  <span className="flex shrink-0 text-muted-foreground">
                                    <svg className="lucide lucide-layers size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                                      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                                      <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                                      <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                                    </svg>
                                  </span>
                                  <span className="font-medium">
                                    {"56"}
                                  </span>
                                </TooltipTrigger>
                                </Tooltip>
                                <Tooltip>
                                <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_k_" baseUiTooltipTrigger="">
                                  <span className="flex shrink-0 text-emerald-600">
                                    <svg className="lucide lucide-arrow-down size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                      <path d="M12 5v14"></path>
                                      <path d="m19 12-7 7-7-7"></path>
                                    </svg>
                                  </span>
                                  <span className="font-medium">
                                    {"15"}
                                  </span>
                                </TooltipTrigger>
                                </Tooltip>
                                <Tooltip>
                                <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_m_" baseUiTooltipTrigger="">
                                  <span className="flex shrink-0 text-destructive">
                                    <svg className="lucide lucide-arrow-up size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                      <path d="m5 12 7-7 7 7"></path>
                                      <path d="M12 19V5"></path>
                                    </svg>
                                  </span>
                                  <span className="font-medium">
                                    {"4"}
                                  </span>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                                <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                  <path d="M16 7h6v6"></path>
                                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                </svg>
                                {"+23"}
                              </Badge>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"$125.00"}
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="text-foreground text-sm">
                                {"Premium"}
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-2.5 items-center min-w-0">
                                <span className="bg-amber-500 inline-flex items-center justify-center rounded-md shrink-0 size-7" aria-hidden="true">
                                  <svg className="brightness-0 invert size-4" viewBox="0 0 27 37" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M25.7756 17.3698C25.2893 15.6249 24.5666 13.9548 23.6276 12.4058H23.6296C23.6296 12.4058 22.7026 10.8678 22.3136 10.4028H22.3106C22.2146 10.2818 22.0216 10.4158 22.0956 10.5538C22.2046 10.7828 22.3036 11.0648 22.2346 11.3398C22.1206 11.6758 21.7456 11.9088 21.4006 11.7898C21.3051 11.7512 21.2186 11.6933 21.1466 11.6198C20.7936 11.2548 20.6096 10.6508 20.3806 9.8838C20.1746 9.2008 19.9196 8.35279 19.4596 7.43479C18.7116 5.94279 17.8266 5.25279 17.7906 5.22379C17.7686 5.20662 17.7416 5.19721 17.7137 5.19703C17.6859 5.19685 17.6587 5.20591 17.6366 5.2228C17.6142 5.23992 17.5976 5.26346 17.5891 5.29028C17.5805 5.31709 17.5803 5.34588 17.5886 5.3728C17.5926 5.3848 17.9646 6.61479 17.2466 7.54579C16.9606 7.91679 16.5256 8.1408 16.0186 8.1728C15.5086 8.2058 15.0036 8.0368 14.7006 7.7328C13.9496 6.9778 13.8616 5.63979 13.8756 4.90979C13.9226 2.47579 14.6576 0.770795 15.0406 0.209795C15.0567 0.185815 15.0649 0.157376 15.064 0.12849C15.0631 0.0996036 15.0532 0.071728 15.0356 0.048795C15.018 0.0265184 14.9936 0.0106996 14.9661 0.00382184C14.9385 -0.00305591 14.9095 -0.000603202 14.8836 0.010795C11.9096 1.2998 9.75456 3.50679 8.65356 6.38379C8.03456 8.09479 7.76456 8.8748 7.54556 9.3658C7.34356 9.8148 7.15656 10.0218 6.96556 10.1358C6.86056 10.1998 6.73256 10.2358 6.60056 10.2408C6.40656 10.2208 5.44656 10.0448 6.28256 8.4388C6.35156 8.3038 6.16856 8.1698 6.06656 8.2788L5.40856 9.0058C5.37923 9.0378 5.3499 9.0698 5.32056 9.1018L5.21156 9.2228C5.1929 9.24413 5.1759 9.2648 5.16056 9.2848C3.08056 11.6618 1.62756 14.7038 0.790564 17.5138C0.0405639 20.2138 -0.00643612 22.3708 0.000563879 23.1908L0.00156388 23.3728C0.00156388 27.0068 1.38356 30.4228 3.89256 32.9928C6.40156 35.5628 9.73956 36.9778 13.2876 36.9778C16.8356 36.9778 20.1736 35.5628 22.6826 32.9928C25.1926 30.4228 26.5736 27.0058 26.5736 23.3728C26.5736 21.0578 26.2756 19.1718 25.7706 17.3698H25.7756ZM13.2896 30.4168C9.49156 30.4168 6.41056 27.2648 6.41056 23.3738C6.41056 19.4828 9.49056 16.3298 13.2896 16.3298C17.0886 16.3298 20.1686 19.4838 20.1686 23.3738C20.1686 27.2638 17.0886 30.4168 13.2896 30.4168Z" fill="#FF4000"></path>
                                  </svg>
                                </span>
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Hotmart"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="gap-1.5 inline-flex items-center text-muted-foreground text-sm">
                                <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                                  <path d="M3 10h18"></path>
                                </svg>
                                {"31 Jul, 2025"}
                              </span>
                            </td>
                            <td className="align-middle pr-(--frame-panel-px) px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Premium Comfort Max" aria-haspopup="menu" id="base-ui-_r_q_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-002">
                            <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_s_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0">
                                <div className="bg-muted overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0">
                                  <img className="h-10 object-cover w-10" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=120&h=120&q=80" />
                                </div>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-4" href="#product-sp-8901">
                                    {"Sport Performance Pro"}
                                  </a>
                                  <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                    <span>
                                      {"SKU"}
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="font-mono truncate">
                                      {"SP-8901"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-3 items-center">
                                <Tooltip>
                                <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_10_" baseUiTooltipTrigger="">
                                  <span className="flex shrink-0 text-muted-foreground">
                                    <svg className="lucide lucide-layers size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                                      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                                      <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                                      <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                                    </svg>
                                  </span>
                                  <span className="font-medium">
                                    {"78"}
                                  </span>
                                </TooltipTrigger>
                                </Tooltip>
                                <Tooltip>
                                <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_12_" baseUiTooltipTrigger="">
                                  <span className="flex shrink-0 text-emerald-600">
                                    <svg className="lucide lucide-arrow-down size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                      <path d="M12 5v14"></path>
                                      <path d="m19 12-7 7-7-7"></path>
                                    </svg>
                                  </span>
                                  <span className="font-medium">
                                    {"20"}
                                  </span>
                                </TooltipTrigger>
                                </Tooltip>
                                <Tooltip>
                                <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_14_" baseUiTooltipTrigger="">
                                  <span className="flex shrink-0 text-destructive">
                                    <svg className="lucide lucide-arrow-up size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                      <path d="m5 12 7-7 7 7"></path>
                                      <path d="M12 19V5"></path>
                                    </svg>
                                  </span>
                                  <span className="font-medium">
                                    {"6"}
                                  </span>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                                <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                  <path d="M16 7h6v6"></path>
                                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                </svg>
                                {"+38"}
                              </Badge>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"$155.00"}
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="text-foreground text-sm">
                                {"Sports"}
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-2.5 items-center min-w-0">
                                <span className="bg-violet-500 inline-flex items-center justify-center rounded-md shrink-0 size-7" aria-hidden="true">
                                  <svg className="size-4 text-white" aria-hidden="true" version="1.1" id="procure__Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 69.2 108.3" xmlSpace="preserve" fill="currentColor">
                                    <path d="M36.3,68.8v-26c0-1.2,0.6-2.4,1.7-3.1l24.5-15.4c2.4-1.5,5.5,0.2,5.5,3.1v22.4c0,1.9-1,3.6-2.6,4.6L39,70.4\tC37.8,71.1,36.3,70.2,36.3,68.8z"></path>
                                    <path d="M32.7,104.8V78.1c0-1.2-0.6-2.4-1.7-3.1L4.9,58.6C3.2,57.5,1,58.8,1,60.7v25.4c0,1.2,0.6,2.4,1.7,3.1L30,106.3\tC31.2,107.1,32.7,106.2,32.7,104.8z"></path>
                                    <path d="M36.3,3.2v30.2c0,1.4,1.6,2.3,2.8,1.5l20.4-13.3c1.7-1.1,1.8-3.5,0.1-4.7L39.2,1.7C38,0.8,36.3,1.7,36.3,3.2z"></path>
                                    <path d="M32.7,2.9v65.9c0,1.4-1.6,2.3-2.8,1.5L2.7,53.2c-1-0.7-1.7-1.8-1.7-3.1V21.5c0-1.2,0.6-2.4,1.7-3.1L30,1.3\tC31.2,0.6,32.7,1.4,32.7,2.9z"></path>
                                  </svg>
                                </span>
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Procure"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="gap-1.5 inline-flex items-center text-muted-foreground text-sm">
                                <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                                  <path d="M3 10h18"></path>
                                </svg>
                                {"30 Jul, 2025"}
                              </span>
                            </td>
                            <td className="align-middle pr-(--frame-panel-px) px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Sport Performance Pro" aria-haspopup="menu" id="base-ui-_r_18_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-003">
                            <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_1a_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0">
                                <div className="bg-muted overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0">
                                  <img className="h-10 object-cover w-10" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=120&h=120&q=80" />
                                </div>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-4" href="#product-cr-1234">
                                    {"Classic Retro Style"}
                                  </a>
                                  <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                    <span>
                                      {"SKU"}
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="font-mono truncate">
                                      {"CR-1234"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-3 items-center">
                                <Tooltip>
                                <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_1e_" baseUiTooltipTrigger="">
                                  <span className="flex shrink-0 text-muted-foreground">
                                    <svg className="lucide lucide-layers size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                                      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                                      <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                                      <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                                    </svg>
                                  </span>
                                  <span className="font-medium">
                                    {"43"}
                                  </span>
                                </TooltipTrigger>
                                </Tooltip>
                                <Tooltip>
                                <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_1g_" baseUiTooltipTrigger="">
                                  <span className="flex shrink-0 text-emerald-600">
                                    <svg className="lucide lucide-arrow-down size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                      <path d="M12 5v14"></path>
                                      <path d="m19 12-7 7-7-7"></path>
                                    </svg>
                                  </span>
                                  <span className="font-medium">
                                    {"11"}
                                  </span>
                                </TooltipTrigger>
                                </Tooltip>
                                <Tooltip>
                                <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_1i_" baseUiTooltipTrigger="">
                                  <span className="flex shrink-0 text-destructive">
                                    <svg className="lucide lucide-arrow-up size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                      <path d="m5 12 7-7 7 7"></path>
                                      <path d="M12 19V5"></path>
                                    </svg>
                                  </span>
                                  <span className="font-medium">
                                    {"3"}
                                  </span>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                                <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                  <path d="M16 7h6v6"></path>
                                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                </svg>
                                {"+19"}
                              </Badge>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"$85.00"}
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="text-foreground text-sm">
                                {"Retro"}
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-2.5 items-center min-w-0">
                                <span className="bg-emerald-500 inline-flex items-center justify-center rounded-md shrink-0 size-7" aria-hidden="true">
                                  <svg className="brightness-0 invert size-4" aria-hidden="true" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                                    <path d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128 70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007l.001-.006Zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644-30.053-18.357-67.885-22.515-112.44-12.335a7.981 7.981 0 0 1-9.552-6.007 7.968 7.968 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276 3.76 2.308 4.952 7.215 2.644 10.975Zm15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289-34.406-21.148-86.853-27.273-127.548-14.92-5.278 1.594-10.852-1.38-12.454-6.649-1.59-5.278 1.386-10.842 6.655-12.446 46.485-14.106 104.275-7.273 143.787 17.007 4.692 2.89 6.175 9.034 3.286 13.72v-.001Zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405-3.362 5.69-10.73 7.565-16.4 4.187h-.006Z" fill="#1ED760"></path>
                                  </svg>
                                </span>
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Spotify"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="gap-1.5 inline-flex items-center text-muted-foreground text-sm">
                                <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                                  <path d="M3 10h18"></path>
                                </svg>
                                {"29 Jul, 2025"}
                              </span>
                            </td>
                            <td className="align-middle pr-(--frame-panel-px) px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Classic Retro Style" aria-haspopup="menu" id="base-ui-_r_1m_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-004">
                            <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_1o_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0">
                                <div className="bg-muted overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0">
                                  <img className="h-10 object-cover w-10" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=120&h=120&q=80" />
                                </div>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-4" href="#product-ae-4567">
                                    {"Adventure Explorer"}
                                  </a>
                                  <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                    <span>
                                      {"SKU"}
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="font-mono truncate">
                                      {"AE-4567"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-3 items-center">
                                <Tooltip>
                                <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_1s_" baseUiTooltipTrigger="">
                                  <span className="flex shrink-0 text-muted-foreground">
                                    <svg className="lucide lucide-layers size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                                      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                                      <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                                      <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                                    </svg>
                                  </span>
                                  <span className="font-medium">
                                    {"29"}
                                  </span>
                                </TooltipTrigger>
                                </Tooltip>
                                <Tooltip>
                                <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_1u_" baseUiTooltipTrigger="">
                                  <span className="flex shrink-0 text-emerald-600">
                                    <svg className="lucide lucide-arrow-down size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                      <path d="M12 5v14"></path>
                                      <path d="m19 12-7 7-7-7"></path>
                                    </svg>
                                  </span>
                                  <span className="font-medium">
                                    {"7"}
                                  </span>
                                </TooltipTrigger>
                                </Tooltip>
                                <Tooltip>
                                <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_20_" baseUiTooltipTrigger="">
                                  <span className="flex shrink-0 text-destructive">
                                    <svg className="lucide lucide-arrow-up size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                      <path d="m5 12 7-7 7 7"></path>
                                      <path d="M12 19V5"></path>
                                    </svg>
                                  </span>
                                  <span className="font-medium">
                                    {"2"}
                                  </span>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-destructive-foreground text-xs transition-shadow">
                                <svg className="lucide lucide-trending-down size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                                  <path d="M16 17h6v-6"></path>
                                  <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                                </svg>
                                {"-5"}
                              </Badge>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"$135.00"}
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="text-foreground text-sm">
                                {"Adventure"}
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-2.5 items-center min-w-0">
                                <span className="bg-sky-500 inline-flex items-center justify-center rounded-md shrink-0 size-7" aria-hidden="true">
                                  <svg className="brightness-0 h-3 invert w-5" aria-hidden="true" viewBox="0 0 64 40">
                                    <text x={1} y={29} fill="#0061D5" fontFamily="Arial, Helvetica, sans-serif" fontSize="30" fontWeight="700" letter-spacing="0">
                                      {"box"}
                                    </text>
                                  </svg>
                                </span>
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Box"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="gap-1.5 inline-flex items-center text-muted-foreground text-sm">
                                <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                                  <path d="M3 10h18"></path>
                                </svg>
                                {"28 Jul, 2025"}
                              </span>
                            </td>
                            <td className="align-middle pr-(--frame-panel-px) px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Adventure Explorer" aria-haspopup="menu" id="base-ui-_r_24_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-005">
                            <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_26_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0">
                                <div className="bg-muted overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0">
                                  <img className="h-10 object-cover w-10" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=120&h=120&q=80" />
                                </div>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-4" href="#product-ms-7890">
                                    {"Modern Street Elite"}
                                  </a>
                                  <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                    <span>
                                      {"SKU"}
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="font-mono truncate">
                                      {"MS-7890"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-3 items-center">
                                <Tooltip>
                                <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_2a_" baseUiTooltipTrigger="">
                                  <span className="flex shrink-0 text-muted-foreground">
                                    <svg className="lucide lucide-layers size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                                      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                                      <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                                      <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                                    </svg>
                                  </span>
                                  <span className="font-medium">
                                    {"91"}
                                  </span>
                                </TooltipTrigger>
                                </Tooltip>
                                <Tooltip>
                                <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_2c_" baseUiTooltipTrigger="">
                                  <span className="flex shrink-0 text-emerald-600">
                                    <svg className="lucide lucide-arrow-down size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                      <path d="M12 5v14"></path>
                                      <path d="m19 12-7 7-7-7"></path>
                                    </svg>
                                  </span>
                                  <span className="font-medium">
                                    {"28"}
                                  </span>
                                </TooltipTrigger>
                                </Tooltip>
                                <Tooltip>
                                <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_2e_" baseUiTooltipTrigger="">
                                  <span className="flex shrink-0 text-destructive">
                                    <svg className="lucide lucide-arrow-up size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                      <path d="m5 12 7-7 7 7"></path>
                                      <path d="M12 19V5"></path>
                                    </svg>
                                  </span>
                                  <span className="font-medium">
                                    {"9"}
                                  </span>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                                <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                  <path d="M16 7h6v6"></path>
                                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                </svg>
                                {"+51"}
                              </Badge>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                {"$175.00"}
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="text-foreground text-sm">
                                {"Modern"}
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-2.5 items-center min-w-0">
                                <span className="bg-teal-500 inline-flex items-center justify-center rounded-md shrink-0 size-7" aria-hidden="true">
                                  <svg className="brightness-0 invert size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                                    <g clipPath="url(#coinholder-clip)">
                                      <path opacity={0.35} d="M12.2926 13.2856C11.5667 13.2856 10.8408 13.0005 10.2901 12.4823L3.50646 5.95223C2.63035 5.09711 2.32997 3.77556 2.75551 2.60948C3.20608 1.4434 4.28245 0.666016 5.50901 0.666016H12.3177C13.9447 0.666016 15.2464 2.0394 15.2464 3.69782V10.2279C15.2464 11.4458 14.5455 12.5341 13.4942 13.0264C13.0936 13.1819 12.6931 13.2856 12.2926 13.2856Z" fill="#7960ED"></path>
                                      <path d="M8.68839 15.3321C7.9124 15.3321 7.16145 15.0211 6.61075 14.4511L1.77961 9.47579C1.05369 8.69841 0.753308 7.61007 1.02866 6.57355C1.27898 5.53704 2.05496 4.70783 3.0312 4.39687L9.88991 2.27202C10.9162 1.96107 12.0426 2.24611 12.8186 3.02349C13.5946 3.82679 13.87 4.96696 13.5446 6.0553L11.492 13.1554C11.1916 14.1919 10.3906 14.9693 9.38928 15.2284C9.16399 15.3062 8.91368 15.3321 8.68839 15.3321Z" fill="#7960ED"></path>
                                    </g>
                                    <defs>
                                      <clippath id="coinholder-clip">
                                        <rect width={14.6667} height={14.6667} fill="white" transform="translate(0.666016 0.666016)"></rect>
                                      </clippath>
                                    </defs>
                                  </svg>
                                </span>
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Coinholder"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="gap-1.5 inline-flex items-center text-muted-foreground text-sm">
                                <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                                  <path d="M3 10h18"></path>
                                </svg>
                                {"27 Jul, 2025"}
                              </span>
                            </td>
                            <td className="align-middle pr-(--frame-panel-px) px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Modern Street Elite" aria-haspopup="menu" id="base-ui-_r_2i_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
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
                  <SelectTrigger className="min-w-16" type="button" tabIndex={0} id="base-ui-_r_2k_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                    <SelectValue>
                      {"5"}
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      {"▼"}
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_2k_-hidden-input" tabIndex={-1} aria-hidden="true" value="5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                  <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                    {"1 - 5 of 25"}
                  </div>
                  <div className="flex flex-wrap gap-1 items-center justify-center order-1 sm:flex-nowrap">
                    <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" disabled="" tabIndex={0} disabled>
                      <span className="sr-only">
                        {"Go to previous page"}
                      </span>
                      <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                        <path d="m15 18-6-6 6-6"></path>
                      </svg>
                    </Button>
                    <Button className="bg-accent px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-accent-foreground text-sm" type="button" tabIndex={0} aria-label="Go to page 1" aria-current="page">
                      {"1"}
                    </Button>
                    <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Go to page 2">
                      {"2"}
                    </Button>
                    <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Go to page 3">
                      {"3"}
                    </Button>
                    <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Go to page 4">
                      {"4"}
                    </Button>
                    <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Go to page 5">
                      {"5"}
                    </Button>
                    <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" tabIndex={0}>
                      <span className="sr-only">
                        {"Go to next page"}
                      </span>
                      <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
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
      </div>
    </div>
  )
}
